const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients')

ingredients.forEach((name) => {
  const ingredientItem = document.createElement('li');
  ingredientItem.textContent = name;
  ingredientItem.classList = 'item';
  console.log(ingredientItem);
  ingredientsList.insertAdjacentElement('afterbegin', ingredientItem)
})




// ingredientsList.insertAdjacentHTML('beforeend', ingredientItem)

