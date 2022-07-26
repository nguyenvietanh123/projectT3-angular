// -------------------------- header ---------------------------
$("#inpt_search ").on('focus', function() {
    $(this).parent('label').addClass('active');
});

$("#inpt_search ").on('blur', function() {
    if ($(this).val().length == 0)
        $(this).parent('label').removeClass('active');
});

$("#input_search ").on('focus', function() {
    $(this).parent('label').addClass('active');
});

$("#input_search ").on('blur', function() {
    if ($(this).val().length == 0)
        $(this).parent('label').removeClass('active');
});
$(document).on('click', '.toggle-password', function() {
    $(this).toggleClass("fas fa-eye-slash ");
    let input = $("#userPassword ");
    input.attr('type') === 'password' ? input.attr('type', 'text') : input.attr('type', 'password')
});
$(document).on('click', '.toggle-password2', function() {
    $(this).toggleClass("fas fa-eye-slash ");
    let input = $("#userPwd ");
    input.attr('type') === 'password' ? input.attr('type', 'text') : input.attr('type', 'password')
});
$(document).on('click', '.toggle-password3', function() {
    $(this).toggleClass("fas fa-eye-slash ");
    let input = $("#userPwd2 ");
    input.attr('type') === 'password' ? input.attr('type', 'text') : input.attr('type', 'password')
});