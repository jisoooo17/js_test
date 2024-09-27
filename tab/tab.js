document.addEventListener("DOMContentLoaded", () => {


  // 버틍 0 누르면
  // 모든 버튼에 붙은 orange 클래스 제거 
  // 버튼 0에 orange클래스 추가
  // 모든 div에 붙은 show 클래스 제거
  // div 0에 show 클래스 추가

  // forEach 사용
  const tabBtn = document.querySelectorAll(".tab-button");
  const tabCont = document.querySelectorAll(".tab-content");

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




  // dataset 활용
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

});