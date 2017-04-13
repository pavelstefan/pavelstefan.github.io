(function(){
    
    var banner = $('#banner');
    var pag1 = $('#p1');
    var pag2 = $('#p2');
    var termeni = $('#acordTermeni');
    var pungi = [];
    var selfieImg = 0;
    window.animationActive = false;
    
    for(let i = 0; i < 4; i++){
        let ii = i+1;
        pungi[i] = $('#i' + ii);
    }
    
    //events
    $('#p1').on('tap', pag1H);
    $('#p1').on('click', pag1H);
    
    pungi[0].bind('tap', punga1);
    pungi[1].bind('tap', punga2);
    pungi[2].bind('tap', punga3);
    pungi[3].bind('tap', punga4);
    
    termeni.bind('tap', function(){
        termeni[0].checked = true;
    })
    
    $('#termeni').bind('tap', function(){
        termeni[0].checked = true;
    })
    
    //handlers
    function pag1H(){
        console.log("checkbox: " + termeni[0].checked);
        if(termeni[0].checked != true)
            return;
        pag1[0].style.display = 'none';
        $('#termeni')[0].style.display = 'none';
        pag2[0].style.display = 'inline';
    }
    
    function punga1(){
        pag2[0].style.display = 'none';
        selfieImg = 1;
        window.IMG = loadImage(selfieImg + '.png');
        
        $('canvas').bind('tap', takePhoto);
        window.animationActive = true;
        
        cnv = createCanvas(300, 250);
        cnv.canvas.setAttribute('data-role', 'none');
        banner[0].appendChild(cnv.canvas);
        capture = createCapture(constraints);
        console.log(capture);
        alert(capture._pInstace);
        capture.hide();
        document.body.appendChild(banner[0]);
        
        var d = document.getElementsByTagName('div');
        d[0].parentNode.removeChild(d[0]);
        d[0].parentNode.removeChild(d[0]);
    }
    
    function punga2(){
        pag2[0].style.display = 'none';
        selfieImg = 2;
        window.IMG = loadImage(selfieImg + '.png');
        
        $('canvas').bind('tap', takePhoto);
        window.animationActive = true;
        
        cnv = createCanvas(300, 250);
        banner[0].appendChild(cnv.canvas);
        capture = createCapture(constraints);
        capture.hide();
        document.body.appendChild(banner[0]);
        
        var d = document.getElementsByTagName('div');
        d[0].parentNode.removeChild(d[0]);
        d[0].parentNode.removeChild(d[0]);
    }
    
    function punga3(){
        pag2[0].style.display = 'none';
        selfieImg = 3;
        window.IMG = loadImage(selfieImg + '.png');
        
        $('canvas').bind('tap', takePhoto);
        window.animationActive = true;
        
        cnv = createCanvas(300, 250);
        banner[0].appendChild(cnv.canvas);
        capture = createCapture(constraints);
        capture.hide();
        document.body.appendChild(banner[0]);
        
        var d = document.getElementsByTagName('div');
        d[0].parentNode.removeChild(d[0]);
        d[0].parentNode.removeChild(d[0]);
    }
    
    function punga4(){
        pag2[0].style.display = 'none';
        selfieImg = 4;
        window.IMG = loadImage(selfieImg + '.png');
        
        $('canvas').bind('tap', takePhoto);
        window.animationActive = true;
        
        cnv = createCanvas(300, 250);
        banner[0].appendChild(cnv.canvas);
        capture = createCapture(constraints);
        capture.hide();
        document.body.appendChild(banner[0]);
        var d = document.getElementsByTagName('div');
        d[0].parentNode.removeChild(d[0]);
        d[0].parentNode.removeChild(d[0]);
    }
    
})();
