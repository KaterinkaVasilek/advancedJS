const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        products: [],
        imgCatalog: 'https://via.placeholder.com/200x150',
        searchLine: '',
        isVisibleCart: true,
    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                });
        },
        addProduct(product) {
            console.log(product.id_product);
        },
        filterGoods() {
            this.products.filter (item => {
                item === this.searchLine;
                });
        },
    },
    beforeCreate() {
        console.log('beforeCreate');
        console.log(this.products);
    },
    created() {
        console.log('created');
        console.log(this.products);
        this.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                }
            });
    },
    mounted() {
        console.log('mounted');
    },
});
