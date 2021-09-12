window.jQuery || document.write('<script src="//ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>');
document.addEventListener("DOMContentLoaded", function () {
    $(function () {
        var obj;
        var elem = "scroll-to-top";
        $("body").append('<div id="' + elem + '"></div>');
        obj = $("#" + elem);
        $(obj).css({
            "display": "none",
            "position": "fixed",
            "right": "20px",
            "bottom": "80px",
            "height": "30px",
            "width": "30px",
            "cursor": "pointer"
        });
        $(window).scroll(function () {
            if ($(this).scrollTop() > 20) {
                $(obj).fadeIn();
            } else {
                $(obj).fadeOut();
            }
        });
        $(obj).click(function () {
            $("body, html").stop(true).animate({scrollTop: 0}, 600);
            return false;
        });
    });
});