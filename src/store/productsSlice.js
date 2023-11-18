import {makeAutoObservable} from 'mobx';
import products from '../data/foodList/products';
class ProductSlice {
  constructor() {
    makeAutoObservable(this);
  }

  filter = 'All';
  productListAll = products;
  productForFilter = products;

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

  findProduct = id => {
    const product = this.productListAll.find(product => product.id === id);

    return product ? true : false;
  };

  filterProduct = value => {
    const filtered = this.productListAll.filter(i => i.classTab === value);
    if (value === 'All') {
      this.productForFilter = this.productListAll;
    } else {
      this.productForFilter = filtered;
    }
    this.filter = value;
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
