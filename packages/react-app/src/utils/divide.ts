/**
 * 将两个数字相除
 * @param a - 被除数
 * @param b - 除数
 * @returns 两数之商
 * @throws 当除数为零时抛出错误
 */
export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('除数不能为零')
  }
  return a / b
}

