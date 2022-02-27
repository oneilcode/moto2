$(document).ready(function () {

   //menu-burger

   $(".menu-mobile").click(function () {
      $(this).toggleClass("active");
      $('.menu__list').slideToggle(300, function () {
         if ($(this).css('display') === "none") {
            // $(this).removeAttr('style');
         }
      });
   });



   //video
   $('.click-for-video').click(function () {
      this.style.display = 'none';
      $('div.youtube').css('display', 'block');
      $('iframe.youtube').prop('src', 'https://www.youtube.com/embed/dQw4w9WgXcQ?;autoplay=1&;controls=0&;showinfo=0');
   })



   //slider
   $('.center').slick({
      infinite: true,
      dots: true,
      arrows: false,
      swipe: true,
      autoplay: true,
      dotsClass: 'slick-dots',
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [{
            breakpoint: 768,
            settings: {
               dots: false,
               centerMode: true,
               centerPadding: '40px',
               slidesToShow: 2,
               slidesToScroll: 1,
            }
         },
         {
            breakpoint: 480,
            settings: {
               arrows: false,
               centerMode: true,
               centerPadding: '40px',
               slidesToShow: 1,
               slidesToScroll: 1,
            }
         }
      ]
   });

})




// плавный аккардион

const accordeon = () => {
   const chItems = document.querySelectorAll('.questions__item');


   const tabsClose = () => {
      chItems.forEach((el) => {
         el.querySelector('.questions__name').classList.remove('active'); //удаляем у элемента названия класс active
         el.querySelector('.questions__description').classList.remove('open'); //удаляем у элемента класс open
         el.querySelector('.questions__description').classList.remove('active'); //удаляем у элемента описания класс active
         el.querySelector('.questions__description').style.height = ''; //высоту делаем пустой
      });
   };
   tabsClose();


   chItems.forEach(item => {
      const chButton = item.querySelector('.questions__name');
      const chContent = item.querySelector('.questions__description');


      chButton.addEventListener('click', () => {
         if (chContent.classList.contains('open')) {
            chContent.style.height = ''
         } else {
            tabsClose();
            chContent.style.height = chContent.scrollHeight + 'px'
         }

         chButton.classList.toggle('active');
         chContent.classList.toggle('open');

      })
   })
}

accordeon()



lightGallery(document.getElementById('lightgallery'), {
   plugins: [lgZoom, lgThumbnail],
   licenseKey: 'your_license_key',
   speed: 500

});




/* MODAL WINDOW */

const btn = document.querySelectorAll('.btn-book');
const modal = document.getElementById('modal-wrapper');
const btnClose = document.querySelector('.btn-close');

btn.forEach(function (item) {
   item.addEventListener('click', () => {
      modal.classList.add('active');
   });
})


btnClose.addEventListener('click', function () {
   modal.classList.remove('active');
});

modal.addEventListener('click', () => {
   modal.classList.remove('active');
})

modal.querySelector('.modal-window').addEventListener('click', function (e) {
   e.stopPropagation();
})