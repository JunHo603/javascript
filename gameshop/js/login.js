const urlLogin = "http://localhost:8080/user/login";
let userId = "";
let password = "";

document.querySelector("#userId").addEventListener("change", (e) => {
  console.log(e.target.value);
  userId = e.target.value;
});
document.querySelector("#password").addEventListener("change", (e) => {
  console.log(e.target.value);
  password = e.target.value;
});

document.querySelector(".login_btn").addEventListener("click", () => {
  const data = {
    userId: userId,
    password: password,
  };
  axios
    .post(urlLogin, data, { withCredentials: true })
    .then((response) => {
      console.log("데이터 : ", response);
      sessionCurrent();
    })
    .catch((error) => {
      console.log("에러 발생 : ", error);
    });
});

function sessionCurrent() {
  axios
    .get("http://localhost:8080/user/current", { withCredentials: true })
    .then((response) => {
      if (response.status == 200) {
        document.querySelector(".login-box").classList.add("hidden");
        document.querySelector(".user-box").classList.remove("hidden");
        document.querySelector(".user-box p").textContent =
          response.date + "님 환영합니다";
      }
    })
    .catch((error) => {
      console.log("에러발생 : ", error);
    });
}

//js 파일이 로드될때 호출됨
sessionCurrent();
