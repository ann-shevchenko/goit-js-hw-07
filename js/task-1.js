
const categories = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
    const categoryName = category.firstElementChild.innerText;
    const categoryItems = category.lastElementChild.children;
    
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryItems.length}`);
});




