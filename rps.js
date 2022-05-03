let rock = document.getElementById('im1');
let paper = document.getElementById('im2');
let scissor = document.getElementById('im3');
let choose = [rock , paper , scissor];
let compOptions = ['rock' , 'paper' , 'scissor'];
let player;
let computer;
rock.onclick = function(){
    console.log(rock.name);
    rand();
}
paper.onclick = function(){
    console.log(paper.name);
    rand();
}
scissor.onclick = function(){
    console.log(scissor.name);
    rand();
}
function rps(){
    let a;
    for(a=1; a <= 5; a++){
        if (player===computer){
            result='draw';
        }
        else if (player=='rock'){
            if(computer=='paper'){
            result='Computer wins';
            }
            else{    
            result='Player wins';
            }
        }
        else if(player=='paper'){
            if(computer=='scissor'){
                result='Computer wins';
            }
            else{
                result='Player wins';
            }
        }
        else if (player='scissor'){
            if(computer=='rock'){
                result='Computer wins';
            }
            else{
                result='Player wins';
            }
        }   
        console.log(a);
    }
    location.reload();
}
function rand(){
    let num = Math.floor(Math.random()*3);
    let compChoose = compOptions[num];
    console.log(compChoose);
}