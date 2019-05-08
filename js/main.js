var result = document.getElementById('button');
result.addEventListener('click',  generateEmptyBoard); //создадим обработчик

function getN() {
    var getStart = document.getElementById('num_1').value;
    getStart = getStart.split('');
    alert(getStart);

}
function generateEmptyBoard() {
    var row = [];
    for(var i = 0; i < 120; i++) {
        row.push((i < 20 || i > 100 || !(i % 10) || i % 10 == 9)
            ? -1
            : i2an(i));
    }
    return row;
}

// converts an index in the mailbox into its corresponding value in algebraic notation
function i2an(i) {
    alert("abcdefgh"[(i % 10) - 1] + (10 - Math.floor(i / 10)));
}
