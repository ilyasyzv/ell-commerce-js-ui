import {MutableRefObject} from "react";
import { CurrencySymbolPosition, Currency } from "ell-commerce-sdk"

export const onInputDebounce = <F extends ((...args: any) => any)>(inputFunction: F, debounceChangeQty: number) => {
    let timeout: number = 0

    const debounced = (...args: any) => {
        clearTimeout(timeout)
        setTimeout(() => inputFunction(...args), debounceChangeQty)
    }
    
    return debounced as (...args: Parameters<F>) => ReturnType<F>
}

export const cutText = (text: string, maxLength: number) => {
    return text.length <= maxLength ? text : `${text.slice(0, maxLength)}...`;
}

export const formatPrice = (price: number, currency: Currency) => {
    const { currencyCode, decimalPlaces, decimalToken, isoCode, symbol, symbolPosition, thousandsToken } = currency;
    const roundedPrice = price.toFixed(decimalPlaces);
    const [integerPart, decimalPart] = roundedPrice.split(".");
    const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, thousandsToken);
    let formattedPrice = "";
  
    formattedPrice += formattedIntegerPart;
  
    if (decimalPlaces > 0) {
      formattedPrice += decimalToken + decimalPart.padEnd(decimalPlaces, "0");
    }
  
    if (isoCode) {
      formattedPrice += ` ${isoCode}`;
    }

    return symbolPosition === CurrencySymbolPosition.Right
        ? `${formattedPrice}${symbol}`
        : `${symbol}${formattedPrice}`
}

export const setAriaInvalidAttributes = (ref: MutableRefObject<HTMLInputElement | null>, isInvalid:boolean, errorMessageId:string) => {
  const input = ref.current;
  if(input && isInvalid) {
    input.setAttribute("aria-invalid", "true")
    input.setAttribute("aria-describedby", errorMessageId)
  } else if(input && !isInvalid) {
    input.removeAttribute("aria-invalid")
    input.removeAttribute("aria-describedby")
  }
}