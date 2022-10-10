// Documents
const grid = document.getElementsByClassName("cell");
const boardlayout = document.getElementsByClassName("board")[0];
const body = document.getElementsByName("body");
const formEvent1 = document.getElementById("formEvent1")
const formEvent2 = document.getElementById("formEvent2")
const gameState = {
    board: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ],
    gameOver: false,
    playerName: "",
    player1Input: "",
    player2Input: "", 
    player1Turn: false,
    player2Turn: false

  } 
// Functions
function renderGame (){
    for (let i = 0; i < boardlayout.length; i++) {
            const currValue = gameState.board[i]
            const currCell = document.getElementByClass(`${i}`)
        currCell.innerText = currValue; 
    }
    console.log("You clicked a square!")
}

function checkRow() {
    for (let i = 0; i < 3; i++){
        console.log(gameState.board[i])
}
}
function checkColumn() {
    let column147 = gameState.board.map(j => j[0]);
    let column258 = gameState.board.map(j => j[1]);
    let column369 = gameState.board.map(j => j[2]);
    console.log(column147, column258, column369);
 }


function checkWin (){
     checkRow(); 
     checkColumn();
     if (gameState.board[0][0] === 'x' || "o" && gameState.board[0][0] === gameState.board[0][1] && gameState.board[0][1] === gameState.board[0][2]){
        gameState.gameOver = true;
        console.log("You win") 
       }
    if (gameState.board[1][0] === 'x' || "o" && gameState.board[1][0] === gameState.board[1][1] && gameState.board[1][1] === gameState.board[1][2]) {
        gameState.gameOver = true;
        console.log("You win")
    }
    if (gameState.board[2][0] === 'x' || "o" && gameState.board[2][0] === gameState.board[2][1] && gameState.board[2][1] === gameState.board[2][2]) {
        gameState.gameOver = true;
        console.log("You win")
    }
    if (gameState.board[0][0] === 'x' || "o" && gameState.board[0][0] === gameState.board[1][0] && gameState.board[1][0] === gameState.board[2][0]) {
        gameState.gameOver = true;
        console.log("You win")
    }
    if (gameState.board[0][1] === 'x' || "o" && gameState.board[0][1] === gameState.board[1][1] && gameState.board[1][1] === gameState.board[2][1]) {
        gameState.gameOver = true;
        console.log("You win")
    }
    if (gameState.board[0][2] === 'x' || "o" && gameState.board[0][2] === gameState.board[1][2] && gameState.board[1][2] === gameState.board[2][2]) {
        gameState.gameOver = true;
        console.log("You win")
    }
    }   
    
// Event Listeners 
    boardlayout.addEventListener('click', function(e){ 
        renderGame();
        checkWin(); 
        for (let i = 0; i < gameState.board.length; i++) {
            if (gameState.board[i] !== "x" & gameState.board[i] !== "o"){
                gameState.player1Turn = true; 
            }
            if (gameState.player1Turn = false) {
                gameState.player2Turn = true; 
            }
            if(gameState.player2Turn = true) {
                console.log(gameState.player2Turn)
            } else {
                gameState.player1Turn = true; 
            }
        }
        if (player1Turn === "true") {
            e.target.id.innerText = "X"
        }
        if (player2Turn === "true") {
            e.target.id.innerText = "O"
        }
        console.log(e.target.id)
        console.log("gamestate:", gameState)
    });
    
    
    formEvent1.addEventListener('submit', function(e) {
    e.preventDefault();
    gameState.playerName = player1Input.value; 
    if (player1Input.value !== "") {
        formEvent1.style.display = 'none';
    }
    if (formEvent1.style.display === 'none') {
        formEvent1.innerText = 'Player 1:' + ' ' + player1Input.value; 
        formEvent1.style.display = 'block';
    }
 }); 

 formEvent2.addEventListener('submit', function(e) {
    e.preventDefault();
    gameState.playerName = player2Input.value;
    if (player2Input.value !== "") {
        formEvent2.style.display = 'none';
    }
    if (formEvent2.style.display === 'none') {
        formEvent2.innerText = 'Player 2:' + ' ' + player2Input.value; 
        formEvent2.style.display = 'block';
    }
 }); 
