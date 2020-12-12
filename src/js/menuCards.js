import menu from '../menu.json';
import menuCardsTpl from '../templates/menuCards.hbs';
import filterTpl from '../templates/filter.hbs';

const menuCardList = document.querySelector('.js-menu');
const filterBar = document.querySelector('.filter-bar');

filterBar.insertAdjacentHTML('beforeend', createfilterMarkup(menu));
filterBar.addEventListener('click', onButtonClick);
createMarkup(menu);

function createfilterMarkup(menu) {
    const arr = menu
    .reduce((acc, value) => [...acc, ...value.ingredients], [])
    .filter((v, i, a) => a.indexOf(v) === i)
    .sort();
    return filterTpl(arr);
};
function createMenuCardsMarkup(menu) {
    return menuCardsTpl(menu);
};

function createMarkup(el) {
    menuCardList.insertAdjacentHTML('beforeend', createMenuCardsMarkup(el))
};
function onButtonClick(e) {
    if (!e.target.classList.contains('tag-list__item')) {
        return;
    }
    let result = [];
    const value = e.target.textContent;
    if (value === 'Все') {
        menuCardList.innerHTML = '';
        createMarkup(menu);
    } else {
            menu.map(item => {
            if (item.ingredients.includes(value)) {
                result.push(item);
            }
        });
        menuCardList.innerHTML = '';
        createMarkup(result);
        result = [];
    }

};