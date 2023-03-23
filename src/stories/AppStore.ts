import { makeAutoObservable, runInAction } from "mobx"
import Config from "./config.json"
import {
    Cart,
    CartItem,
    ELLCommerce,
    Product,
    ProductVariantQuantity,
    Variant,
    CouponCode
} from "@pearson-ell/commerce-sdk"

const COUNTRY_ISO = "GB"

export interface Features {
    disablePopup: boolean
}

enum storageKeysEnum {
    ShoppingCartId = "shopping-cart-id",
    Features = "features",
}

export class AppStore {
    private ellCommerce: ELLCommerce
    cart?: Cart
    products: Product[] = []
    features: Features = { disablePopup: true }
    isBusy = false

    constructor() {
        makeAutoObservable(this)
        this.ellCommerce = ELLCommerce.getInstance({
            getTokenFunction: () => this.fakeToken(),
            essServicesUri: "https://api-ecommerce.ignite-dev.com/",
            defaultCountryISO2: COUNTRY_ISO,
        })
    }

    async init(count?: number) {
        runInAction(() => {
            this.isBusy = true
        })
        this.products = await this.getProducts()
        this.products = this.products.filter(
            (p) => p.id !== 140 && p.id !== 142
        )
        console.log("Products:", this.products)
        this.cart = await this.getCart()

        for (const [index, item] of this.products.entries()) {
            await this.addToCart(item)
            if (count && index + 1 >= count) {
                break
            }
        }

        runInAction(() => {
            this.isBusy = false
        })
    }

    async getProducts(): Promise<Product[]> {
        return await this.ellCommerce.ProductService().getProducts("Barracuda")
    }

    restoreFeatures() {
        const features = sessionStorage.getItem(storageKeysEnum.Features)

        if (features) {
            this.features = JSON.parse(features)
        }
    }

    setFeatures(key: keyof Features, value: Features[keyof Features]) {
        this.features[key] = value
        sessionStorage.setItem(
            storageKeysEnum.Features,
            JSON.stringify(this.features)
        )
    }

    async addToCart(product: Product, variant?: Variant) {
        let newCart: any = null
        const service = this.ellCommerce.CartService()
        try {
            const cartItem = new ProductVariantQuantity()
            cartItem.quantity = 1
            cartItem.productId = product.id
            cartItem.variantId = variant ? variant.id : 0
            if (this.cart) {
                const updateItem = this.cart.items.find(
                    (i) => i.productId === product.id
                )
                if (
                    updateItem &&
                    updateItem.quantity < updateItem.maxPurchaseQuantity
                ) {
                    cartItem.quantity = updateItem.quantity + 1
                    newCart = await service.updateCartItem(
                        this.cart.id,
                        updateItem.id,
                        cartItem
                    )
                } else {
                    newCart = await service.addCartItem(this.cart.id, cartItem)
                }
            } else {
                newCart = await service.createCart(this.fakeCustomer(), [
                    cartItem,
                ])
            }
            this.cart = newCart
            sessionStorage.setItem(storageKeysEnum.ShoppingCartId, newCart.id)
        } catch (error) {
            alert(error)
        }
    }

    async getCart(): Promise<Cart | undefined> {
        const cart = await this.ellCommerce
            .CartService()
            .getCartByUser(this.fakeCustomer())
        if (cart) {
            await this.clearCart(cart.id)
        }

        return await this.ellCommerce
            .CartService()
            .createCart(this.fakeCustomer(), [])
    }

    async clearCart(cartId: string) {
        await this.ellCommerce.CartService().deleteCart(cartId)
        this.cart = undefined
        sessionStorage.removeItem(storageKeysEnum.ShoppingCartId)
    }

    async getCheckoutUrl(cartId: string): Promise<string> {
        return await this.ellCommerce
            .CartService()
            .getCheckoutUrl(this.fakeCustomer(), cartId)
    }

    async deleteCartItem(cartId: string, itemId: string) {
        const cart = await this.ellCommerce
            .CartService()
            .deleteCartItem(cartId, itemId)
        this.cart = cart
    }

    async updateCartItem(item: CartItem) {
        if (!this.cart) {
            return
        }
        const cartItem = new ProductVariantQuantity()
        cartItem.quantity = item.quantity
        cartItem.productId = item.productId
        cartItem.variantId = item.variantId
        const cart = await this.ellCommerce
            .CartService()
            .updateCartItem(this.cart.id, item.id, cartItem)
        this.cart = cart
    }

    async applyCouponCode(cartId: string, coupon: CouponCode): Promise<Cart> {
        const response = await this.ellCommerce
            .CartService()
            .applyCoupon(cartId, coupon)

        return response
    }

    async withdrawCouponCode(cartId: string, coupon: string): Promise<Cart> {
        const response = await this.ellCommerce
            .CartService()
            .removeCoupon(cartId, coupon)

        return response
    }

    fakeToken(): string {
        return Config.token
    }

    fakeCustomer(): string {
        return Config.userId
    }
}
