$(function () {
    $('#download').mouseenter(function () {
        $('.nav .qrCode').show();
    });
    $('.nav .qrCode').mouseleave(function () {
        $(this).hide();
    });
});