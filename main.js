/**
 * 数组去重
 * @param {Array} array 需要处理的数组
 * @returns {Array} 返回新的数组
 */
const uniq = (array) => {
    let res = [];

    if(array == null || array.length == 0){
        return res;
    }

    for(let value of array){
        if(res.indexOf(value) == -1){
            res.push(value);
        }
    }

    return res;
}

export default uniq;
