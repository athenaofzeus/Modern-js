baseUrl = 'http://localhost:8000/';

const GET_GOODS_ITEMS = `${baseUrl}goods`;
const GET_BASKET = `${baseUrl}basket`;

function service(url) {
    return fetch(url)
        .then((res) => res.json())
}

function initialize() {

    const app = Vue.createApp({
        data() {
            return {
                items: [],
                filteredItems: [],
                search: '',
                isVisibleCart: true,
                basketList: []
            }
        },
        methods: {
            fetchGoods() {
                //функция записывает в items и filteredItems
                service(GET_GOODS_ITEMS).then((data) => {
                    this.items = data;
                    this.filteredItems = data;
                });
            },
            filterItems() {
                this.filteredItems = this.items.filter(({ product_name }) => {
                    return product_name.match(new RegExp(this.search, 'gui'))
                });
            },
            setVisionCard() {
                return this.isVisibleCart = !this.isVisibleCart
            },
            fetchBasket() {
                //функция записывает в basket
                service(GET_BASKET).then((data) => {
                    this.basketList = data;
                    console.log(this.basketList)
                });
            },
        },
        computed: {
            total() {
                const result = this.filteredItems.reduce((sum, current) => {
                    return sum + current.price;
                }, 0);
                return result;
            }
        },
        mounted() {
            //вызывается, когда все приложение отрендерилось
            this.fetchGoods();
            this.fetchBasket();
        }
    });

    const goodsItem = app.component('goods-item', {
        props: [
            'item'
        ],
        template:
            `<div class="good">
                <h3>{{ item.product_name}}</h3>
                <p>{{ item.price }}</p>
            </div>`
    });

    const basketGoods = app.component('basket-goods', {
        props: [
            'isvisiblecart',
            'elem'
        ],
        template:
            `<div class="basket" v-show="isvisiblecart">
                <h4 class="basketHead">Товары корзины</h4>
                <div class="basketItem">{{ elem.data.product_name }}, {{ elem.data.price }} * {{ elem.count }}</div>
                <div class="basketTotal"> {{elem.data.price * elem.count}}</div>
            </div>`
    });

    const custButton = app.component('cust-button', {
        template:
            `<button class="searchBtn" type="button" v-on:click="$emit('click')">
            <slot></slot>
            </button>`
    });

    const searchBlock = app.component('search-field', {
        props: ['modelValue'],
        emits: ['update:modelValue'],
        template: `
            <input
            type="text"
            class="searchText"
            placeholder="Имя товара"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            />
        `
    });

    const noData = app.component('err-mess', {
        template: `
        <div 
        class="good">
        <slot></slot>
        </div>
        `
    })

    app.mount('.root')
}

window.onload = initialize