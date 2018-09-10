/**
 * Created by dell on 9/9/2018.
 */
$('#monitor').html($(window).width());

$(window).resize(function() {
    var viewportWidth = $(window).width();
    $('#monitor').html(viewportWidth);
});