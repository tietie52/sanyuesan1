import React, { useEffect, useState } from 'react';

const App = () => {
  const [serverStatus, setServerStatus] = useState({
    cpu: 42,
    memory: 68,
    api: '正常',
    database: '正常',
    disk: 82
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setServerStatus({
        cpu: Math.floor(Math.random() * 100),
        memory: Math.floor(Math.random() * 100),
        disk: Math.floor(Math.random() * 100),
        api: Math.random() > 0.1 ? '正常' : '异常',
        database: Math.random() > 0.05 ? '正常' : '异常'
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      background: 'linear-gradient(90deg, #0f0c29, #24243e, #302b63, #24243e, #0f0c29)',
      backgroundSize: '800% 800%',
      animation: 'gradient 15s ease infinite',
      height: '100vh',
      margin: 0,
      padding: 0
    }}>
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes ribbonAnim {
          0% { background-position: 0% 50%; }
          100% { background-position: 400% 50%; }
        }
      `}</style>

      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '4px',
        background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #ffc300, #8e44ad)',
        backgroundSize: '400% 400%',
        animation: 'ribbonAnim 4s linear infinite'
      }} />

      <div style={{
        maxWidth: '800px',
        margin: '100px auto',
        padding: '30px',
        background: 'rgba(255,255,255,0.05)',
        borderRadius: '15px',
        boxShadow: '0 0 20px rgba(0,0,0,0.3)',
        color: 'white'
      }}>
        <h1 style={{
          textAlign: 'center',
          marginBottom: '30px',
          color: '#ffffff',
          textShadow: '2px 2px 10px rgba(0,0,0,0.5)'
        }}>系统状态监控</h1>

        <StatusCard title="服务器状态">
          <Metric label="CPU使用率" value={`${serverStatus.cpu}%`} />
          <Metric label="内存占用" value={`${serverStatus.memory}%`} />
        </StatusCard>

        <StatusCard title="服务状态">
          <Metric label="API服务" value={serverStatus.api} status={serverStatus.api} />
          <Metric label="数据库" value={serverStatus.database} status={serverStatus.database} />
        </StatusCard>

        <StatusCard title="存储状态" status="warning">
          <Metric label="磁盘空间" value={`${serverStatus.disk}% (警告)`} />
        </StatusCard>
      </div>
    </div>
  );
};

const StatusCard = ({ children, title, status = 'up' }) => {
  const [isHover, setIsHover] = useState(false);
  
  return (
    <div 
      style={{
        margin: '20px 0',
        padding: '20px',
        background: 'rgba(255,255,255,0.03)',
        borderLeft: '4px solid transparent',
        borderRadius: '8px',
        transition: 'transform 0.3s ease',
        transform: isHover ? 'translateX(10px)' : 'none',
        borderLeftColor: {
          up: '#4cd137',
          down: '#e84393',
          warning: '#ffc300'
        }[status]
      }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <h3 style={{ marginBottom: '15px' }}>{title}</h3>
      <div style={{ display: 'flex', flexDirection: 'column' }}>{children}</div>
    </div>
  );
};

const Metric = ({ label, value, status = 'up' }) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      margin: '15px 0',
      padding: '8px 0'
    }}>
      <span style={{ fontSize: '1.1em' }}>{label}</span>
      <span style={{
        fontSize: '1.2em',
        fontWeight: '500',
        color: {
          up: '#4cd137',
          down: '#e84393',
          warning: '#ffc300'
        }[status]
      }}>{value}</span>
    </div>
  );
};

export default App;