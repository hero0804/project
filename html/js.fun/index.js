$('.menu-btn').on('click', function(e) {
    e.preventDefault();
    $('.menu').toggleClass('menu_active');
})

$('.menu-button').on('click', function(e) {
    e.preventDefault();
    $('.slide').toggleClass('slide_active');
   })

   var message = $('textarea#message_box').val();
   var button = document.getElementById('btn');

   button.addEventListener('click',function(){
       console.log(message)
   });