// java -> String[] fruits = {"사과", ....};
let fruits = ["사과", "바나나", "배", "딸기", "메론", "망고", "키위"]; // JS에서의 배열선언법
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);

// splice
// 삭제, splice(시작인덱스, 갯수, 새로 추가)
// 원본을 수정함 ※ 사용에 주의
const 삭제아이템 = fruits.splice(3, 2, "구아바");
console.log(fruits); // 원본 수정됨
console.log(삭제아이템);

// slice
// 골라담기, slice(시작인덱스, 끝인덱스)
// 원본 보존
let colors = ["red", "blue", "yellow", "green", "white", "pink"];
const newColors = colors.slice(1, 4);
console.log(colors);
console.log(newColors);

// indexOf
const index = colors.indexOf("blue");
console.log(index);
console.log(colors.indexOf("black")); // 없으면 -1

// includes
const isIncludes = colors.includes("green");
console.log(isIncludes);
console.log(colors.includes("black"));

// forEach
// 배열에 사용하는 반복문
// forEach(아이템, 인덱스, 원본배열)
colors.forEach((color, index, array) => {
  console.log("첫번째 매개변수", color);
  console.log("두번째 매개변수", index);
  console.log("세번째 매개변수", array);
});

// 객체의 배열
const persons = [
  { name: "Michael", age: 19, gender: "male", job: "student" },
  { name: "John", age: 28, gender: "male", job: "engineer" },
  { name: "Ellen", age: 22, gender: "female", job: "programmer" },
  { name: "Sarah", age: 27, gender: "female", job: "lawyer" },
];
console.log(persons[0].name);
console.log(persons[1].job);

// Destructuring 구조분해할당
// 배열 또는 객체의 내부아이템을 분해해서 새로운 변수에 할당하는 간편한 방법
const [마이클, 존, 엘렌, 사라] = persons;
console.log(마이클);
const { name, age, gender, job } = 마이클;
console.log(name, age, gender, job);

// filter
// 조건에 맞는 데이터만 새로운 배열에 담는다.
// 특징 : 데이터의 그대로, 새로운 배열의 length는 달라질 수 있음
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const array1 = nums.filter((num) => num > 5);
console.log(array1);

// map
// 데이터를 조작하여 새로운 배열에 담는다
// 특징 : 데이터는 변경, 새로운 배열의 length는 반드시 동일
const array2 = nums.map((num) => num * 10);
console.log(array2);

const jobArray = persons.map((p) => p.job);
console.log(jobArray);

const femaleJobs = persons
  .filter((p) => p.gender == "female")
  .map((p) => p.job);
console.log(femaleJobs);
