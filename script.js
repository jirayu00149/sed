const questions = [
    // --- บทที่ 6: Replacement Analysis (คำนวณ) ---
    {
        q: "ตัวอย่าง 6.1: สะพานเหล็กมีมูลค่าตลาดปัจจุบัน $7,000 ต้องซ่อมเพิ่ม $22,000 เพื่อใช้อีก 10 ปี เงินลงทุนรวม (P) ของ Defender คือเท่าใด?",
        options: ["$7,000", "$22,000", "$29,000", "$80,000"],
        correct: 2,
        exp: "เงินลงทุนรวม ณ ปีปัจจุบัน = มูลค่าซาก (7,000) + ค่าซ่อมเสริม (22,000) = $29,000 [cite: 43]"
    },
    {
        q: "หาก Defender มี EUAC = $10,040 และ Challenger มี EUAC = $11,810 ข้อใดคือการตัดสินใจที่ถูกต้อง?",
        options: ["เปลี่ยนเป็น Challenger ทันที", "ซ่อม Defender ไว้ใช้งานต่อ", "ทิ้งทั้งคู่แล้วสร้างใหม่", "รออีก 5 ปีค่อยตัดสินใจ"],
        correct: 1,
        exp: "เนื่องจากค่าใช้จ่ายรายปีของ Defender ต่ำกว่า Challenger จึงควรเลือกซ่อมไว้ใช้งานต่อ [cite: 51]"
    },
    {
        q: "ตัวอย่าง 10.2: เครื่องพิมพ์ดีดใหม่ราคา 25,000 บาท มูลค่าซาก 3,800 บาท (n=12, i=10%) ค่าใช้จ่ายรายปี 720 บาท หากใช้สูตร AW-C = P(A/P,10%,12) - SV(A/F,10%,12) + AOC จะได้เท่าใด?",
        options: ["4,212 บาท", "5,210 บาท", "3,800 บาท", "25,720 บาท"],
        correct: 0,
        exp: "AW-C = 25,000(0.1468) - 3,800(0.0468) + 720 = 4,212 บาท [cite: 88, 89]"
    },
    {
        q: "ตัวอย่าง 10.5: ผลิตสินค้า 40,000 หน่วย/ปี ใช้เครื่องกลึงเทอร์เรตแบบเดิม 4.76 ชม./100 เซต ค่าแรง 17 บาท/ชม. ค่าแรงงานต่อปีคือเท่าใด?",
        options: ["32,368 บาท", "24,480 บาท", "83,000 บาท", "40,000 บาท"],
        correct: 0,
        exp: "ค่าแรงต่อปี = (4.76 * 40,000 * 17) / 100 = 32,368 บาท [cite: 102, 103]"
    },
    {
        q: "Marginal Cost ปีที่ 1: มูลค่าปัจจุบัน $5,000 มูลค่าปีหน้า $4,000 ดอกเบี้ย 10% ค่าใช้จ่าย $5,500 ต้นทุนรวมปีที่ 1 คือ?",
        options: ["$5,000", "$6,000", "$7,000", "$8,000"],
        correct: 2,
        exp: "Marginal Cost = (5,000-4,000) + 0.1(5,000) + 5,500 = $7,000 [cite: 293, 294]"
    },
    // --- บทที่ 7: Decision Analysis (คำนวณ) ---
    {
        q: "ตัวอย่าง 7.1: ขยายโรงงานได้กำไร: ดี(300), ชะลอตัว(200), ถดถอย(-20) โดย Prob: 0.2, 0.5, 0.3 ค่าคาดหวัง (EV) คือ?",
        options: ["154 ล้านบาท", "118 ล้านบาท", "135 ล้านบาท", "160 ล้านบาท"],
        correct: 0,
        exp: "EV = (0.2 * 300) + (0.5 * 200) + (0.3 * -20) = 60 + 100 - 6 = 154 [cite: 625, 626]"
    },
    {
        q: "จากตารางกำไร A1: 50, 25, -25, -45 หากใช้เกณฑ์ Maximin (มองโลกแง่ร้ายที่สุด) จะพิจารณาค่าใด?",
        options: ["50", "25", "-25", "-45"],
        correct: 3,
        exp: "Maximin เลือกค่าที่ดีที่สุดจากค่าที่แย่ที่สุดของแต่ละทางเลือก (แย่ที่สุดของ A1 คือ -45) [cite: 541]"
    },
    {
        q: "เกณฑ์ Laplace: หากมี 4 เหตุการณ์ ความน่าจะเป็น (P) ของแต่ละเหตุการณ์ที่ใช้คำนวณคือ?",
        options: ["0.20", "0.25", "0.50", "1.00"],
        correct: 1,
        exp: "Laplace กำหนด P เท่ากันหมด คือ 1/N = 1/4 = 0.25 [cite: 746]"
    },
    {
        q: "ตัวอย่าง 7.4: ผลิตเครื่องจักรเองได้กำไร: 70, 30, -5 (Prob: 0.2, 0.5, 0.3) ค่า EV คือเท่าใด?",
        options: ["13.1", "25.0", "27.5", "30.0"],
        correct: 2,
        exp: "EV = (70 * 0.2) + (30 * 0.5) + (-5 * 0.3) = 14 + 15 - 1.5 = 27.5 [cite: 717]"
    },
    {
        q: "Sensitivity Analysis: ลงทุน 1,000 บาท ได้เงินรวม 2,000 บาท (ปีที่ 6) ถ้ารายรับลดลง 15% จะเหลือรายได้เท่าใด?",
        options: ["2,000 บาท", "1,850 บาท", "1,700 บาท", "1,600 บาท"],
        correct: 2,
        exp: "รายรับลดลง 15% = 2,000 * (1 - 0.15) = 1,700 บาท [cite: 863]"
    },
    // --- ทฤษฎีและคำนวณพื้นฐาน (รวมเป็น 50 ข้อ) ---
    { q: "Sunk Cost คือต้นทุนประเภทใด?", options: ["ต้นทุนในอนาคต", "ต้นทุนในอดีต", "เงินลงทุนเริ่มแรก", "มูลค่าซาก"], correct: 1, exp: "ถือว่าการลงทุนและค่าใช้จ่ายในอดีตเป็นต้นทุนจม ไม่นำมาพิจารณา [cite: 17]" },
    { q: "ESL ย่อมาจากอะไร?", options: ["Economic Service Life", "Equipment Sales List", "Estimated Service Level", "Extra Service Life"], correct: 0, exp: "อายุการใช้งานเชิงเศรษฐกิจ [cite: 15]" },
    { q: "State of Nature Node ใน Decision Tree ใช้สัญลักษณ์ใด?", options: ["สามเหลี่ยม", "วงกลม", "สี่เหลี่ยม", "หกเหลี่ยม"], correct: 1, exp: "สัญลักษณ์วงกลมใช้แทน State of nature node [cite: 683, 686]" },
    { q: "Decision Node ใน Decision Tree ใช้สัญลักษณ์ใด?", options: ["สี่เหลี่ยม", "วงกลม", "กากบาท", "เส้นประ"], correct: 0, exp: "สัญลักษณ์สี่เหลี่ยมใช้แทน Decision node [cite: 680, 681]" },
    { q: "เกณฑ์ที่เลือกทางเลือกที่ 'เสียดาย' น้อยที่สุดคือ?", options: ["Maximax", "Maximin", "Minimax Regret", "Laplace"], correct: 2, exp: "Minimax Regret เลือกค่าเสียโอกาสที่น้อยที่สุดจากที่มากที่สุด [cite: 542]" },
    { q: "ปัจจัยใดที่มีผลต่อ ESL มากที่สุด?", options: ["สีของเครื่องจักร", "ยี่ห้อ", "ค่าซ่อมบำรุงที่เพิ่มขึ้น", "พนักงานขับ"], correct: 2, exp: "ค่าซ่อมบำรุง (AOC) ที่เพิ่มขึ้นจะทำให้เส้นต้นทุนรวมเริ่มวกกลับขึ้น [cite: 182]" },
    { q: "หาก MARR = 18% และ n = 10 ปี ค่า (A/P, 18%, 10) มีความสำคัญอย่างไร?", options: ["หาค่าใช้จ่ายรายปีจากเงินก้อน", "หาเงินก้อนจากรายปี", "หาค่าเสื่อมราคา", "หาดอกเบี้ยเงินฝาก"], correct: 0, exp: "ใช้แปลงเงินลงทุนปัจจุบันให้เป็นค่าเฉลี่ยรายปี [cite: 128]" },
    { q: "ในการวิเคราะห์ทดแทน 'Defender' หมายถึง?", options: ["เครื่องจักรใหม่", "เครื่องจักรเดิม", "บริษัทคู่แข่ง", "ธนาคาร"], correct: 1, exp: "Defender คือทรัพย์สินเดิมที่เรามีอยู่ [cite: 41]" },
    { q: "ในการวิเคราะห์ทดแทน 'Challenger' หมายถึง?", options: ["เครื่องจักรเดิม", "เครื่องจักรใหม่ที่จะนำมาแทน", "ลูกค้า", "ผู้จัดการ"], correct: 1, exp: "Challenger คือทรัพย์สินใหม่ที่นำเสนอเพื่อทดแทน [cite: 47]" },
    { q: "Inadmissible Action คือทางเลือกที่?", options: ["ดีที่สุด", "แย่ที่สุดในทุกเหตุการณ์", "ถูกครอบงำโดยทางเลือกอื่น", "มีโอกาสเกิดน้อย"], correct: 2, exp: "ทางเลือกที่ถูกครอบงำโดยทางเลือกอื่นที่ดีกว่าในทุกกรณี [cite: 769]" },
    { q: "ตัวอย่าง 7.8: รายรับลดลง 20% จาก 2,000 จะเหลือเท่าใด?", options: ["1,600", "1,800", "1,900", "1,500"], correct: 0, exp: "2,000 * 0.8 = 1,600 [cite: 919]" },
    { q: "วิธี Cash Flow Approach ไม่นำค่าใดมาคิดให้เป็นภาระของ Defender?", options: ["ค่าซ่อม", "ค่าแรง", "เงินลงทุนเริ่มแรก (P=0)", "มูลค่าซาก"], correct: 2, exp: "วิธีนี้ไม่คิดค่า P ของ Defender [cite: 137]" },
    { q: "หาก Marginal Cost ปีหน้า < EUAC เครื่องใหม่ ควรทำอย่างไร?", options: ["เปลี่ยนทันที", "ใช้ต่อไปอีกปี", "ขายทิ้ง", "จ้างผลิตแทน"], correct: 1, exp: "ถ้าต้นทุนส่วนเพิ่มยังต่ำกว่าค่าเฉลี่ยเครื่องใหม่ ควรใช้ต่อไป" },
    { q: "เหตุใดความก้าวหน้าทางเทคโนโลยีจึงทำให้ต้องเปลี่ยนเครื่องจักร?", options: ["ราคาถูกลง", "เครื่องเก่าล้าสมัยผลิตไม่ได้ตามสเปก", "พนักงานชอบของใหม่", "ลดภาษี"], correct: 1, exp: "เทคโนโลยีทำให้เกิดการล้าสมัย [cite: 11]" },
    { q: "หากเครื่องจักรถูกไฟไหม้จนซ่อมไม่ได้ จัดเป็นกรณีใด?", options: ["ล้าสมัย", "กฎหมายเปลี่ยน", "เหตุสุดวิสัย", "ความต้องการเพิ่ม"], correct: 2, exp: "ประสบเหตุสุดวิสัยอื่นๆ [cite: 13]" },
    { q: "เกณฑ์ Maximax เรียกอีกอย่างว่าอะไร?", options: ["เกณฑ์ผู้มองโลกแง่ดี", "เกณฑ์ผู้มองโลกแง่ร้าย", "เกณฑ์ประหยัด", "เกณฑ์ความเสี่ยง"], correct: 0, exp: "เป็นเกณฑ์ของคนที่หวังผลตอบแทนสูงสุดเสมอ [cite: 539]" },
    { q: "เกณฑ์ Maximin เรียกอีกอย่างว่าอะไร?", options: ["เกณฑ์ผู้มองโลกแง่ดี", "เกณฑ์ผู้มองโลกแง่ร้าย", "เกณฑ์ค่าเฉลี่ย", "เกณฑ์ความสวยงาม"], correct: 1, exp: "เป็นเกณฑ์ของคนที่ต้องการประกันกำไรขั้นต่ำที่สุด [cite: 541]" },
    { q: "EV ย่อมาจากอะไร?", options: ["Estimated Value", "Expected Value", "Extra Volume", "Earned Value"], correct: 1, exp: "ค่าคาดหวัง [cite: 607]" },
    { q: "EOL ย่อมาจากอะไร?", options: ["End Of Line", "Expected Opportunity Lost", "Estimated Output Level", "Equal Opportunity Law"], correct: 1, exp: "ค่าเสียโอกาสที่คาดหวัง [cite: 607]" },
    { q: "Sensitivity Analysis มักแสดงผลในรูปแบบใดเพื่อให้เข้าใจง่าย?", options: ["ตารางบันทึก", "กราฟเส้นหรือแมงมุม", "รูปวาด", "ไฟล์เสียง"], correct: 1, exp: "มักใช้กราฟแสดงความสัมพันธ์ของปัจจัย [cite: 832, 864]" },
    { q: "หาก Prob เศรษฐกิจดี = 0.4 และเศรษฐกิจปกติ = 0.4 ความน่าจะเป็นของเศรษฐกิจแย่คือ?", options: ["0.1", "0.2", "0.3", "0.4"], correct: 1, exp: "ผลรวมต้องเป็น 1.0 เสมอ (1 - 0.4 - 0.4 = 0.2)" },
    { q: "Opportunity Cost ของการเก็บเครื่องเก่าคืออะไร?", options: ["ราคาซื้อ", "มูลค่าตลาดที่เสียไปเพราะไม่ขาย", "กำไรสะสม", "เงินเดือนพนักงาน"], correct: 1, exp: "คือเงินที่เราไม่ได้จากการขายเครื่องเก่าออกไปในวันนี้ [cite: 33]" },
    { q: "หาก ESL = 3 ปี หมายความว่าอย่างไร?", options: ["ห้ามใช้เกิน 3 ปี", "ควรเปลี่ยนเครื่องใหม่ทุก 3 ปีเพื่อให้ต้นทุนเฉลี่ยต่ำสุด", "เครื่องจะพังในปีที่ 3", "ต้องซ่อมใหญ่ปีที่ 3"], correct: 1, exp: "เป็นระยะเวลาที่คุ้มค่าที่สุดในการใช้งาน [cite: 240]" },
    { q: "Marginal Cost ปีที่ 3 ของรถบรรทุกเก่าคือ $9,100 และ EUAC รถใหม่คือ $8,599 ควรเปลี่ยนเมื่อใด?", options: ["ทันที", "สิ้นปีที่ 2", "สิ้นปีที่ 3", "สิ้นปีที่ 4"], correct: 1, exp: "ควรเปลี่ยนเมื่อเริ่มต้นปีที่ต้นทุนเก่ามากกว่าค่าเฉลี่ยใหม่ [cite: 309]" },
    { q: "ปัจจัยใดไม่อยู่ภายใต้การควบคุม (External Factor)?", options: ["จำนวนพนักงาน", "ราคาเครื่องจักรในบริษัท", "กฎหมายสิ่งแวดล้อม", "เวลาทำงาน"], correct: 2, exp: "กฎหมายและสภาพเศรษฐกิจเป็นปัจจัยภายนอกที่ควบคุมไม่ได้ [cite: 487]" },
    { q: "Decision Making Under Certainty คือ?", options: ["ไม่รู้ผลลัพธ์", "รู้ผลลัพธ์แน่นอน", "รู้ความน่าจะเป็น", "รู้ชื่อผู้ขาย"], correct: 1, exp: "ตัดสินใจเมื่อทราบข้อมูลและเหตุการณ์ที่จะเกิดขึ้นแน่นอน [cite: 547]" },
    { q: "Hurwicz Criterion ใช้ค่าใดเป็นตัวถ่วงน้ำหนัก?", options: ["Alpha (ดัชนีมองโลกแง่ดี)", "Beta (ดอกเบี้ย)", "Sigma (ความเบี่ยงเบน)", "N (จำนวนปี)"], correct: 0, exp: "ใช้ Optimism Index (Alpha) [cite: 740]" },
    { q: "ในตัวอย่าง 7.6 การบรรจุหีบห่อ A3 ดีกว่า A4 ในทุกกรณี เราเรียก A4 ว่า?", options: ["Hero", "Inadmissible", "Winner", "Golden choice"], correct: 1, exp: "Action ที่ถูก Dominate จะถูกตัดทิ้ง [cite: 769]" },
    { q: "หากค่า PW-C ติดลบมาก หมายถึง?", options: ["กำไรมาก", "ขาดทุนมาก", "ต้นทุนรวมสูง", "ดอกเบี้ยต่ำ"], correct: 2, exp: "PW-C คือมูลค่าเทียบเท่ารายจ่ายปัจจุบัน ค่ามากแปลว่าจ่ายมาก" },
    { q: "การตัดสินใจแบบหมู่คณะ (Group Decision) มีข้อดีอย่างไร?", options: ["ตัดสินใจเร็ว", "ลดความรับผิดชอบ", "ได้ความเห็นหลากหลาย", "ประหยัดงบ"], correct: 2, exp: "มักเป็นการระดมสมองและลดความลำเอียงส่วนบุคคล [cite: 480]" },
    { q: "ตัวแปรตาม (Dependent Variable) ในวิศวกรรมการเงินมักเป็นค่าใด?", options: ["MARR", "NPV หรือ EUAC", "ปี", "ชื่อโครงการ"], correct: 1, exp: "เป็นผลลัพธ์ที่เปลี่ยนไปตามปัจจัยนำเข้า [cite: 510]" },
    { q: "รูเล็ตต์ (Roulette) เป็นตัวอย่างของสภาวะใด?", options: ["Risk", "Uncertainty", "Certainty", "Stability"], correct: 0, exp: "เป็นเหตุการณ์ที่มีโอกาสเกิดชัดเจน (ความเสี่ยง) [cite: 500]" },
    { q: "ตัวแบบเชิงขนาด (Iconic) คือ?", options: ["สูตรคำนวณ", "หุ่นจำลองย่อส่วน", "กราฟ", "โปรแกรมคอมพิวเตอร์"], correct: 1, exp: "โมเดลที่เลียนแบบรูปทรง [cite: 519]" },
    { q: "เกณฑ์ที่เลือกผลเฉลี่ยสูงสุดเมื่อไม่ทราบ Prob คือ?", options: ["Laplace", "Maximax", "Maximin", "Hurwicz"], correct: 0, exp: "Laplace เน้นค่าเฉลี่ยที่น้ำหนักเท่ากัน [cite: 746]" },
    { q: "สูตร Marginal Cost: (SV_n - SV_n+1) คือค่าใด?", options: ["ดอกเบี้ย", "ค่าดำเนินการ", "ค่าเสื่อมราคา", "กำไรสะสม"], correct: 2, exp: "คือส่วนต่างของมูลค่าซากที่ลดลงในแต่ละปี [cite: 290]" },
    { q: "ในรูปที่ 6.1 จุด ESL คือจุดตัดของเส้นใด?", options: ["กำไรกับขาดทุน", "ต้นทุนทรัพย์สินกับต้นทุนดำเนินงาน", "ภาษีกับดอกเบี้ย", "ราคาซื้อกับราคาขาย"], correct: 1, exp: "จุดที่เส้นสองเส้นสมดุลจนต้นทุนรวมต่ำที่สุด [cite: 182]" },
    { q: "การประเมินความอ่อนไหว (Sensitivity) ขั้นแรกคือ?", options: ["เขียนกราฟ", "เลือกปัจจัยที่แปรผันมากที่สุด", "กำหนดดอกเบี้ย", "ลาออก"], correct: 1, exp: "เลือกปัจจัย (Factor) ที่คาดว่าจะมีความแปรผันมากที่สุด [cite: 828]" },
    { q: "มูลค่าเทียบเท่ารายปี (AW) ของ Defender ในหน้า 7 คือเท่าใด?", options: ["$10,040", "$11,810", "$29,000", "$9,000"], correct: 0, exp: "คำนวณได้ $10,040 [cite: 46]" },
    { q: "หาก Challenger มีอายุ 40 ปี และ Defender มีอายุ 10 ปี วิธีเปรียบเทียบที่ยุติธรรมที่สุดคือ?", options: ["เปรียบเทียบค่า P", "เปรียบเทียบค่า F", "เปรียบเทียบค่า AW (รายปี)", "ดูแค่ราคาซื้อ"], correct: 2, exp: "การใช้มูลค่าเทียบเท่ารายปีช่วยเปรียบเทียบโครงการที่มีอายุต่างกันได้ [cite: 22]" },
    { q: "หัวใจสำคัญของบทที่ 6 คือการตัดสินใจว่าจะ...?", options: ["ขายบริษัททิ้ง", "เก็บของเก่าไว้ใช้หรือซื้อใหม่", "เพิ่มเงินเดือน", "ลดเวลาทำงาน"], correct: 1, exp: "การวิเคราะห์ทดแทนทรัพย์สิน (Replacement Analysis) [cite: 15]" }
];

