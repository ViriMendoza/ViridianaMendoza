function navegacionFija(){const n=document.querySelector(".header"),e=new IntersectionObserver(function(e){e[0].isIntersecting?n.classList.remove("fijo"):n.classList.add("fijo")});e.observe(document.querySelector("#aboutme"))}function scrollNav(){const e=document.querySelectorAll(".navegacion-principal a");e.forEach(function(e){e.addEventListener("click",function(e){e.preventDefault();const n=document.querySelector(e.target.attributes.href.value);n.scrollIntoView({behavior:"smooth"})})})}document.addEventListener("DOMContentLoaded",function(){scrollNav(),navegacionFija()});