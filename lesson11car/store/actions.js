import * as types from './mutation-types.js'

export const addtoCart=({commit},product)=>{
    if(product.inventory>0)
    {   
        commit(type.ADD_TO_CART,{
            id:product.id
        })
    }
}