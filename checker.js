const printNum = (n) => {
  if (n <= 100) {
    console.log(n)
    printNum(n + 1)
  }
}

printNum(1)
