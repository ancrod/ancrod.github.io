$(document).ready(function() {
    $('.app').each(function (i, v) {

        $(v).mouseenter(function () {
            $('#main_splash').hide();
            // Product splash
            var targetSplash = $('.app_splash')[i];
            $(targetSplash)
              .clone()
              .show()
              .insertBefore('#main_splash');
            // Arrow
            var targetArrow = $('.arrow')[i];
            $(targetArrow).addClass('active_arrow');
        });

        $(v).mouseleave(function () {
            $('#splash_holder > .app_splash').remove();
            $('#main_splash').show();
            $('.active_arrow').removeClass('active_arrow');
        });
    });
});