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
/**
 * 当前数组中str匹配的个数
 * @param {Array} array
 * @param {string} str 需要匹配的字符
 * @returns {number}
 */
const strNumber = (array,str) => {
    let num = 0;

    for(let value of array){
        value += '';
        if(value.indexOf(str) > -1){
            num++;
        }
    }

    return num;
}