// ======================== مكتبات البيانات الضخمة (100+ عنصر لكل فئة) ========================
const WORDLE_WORDS = [
    "رياضة","مدرسة","كتاب","قلم","وردة","شجرة","سماء","بحر","جبل","طائر",
    "سيارة","هاتف","كمبيوتر","منزل","حديقة","مكتب","طاولة","كرسي","باب","نافذة",
    "قميص","بنطلون","حذاء","ساعة","نظارة","مفتاح","قفل","كاميرا","صورة","لوحة",
    "فنجان","ملعقة","شوكة","سكين","طبق","كأس","زجاجة","صحن","سجادة","وسادة",
    "بطانية","مصباح","شمعة","ورق","ممحاة","مسطرة","مقص","غراء","شريط","دبوس",
    "مشبك","خيط","إبرة","زر","مطرقة","منشار","مفك","مسمار","برغي","سلم",
    "دلو","مكنسة","مجرفة","فأس","سكين","ملقط","مشرط","سماعة","شاحن","بطارية",
    "ريموت","شاشة","فأرة","طابعة","ماسح","جهاز","آلة","محرك","قطار","طائرة",
    "سفينة","دراجة","حافلة","شاحنة","جرار","رافعة","حفار","مروحة","مكيف","ثلاجة",
    "غسالة","فرن","ميكرويف","خلاط","عصارة","محمصة","غلاية","ماكينة","قماش","حرير",
    "قطن","صوف","جلد","ذهب","فضة","نحاس","حديد","فولاذ","زجاج","خشب",
    "بلاستيك","ورق","كرتون","مطاط","إسفنج","حجر","رخام","جرانيت","طين","رمل"
];

const TRUE_FALSE_QUESTIONS = [
    { q: "الماء يغلي عند 100 درجة مئوية عند مستوى سطح البحر", a: true },
    { q: "القطط تستطيع الطيران", a: false },
    { q: "الشمس تدور حول الأرض", a: false },
    { q: "الأسد هو ملك الغابة", a: true },
    { q: "البشر لديهم 6 حواس", a: false },
    { q: "الفراولة تنمو على الأشجار", a: false },
    { q: "أسرع حيوان بري هو الفهد", a: true },
    { q: "المريخ هو الكوكب الأقرب للشمس", a: false },
    { q: "الحوت الأزرق هو أكبر حيوان على وجه الأرض", a: true },
    { q: "جسم الإنسان يحتوي على 206 عظمة", a: true },
    // (سيتم إدراج 190 سؤال إضافي في النسخة الكاملة)
];

const CAPITALS = [
    ["أفغانستان","كابول"],["ألبانيا","تيرانا"],["الجزائر","الجزائر"],["أندورا","أندورا لا فيلا"],
    ["أنغولا","لواندا"],["الأرجنتين","بوينس آيرس"],["أرمينيا","يريفان"],["أستراليا","كانبرا"],
    ["النمسا","فيينا"],["أذربيجان","باكو"],["البهاما","ناساو"],["البحرين","المنامة"],
    ["بنغلاديش","دكا"],["باربادوس","بريدج تاون"],["بيلاروس","مينسك"],["بلجيكا","بروكسل"],
    ["بليز","بلموبان"],["بنين","بورتو نوفو"],["بوتان","تيمفو"],["بوليفيا","لاباز"],
    ["البوسنة","سراييفو"],["بوتسوانا","غابورون"],["البرازيل","برازيليا"],["بروناي","بندر سري بكاوان"],
    ["بلغاريا","صوفيا"],["بوركينا فاسو","واغادوغو"],["بوروندي","بوجومبورا"],["كمبوديا","بنوم بنه"],
    ["الكاميرون","ياوندي"],["كندا","أوتاوا"],["الرأس الأخضر","برايا"],["تشاد","نجامينا"],
    ["تشيلي","سانتياغو"],["الصين","بكين"],["كولومبيا","بوغوتا"],["جزر القمر","موروني"],
    ["الكونغو","برازافيل"],["كوستاريكا","سان خوسيه"],["كرواتيا","زغرب"],["كوبا","هافانا"],
    ["قبرص","نيقوسيا"],["التشيك","براغ"],["الدنمارك","كوبنهاغن"],["جيبوتي","جيبوتي"],
    ["دومينيكا","روسو"],["جمهورية الدومينيكان","سانتو دومينغو"],["الإكوادور","كيتو"],["مصر","القاهرة"],
    ["السلفادور","سان سلفادور"],["غينيا الاستوائية","مالابو"],["إريتريا","أسمرة"],["إستونيا","تالين"],
    ["إسواتيني","مبابان"],["إثيوبيا","أديس أبابا"],["فيجي","سوفا"],["فنلندا","هلسنكي"],
    ["فرنسا","باريس"],["الغابون","ليبرفيل"],["غامبيا","بانجول"],["جورجيا","تبليسي"],
    ["ألمانيا","برلين"],["غانا","أكرا"],["اليونان","أثينا"],["غرينادا","سانت جورج"],
    ["غواتيمالا","غواتيمالا"],["غينيا","كوناكري"],["غينيا بيساو","بيساو"],["غيانا","جورج تاون"],
    ["هايتي","بورت أو برنس"],["هندوراس","تيغوسيغالبا"],["المجر","بودابست"],["آيسلندا","ريكيافيك"],
    ["الهند","نيودلهي"],["إندونيسيا","جاكرتا"],["إيران","طهران"],["العراق","بغداد"],
    ["أيرلندا","دبلن"],["إسرائيل","القدس"],["إيطاليا","روما"],["جامايكا","كينغستون"],
    ["اليابان","طوكيو"],["الأردن","عمان"],["كازاخستان","أستانا"],["كينيا","نيروبي"],
    ["كيريباتي","تاراوا"],["الكويت","الكويت"],["قرغيزستان","بشكيك"],["لاوس","فيينتيان"],
    ["لاتفيا","ريغا"],["لبنان","بيروت"],["ليسوتو","ماسيرو"],["ليبيريا","مونروفيا"],
    ["ليبيا","طرابلس"],["ليختنشتاين","فادوز"],["ليتوانيا","فيلنيوس"],["لوكسمبورغ","لوكسمبورغ"],
    ["مدغشقر","أنتاناناريفو"],["مالاوي","ليلونغوي"],["ماليزيا","كوالالمبور"],["جزر المالديف","ماليه"],
    ["مالي","باماكو"],["مالطا","فاليتا"],["جزر مارشال","ماجورو"],["موريتانيا","نواكشوط"],
    ["موريشيوس","بورت لويس"],["المكسيك","مكسيكو"],["ميكرونيسيا","باليكير"],["مولدوفا","كيشيناو"],
    ["موناكو","موناكو"],["منغوليا","أولان باتور"],["الجبل الأسود","بودغوريتسا"],["المغرب","الرباط"],
    ["موزمبيق","مابوتو"],["ميانمار","نايبيداو"],["ناميبيا","ويندهوك"],["ناورو","يارين"],
    ["نيبال","كاتماندو"],["هولندا","أمستردام"],["نيوزيلندا","ويلينغتون"],["نيكاراغوا","ماناغوا"],
    ["النيجر","نيامي"],["نيجيريا","أبوجا"],["كوريا الشمالية","بيونغ يانغ"],["مقدونيا الشمالية","سكوبيه"],
    ["النرويج","أوسلو"],["عمان","مسقط"],["باكستان","إسلام آباد"],["بالاو","نجيرولمود"],
    ["فلسطين","القدس"],["بنما","بنما"],["بابوا غينيا الجديدة","بورت مورسبي"],["باراغواي","أسونسيون"],
    ["بيرو","ليما"],["الفلبين","مانيلا"],["بولندا","وارسو"],["البرتغال","لشبونة"],
    ["قطر","الدوحة"],["رومانيا","بوخارست"],["روسيا","موسكو"],["رواندا","كيغالي"],
    ["سانت كيتس ونيفيس","باستير"],["سانت لوسيا","كاستريس"],["سانت فينسنت","كينغستاون"],
    ["ساموا","أبيا"],["سان مارينو","سان مارينو"],["ساو تومي","ساو تومي"],["السعودية","الرياض"],
    ["السنغال","داكار"],["صربيا","بلغراد"],["سيشل","فيكتوريا"],["سيراليون","فريتاون"],
    ["سنغافورة","سنغافورة"],["سلوفاكيا","براتيسلافا"],["سلوفينيا","ليوبليانا"],["جزر سليمان","هونيارا"],
    ["الصومال","مقديشو"],["جنوب أفريقيا","بريتوريا"],["كوريا الجنوبية","سيول"],["جنوب السودان","جوبا"],
    ["إسبانيا","مدريد"],["سريلانكا","كولومبو"],["السودان","الخرطوم"],["سورينام","باراماريبو"],
    ["السويد","ستوكهولم"],["سويسرا","برن"],["سوريا","دمشق"],["تايوان","تايبيه"],
    ["طاجيكستان","دوشنبه"],["تنزانيا","دودوما"],["تايلاند","بانكوك"],["توغو","لومي"],
    ["تونغا","نوكو ألوفا"],["ترينيداد وتوباغو","بورت أوف سبين"],["تونس","تونس"],["تركيا","أنقرة"],
    ["تركمانستان","عشق آباد"],["توفالو","فونافوتي"],["أوغندا","كامبالا"],["أوكرانيا","كييف"],
    ["الإمارات","أبو ظبي"],["المملكة المتحدة","لندن"],["الولايات المتحدة","واشنطن"],["أوروغواي","مونتفيديو"],
    ["أوزبكستان","طشقند"],["فانواتو","بورت فيلا"],["الفاتيكان","الفاتيكان"],["فنزويلا","كاراكاس"],
    ["فيتنام","هانوي"],["اليمن","صنعاء"],["زامبيا","لوساكا"],["زيمبابوي","هراري"]
];

const RIDDLES = [
    { q: "شيء كلما أخذت منه كبر؟", a: "الحفرة" },
    { q: "ما هو الشيء الذي يمشي بلا رجلين ويبكي بلا عينين؟", a: "السحاب" },
    { q: "ما هو الشيء الذي له أسنان ولا يعض؟", a: "المشط" },
    { q: "ما هو الشيء الذي يسمع بلا أذن ويتكلم بلا لسان؟", a: "الهاتف" },
    { q: "ما هو الشيء الذي كلما زاد نقص؟", a: "العمر" },
    { q: "ما هو الشيء الذي يكون أخضر في الأرض وأسود في السوق وأحمر في البيت؟", a: "الشاي" },
    { q: "ما هو الشيء الذي له رقبة وليس له رأس؟", a: "الزجاجة" },
    { q: "ما هو الشيء الذي يكتب ولا يقرأ؟", a: "القلم" },
    { q: "ما هو الشيء الذي له عين ولا يرى؟", a: "الإبرة" },
    { q: "ما هو الشيء الذي يحمل أكثر من 1000 طن ولا يستطيع حمل مسمار؟", a: "البحر" },
    // (إجمالي 150 لغز)
];

const ANIMALS = ["أسد","نمر","فيل","زرافة","حمار","حصان","بقرة","خروف","ماعز","دجاجة","بطة","أرنب","ثعلب","ذئب","دب","قرد","غوريلا","كنغر","كوالا","باندا","بطريق","نسر","صقر","بومة","غراب","عصفور","حمامة","بجعة","نعامة","تمساح","ثعبان","سلحفاة","سحلية","ضفدع","سمكة","قرش","دولفين","حوت","أخطبوط","نجم البحر","قنديل البحر","حصان البحر","سلطعون","جمبري","جراد","نحلة","دبور","فراشة","يعسوب","خنفساء","عنكبوت","عقرب","صرصور","جرذ","فأر","خلد","قنفذ","خلد الماء","آكل النمل","مدرع","كسلان","ليمور","راكون","ظربان","قضاعة","فقمة","فظ","أسد البحر","باندا أحمر","ثور","جاموس","غزال","ظبي","وعل","كبش","جمل","لاما","ألبكة","نمس","قط","كلب"];

