
var result = document.getElementById('button');
result.addEventListener('click',  getN); //создадим обработчик
var getStart = document.getElementById('num_1').value;
//считаем стартовую позицию
function getN() {
    var getStart = document.getElementById('num_1').value;
    getStart = getStart.split('');
    var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']; //массив для перевода букв в цифры
    num_1 = arr.indexOf(getStart[0]);
    num_2 = parseInt(getStart[1]);
    var horseArr = [num_1, num_2];
    var answArr = [];
    // function for check the turn
    function check(){
    if ((tmpArr[0] <= 7)&&(tmpArr[1]<= 8)&&(tmpArr[1] >= 1)&&(tmpArr[0] >= 1)) 
    { answArr.push(arr[tmpArr[0]] + tmpArr[1]);}}

//первый ход 
    var tmpArr = [num_1 + 2, num_2 + 1];
    check(tmpArr);

// второй ход 
 var tmpArr = [num_1 + 2, num_2 - 1];
    check(tmpArr);

// третий ход 
var tmpArr = [num_1 - 2, num_2 + 1];
check(tmpArr);

// четвертый ход
var tmpArr = [num_1 - 2, num_2 - 1];
check(tmpArr);

// пятый ход
var tmpArr = [num_1 - 1, num_2 + 2];
check(tmpArr);

//шестой  ход
var tmpArr = [num_1 - 1, num_2 - 2];
check(tmpArr);

// седьмой ход
var tmpArr = [num_1 + 1, num_2 + 2];
check(tmpArr);

//восьмой ход
var tmpArr = [num_1 + 1, num_2 - 2];
check(tmpArr);

alert(answArr.join(' '));

   }
  




                                                                                                                                                                                                                                                                  