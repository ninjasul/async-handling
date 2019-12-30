function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function throwError() {
    await sleep(1000);
    const error = new Error();
    throw error;
}

async function process() {
    try {
        await throwError();
    } catch (e) {
        console.error(e);
    }
}

process();
