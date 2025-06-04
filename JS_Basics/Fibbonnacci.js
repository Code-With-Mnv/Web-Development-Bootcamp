function fibonacciGenerator (n) {
    let fibo=[];

    var first = 0;
    var second = 1;
    var third;

    fibo.push(first);
    fibo.push(second);

    for(var i = 0; i < n-2; i++){
        third = first + second;
        fibo.push(third);

        first  = second;
        second = third;
    }

    return fibo;
}

