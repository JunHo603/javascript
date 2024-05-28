const url = "http://localhost:8080/products";

/*
    * Promise
    1 - RestAPI 송신
    2 - wait
    3 - JSON -> 실제객체
    4 - wait
    5 - 실제 Data 획득
*/

/*
then() -> axios.get() 뒤에 할일을 처리 
ex) axios.get(url).then(할일).then(할일).catch(에러처리) 
*/

axios
  .get(url)
  .then((response) => {
    console.log("응답 Response : ", response);
    displayProducts(response.data);
  })
  .catch((error) => {
    console.log("에러발생 : ", error);
  });

function displayProducts(gameData) {
  console.log(gameData.length);
  if (gameData.length > 0) {
    const content = document.querySelector(".content");
    gameData.forEach((data) => {
      const game = document.createElement("div");
      game.classList.add("game");
      const img = document.createElement("img");
      img.classList.add("image");
      img.src = data.image;
      game.appendChild(img);
      const title = document.createElement("p");
      const genre = document.createElement("p");
      const price = document.createElement("p");
      title.textContent = "게임 타이틀 : " + data.title;
      genre.textContent = "게임 장르 : " + data.genre;
      price.textContent = "게임 가격 : " + data.price + "원";
      game.appendChild(title);
      game.appendChild(genre);
      game.appendChild(price);
      content.appendChild(game);
    });
  }
}
