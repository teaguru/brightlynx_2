
var result = document.getElementById('button');
result.addEventListener('click',  getN); //создадим обработчик
var getStart = document.getElementById('num_1').value;
//считаем стартовую позицию
function getN() {
    var getStart = document.getElementById('num_1').value;
    getStart = getStart.split('');
    var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']; //массив для перевода букв в цифры
    num_1 = arr.indexOf(getStart[0]);
    num_2 = parseInt(getStart[1]);
    var answArr = [];

// function for check the turn
    function check(){
        if (( tmpX <= 7)&&(tmpY <= 8)&&(tmpY >= 1)&& (tmpX >= 1)) 
        {   
            answArr.push(arr[tmpX] + tmpY);
        }}

//первый ход 
    tmpX = (num_1 + 2),
    tmpY = (num_2 + 1);
    check(tmpX, tmpY);

// второй ход 
    tmpX = (num_1 + 2); 
    tmpY = (num_2 - 1);
    check(tmpX, tmpY);

// третий ход 
    tmpX = (num_1 - 2);
    tmpY = (num_2 + 1);
    check(tmpX, tmpY);

// четвертый ход
    tmpX = (num_1 - 2);
    tmpY = (num_2 - 1 );
    check(tmpX, tmpY);

// пятый ход
    tmpX = (num_1 - 1);
    tmpY = (num_2 + 2);
    check(tmpX, tmpY);

//шестой  ход
    tmpX = (num_1 - 1);
    tmpY = (num_2 - 2);
    check(tmpX, tmpY);

// седьмой ход
    tmpX = (num_1 + 1);
    tmpY = (num_2 + 2);
    check(tmpX, tmpY);

//восьмой ход
    tmpX = (num_1 + 1); 
    tmpY = (num_2 - 2);
    check(tmpX, tmpY);

alert(answArr.join(' '));

   }
  




                                                                                                                                                                                                                                                                  