import { CurrencySymbolPosition } from "ell-commerce-sdk"

type Config = {
    position: CurrencySymbolPosition, 
    decimalToken: string; 
    thousandToken: string; 
    decimalPlaces: number;
}

export const mockConfig = {
    position: 0,
    decimalToken: ".",
    thousandToken: ",",
    decimalPlaces: 2,
}

const addThousandToken = (priceStr:string, token:string) => {
    const lastIndex = priceStr.length - 1;
    return priceStr
            .split("")
            .reverse()
            .map((it, i) => {
                if((i + 1) % 3 === 0 && i !== lastIndex) {
                    return `${token}${it}`;
                }
                return `${it}`;
            })
            .reverse()
            .join("");
}

export const formatPrice = (config: Config, currencySymbol: string,  price?: number | string) => {
    if (!price) {
        return ""
    }
    if (typeof price === "string") {
        price = Number.parseFloat(price)
    }
    if (Number.isNaN(price)) {
        return ""
    }

    const parts = price.toFixed(config.decimalPlaces).split(".")
    const formattedFirstPart = addThousandToken(parts[0], config.thousandToken);
    const formattedPrice = `${formattedFirstPart}${config.decimalToken}${parts[1]}`

    return config.position === CurrencySymbolPosition.Right
        ? `${formattedPrice}${currencySymbol}`
        : `${currencySymbol}${formattedPrice}`
}