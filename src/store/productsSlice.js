import {makeAutoObservable} from 'mobx';
import products from '../data/foodList/products';
class ProductSlice {
  constructor() {
    makeAutoObservable(this);
  }

  filter = {
    title: 'Todo',
    classTab: 'All',
  };
  productListAll = products;
  productForFilter = products;

  addBasket = id => {
    const item = this.productListAll.find(product => product.id === id);
    item.inBasket = true;
  };

  removeBasket = id => {
    const item = this.productListAll.find(product => product.id === id);
    item.inBasket = false;
    item.count = 1;
  };

  decrement = id => {
    const item = this.productListAll.find(product => product.id === id);
    if (item.count > 1) {
      item.count -= 1;
    } else {
      item.inBasket = false;
    }
  };

  increment = id => {
    const item = this.productListAll.find(product => product.id === id);
    item.count += 1;
  };

  clear = () => {
    this.basketList.forEach(elem => {
      elem.inBasket = false;
      elem.count = 1;
    });
  };

  findProduct = id => {
    const product = this.productListAll.find(product => product.id === id);

    return product ? true : false;
  };

  filterProduct = tab => {
    const filtered = this.productListAll.filter(
      i => i.classTab === tab.classTab,
    );

    if (tab.classTab === 'All') {
      this.productForFilter = this.productListAll;
    } else {
      this.productForFilter = filtered;
    }
    this.filter = tab;
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
