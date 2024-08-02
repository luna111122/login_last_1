
document.addEventListener('DOMContentLoaded', () => {
    const sec = document.querySelector(".secret");
    const loginButton = document.querySelector(".loginbutton");

    sec.addEventListener('input', () => {
        if (sec.value.length >= 8) {
            loginButton.style.backgroundColor = "#6979e3";
        } else {
            loginButton.style.backgroundColor = "#BBD4FF;"; // 초기 상태로 되돌리기
        }
    });
});