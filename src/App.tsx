import React from 'react';
import { BrowserRouter as Router, Routes, Route } from'react-router-dom';
import Sidebar from './Sidebar';
import Hexinyi from './XInyi/Hexinyi';
import Zhongxinna from './TiAom-z/Zhongxinna'; // 确保文件名大小写一致
import InitialPage from './InitialPage';
import Yyqx from './Chengtingting/Yyqx';
import Maowenhui from './Chengzipi/Maowenhui'
import Linxiang from './Qinlinxiang/Linxiang'
import Xiaowen from './Zhouxiaowen/Xiaowen'
import Ruiying from './Huangruiying/Ruiying'

const App = () => {
  const menuItems = [
    { label: '何芯轶', link: '/Hexinyi' },
    { label: '钟馨娜', link: '/Zhongxinna' }, 
    { label: '陈婷婷', link: '/Chengtingting' },
    {label:'毛文慧', link:'/Maowenhui'}, 
    {label:'覃林祥', link:'/QinLinxiang'},
    {label:'周小雯', link:'/Zhouxiaowen'},
    {label:'黄芮莹', link:'/Huangruiying'},
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
          <Route path="/Chengtingting" element={<Yyqx />} />
          <Route path="/Maowenhui" element={<Maowenhui />} />
          <Route path="/Qinlinxiang" element={<Linxiang />} />
          <Route path="/Zhouxiaowen" element={<Xiaowen />} />
          <Route path="/Huangruiying" element={<Ruiying />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;