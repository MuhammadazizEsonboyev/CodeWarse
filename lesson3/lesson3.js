function countBy(x, n) {
    var z = [];
    for (i = 1; i <= n; i++) {
        z.push(x * i);
    }
    console.log(z);;
  }

  countBy(1, 9)