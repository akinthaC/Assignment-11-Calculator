$(document).ready(function() {
    $('input').on('click', function () {
        let buttonId = $(this).attr('id');
        let buttonText = $(this).val();
        let display = $('#display');



        if (buttonId === 'AC'){
            display.val(null);

        }else if(buttonId === 'DE'){
            display.val(display.val().slice(0, -1));

        }else if(buttonId === '='){
            try {
                display.val(eval(display.val()));
            } catch (error) {
                display.val("Error");
            }

        } else if (buttonText === '%') {
            try {
                display.val(eval(display.val()) / 100);
            } catch (error) {
                display.val("Error");
            }

        }else {
            display.val(display.val() + buttonText);
        }


    });
});
