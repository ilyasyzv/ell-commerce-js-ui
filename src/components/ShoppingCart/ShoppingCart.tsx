import React, { useEffect, useState } from "react"
import { Cart, CartItem } from "@pearson-ell/commerce-sdk"
import { StyledShoppingCart } from "./ShoppingCart.parts"

export interface IShoopingCartFeatures {
    disablePopup: boolean
}

export interface IShoppingCartProps {
    cart?: Cart
    features?: IShoopingCartFeatures
    onOpenCart: (carId: string | undefined) => void
    onClearCart: (cartId: string) => void
    onCheckout: (cartId: string) => void
}

export const ShoppingCart: React.FunctionComponent<IShoppingCartProps> = (
    props: IShoppingCartProps
) => {
    const [itemsCount, setItemsCount] = useState(0)
    const [showPopup, setShowPopup] = useState(false)

    useEffect(() => {
        const windowClickListener = (event: MouseEvent) => {
            const target = event.target as HTMLElement
            if (!target.closest(".ell-commerce-cart") && showPopup) {
                setShowPopup(false)
            }
        }

        window.addEventListener("mousedown", windowClickListener)
        return () => {
            window.removeEventListener("mousedown", windowClickListener)
        }
    })

    useEffect(() => {
        if (props.cart) {
            let c = 0
            for (const i of props.cart.items) c += i.quantity
            setItemsCount(c)
        } else {
            setItemsCount(0)
        }
    }, [props.cart])

    const togglePopup = async (e: React.MouseEvent<HTMLDivElement>) => {
        if (props.features?.disablePopup) {
            await props.onOpenCart(props.cart?.id)
        } else {
            if (!showPopup) {
                await props.onOpenCart(props.cart?.id)
            }
            setShowPopup(!showPopup)
        }

        e.stopPropagation()
    }

    const onClearCart = (e: React.MouseEvent<HTMLButtonElement>) => {
        props.onClearCart(props.cart?.id as string)
        e.stopPropagation()
    }

    const onCheckout = (e: React.MouseEvent<HTMLButtonElement>) => {
        props.onCheckout(props.cart?.id as string)
        setShowPopup(false)
        e.stopPropagation()
    }

    return (
        <StyledShoppingCart>
            <div onClick={togglePopup}>
                <i className="far fa-shopping-cart"></i>
                {itemsCount > 0 && (
                    <div className="total-items">{itemsCount}</div>
                )}
            </div>
            {showPopup && !props.features?.disablePopup && (
                <div className="items-popup">
                    {itemsCount === 0 && <span>Your cart is empty</span>}
                    {itemsCount > 0 && (
                        <div className="item-popup-container">
                            <div className="checkout-row">
                                <span>
                                    Total ({props.cart?.currency.currencyCode}){" "}
                                    {props.cart?.currency.symbol}
                                    {props.cart?.cartAmount}
                                </span>
                                <button onClick={onCheckout}>
                                    Checkout&nbsp;&nbsp;
                                    <i className="far fa-cash-register"></i>
                                </button>
                            </div>
                            <button
                                className="clear-cart-button"
                                onClick={onClearCart}
                            >
                                Clear cart&nbsp;&nbsp;
                                <i className="far fa-trash"></i>
                            </button>
                            <div className="items-list-container">
                                {props.cart?.items.map((it: CartItem) => {
                                    return (
                                        <div key={it.id}>
                                            <span>{`${it.quantity} x ${it.name}`}</span>
                                            <span>
                                                {props.cart?.currency.symbol}
                                                {it.originalPrice}
                                            </span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </StyledShoppingCart>
    )
}
