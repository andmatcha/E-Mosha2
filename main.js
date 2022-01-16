const swiper = new Swiper(".swiper", {
    pagination: {
        el: ".swiper-pagination"
    },    
    speed: 1500,// 切り替え時の速度
    autoplay:{
      delay: 1000,// スライドが切り替わるまでの時間
    },
});
