const startButton = document.getElementById('startGame');
const boardDiv = document.getElementById('board');
const gameSection = document.getElementById('gameSection');
const resetButton = document.getElementById('resetGame');
const cells = document.querySelectorAll('.cell');


let currentPlayer = "";
let turn = 0

startButton.addEventListener('click', startGame);
resetButton.addEventListener('click', resetGame);


function startGame() {

    const playerSpan = document.getElementById('playerSpan');
    const player1 = document.getElementById('player1');
    const player2 = document.getElementById('player2');
    
    if (player1.value === "" || player2.value === "") {
        alert("Por favor, insira o nome dos dois jogadores.");
        return;
    }

    currentPlayer = player1;
    playerSpan.textContent = currentPlayer.value;
    startButton.disabled = true;
    document.getElementById('player1').disabled = true;
    document.getElementById('player2').disabled = true;

    cells.forEach(cell => {
        cell.addEventListener('click', handleCellClick);
    });

}

function handleCellClick(event) {
    const cell = event.target; 

    cell.textContent = currentPlayer === player1 ? "X" : "O";
    cell.removeEventListener('click' , handleCellClick)
    cell.classList.add("disable")
    checkWin()
    currentPlayer = currentPlayer === player1 ? player2 : player1;
    turn++
    console.log(turn)
    playerSpan.textContent = currentPlayer.value;
    if(turn == 9) {
        endGame()
        document.getElementById("currentPlayer").innerHTML = "Empate";
    }

}

function checkWin() {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const cellValues = Array.from(cells).map(cell => cell.textContent);

    for (const condition of winConditions) {
        const [a, b, c] = condition
        if (cellValues[a] && cellValues[a] === cellValues[b] && cellValues[a] === cellValues[c]) {
            let vencedor = cellValues[a]
            const h2 = document.getElementById("currentPlayer")
            vencedor = vencedor === 'X' ? document.getElementById("player1").value : document.getElementById('player2').value
            h2.innerHTML = 'Vencedor ' +  vencedor
            endGame()
            return
        }
    }
}

function resetGame() {
    cells.forEach(cell => {
        cell.textContent = ""
        cell.classList.remove('disable')
    })

        turn = 0
        currentPlayer = ''
        document.getElementById('player1').value = ''
        document.getElementById('player2').value = ''

        document.getElementById('player1').disabled = false;
        document.getElementById('player2').disabled = false;
        startButton.disabled = false;

        document.getElementById("currentPlayer").innerHTML = "Vez de: <span id='playerSpan'></span>";

}

function endGame() {
    cells.forEach(cell => {
        cell.removeEventListener('click', handleCellClick)
        cell.classList.add('disable')
    })
}