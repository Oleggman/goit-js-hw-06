const categoryRef = document.getElementById("categories");
console.log(`Number of categories: ${categoryRef.children.length}`);

[...categoryRef.children].forEach((li) =>
  console.log(`Category: ${li.firstElementChild.textContent}\nElements: ${li.children[1].children.length}`)
);
