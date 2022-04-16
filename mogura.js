let mogura1;
let mogura2;
let mogura3;

let start_button;

let tensu = 0;
let gokei;
let game_end = false;

let min = 1000;
let max = 4000;

window.onload = function(){
    start_game()
}

function start_game(){
    mogura1 = document.getElementById("image_file1");
    mogura2 = document.getElementById("image_file2");
    mogura3 = document.getElementById("image_file3");

    gokei = document.getElementById("tensu_hyoji");

    start_button = document.getElementById("start");
    start_button.onclick = function(){
        game_end = false;
        tensu = 0;
        gokei.innerHTML = tensu;
        start_game();
    }

    mogura1.onclick = function(){
        click(mogura1); 
    }

    mogura2.onclick = function(){
        click(mogura2);
    }

    mogura3.onclick = function(){
        click(mogura3);
    }

    let ransu1 = Math.floor(Math.random() * (max - min + 1))+ min;
    setTimeout(function(){
        hidden(mogura1);
    },ransu1);

    let ransu2 = Math.floor(Math.random() * (max - min + 1))+ min;
    setTimeout(function(){
        hidden(mogura2);
    },ransu2);

    let ransu3 = Math.floor(Math.random() * (max - min + 1))+ min;
    setTimeout(function(){
        hidden(mogura3);
    },ransu3);

    setTimeout(stop_game,10000)
}

function click(img_mogura){
    img_mogura.src = "img/penguin2.png"
    setTimeout(function(){
        modosu(img_mogura);
    },1000);
    tensu += 1;
    gokei.innerHTML = tensu;
}

function modosu(img_mogura){
    img_mogura.src = "img/penguin1.png"
}

function hidden(img_mogura){
    img_mogura.style.visibility = "hidden";
    if(game_end == false){
        
        let ransu = Math.floor(Math.random() * (max - min + 1))+ min;
        setTimeout(function(){
            visible(img_mogura);
        },ransu);
    }
}

function visible(img_mogura){
    img_mogura.style.visibility = "visible";
    if(game_end == false){
    
        let ransu = Math.floor(Math.random() * (max - min + 1))+ min;
        setTimeout(function(){
            hidden(img_mogura);
        },ransu);
    }
}

function stop_game(){

    console.log(tensu);
    if(0 <= tensu && tensu < 10){
        setTimeout(window.open('/dame.html'),3000);
    }else if(11 <= tensu && tensu < 20){
        setTimeout(window.open('/torimayoshi.html'),3000);
    }else if(21 <= tensu && tensu < 40){
        setTimeout(window.open('/nice.html'),3000);
    }else{
        alert("エラー");
    }

        game_end = true;
}
