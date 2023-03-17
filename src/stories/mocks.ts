export const getDefaultMocks = () => {
    return {
        id: "f67f73cb-7170-47cc-9091-70293391da81",
        createdTime: "2023-02-28T06:46:39+00:00",
        updatedTime: "2023-02-28T06:48:13+00:00",
        discountAmount: 0,
        cartAmount: 94_780.19,
        taxIncluded: false,
        items: [
            {
                quantity: 1,
                imageUrl:
                    "data:image/png;base64,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",
                salePrice: 1000.2,
                totalSalePrice: 1000.2,
                originalPrice: 1000.2,
                totalOriginalPrice: 1000.2,
                variantId: 85,
                productId: 120,
                name: "English 4 Skills Full Test",
                shortDescription:
                    "<p style='color:black;font-size:12px; line-height: 1.1;margin: 0; padding: 0;'>Find out whether you’re ready for PTE Academic with our Official Scored Practice Tests. </p>",
                description:
                    '<p><span style="font-size: 10pt;">Get a personalized Barracuda English 4 Skills Full Test certificate and a Credly badge to add onto your LinkedIn profile</span></p>\n<p><span style="font-size: 14pt;">Measures your English proficiency on the following skills:</span></p>\n<p><span style="font-size: 12pt;"><span style="background-color: #ffcc00; padding: 2px 8px; border-radius: 12px;">1</span> Speaking</span></p>\n<p><span style="font-size: 12pt;"><span style="background-color: #ffcc00; padding: 2px 8px; border-radius: 12px;">2</span> Listening</span></p>\n<p><span style="font-size: 12pt;"><span style="background-color: #ffcc00; padding: 2px 8px; border-radius: 12px;">3</span> Reading</span></p>\n<p><span style="font-size: 12pt;"><span style="background-color: #ffcc00; padding: 2px 8px; border-radius: 12px;">4</span> Writing</span></p>',
                id: "b959b30a-b2bd-4b7e-b7fc-6e8906f69305",
                sku: "",
                minPurchaseQuantity: 1,
                maxPurchaseQuantity: 1,
                type: 0,
            },
            {
                quantity: 1,
                imageUrl:
                    "https://cdn11.bigcommerce.com/s-12tro8kxte/products/119/images/378/Property_1Reading_and_writing__88467.1667492698.220.290.png?c=1",
                salePrice: 29.99,
                totalSalePrice: 29.99,
                originalPrice: 29.99,
                totalOriginalPrice: 29.99,
                variantId: 84,
                productId: 119,
                name: "Reading + Writing Module",
                shortDescription:
                    "<p style='color:black;font-size:12px; line-height: 1.1;margin: 0; padding: 0;'>All our test prep together to give you the very best support for success.</p><p style='color:black; font-size:12px; line-height: 1.1;'>Includes:</p>\n<ul style='color:black; font-size:12px; line-height: 1.1;margin: 0;'><li>5 tests</li><li>PTE Academic Question Bank</li><li>The Official Guide to PTE Academic</li></ul>",
                description:
                    '<p><span style="font-size: 14pt;">Measures your English proficiency on the following skills:</span></p>\n<p><span style="font-size: 12pt;"><span style="background-color: #ffcc00; padding: 2px 8px; border-radius: 12px;">1</span> Reading</span></p>\n<p><span style="font-size: 12pt;"><span style="background-color: #ffcc00; padding: 2px 8px; border-radius: 12px;">2</span> Writing</span></p>',
                id: "25c01967-ddd7-4214-b1b6-b765d8f4da03",
                sku: "",
                minPurchaseQuantity: 1,
                maxPurchaseQuantity: 3,
                type: 0,
            },
            {
                quantity: 1,
                imageUrl:
                    "https://cdn11.bigcommerce.com/r-4b20dad619e29ebf3490f7f35369a8220637ce48/themes/ClassicNext/images/ProductDefault.gif",
                salePrice: 62_500,
                totalSalePrice: 62_500,
                originalPrice: 62_500,
                totalOriginalPrice: 62_500,
                variantId: 103,
                productId: 140,
                name: "123456789 123456789 123456789 123456789 1234567 89gg",
                shortDescription:
                    '<p style="display: flex; flex-wrap: nowrap;color:black;font-size:12px; line-height: 1.1;margin: 0; padding: 5px 0;"><span style="margin-right: 8px;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none"><path d="M9 12C8.71667 12 8.47917 11.9042 8.2875 11.7125C8.09583 11.5208 8 11.2833 8 11C8 10.7167 8.09583 10.4792 8.2875 10.2875C8.47917 10.0958 8.71667 10 9 10C9.28333 10 9.52083 10.0958 9.7125 10.2875C9.90417 10.4792 10 10.7167 10 11C10 11.2833 9.90417 11.5208 9.7125 11.7125C9.52083 11.9042 9.28333 12 9 12ZM5 12C4.71667 12 4.47917 11.9042 4.2875 11.7125C4.09583 11.5208 4 11.2833 4 11C4 10.7167 4.09583 10.4792 4.2875 10.2875C4.47917 10.0958 4.71667 10 5 10C5.28333 10 5.52083 10.0958 5.7125 10.2875C5.90417 10.4792 6 10.7167 6 11C6 11.2833 5.90417 11.5208 5.7125 11.7125C5.52083 11.9042 5.28333 12 5 12ZM13 12C12.7167 12 12.4792 11.9042 12.2875 11.7125C12.0958 11.5208 12 11.2833 12 11C12 10.7167 12.0958 10.4792 12.2875 10.2875C12.4792 10.0958 12.7167 10 13 10C13.2833 10 13.5208 10.0958 13.7125 10.2875C13.9042 10.4792 14 10.7167 14 11C14 11.2833 13.9042 11.5208 13.7125 11.7125C13.5208 11.9042 13.2833 12 13 12ZM9 16C8.71667 16 8.47917 15.9042 8.2875 15.7125C8.09583 15.5208 8 15.2833 8 15C8 14.7167 8.09583 14.4792 8.2875 14.2875C8.47917 14.0958 8.71667 14 9 14C9.28333 14 9.52083 14.0958 9.7125 14.2875C9.90417 14.4792 10 14.7167 10 15C10 15.2833 9.90417 15.5208 9.7125 15.7125C9.52083 15.9042 9.28333 16 9 16ZM5 16C4.71667 16 4.47917 15.9042 4.2875 15.7125C4.09583 15.5208 4 15.2833 4 15C4 14.7167 4.09583 14.4792 4.2875 14.2875C4.47917 14.0958 4.71667 14 5 14C5.28333 14 5.52083 14.0958 5.7125 14.2875C5.90417 14.4792 6 14.7167 6 15C6 15.2833 5.90417 15.5208 5.7125 15.7125C5.52083 15.9042 5.28333 16 5 16ZM13 16C12.7167 16 12.4792 15.9042 12.2875 15.7125C12.0958 15.5208 12 15.2833 12 15C12 14.7167 12.0958 14.4792 12.2875 14.2875C12.4792 14.0958 12.7167 14 13 14C13.2833 14 13.5208 14.0958 13.7125 14.2875C13.9042 14.4792 14 14.7167 14 15C14 15.2833 13.9042 15.5208 13.7125 15.7125C13.5208 15.9042 13.2833 16 13 16ZM1.5 20C1.1 20 0.75 19.85 0.45 19.55C0.15 19.25 0 18.9 0 18.5V3C0 2.6 0.15 2.25 0.45 1.95C0.75 1.65 1.1 1.5 1.5 1.5H3.125V0.8C3.125 0.566667 3.2 0.375 3.35 0.225C3.5 0.0749999 3.69167 0 3.925 0C4.15833 0 4.35417 0.0749999 4.5125 0.225C4.67083 0.375 4.75 0.566667 4.75 0.8V1.5H13.25V0.8C13.25 0.566667 13.325 0.375 13.475 0.225C13.625 0.0749999 13.8167 0 14.05 0C14.2833 0 14.4792 0.0749999 14.6375 0.225C14.7958 0.375 14.875 0.566667 14.875 0.8V1.5H16.5C16.9 1.5 17.25 1.65 17.55 1.95C17.85 2.25 18 2.6 18 3V18.5C18 18.9 17.85 19.25 17.55 19.55C17.25 19.85 16.9 20 16.5 20H1.5ZM1.5 18.5H16.5V7.75H1.5V18.5ZM1.5 6.25H16.5V3H1.5V6.25ZM1.5 6.25V3V6.25Z" fill="#151515"/></svg></span><span>Monday, 19 December 2022</span></p><p style="display: flex; flex-wrap: nowrap;color:black;font-size:12px; line-height: 1.1;margin: 0; padding: 5px 0;"><span style="margin-right: 8px;"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="20" viewBox="0 0 14 20" fill="none"><path d="M7 4.5C7.66304 4.5 8.29893 4.76339 8.76777 5.23223C9.23661 5.70107 9.5 6.33696 9.5 7C9.5 7.3283 9.43534 7.65339 9.3097 7.95671C9.18406 8.26002 8.99991 8.53562 8.76777 8.76777C8.53562 8.99991 8.26002 9.18406 7.95671 9.3097C7.65339 9.43534 7.3283 9.5 7 9.5C6.33696 9.5 5.70107 9.23661 5.23223 8.76777C4.76339 8.29893 4.5 7.66304 4.5 7C4.5 6.33696 4.76339 5.70107 5.23223 5.23223C5.70107 4.76339 6.33696 4.5 7 4.5ZM7 0C8.85652 0 10.637 0.737498 11.9497 2.05025C13.2625 3.36301 14 5.14348 14 7C14 12.25 7 20 7 20C7 20 0 12.25 0 7C0 5.14348 0.737498 3.36301 2.05025 2.05025C3.36301 0.737498 5.14348 0 7 0ZM7 2C5.67392 2 4.40215 2.52678 3.46447 3.46447C2.52678 4.40215 2 5.67392 2 7C2 8 2 10 7 16.71C12 10 12 8 12 7C12 5.67392 11.4732 4.40215 10.5355 3.46447C9.59785 2.52678 8.32608 2 7 2Z" fill="#151515"/></svg></span><span>Pearson Professional Centers 51 Cuppage Rd, #05-02/03/04 Singapore 229469</span></p><p style="display: flex; flex-wrap: nowrap;color:black;font-size:12px; line-height: 1.1;margin: 0; padding: 5px 0;"><span  style="margin-right: 8px;"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z" stroke="#151515" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span>135 minutes</span></p>',
                description:
                    '<p><span style="font-size: 14pt;">Measures your English proficiency on the following skills:</span></p>\n<p><span style="font-size: 12pt;"><span style="background-color: #ffcc00; padding: 2px 8px; border-radius: 12px;">1</span> Reading</span></p>\n<p><span style="font-size: 12pt;"><span style="background-color: #ffcc00; padding: 2px 8px; border-radius: 12px;">2</span> Writing</span></p>',
                id: "33f2dbdb-14d6-4afd-acea-cd823d0a0b78",
                sku: "",
                minPurchaseQuantity: 1,
                maxPurchaseQuantity: 3,
                type: 1,
            },
        ],
        locale: "en-US",
        coupons: [],
        baseAmount: 63_530.19,
        preTaxCartAmount: 63_530.19,
        currency: {
            isoCode: null,
            currencyCode: "EUR",
            symbol: "€",
            symbolPosition: 0,
            decimalToken: ".",
            thousandsToken: ",",
            decimalPlaces: 2,
        },
        email: "ddd.ddd@ddd.ddd",
    }
}

