import React from 'react';

const InitialPage: React.FC = () => {
    return (
        <div style={{
            textAlign: 'center',
            color: 'blue',
            backgroundImage: `url('/img/OIP-C (2).jpg')`, 
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            minHeight: '100vh'
        }}>
            <h1 style={{ textAlign: 'center', color: 'blue' }}>区块链第三小组作业</h1>
            <p style={{ textAlign: 'center', color: 'blue' }}>请点击菜单查看不同内容。</p>
        </div>
    );
};

export default InitialPage;    