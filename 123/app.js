window.addEventListener("load", Start);

function Start(){
    var timeLine = new Timeline(3, 120);//timeline variable
    var frame = new KeyFrame("i1");//one KeyFrame
    var frame2 = new KeyFrame("i2");
    
    frame.addKey("opacity", "1");
    frame.setTime(121, 150);
    
    frame2.addKey("opacity", "1");
    frame2.setTime(251, 280);
    
    timeLine.addKeyframe(frame);
    timeLine.addKeyframe(frame2);
    timeLine.renderAnimation();
}