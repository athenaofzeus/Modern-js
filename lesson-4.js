baseUrl = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/'
const getItems = `${baseUrl}catalogData.json`;

const getBaskItems = `${baseUrl}getBasket.json`;


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
    fetchGoods(url) {
        let promise = fetch(url);
        this.render(promise);
    }
    render(promise) {
        promise.then((resp) => {
            return resp.json()
        }).then((data) => {
            this.list = data;
            this.list.forEach(good => {
                const goodItem = new GoodsItem(good);
                goodItem.render();
            });
        });
    }
    /* sumCounter() {
        const sumProd = this.list.reduce((sum, current) => sum + current.price, 0);
        return sumProd;
    } */
}


const goodsList = new GoodsList();
goodsList.fetchGoods(getItems)
/* const summ = goodsList.sumCounter(); */


class BasketList {
    prodList = [];
    fetchBaskItems(url, callback) {
        let promise = fetch(url);
        promise.then((resp) => {
            return resp.json()
        }).then((data) => {
            this.prodList = data;
            callback();
        });
    }
    listOfGoods() {
        this.contents = this.prodList.contents.forEach(item => console.log(item.product_name));
        console.log()
    }
    /* countSum() {
    // SumFunc
    }*/
}
const basket = new BasketList();
basket.fetchBaskItems(getBaskItems, () => basket.listOfGoods());