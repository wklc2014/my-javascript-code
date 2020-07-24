/**
 * 根据条件获取目标映射数组中某个元素或某个元素的值
 * @param  {[Array]}  options.map       [目标映射数组]
 * @param  {[String]} options.path      [目标元素的路径]
 * @param  {[String]} options.condition [条件字符串]
 * @return {[Any]}                      [目标值]
 */
function getMapValue({ map, path, condition }) {

  // 内置的映射值
  const obj = {

  }

  // 解析条件字符串
  // a=1&b=2&c=3
  // [{key: 'a', val: '1'}, {key: 'b', val: '2'}, {key: 'c', val: '3'}]
  function _parseConditionString(conditionString) {
    const result = [];
    if (typeof conditionString === 'string') {
      const conditionArray = conditionString.split('&');
      conditionArray.forEach((_condition) => {
        const _array = _condition.split('=');
        if (_array.length === 2) {
          const size = result.length;
          result[size] = {
            key: _array[0],
            val: _array[1],
          }
        }
      })
    }
    return result;
  }

  // 判断是否是数组
  function _isArray(value){
    return Object.prototype.toString.call(value) === '[object Array]';
  }

  // 查询目标映射对象
  function _getTargetMap(mapList, conditionString) {
    if (_isArray(mapList)) {
      const condition = _parseConditionString(conditionString);
      return mapList.find((_item) => {
        // 某一个条件不满足
        const notMeet = condition.some((_a) => _item[_a.key] !== _a.val);
        return !notMeet;
      })
    }
    return null;
  }

  let mapList = typeof map === 'string' ? obj[map] : map;

  const target = _getTargetMap(mapList, condition);
  if (target) {
    return path ? target[path] : target;
  }
  return target;
}

module.exports = getMapValue;
