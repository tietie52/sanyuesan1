import React from'react';
import { BrowserRouter as Router, Routes, Route } from'react-router-dom';
import Sidebar from './Sidebar';
import Hexinyi from './XInyi/Hexinyi';
import InitialPage from './InitialPage';

const App = () => {
  const menuItems = [
    { label: '何芯轶', link: '/Hexinyi' },
    {label:'',link:'/InitialPage'}
  ];
  return (
    <Router>
      <div>
        <Sidebar title="菜单" menuItems={menuItems} /> {/* 传递属性 */}
        <Routes>
          <Route path="/" element={<InitialPage />} />
          <Route path="/Hexinyi" element={<Hexinyi />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;