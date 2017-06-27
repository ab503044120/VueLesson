const _products = [
    { "id": 1, "title": "ipad 4 Mini", "price": 500.01, "inventory": 2 },
    { "id": 2, "title": "H&M T-shirt White", "price": 10.99, "inventory": 10 },
    { "id": 3, "title": "Charli XCX-sucker CD", "price": 19.99, "inventory": 5 }
]

export default {
    getProducts(cd) {
        setTimeout(() => cd(_products), 100)
    },

    //知道为什么有Random嘛  随机演示结账失败的情况
    buyProducts(products, cd, errorCb) {
        setTimeout(() => {
            (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
                ? cd()
                : errorCb()
        }, 100)
    }
}