let currentQuestionIndex = 0;
let score = 0;
let answered = false;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function initQuiz() {
    shuffle(questions);
    showQuestion();
}

function showQuestion() {
    answered = false;
    const question = questions[currentQuestionIndex];
    document.getElementById('question-number').innerText = `ข้อที่ ${currentQuestionIndex + 1} / ${questions.length}`;
    document.getElementById('question-text').innerText = question.q;
    document.getElementById('progress-bar').style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;
    document.getElementById('next-btn').classList.add('hidden');
    document.getElementById('feedback').classList.add('hidden');

    const optionsList = document.getElementById('options-list');
    optionsList.innerHTML = '';

    // สร้างตัวเลือกพร้อมการสลับช้อยส์
    let options = question.options.map((opt, index) => ({ text: opt, originalIndex: index }));
    shuffle(options);

    options.forEach(option => {
        const div = document.createElement('div');
        div.className = 'option';
        div.innerText = option.text;
        div.onclick = () => selectOption(div, option.originalIndex, question.correct);
        optionsList.appendChild(div);
    });
}

function selectOption(element, selectedIndex, correctIndex) {
    if (answered) return;
    answered = true;

    const allOptions = document.querySelectorAll('.option');
    if (selectedIndex === correctIndex) {
        element.classList.add('correct');
        score++;
        document.getElementById('current-score').innerText = `คะแนน: ${score}`;
        document.getElementById('feedback-message').innerText = "✅ ถูกต้อง!";
        document.getElementById('feedback-message').style.color = "var(--success)";
    } else {
        element.classList.add('wrong');
        document.getElementById('feedback-message').innerText = "❌ ผิด!";
        document.getElementById('feedback-message').style.color = "var(--danger)";
        // แสดงข้อที่ถูก
        allOptions.forEach(opt => {
            // ค้นหาข้อที่ถูกจากเนื้อหาข้างใน
            if (opt.innerText === questions[currentQuestionIndex].options[correctIndex]) {
                opt.classList.add('correct');
            }
        });
    }

    document.getElementById('explanation-text').innerText = questions[currentQuestionIndex].exp;
    document.getElementById('feedback').classList.remove('hidden');
    document.getElementById('next-btn').classList.remove('hidden');
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showFinalResult();
    }
}

function showFinalResult() {
    document.getElementById('result-modal').classList.remove('hidden');
    document.getElementById('final-score').innerText = score;
    const evaluation = document.getElementById('evaluation');
    const percent = (score / questions.length) * 100;

    if (percent >= 80) evaluation.innerText = "ยอดเยี่ยมมาก! คุณพร้อมสอบแล้ว";
    else if (percent >= 50) evaluation.innerText = "ทำได้ดี! ทบทวนข้อที่ผิดอีกนิดจะแม่นมาก";
    else evaluation.innerText = "ควรทบทวนเนื้อหาใน PDF อีกรอบนะครับ";
}

initQuiz();
