import {makeAutoObservable, runInAction} from "mobx"
import { Cart, CartItem, ELLCommerce, Product, Variant } from "ell-commerce-sdk"
import {Currency} from "ell-commerce-sdk/dist/cjs/models/Currency";

const COUNTRY_ISO = "US"

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
        this.ellCommerce = ELLCommerce.getInstance(this.fakeToken)
    }

    async init(count?: number) {
        runInAction(()=> {
            this.isBusy = true
        })
        this.products = await this.getProducts()
        this.cart = await this.getCart(this.products[0].currency)

        for (let [index, item] of this.products.entries()) {
            await this.addToCart(item)
            if (count && index +1 >= count) {
                break
            }
        }

        runInAction(()=> {
            this.isBusy = false
        })
    }

    async getProducts():Promise<Product[]> {
        return await this.ellCommerce
            .ProductService()
            .getProducts("Barracuda", "US")
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
        let newCart = null
        const service = await this.ellCommerce.CartService()
        try {
            if (this.cart) {
                const updateItem = this.cart.items.find(
                    (i) => i.productId === product.id
                )
                if (
                    updateItem &&
                    updateItem.quantity < updateItem.maxPurchaseQuantity
                ) {
                    updateItem.quantity = updateItem.quantity + 1
                    newCart = await service.updateCartItem(
                        this.cart.id,
                        updateItem,
                        COUNTRY_ISO
                    )
                } else {
                    const newItem = new CartItem(product.type)
                    newItem.quantity = 1
                    newItem.productId = product.id
                    newItem.variantId = variant ? variant.id : 0
                    newCart = await service.addCartItem(
                        this.cart.id,
                        newItem,
                        COUNTRY_ISO
                    )
                }
            } else {
                const newItem = new CartItem(product.type)
                newItem.quantity = 1
                newItem.productId = product.id
                newItem.variantId = variant ? variant.id : 0
                newCart = await service.createCart(
                    2,
                    [newItem],
                    COUNTRY_ISO,
                    product.currency
                )
            }
            this.cart = newCart
            sessionStorage.setItem(storageKeysEnum.ShoppingCartId, newCart.id)
        } catch (error) {
            alert(error)
        }
    }

    async getCart(currency: Currency): Promise<Cart | undefined> {
            return await this.ellCommerce.CartService().createCart(
                2,
                [],
                COUNTRY_ISO,
                currency
            )
    }

    async clearCart(cartId: string) {
        await this.ellCommerce.CartService().deleteCart(cartId, COUNTRY_ISO)
        this.cart = undefined
        sessionStorage.removeItem(storageKeysEnum.ShoppingCartId)
    }

    async getCheckoutUrl(cartId: string): Promise<string> {
        return await this.ellCommerce
            .CartService()
            .getCheckoutUrl(cartId, 2, COUNTRY_ISO)
    }

    async deleteCartItem(cartId: string, itemId: string) {
        const cart = await this.ellCommerce
            .CartService()
            .deleteCartItem(cartId, itemId, COUNTRY_ISO)
        this.cart = cart
    }

    async updateCartItem(item: CartItem) {
        if(!this.cart) {
            return
        }

        const cart = await this.ellCommerce
            .CartService()
            .updateCartItem(this.cart.id, item, COUNTRY_ISO)
        this.cart = cart
    }

    fakeToken(): string {
        return "abcde"
    }
}
