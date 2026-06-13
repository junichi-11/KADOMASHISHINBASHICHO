
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    }
  });
},{threshold:.12});
reveals.forEach(el=>io.observe(el));

window.addEventListener('scroll',()=>{
  const isMobile = window.matchMedia('(max-width: 760px)').matches;
  const y=window.scrollY;
  const hero=document.querySelector('.hero-visual');
  if(hero){hero.style.transform=`scale(${1.08 + Math.min(y/6000,.08)}) translateX(${-Math.min(y/120,24)}px)`;}
  const aerial=document.querySelector('.aerial-bg');
  if(aerial){
    const top=document.querySelector('.aerial-section').offsetTop;
    const delta=y-top;
    const move = isMobile ? delta*0.018 : delta*0.06;
    aerial.style.transform=`scale(${isMobile ? 1.05 : 1.1}) translateY(${move}px)`;
  }
},{passive:true});
