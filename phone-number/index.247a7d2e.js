const e=document.getElementById("number-input"),t=document.getElementById("display"),n=document.getElementById("btn-send"),l=document.getElementById("cry"),i=document.getElementById("up"),d=(e=>{let t=[],n=(e,l=[])=>{if(0===e.length)t.push(l);else for(let t=0;t<e.length;t++){let i=e.slice(),d=i.splice(t,1);n(i.slice(),l.concat(d))}};return n(e),function(e){let t=e.length,n;// While there remain elements to shuffle.
for(;t>0;)// Pick a remaining element.
n=Math.floor(Math.random()*t),t--,// And swap it with the current element.
[e[t],e[n]]=[e[n],e[t]];return e}(t)})([0,1,2,3,4,5,6,7,8,9]),o=Math.floor(1e8*Math.random())%d.length;e.value=o;const s=e=>{t.innerText=`Phone number: ${d[e].join("")}`,l.style.display="none",i.style.display="none"};s(o),e.addEventListener("input",e=>s(e.target.value)),n.addEventListener("click",()=>{let t=d[e.value];0!==t[0]?(l.style.display="initial",i.style.display="none"):(l.style.display="none",i.style.display="initial")});//# sourceMappingURL=index.247a7d2e.js.map

//# sourceMappingURL=index.247a7d2e.js.map
