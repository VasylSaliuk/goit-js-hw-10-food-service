import refs from "./refs.js";
import menu from '../menu.json';
import menuCardsTpl from '../templates/menuCards.hbs';
import filterTpl from '../templates/filter.hbs';

const {menuCardList, filterBar} = refs;
filterBar.insertAdjacentHTML('beforeend', createfilterMarkup(menu));
filterBar.addEventListener('click', onButtonClick);
createMarkup(menu);

function createfilterMarkup(menu) {
    const arr = menu
    .reduce((acc, value) => [...acc, ...value.ingredients], [])
    .filter((v, i, arr) => arr.indexOf(v) === i)
    .sort();
    return filterTpl(arr);
};

function createMenuCardsMarkup(menu) {
    return menuCardsTpl(menu);
};

function createMarkup(el) {
    menuCardList.insertAdjacentHTML('beforeend', createMenuCardsMarkup(el))
};

function onButtonClick(evt) {
    if (!evt.target.classList.contains('tag-list__item')) {
        return;
    }
    let result = [];
    const value = evt.target.textContent;
    if (evt.target.classList.contains('all')) {
        menuCardList.innerHTML = '';
        createMarkup(menu);
    } else {
            menu.filter(item => {
            if (item.ingredients.includes(value)) {
                result.push(item);
            }
        });
        menuCardList.innerHTML = '';
        createMarkup(result);
        result = [];
    }
};