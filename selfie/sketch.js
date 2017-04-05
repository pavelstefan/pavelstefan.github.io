var constraints = { audio: false, video: { width: 600, height: 500, facingMode: "user" } };
var capture, photo = false;
var cnv;
var photoActive = false;

function setup() {
    window.IMG = null;
}

function draw() {
    background(255, 219, 0);
    if(!window.animationActive)
        return;
    photoActive = true;
    if(photo)
        capture.pause();
    image(capture, 0, 0, 300, 250);
    if(window.IMG)
        image(window.IMG, 114, 192);
}

function takePhoto(){
    if(!window.animationActive || !photoActive)
        return;
    photo = true;
    resizeCanvas(570, 480);
    
    //create image
    background(255, 219, 0);
    image(capture, 0, 0, 570, 480);
    image(window.IMG, 210, 350, 172, 268);
    
    //window.open(cnv.canvas.toDataURL());
    
    $.ajax({
        type: 'POST',
        url: 'https://ftp.voxline.ro/api/v1.0/save-selfie',
        data: { 
            'img': cnv.canvas.toDataURL()
        },
        success: function(msg){
            alert('ok');
            console.log(msg);
        },
        error: function(msg){
            alert('err');
            console.log(msg);
        },
        dataType: 'json'
    });
    
    resizeCanvas(300, 250);
    let thx = document.getElementById('p3');
    thx.style.display = 'inline';
    window.addEventListener('click', function(){
        console.log('click');
        window.open(window.clickTag);
    })
}
