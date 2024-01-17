jQuery(document).ready(function(){

    $('.bn .images').slick({
        'nextArrow' : '.right',
        'prevArrow' : '.left',
        'autoplay' : true,
        'autoplaySpeed' : 2000,
    });

    $('.s4 .row4').slick({
        'nextArrow' : '.prev',
        'prevArrow' : '.next',
        'autoplay' : true,
        'autoplaySpeed' : 2000,
        'slidesToShow' : 4
    });

    $('.s5 .row5').slick({
        'nextArrow' : '.rt',
        'prevArrow' : '.lt',
        'autoplay' : true,
        'autoplaySpeed' : 2000,
        'slidesToShow' : 4
    });

    $('.s7 .row7').slick({
        'nextArrow' : '.pv',
        'prevArrow' : '.nt',
        'autoplay' : true,
        'autoplaySpeed' : 2000,
        'slidesToShow' : 2
    });
});