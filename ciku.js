const wordDatabase = {
    nouns: { // 名词(增加常见物品、人物、地点等)
        '老师': 'lǎo shī', '学生': 'xué sheng', '医生': 'yī shēng', '爸爸': 'bà ba',
        '妈妈': 'mā ma', '哥哥': 'gē ge', '妹妹': 'mèi mei', '书包': 'shū bāo',
        '电脑': 'diàn nǎo', '手机': 'shǒu jī', '北京': 'běi jīng', '上海': 'shàng hǎi',
        '学校': 'xué xiào', '医院': 'yī yuàn', '公园': 'gōng yuán', '超市': 'chāo shì',
        '苹果': 'píng guǒ', '牛奶': 'niú nǎi', '米饭': 'mǐ fàn', '衣服': 'yī fu'
    },
    verbs: { // 动词(增加日常动作)
        '学习': 'xué xí', '工作': 'gōng zuò', '吃饭': 'chī fàn', '喝水': 'hē shuǐ',
        '睡觉': 'shuì jiào', '跑步': 'pǎo bù', '游泳': 'yóu yǒng', '看书': 'kàn shū',
        '写字': 'xiě zì', '听歌': 'tīng gē', '跳舞': 'tiào wǔ', '开车': 'kāi chē',
        '购物': 'gòu wù', '打扫': 'dǎ sǎo', '洗澡': 'xǐ zǎo', '旅行': 'lǚ xíng'
    },
    adjectives: { // 形容词(增加状态描述)
        '高兴': 'gāo xìng', '漂亮': 'piào liang', '聪明': 'cōng ming', '可爱': 'kě ài',
        '干净': 'gān jìng', '忙碌': 'máng lù', '健康': 'jiàn kāng', '有趣': 'yǒu qù',
        '重要': 'zhòng yào', '新鲜': 'xīn xiān', '便宜': 'pián yi', '困难': 'kùn nan',
        '简单': 'jiǎn dān', '热闹': 'rè nao', '安静': 'ān jìng', '舒服': 'shū fu'
    },
    phrases: { // 常用短语(增加日常用语)
        '你好': 'nǐ hǎo', '谢谢': 'xiè xie', '不客气': 'bú kè qi', '对不起': 'duì bu qǐ',
        '没关系': 'méi guān xi', '早上好': 'zǎo shang hǎo', '晚上好': 'wǎn shang hǎo',
        '再见': 'zài jiàn', '请问': 'qǐng wèn', '多少钱': 'duō shǎo qián', '不用谢': 'bú yòng xiè',
        '我明白了': 'wǒ míng bai le', '我不知道': 'wǒ bù zhī dào', '请稍等': 'qǐng shāo děng'
    },
    particles: { // 功能词
        '的': 'de', '了': 'le', '在': 'zài', '和': 'hé',
        '也': 'yě', '都': 'dōu', '很': 'hěn', '不': 'bù',
        '吗': 'ma', '呢': 'ne', '吧': 'ba', '啊': 'a'
    },
    timeWords: { // 时间相关词
        '今天': 'jīn tiān', '明天': 'míng tiān', '昨天': 'zuó tiān', '现在': 'xiàn zài',
        '早上': 'zǎo shang', '中午': 'zhōng wǔ', '下午': 'xià wǔ', '晚上': 'wǎn shang',
        '星期天': 'xīng qī tiān', '小时': 'xiǎo shí', '分钟': 'fēn zhōng', '年': 'nián'
    }
};