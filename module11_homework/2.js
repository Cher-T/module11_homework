function primeCheck(num) {
    if (num <= 1000) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0 || num === 0 || num === 1) {
                console.log ('Не является простым числом');
            }else{
                console.log ('Является простым числом');
            }
            return;
        }
    }else{
        console.log('Числа более тысячи не допускаются');
    }
}

primeCheck (37);