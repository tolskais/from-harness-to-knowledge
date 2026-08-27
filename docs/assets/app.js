(() => {
  const slides=[...document.querySelectorAll('.slide')], stage=document.getElementById('stage'); let current=0;
  function resize(){const s=Math.min(innerWidth/1280,innerHeight/720);stage.style.transform='scale('+s+')'}
  function show(n,write=true){current=Math.max(0,Math.min(slides.length-1,n));slides.forEach((s,i)=>s.classList.toggle('active',i===current));if(write)history.replaceState(null,'','#'+(current+1));document.title=(current+1)+'/'+slides.length+' · From Harness to Knowledge'}
  function fromHash(){const n=Number(location.hash.slice(1));show(Number.isFinite(n)&&n>0?n-1:0,false)}
  addEventListener('resize',resize);addEventListener('hashchange',fromHash);addEventListener('keydown',e=>{if(['ArrowRight','PageDown',' '].includes(e.key)){e.preventDefault();show(current+1)}if(['ArrowLeft','PageUp'].includes(e.key)){e.preventDefault();show(current-1)}if(e.key==='Home')show(0);if(e.key==='End')show(slides.length-1)});
  document.getElementById('prev').onclick=()=>show(current-1);document.getElementById('next').onclick=()=>show(current+1);
  let x=null;addEventListener('touchstart',e=>x=e.touches[0].clientX,{passive:true});addEventListener('touchend',e=>{if(x===null)return;const d=e.changedTouches[0].clientX-x;if(Math.abs(d)>50)show(current+(d<0?1:-1));x=null},{passive:true});
  resize();fromHash();
})();