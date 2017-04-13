var constraints = { audio: false, video: { width: 600, height: 500, facingMode: "user" } };
var capture, photo = false;
var cnv;
var photoActive = false;

function setup() {
    document.getElementById('tag').setAttribute('src', '');
    window.IMG = null;
}

function draw() {
    background(255, 219, 0);
    
    if(!window.animationActive)
        return;
    
    if(!window.permision){
        window.permision = false;
        capture = createCapture(constraints, function(){}, function(){}, function(){window.permision = true});
        return;
    }
    
    photoActive = true;
    if(photo)
        capture.pause();
    image(capture, 0, 0, 300, 250);
    if(window.IMG)
        image(window.IMG, 114, 192);
}

function takePhoto(){
    if(!window.permision){
        window.permision = false;
        capture = createCapture(constraints, function(){}, function(){}, function(){window.permision = true});
        return;
    }
    if(!window.animationActive || !photoActive)
        return;
    photo = true;
    resizeCanvas(570, 480);
    
    //create image
    background(255, 219, 0);
    image(capture, 0, 0, 570, 480);
    image(window.IMG, 210, 350, 172, 268);
    
    window.open(cnv.canvas.toDataURL());
    
    /*$.ajax({
        type: 'POST',
        url: 'https://api.gustullays.ro/api/v1.0/save-selfie',
        data: { 
            'img': cnv.canvas.toDataURL()
        },
        success: function(msg){
            console.log(msg);
        },
        error: function(msg){
            console.log(msg);
        },
        dataType: 'text'
    });*/
    
    resizeCanvas(300, 250);
    let thx = document.getElementById('p3');
    thx.style.display = 'inline';
    document.getElementById('tag').setAttribute('src', 'javascript:window.open(window.clickTag)');
    $(document).bind('tap', function(){
        window.open(window.clickTag);
    })
}
