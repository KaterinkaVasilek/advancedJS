const header = document.querySelector('header');
header.style.display = 'flex';
header.style.justifyContent = 'center';
header.style.margin = '30px 0 50px 0';

const btnCart = document.querySelector('.btn-cart');
btnCart.style.backgroundColor = '#d60451';
btnCart.style.color = '#fff';
btnCart.style.fontSize = '18px';
btnCart.style.fontWeight = '700';
btnCart.style.padding = '15px 20px';
btnCart.style.border = 'none';
btnCart.style.letterSpacing = '2px';

const products = [
    {id: 1, title: 'Notebook', price: 1000},
    {id: 2, title: 'Mouse', price: 100},
    {id: 3, title: 'Keyboard', price: 250},
    {id: 4, title: 'Gamepad', price: 150},
];

const renderProduct = (title = 0, price = 0) => {
    return `<div class="product-item">
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="by-btn">Добавить</button>
            </div>`;
};

const renderProducts = (list) => {
    const productList = list.map((good) => {
        return renderProduct(good.title, good.price);
    });
    document.querySelector('.products').innerHTML = productList.join('');

    console.log(productList);
};

renderProducts(products);

const productsBlock = document.querySelector('.products');
productsBlock.style.display = 'flex';
productsBlock.style.flexWrap = 'wrap';
productsBlock.style.justifyContent = 'space-around';

const btnAdd = document.querySelectorAll('.by-btn');
btnAdd.forEach(item => {
    item.style.backgroundColor = '#d60451';
    item.style.padding = '8px 12px';
    item.style.color = '#fff';
    item.style.border = 'none';
    item.style.fontWeight = '600';
});

const productItem = document.querySelectorAll('.product-item');
productItem.forEach(item => {
    item.style.border = '1px solid #d60451';
    item.style.padding = '50px 35px';
});