$(document).ready(function () {
    $('.reply').click(function (e) {
        e.preventDefault();
        $('.reply__content').toggleClass('active');
    });

    $('.verified').click(function (e) {
        e.preventDefault();
        $('.verified__btn').toggleClass('active');
        $('.verified .material-icons').toggleClass('active');
    });
});