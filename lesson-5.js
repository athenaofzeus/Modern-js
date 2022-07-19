baseUrl = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/';

const getItems = `${baseUrl}catalogData.json`;
const getBaskItems = `${baseUrl}getBasket.json`;


function initialize() {
    const app = Vue.createApp({
        data() {
            return {
                items: [],
                filteredItems: [],
                search: '',
                isVisibleCart: true
            }
        },
        methods: {
            fetchGoods(url) {
                //функция записывает в items и filteredItems
                fetch(url).then((resp) => {
                    return resp.json()
                }).then((data) => {
                    this.items = data;
                    this.filteredItems = data;
                });
            },
            filterItems() {
                this.filteredItems = this.items.filter(({ product_name }) => {
                    return product_name.match(new RegExp(this.search, 'gui'))
                });
            }
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
            this.fetchGoods(getItems)
        }
    }).mount('.root')
}

window.onload = initialize