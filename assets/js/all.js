$(document).ready(function () {
    $('.reply').click(function (e) {
        e.preventDefault();
        $('.content__assignment__user').toggleClass('active');
        $('.reply__content').toggleClass('active');
    });

    $('.verified').click(function (e) {
        e.preventDefault();
        $('.verified__btn').toggleClass('active');
        $('.verified .material-icons').toggleClass('active');
    });
});