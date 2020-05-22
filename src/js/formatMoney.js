/**
 * 格式化输入金额
 * moneyString: 金额字符串
 * digit: 保留小数点后位数
 * isEnd: 是否完成输入(完成输入不能以.结尾，输入过程中可以)
 */
function formatMoney(moneyString = '', digit = 2, isEnd = false) {
  // 去掉首尾空格
  let str = moneyString.trim();

  // 查询输入的第一个.号的位置
  const nthFirstDot = str.indexOf('.');

  // .号前面部分
  let firstDotBefore = '';

  // .号后面部分
  let firstDotAfter = '';

  // 是否输入了.号标识
  const hasDot = nthFirstDot !== -1;

  if (hasDot) {
    firstDotBefore = str.substr(0, nthFirstDot);
    firstDotAfter = str.substring(nthFirstDot + 1);
  } else {
    firstDotBefore = str;
    firstDotAfter = '';
  }

  // 获取整数部分
  function _getInteger(s) {
    // 如果没有输入整数部分，则整数部分设为空
    if (!s) return '';

    // 把0开头的整数部分，去掉首位0
    if (s.startsWith('0') && s !== '0' && s !== '0.') {
      return s.replace(/^0*/, '');
    }
    return s;
  }

  // 获取小数部分
  function _getDecimal(s) {
    return s.replace(/\./g, '').substr(0, digit);
  }

  const strInteger = _getInteger(firstDotBefore);
  const strDecimal = _getDecimal(firstDotAfter);

  if (hasDot) {
    const output = (strInteger || '0') + '.' + strDecimal;
    if (isEnd && output.endsWith('.')) {
      return output.substr(0, output.length - 1);
    }
    return output;
  }

  return strInteger || '0';
}

module.exports = formatMoney;
