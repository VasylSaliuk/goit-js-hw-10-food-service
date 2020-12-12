function onIngridientClick(e) {
  if (!e.target.classList.contains('tag-list__item')) {
      return;
  }
  let result = [];
  const value = e.target.textContent;
  menu.map(item => {
      if (item.ingredients.includes(value)) {
          result.push(item);
      }
  });
  menuCardList.innerHTML = '';
  createMarkup(result);
  result = [];
};