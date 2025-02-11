import {request} from './request';

export function getDetail(iid){
    return request({
        url:'/detail',
        params:{
            iid
        }
    })
}
export function getRecommend(){
    return request({
        url:'/recommend',
    })
}
export class Goods{
    constructor(itemInfo,columns,services){
        this.title = itemInfo.title
		this.newPrice = itemInfo.price
		this.oldPrice = itemInfo.oldPrice
		this.discount = itemInfo.discountDesc
		this.columns = columns
		this.services = services
        
        this.desc = itemInfo.desc
        this.realPrice = itemInfo.lowNowPrice
    }
}
export class Shop{
    constructor(shopInfo,){
        this.sells = shopInfo.cSells
        this.name = shopInfo.name
        this.goods = shopInfo.cGoods
        this.logo = shopInfo.shopLogo
        this.core = shopInfo.score 
        this.fans = shopInfo.cFans
    }
}
export class GoodsParam {
	constructor(info, rule) {
		// 注: images可能没有值(某些商品有值, 某些没有值)
		this.image = info.images ? info.images[0] : '';
		this.infos = info.set;
		this.sizes = rule.tables;
	}
}