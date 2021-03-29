function average(array) {
    let i = 0,
    arrSum = 0,
    length = array.length;
    while (i < length) {
        arrSum += array[i++];
    }
    return arrSum / length;
}

export { average };