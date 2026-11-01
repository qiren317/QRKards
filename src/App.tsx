import { useState } from 'react'

function App() {
  const [hp, setHp] = useState(100)

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh', 
      backgroundColor: '#222', 
      color: 'white' 
    }}>
      <h1>QRKards 测试场</h1>
      <h2>玩家血量: {hp}</h2>
      
      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        <button 
          onClick={() => setHp(hp - 10)}
          style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
        >
          受到 10 点伤害
        </button>
        <button 
          onClick={() => setHp(100)}
          style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
        >
          重置血量
        </button>
      </div>
    </div>
  )
}

export default App