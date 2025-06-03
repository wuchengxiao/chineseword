function generateChineseSentence() {
    // 随机选择句子结构模板（带拼音标记）
    const templates = [
        // 名词 + 动词
        (n, nP, v, vP) => ({
            word: `${n}${v}`,
            pinyin: `${nP} ${vP}`
        }),
        // 名词 + 很 + 形容词
        (n, nP, a, aP) => ({
            word: `${n}很${a}`,
            pinyin: `${nP} hěn ${aP}`
        }),
        // 动词 + 名词
        (v, vP, n, nP) => ({
            word: `${v}${n}`,
            pinyin: `${vP} ${nP}`
        }),
        // 形容词 + 的 + 名词
        (a, aP, n, nP) => ({
            word: `${a}的${n}`,
            pinyin: `${aP} de ${nP}`
        }),
        // 新增：名词 + 在 + 动词
        (n, nP, v, vP) => ({
            word: `${n}在${v}`,
            pinyin: `${nP} zài ${vP}`
        }),
        // 新增：名词 + 动词 + 了
        (n, nP, v, vP) => ({
            word: `${n}${v}了`,
            pinyin: `${nP} ${vP} le`
        })
    ];
    
    // 从指定词库中随机选词
    const getRandomWord = (type) => {
        const words = Object.keys(wordDatabase[type]);
        const word = words[Math.floor(Math.random() * words.length)];
        return { 
            word, 
            pinyin: wordDatabase[type][word] 
        };
    };
    
    // 随机选择一个模板
    const template = templates[Math.floor(Math.random() * templates.length)];
    
    // 根据模板类型生成句子
    if (template === templates[1] || template === templates[3]) {
        // 处理带形容词的模板
        const adjective = getRandomWord('adjectives');
        const noun = getRandomWord('nouns');
        return template(adjective.word, adjective.pinyin, noun.word, noun.pinyin);
    } else {
        // 处理其他模板
        const noun = getRandomWord('nouns');
        const verb = getRandomWord('verbs');
        return template(noun.word, noun.pinyin, verb.word, verb.pinyin);
    }
}

function generateChineseWordList(count){
    const words = [];
    for (let i = 0; i < count; i++) { // Generate count words
        words.push(generateChineseSentence());
    }
    return words;
}
// 示例用法
//console.log(generateChineseSentence());
//console.log(generateChineseWordList(5));