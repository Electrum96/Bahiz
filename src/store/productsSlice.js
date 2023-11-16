import { makeAutoObservable } from "mobx";
import products from "../data/foodList/products";
class ProductSlice {
    constructor() {
        makeAutoObservable(this);
    }

    productListAll = products;

    addBasket = id => {
        this.productListAll.find((product) => product.id === id);
    }
}

export default new ProductSlice();