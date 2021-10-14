var change_theme = function () {
    //if (!$("body").hasClass('bg-dark text-white')) {
    //    $("body").addClass('bg-dark text-white');
    //    $(".navbar").removeClass("navbar-light bg-white text-dark");
    //    $(".navbar").addClass("navbar-dark bg-dark text-white");
    //}
    //else {
    //    $("body").removeClass('bg-dark text-white');
    //    $(".navbar").removeClass("navbar-dark bg-dark text-white");
    //    $(".navbar").addClass("navbar-light bg-white text-dark");
    //}

    if ($("link").attr("href") == "~/bootstrap/css/bootstrap.min.css") $("link").attr("href", "");
    else $("link").attr("href","~/bootstrap/css/bootstrap.min.css");
}
