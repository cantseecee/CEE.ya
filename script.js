(function(){
  var T={
    en:{
      title:"CEE YA. — Fashion accessories from Morocco",
      tagline:"Beyond the ordinary · Morocco",
      nav_home:"Home",nav_about:"About",nav_explore:"Explore",nav_contact:"Contact",
      cta:"Let's talk",
      hero_title:"Think beyond <em>the ordinary.</em>",
      hero_lead:"CEE YA. is an independent Moroccan studio. We curate fashion accessories and digital ideas with a point of view of our own.",
      hero_btn:"See what's coming",
      about_title:"More than a digital space.",
      about_text:"Started in Morocco in 2026. We look at what already exists and ask what could be better, then build it with care, one small detail at a time.",
      explore_title:"What we explore",
      c1_t:"Creativity",c1_p:"Ideas that challenge the familiar and inspire new ways of seeing.",
      c2_t:"Innovation",c2_p:"Digital experiences and the ideas shaping what comes next.",
      c3_t:"Discovery",c3_p:"Inspiration found in unexpected places and everyday details.",
      sal_title:"Salmaty, our accessories line.",
      sal_lead:"Bags, jewelry, caps and wallets for everyday style. Cash on delivery across Morocco.",
      p1_t:"Bags",p1_p:"Shoulder bags and small essentials.",
      p2_t:"Jewelry",p2_p:"Little pieces worth wearing daily.",
      p3_t:"Caps",p3_p:"Easy style for every day.",
      p4_t:"Wallets",p4_p:"Compact, simple, made to last.",
      soon:"Coming soon",
      contact_title:"Have something in mind?",
      contact_lead:"Write to us about an idea, an order or a collaboration. We reply as soon as we can.",
      contact_btn:"Email hello@ceeya.com",
      rights:"© 2026 CEE YA. All rights reserved.",
      top:"Back to top"
    },
    fr:{
      title:"CEE YA. — Accessoires de mode du Maroc",
      tagline:"Au-delà de l'ordinaire · Maroc",
      nav_home:"Accueil",nav_about:"À propos",nav_explore:"Explorer",nav_contact:"Contact",
      cta:"Parlons-en",
      hero_title:"Pensez au-delà <em>de l'ordinaire.</em>",
      hero_lead:"CEE YA. est un studio marocain indépendant. Nous sélectionnons des accessoires de mode et des idées digitales avec un regard bien à nous.",
      hero_btn:"Voir ce qui arrive",
      about_title:"Plus qu'un espace digital.",
      about_text:"Né au Maroc en 2026. Nous regardons ce qui existe et nous demandons comment faire mieux, puis nous le construisons avec soin, détail après détail.",
      explore_title:"Ce que nous explorons",
      c1_t:"Créativité",c1_p:"Des idées qui bousculent le familier et ouvrent de nouvelles façons de voir.",
      c2_t:"Innovation",c2_p:"Des expériences digitales et les idées qui façonnent la suite.",
      c3_t:"Découverte",c3_p:"De l'inspiration dans les endroits inattendus et les détails du quotidien.",
      sal_title:"Salmaty, notre ligne d'accessoires.",
      sal_lead:"Sacs, bijoux, casquettes et portefeuilles pour un style de tous les jours. Paiement à la livraison partout au Maroc.",
      p1_t:"Sacs",p1_p:"Sacs bandoulière et petits essentiels.",
      p2_t:"Bijoux",p2_p:"De petites pièces à porter chaque jour.",
      p3_t:"Casquettes",p3_p:"Un style facile, tous les jours.",
      p4_t:"Portefeuilles",p4_p:"Compacts, simples, faits pour durer.",
      soon:"Bientôt",
      contact_title:"Une idée en tête ?",
      contact_lead:"Écrivez-nous pour une idée, une commande ou une collaboration. Nous répondons dès que possible.",
      contact_btn:"Écrire à hello@ceeya.com",
      rights:"© 2026 CEE YA. Tous droits réservés.",
      top:"Retour en haut"
    },
    ar:{
      title:"CEE YA. — إكسسوارات الموضة من المغرب",
      tagline:"ما وراء المألوف · المغرب",
      nav_home:"الرئيسية",nav_about:"من نحن",nav_explore:"نستكشف",nav_contact:"تواصل",
      cta:"تواصل معنا",
      hero_title:"فكّر <em>ما وراء المألوف.</em>",
      hero_lead:"CEE YA. استوديو مغربي مستقل. ننتقي إكسسوارات الموضة والأفكار الرقمية بنظرة خاصة بنا.",
      hero_btn:"اكتشف ما هو قادم",
      about_title:"أكثر من مجرد فضاء رقمي.",
      about_text:"انطلقنا في المغرب سنة 2026. ننظر إلى ما هو موجود ونسأل كيف يمكن أن يكون أفضل، ثم نبنيه بعناية، تفصيلة صغيرة تلو الأخرى.",
      explore_title:"ما الذي نستكشفه",
      c1_t:"الإبداع",c1_p:"أفكار تتحدى المألوف وتفتح طرقاً جديدة للرؤية.",
      c2_t:"الابتكار",c2_p:"تجارب رقمية وأفكار تصنع ما هو قادم.",
      c3_t:"الاكتشاف",c3_p:"إلهام في أماكن غير متوقعة وفي تفاصيل الحياة اليومية.",
      sal_title:"Salmaty، خطّ الإكسسوارات لدينا.",
      sal_lead:"حقائب ومجوهرات وقبعات ومحافظ لأناقة يومية. الدفع عند الاستلام في جميع أنحاء المغرب.",
      p1_t:"الحقائب",p1_p:"حقائب كتف وأساسيات صغيرة.",
      p2_t:"المجوهرات",p2_p:"قطع صغيرة تستحق أن تُلبس كل يوم.",
      p3_t:"القبعات",p3_p:"أناقة سهلة لكل يوم.",
      p4_t:"المحافظ",p4_p:"عملية وبسيطة ومصنوعة لتدوم.",
      soon:"قريباً",
      contact_title:"هل لديك فكرة؟",
      contact_lead:"راسلنا بخصوص فكرة أو طلب أو تعاون. نرد في أقرب وقت.",
      contact_btn:"راسلنا على hello@ceeya.com",
      rights:"© 2026 CEE YA. جميع الحقوق محفوظة.",
      top:"العودة للأعلى"
    }
  };

  var side=document.getElementById('side'),scrim=document.getElementById('scrim'),
      btn=document.querySelector('.burger'),links=[].slice.call(side.querySelectorAll('.menu a')),
      langBtns=[].slice.call(document.querySelectorAll('.lang button'));

  /* Language */
  function setLang(lang){
    if(!T[lang])lang='en';
    var d=T[lang],root=document.documentElement;
    root.lang=lang;root.dir=lang==='ar'?'rtl':'ltr';
    [].forEach.call(document.querySelectorAll('[data-i18n]'),function(el){
      var k=el.getAttribute('data-i18n');if(d[k]!==undefined)el.innerHTML=d[k];
    });
    document.title=d.title;
    langBtns.forEach(function(b){b.setAttribute('aria-pressed',b.getAttribute('data-lang')===lang)});
    try{localStorage.setItem('ceeya-lang',lang)}catch(e){}
  }
  langBtns.forEach(function(b){b.addEventListener('click',function(){setLang(b.getAttribute('data-lang'))})});
  var saved=null;try{saved=localStorage.getItem('ceeya-lang')}catch(e){}
  var nav=(navigator.language||'en').slice(0,2);
  setLang(saved||(T[nav]?nav:'en'));

  /* Menu */
  function set(open){
    side.classList.toggle('open',open);scrim.classList.toggle('open',open);
    btn.setAttribute('aria-expanded',open);btn.setAttribute('aria-label',open?'Close menu':'Open menu');
    document.body.style.overflow=open?'hidden':'';
  }
  btn.addEventListener('click',function(){set(!side.classList.contains('open'))});
  scrim.addEventListener('click',function(){set(false)});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')set(false)});
  links.forEach(function(a){a.addEventListener('click',function(){set(false)})});

  /* Active link while scrolling */
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){
      es.forEach(function(e){
        if(e.isIntersecting){links.forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id)})}
      });
    },{rootMargin:'-45% 0px -50% 0px'});
    document.querySelectorAll('main section').forEach(function(s){io.observe(s)});
  }
})();