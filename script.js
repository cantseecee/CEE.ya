(function(){
  var side=document.getElementById('side'),scrim=document.getElementById('scrim'),
      btn=document.querySelector('.burger'),links=[].slice.call(side.querySelectorAll('.menu a'));
  function set(open){
    side.classList.toggle('open',open);scrim.classList.toggle('open',open);
    btn.setAttribute('aria-expanded',open);btn.setAttribute('aria-label',open?'Close menu':'Open menu');
    document.body.style.overflow=open?'hidden':'';
  }
  btn.addEventListener('click',function(){set(!side.classList.contains('open'))});
  scrim.addEventListener('click',function(){set(false)});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')set(false)});
  links.forEach(function(a){a.addEventListener('click',function(){set(false)})});
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){
      es.forEach(function(e){
        if(e.isIntersecting){links.forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id)})}
      });
    },{rootMargin:'-45% 0px -50% 0px'});
    document.querySelectorAll('main section').forEach(function(s){io.observe(s)});
  }
})();