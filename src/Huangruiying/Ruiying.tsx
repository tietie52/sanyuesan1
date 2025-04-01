import React, { useState } from 'react';

// 角色数据
const characters = [
  {
    id: 1,
    name: '江户川柯南',
    alias: '工藤新一',
    age: '7岁（实际17岁）',
    description: '原本是高中生侦探工藤新一，被黑暗组织灌药后身体缩小。现寄住在毛利侦探事务所，帮助毛利小五郎解决各种案件。',
    image: '/img/156-1565522_conan-edogawa.jpg.jpg'
  },
  {
    id: 2,
    name: '毛利兰',
    age: '17岁',
    description: '工藤新一的青梅竹马，空手道高手。性格温柔善良，一直在等待新一回来。',
    image: '/img/ran.jpg.jpg'
  },
  {
    id: 3,
    name: '灰原哀',
    alias: '宫野志保',
    age: '7岁（实际18岁）',
    description: '前黑暗组织成员，同样因药物缩小。冷静睿智的科学家，现与柯南共同对抗组织。',
    image: '/img/haibara.jpg.jpg'
  },
  // 可以继续添加更多角色...
];

const CharacterCard = ({ character }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow m-4">
      < img 
        className="w-full h-64 object-cover" 
        src={character.image} 
        alt={character.name}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-blue-800">{character.name}</div>
        {character.alias && (
          <p className="text-gray-600 text-base mb-2">
            别名：{character.alias}
          </p >
        )}
        <p className="text-gray-600 text-base">年龄：{character.age}</p >
        
        <button 
          onClick={() => setShowDetails(!showDetails)}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {showDetails ? '收起详情' : '显示更多'}
        </button>

        {showDetails && (
          <p className="text-gray-700 text-base mt-4">
            {character.description}
          </p >
        )}
      </div>
    </div>
  );
};

const Characters = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12 text-red-600">
        名侦探柯南主要人物介绍
      </h1>
      <div className="flex flex-wrap justify-center">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

export default Characters;