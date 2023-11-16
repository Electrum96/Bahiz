import { makeAutoObservable } from "mobx";
import products from "../data/foodList/products";
class ProductSlice {
    constructor() {
        makeAutoObservable(this);
    }

    productListAll = products;
    

    addBasket = id => {
        const item = this.productListAll.find((product) => product.id === id);
        item.inBasket = true;  
    }

    get basketList() {
        return this.productListAll.filter((product) => product.inBasket === true);
    }
}

export default new ProductSlice();