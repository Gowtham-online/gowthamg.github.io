// simple intersection observer to reveal animated card
document.addEventListener('DOMContentLoaded', function(){
  const card = document.querySelector('.animated-card');
  if(card){
    const obs = new IntersectionObserver(entries=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          card.classList.add('visible');
          obs.disconnect();
        }
      });
    }, {threshold:0.2});
    obs.observe(card);
  }
});
