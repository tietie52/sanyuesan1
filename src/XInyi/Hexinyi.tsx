import React, { useState, useRef, useEffect } from'react';

// 定义宠物类型，添加 likes 属性
type Pet = {
    name: string;
    breed: string;
    age: number;
    imageUrl: string;
    audioUrl: string;
    likes: number;
};

// 模拟宠物数据，添加 likes 属性并初始化为 0
const pets: Pet[] = [
    {
        name: '咪咪',
        breed: '中华田园猫',
        age: 2,
        imageUrl: "/img/OIP-C (1).jpg",
        audioUrl: "/img/猫-喵呜-短视频切换_爱给网_aigei_com.mp3",
        likes: 0
    },
    {
        name: '汪汪',
        breed: '金毛寻回犬',
        age: 3,
        imageUrl: "/img/下载.jpg",
        audioUrl: "/img/犬吠声-短视频vlog-乡村寂静_爱给网_aigei_com.mp3",
        likes: 0
    },
    {
        name: '财财',
        breed: '柴犬',
        age: 4,
        imageUrl: "/img/下载 (1).jpg",
        audioUrl: "/audio/财财.mp3",
        likes: 0
    },
    {
        name: '耶耶',
        breed: '萨摩耶犬',
        age: 2,
        imageUrl: "/img/OIP-C.jpg",
        audioUrl: "/audio/萨摩耶.mp3",
        likes: 0
    }
];

const PetPage: React.FC = () => {
    // 使用useState管理包含所有宠物状态的数组
    const [petList, setPetList] = useState(pets);
    // 管理掉落的爪子元素（这里用表情字符数组代替图片路径数组）
    const [fallingClaws, setFallingClaws] = useState<{ type: string, top: number, left: number, emoji: string }[]>([]);

    const handleLike = (index: number, audioRef: React.RefObject<HTMLAudioElement>) => {
        setPetList(prevList =>
            prevList.map((pet, i) =>
                i === index
                   ? {...pet, likes: pet.likes + 1 }
                    : pet
            )
        );
        // 播放音频
        if (audioRef.current) {
            audioRef.current.play();
        }
        // 添加掉落的爪子，根据索引设置不同的表情字符
        const randomLeft = Math.random() * window.innerWidth;
        const clawEmoji = index === 0? '🐾' : '🐶';
        setFallingClaws(prevClaws => [...prevClaws, { type: index === 0? 'cat' : 'dog', top: 0, left: randomLeft, emoji: clawEmoji }]);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setFallingClaws(prevClaws =>
                prevClaws.map(claw => ({
                   ...claw,
                    top: claw.top + 5
                })).filter(claw => claw.top < window.innerHeight)
            );
        }, 50);

        return () => clearInterval(intervalId);
    }, []);

    const pageBgStyle = {
        backgroundColor: '#e8f5e9' // 淡淡的绿色
    };

    const heartButtonStyle = {
        position:'relative',
        width: '40px',
        height: '40px',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        outline: 'none',
        margin: '10px auto',
        display: 'block'
    };

    const heartBeforeStyle = {
        content: '""',
        position: 'absolute',
        top: 0,
        width: '20px',
        height: '32px',
        backgroundColor: '#ff4d4d',
        borderRadius: '20px 20px 0 0',
        left: '20px',
        transform: 'rotate(-45deg)',
        transformOrigin: '0 100%'
    };

    const heartAfterStyle = {
        content: '""',
        position: 'absolute',
        top: 0,
        width: '20px',
        height: '32px',
        backgroundColor: '#ff4d4d',
        borderRadius: '20px 20px 0 0',
        left: 0,
        transform: 'rotate(45deg)',
        transformOrigin: '100% 100%'
    };

    return (
        <div className="p-4 flex-1 relative" style={pageBgStyle}>
            {fallingClaws.map((claw, index) => (
                <span
                    key={index}
                    className="absolute"
                    style={{ top: `${claw.top}px`, left: `${claw.left}px` }}
                >
                    {claw.emoji}
                </span>
            ))}
            <h1 className="text-3xl font-bold text-center mb-8">可爱宠物展示</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {petList.map((pet, index) => {
                    const audioRef = useRef<HTMLAudioElement>(null);

                    return (
                        <div key={pet.name} className="bg-white p-2 rounded-lg shadow-md">
                            <img
                                src={pet.imageUrl}
                                alt={pet.name}
                                className="w-2/3 h-40 object-cover mb-2 rounded-md mx-auto"
                            />
                            <h2
                                className="text-xl font-bold mb-2"
                                aria-label={`宠物名字：${pet.name}`}
                            >
                                {pet.name}
                            </h2>
                            <p className="mb-1" aria-label={`宠物品种：${pet.breed}`}>
                                品种: {pet.breed}
                            </p>
                            <p aria-label={`宠物年龄：${pet.age} 岁`}>
                                年龄: {pet.age} 岁
                            </p>
                            <p aria-label={`喜欢次数：${pet.likes} 次`}>
                                喜欢次数: {pet.likes} 次
                            </p>
                            <button
                                style={heartButtonStyle}
                                onClick={() => handleLike(index, audioRef)}
                            >
                                <span style={heartBeforeStyle}></span>
                                <span style={heartAfterStyle}></span>
                            </button>
                            <audio ref={audioRef} controls>
                                <source src={pet.audioUrl} type="audio/mpeg" />
                                你的浏览器不支持音频播放。
                            </audio>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default PetPage;