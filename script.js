// คลังข้อสอบ 50 ข้อ (ปรับปรุง Logic การสลับและคำนวณ)
const questions = [
    // --- หมวดคำนวณจากไฟล์ PDF ---
    {
        q: "สะพานเหล็กมีมูลค่าซากปัจจุบัน $7,000 ต้องซ่อมเสริม $22,000 เพื่อใช้อีก 10 ปี เงินลงทุนรวม (P) ของ Defender คือเท่าใด? [cite: 43]",
        options: ["$7,000", "$22,000", "$29,000", "$80,000"],
        correct: 2,
        exp: "เงินลงทุนรวมประกอบด้วยมูลค่าซากและค่าซ่อมเสริมสะพาน ($7,000 + $22,000 = $29,000) [cite: 43]"
    },
    {
        q: "จากตัวอย่าง 10.2 เครื่องพิมพ์ดีดใหม่ราคา 25,000 บาท มูลค่าซาก 3,800 บาท (n=12, i=10%) ค่าใช้จ่ายรายปี 720 บาท ค่าใช้จ่ายรายปีรวมคือ? [cite: 85, 87, 88]",
        options: ["4,212 บาท", "5,210 บาท", "3,800 บาท", "25,720 บาท"],
        correct: 0,
        exp: "คำนวณจาก (25,000)(0.1468) - (3,800)(0.0468) + 720 = 4,212 บาท [cite: 88, 89]"
    },
    {
        q: "ตัวอย่าง 7.1: ขยายโรงงานกำไร ดี(300), ชะลอตัว(200), ถดถอย(-20) ด้วย Prob: 0.2, 0.5, 0.3 ค่าคาดหวังกำไรคือ? [cite: 616, 618]",
        options: ["154 ล้านบาท", "118 ล้านบาท", "135 ล้านบาท", "160 ล้านบาท"],
        correct: 0,
        exp: "EV = (0.2x300) + (0.5x200) + (0.3x-20) = 154 ล้านบาท [cite: 625, 626]"
    },
    {
        q: "ในรูปที่ 6.1 จุด ESL เป็นจุดที่มีลักษณะอย่างไร? [cite: 182, 191]",
        options: ["ค่าใช้จ่ายรวมต่ำที่สุด", "กำไรสูงสุด", "มูลค่าซากเป็นศูนย์", "ต้นทุนดำเนินงานต่ำที่สุด"],
        correct: 0,
        exp: "จุด ESL เป็นจุดที่มีค่าใช้จ่ายรวมต่ำที่สุด หรือเป็นระยะเวลาที่เหมาะสมในการใช้งานเครื่องจักร [cite: 191]"
    },
    {
        q: "เกณฑ์ที่เลือกทางเลือกที่มี 'ค่าเสียโอกาสน้อยที่สุด' จากเหตุการณ์ที่เสียโอกาสมากที่สุดคือ? [cite: 542]",
        options: ["Maximax", "Maximin", "Minimax Regret", "Laplace"],
        correct: 2,
        exp: "คือเกณฑ์ Minimax Regret Criterion [cite: 542, 732]"
    },
    // ... คุณสามารถเพิ่มข้อที่เหลือตามโครงสร้างเดิมจนครบ 50 ข้อ ...
];

let currentIdx = 0;
let score = 0;
let isAnswered = false; // ตัวแปรเช็คว่าตอบหรือยัง

// ฟังก์ชันสลับ Array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function initQuiz() {
    currentIdx = 0;
    score = 0;
    shuffleArray(questions); // สลับข้อสอบ
    showQuestion();
}

function showQuestion() {
    isAnswered = false;
    const qData = questions[currentIdx];
    
    // อัปเดต UI
    document.getElementById('question-number').innerText = `ข้อที่ ${currentIdx + 1} / ${questions.length}`;
    document.getElementById('question-text').innerText = qData.q;
    document.getElementById('progress-bar').style.width = `${((currentIdx + 1) / questions.length) * 100}%`;
    document.getElementById('feedback').classList.add('hidden');
    document.getElementById('next-btn').classList.add('hidden');

    const optionsList = document.getElementById('options-list');
    optionsList.innerHTML = '';

    // สลับตัวเลือก (Shuffle Options)
    let displayOptions = qData.options.map((opt, index) => ({ text: opt, id: index }));
    shuffleArray(displayOptions);

    displayOptions.forEach(option => {
        const div = document.createElement('div');
        div.className = 'option';
        div.innerText = option.text;
        div.onclick = () => selectOption(div, option.id);
        optionsList.appendChild(div);
    });
}

function selectOption(el, selectedId) {
    if (isAnswered) return;
    isAnswered = true;

    const correctId = questions[currentIdx].correct;
    const allOptions = document.querySelectorAll('.option');

    if (selectedId === correctId) {
        el.classList.add('correct');
        score++;
        document.getElementById('current-score').innerText = `คะแนน: ${score}`;
    } else {
        el.classList.add('wrong');
        // แสดงข้อที่ถูกให้ดู
        allOptions.forEach(opt => {
            if (opt.innerText === questions[currentIdx].options[correctId]) {
                opt.classList.add('correct');
            }
        });
    }

    document.getElementById('explanation-text').innerText = questions[currentIdx].exp;
    document.getElementById('feedback').classList.remove('hidden');
    document.getElementById('next-btn').classList.remove('hidden');
}

function nextQuestion() {
    // จุดสำคัญ: เช็คก่อนว่าจบชุดคำถามจริงหรือยัง
    if (currentIdx < questions.length - 1) {
        currentIdx++;
        showQuestion();
    } else {
        showFinalResult();
    }
}

function showFinalResult() {
    const modal = document.getElementById('result-modal');
    modal.classList.remove('hidden');
    document.getElementById('final-score').innerText = score;
    
    const evaluation = document.getElementById('evaluation');
    const ratio = score / questions.length;
    if (ratio >= 0.8) evaluation.innerText = "สุดยอด! คุณแม่นเนื้อหา Replacement และ Decision มาก [cite: 134]";
    else if (ratio >= 0.5) evaluation.innerText = "ผ่านเกณฑ์! ลองทบทวนตัวอย่างการคำนวณเพิ่มอีกนิด [cite: 149]";
    else evaluation.innerText = "ควรทบทวนเรื่อง EUAC และเกณฑ์การตัดสินใจใหม่นะครับ [cite: 191]";
}

// เริ่มต้นทำงาน
window.onload = initQuiz;
