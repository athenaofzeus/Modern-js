const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
];


class GoodsItem {
    constructor({ title = 'unknown', price = 0 }) {
        this.title = title;
        this.price = price;
    }
    render() {
        let strHtml = `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p></div>`;
        return document.querySelector('.goods-list').insertAdjacentHTML('beforeend', strHtml);
    }
}


class GoodsList {
    constructor() {
        this.list = [];
    }
    fetchGoods() {
        this.list = goods;
    }
    render() {
        this.list.forEach(good => {
            const goodItem = new GoodsItem(good);
            return goodItem.render();
        });
    }
    sumCounter() {
        const sumProd = this.list.reduce((sum, current) => sum + current.price, 0);
        return sumProd;
    }
}


const goodsList = new GoodsList();
goodsList.fetchGoods();
goodsList.render();
const summ = goodsList.sumCounter();


class BasketItem {
    changeNumber() {
        //+ / - one more item
    }
    delete() {
        //delete item out of the basket
    }
}


class BasketList {
    constructor() {
        this.prodList = [];
    }
    countGoods() {
        let num = this.prodList.length;
        return num;
    }
    countSum() {
        // SumFunc
    }
}
const numGoods = new BasketList();
numGoods.countGoods();