import {
	ADD_COUNTER,
	ADD_TO_CART
} from './mutation-type'

export default {
    addCart(context, payload) {
        return new Promise((resolve,reject)=>{
        let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
        // 判断oldProduct是否有值，有则里面的商品数量加一，没有就新添加到数组里(payload)
        if (oldProduct) {
            context.commit(ADD_COUNTER,oldProduct)
            resolve('当前商品数量加一')
        } else {
            payload.count = 1;
            context.commit(ADD_TO_CART,payload)
            resolve('添加新商品成功')   
        }
        })
    }
}
