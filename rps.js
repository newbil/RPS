let rock = document.getElementById('im1');
let paper = document.getElementById('im2');
let scissor = document.getElementById('im3');
let choose = [rock , paper , scissor];
let compOptions = ['rock' , 'paper' , 'scissor'];
let player;
let computer;
let finalResult;
let pl = 0;
let com = 0;
let ans;
let result;
function rand(){
    let num = Math.floor(Math.random()*3);
    let compChoose = compOptions[num];
    return(compChoose);
}
rock.onclick = function rock(){
    player=rock.name;
    computer=rand();
    rps(player,computer);
    console.log(result);
}
paper.onclick = function paper(){
    player=paper.name;
    computer=rand();
    rps(player,computer);
    console.log(finalResult);
}
scissor.onclick = function scissor(){
    player=scissor.name;
    computer=rand();
    rps(player,computer);
    console.log(finalResult);
}
function rps(play,comp){
    cpu.innerHTML=computer;
        if (player===computer){
            result='draw';
        }
        else if (player=='rock'){
            if(computer=='paper'){
            result='Computer wins';
            com++;
            }
            else{    
            result='Player wins';
            pl++;
            }
        }
        else if(player=='paper'){
            if(computer=='scissor'){
                result='Computer wins';
                com++;
            }
            else{
                result='Player wins';
                pl++;
            }
        }
        else if (player='scissor'){
            if(computer=='rock'){
                result='Computer wins';
                com++;
            }
            else{
                result='Player wins';
                pl++;
            }
        }
    final.innerHTML=result;
}
