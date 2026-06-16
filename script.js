// mobile nav
document.querySelector(".nav-toggle").addEventListener("click", function () {
  document.querySelector("#mobile-nav").classList.toggle("active");
});
// Sticky header
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
// Accordion FAQ 
const faqItems = document.querySelectorAll(".accordion_item");

faqItems.forEach(item =>{
  item.addEventListener('click', () => {
    const itemBtn = item.querySelector('.accordion_header');
    const itemContent = item.querySelector('.accordion_content');

    if(item.classList.contains('active')){
      itemContent.style.maxHeight = null;
      item.classList.remove('active');
    } else {
      document.querySelectorAll('.accordion_item').forEach(i => {
        i.classList.remove('active');
        i.querySelector('.accordion_content').style.maxHeight = null;
      });

      item.classList.add('active');
      itemContent.style.maxHeight = itemContent.scrollHeight + 'px';
    }
  })
})