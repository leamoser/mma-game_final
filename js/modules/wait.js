// wait function
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export { wait };