import { divide } from './divide'

describe('divide', () => {
  it('应该正确计算两个正数之商', () => {
    expect(divide(6, 2)).toBe(3)
  })

  it('应该正确计算负数之商', () => {
    expect(divide(-6, -2)).toBe(3)
  })

  it('应该正确计算正负数之商', () => {
    expect(divide(-6, 2)).toBe(-3)
  })

  it('应该正确处理零作为被除数', () => {
    expect(divide(0, 5)).toBe(0)
  })

  it('当除数为零时应该抛出错误', () => {
    expect(() => divide(5, 0)).toThrow('除数不能为零')
  })

  it('应该正确处理小数', () => {
    expect(divide(5, 2)).toBe(2.5)
  })
})

