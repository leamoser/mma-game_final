let getTime = () => {
    let date = new Date();
    let time = date.getHours() + ':' + date.getMinutes();
    return time;
}
export { getTime };