export const getRecommendedProductMocks = () => {
    return {
        items: [
            {
                images: [
                    {
                        imageUrl:
                            "https://cdn11.bigcommerce.com/s-12tro8kxte/products/121/images/380/logo__49359__42513.1667493278.386.513.jpg?c=1&_gl=1*1l5ngse*_ga*NDkyNDgxODE3LjE2NzUwOTAzMTY.*_ga_WS2VZYPC6G*MTY3NzIzNDEwMC4xMy4xLjE2NzcyMzQ1MjAuNDIuMC4w&_ga=2.175560929.2118956873.1677234101-492481817.1675090316",
                        isDefault: false,
                        isThumbnail: true,
                        altText: "",
                    },
                ],
                currency: {
                    isoCode: null,
                    currencyCode: "EUR",
                    symbol: "€",
                    symbolPosition: 0,
                    decimalToken: ".",
                    thousandsToken: ",",
                    decimalPlaces: 2,
                },
                basePrice: 47,
                salePrice: 47,
                price: 47,
                id: 141,
                name: "Scored Practice Test",
                shortDescription:
                    "<p style='color:black;font-size:12px; line-height: 1.1;margin: 0; padding: 0;'>Find out whether you’re ready for PTE Academic with our Official Scored Practice Tests. </p>",
                description:
                    "<p style='color:black;font-size:12px; line-height: 1.1;'>The Question Bank helps you build your confidence and develop your English skills.</p><p style='color:black;font-size:12px; line-height: 1.1;'>With 300 questions and answers broken down by each PTE Academic task type, you can work at your own pace to practice, and target the skills you most want to improve.</p><p style='color:black;font-size:12px; line-height: 1.1;'>How It helps you</p><ul style='color:black;font-size:12px; line-height: 1.1;'><li>300 authentically written PTE Academic questions and answers to build your skills and strengthen your performance</li><li>Each question is timed and formatted to simulate a test experience</li><li>Easy navigation gives you the flexibility to move between the questions you want to focus on</li><li>Answer explanations help you to understand the reasons behind each answer</li><li>Sample audio or written answers to help you learn what an effective answer is and adjust your own responses</li></ul>",
                sku: "",
                minPurchaseQuantity: 1,
                maxPurchaseQuantity: 3,
            },
            {
                images: [
                    {
                        imageUrl:
                            "https://cdn11.bigcommerce.com/s-12tro8kxte/products/111/images/371/smithjournal1.1654040855.220.290.jpg?c=1",
                        isDefault: false,
                        isThumbnail: true,
                        altText: "",
                    },
                ],
                currency: {
                    isoCode: null,
                    currencyCode: "EUR",
                    symbol: "€",
                    symbolPosition: 0,
                    decimalToken: ".",
                    thousandsToken: ",",
                    decimalPlaces: 2,
                },
                basePrice: 53.23,
                salePrice: 53.23,
                price: 53.23,
                id: 121,
                name: "The Official Guide to PTE Academic",
                shortDescription:
                    "<p style='color:black;font-size:12px; line-height: 1.1;margin: 0; padding: 0;'>Our Official Guide supports you through every step of your journey as you prepare for your PTE Academic test. Find out...</p>",
                description:
                    "<p style='color:black;font-size:12px; line-height: 1.1;'>The Question Bank helps you build your confidence and develop your English skills.</p><p style='color:black;font-size:12px; line-height: 1.1;'>With 300 questions and answers broken down by each PTE Academic task type, you can work at your own pace to practice, and target the skills you most want to improve.</p><p style='color:black;font-size:12px; line-height: 1.1;'>How It helps you</p><ul style='color:black;font-size:12px; line-height: 1.1;'><li>300 authentically written PTE Academic questions and answers to build your skills and strengthen your performance</li><li>Each question is timed and formatted to simulate a test experience</li><li>Easy navigation gives you the flexibility to move between the questions you want to focus on</li><li>Answer explanations help you to understand the reasons behind each answer</li><li>Sample audio or written answers to help you learn what an effective answer is and adjust your own responses</li></ul>",
                sku: "",
                minPurchaseQuantity: 1,
                maxPurchaseQuantity: 15,
            },
            {
                images: [
                    {
                        imageUrl:
                            "https://cdn11.bigcommerce.com/s-12tro8kxte/products/121/images/380/logo__49359__42513.1667493278.386.513.jpg?c=1&_gl=1*1l5ngse*_ga*NDkyNDgxODE3LjE2NzUwOTAzMTY.*_ga_WS2VZYPC6G*MTY3NzIzNDEwMC4xMy4xLjE2NzcyMzQ1MjAuNDIuMC4w&_ga=2.175560929.2118956873.1677234101-492481817.1675090316",
                        isDefault: false,
                        isThumbnail: true,
                        altText: "",
                    },
                ],
                currency: {
                    isoCode: null,
                    currencyCode: "EUR",
                    symbol: "€",
                    symbolPosition: 0,
                    decimalToken: ".",
                    thousandsToken: ",",
                    decimalPlaces: 2,
                },
                basePrice: 26.12,
                salePrice: 26.12,
                price: 26.12,
                id: 120,
                name: "PTE Academic Question Bank",
                shortDescription:
                    "<p style='color:black;font-size:12px; line-height: 1.1;margin: 0; padding: 0;'>The Question Bank helps you build your confidence and develop your English skills.</p>",
                description:
                    "<p style='color:black;font-size:12px; line-height: 1.1;'>The Question Bank helps you build your confidence and develop your English skills.</p><p style='color:black;font-size:12px; line-height: 1.1;'>With 300 questions and answers broken down by each PTE Academic task type, you can work at your own pace to practice, and target the skills you most want to improve.</p><p style='color:black;font-size:12px; line-height: 1.1;'>How It helps you</p><ul style='color:black;font-size:12px; line-height: 1.1;'><li>300 authentically written PTE Academic questions and answers to build your skills and strengthen your performance</li><li>Each question is timed and formatted to simulate a test experience</li><li>Easy navigation gives you the flexibility to move between the questions you want to focus on</li><li>Answer explanations help you to understand the reasons behind each answer</li><li>Sample audio or written answers to help you learn what an effective answer is and adjust your own responses</li></ul>",
                sku: "",
                minPurchaseQuantity: 1,
                maxPurchaseQuantity: 3,
                variants: [
                    {
                        id: 105,
                        sku: "",
                        currency: {
                            isoCode: null,
                            currencyCode: "USD",
                            symbol: "$",
                            symbolPosition: 0,
                            decimalToken: ".",
                            thousandsToken: ",",
                            decimalPlaces: 2,
                        },
                        images: [],
                        description: "",
                        shortDescription: "",
                        shortName: "A",
                        price: 54_321,
                        basePrice: 54_321,
                        bulkPriceDiscounts: [],
                        programName: "",
                    },
                    {
                        id: 104,
                        sku: "",
                        currency: {
                            isoCode: null,
                            currencyCode: "USD",
                            symbol: "$",
                            symbolPosition: 0,
                            decimalToken: ".",
                            thousandsToken: ",",
                            decimalPlaces: 2,
                        },
                        images: [],
                        description: "",
                        shortDescription: "",
                        shortName: "B",
                        price: 54_321,
                        basePrice: 54_321,
                        bulkPriceDiscounts: [],
                        programName: "",
                    },
                    {
                        id: 103,
                        sku: "",
                        currency: {
                            isoCode: null,
                            currencyCode: "USD",
                            symbol: "$",
                            symbolPosition: 0,
                            decimalToken: ".",
                            thousandsToken: ",",
                            decimalPlaces: 2,
                        },
                        images: [],
                        description: "",
                        shortDescription: "",
                        shortName: "C",
                        price: 54_321,
                        basePrice: 54_321,
                        bulkPriceDiscounts: [],
                        programName: "",
                    },
                ],
            },
        ],
        locale: "en-US",
        email: "ddd.ddd@ddd.ddd",
    }
}

