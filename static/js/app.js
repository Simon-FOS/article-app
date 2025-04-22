let menu_bar = document.getElementById('navbar-btn')
let navbar_items = document.getElementsByClassName('navbar-items')


menu_bar.addEventListener('click', () => {
    //console.log('Manu clicked')

    for (let i = 0; i < navbar_items.length; i++) {
        navbar_items[i].classList.toggle('d-md-none')

    }
})

//FETCH ARTICLE DATA
fetch("/json/article.json")
    .then((response) => {
        return response.json()
    })
    .then((data) => {

        let articleEl = document.getElementById('article-list')

        for (let i = 0; i < 9; i++) {
            let article = data[i];

            articleEl.insertAdjacentHTML('afterbegin', `
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-img">
                            <img src=${article.image_url} alt="">
                        </div>

                        <div class="card-content">
                            <a href=${article.url} class="btn card-btn">
                                View Article
                            </a>

                            <div>
                                <h2 class="card-title">
                                    ${article.title}
                                </h2>
                                
                                <div class="card-date">
                                    ${article.date}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                `)
        }
    })

    .catch((error) => {
        console.log(error)
    })

//CREATE NEW ARTICLE
let form_data = document.getElementById('creat-article-form');

form_data.addEventListener('submit', (event) => {
    event.preventDefault(); //prevent default form submission

    console.log('creating new article');

    let converted_form = new FormData(form_data) //converting html from to javascript

    converted_form = Object.fromEntries(converted_form) //converts javescrip form to js objects

    console.log(converted_form)
})


/*


let fruit = ["mango", "orange", "banana"]

console.log(fruit[0])
console.log(fruit[1])
console.log(fruit[2])

console.log(fruit.length)*/
