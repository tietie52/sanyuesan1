import React, { useState } from 'react';

type PawPatrolCharacter = {
  name: string;
  role: string;
  description: string;
  imageUrl: string;
  skill: string;
  catchphrase: string;
};

const PawPatrolPage: React.FC = () => {
  const [selectedChar, setSelectedChar] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  // 完整汪汪队成员数据
  const pawPatrolCharacters: PawPatrolCharacter[] = [
    {
      name: '莱德',
      role: '队长',
      description: '聪明勇敢的男孩，汪汪队的领导者',
      imageUrl: "/img/laide.jpg",
      skill: '指挥协调',
      catchphrase: '汪汪队，总部集合！'
    },
    {
      name: '毛毛',
      role: '消防犬',
      description: '热情勇敢的斑点狗，负责消防任务',
      imageUrl: "/img/OIP-C (10).jpg",
      skill: '灭火救援',
      catchphrase: '准备就绪，汪汪！'
    },
    {
      name: '阿奇',
      role: '警犬',
      description: '认真负责的德国牧羊犬，维持治安',
      imageUrl: "/img/aqi.jpg",
      skill: '追踪侦查',
      catchphrase: '包在我身上！'
    },
    {
      name: '小砾',
      role: '工程犬',
      description: '活泼的斗牛犬，擅长建筑工程',
      imageUrl: "/img/xiaoli.jpg",
      skill: '挖掘建造',
      catchphrase: '小砾往前冲！'
    },
    {
      name: '灰灰',
      role: '环保犬',
      description: '聪明的混血犬，负责资源回收',
      imageUrl: "/img/huihui.jpg",
      skill: '废物利用',
      catchphrase: '别丢掉，再利用！'
    },
    {
      name: '路马',
      role: '水上救生犬',
      description: '乐观的拉布拉多，擅长水上救援',
      imageUrl: "/img/luma.jpg",
      skill: '水上救援',
      catchphrase: '开始行动吧！'
    },
    {
      name: '天天',
      role: '飞行犬',
      description: '可爱的可卡颇犬，负责空中支援',
      imageUrl: "/img/tiantian.jpg",
      skill: '空中侦察',
      catchphrase: '飞向天空！'
    },
    
  ];

  return (
    <div className={`p-4 min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-blue-50'}`}>
    
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">
        🐾 汪汪队立大功 - 全员集合 🐾
      </h1>
      <button 
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="px-4 py-2 rounded-lg bg-blue-500 text-white"
      >
        {isDarkMode ? '☀️ 日间模式' : '🌙 夜间模式'} {/* 新增行4-7 */}
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {pawPatrolCharacters.map((character) => (
          <div 
            key={character.name}
            className="bg-white rounded-xl shadow-lg p-6 cursor-pointer transition-all hover:transform hover:scale-105"
            onClick={() => setSelectedChar(selectedChar === character.name ? null : character.name)}
          >
            < img 
              src={character.imageUrl}
              alt={character.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-blue-800">{character.name}</h2>
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                {character.role}
              </span>
            </div>
            
            {selectedChar === character.name && (
              <div className="mt-4 border-t pt-4">
                <p className="text-gray-700 mb-2">{character.description}</p >
                <div className="text-sm space-y-2">
                  <p>
                    <span className="font-semibold">专属技能：</span>
                    {character.skill}
                  </p >
                  <p className="text-blue-600 italic">
                    "{character.catchphrase}"
                  </p >
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PawPatrolPage;