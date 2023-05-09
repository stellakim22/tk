$(document).ready(function(){

    $(window).scroll(function(){
        const sct =$(window).scrollTop();
        console.log(sct);

        const sec2 = $('.sec2').offset().top;

        // 스크롤탑값이 섹션2의 상단값과 같으면 네브메뉴가 페이드인 되도록  처리

        if(sct >= sec2){

            $('.header').fadeIn();
            
        }else{
            $('.header').fadeOut();
        }

        const windowWidth=$(window).width();
        if(windowWidth>=1280){
                // sticky 스크롤이벤트

        // 1 = a * 7354 + b
        // 0 = a * 8178 + b

        // a = -1/824,b = 4089/412

        const z = -1/824 *sct + 4089/412;
        $('.card-box').eq(0).css({opacity : z});


        // 1 = a * 7354 + b
        // 0.7 = a * 8178 + b
   

        // a = -3/8240,b = 15151/4120
      

        const s= -3/8240 *sct + 15151/4120;
       
        $('.card-box').eq(0).css({transform : `scale(${s})` });



        // 02


        // 1 = a * 8575 + b
        // 0 = a * 9388 + b 

        // a = -1/813,b = 9388/813
        // a = -1/2710,b = 2257/542



        const k = -1/813 *sct + 9388/813;
        $('.card-box').eq(1).css({opacity : k});
        const i= -1/2710 *sct + 2257/542;
       
        $('.card-box').eq(1).css({transform : `scale(${i})` });

        

        // 03

        // 1 = a * 10170 + b
        // // 0 = a * 11259 +b
        // a = -1/1089,b = 1251/121
        // a = -1/3630,b = 460/121


       



        const a = -1/1089 *sct + 1251/121;
        $('.card-box').eq(2).css({opacity : a});
        const b= -1/3630 *sct + 460/121;
       
        $('.card-box').eq(2).css({transform : `scale(${b})` });
            

        }else{

        }




    



     




    
    });

    $('.btn li').mouseenter(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active')

        const result = $(this).attr('data-alt');
        // attr 속성을 가져오거나 추가해주느것
        $('.tabs div').removeClass('active');
        $(`#${result}`).addClass('active');



    });

    var swiper = new Swiper(".mySwiper", {
      
        freeMode: true,
        loop:true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints:{
            // 반응형 사이즈로 적용해주기
            1200:{
              slidesPerView:3,
        
              spaceBetween:10,
        
              slidesPerGroup:3,
        
            },
            960:{
              slidesPerView:2,
        
              spaceBetween:10,
        
              slidesPerGroup:2,
        
              
            },
            760:{
              slidesPerView:1,
        
              spaceBetween:0,
        
              slidesPerGroup:1,
        
            }
          }

      });

      $('.menu').click(function(){

        $(this).toggleClass('on');
        $('.tab-inner').toggleClass('on');

        





      });


    
      



   


     

        


});

   