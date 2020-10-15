$(document).ready(() => {
    $('i').click(() => {
        $('nav').toggle();
    }),
    $('button').click(() => {
        $('.love').toggle();
        $('.content').toggle();
    })
})