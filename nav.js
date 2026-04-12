(function(){

  /* ── Bottom Tab Bar ── */
  var TABS=[
    {
      label:'Home',
      href:'index.html',
      match:['index','/'],
      icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>'
    },
    {
      label:'Value',
      href:'value.html',
      match:['value'],
      icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.375 2.625a2.121 2.121 0 013 3L12 15l-4 1 1-4z"/></svg>'
    },
    {
      label:'Work',
      href:'portfolio.html',
      match:['portfolio','cases'],
      icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>'
    },
    {
      label:'Content',
      href:'books.html',
      match:['books','privacipher','resources'],
      icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>'
    },
    {
      label:'About',
      href:'experience.html',
      match:['experience','certifications','education','testimonials','contact'],
      icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>'
    }
  ];

  function isActive(tab){
    var path=window.location.pathname;
    var isIndex=path==='/'||path.endsWith('/')||path.endsWith('/index.html')||path.endsWith('index.html');
    if(isIndex) return tab.match.indexOf('index')!==-1||tab.match.indexOf('/')!==-1;
    return tab.match.some(function(m){return path.indexOf(m)!==-1;});
  }

  function injectTabBar(){
    var bar=document.createElement('nav');
    bar.className='bottom-tab-bar';
    bar.setAttribute('aria-label','Mobile navigation');
    TABS.forEach(function(tab){
      var a=document.createElement('a');
      a.href=tab.href;
      a.className='tab-item'+(isActive(tab)?' active':'');
      a.innerHTML=tab.icon+'<span>'+tab.label+'</span>';
      bar.appendChild(a);
    });
    document.body.appendChild(bar);
  }

  injectTabBar();

  /* ── Desktop dropdowns (hover handled by CSS) ── */
  // No mobile hamburger logic needed — nav replaced by bottom tab bar

})();
