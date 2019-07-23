function countUpDown(n) {
    console.log("上 | UP");

    for (let up = 0; up < n; up++) {
        console.log(up);
    }

    console.log("下 | DOWN");

    for (let down = (n - 1); down >= 0; down--) {
        console.log(down)
    }

    console.log("おわり | FINISHED");
}

countUpDown(10);
