var message = $('textarea#message_box').val();
   var button = document.getElementById('btn');

   button.addEventListener('click',function(){
       console.log(message)
   });

