document.addEventListener("DOMContentLoaded", () => {


  /* ------------------- Tab ------------------ */
  // forEach 사용 ver
  // const tabBtn = document.querySelectorAll(".tab-button");
  // const tabCont = document.querySelectorAll(".tab-content");

  // tabBtn.forEach((item, index) => {
  //   item.addEventListener("click", function(){
  //     tabBtn.forEach(btn => {
  //       btn.classList.remove("orange")
  //     });
      
  //     tabCont.forEach(cont => {
  //       cont.classList.remove("show")
  //     });

  //     item.classList.add("orange");
  //     tabCont[index].classList.add("show")
  //   });
  // });

  
  // dataset 활용 ver
  const tabBtn = document.querySelectorAll(".tab-button");
  const tabCont = document.querySelectorAll(".tab-content");

  document.querySelector(".list").addEventListener("click", function(e){
    openTab(e.target.dataset.id);
    console.log(e.target.dataset.id)
  });

  function openTab(index) {
    tabBtn.forEach((btn) => {
      btn.classList.remove("orange");
    });

    tabCont.forEach((cont) => {
      cont.classList.remove("show");
    });

    // index를 사용하여 올바른 탭과 콘텐츠에 클래스 추가
    tabBtn[index].classList.add("orange");
    tabCont[index].classList.add("show");
  }

  /* ------------------- Array & Object ------------------ */
  let car = ["소나타", 50000, "white"];
  car[3]= "할인"

  let car2 = {name: "소나타", price: 50000};
  car2.price = 9000;
  // car2["name"] // []안에 변수 넣기 가능 
  // car2.name // []안에 변수 넣기 불가

  /*
    - array는 순서 있음
    - 그래서 정렬 가능 & 중간에 자르기 가능 & 자료검색 추가 가능

    - object는 순서 없음
    ** 대용량 데이터의 경우에는 object가 관리 쉬움(-> 순서 안외우고 이름 기억하면 되니까)
  */

  // 데이터 바인딩 
  document.querySelector(".car-title").innerHTML = car2.name;
  document.querySelector(".car-price").innerHTML = car2.price;


  // 복합 자료형 데이터 바인딩
  let car3 = {
    name: "소나타",
    price: [50000, 3000, 4000]
  }
  document.querySelector(".car-price").innerHTML = car3.price[0]


  // select 인풋
  document.querySelectorAll(".form-select")[0].addEventListener("change", function(e){
    // let value = document.querySelectorAll(".form-select")[0].value;
    let value = e.currentTarget.value; // 이벤트 핸들러 할당된 요소
    let sizeOpt = document.querySelectorAll(".form-select")[1];
    let pants = [28, 29, 30];
    let shirts = [95, 100, 105];

    if(value == "셔츠"){ // 
      sizeOpt.classList.remove("form-hide");
      sizeOpt.innerHTML = "";
      shirts.forEach((item) => {
        sizeOpt.insertAdjacentHTML("beforeend", `<option>${item}</option>`)
      });
    } else if (value == "모자") {
      sizeOpt.classList.add("form-hide");
    } else if (value == "바지"){
      sizeOpt.classList.remove("form-hide");
      sizeOpt.innerHTML = "";

      pants.forEach((item) => {
        sizeOpt.insertAdjacentHTML("beforeend", `<option>${item}</option>`)
      });
      // let pants = `<option>28</option> 
      // <option>30</option>`;
      // sizeOpt.innerHTML = "";
      // sizeOpt.insertAdjacentHTML("beforeend", pants);
    }
  });

  //obj 반복문 - for in
  let obj = {name: "kim", age: 20}
  for(let key in obj){
    console.log(obj[key])
  }


  /* ------------------- HTML 생성 ------------------ */
  // 방법 1
  let a = document.createElement("p");
  a.innerHTML = '안녕';
  document.querySelector("#test").appendChild(a);

  // 방법 2
  let test2 = "<p>안녕하세요</p>";
  document.querySelector("#test").insertAdjacentHTML("beforeend", test2);

  // select option 추가

});