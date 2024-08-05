function count (firstNum, lastNum) {
    let countProcess = firstNum;

    let intervalId = setInterval(function() {
        if (countProcess <= lastNum){
            console.log(countProcess);
            countProcess++;
        }else clearInterval(intervalId);
    }, 1000); 
}

count(3, 7);
