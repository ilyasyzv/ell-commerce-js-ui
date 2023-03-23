import React, { FC, useCallback, useEffect, useMemo, useState } from "react"
import {
    CartOrderSummary,
    CartProduct,
    CartProductHeader,
    CartQty,
    EmptyCart,
} from "../components"
import { CartItem, CouponCode } from "@pearson-ell/commerce-sdk"
import styled from "styled-components"
import { observer } from "mobx-react"
import { AppStore } from "./AppStore"
import { ComponentStoryFn } from "@storybook/react/dist/ts3.9/client/preview/types-6-3"
import { Oval } from "react-loader-spinner"
export default {
    title: "BigCommerceIntegration",
}

const StyledButtons = styled.div`
    padding: 15px;
`

const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 300px;

    .header {
        grid-column-start: 1;
        grid-column-end: 3;
    }
    .products {
        padding: 15px;
    }

    .spinner-container {
        display: flex;
        justify-content: center;
        background-color: #bbb;
        position: fixed;
        top: 0px;
        bottom: 0px;
        left: 0px;
        right: 0px;
        align-items: center;
        opacity: 0.5;
        z-index: 1000;
    }
`

const Template: ComponentStoryFn<typeof CartOrderSummary> = () => {
    const [isLoading, setIsLoading] = useState(false)
    const store = useMemo(() => new AppStore(), [])

    const prepareData = useCallback(async (count?: number) => {
        setIsLoading(true)
        await store.init(count)
        setIsLoading(false)
    }, [])

    return (
        <>
            <StyledButtons>
                <button onClick={() => prepareData()} disabled={isLoading}>
                    Prepare Data for all product{" "}
                </button>
                <br />
                <button onClick={() => prepareData(1)} disabled={isLoading}>
                    1 product{" "}
                </button>
                <br />
                <button onClick={() => prepareData(3)} disabled={isLoading}>
                    3 product{" "}
                </button>
            </StyledButtons>
            <ObserverComponent store={store}></ObserverComponent>
        </>
    )
}
export const FirstStory = Template.bind({})

interface IObserverComponentsProps {
    store: AppStore
}

const ObserverComponent: FC<IObserverComponentsProps> = observer(
    ({ store }) => {
        const [isLoading, setIsLoading] = useState(false)
        const onQuantityChanged = async (
            ev: React.ChangeEvent<HTMLInputElement>,
            item: CartItem
        ) => {
            setIsLoading(true)
            item.quantity = Number.parseInt(ev.target.value)
            await store.updateCartItem(item)
            setIsLoading(false)
        }

        useEffect(() => {
            console.log("Cart Changed:", store.cart)
        }, [store.cart])

        const onCheckout = async () => {
            if (!store.cart) {
                return
            }

            setIsLoading(true)
            const checkoutUrl = await store.getCheckoutUrl(store.cart.id)
            setIsLoading(false)
            if (checkoutUrl) {
                window.open(checkoutUrl, "_self")
            }
        }
        const onDeleteItem = async (
            e:
                | React.MouseEvent<HTMLButtonElement>
                | React.KeyboardEvent<HTMLButtonElement>,
            itemId: string
        ) => {
            if (!store.cart) {
                return
            }

            setIsLoading(true)
            await store.deleteCartItem(store.cart.id, itemId)
            setIsLoading(false)
        }

        const applyCouponCode = async (cartId: string, coupon: CouponCode) => {
            return await store.applyCouponCode(cartId, coupon)
        }

        const withdrawCouponCode = async (cartId: string, coupon: string) => {
            return await store.withdrawCouponCode(cartId, coupon)
        }

        return (
            <StyledContainer>
                {!store.cart || store.cart.items.length === 0 ? (
                    <EmptyCart onBackButtonClick={() => {}}></EmptyCart>
                ) : (
                    <>
                        <CartQty
                            className="header"
                            itemsCount={store.cart?.items.length || 0}
                        ></CartQty>
                        <div className="products">
                            <CartProductHeader>
                                {store.cart.items.map((item) => (
                                    <CartProduct
                                        key={item.id}
                                        item={item}
                                        currency={store.cart.currency}
                                        onChange={onQuantityChanged}
                                        onDelete={onDeleteItem}
                                        isBusy={isLoading}
                                    />
                                ))}
                            </CartProductHeader>
                        </div>
                        <CartOrderSummary
                            cart={store.cart}
                            onCheckoutClick={onCheckout}
                            policiesLinks={[
                                { name: "Terms of Use" },
                                { name: "Privacy Policy" },
                                { name: "Refund Policy" },
                            ]}
                            policiesLinksCallback={() =>
                                console.log("Policie link clicked")
                            }
                            applyCouponCode={applyCouponCode}
                            withdrawCouponCode={withdrawCouponCode}
                        ></CartOrderSummary>
                    </>
                )}
                {(isLoading || store.isBusy) && (
                    <div className="spinner-container">
                        <Oval
                            ariaLabel="loading-indicator"
                            height={100}
                            width={100}
                            strokeWidth={10}
                            strokeWidthSecondary={3}
                            color="blue"
                            secondaryColor="white"
                        />
                    </div>
                )}
            </StyledContainer>
        )
    }
)

FirstStory.args = {}
