function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const getDog = async () => {
    await sleep(1000);
    return '멍멍이';
};

const getRabbit = async () => {
    await sleep(500);
    return '토끼';
}

const getTurtle = async () => {
    await sleep(3000);
    return '거북이';
}

async function process() {
    // Promise.all 로 묶으면 각 작업을 비동기로 수행함.
    // 결과는 비구조화 할당으로 각각 받아올 수 있음.
    // Promise.all 은 등록한 프로미스 중 하나라도 실패하면 모두 실패한 것으로 간주함.
    const [dog, rabbit, turtle] = await Promise.all([getDog(), getRabbit(), getTurtle()]);

    console.log(dog);
    console.log(rabbit);
    console.log(turtle);
}

process();