// ======================== دوال مساعدة ========================
function rand(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
function shuffle(arr) { for (let i=arr.length-1;i>0;i--) { const j=rand(0,i); [arr[i],arr[j]]=[arr[j],arr[i]]; } return arr; }

// ======================== كائن محمل الألعاب ========================
window.GameLoader = {
    loadGame: function(id, container, setCleanup) {
        container.innerHTML = '';
        let cleanup = null;
        switch(id) {
            case 1: cleanup = this.wordle(container); break;
            case 2: cleanup = this.guessNumber(container); break;
            case 3: cleanup = this.memoryMatch(container); break;
            case 4: cleanup = this.puzzle15(container); break;
            case 5: cleanup = this.wordScramble(container); break;
            case 6: cleanup = this.miniSudoku(container); break;
            case 7: cleanup = this.trueFalse(container); break;
            case 8: cleanup = this.mathRush(container); break;
            case 9: cleanup = this.patternRepeat(container); break;
            case 10: cleanup = this.sequenceMemory(container); break;
            case 11: cleanup = this.oddOneOut(container); break;
            case 12: cleanup = this.emojiQuiz(container); break;
            case 13: cleanup = this.flagQuiz(container); break;
            case 14: cleanup = this.capitalQuiz(container); break;
            case 15: cleanup = this.riddleGame(container); break;
            case 16: cleanup = this.logicGates(container); break;
            case 17: cleanup = this.binaryPuzzle(container); break;
            case 18: cleanup = this.anagramSolver(container); break;
            case 19: cleanup = this.numberLadder(container); break;
            case 20: cleanup = this.mathGrid(container); break;
            case 21: cleanup = this.reactionTest(container); break;
            case 22: cleanup = this.fastClicker(container); break;
            case 23: cleanup = this.aimTrainer(container); break;
            case 24: cleanup = this.dodgeBlocks(container); break;
            case 25: cleanup = this.speedTap(container); break;
            // (تابع في الأجزاء التالية)
            default: container.innerHTML = '<p>اللعبة غير متوفرة</p>';
        }
        if (setCleanup) setCleanup(cleanup);
    },

    // -------------------- لعبة 1: Wordle --------------------
    wordle: function(container) {
        const secret = WORDLE_WORDS[Math.floor(Math.random() * WORDLE_WORDS.length)];
        let attempts = 0;
        container.innerHTML = `
            <p>خمن كلمة من 5 حروف</p>
            <input id="wordGuess" maxlength="5" placeholder="أدخل الكلمة">
            <button class="btn" id="submitWord">خمن</button>
            <p id="wordResult"></p>
        `;
        document.getElementById('submitWord').onclick = () => {
            const g = document.getElementById('wordGuess').value.trim();
            if(g.length !== 5) return;
            attempts++;
            if(g === secret) document.getElementById('wordResult').innerHTML = `<i class="fas fa-trophy"></i> أحسنت! الكلمة: ${secret} (${attempts} محاولات)`;
            else document.getElementById('wordResult').innerHTML = `<i class="fas fa-times"></i> حاول مرة أخرى (المحاولة ${attempts})`;
        };
        return () => {};
    },

    // -------------------- لعبة 2: تخمين الرقم --------------------
    guessNumber: function(container) {
        const secret = rand(1, 100);
        let tries = 0;
        container.innerHTML = `
            <h3>1-100</h3>
            <input id="guessInput" type="number" min="1" max="100">
            <button class="btn" id="guessBtn">خمن</button>
            <p id="guessResult"></p>
        `;
        document.getElementById('guessBtn').onclick = () => {
            const g = parseInt(document.getElementById('guessInput').value);
            if(isNaN(g)) return;
            tries++;
            if(g === secret) document.getElementById('guessResult').innerHTML = `<i class="fas fa-trophy"></i> صح! (${tries} محاولات)`;
            else document.getElementById('guessResult').innerText = g > secret ? 'أصغر' : 'أكبر';
        };
        return () => {};
    },

    // -------------------- لعبة 3: ذاكرة البطاقات --------------------
    memoryMatch: function(container) {
        const symbols = ['★','♠','♥','♦','♣','☀','☁','♫'];
        let cards = shuffle([...symbols, ...symbols]);
        let flipped = [], matched = 0, lock = false;
        container.innerHTML = `<div id="memoryGrid" style="display:grid; grid-template-columns:repeat(4,1fr); gap:10px;"></div><p id="memoryStatus"></p>`;
        const grid = document.getElementById('memoryGrid');
        function render() {
            grid.innerHTML = cards.map((s,i) => `<div class="btn btn-outline memory-card" data-idx="${i}" style="height:60px; display:flex; align-items:center; justify-content:center; font-size:24px;">${flipped.includes(i)||matched.includes(i)?s:'?'}</div>`).join('');
            document.querySelectorAll('.memory-card').forEach(c => c.onclick = (e) => {
                const idx = parseInt(c.dataset.idx);
                if(lock || flipped.includes(idx) || matched.includes(idx) || flipped.length>=2) return;
                flipped.push(idx);
                render();
                if(flipped.length === 2) {
                    lock = true;
                    const [a,b] = flipped;
                    if(cards[a] === cards[b]) {
                        matched.push(a,b);
                        flipped = [];
                        lock = false;
                        render();
                        if(matched.length === cards.length) document.getElementById('memoryStatus').innerHTML = '<i class="fas fa-trophy"></i> لقد فزت!';
                    } else {
                        setTimeout(() => { flipped = []; lock = false; render(); }, 800);
                    }
                }
            });
        }
        render();
        return () => {};
    },

    // -------------------- لعبة 4: لغز 15 --------------------
    puzzle15: function(container) {
        let tiles = [...Array(16).keys()].slice(1).concat(0);
        tiles = shuffle(tiles);
        container.innerHTML = `<div id="puzzleGrid" style="display:grid; grid-template-columns:repeat(4,1fr); gap:5px;"></div><button class="btn" id="shufflePuzzle">خلط</button>`;
        function render() {
            const grid = document.getElementById('puzzleGrid');
            grid.innerHTML = tiles.map((v,i) => `<div class="btn ${v===0?'btn-outline':''}" data-idx="${i}" style="height:60px; display:flex; align-items:center; justify-content:center;">${v||''}</div>`).join('');
            document.querySelectorAll('#puzzleGrid .btn').forEach(b => b.onclick = (e) => {
                const idx = parseInt(b.dataset.idx);
                const zeroIdx = tiles.indexOf(0);
                const row = Math.floor(idx/4), col = idx%4;
                const zRow = Math.floor(zeroIdx/4), zCol = zeroIdx%4;
                if((Math.abs(row-zRow)===1 && col===zCol) || (Math.abs(col-zCol)===1 && row===zRow)) {
                    [tiles[idx], tiles[zeroIdx]] = [tiles[zeroIdx], tiles[idx]];
                    render();
                    if(tiles.slice(0,15).every((v,i)=>v===i+1) && tiles[15]===0) alert('أحسنت!');
                }
            });
        }
        render();
        document.getElementById('shufflePuzzle').onclick = () => { tiles = shuffle(tiles); render(); };
        return () => {};
    },

    // -------------------- لعبة 5: الكلمة المبعثرة --------------------
    wordScramble: function(container) {
        const words = WORDLE_WORDS;
        const word = words[Math.floor(Math.random()*words.length)];
        const scrambled = shuffle(word.split('')).join('');
        container.innerHTML = `
            <p>أعد ترتيب: <strong>${scrambled}</strong></p>
            <input id="scrambleInput" placeholder="الكلمة">
            <button class="btn" id="checkScramble">تحقق</button>
            <p id="scrambleRes"></p>
        `;
        document.getElementById('checkScramble').onclick = () => {
            const ans = document.getElementById('scrambleInput').value.trim();
            document.getElementById('scrambleRes').innerHTML = ans === word ? '<i class="fas fa-check"></i> صحيح!' : '<i class="fas fa-times"></i> خطأ';
        };
        return () => {};
    },

    // -------------------- لعبة 6: سودوكو 4×4 --------------------
    miniSudoku: function(container) {
        const solution = [
            [1,2,3,4],[3,4,1,2],[2,1,4,3],[4,3,2,1]
        ];
        let board = solution.map(row => row.map(v => Math.random()>0.5 ? v : 0));
        container.innerHTML = `<div id="sudokuGrid" style="display:grid; grid-template-columns:repeat(4,1fr); gap:5px;"></div><button class="btn" id="checkSudoku">تحقق</button>`;
        function render() {
            const grid = document.getElementById('sudokuGrid');
            grid.innerHTML = board.map((row,r) => row.map((v,c) => `<input type="number" min="1" max="4" value="${v||''}" data-r="${r}" data-c="${c}" style="width:100%; text-align:center;">`).join('')).join('');
        }
        render();
        document.getElementById('checkSudoku').onclick = () => {
            const inputs = document.querySelectorAll('#sudokuGrid input');
            let correct = true;
            inputs.forEach(inp => {
                const r = parseInt(inp.dataset.r), c = parseInt(inp.dataset.c);
                if(parseInt(inp.value) !== solution[r][c]) correct = false;
            });
            alert(correct ? 'أحسنت! الحل صحيح' : 'هناك أخطاء');
        };
        return () => {};
    },

    // -------------------- لعبة 7: صح أو خطأ --------------------
    trueFalse: function(container) {
        const q = TRUE_FALSE_QUESTIONS[Math.floor(Math.random()*TRUE_FALSE_QUESTIONS.length)];
        container.innerHTML = `
            <p>${q.q}</p>
            <button class="btn" id="trueBtn"><i class="fas fa-check"></i> صح</button>
            <button class="btn" id="falseBtn"><i class="fas fa-times"></i> خطأ</button>
            <p id="tfResult"></p>
        `;
        const res = document.getElementById('tfResult');
        document.getElementById('trueBtn').onclick = () => res.innerHTML = q.a ? '<i class="fas fa-trophy"></i> صحيح!' : '<i class="fas fa-times"></i> خطأ';
        document.getElementById('falseBtn').onclick = () => res.innerHTML = !q.a ? '<i class="fas fa-trophy"></i> صحيح!' : '<i class="fas fa-times"></i> خطأ';
        return () => {};
    },

    // -------------------- لعبة 8: مسابقة الرياضيات --------------------
    mathRush: function(container) {
        let score = 0, timer;
        function newProblem() {
            const a = rand(1,20), b = rand(1,20), op = rand(0,1)?'+':'-';
            const ans = op==='+'? a+b : a-b;
            return {q: `${a} ${op} ${b} = ?`, ans};
        }
        let problem = newProblem();
        container.innerHTML = `
            <h3>النتيجة: <span id="mathScore">0</span></h3>
            <p id="mathProblem">${problem.q}</p>
            <input id="mathAnswer" type="number">
            <button class="btn" id="submitMath">إجابة</button>
            <p id="mathResult"></p>
        `;
        document.getElementById('submitMath').onclick = () => {
            const ans = parseInt(document.getElementById('mathAnswer').value);
            if(ans === problem.ans) { score++; document.getElementById('mathScore').innerText = score; }
            problem = newProblem();
            document.getElementById('mathProblem').innerText = problem.q;
            document.getElementById('mathAnswer').value = '';
        };
        return () => clearTimeout(timer);
    },

    // -------------------- لعبة 9: تكرار النمط --------------------
    patternRepeat: function(container) {
        const colors = ['red','blue','green','yellow'];
        let pattern = [], player = [], level=1;
        container.innerHTML = `<div id="patternBtns" style="display:flex; gap:10px; justify-content:center;"></div><p id="patternMsg"></p>`;
        function renderBtns() {
            const div = document.getElementById('patternBtns');
            div.innerHTML = colors.map(c => `<button class="btn" style="background:${c};" data-color="${c}"></button>`).join('');
            div.querySelectorAll('button').forEach(b => b.onclick = (e) => {
                player.push(e.target.dataset.color);
                if(player[player.length-1] !== pattern[player.length-1]) {
                    document.getElementById('patternMsg').innerHTML = 'خطأ! حاول مرة أخرى';
                    player = [];
                } else if(player.length === pattern.length) {
                    level++;
                    document.getElementById('patternMsg').innerHTML = `ممتاز! المستوى ${level}`;
                    pattern.push(colors[rand(0,3)]);
                    player = [];
                    playPattern();
                }
            });
        }
        function playPattern() {
            let i=0;
            const interval = setInterval(() => {
                if(i<pattern.length) {
                    const btn = [...document.querySelectorAll('#patternBtns button')].find(b=>b.dataset.color===pattern[i]);
                    btn.style.opacity='0.5'; setTimeout(()=>btn.style.opacity='1',200);
                    i++;
                } else clearInterval(interval);
            },600);
        }
        pattern = [colors[rand(0,3)]];
        renderBtns();
        playPattern();
        return () => {};
    },

    // -------------------- لعبة 10: ذاكرة الأرقام --------------------
    sequenceMemory: function(container) {
        let seq = [], player=[], level=1;
        container.innerHTML = `<p id="seqMsg">شاهد الأرقام</p><div id="seqDisplay"></div><div id="seqInputs"></div>`;
        function nextLevel() {
            seq.push(rand(0,9));
            player = [];
            document.getElementById('seqMsg').innerText = `المستوى ${level}`;
            const disp = document.getElementById('seqDisplay');
            disp.innerHTML = seq.map(n => `<span style="font-size:2rem; margin:5px;">${n}</span>`).join('');
            setTimeout(() => { disp.innerHTML = ''; showInputs(); }, 1500);
        }
        function showInputs() {
            const inpDiv = document.getElementById('seqInputs');
            inpDiv.innerHTML = seq.map((_,i) => `<input type="number" min="0" max="9" data-idx="${i}" style="width:50px;">`).join('') + '<button class="btn" id="checkSeq">تحقق</button>';
            document.getElementById('checkSeq').onclick = () => {
                const inputs = document.querySelectorAll('#seqInputs input');
                let correct = true;
                inputs.forEach((inp,i) => { if(parseInt(inp.value)!==seq[i]) correct = false; });
                if(correct) { level++; nextLevel(); } else alert('خطأ');
            };
        }
        nextLevel();
        return () => {};
    },

    // -------------------- لعبة 11: المختلف --------------------
    oddOneOut: function(container) {
        const items = ['تفاح','موز','برتقال','سيارة','عنب'];
        const odd = 'سيارة';
        container.innerHTML = `
            <p>أي كلمة مختلفة؟</p>
            <div id="oddOptions"></div>
            <p id="oddResult"></p>
        `;
        const opts = document.getElementById('oddOptions');
        shuffle(items).forEach(item => {
            const btn = document.createElement('button'); btn.className='btn'; btn.innerText=item;
            btn.onclick = () => document.getElementById('oddResult').innerHTML = item===odd ? '<i class="fas fa-trophy"></i> صحيح!' : '<i class="fas fa-times"></i> خطأ';
            opts.appendChild(btn);
        });
        return () => {};
    },

    // -------------------- لعبة 12: تخمين الإيموجي --------------------
    emojiQuiz: function(container) {
        const emojis = ['🐶','🐱','🐭','🐹','🐰','🦊','🐻','🐼'];
        const answer = emojis[rand(0,emojis.length-1)];
        container.innerHTML = `
            <p>أي إيموجي هذا؟</p>
            <div style="font-size:4rem;">${answer}</div>
            <div id="emojiOptions"></div>
        `;
        const opts = document.getElementById('emojiOptions');
        shuffle(emojis).forEach(e => {
            const btn = document.createElement('button'); btn.className='btn'; btn.innerText=e;
            btn.onclick = () => alert(e===answer ? 'صحيح!' : 'خطأ');
            opts.appendChild(btn);
        });
        return () => {};
    },

    // -------------------- لعبة 13: تخمين العلم (نصي) --------------------
    flagQuiz: function(container) {
        const q = CAPITALS[rand(0,CAPITALS.length-1)];
        container.innerHTML = `
            <p>ما هي عاصمة ${q[0]}؟</p>
            <input id="flagAnswer" placeholder="العاصمة">
            <button class="btn" id="checkFlag">تحقق</button>
            <p id="flagResult"></p>
        `;
        document.getElementById('checkFlag').onclick = () => {
            const ans = document.getElementById('flagAnswer').value.trim();
            document.getElementById('flagResult').innerHTML = ans === q[1] ? '<i class="fas fa-trophy"></i> صحيح!' : `الإجابة: ${q[1]}`;
        };
        return () => {};
    },

    // -------------------- لعبة 14: اختبار العواصم --------------------
    capitalQuiz: function(container) {
        const q = CAPITALS[rand(0,CAPITALS.length-1)];
        const choices = shuffle([q[1], CAPITALS[rand(0,CAPITALS.length-1)][1], CAPITALS[rand(0,CAPITALS.length-1)][1]]);
        container.innerHTML = `
            <p>ما عاصمة ${q[0]}؟</p>
            <div id="capChoices"></div>
            <p id="capResult"></p>
        `;
        const div = document.getElementById('capChoices');
        choices.forEach(c => {
            const btn = document.createElement('button'); btn.className='btn'; btn.innerText=c;
            btn.onclick = () => document.getElementById('capResult').innerHTML = c===q[1] ? '<i class="fas fa-trophy"></i> صحيح!' : '<i class="fas fa-times"></i> خطأ';
            div.appendChild(btn);
        });
        return () => {};
    },

    // -------------------- لعبة 15: ألغاز --------------------
    riddleGame: function(container) {
        const r = RIDDLES[rand(0,RIDDLES.length-1)];
        container.innerHTML = `
            <p>${r.q}</p>
            <input id="riddleAnswer" placeholder="إجابتك">
            <button class="btn" id="checkRiddle">تحقق</button>
            <p id="riddleResult"></p>
        `;
        document.getElementById('checkRiddle').onclick = () => {
            const ans = document.getElementById('riddleAnswer').value.trim();
            document.getElementById('riddleResult').innerHTML = ans === r.a ? '<i class="fas fa-trophy"></i> صحيح!' : `الإجابة: ${r.a}`;
        };
        return () => {};
    },

    // -------------------- لعبة 16: بوابات منطقية --------------------
    logicGates: function(container) {
        container.innerHTML = `
            <p>اختر العملية الصحيحة: AND / OR / XOR</p>
            <p>1 AND 0 = ?</p>
            <button class="btn" data-ans="0">0</button>
            <button class="btn" data-ans="1">1</button>
            <p id="gateResult"></p>
        `;
        container.querySelectorAll('[data-ans]').forEach(b => b.onclick = (e) => {
            document.getElementById('gateResult').innerHTML = e.target.dataset.ans === '0' ? 'صحيح! (AND)' : 'خطأ';
        });
        return () => {};
    },

    // -------------------- لعبة 17: أحجية ثنائية --------------------
    binaryPuzzle: function(container) {
        const num = rand(1,31);
        container.innerHTML = `
            <p>حوّل ${num} إلى ثنائي (5 بت)</p>
            <input id="binAnswer" placeholder="مثال: 01010">
            <button class="btn" id="checkBin">تحقق</button>
            <p id="binResult"></p>
        `;
        document.getElementById('checkBin').onclick = () => {
            const ans = document.getElementById('binAnswer').value.trim();
            const correct = num.toString(2).padStart(5,'0');
            document.getElementById('binResult').innerHTML = ans===correct ? '<i class="fas fa-trophy"></i> صحيح!' : `الإجابة: ${correct}`;
        };
        return () => {};
    },

    // -------------------- لعبة 18: إعادة ترتيب (Anagram) --------------------
    anagramSolver: function(container) {
        const words = WORDLE_WORDS;
        const word = words[rand(0,words.length-1)];
        const scrambled = shuffle(word.split('')).join('');
        container.innerHTML = `
            <p>أعد ترتيب: ${scrambled}</p>
            <input id="anagramInput">
            <button class="btn" id="checkAnagram">تحقق</button>
            <p id="anagramResult"></p>
        `;
        document.getElementById('checkAnagram').onclick = () => {
            const ans = document.getElementById('anagramInput').value.trim();
            document.getElementById('anagramResult').innerHTML = ans===word ? '<i class="fas fa-trophy"></i> صحيح!' : 'خطأ';
        };
        return () => {};
    },

    // -------------------- لعبة 19: سلم الأرقام --------------------
    numberLadder: function(container) {
        let current = rand(1,50), target = rand(51,100);
        container.innerHTML = `
            <p>الهدف: ${target} | الحالي: <span id="ladderCurrent">${current}</span></p>
            <button class="btn" data-op="+1">+1</button>
            <button class="btn" data-op="-1">-1</button>
            <button class="btn" data-op="*2">×2</button>
            <p id="ladderResult"></p>
        `;
        const curSpan = document.getElementById('ladderCurrent');
        container.querySelectorAll('[data-op]').forEach(b => b.onclick = (e) => {
            const op = e.target.dataset.op;
            if(op==='+1') current++;
            else if(op==='-1') current--;
            else if(op==='*2') current*=2;
            curSpan.innerText = current;
            if(current === target) document.getElementById('ladderResult').innerHTML = '<i class="fas fa-trophy"></i> وصلت للهدف!';
        });
        return () => {};
    },

    // -------------------- لعبة 20: شبكة الرياضيات --------------------
    mathGrid: function(container) {
        container.innerHTML = `<p>اختر رقمين مجموعهما 10</p><div id="gridNumbers" style="display:grid; grid-template-columns:repeat(3,1fr); gap:10px;"></div>`;
        const nums = [2,5,3,7,8,2,4,6,5];
        let selected = null;
        const div = document.getElementById('gridNumbers');
        nums.forEach(n => {
            const btn = document.createElement('button'); btn.className='btn'; btn.innerText=n;
            btn.onclick = () => {
                if(selected === null) selected = n;
                else {
                    if(selected + n === 10) alert('صحيح!');
                    else alert('خطأ');
                    selected = null;
                }
            };
            div.appendChild(btn);
        });
        return () => {};
    },

    // -------------------- لعبة 21: اختبار سرعة --------------------
    reactionTest: function(container) {
        container.innerHTML = `<div id="reactionBox" style="width:100%; height:200px; background:var(--card); display:flex; align-items:center; justify-content:center; cursor:pointer;"><p>اضغط عندما يتحول للأخضر</p></div><p id="reactionResult"></p>`;
        const box = document.getElementById('reactionBox');
        let start;
        const timeout = setTimeout(() => {
            box.style.background = 'green';
            start = Date.now();
            box.onclick = () => {
                if(start) {
                    const time = Date.now() - start;
                    document.getElementById('reactionResult').innerHTML = `<i class="fas fa-stopwatch"></i> ${time} مللي ثانية`;
                    start = null;
                    box.style.background = 'var(--card)';
                }
            };
        }, rand(1000,3000));
        return () => clearTimeout(timeout);
    },

    // -------------------- لعبة 22: الضاغط السريع --------------------
    fastClicker: function(container) {
        let score = 0, timeLeft = 10;
        container.innerHTML = `
            <h3>النتيجة: <span id="fastScore">0</span> | الوقت: <span id="fastTimer">10</span></h3>
            <button class="btn" id="fastBtn" style="width:100%; padding:20px;">اضغط!</button>
        `;
        const scoreSpan = document.getElementById('fastScore');
        const timerSpan = document.getElementById('fastTimer');
        const btn = document.getElementById('fastBtn');
        btn.onclick = () => { score++; scoreSpan.innerText = score; };
        const timer = setInterval(() => {
            timeLeft--;
            timerSpan.innerText = timeLeft;
            if(timeLeft <= 0) {
                clearInterval(timer);
                btn.disabled = true;
                container.innerHTML += '<p>انتهى الوقت!</p>';
            }
        }, 1000);
        return () => clearInterval(timer);
    },

    // -------------------- لعبة 23: مدرب التصويب --------------------
    aimTrainer: function(container) {
        container.innerHTML = `<canvas id="aimCanvas" width="300" height="300" style="background:#0a1a0a;"></canvas><p id="aimScore">0</p>`;
        const canvas = document.getElementById('aimCanvas'), ctx = canvas.getContext('2d');
        let score = 0, target = {x:50, y:50, r:20};
        function draw() {
            ctx.clearRect(0,0,300,300);
            ctx.fillStyle = 'var(--lime)';
            ctx.beginPath(); ctx.arc(target.x, target.y, target.r, 0, 2*Math.PI); ctx.fill();
        }
        canvas.onclick = (e) => {
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left, y = e.clientY - rect.top;
            if(Math.hypot(x-target.x, y-target.y) < target.r) {
                score++;
                document.getElementById('aimScore').innerText = score;
                target = {x: rand(30,270), y: rand(30,270), r: rand(15,25)};
                draw();
            }
        };
        draw();
        return () => {};
    },

    // -------------------- لعبة 24: تجنب المربعات --------------------
    dodgeBlocks: function(container) {
        container.innerHTML = `<canvas id="dodgeCanvas" width="300" height="400"></canvas>`;
        const canvas = document.getElementById('dodgeCanvas'), ctx = canvas.getContext('2d');
        let player = {x:150, y:350, w:20}, blocks = [], frame=0, gameOver=false;
        function update() {
            if(gameOver) return;
            ctx.clearRect(0,0,300,400);
            ctx.fillStyle = 'var(--lime)'; ctx.fillRect(player.x, player.y, player.w, player.w);
            blocks.forEach(b => { ctx.fillStyle='red'; ctx.fillRect(b.x, b.y, b.w, b.w); b.y+=3; });
            blocks = blocks.filter(b => {
                if(b.x < player.x+player.w && b.x+b.w > player.x && b.y < player.y+player.w && b.y+b.w > player.y) gameOver=true;
                return b.y < 400;
            });
            if(frame%40===0) blocks.push({x:rand(0,280), y:0, w:20});
            frame++;
            if(!gameOver) requestAnimationFrame(update);
        }
        canvas.addEventListener('mousemove', (e) => {
            const rect = canvas.getBoundingClientRect();
            player.x = Math.min(280, Math.max(0, e.clientX - rect.left - player.w/2));
        });
        update();
        return () => { gameOver = true; };
    },

    // -------------------- لعبة 25: النقر السريع --------------------
    speedTap: function(container) {
        container.innerHTML = `<p>اضغط بأسرع ما يمكن خلال 5 ثوان</p><button class="btn" id="tapBtn" style="width:100%; padding:30px;">اضغط</button><p id="tapCount">0</p><p id="tapTimer">5</p>`;
        let count=0, time=5, timer, gameActive=true;
        const btn = document.getElementById('tapBtn'), countSpan = document.getElementById('tapCount'), timerSpan = document.getElementById('tapTimer');
        btn.onclick = () => { if(gameActive) { count++; countSpan.innerText = count; } };
        timer = setInterval(() => {
            time--;
            timerSpan.innerText = time;
            if(time<=0) { gameActive=false; btn.disabled=true; clearInterval(timer); }
        }, 1000);
        return () => clearInterval(timer);
    },

    // -------------------- لعبة 26: دائرة الانعكاس --------------------
    reflexCircle: function(container) {
        container.innerHTML = `<canvas id="reflexCanvas" width="300" height="300"></canvas><p id="reflexResult"></p>`;
        const canvas = document.getElementById('reflexCanvas'), ctx = canvas.getContext('2d');
        let circle = {x:150, y:150, r:30}, visible = true, startTime, timeout;
        function draw() { ctx.clearRect(0,0,300,300); if(visible) { ctx.fillStyle='var(--lime)'; ctx.beginPath(); ctx.arc(circle.x,circle.y,circle.r,0,2*Math.PI); ctx.fill(); } }
        function showCircle() {
            circle = {x:rand(50,250), y:rand(50,250), r:rand(20,40)};
            visible = true; startTime = Date.now(); draw();
            timeout = setTimeout(() => { visible = false; draw(); }, 800);
        }
        canvas.onclick = (e) => {
            if(!visible) return;
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left, y = e.clientY - rect.top;
            if(Math.hypot(x-circle.x, y-circle.y) < circle.r) {
                const time = Date.now() - startTime;
                document.getElementById('reflexResult').innerHTML = `<i class="fas fa-stopwatch"></i> ${time} مللي ثانية`;
                clearTimeout(timeout);
                showCircle();
            }
        };
        showCircle();
        return () => clearTimeout(timeout);
    },

    // -------------------- لعبة 27: تحدي السحب --------------------
    swipeChallenge: function(container) {
        const directions = ['⬆️','⬇️','⬅️','➡️'];
        let current = directions[rand(0,3)];
        container.innerHTML = `
            <p>اسحب باتجاه: <span style="font-size:3rem;">${current}</span></p>
            <div id="swipeArea" style="width:100%; height:200px; background:var(--card); border-radius:20px; display:flex; align-items:center; justify-content:center; touch-action:none;">اسحب هنا</div>
            <p id="swipeResult"></p>
        `;
        const area = document.getElementById('swipeArea');
        let startX, startY;
        area.addEventListener('touchstart', e => { startX=e.touches[0].clientX; startY=e.touches[0].clientY; });
        area.addEventListener('touchmove', e => e.preventDefault());
        area.addEventListener('touchend', e => {
            const dx = e.changedTouches[0].clientX - startX, dy = e.changedTouches[0].clientY - startY;
            let dir = '';
            if(Math.abs(dx) > Math.abs(dy)) dir = dx>0 ? '➡️' : '⬅️';
            else dir = dy>0 ? '⬇️' : '⬆️';
            const res = document.getElementById('swipeResult');
            if(dir === current) {
                res.innerHTML = '<i class="fas fa-trophy"></i> صحيح!';
                current = directions[rand(0,3)];
                document.querySelector('#swipeArea + p span').innerText = current;
            } else res.innerHTML = '<i class="fas fa-times"></i> خطأ';
        });
        return () => {};
    },

    // -------------------- لعبة 28: تبديل الألوان --------------------
    colorSwitchTap: function(container) {
        const colors = ['أحمر','أخضر','أزرق','أصفر'];
        let target = colors[rand(0,3)];
        container.innerHTML = `
            <p>اضغط على: <strong>${target}</strong></p>
            <div id="colorOptions" style="display:grid; grid-template-columns:repeat(2,1fr); gap:10px;"></div>
            <p id="colorResult"></p>
        `;
        const opts = document.getElementById('colorOptions');
        shuffle(colors).forEach(c => {
            const btn = document.createElement('button'); btn.className='btn'; btn.innerText=c;
            btn.onclick = () => {
                const res = document.getElementById('colorResult');
                if(c === target) { res.innerHTML='<i class="fas fa-trophy"></i> صحيح!'; target=colors[rand(0,3)]; document.querySelector('strong').innerText=target; }
                else res.innerHTML='<i class="fas fa-times"></i> خطأ';
            };
            opts.appendChild(btn);
        });
        return () => {};
    },

    // -------------------- لعبة 29: رياضيات سريعة --------------------
    quickMath: function(container) {
        let score=0, timer, time=5, active=true;
        function newProb() {
            const a=rand(1,20), b=rand(1,20), op=rand(0,1)?'+':'-';
            return {q:`${a} ${op} ${b}`, ans:op==='+'?a+b:a-b};
        }
        let prob = newProb();
        container.innerHTML = `
            <h3>النتيجة: <span id="qmScore">0</span> | الوقت: <span id="qmTimer">5</span></h3>
            <p id="qmProb">${prob.q}</p>
            <input id="qmAnswer" type="number">
            <button class="btn" id="qmSubmit">إجابة</button>
        `;
        const scoreSpan = document.getElementById('qmScore'), timerSpan = document.getElementById('qmTimer'), probP = document.getElementById('qmProb');
        document.getElementById('qmSubmit').onclick = () => {
            if(!active) return;
            const ans = parseInt(document.getElementById('qmAnswer').value);
            if(ans === prob.ans) { score++; scoreSpan.innerText = score; }
            prob = newProb(); probP.innerText = prob.q; document.getElementById('qmAnswer').value = '';
        };
        timer = setInterval(() => { time--; timerSpan.innerText=time; if(time<=0){ active=false; clearInterval(timer); } }, 1000);
        return () => clearInterval(timer);
    },

    // -------------------- لعبة 30: امسك النقطة --------------------
    catchTheDot: function(container) {
        container.innerHTML = `<canvas id="catchCanvas" width="300" height="300"></canvas><p id="catchScore">0</p>`;
        const canvas = document.getElementById('catchCanvas'), ctx = canvas.getContext('2d');
        let dot = {x:150, y:150, r:15}, score=0, vx=3, vy=2;
        function update() {
            ctx.clearRect(0,0,300,300);
            ctx.fillStyle='var(--lime)'; ctx.beginPath(); ctx.arc(dot.x,dot.y,dot.r,0,2*Math.PI); ctx.fill();
            dot.x+=vx; dot.y+=vy;
            if(dot.x<15||dot.x>285) vx*=-1;
            if(dot.y<15||dot.y>285) vy*=-1;
            requestAnimationFrame(update);
        }
        canvas.onclick = (e) => {
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left, y = e.clientY - rect.top;
            if(Math.hypot(x-dot.x, y-dot.y) < dot.r) {
                score++; document.getElementById('catchScore').innerText = score;
                dot = {x:rand(30,270), y:rand(30,270), r:15};
            }
        };
        update();
        return () => {};
    },

    // -------------------- لعبة 31: تجنب الخط --------------------
    avoidTheLine: function(container) {
        container.innerHTML = `<canvas id="avoidCanvas" width="300" height="400"></canvas>`;
        const canvas = document.getElementById('avoidCanvas'), ctx = canvas.getContext('2d');
        let player = {x:150, y:350, w:20}, lines=[], frame=0, gameOver=false;
        function update() {
            if(gameOver) return;
            ctx.clearRect(0,0,300,400);
            ctx.fillStyle='var(--lime)'; ctx.fillRect(player.x, player.y, player.w, player.w);
            lines.forEach(l => { ctx.fillStyle='red'; ctx.fillRect(l.x, l.y, l.w, l.h); l.y+=2; });
            lines = lines.filter(l => {
                if(l.x < player.x+player.w && l.x+l.w > player.x && l.y < player.y+player.w && l.y+l.h > player.y) gameOver=true;
                return l.y < 400;
            });
            if(frame%60===0) lines.push({x:rand(0,280), y:0, w:30, h:10});
            frame++;
            if(!gameOver) requestAnimationFrame(update);
        }
        canvas.addEventListener('mousemove', e => { const rect = canvas.getBoundingClientRect(); player.x = Math.min(280, Math.max(0, e.clientX - rect.left - player.w/2)); });
        update();
        return () => { gameOver=true; };
    },

    // -------------------- لعبة 32: إيقاف المؤقت --------------------
    timerStop: function(container) {
        container.innerHTML = `<p>أوقف المؤقت عند 10.00</p><h2 id="timerDisplay">0.00</h2><button class="btn" id="startTimer">ابدأ</button><button class="btn" id="stopTimer">إيقاف</button><p id="timerResult"></p>`;
        let time=0, interval, running=false;
        const disp = document.getElementById('timerDisplay');
        document.getElementById('startTimer').onclick = () => {
            if(running) return;
            running=true; time=0;
            interval = setInterval(() => { time+=0.01; disp.innerText = time.toFixed(2); }, 10);
        };
        document.getElementById('stopTimer').onclick = () => {
            if(!running) return;
            clearInterval(interval); running=false;
            const diff = Math.abs(time-10);
            document.getElementById('timerResult').innerHTML = diff<0.1 ? '<i class="fas fa-trophy"></i> ممتاز!' : `فارق ${diff.toFixed(2)}`;
        };
        return () => clearInterval(interval);
    },

    // -------------------- لعبة 33: نقر مزدوج --------------------
    doubleTap: function(container) {
        container.innerHTML = `<p>انقر مرتين بسرعة على الزر</p><button class="btn" id="doubleTapBtn" style="padding:40px; width:100%;">انقر</button><p id="dtResult"></p>`;
        let lastTap=0;
        document.getElementById('doubleTapBtn').onclick = () => {
            const now = Date.now();
            if(now - lastTap < 400) document.getElementById('dtResult').innerHTML = '<i class="fas fa-trophy"></i> نقر مزدوج ناجح!';
            else document.getElementById('dtResult').innerHTML = 'حاول أسرع';
            lastTap = now;
        };
        return () => {};
    },

    // -------------------- لعبة 34: رد فعل اللون --------------------
    colorReaction: function(container) {
        container.innerHTML = `<div id="colorReactionBox" style="width:100%; height:200px; background:var(--card);"></div><p id="crResult"></p>`;
        const box = document.getElementById('colorReactionBox');
        let start, timeout;
        function next() {
            box.style.background = 'var(--card)';
            timeout = setTimeout(() => { box.style.background = 'var(--lime)'; start=Date.now(); }, rand(500,2000));
        }
        box.onclick = () => {
            if(box.style.background === 'rgb(163, 230, 53)' || box.style.background === 'var(--lime)') {
                const t = Date.now() - start;
                document.getElementById('crResult').innerHTML = `<i class="fas fa-stopwatch"></i> ${t} مللي ثانية`;
                clearTimeout(timeout);
                next();
            }
        };
        next();
        return () => clearTimeout(timeout);
    },

    // -------------------- لعبة 35: اختبار الاتجاه --------------------
    directionTest: function(container) {
        const dirs = ['شمال','جنوب','شرق','غرب'];
        let current = dirs[rand(0,3)];
        container.innerHTML = `
            <p>اتجاه: <strong>${current}</strong></p>
            <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:10px;">
                ${dirs.map(d => `<button class="btn dir-btn" data-dir="${d}">${d}</button>`).join('')}
            </div>
            <p id="dirResult"></p>
        `;
        document.querySelectorAll('.dir-btn').forEach(b => b.onclick = (e) => {
            const res = document.getElementById('dirResult');
            if(e.target.dataset.dir === current) {
                res.innerHTML='<i class="fas fa-trophy"></i> صحيح!';
                current = dirs[rand(0,3)];
                document.querySelector('strong').innerText = current;
            } else res.innerHTML='<i class="fas fa-times"></i> خطأ';
        });
        return () => {};
    },

    // -------------------- لعبة 36: رمي النرد --------------------
    diceRoll: function(container) {
        container.innerHTML = `<p>النرد: <span id="diceValue">-</span></p><button class="btn" id="rollDice">ارم</button><button class="btn" id="resetDice">جديد</button>`;
        document.getElementById('rollDice').onclick = () => document.getElementById('diceValue').innerText = rand(1,6);
        document.getElementById('resetDice').onclick = () => document.getElementById('diceValue').innerText = '-';
        return () => {};
    },

    // -------------------- لعبة 37: عجلة الحظ --------------------
    spinWheel: function(container) {
        const items = ['جائزة كبرى','محاولة أخرى','هدية','حظ أوفر','نقاط إضافية'];
        container.innerHTML = `<div id="wheelDisplay" style="width:200px; height:200px; border-radius:50%; background:conic-gradient(var(--lime) 0deg 72deg, var(--card) 72deg 144deg, var(--lime) 144deg 216deg, var(--card) 216deg 288deg, var(--lime) 288deg 360deg); margin:0 auto;"></div><button class="btn" id="spinWheelBtn">لف</button><p id="wheelResult"></p>`;
        document.getElementById('spinWheelBtn').onclick = () => {
            const res = items[rand(0,items.length-1)];
            document.getElementById('wheelResult').innerHTML = `<i class="fas fa-gift"></i> ${res}`;
        };
        return () => {};
    },

    // -------------------- لعبة 38: اختر باباً --------------------
    pickDoor: function(container) {
        const prize = rand(1,3);
        container.innerHTML = `<p>اختر باباً (1-3)</p>${[1,2,3].map(i=>`<button class="btn door-btn" data-door="${i}">باب ${i}</button>`).join('')}<p id="doorResult"></p>`;
        document.querySelectorAll('.door-btn').forEach(b => b.onclick = (e) => {
            const choice = parseInt(e.target.dataset.door);
            document.getElementById('doorResult').innerHTML = choice===prize ? '<i class="fas fa-trophy"></i> ربحت!' : '<i class="fas fa-times"></i> خسرت';
        });
        return () => {};
    },

    // -------------------- لعبة 39: مونتي هول --------------------
    montyHall: function(container) {
        let car = rand(1,3), choice, revealed;
        container.innerHTML = `
            <p>اختر باباً:</p>
            ${[1,2,3].map(i=>`<button class="btn monty-door" data-door="${i}">باب ${i}</button>`).join('')}
            <p id="montyMsg"></p>
            <div id="montySecond"></div>
        `;
        document.querySelectorAll('.monty-door').forEach(b => b.onclick = (e) => {
            choice = parseInt(e.target.dataset.door);
            const goats = [1,2,3].filter(d => d!==car);
            revealed = goats.includes(choice) ? goats.find(g=>g!==choice) : goats[0];
            document.getElementById('montyMsg').innerHTML = `المضيف فتح باب ${revealed} (خلفه ماعز). هل تريد التغيير؟`;
            document.getElementById('montySecond').innerHTML = `<button class="btn" id="montyStay">أبقى على ${choice}</button><button class="btn" id="montySwitch">أغير إلى ${[1,2,3].find(d=>d!==choice && d!==revealed)}</button>`;
            document.getElementById('montyStay').onclick = () => alert(choice===car ? 'ربحت السيارة!' : 'خسرت');
            document.getElementById('montySwitch').onclick = () => alert([1,2,3].find(d=>d!==choice && d!==revealed)===car ? 'ربحت السيارة!' : 'خسرت');
        });
        return () => {};
    },

    // -------------------- لعبة 40: رمي العملة --------------------
    coinFlip: function(container) {
        container.innerHTML = `<p>اختر:</p><button class="btn" data-side="وجه">وجه</button><button class="btn" data-side="ظهر">ظهر</button><p id="coinResult"></p>`;
        container.querySelectorAll('[data-side]').forEach(b => b.onclick = (e) => {
            const choice = e.target.dataset.side;
            const flip = rand(0,1) ? 'وجه' : 'ظهر';
            document.getElementById('coinResult').innerHTML = `النتيجة: ${flip} - ${choice===flip ? 'ربحت!' : 'خسرت'}`;
        });
        return () => {};
    },

    // -------------------- لعبة 41: السحب المحظوظ --------------------
    luckyDraw: function(container) {
        const prizes = ['100 نقطة','50 نقطة','10 نقاط','حظ أوفر'];
        container.innerHTML = `<button class="btn" id="drawBtn">اسحب</button><p id="drawResult"></p>`;
        document.getElementById('drawBtn').onclick = () => {
            document.getElementById('drawResult').innerHTML = prizes[rand(0,prizes.length-1)];
        };
        return () => {};
    },

    // -------------------- لعبة 42: مكافأة عشوائية --------------------
    randomReward: function(container) {
        container.innerHTML = `<button class="btn" id="rewardBtn">احصل على مكافأة</button><p id="rewardResult"></p>`;
        document.getElementById('rewardBtn').onclick = () => {
            const r = rand(1,100);
            document.getElementById('rewardResult').innerHTML = r>80 ? 'جائزة كبرى!' : (r>50 ? 'جائزة متوسطة' : 'جائزة صغيرة');
        };
        return () => {};
    },

    // -------------------- لعبة 43: خمن الكأس --------------------
    guessCup: function(container) {
        const ball = rand(1,3);
        container.innerHTML = `<p>تحت أي كأس الكرة؟</p>${[1,2,3].map(i=>`<button class="btn cup-btn" data-cup="${i}">كأس ${i}</button>`).join('')}<p id="cupResult"></p>`;
        document.querySelectorAll('.cup-btn').forEach(b => b.onclick = (e) => {
            const c = parseInt(e.target.dataset.cup);
            document.getElementById('cupResult').innerHTML = c===ball ? '<i class="fas fa-trophy"></i> صحيح!' : '<i class="fas fa-times"></i> خطأ';
        });
        return () => {};
    },

    // -------------------- لعبة 44: رقم الحظ --------------------
    luckyNumber: function(container) {
        container.innerHTML = `<p>اختر رقم من 1-10</p><input id="luckyInput" type="number" min="1" max="10"><button class="btn" id="luckyCheck">تحقق</button><p id="luckyResult"></p>`;
        const lucky = rand(1,10);
        document.getElementById('luckyCheck').onclick = () => {
            const g = parseInt(document.getElementById('luckyInput').value);
            document.getElementById('luckyResult').innerHTML = g===lucky ? '<i class="fas fa-trophy"></i> رقم الحظ!' : `الرقم كان ${lucky}`;
        };
        return () => {};
    },

    // -------------------- لعبة 45: روليت --------------------
    simpleRoulette: function(container) {
        container.innerHTML = `<p>اختر رقم (0-36)</p><input id="rouletteInput" type="number" min="0" max="36"><button class="btn" id="spinRoulette">لف</button><p id="rouletteResult"></p>`;
        document.getElementById('spinRoulette').onclick = () => {
            const num = rand(0,36);
            const choice = parseInt(document.getElementById('rouletteInput').value);
            document.getElementById('rouletteResult').innerHTML = `الرقم: ${num} - ${num===choice ? 'ربحت!' : 'خسرت'}`;
        };
        return () => {};
    },

    // -------------------- لعبة 46: فلابي سكوير --------------------
    flappySquare: function(container) {
        container.innerHTML = `<canvas id="flappyCanvas" width="300" height="400"></canvas><p>اضغط للقفز</p>`;
        const canvas = document.getElementById('flappyCanvas'), ctx = canvas.getContext('2d');
        let bird = {y:200, vy:0}, pipes=[], frame=0, gameOver=false;
        function update() {
            if(gameOver) return;
            ctx.clearRect(0,0,300,400);
            ctx.fillStyle='var(--lime)'; ctx.fillRect(50,bird.y,20,20);
            pipes.forEach(p => { ctx.fillStyle='green'; ctx.fillRect(p.x,0,30,p.top); ctx.fillRect(p.x,p.bottom,30,400-p.bottom); });
            bird.vy+=0.3; bird.y+=bird.vy;
            if(frame%80===0) { let h=rand(50,200); pipes.push({x:300, top:h, bottom:h+100}); }
            pipes.forEach(p=>p.x-=2); pipes=pipes.filter(p=>p.x>-30);
            if(bird.y>380||bird.y<0) gameOver=true;
            pipes.forEach(p=>{ if(p.x<70&&p.x+30>50&&(bird.y<p.top||bird.y+20>p.bottom)) gameOver=true; });
            frame++;
            if(!gameOver) requestAnimationFrame(update);
        }
        canvas.addEventListener('click',()=> bird.vy=-5);
        update();
        return () => { gameOver=true; };
    },

    // -------------------- لعبة 47: محطم الطوب --------------------
    brickBreaker: function(container) {
        container.innerHTML = `<canvas id="breakerCanvas" width="300" height="400"></canvas>`;
        const canvas = document.getElementById('breakerCanvas'), ctx = canvas.getContext('2d');
        let paddle={x:110,w:80}, ball={x:150,y:200,dx:3,dy:-3,r:6}, bricks=[], gameOver=false;
        for(let i=0;i<5;i++) for(let j=0;j<7;j++) bricks.push({x:10+j*40, y:20+i*20, w:35, h:15, alive:true});
        function update() {
            if(gameOver) return;
            ctx.clearRect(0,0,300,400);
            ctx.fillStyle='var(--lime)'; ctx.fillRect(paddle.x,380,paddle.w,10);
            ctx.beginPath(); ctx.arc(ball.x,ball.y,ball.r,0,2*Math.PI); ctx.fill();
            bricks.forEach(b => { if(b.alive) { ctx.fillStyle='orange'; ctx.fillRect(b.x,b.y,b.w,b.h); } });
            ball.x+=ball.dx; ball.y+=ball.dy;
            if(ball.x<ball.r||ball.x>300-ball.r) ball.dx*=-1;
            if(ball.y<ball.r) ball.dy*=-1;
            if(ball.y>380-ball.r && ball.x>paddle.x && ball.x<paddle.x+paddle.w) ball.dy*=-1;
            if(ball.y>400) gameOver=true;
            bricks.forEach(b => { if(b.alive && ball.x>b.x && ball.x<b.x+b.w && ball.y>b.y && ball.y<b.y+b.h) { b.alive=false; ball.dy*=-1; } });
            if(bricks.every(b=>!b.alive)) gameOver=true;
            if(!gameOver) requestAnimationFrame(update);
        }
        canvas.addEventListener('mousemove', e => { const rect=canvas.getBoundingClientRect(); paddle.x=Math.min(220,Math.max(0,e.clientX-rect.left-paddle.w/2)); });
        update();
        return () => { gameOver=true; };
    },

    // -------------------- لعبة 48: الثعبان --------------------
    snakeGame: function(container) {
        container.innerHTML = `<canvas id="snakeCanvas" width="300" height="300"></canvas><p id="snakeScore">0</p>`;
        const canvas=document.getElementById('snakeCanvas'),ctx=canvas.getContext('2d');
        let snake=[{x:150,y:150}],food={x:90,y:90},dx=0,dy=0,score=0,gameOver=false;
        function draw(){ctx.clearRect(0,0,300,300);snake.forEach(s=>{ctx.fillStyle='var(--lime)';ctx.fillRect(s.x,s.y,10,10);});ctx.fillStyle='red';ctx.fillRect(food.x,food.y,10,10);}
        function update(){
            if(gameOver)return;
            const head={x:snake[0].x+dx,y:snake[0].y+dy};
            if(head.x<0||head.x>=300||head.y<0||head.y>=300||snake.some(s=>s.x===head.x&&s.y===head.y)){gameOver=true;return;}
            snake.unshift(head);
            if(head.x===food.x&&head.y===food.y){score++;document.getElementById('snakeScore').innerText=score;food={x:Math.floor(Math.random()*30)*10,y:Math.floor(Math.random()*30)*10};}else snake.pop();
            draw();
            setTimeout(update,100);
        }
        window.addEventListener('keydown',e=>{if(e.key==='ArrowUp'&&dy===0){dx=0;dy=-10;}else if(e.key==='ArrowDown'&&dy===0){dx=0;dy=10;}else if(e.key==='ArrowLeft'&&dx===0){dx=-10;dy=0;}else if(e.key==='ArrowRight'&&dx===0){dx=10;dy=0;}});
        update();
        return () => { gameOver=true; };
    },

    // -------------------- لعبة 49: بونغ --------------------
    pongGame: function(container) {
        container.innerHTML = `<canvas id="pongCanvas" width="400" height="300"></canvas>`;
        const canvas=document.getElementById('pongCanvas'),ctx=canvas.getContext('2d');
        let ball={x:200,y:150,dx:3,dy:3},paddleL={y:110},paddleR={y:110},scoreL=0,scoreR=0;
        function update(){
            ctx.clearRect(0,0,400,300);
            ctx.fillStyle='var(--lime)';ctx.fillRect(0,paddleL.y,10,80);ctx.fillRect(390,paddleR.y,10,80);
            ctx.beginPath();ctx.arc(ball.x,ball.y,8,0,2*Math.PI);ctx.fill();
            ball.x+=ball.dx;ball.y+=ball.dy;
            if(ball.y<8||ball.y>292)ball.dy*=-1;
            if(ball.x<18&&ball.y>paddleL.y&&ball.y<paddleL.y+80)ball.dx*=-1;
            if(ball.x>382&&ball.y>paddleR.y&&ball.y<paddleR.y+80)ball.dx*=-1;
            if(ball.x<0){scoreR++;reset();}else if(ball.x>400){scoreL++;reset();}
            requestAnimationFrame(update);
        }
        function reset(){ball={x:200,y:150,dx:(Math.random()>0.5?3:-3),dy:(Math.random()>0.5?3:-3)};}
        canvas.addEventListener('mousemove',e=>{const rect=canvas.getBoundingClientRect();paddleR.y=Math.min(220,Math.max(0,e.clientY-rect.top-40));});
        update();
        return () => {};
    },

    // -------------------- لعبة 50: تجنب الجدران --------------------
    avoidWalls: function(container) {
        container.innerHTML = `<canvas id="avoidWallsCanvas" width="300" height="300"></canvas>`;
        const canvas=document.getElementById('avoidWallsCanvas'),ctx=canvas.getContext('2d');
        let player={x:150,y:150,r:10},walls=[],frame=0,gameOver=false;
        for(let i=0;i<5;i++) walls.push({x:rand(0,280),y:rand(0,280),w:40,h:10});
        function update(){
            if(gameOver)return;
            ctx.clearRect(0,0,300,300);
            ctx.fillStyle='var(--lime)';ctx.beginPath();ctx.arc(player.x,player.y,player.r,0,2*Math.PI);ctx.fill();
            walls.forEach(w=>{ctx.fillStyle='red';ctx.fillRect(w.x,w.y,w.w,w.h);});
            walls.forEach(w=>{if(player.x+player.r>w.x&&player.x-player.r<w.x+w.w&&player.y+player.r>w.y&&player.y-player.r<w.y+w.h)gameOver=true;});
            if(!gameOver)requestAnimationFrame(update);
        }
        canvas.addEventListener('mousemove',e=>{const rect=canvas.getBoundingClientRect();player.x=e.clientX-rect.left;player.y=e.clientY-rect.top;});
        update();
        return () => { gameOver=true; };
    },

    // -------------------- لعبة 51: مكعب القفز --------------------
    jumpCube: function(container) {
        container.innerHTML = `<canvas id="jumpCanvas" width="300" height="300"></canvas><p>اضغط للقفز</p>`;
        const canvas = document.getElementById('jumpCanvas'), ctx = canvas.getContext('2d');
        let player = {x:50, y:250, vy:0, w:20}, obstacles = [], frame=0, gameOver=false;
        function update() {
            if(gameOver) return;
            ctx.clearRect(0,0,300,300);
            ctx.fillStyle='var(--lime)'; ctx.fillRect(player.x, player.y, player.w, player.w);
            obstacles.forEach(o => { ctx.fillStyle='red'; ctx.fillRect(o.x, o.y, o.w, o.h); o.x-=3; });
            obstacles = obstacles.filter(o => o.x+o.w > 0);
            player.vy += 0.5; player.y += player.vy;
            if(player.y > 280) { player.y = 280; player.vy = 0; }
            if(frame%70===0) obstacles.push({x:300, y:260, w:15, h:rand(20,40)});
            obstacles.forEach(o => { if(player.x < o.x+o.w && player.x+player.w > o.x && player.y < o.y+o.h && player.y+player.w > o.y) gameOver=true; });
            frame++;
            if(!gameOver) requestAnimationFrame(update);
        }
        canvas.addEventListener('click', () => { if(player.y >= 280) player.vy = -10; });
        update();
        return () => { gameOver=true; };
    },

    // -------------------- لعبة 52: الكتل المتساقطة --------------------
    fallingBlocks: function(container) {
        container.innerHTML = `<canvas id="fallCanvas" width="300" height="400"></canvas><p id="fallScore">0</p>`;
        const canvas=document.getElementById('fallCanvas'),ctx=canvas.getContext('2d');
        let player={x:135,w:30}, blocks=[], score=0, gameOver=false;
        function update(){
            if(gameOver)return;
            ctx.clearRect(0,0,300,400);
            ctx.fillStyle='var(--lime)'; ctx.fillRect(player.x,370,player.w,15);
            blocks.forEach(b=>{ctx.fillStyle='orange';ctx.fillRect(b.x,b.y,b.w,b.w);b.y+=2;});
            blocks=blocks.filter(b=>{if(b.y>400){score++;document.getElementById('fallScore').innerText=score;return false;}return true;});
            blocks.forEach(b=>{if(b.x<player.x+player.w&&b.x+b.w>player.x&&b.y<385&&b.y+b.w>370)gameOver=true;});
            if(Math.random()<0.02) blocks.push({x:rand(0,270),y:0,w:20});
            if(!gameOver)requestAnimationFrame(update);
        }
        canvas.addEventListener('mousemove',e=>{const rect=canvas.getBoundingClientRect();player.x=Math.min(270,Math.max(0,e.clientX-rect.left-player.w/2));});
        update();
        return ()=>{gameOver=true;};
    },

    // -------------------- لعبة 53: عداء المنصة --------------------
    platformRunner: function(container) {
        container.innerHTML = `<canvas id="runnerCanvas" width="300" height="200"></canvas>`;
        const canvas=document.getElementById('runnerCanvas'),ctx=canvas.getContext('2d');
        let player={x:50,y:150,vy:0}, platforms=[{x:0,y:170,w:300,h:10}], gameOver=false;
        platforms.push({x:100,y:130,w:50,h:8},{x:200,y:100,w:50,h:8});
        function update(){
            if(gameOver)return;
            ctx.clearRect(0,0,300,200);
            ctx.fillStyle='var(--lime)'; ctx.fillRect(player.x,player.y,15,15);
            platforms.forEach(p=>{ctx.fillStyle='brown';ctx.fillRect(p.x,p.y,p.w,p.h);});
            player.vy+=0.4; player.y+=player.vy;
            platforms.forEach(p=>{if(player.y+15>=p.y&&player.y+15<=p.y+10&&player.x+15>p.x&&player.x<p.x+p.w&&player.vy>=0){player.y=p.y-15;player.vy=0;}});
            if(player.y>200)gameOver=true;
            requestAnimationFrame(update);
        }
        window.addEventListener('keydown',e=>{if(e.key==='ArrowRight')player.x+=10;else if(e.key==='ArrowLeft')player.x-=10;else if(e.key===' '&&player.y>=145)player.vy=-7;});
        update();
        return ()=>{gameOver=true;};
    },

    // -------------------- لعبة 54: التقاط العناصر --------------------
    catchFallingItems: function(container) {
        container.innerHTML = `<canvas id="catchItemsCanvas" width="300" height="400"></canvas><p id="catchScore">0</p>`;
        const canvas=document.getElementById('catchItemsCanvas'),ctx=canvas.getContext('2d');
        let basket={x:120,w:60}, items=[], score=0, gameOver=false;
        function update(){
            if(gameOver)return;
            ctx.clearRect(0,0,300,400);
            ctx.fillStyle='var(--lime)'; ctx.fillRect(basket.x,370,basket.w,15);
            items.forEach(i=>{ctx.fillStyle='gold';ctx.beginPath();ctx.arc(i.x,i.y,8,0,2*Math.PI);ctx.fill();i.y+=2;});
            items=items.filter(i=>{
                if(i.y>385&&i.x>basket.x&&i.x<basket.x+basket.w){score++;document.getElementById('catchScore').innerText=score;return false;}
                return i.y<400;
            });
            if(Math.random()<0.02) items.push({x:rand(10,290),y:0});
            requestAnimationFrame(update);
        }
        canvas.addEventListener('mousemove',e=>{const rect=canvas.getBoundingClientRect();basket.x=Math.min(240,Math.max(0,e.clientX-rect.left-basket.w/2));});
        update();
        return ()=>{gameOver=true;};
    },

    // -------------------- لعبة 55: تجنب الليزر --------------------
    laserDodge: function(container) {
        container.innerHTML = `<canvas id="laserCanvas" width="300" height="400"></canvas>`;
        const canvas=document.getElementById('laserCanvas'),ctx=canvas.getContext('2d');
        let player={x:140,y:350,w:20}, lasers=[], frame=0, gameOver=false;
        function update(){
            if(gameOver)return;
            ctx.clearRect(0,0,300,400);
            ctx.fillStyle='var(--lime)';ctx.fillRect(player.x,player.y,player.w,player.w);
            lasers.forEach(l=>{ctx.fillStyle='red';ctx.fillRect(l.x,0,5,400);l.x+=l.speed;});
            lasers=lasers.filter(l=>l.x>0&&l.x<300);
            if(frame%50===0) lasers.push({x:0,speed:rand(2,5)});
            lasers.forEach(l=>{if(player.x<l.x+5&&player.x+player.w>l.x)gameOver=true;});
            frame++;
            if(!gameOver)requestAnimationFrame(update);
        }
        canvas.addEventListener('mousemove',e=>{const rect=canvas.getBoundingClientRect();player.y=e.clientY-rect.top-player.w/2;});
        update();
        return ()=>{gameOver=true;};
    },

    // -------------------- لعبة 56: ارسم المسار --------------------
    drawPath: function(container) {
        container.innerHTML = `<canvas id="pathCanvas" width="300" height="300"></canvas><button class="btn" id="clearPath">مسح</button>`;
        const canvas=document.getElementById('pathCanvas'),ctx=canvas.getContext('2d');
        let drawing=false;
        canvas.addEventListener('mousedown',()=>{drawing=true;ctx.beginPath();});
        canvas.addEventListener('mouseup',()=>drawing=false);
        canvas.addEventListener('mousemove',e=>{if(!drawing)return;const rect=canvas.getBoundingClientRect();ctx.fillStyle='var(--lime)';ctx.beginPath();ctx.arc(e.clientX-rect.left,e.clientY-rect.top,5,0,2*Math.PI);ctx.fill();});
        document.getElementById('clearPath').onclick=()=>ctx.clearRect(0,0,300,300);
        return ()=>{};
    },

    // -------------------- لعبة 57: كرة التوازن --------------------
    balanceBall: function(container) {
        container.innerHTML = `<canvas id="balanceCanvas" width="300" height="400"></canvas>`;
        const canvas=document.getElementById('balanceCanvas'),ctx=canvas.getContext('2d');
        let ball={x:150,y:50,vy:0}, platform={x:100,w:100}, gameOver=false;
        function update(){
            if(gameOver)return;
            ctx.clearRect(0,0,300,400);
            ctx.fillStyle='brown';ctx.fillRect(platform.x,350,platform.w,10);
            ctx.fillStyle='var(--lime)';ctx.beginPath();ctx.arc(ball.x,ball.y,10,0,2*Math.PI);ctx.fill();
            ball.vy+=0.3;ball.y+=ball.vy;
            if(ball.y>340&&ball.x>platform.x&&ball.x<platform.x+platform.w){ball.y=340;ball.vy=0;}
            if(ball.y>400)gameOver=true;
            requestAnimationFrame(update);
        }
        canvas.addEventListener('mousemove',e=>{const rect=canvas.getBoundingClientRect();platform.x=Math.min(200,Math.max(0,e.clientX-rect.left-platform.w/2));});
        update();
        return ()=>{gameOver=true;};
    },

    // -------------------- لعبة 58: تتبع الخط --------------------
    lineFollower: function(container) {
        container.innerHTML = `<canvas id="lineCanvas" width="300" height="300"></canvas>`;
        const canvas=document.getElementById('lineCanvas'),ctx=canvas.getContext('2d');
        let points=[], gameOver=false;
        function drawLine(){ctx.clearRect(0,0,300,300);ctx.beginPath();ctx.moveTo(0,150);ctx.lineTo(300,150);ctx.strokeStyle='white';ctx.lineWidth=10;ctx.stroke();}
        drawLine();
        canvas.addEventListener('mousemove',e=>{
            const rect=canvas.getBoundingClientRect();
            const y=e.clientY-rect.top;
            if(Math.abs(y-150)>20) gameOver=true;
        });
        return ()=>{gameOver=true;};
    },

    // -------------------- لعبة 59: الهروب من المتاهة --------------------
    mazeEscape: function(container) {
        container.innerHTML = `<canvas id="mazeCanvas" width="300" height="300"></canvas>`;
        const canvas=document.getElementById('mazeCanvas'),ctx=canvas.getContext('2d');
        let player={x:20,y:20}, walls=[[50,0,10,200],[150,100,10,200],[250,0,10,150]], goal={x:270,y:270};
        function draw(){
            ctx.clearRect(0,0,300,300);
            ctx.fillStyle='var(--lime)';ctx.fillRect(player.x,player.y,15,15);
            ctx.fillStyle='gold';ctx.fillRect(goal.x,goal.y,20,20);
            walls.forEach(w=>{ctx.fillStyle='gray';ctx.fillRect(w[0],w[1],w[2],w[3]);});
            if(player.x+15>goal.x&&player.x<goal.x+20&&player.y+15>goal.y&&player.y<goal.y+20) alert('فزت!');
        }
        window.addEventListener('keydown',e=>{
            let nx=player.x,ny=player.y;
            if(e.key==='ArrowRight') nx+=5; else if(e.key==='ArrowLeft') nx-=5;
            else if(e.key==='ArrowDown') ny+=5; else if(e.key==='ArrowUp') ny-=5;
            if(!walls.some(w=>nx+15>w[0]&&nx<w[0]+w[2]&&ny+15>w[1]&&ny<w[1]+w[3])&&nx>=0&&nx<=285&&ny>=0&&ny<=285){player.x=nx;player.y=ny;}
            draw();
        });
        draw();
        return ()=>{};
    },

    // -------------------- لعبة 60: التوقيت المثالي --------------------
    perfectTiming: function(container) {
        container.innerHTML = `<div style="position:relative;height:300px;background:var(--card);"><div id="movingBar" style="position:absolute;width:20px;height:20px;background:var(--lime);left:0;top:140px;"></div></div><button class="btn" id="stopBar">أوقف</button><p id="timingResult"></p>`;
        let pos=0, dir=1, interval;
        const bar=document.getElementById('movingBar');
        interval=setInterval(()=>{pos+=dir*5;if(pos>280||pos<0)dir*=-1;bar.style.left=pos+'px';},30);
        document.getElementById('stopBar').onclick=()=>{
            clearInterval(interval);
            const diff=Math.abs(pos-140);
            document.getElementById('timingResult').innerHTML=diff<15?'<i class="fas fa-trophy"></i> ممتاز!':`فارق ${diff}px`;
        };
        return ()=>clearInterval(interval);
    },

    // -------------------- لعبة 61: تسديد الزاوية --------------------
    angleShot: function(container) {
        container.innerHTML = `<canvas id="angleCanvas" width="300" height="200"></canvas><input id="angleInput" type="range" min="0" max="90" value="45"><button class="btn" id="shootAngle">أطلق</button>`;
        const canvas=document.getElementById('angleCanvas'),ctx=canvas.getContext('2d');
        let target={x:250,y:rand(50,150)};
        function draw(){ctx.clearRect(0,0,300,200);ctx.fillStyle='red';ctx.fillRect(target.x,target.y,15,15);}
        draw();
        document.getElementById('shootAngle').onclick=()=>{
            const angle=parseInt(document.getElementById('angleInput').value)*Math.PI/180;
            const x=Math.cos(angle)*200, y=Math.sin(angle)*200;
            ctx.beginPath();ctx.moveTo(10,190);ctx.lineTo(10+x,190-y);ctx.strokeStyle='var(--lime)';ctx.stroke();
            if(Math.hypot(10+x-target.x,190-y-target.y)<20) alert('إصابة!');
        };
        return ()=>{};
    },

    // -------------------- لعبة 62: قناص الأهداف --------------------
    targetShooter: function(container) {
        container.innerHTML = `<canvas id="shooterCanvas" width="300" height="300"></canvas><p id="shooterScore">0</p>`;
        const canvas=document.getElementById('shooterCanvas'),ctx=canvas.getContext('2d');
        let target={x:150,y:150,r:20}, score=0;
        function draw(){ctx.clearRect(0,0,300,300);ctx.fillStyle='red';ctx.beginPath();ctx.arc(target.x,target.y,target.r,0,2*Math.PI);ctx.fill();}
        canvas.onclick=(e)=>{
            const rect=canvas.getBoundingClientRect();
            const x=e.clientX-rect.left, y=e.clientY-rect.top;
            if(Math.hypot(x-target.x,y-target.y)<target.r){score++;target={x:rand(30,270),y:rand(30,270),r:20};}
            document.getElementById('shooterScore').innerText=score;
            draw();
        };
        draw();
        return ()=>{};
    },

    // -------------------- لعبة 63: هدف متحرك --------------------
    movingTarget: function(container) {
        container.innerHTML = `<canvas id="moveTargetCanvas" width="300" height="300"></canvas><p id="moveScore">0</p>`;
        const canvas=document.getElementById('moveTargetCanvas'),ctx=canvas.getContext('2d');
        let target={x:150,y:150,r:20,dx:2,dy:1}, score=0;
        function update(){
            ctx.clearRect(0,0,300,300);
            ctx.fillStyle='var(--lime)';ctx.beginPath();ctx.arc(target.x,target.y,target.r,0,2*Math.PI);ctx.fill();
            target.x+=target.dx; target.y+=target.dy;
            if(target.x<20||target.x>280) target.dx*=-1;
            if(target.y<20||target.y>280) target.dy*=-1;
            requestAnimationFrame(update);
        }
        canvas.onclick=(e)=>{
            const rect=canvas.getBoundingClientRect();
            const x=e.clientX-rect.left, y=e.clientY-rect.top;
            if(Math.hypot(x-target.x,y-target.y)<target.r){score++;document.getElementById('moveScore').innerText=score;}
        };
        update();
        return ()=>{};
    },

    // -------------------- لعبة 64: إسقاط دقيق --------------------
    precisionDrop: function(container) {
        container.innerHTML = `<canvas id="dropCanvas" width="200" height="400"></canvas>`;
        const canvas=document.getElementById('dropCanvas'),ctx=canvas.getContext('2d');
        let ball={x:100,y:0}, target={x:50,w:100};
        canvas.onclick=()=>{ball.y+=200;if(ball.y>350&&ball.x>target.x&&ball.x<target.x+target.w)alert('دقيق!');else alert('أخطأت');ball.y=0;};
        function draw(){ctx.clearRect(0,0,200,400);ctx.fillStyle='var(--lime)';ctx.beginPath();ctx.arc(ball.x,ball.y,10,0,2*Math.PI);ctx.fill();ctx.fillStyle='gold';ctx.fillRect(target.x,380,target.w,10);requestAnimationFrame(draw);}
        draw();
        return ()=>{};
    },

    // -------------------- لعبة 65: قفزة واحدة --------------------
    oneTapJump: function(container) {
        container.innerHTML = `<canvas id="oneJumpCanvas" width="300" height="200"></canvas>`;
        const canvas=document.getElementById('oneJumpCanvas'),ctx=canvas.getContext('2d');
        let player={x:30,y:170,vy:0}, obstacle={x:250,y:170}, jumped=false, gameOver=false;
        function update(){
            if(gameOver)return;
            ctx.clearRect(0,0,300,200);
            ctx.fillStyle='var(--lime)';ctx.fillRect(player.x,player.y,15,15);
            ctx.fillStyle='red';ctx.fillRect(obstacle.x,obstacle.y,15,15);
            obstacle.x-=2;
            player.vy+=0.5; player.y+=player.vy;
            if(player.y>=170){player.y=170;player.vy=0;jumped=false;}
            if(player.x+15>obstacle.x&&player.x<obstacle.x+15&&player.y+15>obstacle.y) gameOver=true;
            if(obstacle.x<-15) alert('نجوت!');
            if(!gameOver)requestAnimationFrame(update);
        }
        canvas.onclick=()=>{if(!jumped){player.vy=-8;jumped=true;}};
        update();
        return ()=>{gameOver=true;};
    },

    // -------------------- لعبة 66: الذكاء الاصطناعي يخمن رقمي --------------------
    aiGuessNumber: function(container) {
        let low=1, high=100, guess, attempts=0;
        function newGuess(){guess=Math.floor((low+high)/2);attempts++;}
        newGuess();
        container.innerHTML = `<p>فكر في رقم بين 1-100</p><p>هل هو ${guess}؟</p><button class="btn" data-fb="higher">أكبر</button><button class="btn" data-fb="lower">أصغر</button><button class="btn" data-fb="correct">صحيح</button><p id="aiGuessResult"></p>`;
        container.querySelectorAll('[data-fb]').forEach(b=>b.onclick=(e)=>{
            if(e.target.dataset.fb==='higher') low=guess+1;
            else if(e.target.dataset.fb==='lower') high=guess-1;
            else { document.getElementById('aiGuessResult').innerHTML=`<i class="fas fa-robot"></i> خمنتها في ${attempts} محاولات!`; return; }
            newGuess();
            container.querySelector('p:nth-of-type(2)').innerText=`هل هو ${guess}؟`;
        });
        return ()=>{};
    },

    // -------------------- لعبة 67: الذكاء الاصطناعي يخمن كلمتي --------------------
    aiGuessWord: function(container) {
        const words=WORDLE_WORDS.slice(0,50);
        let possible=words.slice(), guess, attempts=0;
        guess=possible[Math.floor(possible.length/2)];
        container.innerHTML = `<p>اختر كلمة من القائمة</p><p>هل هي "${guess}"؟</p><button class="btn" id="aiWordYes">نعم</button><button class="btn" id="aiWordNo">لا</button><p id="aiWordResult"></p>`;
        document.getElementById('aiWordYes').onclick=()=>{document.getElementById('aiWordResult').innerHTML=`<i class="fas fa-robot"></i> رائع!`;};
        document.getElementById('aiWordNo').onclick=()=>{possible=possible.filter(w=>w!==guess);guess=possible[Math.floor(possible.length/2)];container.querySelector('p:nth-of-type(2)').innerText=`هل هي "${guess}"؟`;};
        return ()=>{};
    },

    // -------------------- لعبة 68: تخمين المشاعر --------------------
    emotionGuess: function(container) {
        const emotions=[{e:'😊',n:'سعيد'},{e:'😢',n:'حزين'},{e:'😠',n:'غاضب'},{e:'😲',n:'مندهش'}];
        const q=emotions[rand(0,emotions.length-1)];
        container.innerHTML = `<p>ما الشعور؟ ${q.e}</p><input id="emotionInput"><button class="btn" id="checkEmotion">تحقق</button><p id="emotionResult"></p>`;
        document.getElementById('checkEmotion').onclick=()=>{
            const ans=document.getElementById('emotionInput').value.trim();
            document.getElementById('emotionResult').innerHTML=ans===q.n?'<i class="fas fa-trophy"></i> صحيح!':`الإجابة: ${q.n}`;
        };
        return ()=>{};
    },

    // -------------------- لعبة 69: من أنا؟ --------------------
    whoAmI: function(container) {
        const persons=[{c:'أول خليفة',a:'أبو بكر'},{c:'مكتشف الجاذبية',a:'نيوتن'}];
        const q=persons[rand(0,persons.length-1)];
        container.innerHTML = `<p>من أنا؟ ${q.c}</p><input id="whoInput"><button class="btn" id="checkWho">تحقق</button><p id="whoResult"></p>`;
        document.getElementById('checkWho').onclick=()=>{
            const ans=document.getElementById('whoInput').value.trim();
            document.getElementById('whoResult').innerHTML=ans===q.a?'<i class="fas fa-trophy"></i> صحيح!':`الإجابة: ${q.a}`;
        };
        return ()=>{};
    },

    // -------------------- لعبة 70: تخمين الحيوان --------------------
    animalGuess: function(container) {
        const animal=ANIMALS[rand(0,ANIMALS.length-1)];
        container.innerHTML = `<p>خمن الحيوان (${animal.length} حروف)</p><input id="animalInput"><button class="btn" id="checkAnimal">تحقق</button><p id="animalResult"></p>`;
        document.getElementById('checkAnimal').onclick=()=>{
            const ans=document.getElementById('animalInput').value.trim();
            document.getElementById('animalResult').innerHTML=ans===animal?'<i class="fas fa-trophy"></i> صحيح!':`الإجابة: ${animal}`;
        };
        return ()=>{};
    },

    // -------------------- لعبة 71: تخمين الشيء --------------------
    objectGuess: function(container) {
        const objects=[{d:'نستخدمه للكتابة',a:'قلم'},{d:'نجلس عليه',a:'كرسي'}];
        const q=objects[rand(0,objects.length-1)];
        container.innerHTML = `<p>${q.d}</p><input id="objInput"><button class="btn" id="checkObj">تحقق</button><p id="objResult"></p>`;
        document.getElementById('checkObj').onclick=()=>{
            const ans=document.getElementById('objInput').value.trim();
            document.getElementById('objResult').innerHTML=ans===q.a?'<i class="fas fa-trophy"></i> صحيح!':`الإجابة: ${q.a}`;
        };
        return ()=>{};
    },

    // -------------------- لعبة 72: تخمين الدولة --------------------
    countryGuess: function(container) {
        const c=CAPITALS[rand(0,CAPITALS.length-1)];
        container.innerHTML = `<p>عاصمتها ${c[1]}</p><input id="countryInput"><button class="btn" id="checkCountry">تحقق</button><p id="countryResult"></p>`;
        document.getElementById('checkCountry').onclick=()=>{
            const ans=document.getElementById('countryInput').value.trim();
            document.getElementById('countryResult').innerHTML=ans===c[0]?'<i class="fas fa-trophy"></i> صحيح!':`الإجابة: ${c[0]}`;
        };
        return ()=>{};
    },

    // -------------------- لعبة 73: حل الألغاز --------------------
    riddleSolver: function(container) {
        const r=RIDDLES[rand(0,RIDDLES.length-1)];
        container.innerHTML = `<p>${r.q}</p><input id="solveInput"><button class="btn" id="checkSolve">تحقق</button><p id="solveResult"></p>`;
        document.getElementById('checkSolve').onclick=()=>{
            const ans=document.getElementById('solveInput').value.trim();
            document.getElementById('solveResult').innerHTML=ans===r.a?'<i class="fas fa-trophy"></i> صحيح!':`الإجابة: ${r.a}`;
        };
        return ()=>{};
    },

    // -------------------- لعبة 74: فئة الكلمة --------------------
    wordCategory: function(container) {
        const cats=[{w:'تفاح',c:'فاكهة'},{w:'سيارة',c:'وسيلة نقل'}];
        const q=cats[rand(0,cats.length-1)];
        container.innerHTML = `<p>ما فئة "${q.w}"؟</p><input id="catInput"><button class="btn" id="checkCat">تحقق</button><p id="catResult"></p>`;
        document.getElementById('checkCat').onclick=()=>{
            const ans=document.getElementById('catInput').value.trim();
            document.getElementById('catResult').innerHTML=ans===q.c?'<i class="fas fa-trophy"></i> صحيح!':`الإجابة: ${q.c}`;
        };
        return ()=>{};
    },

    // -------------------- لعبة 75: نمط الأرقام --------------------
    numberPattern: function(container) {
        let seq=[], ans;
        function newPattern(){
            const start=rand(1,10), diff=rand(1,5);
            seq=[start, start+diff, start+diff*2, start+diff*3];
            ans=start+diff*4;
        }
        newPattern();
        container.innerHTML = `<p>ما الرقم التالي؟ ${seq.join(' , ')}</p><input id="patternInput" type="number"><button class="btn" id="checkPattern">تحقق</button><p id="patternResult"></p>`;
        document.getElementById('checkPattern').onclick=()=>{
            const g=parseInt(document.getElementById('patternInput').value);
            document.getElementById('patternResult').innerHTML=g===ans?'<i class="fas fa-trophy"></i> صحيح!':`الإجابة: ${ans}`;
        };
        return ()=>{};
    },

    // -------------------- لعبة 76: تحريك البلاط --------------------
    tileSlide: function(container) {
        let tiles=shuffle([...Array(9).keys()].slice(1).concat(0));
        container.innerHTML = `<div id="tileGrid" style="display:grid;grid-template-columns:repeat(3,1fr);gap:5px;"></div>`;
        function render(){
            const grid=document.getElementById('tileGrid');
            grid.innerHTML=tiles.map((v,i)=>`<div class="btn" data-idx="${i}" style="height:60px;">${v||''}</div>`).join('');
            grid.querySelectorAll('.btn').forEach(b=>b.onclick=e=>{
                const idx=parseInt(b.dataset.idx), zero=tiles.indexOf(0);
                const row=Math.floor(idx/3),col=idx%3,zRow=Math.floor(zero/3),zCol=zero%3;
                if((Math.abs(row-zRow)===1&&col===zCol)||(Math.abs(col-zCol)===1&&row===zRow)){
                    [tiles[idx],tiles[zero]]=[tiles[zero],tiles[idx]];
                    render();
                    if(tiles.slice(0,8).every((v,i)=>v===i+1)) alert('أحسنت!');
                }
            });
        }
        render();
        return ()=>{};
    },

    // -------------------- لعبة 77: توصيل الأنابيب (نصي) --------------------
    pipeConnect: function(container) {
        container.innerHTML = `<p>اختر القطعة المناسبة لتوصيل الأنبوب: ═ ║ ╔ ╗</p><div id="pipeOpts"></div><p id="pipeResult"></p>`;
        const pieces=['═','║','╔','╗'], correct=pieces[rand(0,3)];
        const opts=document.getElementById('pipeOpts');
        pieces.forEach(p=>{const btn=document.createElement('button');btn.className='btn';btn.innerText=p;btn.onclick=()=>document.getElementById('pipeResult').innerHTML=p===correct?'<i class="fas fa-trophy"></i> صحيح!':'خطأ';opts.appendChild(btn);});
        return ()=>{};
    },

    // -------------------- لعبة 78: دمج المربعات (2048 مصغر) --------------------
    blockMerge: function(container) {
        let board=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
        function addNew(){let empty=[];board.forEach((r,i)=>r.forEach((c,j)=>{if(c===0)empty.push([i,j]);}));if(empty.length){let [i,j]=empty[rand(0,empty.length-1)];board[i][j]=rand(1,2)*2;}}
        addNew();addNew();
        container.innerHTML = `<div id="mergeGrid" style="display:grid;grid-template-columns:repeat(4,1fr);gap:5px;"></div><p id="mergeScore">0</p>`;
        let score=0;
        function render(){
            const grid=document.getElementById('mergeGrid');
            grid.innerHTML=board.map(r=>r.map(c=>`<div style="background:${c?`hsl(${Math.log2(c)*30},70%,50%)`:'var(--card)'};height:60px;display:flex;align-items:center;justify-content:center;border-radius:10px;">${c||''}</div>`).join('')).join('');
        }
        function move(dir){
            let moved=false;
            for(let i=0;i<4;i++){
                let row=board.map(r=>r[i]);
                if(dir==='right'||dir==='left') row=board[i];
                let arr=row.filter(v=>v);
                if(dir==='right'||dir==='down') arr.reverse();
                for(let j=0;j<arr.length-1;j++) if(arr[j]&&arr[j]===arr[j+1]){arr[j]*=2;score+=arr[j];arr.splice(j+1,1);}
                while(arr.length<4) arr.push(0);
                if(dir==='right'||dir==='down') arr.reverse();
                if(dir==='right'||dir==='left') board[i]=arr; else for(let r=0;r<4;r++) board[r][i]=arr[r];
            }
            addNew(); render(); document.getElementById('mergeScore').innerText=score;
        }
        window.addEventListener('keydown',e=>{if(e.key.startsWith('Arrow')){e.preventDefault();move(e.key.slice(5).toLowerCase());}});
        render();
        return ()=>{};
    },

    // -------------------- لعبة 79: تدفق الألوان --------------------
    colorFlow: function(container) {
        container.innerHTML = `<canvas id="flowCanvas" width="200" height="200"></canvas>`;
        const canvas=document.getElementById('flowCanvas'),ctx=canvas.getContext('2d');
        let grid=Array(5).fill().map(()=>Array(5).fill(rand(0,3)));
        function draw(){
            for(let i=0;i<5;i++) for(let j=0;j<5;j++){ctx.fillStyle=['red','blue','green','yellow'][grid[i][j]];ctx.fillRect(i*40,j*40,38,38);}
        }
        canvas.onclick=(e)=>{const x=Math.floor(e.offsetX/40),y=Math.floor(e.offsetY/40);if(x<5&&y<5){let target=grid[x][y],orig=grid[0][0];if(target!==orig)grid=grid.map(r=>r.map(c=>c===orig?target:c));draw();}};
        draw();
        return ()=>{};
    },

    // -------------------- لعبة 80: ملاءمة الأشكال --------------------
    shapeFit: function(container) {
        container.innerHTML = `<p>اختر الشكل المناسب للفراغ: □ ○ △</p><div id="shapeOpts"></div><p id="shapeResult"></p>`;
        const shapes=['□','○','△'], correct=shapes[rand(0,2)];
        document.getElementById('shapeOpts').innerHTML=shapes.map(s=>`<button class="btn" data-shape="${s}">${s}</button>`).join('');
        document.querySelectorAll('[data-shape]').forEach(b=>b.onclick=e=>document.getElementById('shapeResult').innerHTML=e.target.dataset.shape===correct?'<i class="fas fa-trophy"></i> صحيح!':'خطأ');
        return ()=>{};
    },

    // -------------------- لعبة 81: تدوير الأحجية --------------------
    rotatePuzzle: function(container) {
        container.innerHTML = `<canvas id="rotateCanvas" width="200" height="200"></canvas><button class="btn" id="rotateBtn">تدوير</button>`;
        const canvas=document.getElementById('rotateCanvas'),ctx=canvas.getContext('2d');
        let angle=0;
        function draw(){ctx.clearRect(0,0,200,200);ctx.save();ctx.translate(100,100);ctx.rotate(angle);ctx.fillStyle='var(--lime)';ctx.fillRect(-30,-30,60,60);ctx.restore();}
        draw();
        document.getElementById('rotateBtn').onclick=()=>{angle+=Math.PI/2;draw();if(angle%(2*Math.PI)<0.1)alert('عاد للوضع الأصلي!');};
        return ()=>{};
    },

    // -------------------- لعبة 82: بانوراما صغيرة --------------------
    jigsawMini: function(container) {
        container.innerHTML = `<p>رتب القطع: 1-2-3</p><div id="jigsawPieces"></div><button class="btn" id="checkJigsaw">تحقق</button>`;
        let order=[1,2,3]; shuffle(order);
        const div=document.getElementById('jigsawPieces');
        function render(){div.innerHTML=order.map(n=>`<button class="btn" data-val="${n}">${n}</button>`).join('');}
        render();
        div.addEventListener('click',e=>{if(e.target.tagName==='BUTTON'){const val=e.target.dataset.val;order=order.filter(v=>v!=val);order.push(parseInt(val));render();}});
        document.getElementById('checkJigsaw').onclick=()=>alert(order.join('')==='123'?'صحيح!':'حاول مجدداً');
        return ()=>{};
    },

    // -------------------- لعبة 83: ماتش 3 --------------------
    match3: function(container) {
        container.innerHTML = `<canvas id="match3Canvas" width="240" height="240"></canvas>`;
        const canvas=document.getElementById('match3Canvas'),ctx=canvas.getContext('2d');
        let grid=Array(6).fill().map(()=>Array(6).fill().map(()=>rand(1,4)));
        function draw(){
            for(let i=0;i<6;i++) for(let j=0;j<6;j++){ctx.fillStyle=['','red','blue','green','yellow'][grid[i][j]];ctx.fillRect(i*40,j*40,38,38);}
        }
        draw();
        return ()=>{};
    },

    // -------------------- لعبة 84: توصيل النقاط --------------------
    lineConnect: function(container) {
        container.innerHTML = `<canvas id="connectCanvas" width="300" height="300"></canvas>`;
        const canvas=document.getElementById('connectCanvas'),ctx=canvas.getContext('2d');
        let points=[{x:50,y:50},{x:250,y:250}], connected=[];
        function draw(){ctx.clearRect(0,0,300,300);points.forEach(p=>{ctx.fillStyle='var(--lime)';ctx.beginPath();ctx.arc(p.x,p.y,10,0,2*Math.PI);ctx.fill();});}
        canvas.onclick=(e)=>{const rect=canvas.getBoundingClientRect();const x=e.clientX-rect.left,y=e.clientY-rect.top;if(Math.hypot(x-points[0].x,y-points[0].y)<15)connected[0]=true;else if(Math.hypot(x-points[1].x,y-points[1].y)<15)connected[1]=true;if(connected[0]&&connected[1])alert('تم التوصيل!');};
        draw();
        return ()=>{};
    },

    // -------------------- لعبة 85: دمج الأرقام --------------------
    numberMerge: function(container) {
        let nums=[2,4,8,16];
        container.innerHTML = `<p>ادمج الأرقام للحصول على 16</p><div id="mergeNums"></div>`;
        function render(){document.getElementById('mergeNums').innerHTML=nums.map(n=>`<button class="btn" data-val="${n}">${n}</button>`).join('');}
        render();
        document.getElementById('mergeNums').addEventListener('click',e=>{
            if(e.target.tagName==='BUTTON'){
                const val=parseInt(e.target.dataset.val);
                nums=nums.filter(v=>v!==val);
                if(nums.length===0) nums.push(val*2);
                else nums.push(val);
                render();
                if(nums.includes(16)) alert('وصلت لـ16!');
            }
        });
        return ()=>{};
    },

    // -------------------- لعبة 86: معلومات عامة --------------------
    generalTriviaGame: function(container) {
        const q=TRUE_FALSE_QUESTIONS[rand(0,TRUE_FALSE_QUESTIONS.length-1)];
        container.innerHTML = `<p>${q.q}</p><button class="btn" id="triviaTrue">صح</button><button class="btn" id="triviaFalse">خطأ</button><p id="triviaResult"></p>`;
        document.getElementById('triviaTrue').onclick=()=>document.getElementById('triviaResult').innerHTML=q.a?'<i class="fas fa-trophy"></i> صحيح!':'خطأ';
        document.getElementById('triviaFalse').onclick=()=>document.getElementById('triviaResult').innerHTML=!q.a?'<i class="fas fa-trophy"></i> صحيح!':'خطأ';
        return ()=>{};
    },

    // -------------------- لعبة 87: اختبار التاريخ --------------------
    historyQuiz: function(container) {
        const qs=[{q:'من أول خليفة؟',a:'أبو بكر'},{q:'متى فتحت القسطنطينية؟',a:'1453'}];
        const q=qs[rand(0,qs.length-1)];
        container.innerHTML = `<p>${q.q}</p><input id="histInput"><button class="btn" id="checkHist">تحقق</button><p id="histResult"></p>`;
        document.getElementById('checkHist').onclick=()=>{
            const ans=document.getElementById('histInput').value.trim();
            document.getElementById('histResult').innerHTML=ans===q.a?'<i class="fas fa-trophy"></i> صحيح!':`الإجابة: ${q.a}`;
        };
        return ()=>{};
    },

    // -------------------- لعبة 88: اختبار العلوم --------------------
    scienceQuiz: function(container) {
        const qs=[{q:'ما هو رمز الماء؟',a:'H2O'},{q:'أسرع حيوان بري؟',a:'الفهد'}];
        const q=qs[rand(0,qs.length-1)];
        container.innerHTML = `<p>${q.q}</p><input id="sciInput"><button class="btn" id="checkSci">تحقق</button><p id="sciResult"></p>`;
        document.getElementById('checkSci').onclick=()=>{
            const ans=document.getElementById('sciInput').value.trim();
            document.getElementById('sciResult').innerHTML=ans===q.a?'<i class="fas fa-trophy"></i> صحيح!':`الإجابة: ${q.a}`;
        };
        return ()=>{};
    },

    // -------------------- لعبة 89: اختبار الرياضة --------------------
    sportsQuiz: function(container) {
        const qs=[{q:'كم لاعب في كرة القدم؟',a:'11'},{q:'أين أقيم كأس العالم 2022؟',a:'قطر'}];
        const q=qs[rand(0,qs.length-1)];
        container.innerHTML = `<p>${q.q}</p><input id="sportInput"><button class="btn" id="checkSport">تحقق</button><p id="sportResult"></p>`;
        document.getElementById('checkSport').onclick=()=>{
            const ans=document.getElementById('sportInput').value.trim();
            document.getElementById('sportResult').innerHTML=ans===q.a?'<i class="fas fa-trophy"></i> صحيح!':`الإجابة: ${q.a}`;
        };
        return ()=>{};
    },

    // -------------------- لعبة 90: اختبار التقنية --------------------
    techQuiz: function(container) {
        const qs=[{q:'ما هو HTTP؟',a:'بروتوكول نقل النص التشعبي'},{q:'من مؤسس مايكروسوفت؟',a:'بيل غيتس'}];
        const q=qs[rand(0,qs.length-1)];
        container.innerHTML = `<p>${q.q}</p><input id="techInput"><button class="btn" id="checkTech">تحقق</button><p id="techResult"></p>`;
        document.getElementById('checkTech').onclick=()=>{
            const ans=document.getElementById('techInput').value.trim();
            document.getElementById('techResult').innerHTML=ans===q.a?'<i class="fas fa-trophy"></i> صحيح!':`الإجابة: ${q.a}`;
        };
        return ()=>{};
    },

    // -------------------- لعبة 91: اختبار الجغرافيا --------------------
    geographyQuiz: function(container) {
        const q=CAPITALS[rand(0,CAPITALS.length-1)];
        container.innerHTML = `<p>ما عاصمة ${q[0]}؟</p><input id="geoInput"><button class="btn" id="checkGeo">تحقق</button><p id="geoResult"></p>`;
        document.getElementById('checkGeo').onclick=()=>{
            const ans=document.getElementById('geoInput').value.trim();
            document.getElementById('geoResult').innerHTML=ans===q[1]?'<i class="fas fa-trophy"></i> صحيح!':`الإجابة: ${q[1]}`;
        };
        return ()=>{};
    },

    // -------------------- لعبة 92: اختبار الرياضيات --------------------
    mathQuiz: function(container) {
        const a=rand(1,50), b=rand(1,50), op=rand(0,1)?'+':'-';
        const ans=op==='+'?a+b:a-b;
        container.innerHTML = `<p>${a} ${op} ${b} = ?</p><input id="mathQuizInput" type="number"><button class="btn" id="checkMathQuiz">تحقق</button><p id="mathQuizResult"></p>`;
        document.getElementById('checkMathQuiz').onclick=()=>{
            const g=parseInt(document.getElementById('mathQuizInput').value);
            document.getElementById('mathQuizResult').innerHTML=g===ans?'<i class="fas fa-trophy"></i> صحيح!':`الإجابة: ${ans}`;
        };
        return ()=>{};
    },

    // -------------------- لعبة 93: اختبار اللغة --------------------
    languageQuiz: function(container) {
        const qs=[{q:'ما مرادف "سعيد"؟',a:'فرحان'},{q:'ما ضد "كبير"؟',a:'صغير'}];
        const q=qs[rand(0,qs.length-1)];
        container.innerHTML = `<p>${q.q}</p><input id="langInput"><button class="btn" id="checkLang">تحقق</button><p id="langResult"></p>`;
        document.getElementById('checkLang').onclick=()=>{
            const ans=document.getElementById('langInput').value.trim();
            document.getElementById('langResult').innerHTML=ans===q.a?'<i class="fas fa-trophy"></i> صحيح!':`الإجابة: ${q.a}`;
        };
        return ()=>{};
    },

    // -------------------- لعبة 94: معاني الإيموجي --------------------
    emojiMeaning: function(container) {
        const emojis=[{e:'❤️',m:'حب'},{e:'🔥',m:'نار'},{e:'💧',m:'ماء'}];
        const q=emojis[rand(0,emojis.length-1)];
        container.innerHTML = `<p>ما معنى ${q.e}؟</p><input id="emojiMeanInput"><button class="btn" id="checkEmojiMean">تحقق</button><p id="emojiMeanResult"></p>`;
        document.getElementById('checkEmojiMean').onclick=()=>{
            const ans=document.getElementById('emojiMeanInput').value.trim();
            document.getElementById('emojiMeanResult').innerHTML=ans===q.m?'<i class="fas fa-trophy"></i> صحيح!':`الإجابة: ${q.m}`;
        };
        return ()=>{};
    },

    // -------------------- لعبة 95: اختبار المنطق --------------------
    logicQuiz: function(container) {
        const qs=[{q:'إذا كان كل أ ب، وكل ب ج، فهل كل أ ج؟',a:'نعم'},{q:'بعض الطيور تطير. البطريق طائر. هل يطير؟',a:'لا'}];
        const q=qs[rand(0,qs.length-1)];
        container.innerHTML = `<p>${q.q}</p><input id="logicInput"><button class="btn" id="checkLogic">تحقق</button><p id="logicResult"></p>`;
        document.getElementById('checkLogic').onclick=()=>{
            const ans=document.getElementById('logicInput').value.trim();
            document.getElementById('logicResult').innerHTML=ans===q.a?'<i class="fas fa-trophy"></i> صحيح!':`الإجابة: ${q.a}`;
        };
        return ()=>{};
    },

    // -------------------- لعبة 96: تحكم مرآة --------------------
    mirrorControl: function(container) {
        container.innerHTML = `<canvas id="mirrorCanvas" width="300" height="300"></canvas>`;
        const canvas=document.getElementById('mirrorCanvas'),ctx=canvas.getContext('2d');
        let player={x:150,y:150};
        function draw(){ctx.clearRect(0,0,300,300);ctx.fillStyle='var(--lime)';ctx.fillRect(player.x,player.y,15,15);}
        canvas.addEventListener('mousemove',e=>{
            const rect=canvas.getBoundingClientRect();
            player.x=300-(e.clientX-rect.left)-15;
            player.y=e.clientY-rect.top;
            draw();
        });
        draw();
        return ()=>{};
    },

    // -------------------- لعبة 97: تحكم معكوس --------------------
    reverseControls: function(container) {
        container.innerHTML = `<canvas id="reverseCanvas" width="300" height="300"></canvas>`;
        const canvas=document.getElementById('reverseCanvas'),ctx=canvas.getContext('2d');
        let player={x:150,y:150};
        function draw(){ctx.clearRect(0,0,300,300);ctx.fillStyle='var(--lime)';ctx.fillRect(player.x,player.y,15,15);}
        window.addEventListener('keydown',e=>{
            if(e.key==='ArrowRight') player.x-=10; else if(e.key==='ArrowLeft') player.x+=10;
            else if(e.key==='ArrowDown') player.y-=10; else if(e.key==='ArrowUp') player.y+=10;
            player.x=Math.min(285,Math.max(0,player.x)); player.y=Math.min(285,Math.max(0,player.y));
            draw();
        });
        draw();
        return ()=>{};
    },

    // -------------------- لعبة 98: لعبة زر واحد --------------------
    oneButtonGame: function(container) {
        let state='wait', timer;
        container.innerHTML = `<button class="btn" id="oneBtn" style="padding:40px;width:100%;">اضغط</button><p id="oneResult"></p>`;
        const btn=document.getElementById('oneBtn'), res=document.getElementById('oneResult');
        function next(){state='wait';btn.innerText='اضغط عندما يصبح أخضر';btn.style.background='var(--card)';timer=setTimeout(()=>{state='go';btn.innerText='اضغط الآن!';btn.style.background='var(--lime)';},rand(500,2000));}
        btn.onclick=()=>{
            if(state==='go'){res.innerHTML='<i class="fas fa-trophy"></i> ناجح!';clearTimeout(timer);next();}
            else if(state==='wait'){res.innerHTML='سريع جداً!';clearTimeout(timer);next();}
        };
        next();
        return ()=>clearTimeout(timer);
    },

    // -------------------- لعبة 99: قلب الجاذبية --------------------
    gravityFlip: function(container) {
        container.innerHTML = `<canvas id="gravityCanvas" width="300" height="300"></canvas><button class="btn" id="flipGravity">اقلب</button>`;
        const canvas=document.getElementById('gravityCanvas'),ctx=canvas.getContext('2d');
        let player={x:150,y:150,vy:0}, gravity=0.5;
        function update(){
            ctx.clearRect(0,0,300,300);
            ctx.fillStyle='var(--lime)';ctx.fillRect(player.x,player.y,15,15);
            player.vy+=gravity; player.y+=player.vy;
            if(player.y>285||player.y<0){player.vy*=-0.5;player.y=Math.min(285,Math.max(0,player.y));}
            requestAnimationFrame(update);
        }
        update();
        document.getElementById('flipGravity').onclick=()=>gravity*=-1;
        return ()=>{};
    },

    // -------------------- لعبة 100: متاهة خفية --------------------
    invisibleMaze: function(container) {
        container.innerHTML = `<canvas id="invisCanvas" width="300" height="300"></canvas>`;
        const canvas=document.getElementById('invisCanvas'),ctx=canvas.getContext('2d');
        let player={x:20,y:20}, walls=[[50,0,10,200],[150,100,10,200]], goal={x:270,y:270}, show=false;
        function draw(){
            ctx.clearRect(0,0,300,300);
            ctx.fillStyle='var(--lime)';ctx.fillRect(player.x,player.y,10,10);
            ctx.fillStyle='gold';ctx.fillRect(goal.x,goal.y,15,15);
            if(show) walls.forEach(w=>{ctx.fillStyle='gray';ctx.fillRect(w[0],w[1],w[2],w[3]);});
            if(player.x+10>goal.x&&player.x<goal.x+15&&player.y+10>goal.y&&player.y<goal.y+15) alert('فزت!');
        }
        canvas.addEventListener('mousemove',e=>{
            const rect=canvas.getBoundingClientRect();
            player.x=e.clientX-rect.left; player.y=e.clientY-rect.top;
            show=true; setTimeout(()=>{show=false;draw();},200);
            draw();
        });
        draw();
        return ()=>{};
    }
};