export const getModifiedDefaultMocks = () => {
    const data = getDefaultMocks()
    const images = [
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAACWCAIAAACqxMpWAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFOSURBVHhe7dAhEsMwEATBU/7/ZxlEpq5BLoNusotngHetszN77/O4rXX6/P7DM5kSmRKZEpkSmRKZEpkSmRKZEpkSmRKZEpkSmRKZEpkSmRKZEpkSmRKZEpkSmRKZEpkSmRKZEpkSmRKZEpkSmRKZEpkSmRKZEpkSmRKZEpkSmRKZEpkSmRKZEpkSmRKZEpkSmRKZEpkSmRKZEpkSmRKZEpkSmRKZEpkSmRKZEpkSmRKZEpkSmRKZEpkSmRKZEpkSmRKZEpkSmRKZEpkSmRKZEpkSmRKZEpkSmRKZEpkSmRKZEpkSmRKZEpkSmRKZEpkSmRKZEpkSmRKZEpkSmRKZEpkSmRKZEpkSmRKZEpkSmRKZEpkSmRKZEpkSmRKZEpkSmRKZEpkSmRKZEpkSmRKZEpkSmRKZEpkSmRKZEpkSmRKZEpkSmRKZEpmA75m5ABJLBCBUiEciAAAAAElFTkSuQmCC",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOoAAAA5CAIAAAC3XCCYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACtSURBVHhe7dKxDcAgAANByP47k4YUDBCJl+4ae4AfAAAA3G7u/ay19oP7zHkU++yFIPkSJl/C5EuYfAmTL2HyJUy+hMmXMPkSJl/C5EuYfAmTL2HyJUy+hMmXMPkSJl/C5EuYfAmTL2HyJUy+hMmXMPkSJl/C5EuYfAmTL2HyJUy+hMmXMPkSJl/C5EuYfAmTL2HyJUy+hMmXMPkSJl/C5EuYfAmTLwAAAPCXMV6PfANed4OPlQAAAABJRU5ErkJggg==",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAABwCAIAAABJgmMcAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEJSURBVHhe7dAxCsAgAARBzf//bCAI1oEtLGaau3oHANxi7v2stfbjjzlPxmcvEUFjgsYEjQkaEzQmaEzQmKAxQWOCxgSNCRoTNCZoTNCYoDFBY4LGBI0JGhM0JmhM0JigMUFjgsYEjQkaEzQmaEzQmKAxQWOCxgSNCRoTNCZoTNCYoDFBY4LGBI0JGhM0JmhM0JigMUFjgsYEjQkaEzQmaEzQmKAxQWOCxgSNCRoTNCZoTNCYoDFBY4LGBI0JGhM0JmhM0JigMUFjgsYEjQkaEzQmaEzQmKAxQWOCxgSNCRoTNCZoTNCYoDFBY4LGBI0JGhM0JmhM0JigMUFjgsYEjQkaExSAS4zxAtgsA87pg0b4AAAAAElFTkSuQmCC",
    ]
    return {
        ...data,
        items: data.items.map((item, idx) => ({
            ...item,
            imageUrl: images[idx],
        })),
    }
}
