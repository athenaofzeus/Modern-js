/* const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
]; */


const getItems = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json';

const getBaskItems = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/getBasket.json';


function service(url, callback) {
    xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();
    xhr.onload = () => {
        callback(JSON.parse(xhr.response))
    }
}


class GoodsItem {
    constructor({ product_name = 'unknown', price = 0 }) {
        this.product_name = product_name;
        this.price = price;
    }
    render() {
        let strHtml = `<div class="goods-item"><h3>${this.product_name}</h3><p>${this.price}</p></div>`;
        return document.querySelector('.goods-list').insertAdjacentHTML('beforeend', strHtml);
    }
}


class GoodsList {
    list = [];
    fetchGoods(callback) {
        service(getItems, (data) => {
            this.list = data;
            callback()
        });
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
goodsList.fetchGoods(() => goodsList.render());
const summ = goodsList.sumCounter();



/* class BasketItem {
    changeNumber() {
        //+ / - one more item
    }
    delete() {
        //delete item out of the basket
    }
} */


class BasketList {
    prodList = [];
    fetchBaskItems(callback) {
        service(getBaskItems, (data) => {
            this.prodList = data;

            callback()
        });
    }
    listOfGoods() {
        this.contents = this.prodList.contents.forEach(item => item.product_name);
    }
    /* countSum() {
        // SumFunc
    } */
}
const basket = new BasketList();
basket.fetchBaskItems(() => {
    basket.listOfGoods();
});