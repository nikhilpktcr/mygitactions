function sumRecursion(n){
    if(n<=100){
        console.log(n)
        sumRecursion(n+1)
    }
}


sumRecursion(100000)
