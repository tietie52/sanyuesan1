import React from 'react';
import { BrowserRouter as Router, Routes, Route } from'react-router-dom';
import Sidebar from './Sidebar';
import Hexinyi from './XInyi/Hexinyi';
import Zhongxinna from './TiAom-z/Zhongxinna'; // 确保文件名大小写一致
import InitialPage from './InitialPage';

const App = () => {
  const menuItems = [
    { label: '何芯轶', link: '/Hexinyi' },
    { label: '钟馨娜', link: '/Zhongxinna' }, 
    // 移除初始页面的菜单项
  ];
  return (
    <Router>
      <div>
        <Sidebar title="菜单" menuItems={menuItems} /> {/* 传递属性 */}
        <Routes>
          <Route path="/" element={<InitialPage />} />
          <Route path="/Hexinyi" element={<Hexinyi />} />
          <Route path="/Zhongxinna" element={<Zhongxinna />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;