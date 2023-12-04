
function startClassification() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/YhFb96kAi/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if (error){
        console.error(error);
    }else{
        console.log(results);
        random_number_r = Math.floor(Math.random()*255)+1;
        random_number_g = Math.floor(Math.random()*255)+1;
        random_number_b = Math.floor(Math.random()*255)+1;

        document.getElementById("rl").innerHTML = 'I can hear :- '+ results[0].label;
        document.getElementById("rc").innerHTML = 'Accuracy :- '+ (results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("rl").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("rc").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img  = document.getElementById("m1");
       
            if(results[0].label=="Cat"){
            img.src  = 'c.gif';
        
        } 
            else if(results[0].label=="Dog"){
            img.src  = 'd.gif';
           
        }
            else if(results[0].label=="Cow"){
            img.src  = 'cow-square.gif';
            

        }else if(results[0].label=="Pig"){
            img.src  = 'p.gif';
          
        }
            else {
            img.src  = 'b.gif';
            

        }
    }
}