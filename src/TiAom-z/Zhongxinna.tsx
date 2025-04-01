import React, { useState } from 'react';

// 定义海绵宝宝相关人物类型
type SpongeBobCharacter = {
  name: string;
  description: string;
  imageUrl: string;
  audioUrl: string;
  quote: string; 
};

export const spongeBobCharacters: SpongeBobCharacter[] = [
  {
    name: '海绵宝宝',
    description: '黄色方形海绵，居住在比奇堡的菠萝屋，天真乐观，充满善意。',
    imageUrl: "/img/OIP-C3.jpg",
    audioUrl: "",
    quote: '我准备好了！我准备好了！'
  },
  {
    name: '派大星',
    description: '粉红色的海星，海绵宝宝的好朋友，头脑简单但十分重情义。',
    imageUrl: "/img/OIP-C 4.jpg",
    audioUrl: "",
    quote: '知识不能替代友谊，比起失去你，我宁愿做个白痴。'
  },
  {
    name: '章鱼哥',
    description: '绿色章鱼，性格暴躁，喜欢吹竖笛，住在海绵宝宝和派大星中间。',
    imageUrl: "/img/OIP-C 5.jpg",
    audioUrl: "",
    quote: '我讨厌星期一。'
  },
  {
    name: '蟹老板',
    description: '红色螃蟹，“蟹堡王”餐厅的老板，视钱如命但也有善良的一面。',
    imageUrl: "/img/OIP-C 6.jpg",
    audioUrl: "",
    quote: '钱！钱！钱！'
  }
];

const SpongeBobCharacterPage: React.FC = () => {
  // 为每个角色创建一个状态来记录点击次数
  const [clickCounts, setClickCounts] = useState<{ [key: string]: number }>({});

  const handleImageClick = (name: string) => {
    setClickCounts(prevState => ({
      ...prevState,
      [name]: (prevState[name] || 0) + 1
    }));
  };

  return (
    <div className="p-4 bg-yellow-100 min-h-screen"> 
      <h1 className="text-4xl font-bold text-center mb-8 text-orange-600">海绵宝宝欢乐世界</h1> 
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"> 
        {spongeBobCharacters.map((character) => (
          <div key={character.name} className="bg-white p-4 rounded-lg shadow-xl transform hover:scale-105 transition duration-300"> 
            <img 
              src={character.imageUrl} 
              alt={character.name} 
              className="w-full h-48 object-cover mb-2 rounded-md"
              onClick={() => handleImageClick(character.name)}
            />
            <h2 className="text-2xl font-bold mb-2 text-blue-600" aria-label={`人物名字：${character.name}`}>{character.name}</h2>
            <p className="mb-1 text-gray-700" aria-label={`人物描述：${character.description}`}>{character.description}</p>
            {Array.from({ length: clickCounts[character.name] || 0 }).map((_, index) => (
              <p key={index} className="mb-2 italic text-gray-600">名言: "{character.quote}"</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpongeBobCharacterPage;