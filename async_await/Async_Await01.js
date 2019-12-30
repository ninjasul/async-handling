function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function process() {
    console.log('안녕하세요!');

    // Promise 함수 호출 부 앞에 await 를 붙여주면
    // 해당 프로미스가 끝날 때까지 기다렸다가 다음 작업을 수행할 수 있음.
    await sleep(1000);
    console.log('반갑습니다!');

    // async 가 붙은 함수는 Promise를 리턴함.
}

// 작업이 정상 종료 된 경우 then() 으로 후처리를 수행할 수 있음.
process().then(() => {
    console.log('작업이 끝났어요!');
});
