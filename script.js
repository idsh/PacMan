var numOfBalls;
var pts5;
var pts5Color ='purple';
var pts15;
var pts15Color = 'green';
var pts25;
var pts25Color ='black' ;
var numofmonsters;
var gameTime;
var username;
var life;
var password;
var ArrowUp ="38";
var ArrowDown = "40";
var ArrowLeft = "37";
var ArrowRight = "39";
var position ;
var monster1x =parseInt( 0);
var monster1y = parseInt(0);
var monster2x = parseInt(9);
var monster2y = parseInt(9);
var monster3x = parseInt(0);
var monster3y = parseInt(9);
var medicine1X;
var medicine1Y;
var medicine2X;
var medicine2Y;
var medicine3X;
var medicine3Y;
var specialShapeX;
var specialShapeY;
var music ;
var music2;
var music3;
var music4;
var Users =  {};
Users["a"] ="a";



function manegeUsername(){
    if(username==null){
        var x = document.getElementsByName('username')[0].value;
        username = x;
    }
    var y = document.getElementById("p1");
    y.style.display = "block";
    let p2 = document.getElementById("p2");
    p2.style.display = "none";
    document.getElementById("p1").textContent = "Hello, " + username;
    let Welcome = document.getElementById("p2");
    Welcome.style.display = "none";
}

function manegeSettings(){
    alert("Registered!");
    insertUser();
    clearScreen();
    displaySettings();
    manegeUsername();
    
        
}
function insertUser(){
    var xUser = document.forms["reg"]["username"].value;
    var xPassword =document.forms["reg"]["password"].value;
    Users[xUser] = xPassword
}
 function SaveSettings(){

    numOfBalls = document.getElementsByName('numOfBalls')[0].value; 
    pts5Color = document.getElementsByName('5ptsC')[0].value;
    pts15Color = document.getElementsByName('15ptsC')[0].value;
    pts25Color = document.getElementsByName('25ptsC')[0].value;
    gameTime = document.getElementsByName('gameTime')[0].value;
    numofmonsters = document.getElementsByName('numofmonsters')[0].value;
 }
 function manegeGame(){
    SaveSettings();
    getGameballscolors();
    clearScreen();
    displayGame();
    StartGame();
}
function SaveSettingsRandom(){
    pts5Color = document.getElementsByName('5ptsC')[0].value;
    pts15Color = document.getElementsByName('15ptsC')[0].value;
    pts25Color = document.getElementsByName('25ptsC')[0].value;
}
function manegeGameRandom(){
    SaveSettingsRandom();
    getGameballscolors();
    clearScreen();
    displayGame();
    StartGame();
}
function getGameballscolors(){
    
}
function submitKeySettings(key,event){
    var i = 0 ;
    var j = 1
    while(i<15){
        i++;
    }
    var code = event.which || event.keyCode;
    if (key === 'up'){
        j--;
        $("#ArrowUp1").html(event.key);
        ArrowUp = code;
    }else if (key === 'down'){
        $("#ArrowDown1").html(event.key);
        ArrowDown = code;
        j++;
    }else if (key === 'left'){
        $("#ArrowLeft1").html(event.key);
        ArrowLeft = code;
        i++;
    }else if (key === 'rigth'){
        $("#ArrowRight1").html(event.key);
        ArrowRight = code;
    
    }else if (key === '5pts'){
    $("#5pts").html(event.key);
    pts5Color = code;
}
else if (key === '15pts'){
    $("#15pts").html(event.key);
    pts15Color = code;
}else if (key === '25pts'){
    $("#25pts").html(event.key);
    pts25Color = code;
}


}

function toNumber(str) {
    return str*1;
}

