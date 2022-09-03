
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
    <button  id="all" class="list-item ml-14  mt-4 justify-center  text-grey " onclick="loadCategoriesId('${category.category_id}')"> <li>   ${category.category_name} </li> </button>


     `;

        categoriesContainer.appendChild(categoriesLi);
    });

}






const loadCategoriesId = async (category_id) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`
    const res = await fetch(url);
    const data = await res.json();

    shownewsDetails(data.data);

}
loadCategoriesId();

const shownewsDetails = async (details) => {
    const detailsContainer = document.getElementById('details-container');


    const foundItems = document.getElementById('found-category');
    detailsContainer.textContent = '';
    details.forEach(detail => {
        foundItems.innerText = details.length + " " + "Items found";

        const detailDiv = document.createElement('div');
        detailDiv.classList.add('news-div');
        detailDiv.innerHTML = `
       
        <div class="card card-side bg-base-100 shadow-xl mb-4 ml-28 mr-28 mt-6">
  <figure><img src="${detail.rating.thumbnail_url}" alt=" "></figure>
  <div class="card-body ml-6">
    <h2 class="card-title">${detail.rating.title}</h2>
    <p>${detail.author.details}</p>
    <div> 
    <div class="card-actions justify-end">
    <div>
    <img src="" alt="">
<p></p>
<p></p>
</div>

    <button class="btn btn-primary">Watch</button>
    </div>
  </div>
</div>

        
        `;
        toggleSpinner(true);


        detailsContainer.appendChild(detailDiv);

    });


}



const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loader');
    if (isLoading) {
        loaderSection.classList.remove('d-none')
    }
    else {
        loaderSection.classList.add('d-none');
    }
}

loadCategoriesId();










loadCategories();


// fetch id-2

// const loadCategories2 = async () => {
//     const url = `https://openapi.programming-hero.com/api/news/category/01`
//     const res = await fetch(url);
//     const data = await res.json();
//     console.log(data);
// }
// loadCategories2();























