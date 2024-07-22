function $(element) {
    return document.getElementById(element);
}
click = 0;
let turn = true;

function createDivs() {
    const board = document.getElementById('bang');

    for (let i = 0; i < 100; i++) {
        const newDiv = document.createElement('div');
        newDiv.className = 'row';
        newDiv.id = i;
        newDiv.onclick = function() {
            playGame(this);
        };
        if (i % 10 === 0) {
            const rowContainer = document.createElement('div');
            rowContainer.className = 'rows';
            board.appendChild(rowContainer);
        }
        board.lastChild.appendChild(newDiv);
    }
}
window.onload = createDivs();

const boards = document.querySelectorAll(".row");
function turnn() {
    if (turn == true) {
        $("luotchoi").innerText = "Lượt Chơi Của  X";
    } else {
        $("luotchoi").innerText = "Lượt Chơi Của  O";
    }
}

function colorBoard(){
    for(let i =0 ; i <=99;i++){
       if(i<10){
        if(i%2==0){
            $(i).classList.add("newRow")
        }
    }
    }
}
window.onload = turnn();

const row = document.getElementsByClassName("row");

function playGame(row) {
    row.innerText = turn ? "X" : "O";
    row.classList.add(turn ? "xRow" : "oRow");
    turn = !turn;
    click++;
    const board = Array(boards.length).fill(null);

    let winx = [
        [0, 1, 2, 3, 4],
        [1, 2, 3, 4, 5],
        [2, 3, 4, 5, 6],
        [3, 4, 5, 6, 7],
        [4, 5, 6, 7, 8],
        [5, 6, 7, 8, 9],
    ];
    for (let i in board) {
        board[i] = $(`${i}`).innerText;
    }

    const newboard = [];
    while (board.length) newboard.push(board.splice(0, 10));

    for (let i of winx) {
        let [a, b, c, d, e] = i;
        for (let j in newboard) {
            if (
                newboard[j][a] &&
                newboard[j][a] == newboard[j][b] &&
                newboard[j][a] == newboard[j][c] &&
                newboard[j][a] == newboard[j][d] &&
                newboard[j][a] == newboard[j][e]
            ) {
                newboard[j][a] == "X" ? xWin() : oWin();
                $(`${j + a }`).classList.add("rowwin");
                $(`${j + b }`).classList.add("rowwin");
                $(`${j + c }`).classList.add("rowwin");
                $(`${j + d }`).classList.add("rowwin");
                $(`${j + e }`).classList.add("rowwin");
            }
            if (
                newboard[a][j] &&
                newboard[a][j] == newboard[b][j] &&
                newboard[a][j] == newboard[c][j] &&
                newboard[a][j] == newboard[d][j] &&
                newboard[a][j] == newboard[e][j]
            ) {
                newboard[a][j] == "X" ? xWin() : oWin();
                $(`${a + j}`).classList.add("rowwin");
                $(`${b + j}`).classList.add("rowwin");
                $(`${c + j}`).classList.add("rowwin");
                $(`${d + j}`).classList.add("rowwin");
                $(`${e + j}`).classList.add("rowwin");
            }
            if (
                newboard[a][j] &&
                newboard[a][j] == newboard[b][Number(j) + 1] &&
                newboard[a][j] == newboard[c][Number(j) + 2] &&
                newboard[a][j] == newboard[d][Number(j) + 3] &&
                newboard[a][j] == newboard[e][Number(j) + 4] &&
                newboard[a][j] !== ""
            ) {
                newboard[a][j] == "X" ? xWin() : oWin();
                $(`${a + j}`).classList.add("rowwin");
                $(`${Number(b + j) + 1}`).classList.add("rowwin");
                $(`${Number(c + j) + 2}`).classList.add("rowwin");
                $(`${Number(d + j) + 3}`).classList.add("rowwin");
                $(`${Number(e + j) + 4}`).classList.add("rowwin");
            }
            if (
                newboard[a][j] &&
                newboard[a][j] == newboard[b][Number(j) - 1] &&
                newboard[a][j] == newboard[c][Number(j) - 2] &&
                newboard[a][j] == newboard[d][Number(j) - 3] &&
                newboard[a][j] == newboard[e][Number(j) - 4] &&
                newboard[a][j] !== ""
            ) {
                newboard[a][j] == "X" ? xWin() : oWin();
                $(`${a + j}`).classList.add("rowwin");
                $(`${Number(b + j) - 1}`).classList.add("rowwin");
                $(`${Number(c + j) - 2}`).classList.add("rowwin");
                $(`${Number(d + j) - 3}`).classList.add("rowwin");
                $(`${Number(e + j) - 4}`).classList.add("rowwin");
            }
        }
        if (click == 100) {
            alert(" Hòa");
        }
    }

    console.log(newboard);
    turnn();
}

function reset() {
    for (const i of row) {
        i.innerText = "";
        i.classList.remove("xRow");
        i.classList.remove("oRow");
        i.classList.remove("rowwin");
    }
    $("bang").classList.remove("banggg");
    click = 0;
}
function xWin() {
    scoreX.innerText++;
    alert(" X Win");
    $("bang").classList.add("banggg");
}
function oWin() {
    scoreO.innerText++;
    alert(" O Win");
    $("bang").classList.add("banggg");
}
function Exit() {
    for (const i of row) {
        i.innerText = "";
        i.classList.remove("xRow");
        i.classList.remove("oRow");
        i.classList.remove("rowwin");
    }
    $("bang").classList.remove("banggg");
    scoreO.innerText = "0";
    scoreX.innerText = "0";
    click = 0;
}
