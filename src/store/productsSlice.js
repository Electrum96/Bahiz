import {makeAutoObservable} from 'mobx';
import products from '../data/foodList/products';
class ProductSlice {
  constructor() {
    makeAutoObservable(this);
  }

  productListAll = products;

  addBasket = id => {
    const item = this.productListAll.find(product => product.id === id);
    item.inBasket = true;
  };

  decrement = id => {
    const item = this.productListAll.find(product => product.id === id);
    item.count -= 1;
  };

  increment = id => {
    const item = this.productListAll.find(product => product.id === id);
    item.count += 1;
  };


  get basketList() {
    return this.productListAll.filter(product => product.inBasket === true);
  }

  get totalPrice() {
    return this.basketList.reduce(
      (acc, item) => acc + item.count * item.price,
      0,
    );
  }
}

export default new ProductSlice();
