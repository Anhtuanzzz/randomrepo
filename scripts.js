$(document).ready(() => {
    $('#nav').click(() => {
        $(this).toggleClass('fa-bars');
        $(this).toggleClass('fa-times');
        $('nav').slideToggle();
    }),
    $('button').click(() => {
        $('.love').fadeToggle();
        $('.content').fadeToggle();
    })
})