const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
];
const renderGoodsItem = ({ title = 'unknown', price = 0 }) => {
    let strHtml = `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;
    return document.querySelector('.goods-list').insertAdjacentHTML('beforeend', strHtml);
};

const renderGoodsList = (list) => {
    list.forEach(item => renderGoodsItem(item));
    //Думаю, сразу помещать в DOM быстрее, чем доставать из нового массива + так вылятся лишние запятые.
}
renderGoodsList(goods);