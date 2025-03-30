import React from 'react';

// 定义宠物类型，添加 audioUrl 属性
type Pet = {
  name: string;
  breed: string;
  age: number;
  imageUrl: string;
  audioUrl: string;
};

// 模拟宠物数据，添加萨摩耶，并添加 audioUrl 属性
const pets: Pet[] = [
  {
    name: '咪咪',
    breed: '中华田园猫',
    age: 2,
    imageUrl: "/img/OIP-C (1).jpg",
    audioUrl: "/img/猫-喵呜-短视频切换_爱给网_aigei_com.mp3"
  },
  {
    name: '汪汪',
    breed: '金毛寻回犬',
    age: 3,
    imageUrl: "/img/下载.jpg",
    audioUrl: "/img/犬吠声-短视频vlog-乡村寂静_爱给网_aigei_com.mp3"
  },
  {
    name: '财财',
    breed: '柴犬',
    age: 4,
    imageUrl: "/img/下载 (1).jpg",
    audioUrl: "/audio/财财.mp3"
  },
  {
    name: '萨摩耶',
    breed: '萨摩耶犬',
    age: 2,
    imageUrl: "/img/OIP-C.jpg",
    audioUrl: "/audio/萨摩耶.mp3"
  }
];

const PetPage: React.FC = () => {
  return (
    <div className="p-4 bg-gray-100 flex-1">
      <h1 className="text-3xl font-bold text-center mb-8">可爱宠物展示</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pets.map((pet) => (
          <div key={pet.name} className="bg-white p-2 rounded-lg shadow-md">
            {/* 调整图片宽度为 2/3，即占据父容器 2/3 的宽度，缩小图片内边距 */}
            <img src={pet.imageUrl} alt={pet.name} className="w-2/3 h-40 object-cover mb-2 rounded-md mx-auto" />
            <h2 className="text-xl font-bold mb-2" aria-label={`宠物名字：${pet.name}`}>{pet.name}</h2>
            <p className="mb-1" aria-label={`宠物品种：${pet.breed}`}>品种: {pet.breed}</p>
            <p aria-label={`宠物年龄：${pet.age} 岁`}>年龄: {pet.age} 岁</p>
            {/* 添加音频播放器 */}
            <audio controls>
              <source src={pet.audioUrl} type="audio/mpeg" />
              你的浏览器不支持音频播放。
            </audio>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetPage;    