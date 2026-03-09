const questionsBank = [
    // --- คำนวณจากตัวอย่าง 6.1 ---
    {
        q: "มูลค่าซากปัจจุบัน $7,000 และค่าซ่อม $22,000 เงินลงทุนรวม (P) ของ Defender ในวิธี Opportunity Cost คือเท่าใด?",
        options: ["$7,000", "$22,000", "$29,000", "$80,000"],
        correct: 2,
        exp: "P = 7,000 + 22,000 = $29,000 [cite: 43]"
    },
    // --- ทฤษฎีบทที่ 6 ---
    {
        q: "จุดอายุการใช้งานเชิงเศรษฐกิจ (ESL) มีลักษณะสำคัญอย่างไร?",
        options: ["จุดที่ค่าใช้จ่ายรายปีเฉลี่ยต่ำที่สุด", "จุดที่มูลค่าซากเป็นศูนย์", "จุดที่กำไรสูงสุด", "จุดที่เครื่องพังพอดี"],
        correct: 0,
        exp: "ESL คือจุดที่ผลรวมของต้นทุนทรัพย์สินและต้นทุนดำเนินงานต่ำที่สุด [cite: 181, 191]"
    },
    {
        q: "ในรูปที่ 6.1 เส้นใดที่มีค่าลดลงเมื่ออายุการใช้งานเพิ่มขึ้น?",
        options: ["ต้นทุนดำเนินงาน", "ต้นทุนรวม", "ต้นทุนทรัพย์สิน", "รายได้รวม"],
        correct: 2,
        exp: "ต้นทุนทรัพย์สินหรือเงินลงทุนเริ่มต้นจะมีค่าลดลงเมื่ออายุการใช้งานเพิ่มขึ้น [cite: 182]"
    },
    // --- การตัดสินใจบทที่ 7 ---
    {
        q: "เกณฑ์ที่เลือกทางเลือกที่ให้ผลตอบแทนมากที่สุดจากเหตุการณ์ที่ดีที่สุด (มองโลกแง่ดี) คือเกณฑ์ใด?",
        options: ["Maximax", "Maximin", "Minimax Regret", "Laplace"],
        correct: 0,
        exp: "Maximax Criterion เลือกสิ่งที่ดีที่สุดจากสิ่งที่ดีที่สุด [cite: 539, 721]"
    },
    {
        q: "เกณฑ์ที่เลือกทางเลือกที่ให้ผลตอบแทนมากที่สุดจากเหตุการณ์ที่แย่ที่สุด (มองโลกแง่ร้าย) คือเกณฑ์ใด?",
        options: ["Maximax", "Maximin", "Minimax Regret", "Laplace"],
        correct: 1,
        exp: "Maximin Criterion เป็นการประกันผลตอบแทนขั้นต่ำที่สุด [cite: 541, 729]"
    },
    {
        q: "ใน Decision Tree สัญลักษณ์ 'สี่เหลี่ยม' หมายถึงจุดใด?",
        options: ["จุดตัดสินใจ", "จุดเหตุการณ์ธรรมชาติ", "จุดจบโครงการ", "ทางเลือก"],
        correct: 0,
        exp: "สี่เหลี่ยมใช้แทนจุดของการตัดสินใจ (decision node) [cite: 680, 681]"
    },
    {
        q: "เกณฑ์ใดสมมติให้ทุกเหตุการณ์มีโอกาสเกิดขึ้นเท่ากัน?",
        options: ["Maximax", "Maximin", "Laplace", "Hurwicz"],
        correct: 2,
        exp: "Laplace Criterion กำหนดความน่าจะเป็นให้เท่ากันคือ 1/N [cite: 545, 746]"
    },
    {
        q: "ตัวอย่าง 7.1: กำไรขยายโรงงาน ดี(300), ชะลอ(200), ถดถอย(-20) Prob: 0.2, 0.5, 0.3 ค่า EV คือ?",
        options: ["154 ล้านบาท", "118 ล้านบาท", "135 ล้านบาท", "160 ล้านบาท"],
        correct: 0,
        exp: "EV = (0.2x300) + (0.5x200) + (0.3x-20) = 60+100-6 = 154 [cite: 625]"
    },
    {
        q: "หากต้นทุนส่วนเพิ่ม (Marginal Cost) ของเครื่องเก่า > EUAC ของเครื่องใหม่ ควรทำอย่างไร?",
        options: ["ใช้เครื่องเก่าต่อ", "เปลี่ยนเป็นเครื่องใหม่ทันที", "รอเครื่องพัง", "จ้างผลิต"],
        correct: 1,
        exp: "ถ้าต้นทุนเพิ่มต่อปีของ Defender มากกว่า EUAC ของ Challenger ให้ทดแทนที่ต้นปีนั้นทันที [cite: 271]"
    },
    {
        q: "การวิเคราะห์ความไว (Sensitivity Analysis) คือการศึกษาเรื่องใด?",
        options: ["ความรู้สึกพนักงาน", "ผลกระทบเมื่อปัจจัยหลักเปลี่ยนแปลง", "การลดภาษี", "การจดทะเบียนบริษัท"],
        correct: 1,
        exp: "เป็นการศึกษาผลกระทบต่อปัจจัยหลักที่เกิดจากการเปลี่ยนแปลงของปัจจัยต่างๆ ของโครงการ [cite: 827]"
    }
    // ... คุณสามารถเพิ่มข้ออื่นๆ ได้ตามโครงสร้างนี้จนครบ 50 ข้อ ...
];

