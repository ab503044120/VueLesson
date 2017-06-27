export const carProducts = state => {
    return state.cart.added.map(({ id, quatity }) => {
        const product = state.products.all.find(p => p.id === id)
        return {
            title: product.title,
            price: product.price,
            quatity
        }
    })
}