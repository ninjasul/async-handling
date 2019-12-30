function increaseAndPrint(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const value = n + 1;

            if (value === 5) {
                const error = new Error();
                error.name = 'ValueIsFiveError';
                reject(error);
                return;
            }

            console.log(value);
            resolve(value);
        }, 1000);
    });
}

// Promise는 코드의 depth 가 일정하게 유지되는 장점이 있음.
// 하지만 에러 발생 지점을 파악하기도 힘들고 분기 작업을 수행하기도 번거로움.
increaseAndPrint(0)
    .then(increaseAndPrint)
    .then(increaseAndPrint)
    .then(increaseAndPrint)
    .then(increaseAndPrint)
    .then(increaseAndPrint)
    .catch(error => {
        console.log(error);
    });