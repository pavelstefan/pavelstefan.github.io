(function(){
    
    var pag1 = document.getElementById('p1');
    var pag2 = document.getElementById('p2');
    var termeni = document.getElementById('termeni');
    var pungi = [];
    var selfieImg = 0;
    window.animationActive = false;
    
    for(let i = 0; i < 4; i++){
        let ii = i+1;
        pungi[i] = document.getElementById('i' + ii);
    }
    
    //events
    pag1.addEventListener('click', pag1H);
    pungi[0].addEventListener('click', punga1);
    pungi[1].addEventListener('click', punga2);
    pungi[2].addEventListener('click', punga3);
    pungi[3].addEventListener('click', punga4);
    
    
    //handlers
    function pag1H(){
        pag1.style.display = 'none';
        pag2.style.display = 'inline';
    }
    
    function punga1(){
        if(!termeni.checked)
            return;
        
        pag2.style.display = 'none';
        selfieImg = 1;
        window.IMG = loadImage(selfieImg + '.png');
        
        pag1.removeEventListener('click', pag1H);
        pungi[0].removeEventListener('click', punga1);
        pungi[1].removeEventListener('click', punga2);
        pungi[2].removeEventListener('click', punga3);
        pungi[3].removeEventListener('click', punga4);
        
        window.addEventListener('click', takePhoto);
        window.animationActive = true;
    }
    
    function punga2(){
        if(!termeni.checked)
            return;
        
        pag2.style.display = 'none';
        selfieImg = 2;
        window.IMG = loadImage(selfieImg + '.png');
        
        pag1.removeEventListener('click', pag1H);
        pungi[0].removeEventListener('click', punga1);
        pungi[1].removeEventListener('click', punga2);
        pungi[2].removeEventListener('click', punga3);
        pungi[3].removeEventListener('click', punga4);
        
        window.addEventListener('click', takePhoto);
        window.animationActive = true;
    }
    
    function punga3(){
        if(!termeni.checked)
            return;
        
        pag2.style.display = 'none';
        selfieImg = 3;
        window.IMG = loadImage(selfieImg + '.png');
        
        pag1.removeEventListener('click', pag1H);
        pungi[0].removeEventListener('click', punga1);
        pungi[1].removeEventListener('click', punga2);
        pungi[2].removeEventListener('click', punga3);
        pungi[3].removeEventListener('click', punga4);
        
        window.addEventListener('click', takePhoto);
        window.animationActive = true;
    }
    
    function punga4(){
        if(!termeni.checked)
            return;
        
        pag2.style.display = 'none';
        selfieImg = 4;
        window.IMG = loadImage(selfieImg + '.png');
        
        pag1.removeEventListener('click', pag1H);
        pungi[0].removeEventListener('click', punga1);
        pungi[1].removeEventListener('click', punga2);
        pungi[2].removeEventListener('click', punga3);
        pungi[3].removeEventListener('click', punga4);
        
        window.addEventListener('click', takePhoto);
        window.animationActive = true;
    }
    
})();