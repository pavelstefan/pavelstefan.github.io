/*
    Timeline class
*/
function Timeline(len, fps = 24){
    var length = len;//length in sec, must be integer
    var fps = fps;//fps of the video, must be integer
    var keyFrames = [];//frames to be rendered
    var loopId;//render loop id, used for stopping the render loop
    var currentKeyFrame = 0;//the keyFrame id that is being rendered
    var elapsedFrames = 0;//current frame/time elapsed since the aniamtion is running
    var callBackAnim;//callback function called when the animation finished
    
    //private methods
    /*
        param: string
        return: null = the param does not contain a number
                the number inside the string
    */
    function valToNumber(val){
        if(val[0] < '0' || val[0] > '9')
            return null;
        txt = val;
        var num = txt.replace(/[^0-9]/g,'');
        return num;
    }
    
    function getUnit(val){
        if(val == null || !valToNumber(val)){
            return "";
        }
        var unit = val.substr(valToNumber(val).length, val.size);        
        return unit;
    }
    
    //public methods
    this.getLength = function(){
        return length;
    }
    
    this.getFps = function(){
        return fps;
    }
    
    this.addKeyframe = function(frame){
        keyFrames.push(frame);
    }
    
    //render the animation
    this.renderAnimation = function(cbf = null){
        callBackAnim = cbf;
        loopId = setInterval(renderNewFrame, 1000/fps);//start render loop
    }
    
    //private methods
    function renderNewFrame(){
        for(var i = 0; i < keyFrames.length; i++){            
            var start = keyFrames[i].getStartFrame();
            var end = keyFrames[i].getEndFrame();            
            
            if(end - start == 0 && start == elapsedFrames){
                keyFrames[i].render();                
                continue;
            }
        
            if(start <= elapsedFrames && elapsedFrames <= end){
                var transition = new KeyFrame(keyFrames[i].getLayer());
                var json = JSON.parse(keyFrames[i].getFrame());
                var jsonFinal = JSON.parse(keyFrames[i].getFrame());
                var jsonStart = {};                
                if(elapsedFrames > start){
                    jsonStart = keyFrames[i].getStartJson();
                }
                    
                var elem = document.getElementById(keyFrames[i].getLayer());
                
                Object.keys(json).forEach(function(key){                    
                    if(!jsonStart.hasOwnProperty(key))
                        jsonStart[key] = elem.style[key];
                    if(parseInt(jsonFinal[key]) && !parseInt(jsonStart[key])){
                        jsonStart[key] = 0.0;                        
                    }else{
                        jsonStart[key] = jsonFinal[key];
                    }
                    
                    var currentValue = jsonStart[key];
                    var nextValue = currentValue;
                    
                    if(parseInt(currentValue) || currentValue == 0){
                        var current = parseFloat(currentValue);
                        var percent = (elapsedFrames - start)/(end - start);
                        var amount = parseFloat(jsonFinal[key]) - current;                         
                        nextValue = amount*percent + current;                        
                        if(percent == 1){
                            nextValue = parseFloat(jsonFinal[key]);
                        }                        
                    }else{
                        //the key value is not a number
                        nextValue = jsonFinal[key];
                    }
                    var unit = getUnit(jsonFinal[key]);
                    if(parseInt(nextValue.toString()))
                        transition.addKey(key.toString(), parseFloat(nextValue) + unit.toString());
                    else
                        transition.addKey(key.toString(), nextValue);
                });
                keyFrames[i].setStartJson(jsonStart);
                transition.render();                
            }
        }
        
        
        elapsedFrames++;//increment elapsed frames        
        if(length*fps == elapsedFrames){
            console.log("animation finished");
            clearInterval(loopId);//stop render loop
            if(callBackAnim){
                callBackAnim();
            }
        }
    }
}

/*
    KeyFrame class    
*/
function KeyFrame(layerName = ""){
    var properties = '';//contains all the css properties to be modified    
    var layer = layerName;//name of the layer
    var startFrame = 0;//the number of the frame where the animation will start    
    var endFrame = 0;//the number of the frame where the animation will end
    var jsonStart = {};
    
    
    /*
        public methods
    */
    
    //params: 2 integers representing the start and the stop in frames from the begining of the animation
    this.setTime = function(start = 0, stop = 0){
        startFrame = start;
        endFrame = stop;
    };
    
    this.setStartJson = function(json){
        jsonStart = json;
    }
    
    this.getStartJson = function(){
        return jsonStart;
    }
    
    this.getStartFrame = function(){
      return startFrame;  
    };
    
    this.getEndFrame = function(){
        return endFrame;
    }
    
    this.addKey = function(name, value){
        if(properties != '')
            properties += ',\n' + '"' + name+ '":' + '"' + value + '"';
        else
            properties += '"' + name+ '":' + '"' + value + '"';
    }
    
    //returns a json object that contains all of the css properties
    this.getFrame = function(){
        return ('{\n' + properties + '\n}');
    }
    
    this.getLayer = function(){
        return layer.toString();
    }
    
    this.render = function(values = null){
        var css = {};
        if(values)
            css = values;
        else
            css = this.getFrame();
                
        var elem = document.getElementById(layer);        
        applyStyle(elem, JSON.parse(css));
            
    }
    
    function applyStyle(element, style){
        Object.keys(style).forEach(function(key){
            element.style[key] = style[key];
    });
}
}