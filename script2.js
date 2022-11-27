let qns = [
    {qns : "1,4,9,16,....?", ans : "25"},
    {qns : "8 apples are there, you take 4 away and then you return 1 apple. How many apples do you have?", ans: "3", hint:"3"},
    {qns : "2, 3, 5, 8, 13…?", ans: "21"},
    {qns : "12/6+2*4", ans: "10"},
    {qns : "If there are 50 ball and you take away 8, how many do you have?", ans: "8"},
    {qns : "The perimeter of a rectangular pool is 56 meters. If the length of the pool is 16 meters, calculate its width.", ans: "12"},
    {qns : "If a mother has seven sons, and each son has a sister, how many children does she have?", ans: "8"},
    {qns : "(3^2 - 2^3)^15 = ?", ans: "1"},
    {qns : "If you multiply this number by any other number, the answer will always be the same. What is the number?", ans: "0"},
    {qns : "7-7/7+7*7-7", ans: "48"},
    {qns : "2=5 , 5=26 , 8=65 , 10=? ", ans: "101"},
    {qns : "if 8(x-6)=0, then find x.", ans: "6"},
    {qns : "A+B=12 , A-B=4 , A/B = ?", ans: "2"},
    {qns : "When Josh was 8, his brother was half his age. Now that Josh is 14, how old is his brother?", ans: "10"},
    {qns : "112=162 , 248=298 , 175=225 , 190=?", ans: "240"},
    {qns : "4,25=7 , 9,81=12 , 16,36=10 , 121,49=?", ans: "18"},
    {qns : "2684,6842,8426,?", ans: "4268"},
    {qns : "234*123*26*457*0*835", ans: "0 "},
    {qns : "In two years, Tom will be twice as old as he was five years ago. How old is Tom?", ans: "12"},
    {qns : "A=3 , B=5 , C=6 , B+C/A*B-C=?", ans: "9"},
    {qns : "How many days are there in 4 years?", ans: "1461"},
    {qns : "8=17 , 22=45 , 15=31 , 20=?", ans: "41"},
    {qns : "9-15-21-27 , 11-18-25-32 , 12-20-?-36", ans: "28"},
    {qns : "A=2 , B=8 , C=10 , D=4 , A+C*B/D+C-A*B", ans: "16"},
    {qns : "It comes after 15 and is less than 20, and is the product of four times 4. What is it?", ans: "16"},
    {qns : "6,5=33 , 7,3=24 , 10,5=53 , 8,3=? ", ans: "27"},
    {qns : "534=423 , 968=857 , 896=785 , 271=?", ans: "160"},
    {qns : "1=5 , 2=10 , 3=15 , 4=20 , 5=?", ans: "1"},
    {qns : "if a-25+3*24=0, find a.", ans: "1"},
    {qns : "It is a 3 digit number less than 130; if you add the digits in the ones and hundreds place, you get the tens number. What is the number?", ans: "121"},
]


let i = 0;

const submit = document.querySelector(".enter");

submit.addEventListener("click", (e) => {

    if(i > qns.length - 1){
        swal({
            title: "good job",
            text : "all levels completed",
            icon: "success"
        })
        return;
    }

    const answer = document.querySelector(".anstext");
    
    if(answer.value == "") {
        swal({
            title: "",
            text : "enter something",
            icon: "error"
        })
    }
    

    if(answer.value === qns[i].ans) {
        swal({
            title: "good job",
            text : "level completed",
            icon: "success"
        })
        i++;
        const qn = document.querySelector(".qn")
        const levelno = document.querySelector(".levelno")

        levelno.textContent = "LEVEL " + eval(i + 1);
        answer.value = ""
        qn.textContent = qns[i].qns;
    }else {
        swal({
            title: "oops",
            color: '#ffffff',
            text : "Wrong answer, Try again!",
            icon: "error"
        })
        document.querySelector(".swal-modal").style.backgroundImage = "linear-gradient(to right, rgb(118, 99, 196) , rgb(192, 200, 248))"
        // $(".swal2-modal").css('background-color', 'blue');//Optional changes the color of the sweetalert 
        // $(".swal2-container.in").css('background-color', 'rgba(43, 165, 137, 0.45)');
        answer.value = ""
    }

})


//PLAY
function level()
{
    window.location = "level.html";
}


//BACK-PLAY
function backplay() 
{
    window.location = "index.html";
}


//BACK-GAME
function level()
{
    window.location = "level.html";
}


//LEVEL1
function level1()
{
    window.location  = "game.html";
}


//ABOUT
function about()
{
    window.location = "about.html";
}

//ABOUT-BACK
function aboutback()
{
    window.location = "index.html";
}

//CONTACT
function contact()
{
    window.location = "contact.html";
}

//CONTACT-BACK
function contactback()
{
    window.location = "index.html";
}

//FOLLOW
function follow()
{
    window.location = "follow.html";
}

//FOLLOW-BACK
function followback()
{
    window.location = "index.html";
}


