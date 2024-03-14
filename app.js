/*--------------------------44-video-----------------*/

// TEXT CONTENT

// const title=document.getElementById('title')
// title.textContent +=' new text'

// const Listitem=document.querySelectorAll('.List-item')
// Listitem.forEach((item)=>{item.textContent += ' darslar'})

// innerHTML

// const names = ["Davronbek", "Ozodbek", "Shahboz"];

// const ol = document.querySelector("ol");

// names.forEach((name) => {
//   ol.innerHTML += `<li>${name}</li>`;
// });

/*--------------------------45-video-----------------*/

// const link = document.querySelector("a");
// console.log(link.getAttribute("href"));

// link.setAttribute('href','https://www.yandex.ru')
// link.textContent='Go to Yandex'

// const text = document.querySelector("p");
// console.log(text.getAttribute("class"));
// text.setAttribute("class", "success");

// text.setAttribute('style','color:red')

/*--------------------------46-video-----------------*/

// const heading=document.querySelector('h1')

// heading.setAttribute("style",'margin:50px')

// console.log(heading.style)
// heading.style.margin='50px'
// heading.style.color='crimson'
// heading.style.fontSize='100px'

/*--------------------------47-video-----------------*/
// const content = document.querySelector("p");
// // console.log(content.classList)
// // content.classList.add('seccess')
// // content.classList.remove('seccess')
// // content.classList.add('error')

// const para = document.querySelectorAll("p");

// para.forEach((text) => {
//   if (text.textContent.includes("error")) {
//     text.classList.add("error");
//   } else if (text.textContent.includes("success")) {
//     text.classList.add("success");
//   }
// });
// console.log(para)

// taggle

// const heading = document.querySelector("h2");
// heading.classList.toggle("success");
// heading.classList.toggle("success");

/*--------------------------48-video-----------------*/

// const article = document.querySelector("article");
// console.log(article.children);
// Array.from(article.children).forEach((child) => {
//   child.classList.add("article-child");
// });

// const title = document.querySelector("h2");
// console.log(title.parentElement);
// console.log(title.parentElement.parentElement);
// console.log(title.nextElementSibling);
// console.log(title.previousElementSibling);

// // chaining
// console.log(title.nextElementSibling.parentElement.children)

/*--------------------------49-video-----------------*/
// const button = document.querySelector("button");

// button.addEventListener("click", () => console.log("you are clicked me !"));

// const items = document.querySelectorAll("li");
// items.forEach((item) =>
//   item.addEventListener("click", (e) => {
//     console.log(e.target);
//     console.log(item)
//     e.target.style.textDecoration='line-through'
//     e.target.style.opacity='0.5'
//   })
// );

/*--------------------------50-video-----------------*/
const button = document.querySelector("button");
const ul = document.querySelector("ul");
// // // ul.remove();

button.addEventListener("click", () => {
//   ul.innerHTML += "<li>Something new text</li>";
  const li = document.createElement("li");
  li.textContent = "something new text";
//   ul.appendChild(li);
  ul.prepend(li);
});

const items = document.querySelectorAll("li");
items.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.target.remove();
  });
});
