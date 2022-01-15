const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const ingredientsArr = [];

ingredients.forEach((element) => {
  const ingredientsItems = document.createElement("li");
  ingredientsItems.classList.add("item");

  ingredientsItems.textContent = element;
  ingredientsArr.push(ingredientsItems);
});

ingredientsList.append(...ingredientsArr);
