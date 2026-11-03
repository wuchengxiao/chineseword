// 50个四级核心词汇库
const wordLibrary = [{
    word: "abandon",
    phonetic: "/əˈbændən/",
    translation: "v. 放弃，遗弃",
    example: "They abandoned the old car in the backyard."
}, {
    word: "abstract",
    phonetic: "/ˈæbstrækt/",
    translation: "adj. 抽象的 n. 摘要",
    example: "The abstract painting puzzled many visitors."
}, {
    word: "access",
    phonetic: "/ˈækses/",
    translation: "n. 进入；使用权 v. 接近",
    example: "You need a password to access the database."
}, {
    word: "accommodate",
    phonetic: "/əˈkɒmədeɪt/",
    translation: "v. 容纳，提供住宿；适应",
    example: "The hotel can accommodate up to 200 guests."
}, {
    word: "accompany",
    phonetic: "/əˈkʌmpəni/",
    translation: "v. 陪伴，伴奏",
    example: "He accompanied her to the airport."
}, {
    word: "accurate",
    phonetic: "/ˈækjərət/",
    translation: "adj. 精确的，准确的",
    example: "He gave an accurate description of the incident."
}, {
    word: "achieve",
    phonetic: "/əˈtʃiːv/",
    translation: "v. 实现，达到",
    example: "She achieved her goal of becoming a doctor."
}, {
    word: "acknowledge",
    phonetic: "/əkˈnɒlɪdʒ/",
    translation: "v. 承认，认可",
    example: "He acknowledged his mistake."
}, {
    word: "acquire",
    phonetic: "/əˈkwaɪə(r)/",
    translation: "v. 获得，学到",
    example: "She acquired a good knowledge of English."
}, {
    word: "adapt",
    phonetic: "/əˈdæpt/",
    translation: "v. 适应，改编",
    example: "It took him a while to adapt to the new environment."
}, {
    word: "adequate",
    phonetic: "/ˈædɪkwət/",
    translation: "adj. 足够的，适当的",
    example: "The food supplies are adequate for a month."
}, {
    word: "adjust",
    phonetic: "/əˈdʒʌst/",
    translation: "v. 调整，适应",
    example: "He adjusted the tie in the mirror."
}, {
    word: "administration",
    phonetic: "/ədˌmɪnɪˈstreɪʃn/",
    translation: "n. 管理，行政",
    example: "The administration of the company is efficient."
}, {
    word: "advocate",
    phonetic: "/ˈædvəkeɪt/",
    translation: "v. 提倡，主张",
    example: "She advocates for equal rights."
}, {
    word: "affect",
    phonetic: "/əˈfekt/",
    translation: "v. 影响，使感动",
    example: "The weather can affect your mood."
}, {
    word: "aggregate",
    phonetic: "/ˈæɡrɪɡət/",
    translation: "v. 集合，聚集 n. 总计",
    example: "The aggregate of their incomes is enough."
}, {
    word: "allocate",
    phonetic: "/ˈæləkeɪt/",
    translation: "v. 分配，拨出",
    example: "They allocated funds for the new project."
}, {
    word: "alter",
    phonetic: "/ˈɔːltə(r)/",
    translation: "v. 改变，更改",
    example: "She had to alter her plans."
}, {
    word: "alternative",
    phonetic: "/ɔːlˈtɜːnətɪv/",
    translation: "n. 替代方案 adj. 供选择的",
    example: "We need to find an alternative solution."
}, {
    word: "ambiguous",
    phonetic: "/æmˈbɪɡjuəs/",
    translation: "adj. 模糊不清的，引起歧义的",
    example: "His answer was ambiguous."
}, {
    word: "adequate",
    phonetic: "/ˈædɪkwət/",
    translation: "adj. 适当地；足够",
    example: "This dress has adequate space for movement."
}, {
    word: "cultivate",
    phonetic: "/ˈkʌltɪveɪt/",
    translation: "v. 培养，陶冶",
    example: "We should cultivate good reading habits."
}, {
    word: "eliminate",
    phonetic: "/ɪˈlɪmɪneɪt/",
    translation: "v. 消除，排除",
    example: "We need to eliminate all possible risks."
}, {
    word: "enhance",
    phonetic: "/ɪnˈhɑːns/",
    translation: "v. 增强，提高",
    example: "Regular exercise can enhance your physical fitness."
}, {
    word: "implement",
    phonetic: "/ˈɪmplɪment/",
    translation: "v. 实施，执行",
    example: "The government will implement new policies next month."
}, {
    word: "maintain",
    phonetic: "/meɪnˈteɪn/",
    translation: "v. 维持，主张",
    example: "We must maintain the stability of the market."
}, {
    word: "optimize",
    phonetic: "/ˈɒptɪmaɪz/",
    translation: "v. 优化",
    example: "We need to optimize our work process."
}, {
    word: "participate",
    phonetic: "/pɑːˈtɪsɪpeɪt/",
    translation: "v. 参加，参与",
    example: "All students should participate in the after-school activities."
}, {
    word: "stimulate",
    phonetic: "/ˈstɪmjuleɪt/",
    translation: "v. 刺激，激发",
    example: "The new policy will stimulate economic growth."
}, {
    word: "essential",
    phonetic: "/ɪˈsenʃl/",
    translation: "adj. 至关重要的",
    example: "Water is essential for all living things."
}, {
    word: "feasible",
    phonetic: "/ˈfiːzəbl/",
    translation: "adj. 可行的",
    example: "This plan sounds very feasible."
}, {
    word: "inevitable",
    phonetic: "/ɪnˈevɪtəbl/",
    translation: "adj. 不可避免的",
    example: "Traffic jams are inevitable during rush hour."
}, {
    word: "optimistic",
    phonetic: "/ˌɒptɪˈmɪstɪk/",
    translation: "adj. 乐观的",
    example: "He is always optimistic about the future."
}, {
    word: "sustainable",
    phonetic: "/səˈsteɪnəbl/",
    translation: "adj. 可持续的",
    example: "We should develop sustainable energy."
}, {
    word: "vulnerable",
    phonetic: "/ˈvʌlnərəbl/",
    translation: "adj. 易受影响的/脆弱的",
    example: "The old are more vulnerable to diseases."
}, {
    word: "comprehensive",
    phonetic: "/ˌkɒmprɪˈhensɪv/",
    translation: "adj. 全面的",
    example: "We need to make a comprehensive plan."
}, {
    word: "significant",
    phonetic: "/sɪɡˈnɪfɪkənt/",
    translation: "adj. 显著的，重要的",
    example: "There has been a significant change in recent years."
}, {
    word: "constraint",
    phonetic: "/kənˈstreɪnt/",
    translation: "n. 限制，约束",
    example: "We have to work within the constraints of time."
}, {
    word: "heritage",
    phonetic: "/ˈherɪtɪdʒ/",
    translation: "n. 遗产",
    example: "The Great Wall is a precious cultural heritage."
}, {
    word: "incentive",
    phonetic: "/ɪnˈsentɪv/",
    translation: "n. 动机/激励",
    example: "The bonus is a good incentive for employees."
}, {
    word: "perspective",
    phonetic: "/pəˈspektɪv/",
    translation: "n. 观点/视角",
    example: "We should look at the problem from a different perspective."
}, {
    word: "prosperity",
    phonetic: "/prɒˈsperəti/",
    translation: "n. 繁荣",
    example: "The country is enjoying a period of peace and prosperity."
}, {
    word: "shortage",
    phonetic: "/ˈʃɔːtɪdʒ/",
    translation: "n. 短缺",
    example: "There is a shortage of water in this area."
}, {
    word: "consistency",
    phonetic: "/kənˈsɪstənsi/",
    translation: "n. 一致性",
    example: "The consistency of the product quality is very important."
}, {
    word: "innovation",
    phonetic: "/ˌɪnəˈveɪʃn/",
    translation: "n. 创新",
    example: "Technological innovation drives social progress."
}, {
    word: "accelerate",
    phonetic: "/əkˈseləreɪt/",
    translation: "v. 加速，促进",
    example: "We should accelerate the pace of reform."
}, {
    word: "diminish",
    phonetic: "/dɪˈmɪnɪʃ/",
    translation: "v. 减少，削弱",
    example: "The influence of the old policy is diminishing."
}, {
    word: "sustain",
    phonetic: "/səˈsteɪn/",
    translation: "v. 维持，支撑",
    example: "The local economy is sustained by tourism."
}, {
    word: "facilitate",
    phonetic: "/fəˈsɪlɪteɪt/",
    translation: "v. 促进，使便利",
    example: "The new railway will facilitate the transportation of goods."
}, {
    word: "transform",
    phonetic: "/trænsˈfɔːm/",
    translation: "v. 改变，变革",
    example: "The Internet has transformed our way of life."
}, {
    word: "abnormal",
    phonetic: "/æbˈnɔːml/",
    translation: "adj. 反常的，异常的",
    example: "The test results were abnormal."
}, {
    word: "abolish",
    phonetic: "/əˈbɒlɪʃ/",
    translation: "v. 废除，取消",
    example: "Slavery was abolished in the US in the 19th century."
}, {
    word: "absorb",
    phonetic: "/əbˈzɔːb/",
    translation: "v. 吸收；吸引…的注意",
    example: "Plants absorb carbon dioxide from the air."
}, {
    word: "abstract",
    phonetic: "/ˈæbstrækt/",
    translation: "n. 摘要 adj. 抽象的",
    example: "Please write an abstract of this article."
}, {
    word: "abundant",
    phonetic: "/əˈbʌndənt/",
    translation: "adj. 丰富的，充裕的",
    example: "Fish are abundant in this lake."
}, {
    word: "abuse",
    phonetic: "/əˈbjuːs/",
    translation: "v./n. 滥用；虐待；辱骂",
    example: "He abused his power as manager."
}, {
    word: "academic",
    phonetic: "/ˌækəˈdemɪk/",
    translation: "adj. 学术的；学院的",
    example: "She has a strong academic background."
}, {
    word: "accelerate",
    phonetic: "/əkˈseləreɪt/",
    translation: "v. 加速，促进",
    example: "The car accelerated to overtake the bus."
}, {
    word: "accomplish",
    phonetic: "/əˈkʌmplɪʃ/",
    translation: "v. 完成，实现",
    example: "We have accomplished all our goals for the year."
}, {
    word: "accumulate",
    phonetic: "/əˈkjuːmjəleɪt/",
    translation: "v. 积累，积聚",
    example: "Dust began to accumulate on the shelves."
}, {
    word: "accurate",
    phonetic: "/ˈækjərət/",
    translation: "adj. 准确的，精确的",
    example: "The forecast turned out to be accurate."
}, {
    word: "accuse",
    phonetic: "/əˈkjuːz/",
    translation: "v. 指责；控告",
    example: "He was accused of stealing the money."
}, {
    word: "accustom",
    phonetic: "/əˈkʌstəm/",
    translation: "v. 使习惯",
    example: "You must accustom yourself to the new schedule."
}, {
    word: "acknowledge",
    phonetic: "/əkˈnɒlɪdʒ/",
    translation: "v. 承认；致谢",
    example: "I acknowledge that I made a mistake."
}, {
    word: "acquaint",
    phonetic: "/əˈkweɪnt/",
    translation: "v. 使认识，使了解",
    example: "Let me acquaint you with the facts."
}, {
    word: "acquire",
    phonetic: "/əˈkwaɪə(r)/",
    translation: "v. 获得；学到",
    example: "She acquired a good knowledge of English."
}, {
    word: "adapt",
    phonetic: "/əˈdæpt/",
    translation: "v. 适应；改编",
    example: "It took him a while to adapt to the new job."
}, {
    word: "adequate",
    phonetic: "/ˈædɪkwət/",
    translation: "adj. 足够的；适当的",
    example: "The room was small but adequate."
}, {
    word: "adhere",
    phonetic: "/ədˈhɪə(r)/",
    translation: "v. 粘附；坚持；遵守",
    example: "We must adhere to the rules."
}, {
    word: "adjacent",
    phonetic: "/əˈdʒeɪsnt/",
    translation: "adj. 邻近的，毗连的",
    example: "They lived in adjacent houses."
}, {
    word: "adjust",
    phonetic: "/əˈdʒʌst/",
    translation: "v. 调整，调节",
    example: "He adjusted the mirror before driving."
}, {
    word: "administer",
    phonetic: "/ədˈmɪnɪstə(r)/",
    translation: "v. 管理；执行；给予",
    example: "The nurse administered the medicine."
}, {
    word: "admire",
    phonetic: "/ədˈmaɪə(r)/",
    translation: "v. 钦佩；羡慕；赞赏",
    example: "I admire her courage and determination."
}, {
    word: "adopt",
    phonetic: "/əˈdɒpt/",
    translation: "v. 收养；采用；采纳",
    example: "They decided to adopt a child."
}, {
    word: "advance",
    phonetic: "/ədˈvɑːns/",
    translation: "v./n. 前进；提前；进展",
    example: "Technology has advanced rapidly in recent years."
}, {
    word: "advocate",
    phonetic: "/ˈædvəkeɪt/",
    translation: "v. 提倡 n. 拥护者",
    example: "He advocates reducing military spending."
}, {
    word: "affect",
    phonetic: "/əˈfekt/",
    translation: "v. 影响；感动",
    example: "The climate affects agricultural production."
}, {
    word: "afford",
    phonetic: "/əˈfɔːd/",
    translation: "v. 买得起；承担得起",
    example: "I can't afford a new car right now."
}, {
    word: "aggressive",
    phonetic: "/əˈɡresɪv/",
    translation: "adj. 侵略的；好斗的；有进取心的",
    example: "He is an aggressive businessman."
}, {
    word: "agitate",
    phonetic: "/ˈædʒɪteɪt/",
    translation: "v. 搅动；鼓动；使焦虑",
    example: "The wind agitated the surface of the water."
}, {
    word: "alarm",
    phonetic: "/əˈlɑːm/",
    translation: "n. 警报；惊恐 v. 使惊恐",
    example: "The fire alarm went off suddenly."
}, {
    word: "alert",
    phonetic: "/əˈlɜːt/",
    translation: "adj. 警觉的 n. 警戒",
    example: "Stay alert for any changes in the situation."
}, {
    word: "alien",
    phonetic: "/ˈeɪliən/",
    translation: "adj. 外国的；陌生的 n. 外国人",
    example: "The concept was alien to him."
}, {
    word: "allocate",
    phonetic: "/ˈæləkeɪt/",
    translation: "v. 分配，拨出",
    example: "The government allocated funds for housing."
}, {
    word: "allowance",
    phonetic: "/əˈlaʊəns/",
    translation: "n. 津贴；补助；允许",
    example: "His daily allowance is $50."
}, {
    word: "alter",
    phonetic: "/ˈɔːltə(r)/",
    translation: "v. 改变，更改",
    example: "We had to alter our plans."
}, {
    word: "alternate",
    phonetic: "/ɔːlˈtɜːnət/",
    translation: "v. 交替 adj. 轮流的",
    example: "Day and night alternate."
}, {
    word: "alternative",
    phonetic: "/ɔːlˈtɜːnətɪv/",
    translation: "n. 供选择的东西 adj. 另类的",
    example: "We have no alternative but to wait."
}, {
    word: "amateur",
    phonetic: "/ˈæmətə(r)/",
    translation: "n. 业余爱好者 adj. 业余的",
    example: "He is an amateur photographer."
}, {
    word: "ambiguous",
    phonetic: "/æmˈbɪɡjuəs/",
    translation: "adj. 模棱两可的，含糊的",
    example: "The instructions were ambiguous."
}, {
    word: "ambitious",
    phonetic: "/æmˈbɪʃəs/",
    translation: "adj. 有雄心的；野心勃勃的",
    example: "She is ambitious and wants to be CEO."
}, {
    word: "amend",
    phonetic: "/əˈmend/",
    translation: "v. 修改，修订",
    example: "The constitution was amended."
}, {
    word: "ample",
    phonetic: "/ˈæmpl/",
    translation: "adj. 足够的；宽敞的",
    example: "There is ample space for parking."
}, {
    word: "amuse",
    phonetic: "/əˈmjuːz/",
    translation: "v. 逗乐；给…提供娱乐",
    example: "The clown amused the children."
}, {
    word: "analyze",
    phonetic: "/ˈænəlaɪz/",
    translation: "v. 分析",
    example: "We need to analyze the data carefully."
}, {
    word: "ancestor",
    phonetic: "/ˈænsestə(r)/",
    translation: "n. 祖先，祖宗",
    example: "My ancestors came from Ireland."
}, {
    word: "anchor",
    phonetic: "/ˈæŋkə(r)/",
    translation: "n. 锚 v. 抛锚；固定",
    example: "The ship dropped anchor in the bay."
}, {
    word: "ancient",
    phonetic: "/ˈeɪnʃənt/",
    translation: "adj. 古代的；古老的",
    example: "We visited ancient ruins in Rome."
}, {
    word: "anniversary",
    phonetic: "/ˌænɪˈvɜːsəri/",
    translation: "n. 周年纪念",
    example: "Today is their wedding anniversary."
}, {
    word: "announce",
    phonetic: "/əˈnaʊns/",
    translation: "v. 宣布；通告",
    example: "They announced their engagement."
}, {
    word: "annoy",
    phonetic: "/əˈnɔɪ/",
    translation: "v. 使烦恼；打扰",
    example: "The noise annoyed me greatly."
}, {
    word: "annual",
    phonetic: "/ˈænjuəl/",
    translation: "adj. 每年的 n. 年报",
    example: "The company holds an annual meeting."
}, {
    word: "anticipate",
    phonetic: "/ænˈtɪsɪpeɪt/",
    translation: "v. 预期；预料",
    example: "We anticipate a large crowd at the event."
}, {
    word: "anxiety",
    phonetic: "/æŋˈzaɪəti/",
    translation: "n. 焦虑；渴望",
    example: "He felt anxiety about the exam."
}, {
    word: "apart",
    phonetic: "/əˈpɑːt/",
    translation: "adv. 相隔；分开",
    example: "The two houses are far apart."
}, {
    word: "apologize",
    phonetic: "/əˈpɒlədʒaɪz/",
    translation: "v. 道歉",
    example: "I apologize for being late."
}, {
    word: "apparent",
    phonetic: "/əˈpærənt/",
    translation: "adj. 明显的；表面上的",
    example: "It was apparent that he was lying."
}, {
    word: "appeal",
    phonetic: "/əˈpiːl/",
    translation: "v./n. 呼吁；上诉；吸引力",
    example: "The idea appealed to him."
}, {
    word: "appendix",
    phonetic: "/əˈpendɪks/",
    translation: "n. 附录；阑尾",
    example: "See the appendix for more details."
}, {
    word: "appetite",
    phonetic: "/ˈæpɪtaɪt/",
    translation: "n. 食欲；欲望",
    example: "Exercise gives you a good appetite."
}, {
    word: "applaud",
    phonetic: "/əˈplɔːd/",
    translation: "v. 鼓掌；喝彩",
    example: "The audience applauded loudly."
}, {
    word: "apply",
    phonetic: "/əˈplaɪ/",
    translation: "v. 申请；应用；适用",
    example: "I decided to apply for the job."
}, {
    word: "appoint",
    phonetic: "/əˈpɔɪnt/",
    translation: "v. 任命；约定",
    example: "They appointed him as manager."
}, {
    word: "appreciate",
    phonetic: "/əˈpriːʃieɪt/",
    translation: "v. 欣赏；感激；领会",
    example: "I appreciate your help."
}, {
    word: "approach",
    phonetic: "/əˈprəʊtʃ/",
    translation: "v. 接近 n. 方法；途径",
    example: "We need a new approach to the problem."
}, {
    word: "appropriate",
    phonetic: "/əˈprəʊpriət/",
    translation: "adj. 适当的，恰当的",
    example: "Jeans are not appropriate for a formal party."
}, {
    word: "approve",
    phonetic: "/əˈpruːv/",
    translation: "v. 批准；赞成",
    example: "The committee approved the plan."
}, {
    word: "approximate",
    phonetic: "/əˈprɒksɪmət/",
    translation: "adj. 大约的 v. 接近",
    example: "The approximate cost is $100."
}, {
    word: "arbitrary",
    phonetic: "/ˈɑːbɪtrəri/",
    translation: "adj. 任意的；武断的",
    example: "The choice was quite arbitrary."
}, {
    word: "arcade",
    phonetic: "/ɑːˈkeɪd/",
    translation: "n. 拱廊；游乐场",
    example: "We played games in the arcade."
}, {
    word: "architect",
    phonetic: "/ˈɑːkɪtekt/",
    translation: "n. 建筑师",
    example: "He is a famous architect."
}, {
    word: "archive",
    phonetic: "/ˈɑːkaɪv/",
    translation: "n. 档案 v. 存档",
    example: "These documents are kept in the archive."
}, {
    word: "arise",
    phonetic: "/əˈraɪz/",
    translation: "v. 出现；发生；起身",
    example: "Problems arose during the project."
}, {
    word: "arouse",
    phonetic: "/əˈraʊz/",
    translation: "v. 引起；唤醒",
    example: "The speech aroused great interest."
}, {
    word: "arrange",
    phonetic: "/əˈreɪndʒ/",
    translation: "v. 安排；整理",
    example: "I will arrange a meeting for next week."
}, {
    word: "array",
    phonetic: "/əˈreɪ/",
    translation: "n. 排列；阵列",
    example: "There was a vast array of choices."
}, {
    word: "arrest",
    phonetic: "/əˈrest/",
    translation: "v./n. 逮捕；阻止",
    example: "The police arrested the suspect."
}, {
    word: "arrival",
    phonetic: "/əˈraɪvl/",
    translation: "n. 到达；到来",
    example: "We await your arrival."
}, {
    word: "articulate",
    phonetic: "/ɑːˈtɪkjələt/",
    translation: "adj. 善于表达的 v. 清晰表达",
    example: "She is very articulate in her speech."
}, {
    word: "artificial",
    phonetic: "/ˌɑːtɪˈfɪʃl/",
    translation: "adj. 人工的；虚假的",
    example: "Artificial intelligence is developing fast."
}, {
    word: "ascend",
    phonetic: "/əˈsend/",
    translation: "v. 上升；攀登",
    example: "The plane ascended into the clouds."
}, {
    word: "ascertain",
    phonetic: "/ˌæsəˈteɪn/",
    translation: "v. 查明；确定",
    example: "We need to ascertain the truth."
}, {
    word: "ashamed",
    phonetic: "/əˈʃeɪmd/",
    translation: "adj. 惭愧的；羞耻的",
    example: "He felt ashamed of his behavior."
}, {
    word: "aspect",
    phonetic: "/ˈæspekt/",
    translation: "n. 方面；朝向",
    example: "We must consider every aspect of the problem."
}, {
    word: "aspire",
    phonetic: "/əˈspaɪə(r)/",
    translation: "v. 渴望；立志",
    example: "He aspires to become a doctor."
}, {
    word: "assault",
    phonetic: "/əˈsɔːlt/",
    translation: "v./n. 攻击；袭击",
    example: "He was charged with assault."
}, {
    word: "assemble",
    phonetic: "/əˈsembl/",
    translation: "v. 集合；组装",
    example: "We assembled in the hall."
}, {
    word: "assert",
    phonetic: "/əˈsɜːt/",
    translation: "v. 断言；主张",
    example: "He asserted his innocence."
}, {
    word: "assess",
    phonetic: "/əˈses/",
    translation: "v. 评估；估价",
    example: "We need to assess the damage."
}, {
    word: "assign",
    phonetic: "/əˈsaɪn/",
    translation: "v. 分配；指派",
    example: "The teacher assigned homework."
}, {
    word: "assist",
    phonetic: "/əˈsɪst/",
    translation: "v. 协助；帮助",
    example: "Can you assist me with this task?"
}, {
    word: "associate",
    phonetic: "/əˈsəʊʃieɪt/",
    translation: "v. 联系；交往 n. 同事",
    example: "I associate summer with holidays."
}, {
    word: "assume",
    phonetic: "/əˈsjuːm/",
    translation: "v. 假定；承担",
    example: "I assume you are ready."
}, {
    word: "assure",
    phonetic: "/əˈʃɔː(r)/",
    translation: "v. 保证；使确信",
    example: "I assure you that it is safe."
}, {
    word: "astonish",
    phonetic: "/əˈstɒnɪʃ/",
    translation: "v. 使惊讶",
    example: "The news astonished everyone."
}, {
    word: "attach",
    phonetic: "/əˈtætʃ/",
    translation: "v. 系上；贴上；附加",
    example: "Please attach the file to the email."
}, {
    word: "attain",
    phonetic: "/əˈteɪn/",
    translation: "v. 达到；获得",
    example: "He attained his goal."
}, {
    word: "attempt",
    phonetic: "/əˈtempt/",
    translation: "v./n. 尝试；企图",
    example: "He attempted to climb the mountain."
}, {
    word: "attend",
    phonetic: "/əˈtend/",
    translation: "v. 出席；照料",
    example: "Did you attend the meeting?"
}, {
    word: "attitude",
    phonetic: "/ˈætɪtjuːd/",
    translation: "n. 态度；看法",
    example: "Your attitude determines your altitude."
}, {
    word: "attract",
    phonetic: "/əˈtrækt/",
    translation: "v. 吸引；引起",
    example: "The flower attracts bees."
}, {
    word: "attribute",
    phonetic: "/əˈtrɪbjuːt/",
    translation: "v. 归因于 n. 属性",
    example: "He attributed his success to hard work."
}, {
    word: "auction",
    phonetic: "/ˈɔːkʃn/",
    translation: "n./v. 拍卖",
    example: "The painting was sold at auction."
}, {
    word: "audit",
    phonetic: "/ˈɔːdɪt/",
    translation: "n./v. 审计；查账",
    example: "The company is under audit."
}, {
    word: "augment",
    phonetic: "/ɔːɡˈment/",
    translation: "v. 增加；增大",
    example: "He augmented his income by teaching."
}, {
    word: "authentic",
    phonetic: "/ɔːˈθentɪk/",
    translation: "adj. 真正的；可靠的",
    example: "Is this an authentic Picasso?"
}, {
    word: "authority",
    phonetic: "/ɔːˈθɒrəti/",
    translation: "n. 权威；当局",
    example: "The authorities closed the road."
}, {
    word: "automatic",
    phonetic: "/ˌɔːtəˈmætɪk/",
    translation: "adj. 自动的",
    example: "The door opens automatically."
}, {
    word: "available",
    phonetic: "/əˈveɪləbl/",
    translation: "adj. 可用的；有空的",
    example: "Is the manager available?"
}, {
    word: "avert",
    phonetic: "/əˈvɜːt/",
    translation: "v. 避免；转移",
    example: "They managed to avert a disaster."
}, {
    word: "await",
    phonetic: "/əˈweɪt/",
    translation: "v. 等候；期待",
    example: "We await your reply."
}, {
    word: "awkward",
    phonetic: "/ˈɔːkwəd/",
    translation: "adj. 尴尬的；笨拙的",
    example: "There was an awkward silence."
}, {
    word: "background",
    phonetic: "/ˈbækɡraʊnd/",
    translation: "n. 背景",
    example: "Tell me about your educational background."
}, {
    word: "balance",
    phonetic: "/ˈbæləns/",
    translation: "n. 平衡 v. 使平衡",
    example: "You need to balance work and life."
}, {
    word: "ban",
    phonetic: "/bæn/",
    translation: "v./n. 禁止；禁令",
    example: "Smoking is banned in public places."
}, {
    word: "barrier",
    phonetic: "/ˈbæriə(r)/",
    translation: "n. 障碍；屏障",
    example: "Language is a barrier to communication."
}, {
    word: "behavior",
    phonetic: "/bɪˈheɪvjə(r)/",
    translation: "n. 行为；举止",
    example: "His behavior was unacceptable."
}, {
    word: "benefit",
    phonetic: "/ˈbenɪfɪt/",
    translation: "n. 利益 v. 有益于",
    example: "Exercise benefits your health."
}, {
    word: "betray",
    phonetic: "/bɪˈtreɪ/",
    translation: "v. 背叛；泄露",
    example: "He betrayed his friend's secret."
}, {
    word: "bias",
    phonetic: "/ˈbaɪəs/",
    translation: "n. 偏见 v. 使有偏见",
    example: "The report showed a clear bias."
}, {
    word: "bid",
    phonetic: "/bɪd/",
    translation: "v./n. 出价；投标",
    example: "They bid for the contract."
}, {
    word: "bind",
    phonetic: "/baɪnd/",
    translation: "v. 捆绑；结合",
    example: "Bind the books together."
}, {
    word: "blast",
    phonetic: "/blɑːst/",
    translation: "n. 爆炸；一阵风",
    example: "The blast broke all the windows."
}, {
    word: "bleed",
    phonetic: "/bliːd/",
    translation: "v. 出血；流血",
    example: "My nose started to bleed."
}, {
    word: "blend",
    phonetic: "/blend/",
    translation: "v. 混合 n. 混合物",
    example: "Blend the ingredients together."
}, {
    word: "block",
    phonetic: "/blɒk/",
    translation: "n. 街区；块 v. 堵塞",
    example: "A fallen tree blocked the road."
}, {
    word: "boom",
    phonetic: "/buːm/",
    translation: "n. 繁荣；轰鸣声",
    example: "Business is booming."
}, {
    word: "boost",
    phonetic: "/buːst/",
    translation: "v. 促进；增加",
    example: "The tax cut will boost the economy."
}, {
    word: "border",
    phonetic: "/ˈbɔːdə(r)/",
    translation: "n. 边界；边境",
    example: "They crossed the border into France."
}, {
    word: "bore",
    phonetic: "/bɔː(r)/",
    translation: "v. 使厌烦；钻孔",
    example: "The lecture bored me to death."
}, {
    word: "bounce",
    phonetic: "/baʊns/",
    translation: "v. 弹起；反弹",
    example: "The ball bounced off the wall."
}, {
    word: "bound",
    phonetic: "/baʊnd/",
    translation: "adj. 一定的；受约束的",
    example: "He is bound to succeed."
}, {
    word: "breed",
    phonetic: "/briːd/",
    translation: "v. 繁殖；饲养 n. 品种",
    example: "Rabbits breed quickly."
}, {
    word: "brief",
    phonetic: "/briːf/",
    translation: "adj. 简短的 n. 摘要",
    example: "Keep your answer brief."
}, {
    word: "brighten",
    phonetic: "/ˈbraɪtn/",
    translation: "v. 使变亮；使快活",
    example: "Her smile brightened the room."
}, {
    word: "brilliant",
    phonetic: "/ˈbrɪliənt/",
    translation: "adj. 杰出的；灿烂的",
    example: "She has a brilliant mind."
}, {
    word: "broaden",
    phonetic: "/ˈbrɔːdn/",
    translation: "v. 变宽；扩大",
    example: "Travel broadens the mind."
}, {
    word: "browse",
    phonetic: "/braʊz/",
    translation: "v. 浏览；闲逛",
    example: "I was browsing in a bookstore."
}, {
    word: "bruise",
    phonetic: "/bruːz/",
    translation: "n. 瘀伤 v. 使受挫",
    example: "He had a bruise on his arm."
}, {
    word: "budget",
    phonetic: "/ˈbʌdʒɪt/",
    translation: "n. 预算 v. 编预算",
    example: "We have a tight budget."
}, {
    word: "bulk",
    phonetic: "/bʌlk/",
    translation: "n. 体积；大部分",
    example: "The bulk of the work is done."
}, {
    word: "burden",
    phonetic: "/ˈbɜːdn/",
    translation: "n. 负担 v. 加重担",
    example: "Don't burden yourself with worries."
}, {
    word: "bureau",
    phonetic: "/ˈbjʊərəʊ/",
    translation: "n. 局；处；司",
    example: "The Federal Bureau of Investigation."
}, {
    word: "burst",
    phonetic: "/bɜːst/",
    translation: "v. 爆炸；突发",
    example: "The balloon burst."
}, {
    word: "calculate",
    phonetic: "/ˈkælkjuleɪt/",
    translation: "v. 计算；估计",
    example: "Calculate the total cost."
}, {
    word: "campaign",
    phonetic: "/kæmˈpeɪn/",
    translation: "n. 运动；战役",
    example: "They launched an advertising campaign."
}, {
    word: "candidate",
    phonetic: "/ˈkændɪdət/",
    translation: "n. 候选人",
    example: "He is a candidate for president."
}, {
    word: "capable",
    phonetic: "/ˈkeɪpəbl/",
    translation: "adj. 有能力的",
    example: "She is capable of doing the job."
}, {
    word: "capture",
    phonetic: "/ˈkæptʃə(r)/",
    translation: "v. 捕获；夺得",
    example: "The police captured the thief."
}, {
    word: "career",
    phonetic: "/kəˈrɪə(r)/",
    translation: "n. 职业；生涯",
    example: "He wants a career in medicine."
}, {
    word: "careless",
    phonetic: "/ˈkeələs/",
    translation: "adj. 粗心的",
    example: "Be careful not to be careless."
}, {
    word: "carry",
    phonetic: "/ˈkæri/",
    translation: "v. 携带；运送",
    example: "Carry this bag for me."
}, {
    word: "case",
    phonetic: "/keɪs/",
    translation: "n. 情况；案例；箱",
    example: "In case of fire, use the stairs."
}, {
    word: "casual",
    phonetic: "/ˈkæʒuəl/",
    translation: "adj. 随意的；偶然的",
    example: "Wear casual clothes to the party."
}, {
    word: "catalog",
    phonetic: "/ˈkætəlɒɡ/",
    translation: "n. 目录 v. 编目",
    example: "Check the catalog for the book."
}, {
    word: "category",
    phonetic: "/ˈkætəɡəri/",
    translation: "n. 种类；范畴",
    example: "Which category does this belong to?"
}, {
    word: "cautious",
    phonetic: "/ˈkɔːʃəs/",
    translation: "adj. 小心的；谨慎的",
    example: "Be cautious when crossing the street."
}, {
    word: "cease",
    phonetic: "/siːs/",
    translation: "v. 停止；终止",
    example: "The rain ceased abruptly."
}, {
    word: "celebrate",
    phonetic: "/ˈselɪbreɪt/",
    translation: "v. 庆祝",
    example: "We celebrate Christmas every year."
}, {
    word: "challenge",
    phonetic: "/ˈtʃælɪndʒ/",
    translation: "n./v. 挑战",
    example: "This job is a big challenge."
}, {
    word: "channel",
    phonetic: "/ˈtʃænl/",
    translation: "n. 频道；渠道；海峡",
    example: "Change the TV channel."
}, {
    word: "chaos",
    phonetic: "/ˈkeɪɒs/",
    translation: "n. 混乱",
    example: "The storm caused chaos in the city."
}, {
    word: "character",
    phonetic: "/ˈkærəktə(r)/",
    translation: "n. 性格；角色；字符",
    example: "He has a strong character."
}, {
    word: "charge",
    phonetic: "/tʃɑːdʒ/",
    translation: "v. 收费；充电；指控",
    example: "How much do you charge for this?"
}, {
    word: "charity",
    phonetic: "/ˈtʃærəti/",
    translation: "n. 慈善；施舍",
    example: "They gave money to charity."
}, {
    word: "charm",
    phonetic: "/tʃɑːm/",
    translation: "n. 魅力 v. 迷住",
    example: "She has great charm."
}, {
    word: "chase",
    phonetic: "/tʃeɪs/",
    translation: "v./n. 追逐",
    example: "The dog chased the cat."
}, {
    word: "cheap",
    phonetic: "/tʃiːp/",
    translation: "adj. 便宜的；劣质的",
    example: "The food was cheap and tasty."
}, {
    word: "check",
    phonetic: "/tʃek/",
    translation: "v. 检查；核对",
    example: "Check your answers before submitting."
}, {
    word: "cheer",
    phonetic: "/tʃɪə(r)/",
    translation: "v. 欢呼；使高兴",
    example: "The crowd cheered for the team."
}, {
    word: "chemical",
    phonetic: "/ˈkemɪkl/",
    translation: "adj. 化学的 n. 化学品",
    example: "Chemical reactions occur in the lab."
}, {
    word: "chief",
    phonetic: "/tʃiːf/",
    translation: "adj. 主要的 n. 首领",
    example: "The chief reason for his success is hard work."
}, {
    word: "childhood",
    phonetic: "/ˈtʃaɪldhʊd/",
    translation: "n. 童年",
    example: "He had a happy childhood."
}, {
    word: "choice",
    phonetic: "/tʃɔɪs/",
    translation: "n. 选择",
    example: "You have no choice but to go."
}, {
    word: "choose",
    phonetic: "/tʃuːz/",
    translation: "v. 选择",
    example: "Choose wisely."
}, {
    word: "chronic",
    phonetic: "/ˈkrɒnɪk/",
    translation: "adj. 慢性的；长期的",
    example: "He suffers from chronic pain."
}, {
    word: "circuit",
    phonetic: "/ˈsɜːkɪt/",
    translation: "n. 电路；巡回",
    example: "The electrical circuit is broken."
}, {
    word: "circulate",
    phonetic: "/ˈsɜːkjəleɪt/",
    translation: "v. 循环；流传",
    example: "Blood circulates through the body."
}, {
    word: "cite",
    phonetic: "/saɪt/",
    translation: "v. 引用；举例",
    example: "He cited several examples."
}, {
    word: "civil",
    phonetic: "/ˈsɪvl/",
    translation: "adj. 公民的；民用的",
    example: "Civil rights are important."
}, {
    word: "claim",
    phonetic: "/kleɪm/",
    translation: "v. 声称；索赔",
    example: "He claimed that he was innocent."
}, {
    word: "clarify",
    phonetic: "/ˈklærəfaɪ/",
    translation: "v. 澄清；阐明",
    example: "Could you clarify your statement?"
}, {
    word: "clash",
    phonetic: "/klæʃ/",
    translation: "v./n. 冲突；撞击声",
    example: "The two groups clashed."
}, {
    word: "classic",
    phonetic: "/ˈklæsɪk/",
    translation: "adj. 经典的 n. 名著",
    example: "Hamlet is a classic play."
}, {
    word: "classify",
    phonetic: "/ˈklæsɪfaɪ/",
    translation: "v. 分类",
    example: "Books are classified by subject."
}, {
    word: "clean",
    phonetic: "/kliːn/",
    translation: "adj. 干净的 v. 打扫",
    example: "Keep your room clean."
}, {
    word: "clear",
    phonetic: "/klɪə(r)/",
    translation: "adj. 清楚的 v. 清除",
    example: "The sky is clear today."
}, {
    word: "clerk",
    phonetic: "/klɑːk/",
    translation: "n. 职员；店员",
    example: "Ask the clerk for help."
}, {
    word: "clever",
    phonetic: "/ˈklevə(r)/",
    translation: "adj. 聪明的",
    example: "He is a clever boy."
}, {
    word: "client",
    phonetic: "/ˈklaɪənt/",
    translation: "n. 客户；委托人",
    example: "The client is always right."
}, {
    word: "climate",
    phonetic: "/ˈklaɪmət/",
    translation: "n. 气候",
    example: "The climate is changing."
}, {
    word: "climb",
    phonetic: "/klaɪm/",
    translation: "v. 爬；攀登",
    example: "We climbed the mountain."
}, {
    word: "clinic",
    phonetic: "/ˈklɪnɪk/",
    translation: "n. 诊所",
    example: "Go to the clinic for a checkup."
}, {
    word: "clock",
    phonetic: "/klɒk/",
    translation: "n. 钟",
    example: "The clock struck twelve."
}, {
    word: "close",
    phonetic: "/kləʊz/",
    translation: "v. 关闭 adj. 亲密的",
    example: "Close the door, please."
}, {
    word: "cloth",
    phonetic: "/klɒθ/",
    translation: "n. 布",
    example: "Wipe the table with a cloth."
}, {
    word: "cloud",
    phonetic: "/klaʊd/",
    translation: "n. 云",
    example: "Dark clouds are gathering."
}, {
    word: "club",
    phonetic: "/klʌb/",
    translation: "n. 俱乐部；棍棒",
    example: "Join the chess club."
}, {
    word: "clue",
    phonetic: "/kluː/",
    translation: "n. 线索",
    example: "The police found a clue."
}, {
    word: "clumsy",
    phonetic: "/ˈklʌmzi/",
    translation: "adj. 笨拙的",
    example: "He is clumsy with his hands."
}, {
    word: "coach",
    phonetic: "/kəʊtʃ/",
    translation: "n. 教练；长途汽车",
    example: "The football coach yelled at the players."
}, {
    word: "coal",
    phonetic: "/kəʊl/",
    translation: "n. 煤",
    example: "Burn coal for heat."
}, {
    word: "coarse",
    phonetic: "/kɔːs/",
    translation: "adj. 粗糙的；粗俗的",
    example: "The fabric feels coarse."
}, {
    word: "code",
    phonetic: "/kəʊd/",
    translation: "n. 代码；准则",
    example: "Write the computer code."
}, {
    word: "coin",
    phonetic: "/kɔɪn/",
    translation: "n. 硬币 v. 创造",
    example: "He coined a new phrase."
}, {
    word: "cold",
    phonetic: "/kəʊld/",
    translation: "adj. 冷的 n. 感冒",
    example: "I caught a cold."
}, {
    word: "collaborate",
    phonetic: "/kəˈlæbəreɪt/",
    translation: "v. 合作；协作",
    example: "We collaborated on the project."
}, {
    word: "collapse",
    phonetic: "/kəˈlæps/",
    translation: "v./n. 倒塌；崩溃",
    example: "The building collapsed in the earthquake."
}, {
    word: "colleague",
    phonetic: "/ˈkɒliːɡ/",
    translation: "n. 同事",
    example: "My colleagues are helpful."
}, {
    word: "collect",
    phonetic: "/kəˈlekt/",
    translation: "v. 收集；采集",
    example: "Collect stamps as a hobby."
}, {
    word: "collide",
    phonetic: "/kəˈlaɪd/",
    translation: "v. 碰撞；冲突",
    example: "The two cars collided."
}, {
    word: "colonial",
    phonetic: "/kəˈləʊniəl/",
    translation: "adj. 殖民地的",
    example: "The colonial period ended long ago."
}, {
    word: "color",
    phonetic: "/ˈkʌlə(r)/",
    translation: "n. 颜色",
    example: "What is your favorite color?"
}, {
    word: "combine",
    phonetic: "/kəmˈbaɪn/",
    translation: "v. 结合；联合",
    example: "Combine flour and sugar."
}, {
    word: "comfort",
    phonetic: "/ˈkʌmfət/",
    translation: "n. 舒适 v. 安慰",
    example: "She comforted the crying child."
}, {
    word: "command",
    phonetic: "/kəˈmɑːnd/",
    translation: "v./n. 命令；指挥",
    example: "He commanded the army."
}, {
    word: "comment",
    phonetic: "/ˈkɒment/",
    translation: "n./v. 评论",
    example: "No comment."
}, {
    word: "commerce",
    phonetic: "/ˈkɒmɜːs/",
    translation: "n. 商业；贸易",
    example: "E-commerce is growing fast."
}, {
    word: "commission",
    phonetic: "/kəˈmɪʃn/",
    translation: "n. 委员会；佣金",
    example: "He earned a high commission."
}, {
    word: "commit",
    phonetic: "/kəˈmɪt/",
    translation: "v. 犯（罪）；承诺",
    example: "Commit a crime."
}, {
    word: "committee",
    phonetic: "/kəˈmɪti/",
    translation: "n. 委员会",
    example: "The committee met yesterday."
}, {
    word: "common",
    phonetic: "/ˈkɒmən/",
    translation: "adj. 共同的；普通的",
    example: "It is a common mistake."
}, {
    word: "communicate",
    phonetic: "/kəˈmjuːnɪkeɪt/",
    translation: "v. 交流；通讯",
    example: "We communicate by email."
}, {
    word: "community",
    phonetic: "/kəˈmjuːnəti/",
    translation: "n. 社区；社会",
    example: "Serve the community."
}, {
    word: "compact",
    phonetic: "/ˈkɒmpækt/",
    translation: "adj. 紧凑的 n. 契约",
    example: "A compact car."
}, {
    word: "company",
    phonetic: "/ˈkʌmpəni/",
    translation: "n. 公司；陪伴",
    example: "Keep me company."
}, {
    word: "compare",
    phonetic: "/kəmˈpeə(r)/",
    translation: "v. 比较",
    example: "Compare A with B."
}, {
    word: "compassion",
    phonetic: "/kəmˈpæʃn/",
    translation: "n. 同情；怜悯",
    example: "Show compassion to others."
}, {
    word: "compel",
    phonetic: "/kəmˈpel/",
    translation: "v. 强迫；迫使",
    example: "I felt compelled to help."
}, {
    word: "compensate",
    phonetic: "/ˈkɒmpenseɪt/",
    translation: "v. 补偿；赔偿",
    example: "Nothing can compensate for the loss."
}, {
    word: "compete",
    phonetic: "/kəmˈpiːt/",
    translation: "v. 竞争；比赛",
    example: "Compete for the prize."
}, {
    word: "compile",
    phonetic: "/kəmˈpaɪl/",
    translation: "v. 编译；汇编",
    example: "Compile a list of names."
}, {
    word: "complain",
    phonetic: "/kəmˈpleɪn/",
    translation: "v. 抱怨；投诉",
    example: "Complain about the service."
}, {
    word: "complete",
    phonetic: "/kəmˈpliːt/",
    translation: "adj. 完整的 v. 完成",
    example: "Complete the form."
}, {
    word: "complex",
    phonetic: "/ˈkɒmpleks/",
    translation: "adj. 复杂的",
    example: "A complex problem."
}, {
    word: "complicate",
    phonetic: "/ˈkɒmplɪkeɪt/",
    translation: "v. 使复杂化",
    example: "Don't complicate things."
}, {
    word: "component",
    phonetic: "/kəmˈpəʊnənt/",
    translation: "n. 成分；组件",
    example: "Key components of the system."
}, {
    word: "compose",
    phonetic: "/kəmˈpəʊz/",
    translation: "v. 组成；作曲",
    example: "Compose a song."
}, {
    word: "compound",
    phonetic: "/ˈkɒmpaʊnd/",
    translation: "n. 化合物 adj. 复合的",
    example: "Water is a compound."
}];