function restoreSettings(){
    clearScreen();
    displaySettings();
}


    function checkSettings( ){
        var errors1 = 0;
        var numOfBalls = document.getElementsByName('numOfBalls')[0].value;
        numOfBalls = toNumber(numOfBalls)
        if(numOfBalls < 50 || numOfBalls > 90 ){
            errors1++;
            alert("number of balls should be between 50 to 90");
        }
        var gameTime = document.getElementsByName('gameTime')[0].value;
        if(gameTime<60){
            errors1++;
            alert("min game time is 60 seconds!");
        }
        var numofmonsters = document.getElementsByName('numofmonsters')[0].value;
        if(numofmonsters>3 || numofmonsters < 1){
            errors1++;
            alert("number of monsters should be between 1-3");
        }
        if(errors1==0){
            manegeGame();
        }
        else{
            restoreSettings();
        }

    }
    function clearScreen(){
        let Welcome = document.getElementById("Welcome");
        Welcome.style.display = "none";
        let GameOver = document.getElementById("GameOver");
        GameOver.style.display = "none";
        let Login = document.getElementById("Login");
        Login.style.display = "none";
        let Register = document.getElementById("Register");
        Register.style.display = "none";
        let Settings = document.getElementById("Settings");
        Settings.style.display = "none";
        let Play = document.getElementById("Game");
        Play.style.display = "none";
    }
    function manegeAbout(){
        
    }

    function displayRegister(){
        var x = document.getElementById("Register");
        //cleanInputs();
        if (x.style.display === "none")
        {
            clearScreen();
            x.style.display = "block";
        }
        
    }
    function displayLogin(){
        
        var x = document.getElementById("Login");
        //cleanInputs();
        if (x.style.display === "none")
        {
            clearScreen();
            x.style.display = "block";
        }
    }
    function displayGame(){
        var x = document.getElementById("Game");
        //cleanInputs();
        if (x.style.display === "none")
        {
            clearScreen();
            x.style.display = "block";
        }
    }
    function displaySettings(){
        var x = document.getElementById("Settings");
        if (x.style.display === "none")
        {
            clearScreen();
            x.style.display = "block";
        }

    }
    function manegeLogin(){
        clearScreen();
        displayLogin();
    }
     function manegeTtyLogin(){
             
         var x = document.getElementsByName('username1')[0].value;
         var y = document.getElementsByName('password1')[0].value;
         if( Users[x]===y){
            username = x;
            restoreSettings();
            manegeUsername();
            
         }
         else{
             alert("wrong password/user-name, please try again!");
             manegeLogin();
         }
     }
    function manegeRegistration(){
        clearScreen();
        displayRegister();
    }


         function randomSettings(){
            numOfBalls = Math.floor(Math.random() * 100) + 1;
            while (numOfBalls > 90 || numOfBalls < 50){
                numOfBalls = Math.floor(Math.random() * 100) + 1;
            }

            GameTime = Math.floor(Math.random() * 1000) + 1;
            while( GameTime < 60)
                GameTime = Math.floor(Math.random() * 1000) + 1;
            numofmonsters = Math.floor(Math.random() * 10) + 1;
            while( numofmonsters < 1 || numofmonsters > 3)
                numofmonsters = Math.floor(Math.random() * 10) + 1;
            manegeGameRandom();    
        }
        function manegeAbout(){

        }
        function AfterGame_Welcome(){
            music.stop();
            clearScreen();
            displayWelcome();

        }
        function displayWelcome(){
            var x = document.getElementById("Welcome");
            //cleanInputs();
            if (x.style.display === "none")
            {
                clearScreen();
                x.style.display = "block";
            }
        }
        function manegeWelcome(){
            clearScreen();
            displayWelcome();
        }
        function Start() {
            var monster1x =parseInt( monster1x);
            var monster1y = parseInt(monster1y);
            var monster2x = parseInt(monster2x);
            var monster2y = parseInt(monster2y);
            var monster3x = parseInt(monster3x);
            var monster3y = parseInt(monster3y);
            var totalNumOdballs = numOfBalls;
            var numOfPurpuleBalls =parseInt( getAmountOfBalls(pts5Color));
            var numOfGreenBalls =parseInt( getAmountOfBalls(pts15Color));
            var numOfBlackBalls =parseInt( getAmountOfBalls(pts25Color));
            if(totalNumOdballs - numOfGreenBalls - numOfPurpuleBalls - numOfBlackBalls > 0 )
                numOfPurpuleBalls = numOfPurpuleBalls +(totalNumOdballs - numOfGreenBalls - numOfPurpuleBalls - numOfBlackBalls);
            board = new Array();
            score = 0;
            life = 3;
            pac_color = "yellow";
            var cnt = 85;
            var monstersRemain = numofmonsters;
            var food_remain = totalNumOdballs;
            var medicine = 3 ;
            var pacman_remain = 1;
            start_time = new Date();
            for (var i = 0; i < 10; i++) {
                board[i] = new Array();
                //put obstacles in (i=3,j=3) and (i=3,j=4) and (i=3,j=5), (i=6,j=1) and (i=6,j=2)
                for (var j = 0; j < 10; j++) {
                    if ((i === 3 && j === 3) || (i === 3 && j === 4) || (i === 3 && j === 5) || (i === 6 && j === 1) || (i === 6 && j === 2)||(i === 8 && j === 8)||(i === 7 && j === 8)||(i === 6 && j === 8)||(i === 6 && j === 7)||(i === 2 && j === 7)) {
                        board[i][j] = 4;
                    }
                    else if(((i ===0 && j=== 0)||(i===9 && j===9) ||(i===0 && j===9))&& (monstersRemain>0)){
                        board[i][j] = 10;
                        if((i ===0 && j=== 0) &&monstersRemain>0){
                            monster1x = i;
                            monster1y = j;
                            monstersRemain--; 
                            }
                            if((i===9 && j===9)&&monstersRemain>0){
                                monster2x = i;
                                monster2y = j;
                                monstersRemain--; 
                                }
                            if((i===0 && j===9)&&monstersRemain>0){
                                monster3x = i;
                                monster3y = j;
                                monstersRemain--; 
                            } 
                    }
                    else {
                        var randomNum = Math.random();
                        if (randomNum <= 1.0 * food_remain / cnt) {
                            if(numOfPurpuleBalls>0){
                                food_remain--;
                                board[i][j] = 1;
                                numOfPurpuleBalls--;
                            }
                            else if(numOfGreenBalls>0 && numOfPurpuleBalls===0){
                                food_remain--;
                                board[i][j] = 5;
                                numOfGreenBalls--;
                            }
                            else if(numOfBlackBalls>0 && numOfGreenBalls ===0 &&numOfPurpuleBalls ===0){
                                food_remain--;
                                board[i][j] = 6;
                                numOfBlackBalls--;
                            }

                        }
                         else if (randomNum < 1.0 * (pacman_remain + food_remain) / cnt) {
                            shape.i = i;
                            shape.j = j;
                            pacman_remain--;
                            board[i][j] = 2;
                        } else {
                            board[i][j] = 0;
                        }
                        cnt--;
                        emptyCell--;
                    }
                }
            }
            

            for(var i = 0 ; i < 3 ; i++){
                if(i===0){
                    var emptyCell = findRandomEmptyCell(board);
                    board[emptyCell[0]][emptyCell[1]] = 9;
                    medicine1X = emptyCell[0];
                    medicine1Y = emptyCell[1];
                    medicine--;
                }
                if(i===1){
                    var emptyCell = findRandomEmptyCell(board);
                    board[emptyCell[0]][emptyCell[1]] = 9;
                    medicine2X = emptyCell[0];
                    medicine2Y = emptyCell[1];
                    medicine--;
                }
                if(i===2){
                    var emptyCell = findRandomEmptyCell(board);
                    board[emptyCell[0]][emptyCell[1]] = 9;
                    medicine3X = emptyCell[0];
                    medicine3Y = emptyCell[1];
                    medicine--;
                }
            }
            while (food_remain > 0) {
                var emptyCell = findRandomEmptyCell(board);
                board[emptyCell[0]][emptyCell[1]] = 1;
                food_remain--;
            }

            var emptyCell22 = findRandomEmptyCell(board);
            specialShapeX = emptyCell22[0];
            specialShapeY = emptyCell22[1];
            board[specialShapeX][specialShapeY]= 50;

            keysDown = {};
            addEventListener("keydown", function (e) {
                keysDown[e.code] = true;
            }, false);
            addEventListener("keyup", function (e) {
                keysDown[e.code] = false;
            }, false);
            interval = setInterval(UpdatePosition, 120);
        }
        function findRandomEmptyCell(board) {
            var i = Math.floor((Math.random() * 9) + 1);
            var j = Math.floor((Math.random() * 9) + 1);
            while (board[i][j] !== 0 ) {
                i = Math.floor((Math.random() * 9) + 1);
                j = Math.floor((Math.random() * 9) + 1);
            }
            return [i, j];
        }
    
        /**
         * @return {number}
         */
        function GetKeyPressed() {
            if (keysDown['ArrowUp']) {
                return 1;
            }
            if (keysDown['ArrowDown']) {
                return 2;
            }
            if (keysDown['ArrowLeft']) {
                return 3;
            }
            if (keysDown['ArrowRight']) {
                return 4;
            }
            else{
                return 5;
            }
        }
        function getAmountOfBalls(x){
            if(x===pts5Color){
                var pracent = parseInt(60);
                var ballsNum = parseInt(numOfBalls);
                var to_return = (pracent*ballsNum)
                to_return = to_return/100;
                to_return = parseInt(to_return);
                return to_return;
            }
            if(x===pts15Color){
                var pracent = parseInt(30);
                var ballsNum = parseInt(numOfBalls);
                var to_return = (pracent*ballsNum)
                to_return = to_return/100;
                to_return = parseInt(to_return);
                return to_return;
            }
            else if(x===pts25Color){
                var pracent = parseInt(10);
                var ballsNum = parseInt(numOfBalls);
                var to_return = parseInt(pracent*ballsNum);
                to_return = to_return/100;
                to_return = parseInt(to_return);
                return to_return;
            }
            else{
                return '';
            }
                
        }
        function Draw() {
            context.clearRect(0, 0, canvas.width, canvas.height); //clean board
            lblScore.value = score;
            lblLife.value = life;
            lblTime.value = time_elapsed;
            for (var i = 0; i < 10; i++) {
                for (var j = 0; j < 10; j++) {
                    var center = new Object();
                    center.x = i * 60 + 30;
                    center.y = j * 60 + 30;
                    if (board[i][j] === 2) {
                         if(position===1){
                            context.beginPath();
                            context.arc(center.x, center.y, 30, 1.65 * Math.PI, 1.35 * Math.PI); // half circle
                            context.lineTo(center.x, center.y);
                            context.fillStyle = pac_color; //color
                            context.fill();
                            context.beginPath();
                            context.arc(center.x - 15, center.y - 13, 5, 0, 2 * Math.PI); // circle
                            context.fillStyle = "purple"; //color
                            context.fill();
                         }   
                        
                         else if (position===2){
                            context.beginPath();
                            context.arc(center.x, center.y, 30, 0.65 * Math.PI, 0.35 * Math.PI); // half circle
                            context.lineTo(center.x, center.y);
                            context.fillStyle = pac_color; //color
                            context.fill();
                            context.beginPath();
                            context.arc(center.x + 17, center.y - 5, 5, 0, 2 * Math.PI); // circle
                            context.fillStyle = "purple"; //color
                            context.fill();
                         }
                         else if (position===3){
                            context.beginPath();
                            context.arc(center.x, center.y, 30, 1.15 * Math.PI, 0.85 * Math.PI); // half circle
                            context.lineTo(center.x, center.y);
                            context.fillStyle = pac_color; //color
                            context.fill();
                            context.beginPath();
                            context.arc(center.x + 7, center.y - 15, 5, 0, 2 * Math.PI); // circle
                            context.fillStyle = "purple"; //color
                            context.fill();
                         }
                         else if(position===4){
                            context.beginPath();
                            context.arc(center.x, center.y, 30, 0.15 * Math.PI, 1.85 * Math.PI); // half circle
                            context.lineTo(center.x, center.y);
                            context.fillStyle = pac_color; //color
                            context.fill();
                            context.beginPath();
                            context.arc(center.x + 5, center.y - 15, 5, 0, 2 * Math.PI); // circle
                            context.fillStyle = "purple"; //color
                            context.fill();
                         }
                         else {

                            context.beginPath();
                            context.arc(center.x, center.y, 30, 0.15 * Math.PI, 1.85 * Math.PI); // half circle
                            context.lineTo(center.x, center.y);
                            context.fillStyle = pac_color; //color
                            context.fill();
                            context.beginPath();
                            context.arc(center.x + 5, center.y - 15, 5, 0, 2 * Math.PI); // circle
                            context.fillStyle = "purple"; //color
                            context.fill();

                         }
                         

                         


                        
                    } else if (board[i][j] === 1) {
                        context.beginPath();
                        context.arc(center.x, center.y, 15, 0, 2 * Math.PI); // circle
                        context.fillStyle = pts5Color; //color
                        context.fill();
                    } else if (board[i][j] === 10) {
                       context.beginPath();
                       context.arc(center.x, center.y, 23, 0, 2 * Math.PI); // half circle
                       context.lineTo(center.x, center.y);
                       context.fillStyle = "#f7f8f9"; //color
                       context.fill();
                       context.beginPath();
                       context.arc(center.x + 13, center.y - 5, 5, 0, 2 * Math.PI); // circle
                       context.fillStyle = "purple"; //color
                       context.fill();
                       context.beginPath();
                       context.arc(center.x - 13, center.y - 5, 5, 0, 2 * Math.PI); // circle
                       context.fillStyle = "purple"; //color
                       context.fill();
                       context.beginPath();
                       context.rect(center.x -7, center.y + 10, 14, 5);
                       context.fillStyle = "purple"; //color
                       context.fill();
                       
                    } else if (board[i][j] === 5) {
                        context.beginPath();
                        context.arc(center.x, center.y, 15, 0, 2 * Math.PI); // circle
                        context.fillStyle = pts15Color; //color
                        context.fill();
                    } else if (board[i][j] === 6) {
                        context.beginPath();
                        context.arc(center.x, center.y, 15, 0, 2 * Math.PI); // circle
                        context.fillStyle = pts25Color; //color
                        context.fill();        
                    } else if (board[i][j] === 4) {
                        context.beginPath();
                        context.rect(center.x - 30, center.y - 30, 60, 60);
                        context.fillStyle = "purple"; //color
                        context.fill();
                    }
                    else if (board[i][j] === 9){

                       

                        context.beginPath();
                        context.fillStyle = "#0066ff";
                        context.moveTo(center.x, center.y);
                        context.lineTo(center.x + 20, center.y - 25);
                        context.lineTo(center.x - 20, center.y -25);
                        context.fill();
                       
                        context.beginPath();
                        context.fillStyle = "#0066ff";
                        context.moveTo(center.x, center.y-30);
                        context.lineTo(center.x + 20, center.y - 5);
                        context.lineTo(center.x - 20, center.y -5);
                        context.fill();

                        
                
                        
                    }
                    else if (board[i][j] === 50){
                        context.beginPath();
                        context.fillStyle = "#yellow";
                        context.moveTo(center.x, center.y);
                        context.lineTo(center.x + 20, center.y - 25);
                        context.lineTo(center.x - 20, center.y -25);
                        context.fill();
                        context.beginPath();
                        context.rect(center.x - 10, center.y -24, 20, 16);
                        context.fillStyle = "purple"; //color
                        context.fill();
                    }

                }
            }
    
    
        }
        function mangeLife(){

            life--;
            
            if(life>0){
                board[monster1x][monster1y]=0;
                board[monster2x][monster2y]=0;
                board[monster3x][monster3y]=0;
                board[0][0] = 10;
                board[9][9] = 10;
                board[0][9] = 10;
                monster1x =parseInt( 0);
                monster1y = parseInt(0);
                monster2x = parseInt(9);
                monster2y = parseInt(9);
                monster3x = parseInt(0);
                monster3y = parseInt(9);
                var emptyCell = findRandomEmptyCell(board);
                board[emptyCell[0]][emptyCell[1]] = 2;
                shape.i = emptyCell[0];
                shape.j = emptyCell[1];
            }
            score = score - 10;
            if(life<=0){
                window.clearInterval(interval);
                music.stop();
                manegeGameOver();
                document.getElementById("p66").textContent = "You Lost!!!";
            }
        }
        function findDistance(xVal1,yVal1,xVal2,yVal2){
            var x1 = parseInt(xVal1);
            var x2 = parseInt(xVal2);
            var y1 = parseInt(yVal1);
            var y2 = parseInt(yVal2);
            var x = (x1-x2);
            x = Math.abs(x);
            var y = (y1-y2);
            y = Math.abs(y);
            var to_return = x + y;
            return to_return;

        }
        function findMin(up1,down2,left3,rigth4){
            var x1 = parseFloat(up1);
            var x2 = parseFloat(down2);
            var y1 = parseFloat(left3);
            var y2 = parseFloat(rigth4);
            var min =  Math.min(x1,x2,y1,y2);
            if(min === x1){
                return 1;
            }
            if(min === x2){
                return 2;
            }
            if(min === y1){
                return 3;
            }
            if(min === y2){
                return 4;
            }
        }
        function findIfLegalMove(xVal,yVal){
            if(xVal > -1 && xVal < 10 && yVal > -1 && yVal < 10 && board[xVal][yVal]!==4 )
                return 1;
            else{
                return 2;
            }    
        }
        function updateMonsterPosition(monsterx,monstery,pacman,monsternum){
                if(numofmonsters<monsternum){
                    return 7;
                }
                var up1 = findDistance(monsterx,monstery-1,pacman.i,pacman.j);
                var down2 = findDistance(monsterx,monstery+1,pacman.i,pacman.j);
                var left3 = findDistance(monsterx-1,monstery,pacman.i,pacman.j);
                var rigth4 = findDistance(monsterx+1,monstery,pacman.i,pacman.j);
                if(findIfLegalMove(monsterx,monstery-1)===2){
                    up1 = 1000;
                }
                if(findIfLegalMove(monsterx,monstery+1)===2){
                    down2 = 1000;
                }
                if(findIfLegalMove(monsterx-1,monstery)===2){
                    left3 = 1000;
                } 
                if(findIfLegalMove(monsterx+1,monstery)===2){
                    rigth4 = 1000;
                }   
                var x = findMin(up1,down2,left3,rigth4);
                //console.log(up1,down2,left3,rigth4);

            
                if(x===1   ){
                    return 1;
                    
                }
                else if(x===2 ){
                    return 2;
                    
                }    
                else if(x===3 ){
                    return 3;
                    
                }
                else if(x==4){
                    return 4;
                }
                else if(x===up1)
                    return 1;

        }
        function UpdatePosition() {
            board[shape.i][shape.j] = 0;
            /*
            if(medicine1X!==500){
                board[medicine1X][medicine1Y] = 9;
            }
            if(medicine2X!==500){
                board[medicine2X][medicine2Y] = 9;
            }
            if(medicine3X!==500){
                board[medicine3X][medicine3Y] = 9;
            }
            */
            var x = GetKeyPressed();
            if (x === 1) {
                if (shape.j > 0 && board[shape.i][shape.j - 1] !== 4) {
                   position = 1 ;
                    shape.j--;
                }
            }
            if (x === 2) {
                if (shape.j < 9 && board[shape.i][shape.j + 1] !== 4) {
                    position = 2 ;
                    shape.j++;
                }
            }
            if (x === 3) {
                if (shape.i > 0 && board[shape.i - 1][shape.j] !== 4) {
                    position = 3 ;
                    shape.i--;
                }
            }
            if (x === 4) {
                if (shape.i < 9 && board[shape.i + 1][shape.j] !== 4) {
                    position = 4 ;
                    shape.i++;
                }
            }
            if(x!==5){
                board[specialShapeX][specialShapeY] = 0;
                var emptyCell22X = findRandomEmptyCell(board);
                specialShapeX = emptyCell22X[0];
                specialShapeY = emptyCell22X[1];
                board[specialShapeX][specialShapeY]= 50;
                board[monster1x][monster1y]=0;
                board[monster2x][monster2y]=0;
                board[monster3x][monster3y]=0;
                var x2 = updateMonsterPosition(monster1x,monster1y,shape,1);
                if(x2===3){//up
                    monster1x = parseInt(monster1x);
                    monster1x--;
                    board[monster1x][monster1y] = 10;
                }
                if(x2===4){//down
                    monster1x = parseInt(monster1x);
                    monster1x++;
                    board[monster1x][monster1y] = 10;
                }
                if (x2===1){//left
                    monster1y= parseInt(monster1y);
                    monster1y--;
                    board[monster1x][monster1y] = 10;
                }
                if(x2===2){//rigth
                    monster1y= parseInt(monster1y);
                    monster1y++;
                    board[monster1x][monster1y] = 10;
                }
                var y = updateMonsterPosition(monster2x,monster2y,shape,2);
                if(y===3){
                    monster2x= parseInt(monster2x);
                    monster2x--;
                    board[monster2x][monster2y] = 10;
                }
                if(y===4){
                    monster2x= parseInt(monster2x);
                    monster2x++;
                    board[monster2x][monster2y] = 10;
                }
                if (y===1){
                    monster2y= parseInt(monster2y);
                    monster2y--;
                    board[monster2x][monster2y] = 10;
                }
                if(y===2){
                    monster2y= parseInt(monster2y);
                    monster2y++;
                    board[monster2x][monster2y] = 10;
                }
                var z = updateMonsterPosition(monster3x,monster3y,shape,3);
                if(z===3){
                    monster3x= parseInt(monster3x);
                    monster3x--;
                    board[monster3x][monster3y] = 10;
                }
                if(z===4){
                    monster3x= parseInt(monster3x);
                    monster3x++;
                    board[monster3x][monster3y] = 10;
                }
                if (z===1){
                    monster3y= parseInt(monster3y);
                    monster3y--;
                    board[monster3x][monster3y] = 10;
                }
                if(z===2){
                    monster3y= parseInt(monster3y);
                    monster3y++;
                    board[monster3x][monster3y] = 10;
                }
            }
            if(board[shape.i][shape.j]===10){
                mangeLife();
            }
            if (board[shape.i][shape.j] === 1) {
                music1.play();
                score = score + 5;
                board[shape.i][shape.j] = 2;
            }
            if (board[shape.i][shape.j] === 5) {
                music1.play();
                score = score + 15;
                board[shape.i][shape.j] = 2;
            }
            if (board[shape.i][shape.j] === 6) {
                music1.play();
                score = score + 25;
                board[shape.i][shape.j] = 2;
            }
            if (board[shape.i][shape.j] === 1) {
                music4.play();
                score = score + 50;
                board[shape.i][shape.j] = 2;
            }
            if (board[shape.i][shape.j] === 9){
                life = life + 1 ;
                deleteMedicne(shape.i,shape.j);
                board[shape.i][shape.j] = 2;
            }
            else{
                board[shape.i][shape.j] = 2;
            }
            if((shape.i !==medicine1X || shape.j !==medicine1Y)&& (monster1x !==medicine1X || monster1y !==medicine1Y) 
            &&(monster2x !==medicine1X || monster2y !==medicine1Y) && (monster3x !==medicine1X || monster3y !==medicine1Y) && medicine1X!==500){
                board[medicine1X][medicine1Y]=9;
            }  
            if((shape.i !==medicine2X || shape.j !==medicine2Y)&& (monster1x !==medicine2X || monster1y !==medicine2Y) 
            &&(monster2x !==medicine2X || monster2y !==medicine2Y) && (monster3x !==medicine2X || monster3y !==medicine2Y)&& medicine2X!==500){
                board[medicine2X][medicine2Y]=9;
            } 
            if((shape.i !==medicine3X || shape.j !==medicine3Y)&& (monster1x !==medicine3X || monster1y !==medicine3Y) 
            &&(monster2x !==medicine3X || monster2y !==medicine3Y) && (monster3x !==medicine3X || monster3y !==medicine3Y)&& medicine3X!==500){
                board[medicine3X][medicine3Y]=9;
            } 
             
            
  
            var currentTime = new Date();
            time_elapsed = (currentTime - start_time) / 1000;
            if (score >= 20 && time_elapsed <= 10) {
                pac_color = "green";
            }
            if(score >= 40){
                pac_color = "orange";
            }

            if (score >= 150 || time_elapsed>= gameTime) {
                window.clearInterval(interval);
                music.stop();
                manegeGameOver();
                if(score>=150)
                    document.getElementById("p66").textContent = "We have a Winner!!!" ;
                else if(score<= 150){
                    document.getElementById("p66").textContent ="You can do better, " +"your score is " + score;
                }    

            }
            if(time_elapsed + 10 >= gameTime && time_elapsed +9<=gameTime ){
                music3.play();
            }
             else {
                Draw();
            }
        }
       function deleteMedicne(x,y){
            if(medicine1X===x && medicine1Y === y){
                medicine1X =500;
            }
            if(medicine2X===x && medicine2Y === y){
                medicine2X =500;
            }
            if(medicine3X===x && medicine3Y === y){
                medicine3X =500;
            }
        }
    function displayGameOver(){
            var x = document.getElementById("GameOver");
            if (x.style.display === "none")
            {
                clearScreen();
                x.style.display = "block";
            }
        
    }
    function manegeGameOver(){
        clearScreen();
        displayGameOver();
        music = new sound("GameOver.mp3");
        music.play();
    }

   function StartGame(){ 
    Start();
    music = new sound("music.mp3");
    music1 = new sound("eating.mp3");
    music3 = new sound("10sec.mp3");
    music4 = new sound("wow.mp3");
    music.play();
    var context = canvas.getContext("2d");
    var shape = new Object();
    var board;
    var score;
    var pac_color;
    var start_time;
    var time_elapsed;
    var interval;
    
   }

   function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }    
}
  


