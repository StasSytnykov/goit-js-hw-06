const categoriesItems = document.querySelectorAll("#categories .item");
const categoriesLength = categoriesItems.length;
console.log(`Number of categories: ${categoriesLength}`);

categoriesItems.forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}`);

  const categoriesList = element.lastElementChild;
  const categoriesListChild = categoriesList.children;
  console.log(`Elements: ${categoriesListChild.length}`);
});
