import React, { useState } from 'react';

const GuessNumberGame = () => {
  const [secretNumber] = useState(Math.floor(Math.random() * 20) + 1);
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState('black');
  const [gameOver, setGameOver] = useState(false);
  const [guess, setGuess] = useState('');

  const checkGuess = () => {
    const userGuess = parseInt(guess);
    
    if (isNaN(userGuess)) {
      setMessage("请输入有效的数字！");
      setMessageColor("black");
      return;
    }
    
    const newAttempts = attempts + 1;
    setAttempts(newAttempts);
    
    if (userGuess === secretNumber) {
      setMessage(`恭喜你！猜对了！数字是 ${secretNumber}`);
      setMessageColor("green");
      setGameOver(true);
    } else if (userGuess < secretNumber) {
      setMessage("太小了，再大一点！");
      setMessageColor("blue");
    } else {
      setMessage("太大了，再小一点！");
      setMessageColor("red");
    }
    
    setGuess('');
  };

  const handleKeyPress = (e: { key: string; }) => {
    if (e.key === 'Enter') {
      checkGuess();
    }
  };

  const resetGame = () => {
    window.location.reload(); // 简单重置方法，实际项目中可以优化
  };

  return (
    <div style={styles.game}>
      <h2>猜数字游戏</h2>
      <p>我已经想好了一个1-20之间的数字,你能猜出来吗？</p>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        onKeyPress={handleKeyPress}
        min="1"
        max="20"
        placeholder="输入你的猜测"
        disabled={gameOver}
        style={styles.input}
      />
      <button 
        onClick={checkGuess} 
        disabled={gameOver}
        style={styles.button}
      >
        猜一猜
      </button>
      {gameOver && (
        <button onClick={resetGame} style={styles.button}>
          再玩一次
        </button>
      )}
      <div style={{ ...styles.message, color: messageColor }}>{message}</div>
      <p>已尝试次数: <span style={styles.attempts}>{attempts}</span></p>
    </div>
  );
};

// 内联样式对象
const styles = {
  game: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
    marginTop: '50px',
    fontFamily: 'Arial, sans-serif',
  },
  input: {
    padding: '8px',
    margin: '5px',
    width: '150px',
  },
  button: {
    padding: '8px 16px',
    margin: '5px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  message: {
    margin: '15px 0',
    fontWeight: 'bold',
    minHeight: '20px',
  },
  attempts: {
    fontWeight: 'bold',
  },
};

export default GuessNumberGame;