let quiz = [];
let currentIndex = 0;
let score = 0;
let answered = false;

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function startQuiz() {
    // รีเซ็ตค่าใหม่ทั้งหมด
    currentIndex = 0;
    score = 0;
    answered = false;
    
    // คัดลอกและสลับข้อสอบ
    quiz = shuffle([...questionsBank]);
    
    // รีเซ็ต UI
    document.getElementById('result-modal').classList.add('hidden');
    document.getElementById('current-score').innerText = `คะแนน: 0`;
    
    showQuestion();
}

function showQuestion() {
    answered = false;
    const q = quiz[currentIndex];
    
    // อัปเดตข้อความและ Progress
    document.getElementById('question-number').innerText = `ข้อที่ ${currentIndex + 1} / ${quiz.length}`;
    document.getElementById('question-text').innerText = q.q;
    document.getElementById('progress-bar').style.width = `${((currentIndex + 1) / quiz.length) * 100}%`;
    
    // ซ่อน Feedback และปุ่ม Next
    document.getElementById('feedback').classList.add('hidden');
    document.getElementById('next-btn').classList.add('hidden');

    // สร้างปุ่มตัวเลือก
    const optionsList = document.getElementById('options-list');
    optionsList.innerHTML = '';
    
    // สลับช้อยส์ก่อนแสดงผล
    const shuffledOptions = q.options.map((opt, i) => ({ text: opt, originalIndex: i }));
    shuffle(shuffledOptions);

    shuffledOptions.forEach(opt => {
        const div = document.createElement('div');
        div.className = 'option';
        div.innerText = opt.text;
        div.onclick = () => handleAnswer(div, opt.originalIndex, q.correct);
        optionsList.appendChild(div);
    });
}

function handleAnswer(element, selected, correct) {
    if (answered) return;
    answered = true;

    const allOptions = document.querySelectorAll('.option');
    if (selected === correct) {
        element.classList.add('correct');
        score++;
        document.getElementById('current-score').innerText = `คะแนน: ${score}`;
        document.getElementById('feedback-message').innerText = "✅ ถูกต้อง!";
    } else {
        element.classList.add('wrong');
        document.getElementById('feedback-message').innerText = "❌ ผิด!";
        // เฉลยข้อที่ถูก
        allOptions.forEach(opt => {
            // ค้นหาช้อยส์ที่เนื้อหาตรงกับข้อที่ถูกดั้งเดิม
            if (opt.innerText === quiz[currentIndex].options[correct]) {
                opt.classList.add('correct');
            }
        });
    }

    document.getElementById('explanation-text').innerText = quiz[currentIndex].exp;
    document.getElementById('feedback').classList.remove('hidden');
    document.getElementById('next-btn').classList.remove('hidden');
}

function nextQuestion() {
    if (currentIndex < quiz.length - 1) {
        currentIndex++;
        showQuestion();
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    document.getElementById('result-modal').classList.remove('hidden');
    document.getElementById('final-score').innerText = score;
    const eval = document.getElementById('evaluation');
    const ratio = score / quiz.length;
    
    if (ratio >= 0.8) eval.innerText = "ยอดเยี่ยม! คุณพร้อมสอบแล้ว";
    else if (ratio >= 0.5) eval.innerText = "ทำได้ดี! ทบทวนจุดที่ผิดอีกนิดจะแม่นมาก";
    else eval.innerText = "ควรทบทวนเนื้อหาบทที่ 6-7 ใหม่นะครับ";
}

// เริ่มต้นทันทีเมื่อโหลดหน้าเว็บ
window.onload = startQuiz;
