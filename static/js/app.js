let menu_bar = document.getElementById('navbar-btn')
let navbar_items = document.getElementsByClassName('navbar-items')


menu_bar.addEventListener('click', ()=>{
    //console.log('Manu clicked')
    
    for(let i=0; i<navbar_items.length; i++){
    navbar_items[i].classList.toggle('d-md-none')
  
    }
})



let user_info = [
    {
        id: 1,
        first_name: "Simon",
        last_name: "Ogbanje",
        is_admin: true,
        age : 20,
        is_authenticated: true
    },

    {
        id: 2,
        first_name: "Daniel",
        last_name: "Ogbanje",
        is_admin: false,
        age : 20,
        is_authenticated: true
    },

    {
        id: 3,
        first_name: "Esther",
        last_name: "Fehintola",
        is_admin: false,
        age : 20,
        is_authenticated: false
    }
]

let article_data = [
    {
        id:1,
        title: "This is title 1",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem repudiandae est quidem, nihil, dicta modi porro minus maiores pariatur ipsa laudantium perferendis eum, expedita doloremque facilis ducimus odio. Dolores, perspiciatis.",
        Image_url: "static/img/mmm.jpg",
        url: "/article/1",
        date: new Date().toDateString()
    },

    {
        id:2,
        title: "This is title 2",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem repudiandae est quidem, nihil, dicta modi porro minus maiores pariatur ipsa laudantium perferendis eum, expedita doloremque facilis ducimus odio. Dolores, perspiciatis.",
        Image_url: "static/img/m2.jpg",
        url: "/article/1",
        date: new Date().toDateString()
    },

    {
        id:3,
        title: "This is title 3",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem repudiandae est quidem, nihil, dicta modi porro minus maiores pariatur ipsa laudantium perferendis eum, expedita doloremque facilis ducimus odio. Dolores, perspiciatis.",
        Image_url: "static/img/m3.jpg",
        url: "/article/1",
        date: new Date().toDateString()
    },

    {
        id:3,
        title: "This is title 3",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem repudiandae est quidem, nihil, dicta modi porro minus maiores pariatur ipsa laudantium perferendis eum, expedita doloremque facilis ducimus odio. Dolores, perspiciatis.",
        Image_url: "static/img/m3.jpg",
        url: "/article/1",
        date: new Date().toDateString()
    },

    {
        id:3,
        title: "This is title 3",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem repudiandae est quidem, nihil, dicta modi porro minus maiores pariatur ipsa laudantium perferendis eum, expedita doloremque facilis ducimus odio. Dolores, perspiciatis.",
        Image_url: "static/img/m3.jpg",
        url: "/article/1",
        date: new Date().toDateString()
    },

    {
        id:3,
        title: "This is title 3",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem repudiandae est quidem, nihil, dicta modi porro minus maiores pariatur ipsa laudantium perferendis eum, expedita doloremque facilis ducimus odio. Dolores, perspiciatis.",
        Image_url: "static/img/m3.jpg",
        url: "/article/1",
        date: new Date().toDateString()
    }
]

window.localStorage.setItem('data', article_data)

let data = window.localStorage.getItem('data')

console.log(data)


let articleEl = document.getElementById('article-list')

for (let i=0; i<article_data.length; i++){
    let data = article_data[i]
    articleEl.insertAdjacentHTML("afterbegin", `
      <div class="col-md-4">
        <div class="card">
            <div class="card-img">
                <img src=${data.Image_url} alt="">
            </div>

            <div class="card-content">
                <a href=${data.url} class="btn card-btn">
                    View Article
                </a>

                <div>
                    <h2 class="card-title">
                        ${data.title}
                    </h2>
                    
                    <div class="card-date">
                        ${data.date}
                    </div>
                </div>

            </div>
        </div>
    </div>  
    `)
}

/*let fruit = ["mango", "orange", "banana"]

console.log(fruit[0])
console.log(fruit[1])
console.log(fruit[2])

console.log(fruit.length)*/
