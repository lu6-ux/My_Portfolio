AOS.init();
new Typed('#typed',{strings:["AI Enthusiast","Machine Learning Explorer","Backend Developer Intern"],typeSpeed:70,backSpeed:40,loop:true});
document.getElementById('year').textContent=new Date().getFullYear();
const sections=document.querySelectorAll('section');
const navLinks=document.querySelectorAll('.nav-link');
const header=document.getElementById('header');
const backBtn=document.getElementById('backToTop');
window.addEventListener('scroll',()=>{
const scrollPos=window.scrollY+100;
sections.forEach(sec=>{
if(scrollPos>=sec.offsetTop&&scrollPos<sec.offsetTop+sec.offsetHeight){
navLinks.forEach(a=>a.classList.remove('active'));
document.querySelector(`a[href="#${sec.id}"]`).classList.add('active');
}});
header.classList.toggle('scrolled',window.scrollY>50);
backBtn.style.display=(window.scrollY>300)?'block':'none';
});
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
anchor.addEventListener('click',function(e){
e.preventDefault();
const target=document.querySelector(this.getAttribute('href'));
if(target){target.scrollIntoView({behavior:'smooth'});}});
});
backBtn.addEventListener('click',()=>{window.scrollTo({top:0,behavior:'smooth'});});
document.getElementById('contactForm').addEventListener('submit',function(e){e.preventDefault();
const name=document.getElementById('name').value.trim();
const email=document.getElementById('emailField').value.trim();
if(!name||!email){alert('Please enter your name and email.');return;}
const note=document.getElementById('sentNote');
note.style.display='block';
setTimeout(()=>note.style.display='none',3000);
e.target.reset();});
function openProjectModal(url){
const modal=document.getElementById('projectModal');
const iframe=document.getElementById('projectIframe');
if(modal.classList.contains('open'))return;
modal.classList.add('open');
let loaded=false;
iframe.src=url;
const onLoad=()=>{loaded=true;iframe.removeEventListener('load
