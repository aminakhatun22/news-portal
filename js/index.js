
const loadCategories = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    const res = await fetch(url);
    const data = await res.json();
    displayCategories(data.data.news_category)
}
const displayCategories = categories => {
    const categoriesContainer = document.getElementById('all-menu');
    categories.forEach(category => {
        const categoriesLi = document.createElement('li');
        categoriesLi.classList.add('list-item');
        categoriesLi.innerHTML = `
    <button  id="all" class="list-item ml-14  mt-4 justify-center  text-grey "> ${category.category_name} </button>


    `;
        categoriesContainer.appendChild(categoriesLi);
    })
}
// document.getElementById('all-menu').addEventListener('click', function () {
//     console.log('fdj')

// })

// document.getElementById('${category.category_id}').addEventListener('click', function () {
//     console.log('fkj')
// })




loadCategories();























