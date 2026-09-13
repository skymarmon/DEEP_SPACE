const game = document.getElementById("game");

game.innerHTML = `
    <div id="logoScreen">
        <img src="images/logo/image.png" alt="Game Logo">
    </div>
`;

const logoScreen = document.getElementById("logoScreen");

// 로고 화면 디자인
logoScreen.style.width = "100%";
logoScreen.style.height = "100%";
logoScreen.style.display = "flex";
logoScreen.style.justifyContent = "center";
logoScreen.style.alignItems = "center";
logoScreen.style.backgroundColor = "black";

const logo = logoScreen.querySelector("img");

logo.style.maxWidth = "80%";
logo.style.maxHeight = "80%";


// 화면을 클릭하면 로비 실행
logoScreen.addEventListener("click", function () {

    // 로고 화면 제거
    game.innerHTML = "";

    // lobby.js 실행
    const script = document.createElement("script");
    script.src = "script/lobby.js";

    document.body.appendChild(script);
});
