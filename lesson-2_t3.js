const menu = [
    { size: 'small', price: 50, cal: 20 },
    { size: 'big', price: 100, cal: 40 },
    { stuffing: 'cheese', price: 10, cal: 20 },
    { stuffing: 'salad', price: 20, cal: 5 },
    { stuffing: 'potato', price: 15, cal: 10 },
    { topping: 'spice', price: 15, cal: 0 },
    { topping: 'souse', price: 20, cal: 5 },
];


class Basic {
    constructor({ size = 'unknown', stuffing = 'no' }) {
        this.size = size;
        this.stuffing = stuffing;
    }
}

class withTopping {
    addTopping({ topping = 'none' }) {
        this.topping = topping
        return console.log(topping)
    }
    removeTopping(topping) { // Убрать добавку }
        getToppings(topping) { // Получить список добавок }
            getSize() { // Узнать размер гамбургера }
                getStuffing() { // Узнать начинку гамбургера }
                    calculatePrice() { // Узнать цену }
                        calculateCalories() { // Узнать калорийность }
                        }



                        const hamburgerItem = menu.forEach(position => new Basic(position));