function parityCheck() {
    if (!isNaN(+yourNum)){
    if (yourNum%2 == 0){
        console.log('Чётное число');
    }else{
        console.log('Нечётное число');
    }
}else{
    console.log('Вы ошиблись. Повторите попытку')
}
}

let yourNum = prompt('Enter your number');

parityCheck();