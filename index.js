const content = document.querySelectorAll(".content");
const about = document.querySelector(".about");
const tabBtn = document.querySelectorAll(".tab-btn");

about.addEventListener("click",  e =>{
 const id = e.target.dataset.id;
 if (id) {
  // remove active from all buttons
  tabBtn.forEach(btn => {
    btn.classList.remove("active");
    e.target.classList.add("active");
  });
  // hide active content
  content.forEach(content => {
    content.classList.remove("active");
    const element = document.getElementById(id);
    element.classList.add("active")
  })
 }
})