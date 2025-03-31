import React, { useState } from 'react';
import ReactPageFlip from 'react-pageflip';

type PageContent = {
  title: string;
  bgColor: string;
  content: React.ReactNode;
};

const YeePages: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  
  // 页面内容配置
  const pages: PageContent[] = [
    {
      title: "封面",
      bgColor: "bg-gradient-to-r from-red-600 to-yellow-500",
      content: (
        <div className="flex flex-col items-center justify-center h-full">
          < img 
            src="/img/yee-cover.jpg" 
            className="w-48 h-48 rounded-full border-4 border-white shadow-2xl mb-6"
            alt="易烊千玺"
          />
          <h1 className="text-5xl font-bold text-white mb-2">易烊千玺</h1>
          <p className="text-xl text-white opacity-90">千禧世代全能艺人</p >
          <div className="mt-4 animate-bounce">▼</div>
        </div>
      )
    },
    {
      title: "简介",
      bgColor: "bg-gradient-to-br from-blue-100 to-white",
      content: (
        <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 border-l-4 border-red-500 pl-4">
            基本信息
          </h2>
          <ul className="space-y-4 text-gray-600">
            <li>🎂 2000年11月28日</li>
            <li>🏠 湖南怀化人</li>
            <li>📚 中央戏剧学院毕业</li>
            <li>🌟 TFBOYS成员</li>
          </ul>
          <div className="mt-8 flex gap-4">
            < img 
              src="/img/yee-child.jpg" 
              className="w-32 h-32 object-cover rounded-lg shadow"
              alt="童年时期"
            />
            <img
              src="/img/yee-stage.jpg"  
              className="w-32 h-32 object-cover rounded-lg shadow"
              alt="舞台表演"
            />
          </div>
        </div>
      )
    },
    {
      title: "影视作品",
      bgColor: "bg-gradient-to-tr from-gray-900 to-gray-700",
      content: (
        <div className="text-white p-8">
          <h2 className="text-3xl font-bold mb-6 text-yellow-400">🎬 代表作品</h2>
          <div className="grid gap-6">
            <div className="p-4 bg-black/30 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">《少年的你》</h3>
              <p>饰演小北 · 第39届金像奖最佳新演员</p >
            </div>
            <div className="p-4 bg-black/30 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">《长津湖》系列</h3>
              <p>饰演伍万里 · 票房破57亿</p >
            </div>
            <div className="p-4 bg-black/30 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">《奇迹·笨小孩》</h3>
              <p>主演景浩 · 文牧野执导作品</p >
            </div>
          </div>
        </div>
      )
    },
    {
      title: "音乐成就",
      bgColor: "bg-gradient-to-br from-purple-500 to-pink-500",
      content: (
        <div className="p-8 text-white">
          <h2 className="text-3xl font-bold mb-6">🎵 音乐之旅</h2>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                🎤
              </div>
              <div>
                <h3 className="text-xl font-semibold">单曲《冷静和热情之间》</h3>
                <p>QQ音乐巅峰榜冠军单曲</p >
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                🏆
              </div>
              <div>
                <h3 className="text-xl font-semibold">获奖记录</h3>
                <p>2021腾讯音乐娱乐盛典年度最佳歌手</p >
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <ReactPageFlip
        width={550}
        height={780}
        showCover={true}
        className="shadow-2xl"
        onFlip={({ data }) => setCurrentPage(data)}
      >
        {pages.map((page, index) => (
          <div 
            key={index}
            className={`${page.bgColor} relative`}
            data-density="hard"
          >
            {/* 页面装饰元素 */}
            <div className="absolute top-4 right-4 text-sm opacity-70">
              {index + 1} / {pages.length}
            </div>
            
            {/* 动态页面内容 */}
            <div className="h-full w-full p-8">
              {page.content}
            </div>

            {/* 交互提示 */}
            {index === currentPage && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm animate-pulse">
                {index === pages.length - 1 ? "回到封面" : "滑动翻页 →"}
              </div>
            )}
          </div>
        ))}
      </ReactPageFlip>
    </div>
  );
};

export default YeePages;