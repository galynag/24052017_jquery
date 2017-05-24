$(document).ready(function() {

});
var masToast = {
    'className' : 'toast-message',
    'text' : 'I\'m toast',
    'counter' : 0,
    'toastF' : function(color,duration) {
            $('.toast-messages').append('<div id="message'+this.counter+'" class="'+masToast.className+'">'+masToast.text+'</div>');
            $(masToast.className).css ({
                'background' : color,
            })
            $('#message'+this.counter).slideDown(1000);
            $('#message'+(this.counter-1)).hide(8000);
            $('#message'+(this.counter-5)).remove();
            this.counter++;
        // $('.toast-messages').append('<div  class="'+masToast.className+'">'+masToast.text+'</div>');
        // $(masToast.className).css ({
        //     'background' : color,
        // })
        // $(masToast.className).slideDown(1000);
        // setTimeout(function() {
        //     $(masToast.className).hide(8000);
        // }, 2000);
        // // $('#message'+(this.counter-5)).remove();
        // // this.counter++;

        }
    }

$('.toast').on('click', function(){ masToast.toastF('red',2000)});
