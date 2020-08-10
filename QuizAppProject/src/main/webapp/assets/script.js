// data
const questions = [
    {
        id: 1,
        text: "Grand Central Terminal, Park Avenue, New York is the world's",
        options: [
            "A.largest railway station",
            "B.highest railway station",
            "C.longest railway station",
            "D.None of the above",
        ],
        correctAns: 0
    },
    {
        id: 2,
        text: "Entomology is the science that studies",
        options: [
            "A.Behavior of human beings",
            "B.Insects",
            "C.The origin and history of technical and scientific terms",
            "D.The formation of rocks",
        ],
        correctAns: 1
    },
    {
        id: 3,
        text: "For which of the following disciplines is Nobel Prize awarded?",
        options: [
            "A.Physics and Chemistry",
            "B.Physiology or Medicine",
            "C.Literature, Peace and Economics",
            "D.All of the above"
        ],
        correctAns: 3
    },
    {
        id: 4,
        text: "Hitler party which came into power in 1933 is known as",
        options: [
            "A.Labour Party",
            "B.Nazi Party",
            "C.Ku-Klux-Klan",
            "D.Democratic Party"
        ],
        correctAns: 1
    },
    {
        id: 5,
        text: "Galileo was an Italian astronomer who",
        options: [
            "A.developed the telescope",
            "B.discovered four satellites of Jupiter",
            "C.discovered that the movement of pendulum produces a regular time measurement",
            "D.All of the above"
        ],
        correctAns: 3
    },
    {
        id: 6,
        text: "Exposure to sunlight helps a person improve his health because",
        options: [
            "A.the infrared light kills bacteria in the body",
            "B.resistance power increases",
            "C.the pigment cells in the skin get stimulated and produce a healthy tan",
            "D.the ultraviolet rays convert skin oil into Vitamin D"
        ],
        correctAns: 3
    },
    {
        id: 7,
        text: "Dumping is",
        options: [
            "A.selling of goods abroad at a price well below the production cost at the home market price",
            "B.the process by which the supply of a manufacture's product remains low in the domestic market, which batches him better price",
            "C.prohibited by regulations of GATT",
            "D.All of the above"
        ],
        correctAns: 3
    },
    {
        id: 8,
        text: "ISP stands for:",
        options: [
            "A.Internet Survey Period",
            "B.Integrated Service Provider",
            "C.Internet Security Protocol",
            "D.Internet Service Provider"
        ],
        correctAns: 3
    },
    {
        id: 9,
        text: "Which company created the most used networking software in the 1980's",
        options: [
            "A.Microsoft",
            "B.Sun",
            "C.IBM",
            "D.Novell"
        ],
        correctAns: 1
    },
    {
        id: 10,
        text: " Which of the following operating systems is produced by IBM?",
        options: [
            "A.OS-2",
            "B.Windows",
            "C.DOS",
            "D.UNIX"
        ],
        correctAns: 0
    },
    {
        id: 11,
        text: "'.JPG' extension refers usually to what kind of file?",
        options: [
            "A.System file",
            "B.Animation/movie file",
            "C.MS Encarta document",
            "D.Image file",
        ],
        correctAns: 3
    },
    {
        id: 12,
        text: "What was the first ARPANET message?",
        options: [
            "A.lo",
            "B.hello world",
            "C.mary had a little lamb",
            "D.cyberspace, the final frontier",
        ],
        correctAns: 0
    },
    {
        id: 13,
        text: "Which of the following anti-satellite missile is tested by India on 27 March, 2019?",
        options: [
            "A.Mission Antriksh",
            "B.Mission Gagan",
            "C.Mission Shakti",
            "D.Mission Destruction",
        ],
        correctAns: 2
    },
    {
        id: 14,
        text: "Exposure to which light may accelerate aging?",
        options: [
            "A.Blue light",
            "B.Red Light",
            "C.Yellow Light",
            "D.None of the above",
        ],
        correctAns: 0
    },
    {
        id: 15,
        text: "In 2019, Nobel Prize in Chemistry is given for which development?",
        options: [
            "A.For the development of Lithium-ion batteries.",
            "B.To develop protein.",
            "C.For developing cryoelectron microscopy",
            "D.None of the above",
        ],
        correctAns: 0
    },
    {
        id: 16,
        text: "Which of the following statements is/are correct regarding bipolar disorder?",
        options: [
            "A.It is a mental health condition.",
            "B.Patients with this disorder undergo intense mood shifts.",
            "C.Patients with this disorder faces difficulties in planning and decision making.",
            "D.All the above are correct.",
        ],
        correctAns: 3
    },
    {
        id: 17,
        text: "Which among the following country first reached the ‘Dark Side’ of the Moon?",
        options: [
            "A.India",
            "B.USA",
            "C.China",
            "D.Russia",
        ],
        correctAns: 2
    },
    {
        id: 18,
        text: "Which country has developed the world-first floating nuclear plant?",
        options: [
            "A.India",
            "B.China",
            "C.USA",
            "D.Russia",
        ],
        correctAns: 3
    },
    {
        id: 19,
        text: "Which UN organisation became the first to accept a donation in cryptocurrencies?",
        options: [
            "A.IFAD",
            "B.UNICEF",
            "C.Both A and B",
            "D.Neither A and B",
        ],
        correctAns: 1
    },
    {
        id: 20,
        text: "The computer malware that disguises users by representing itself as legitimate software/program is known as …",
        options: [
            "A.Virus",
            "B.Worms",
            "C.Trojans",
            "D.Spyware",
        ],
        correctAns: 2 
    },
];


var score = 0;
var currentQuestionNumber = 0;
var q = null;
var guessedAnswer = null;

// Needs to be changed
var submitPath = "file:///C:/Users/narya4/eclipse-workspace/QuizAppProject/src/main/webapp/index.html";



// functions 
showQuestion();

function showQuestion() {
    q = questions[currentQuestionNumber];
    document.getElementById("qno").innerHTML = "Question " + q.id;
    document.getElementById("qtext").innerHTML = q.text;
    document.getElementById("op1").innerHTML = " " + q.options[0];
    document.getElementById("op2").innerHTML = " " + q.options[1];
    document.getElementById("op3").innerHTML = " " + q.options[2];
    document.getElementById("op4").innerHTML = " " + q.options[3];
    document.getElementById("button").disabled = true;
    document.getElementById("button").style.cursor = "not-allowed";
}

function onChoose(optionNo) {
    document.getElementById("button").disabled = false;
    document.getElementById("button").style.cursor = "pointer";
    guessedAnswer = optionNo - 1;
}

function nextQuestion() {
    if(guessedAnswer == q.correctAns) {
        score += 1;
    }
    currentQuestionNumber += 1;
    if (currentQuestionNumber == questions.length-1) {
        document.getElementById("button").innerHTML = "Submit";
    }
    if(currentQuestionNumber == questions.length) {
        alert("Test submitted successfully.\nMarks scored "+score+" out of "+ questions.length);
        window.location.href = submitPath;
    }
    showQuestion();
    document.querySelector('input[type=radio]:checked').checked = false;
}
