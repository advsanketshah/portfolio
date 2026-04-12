(function(){
  var CLOSE='<svg viewBox="0 0 24 24" width="26" height="26" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';
  var OPEN='<svg viewBox="0 0 24 24" width="26" height="26" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';

  document.querySelectorAll('.has-dropdown .dropdown-toggle').forEach(function(btn){
    btn.addEventListener('click',function(e){
      if(window.innerWidth<=900){
        e.stopPropagation();
        btn.closest('.has-dropdown').classList.toggle('open');
      }
    });
  });

  var mobileBtn=document.querySelector('.mobile-menu-btn');
  var navLinks=document.querySelector('.nav-links');
  if(mobileBtn&&navLinks){
    mobileBtn.addEventListener('click',function(){
      var isOpen=navLinks.classList.toggle('active');
      mobileBtn.innerHTML=isOpen?CLOSE:OPEN;
    });
    document.addEventListener('click',function(e){
      if(!e.target.closest('nav')&&navLinks.classList.contains('active')){
        navLinks.classList.remove('active');
        mobileBtn.innerHTML=OPEN;
      }
    });
  }
})();
