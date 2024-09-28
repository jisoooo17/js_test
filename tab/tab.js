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


  /*
    - array는 순서 있음
    - 그래서 정렬 가능 & 중간에 자르기 가능 & 자료검색 추가 가능

    - object는 순서 없음
    ** 대용량 데이터의 경우에는 object가 관리 쉬움(-> 순서 안외우고 이름 기억하면 되니까)
  */

  document.querySelector(".prod").innerHTML = car2.name;
  document.querySelector(".price").innerHTML = car2.price;
});