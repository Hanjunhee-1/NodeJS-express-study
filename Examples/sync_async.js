const fs = require("fs");

// fs.readFile() 은 비동기적 처리를 위한 함수이므로 console.log(1) 보다 나중에 찍힘.
fs.readFile("./실습폴더모음/hello.txt", {encoding: "utf-8"}, (err, data) => {
    if (err) console.log(err);
    else console.log(data);
})

// 만약 fs.readFileSync() 였다면 동기적처리를 하게됨.
console.log(1)


/**
 * A(끝내는데 10초가 걸림) 와 B(끝내는데 1초가 걸림) 라는 일이 있고 A 를 먼저하고 B 를 나중에 처리한다고 할 때
 * 비동기적 처리: A 를 먼저하긴 하지만 시간이 오래 걸리므로 일단 B 도 실행하고 B 가 A 보다 먼저 끝난다.
 * 동기적 처리: A 를 먼저하고 10초 뒤에 A 가 끝나면 B 를 실행하고 B 가 끝난다.
 */