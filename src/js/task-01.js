const categories = document.querySelector('#categories');

console.log('Number of categories -->', categories.children.length);

// ______________________

const items = document.querySelectorAll('.item')

items.forEach((item, i) => {
    const titles = document.querySelectorAll('h2');
    console.log("Category:", titles[i].textContent);
    console.log(`Elements:`,item.lastElementChild.children.length);
})
