document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('input');
    const wordContainer = document.getElementById('word-container');

    // Sample data: a mapping of Chinese characters to their pinyin with tone marks
    const pinyinMap = {
        '你': 'nǐ', '好': 'hǎo', '再': 'zài', '见': 'jiàn',
        '学': 'xué', '习': 'xí', '中': 'zhōng', '文': 'wén',
        '老': 'lǎo', '师': 'shī', '谢': 'xiè', '谢': 'xiè',
        '朋': 'péng', '友': 'yǒu', '欢': 'huān', '迎': 'yíng'
    };

    // Function to remove tone marks from pinyin
    function removeToneMarks(pinyin) {
        return pinyin
            .replace(/ā|á|ǎ|à|a/g, 'a')
            .replace(/ē|é|ě|è|e/g, 'e')
            .replace(/ī|í|ǐ|ì|i/g, 'i')
            .replace(/ō|ó|ǒ|ò|o/g, 'o')
            .replace(/ū|ú|ǔ|ù|u/g, 'u')
            .replace(/ǖ|ǘ|ǚ|ǜ|ü/g, 'u')
            .replace(/ń|ň|ǹ|n/g, 'n')
            .replace(/ḿ|m/g, 'm');
    }

    // Function to generate random words
    function generateRandomWords() {
        const words = [];
        const characters = Object.keys(pinyinMap);
        for (let i = 0; i < 5; i++) { // Generate 5 words
            const wordLength = Math.floor(Math.random() * 3) + 2; // Word length between 2 and 4
            let word = '';
            let pinyin = '';
            for (let j = 0; j < wordLength; j++) {
                const char = characters[Math.floor(Math.random() * characters.length)];
                word += char;
                pinyin += pinyinMap[char] + ' ';
            }
            words.push({ word, pinyin: pinyin.trim() });
        }
        return words;
    }

    // Function to display words
    function displayWords(words) {
        wordContainer.innerHTML = '';
        words.forEach(({ word, pinyin }) => {
            const wordElement = document.createElement('div');
            wordElement.className = 'word';
            wordElement.innerHTML = `<span class="pinyin">${pinyin}</span><br><span class="character">${word}</span>`;
            wordContainer.appendChild(wordElement);
        });
    }

    // Generate and display words
    //const words = generateRandomWords();
    const words = generateChineseWordList(5);
    displayWords(words);

    input.addEventListener('input', function() {
        const inputValue = input.value.trim().toLowerCase();

        document.querySelectorAll('.word').forEach(wordElement => {
            const pinyinElement = wordElement.querySelector('.pinyin');
            const pinyinWithTones = pinyinElement.textContent.trim().toLowerCase();
            const pinyinWithoutTones = removeToneMarks(pinyinWithTones);

            if (inputValue === pinyinWithoutTones) {
                wordElement.remove();
                input.value = '';
            }
        });

        // If all words are removed, show a message
        if (document.querySelectorAll('.word').length === 0) {
            alert('Congratulations! You have typed all the words correctly.');
        }
    });
});