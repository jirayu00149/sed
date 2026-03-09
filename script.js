// ประกาศคลังข้อสอบไว้บนสุด
const questionsData = [
    {
        q: "มูลค่าซากปัจจุบัน $7,000 และค่าซ่อม $22,000 เงินลงทุนรวม (P) ของ Defender คือ?",
        options: ["$7,000", "$22,000", "$29,000", "$80,000"],
        correct: 2,
        exp: "P = 7,000 + 22,000 = $29,000 [cite: 43]"
    },
    {
        q: "จุด ESL (Economic Service Life) มีลักษณะอย่างไร?",
        options: ["ค่าใช้จ่ายรวมเทียบเท่ารายปีต่ำที่สุด", "กำไรสูงสุด", "มูลค่าซากเป็นศูนย์", "ต้นทุนดำเนินงานต่ำที่สุด"],
        correct: 0,
        exp: "ESL คือจุดที่ค่าใช้จ่ายรวมต่ำที่สุด [cite: 182, 191]"
    },
    {
        q: "หาก Marginal Cost ของ Defender > EUAC ของ Challenger ควรทำอย่างไร?",
        options: ["ใช้เครื่องเก่าต่อ", "เปลี่ยนเป็นเครื่องใหม่ทันที", "รอเครื่องพัง", "ลดการผลิต"],
        correct: 1,
        exp: "ถ้าต้นทุนเพิ่มต่อปีของ Defender มากกว่า EUAC ของ Challenger ให้ทดแทนทันที [cite: 271]"
    },
    {
        q: "เกณฑ์ที่เลือกทางเลือกที่เสียดาย (Regret) น้อยที่สุดคือ?",
        options: ["Maximax", "Maximin", "Minimax Regret", "Laplace"],
        correct: 2,
        exp: "คือเกณฑ์เลือกทางเลือกที่มีค่าเสียโอกาสน้อยที่สุด [cite: 542]"
    },
    {
        q: "ใน Decision Tree สัญลักษณ์ 'สี่เหลี่ยม' คืออะไร?",
        options: ["จุดตัดสินใจ", "จุดเหตุการณ์ธรรมชาติ", "ทางเลือก", "ผลลัพธ์"],
        correct: 0,
        exp: "สี่เหลี่ยมใช้แทนจุดของการตัดสินใจ (Decision node) [cite: 681]"
    }
    // ... คุณสามารถเพิ่มข้ออื่นได้ตามรูปแบบนี้จนครบ 50 ข้อ ...
];

let quizQuestions = [];
let currentIdx = 0;
let score = 0;
let isAnswered = false;

// ฟังก์ชันสลับตำแหน่ง (Shuffle)
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function startQuiz() {
    // ล้างค่าใหม่ทั้งหมด
    currentIdx = 0;
    score = 0;
    isAnswered = false;
    
    // คัดลอกข้อมูลจากคลังมาสลับ
    quizQuestions = shuffle([...questionsData]);
    
    // ซ่อน Modal สรุปผล (ถ้าเปิดอยู่)
    document.getElementById('result-modal').classList.add('hidden');
    
    showQuestion();
}

function showQuestion() {
    isAnswered = false;
    const data = quizQuestions[currentIdx];
    
    // แสดง UI พื้นฐาน
    document.getElementById('question-number').innerText = `ข้อที่ ${currentIdx + 1} / ${quizQuestions.length}`;
    document.getElementById('current-score').innerText = `คะแนน: ${score}`;
    document.getElementById('question-text').innerText = data.q;
    
    // จัดการ Progress Bar
    const progressPercent = ((currentIdx + 1) / quizQuestions.length) * 100;
    document.getElementById('progress-bar').style.width = progressPercent + "%";

    // ซ่อนปุ่มถัดไปและ Feedback
    document.getElementById('next-btn').classList.add('hidden');
    document.getElementById('feedback').classList.add('hidden');

    // สร้างตัวเลือก (สลับลำดับช้อยส์)
    const optionsList = document.getElementById('options-list');
    optionsList.innerHTML = '';
    
    // สร้าง Array ของ Index ตัวเลือกแล้วสลับ
    const indices = shuffle([0, 1, 2, 3]);
    
    indices.forEach(i => {
        const div = document.createElement('div');
        div.className = 'option';
        div.innerText = data.options[i];
        div.onclick = () => handleSelect(div, i);
        optionsList.appendChild(div);
    });
}

function handleSelect(element, chosenIndex) {
    if (isAnswered) return;
    isAnswered = true;

    const correctIndex = quizQuestions[currentIdx].correct;
    const options = document.querySelectorAll('.option');

    if (chosenIndex === correctIndex) {
        element.classList.add('correct');
        score++;
    } else {
        element.classList.add('wrong');
        // ระบายสีข้อที่ถูกให้ดู
        options.forEach(opt => {
            if (opt.innerText === quizQuestions[currentIdx].options[correctIndex]) {
                opt.classList.add('correct');
            }
        });
    }

    // แสดงคำอธิบาย
    document.getElementById('explanation-text').innerText = quizQuestions[currentIdx].exp;
    document.getElementById('feedback').classList.remove('hidden');
    document.getElementById('next-btn').classList.remove('hidden');
}

function nextQuestion() {
    if (currentIdx < quizQuestions.length - 1) {
        currentIdx++;
        showQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    const modal = document.getElementById('result-modal');
    modal.classList.remove('hidden');
    document.getElementById('final-score').innerText = score;
    
    const eval = document.getElementById('evaluation');
    if (score / quizQuestions.length >= 0.8) eval.innerText = "เยี่ยมมาก! คุณแม่นเนื้อหา Replacement และ Decision แล้ว [cite: 84]";
    else eval.innerText = "ลองทบทวนเรื่องการคำนวณ Marginal Cost และเกณฑ์ตัดสินใจอีกนิดนะ [cite: 308]";
}

// เริ่มต้นทันทีที่โหลดหน้าเสร็จ
window.onload = startQuiz;
