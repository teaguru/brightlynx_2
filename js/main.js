
var result = document.getElementById('button');
result.addEventListener('click',  getN); //создадим обработчик
//считаем стартовую позицию
function getN() {
    var getStart = document.getElementById('pos').value;
    getStart = getStart.split('');
    var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']; //массив для перевода букв в цифры
    num_1 = arr.indexOf(getStart[0]);
    num_2 = parseInt(getStart[1]);
    //проверим на всякий случай формат введенных данных
    if (num_1 === -1){ alert('wrong format'); return 'error';}
    if ((Number.isNaN(num_2))){alert('wrong format'); return 'error';}
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
    check();

// второй ход 
    tmpX = (num_1 + 2); 
    tmpY = (num_2 - 1);
    check();

// третий ход 
    tmpX = (num_1 - 2);
    tmpY = (num_2 + 1);
    check();

// четвертый ход
    tmpX = (num_1 - 2);
    tmpY = (num_2 - 1 );
    check();

// пятый ход
    tmpX = (num_1 - 1);
    tmpY = (num_2 + 2);
    check();

//шестой  ход
    tmpX = (num_1 - 1);
    tmpY = (num_2 - 2);
    check();

// седьмой ход
    tmpX = (num_1 + 1);
    tmpY = (num_2 + 2);
    check();

//восьмой ход
    tmpX = (num_1 + 1); 
    tmpY = (num_2 - 2);
    check();
 //выводим массив ответов
alert(answArr.join(' '));

   }
  




                                                                                                                                                                                                                                                                  