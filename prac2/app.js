const mForm = document.querySelector("#main-form");
const loginId = document.querySelector("#login-id");
const loginPw = document.querySelector("#login-pw");
const greeting = document.querySelector("#greeting");
const clBtn = document.querySelector("#clBtn");


function showGreeting(username){
    greeting.classList.add("hidden");
    greeting.innerText = `Hello ${username}`;
}

function loginSubmit(e){
    //로그인 정보 변수에 담음
    let LOGIN_ID = loginId.value;
    let LOGIN_PW = loginPw.value;
    //form이 새로고침 되는것 막음
    e.preventDefault();
    
    //로그인 정보를 LS에 저장
    localStorage.setItem(LOGIN_ID,LOGIN_PW);
    //로그인 폼이 제출되면 display none으로 변경
    mForm.classList.add("hidden");

    showGreeting(LOGIN_ID);
    greeting.classList.remove("hidden");
    clBtn.classList.remove("hidden");
}

//입력된 id값을 로컬스토리지에서 가져옴
const USER_ID = localStorage.getItem(loginId.value)


if(localStorage.key(0) === null){
    mForm.classList.remove("hidden");
    mForm.addEventListener("submit", loginSubmit);

} else {
    mForm.addEventListener("submit", loginSubmit);
    showGreeting(USER_ID);
}
//클리어버튼 누르면 다시 form이 나오도록 설정
clBtn.addEventListener("click", function(){
    this.classList.add("hidden");
    mForm.classList.remove("hidden");
    loginSubmit();
})

