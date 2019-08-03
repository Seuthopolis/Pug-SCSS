document.addEventListener('DOMContentLoaded', function () {
    //Scroll effects
    let scroll_start = 0;
    let transmutation = $('#transmutation');
    let offset = transmutation.offset();
    if (transmutation.length) {
        $(document).scroll(function() {
            scroll_start = $(this).scrollTop();
            if (scroll_start > offset.top) {
                $(".navbar-default").css('background-color', 'black');
            } else {
                $('.navbar-default').css('background-color', '#DFDFDF');
            }
        });
    }

    //Language selector
    $('.selecting-lang').click(function() {
        let chosenLang = $(this).text();
        let currentLang = $('.current-lang').text();
        $('.current-lang').text(chosenLang);
        $(this).text(currentLang);
        $('.lang-dropdown').hide();
    });

    $('.current-lang').on('tap click', function() {
        $('.lang-dropdown').toggle();
    });

});