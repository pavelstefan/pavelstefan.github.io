var constraints = { audio: false, video: { width: 600, height: 500, facingMode: "user" } };
var capture, photo = false;
var cnv;
var photoActive = false;

function setup() {
    window.IMG = null;
    cnv = createCanvas(300, 250);
    capture = createCapture(constraints);
    capture.hide();
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
    image(window.IMG, 194, 350, 144, 219);
    
    window.open(cnv.canvas.toDataURL());
    
   /* $.ajax({
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
    });*/
    
    resizeCanvas(300, 250);
}
