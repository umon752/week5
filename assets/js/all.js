$(document).ready(function () {
    $('.assignment__content__user--replyToggle').click(function (e) {
        e.preventDefault();
        $('.assignment__content__user').toggleClass('active');
        $('.reply__content').toggleClass('active');
    });

    $('.dropdown').click(function (e) {
        e.preventDefault();
        $('.dropdown__btn').toggleClass('active');
        $('.dropdown .material-icons').toggleClass('active');
    });
});