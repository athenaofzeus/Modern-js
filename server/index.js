import express, { json } from 'express';
import { writeFile, readFile } from 'fs/promises';
import cors from 'cors';

const GOODS_PATH = 'static/goods.json';
const BASKET_PATH = 'static/basket-goods.json'
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/goods', (res, req) => {
    getGoods().then(goods => {
        console.log(goods);
        req.send(JSON.stringify(goods))
    });
});

app.get('/basket', (res, req) => {
    getBasket().then(goods => {
        console.log(goods);
        req.send(JSON.stringify(goods))
    });
});

app.listen('8000', () => {
    console.log('server started')
});



function getGoods() {
    return readFile(GOODS_PATH, 'utf-8').then(file => JSON.parse(file));
}

function getBasket() {
    return readFile(BASKET_PATH, 'utf-8').then(file => JSON.parse(file));
}