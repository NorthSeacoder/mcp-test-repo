import { useState } from 'react'
import { divide } from '../utils/divide'

export function Calculator() {
  const [dividend, setDividend] = useState<string>('')
  const [divisor, setDivisor] = useState<string>('')
  const [result, setResult] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleCalculate = () => {
    setError(null)
    setResult(null)
    
    const a = parseFloat(dividend)
    const b = parseFloat(divisor)
    
    if (isNaN(a) || isNaN(b)) {
      setError('请输入有效的数字')
      return
    }
    
    try {
      const res = divide(a, b)
      setResult(res.toString())
    } catch (e) {
      setError((e as Error).message)
    }
  }

  return (
    <div className="calculator">
      <h2>除法计算器</h2>
      <div className="inputs">
        <input
          type="number"
          value={dividend}
          onChange={(e) => setDividend(e.target.value)}
          placeholder="被除数"
        />
        <span>÷</span>
        <input
          type="number"
          value={divisor}
          onChange={(e) => setDivisor(e.target.value)}
          placeholder="除数"
        />
      </div>
      <button onClick={handleCalculate}>计算</button>
      {result && <p className="result">结果: {result}</p>}
      {error && <p className="error">{error}</p>}
    </div>
  )
}

