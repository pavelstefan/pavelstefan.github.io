(function(){
    
    var pag1 = $('#p1');
    var pag2 = $('#p2');
    var termeni = $('#termeni');
    var pungi = [];
    var selfieImg = 0;
    window.animationActive = false;
    
    for(let i = 0; i < 4; i++){
        let ii = i+1;
        pungi[i] = $('#i' + ii);
    }
    
    //events
    
    pag1.on('tap', pag1H);
    
    pungi[0].on('tap', punga1);
    pungi[1].on('tap', punga2);
    pungi[2].on('tap', punga3);
    pungi[3].on('tap', punga4);
    
    
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
        
        window.on('tap', takePhoto);
        window.animationActive = true;
        
        cnv = createCanvas(300, 250);
        capture = createCapture(constraints);
        capture.hide();
    }
    
    function punga2(){
        if(!termeni.checked)
            return;
        
        pag2.style.display = 'none';
        selfieImg = 2;
        window.IMG = loadImage(selfieImg + '.png');
        
        window.on('tap', takePhoto);
        window.animationActive = true;
        
        cnv = createCanvas(300, 250);
        capture = createCapture(constraints);
        capture.hide();
    }
    
    function punga3(){
        if(!termeni.checked)
            return;
        
        pag2.style.display = 'none';
        selfieImg = 3;
        window.IMG = loadImage(selfieImg + '.png');
        
        window.on('tap', takePhoto);
        window.animationActive = true;
        
        cnv = createCanvas(300, 250);
        capture = createCapture(constraints);
        capture.hide();
    }
    
    function punga4(){
        if(!termeni.checked)
            return;
        
        pag2.style.display = 'none';
        selfieImg = 4;
        window.IMG = loadImage(selfieImg + '.png');
        
        window.on('tap', takePhoto);
        window.animationActive = true;
        
        cnv = createCanvas(300, 250);
        capture = createCapture(constraints);
        capture.hide();
    }
    
})();