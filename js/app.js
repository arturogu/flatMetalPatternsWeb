$detect_page = false;
$click_counter = 0;
$click_counter_2 = 0;
$first_click = 0;

/* -----------
 SELECT OPTIONS METODO 90
 -------------------*/

$insu1 = '<option value="1">1"</option>';
$insu2 = '<option value="1 1/2">1 1/2"</option>';
$insu3 = '<option value="2">2"</option>';
$insu4 = '<option value="2 1/2">2 1/2"</option>';
$insu5 = '<option value="3">3"</option>';
$insu6 = '<option value="3 1/2">3 1/2"</option>';
$insu7 = '<option value="4">4"</option>';
$insu8 = '<option value="4 1/2">4 1/2"</option>';
$insu9 = '<option value="5">5"</option>';
$insu10 = '<option value="5 1/2">5 1/2"</option>';
$insu11 = '<option value="6">6"</option>';









$pipa1_2 = '<option value="1/2">1/2"</option>';
$pipa3_4 = '<option value="3/4">3/4"</option>';
$pipa1 = '<option value="1">1"</option>';
$pipa1_1_4 = '<option value="1 1/4">1 1/4"</option>';
$pipa1_1_2 = '<option value="1 1/2">1 1/2"</option>';
$pipa2 = '<option value="2">2"</option>';
$pipa2h = '<option value="2 1/2">2 1/2"</option>';
$pipa3 = '<option value="3">3"</option>';
$pipa3h = '<option value="3 1/2">3 1/2"</option>';
$pipa4 = '<option value="4">4"</option>';
$pipa4h = '<option value="4 1/2">4 1/2"</option>';
$pipa5 = '<option value="5">5"</option>';
$pipa6 = '<option value="6">6"</option>';
$pipa7 = '<option value="7">7"</option>';
$pipa8 = '<option value="8">8"</option>';
$pipa9 = '<option value="9">9"</option>';
$pipa10 = '<option value="10">10"</option>';
$pipa11 = '<option value="11">11"</option>';
$pipa12 = '<option value="12">12"</option>';
$pipa14 = '<option value="14">14"</option>';
$pipa15 = '<option value="15">15"</option>';
$pipa16 = '<option value="16">16"</option>';
$pipa17 = '<option value="17">17"</option>';
$pipa18 = '<option value="18">18"</option>';
$pipa19 = '<option value="19">19"</option>';
$pipa20 = '<option value="20">20"</option>';
$pipa21 = '<option value="21">21"</option>';
$pipa22 = '<option value="22">22"</option>';
$pipa23 = '<option value="23">23"</option>';
$pipa24 = '<option value="24">24"</option>';


const $opcionEscala = $("#opcion-escala");
const $btn1sqr = $("#btn1sqr");
const $btn2sqr = $("#btn2sqr");

/*
 var allSelectElements = document.getElementsByTagName('select');
 for (var i=0; i < allSelectElements.length; i++) {
 allSelectElements[i].addEventListener('touchstart', function(e){
 //This is the important line
 e.stopPropagation();
 console.log('touchstart');
 }, false);
 }*/

$(document).on("pagebeforeshow","#metodo-90, #metodo-t",function(){
    $detect_page = true;
});

$('div[data-role=panel] li, #menu a').click(function() {
    setTimeout(function() {
        /*console.log($detect_page);
         if($detect_page == false) {
         activeSelect();
         } else {*/
        $("label").css("color","#c0bfbf");
        $("label").prev().css({"border-color":"#c0bfbf", "background-color":"transparent"});
        $('.ui-select').removeClass('active');
        $('input').removeClass('active');
        $click_counter = 0;
        $click_counter_2 = 0;
        resetSelects();
        /*}
         $detect_page = false;*/
    },100);
});




function activeSelect() {
    setTimeout(function() {
        $("label").css("color","#c0bfbf");
        $("label").prev().css({"border-color":"#c0bfbf", "background-color":"transparent"});
        $('input').removeClass('active');
        $('.ui-select').each(function() {
            $(this).addClass('active');
            $("label[for='circ-s']").css("color","#ce2229");
            $("label[for='circ-s-2']").css("color","#ce2229");
            $("label[for='circ-s']").prev().css({"border-color":"#ce2229", "background-color":"#ce2229"});
            $("label[for='circ-s-2']").prev().css({"border-color":"#ce2229", "background-color":"#ce2229"});
        });
    },100);
}

$('select').not($('select.t-pipa, select.t-insulacion, select.t-pipa-c, select.t-insulacion-c')).click(function() {
    $("label").css("color","#c0bfbf");
    $("label").prev().css({"border-color":"#c0bfbf", "background-color":"transparent"});
    $('select').closest('.ui-select').addClass('active');
    $("label[for='circ-s']").css("color","#ce2229");
    $("label[for='circ-s']").prev().css({"border-color":"#ce2229", "background-color":"#ce2229"});
    $("label[for='circ-s-2']").prev().css({"border-color":"#ce2229", "background-color":"#ce2229"});
    $('input').removeClass('active');
});

$('input[type="text"]').click(function() {
    $('.radio-c, .radio-l').removeClass('active');
    $('.ui-select').removeClass('active');
    $("label").css("color","#c0bfbf");
    $("label").prev().css({"border-color":"#c0bfbf", "background-color":"transparent"});
    $('input[type="text"]').addClass('active');
    /* $("label[for='circ']").css("color","#ce2229");
     $("label[for='circ-2']").css("color","#ce2229");
     $("label[for='lomo']").css("color","#ce2229");
     $("label[for='garganta']").css("color","#ce2229");
     $("label[for='gajos']").css("color","#ce2229");
     $("label[for='circ']").prev().css({"border-color":"#ce2229", "background-color":"#ce2229"});
     $("label[for='circ-2']").prev().css({"border-color":"#ce2229", "background-color":"#ce2229"});
     $("label[for='lomo']").prev().css({"border-color":"#ce2229", "background-color":"#ce2229"});
     $("label[for='garganta']").prev().css({"border-color":"#ce2229", "background-color":"#ce2229"});
     $("label[for='gajos']").prev().css({"border-color":"#ce2229", "background-color":"#ce2229"});*/
});

//$('select.t-pipa, select.t-insulacion, select.t-pipa-c, select.t-insulacion-c').click(function() {
$('select').not($('.second-circ select')).click(function() {

    if( $click_counter == 0 ) {
        //$('select.t-pipa, select.t-insulacion, select.t-pipa-c, select.t-insulacion-c').closest('.ui-select').removeClass('active');
        $('select').not($('.second-circ select')).closest('.ui-select').removeClass('active');
        $("label[for='t-pipa']").css("color","#c0bfbf");
        $("label[for='t-insulacion']").css("color","#c0bfbf");
        $("label[for='t-pipa']").prev().css({"border-color":"#c0bfbf", "background-color":"transparent"});
        $("label[for='t-insulacion']").prev().css({"border-color":"#c0bfbf", "background-color":"transparent"});
        $("label[for='t-pipa-c']").css("color","#c0bfbf");
        $("label[for='t-insulacion-c']").css("color","#c0bfbf");
        $("label[for='t-pipa-c']").prev().css({"border-color":"#c0bfbf", "background-color":"transparent"});
        $("label[for='t-insulacion-c']").prev().css({"border-color":"#c0bfbf", "background-color":"transparent"});
        $(this).closest('.ui-select').addClass('active');
    }
    $click_counter++;


    if($('select.t-pipa, select.t-pipa-c').not($('.second-circ select')).closest('.ui-select').hasClass('active')) {
        $('select.t-pipa, select.t-pipa-c').not($('.second-circ select')).closest('.ui-select').prev().css("color","#ce2229");
        $('select.t-pipa, select.t-pipa-c').not($('.second-circ select')).closest('.ui-select').prev().prev().css({"border-color":"#ce2229", "background-color":"#ce2229"});
    }

    /* PONER ACTIVE EL SELECT DE INSULACION */
    if($('select.t-insulacion, select.t-insulacion-c').not($('.second-circ select')).closest('.ui-select').hasClass('active')) {
        $('select.t-insulacion, select.t-insulacion-c').not($('.second-circ select')).closest('.ui-select').prev().css("color","#ce2229");
        $('select.t-insulacion, select.t-insulacion-c').not($('.second-circ select')).closest('.ui-select').prev().prev().css({"border-color":"#ce2229", "background-color":"#ce2229"});
    }

});

$('.second-circ select').click(function() {

    if( $click_counter_2 == 0 ) {
        $('.second-circ select').closest('.ui-select').removeClass('active');
        $("label[for='t-pipa']").css("color","#c0bfbf");
        $("label[for='t-insulacion']").css("color","#c0bfbf");
        $("label[for='t-pipa']").prev().css({"border-color":"#c0bfbf", "background-color":"transparent"});
        $("label[for='t-insulacion']").prev().css({"border-color":"#c0bfbf", "background-color":"transparent"});
        $("label[for='t-pipa-c']").css("color","#c0bfbf");
        $("label[for='t-insulacion-c']").css("color","#c0bfbf");
        $("label[for='t-pipa-c']").prev().css({"border-color":"#c0bfbf", "background-color":"transparent"});
        $("label[for='t-insulacion-c']").prev().css({"border-color":"#c0bfbf", "background-color":"transparent"});
        $(this).closest('.ui-select').addClass('active');
    }
    $click_counter_2++;


    if($('.second-circ select.t-pipa, .second-circ select.t-pipa-c').closest('.ui-select').hasClass('active')) {
        $('.second-circ select.t-pipa, .second-circ select.t-pipa-c').closest('.ui-select').prev().css("color","#ce2229");
        $('.second-circ select.t-pipa, .second-circ select.t-pipa-c').closest('.ui-select').prev().prev().css({"border-color":"#ce2229", "background-color":"#ce2229"});
    }

    /* PONER ACTIVE EL SELECT DE INSULACION */
    if($('.second-circ select.t-insulacion, .second-circ select.t-insulacion-c').closest('.ui-select').hasClass('active')) {
        $('.second-circ select.t-insulacion, .second-circ select.t-insulacion-c').closest('.ui-select').prev().css("color","#ce2229");
        $('.second-circ select.t-insulacion, .second-circ select.t-insulacion-c').closest('.ui-select').prev().prev().css({"border-color":"#ce2229", "background-color":"#ce2229"});
    }

});

function resetSelects() {
    $('.no-radio select.t-insulacion option').remove();
    $('.no-radio select.t-insulacion').append($insu1);
    $('.no-radio select.t-insulacion').append($insu2);
    $('.no-radio select.t-insulacion').append($insu3);
    $('.no-radio select.t-insulacion').append($insu4);
    $('.no-radio select.t-insulacion').append($insu5);
    $('.no-radio select.t-insulacion').append($insu6);
    $('.no-radio select.t-insulacion').append($insu7);
    $('.no-radio select.t-insulacion').append($insu8);
    $('.no-radio select.t-insulacion').append($insu9);
    $('.no-radio select.t-insulacion').append($insu10);
    $('.no-radio select.t-insulacion').append($insu11);
    $('.no-radio select.t-insulacion').closest('.ui-select').find('span').text('1');

    $('.no-radio select.t-pipa option').remove();
    $('.no-radio select.t-pipa').append($pipa1_2);
    $('.no-radio select.t-pipa').append($pipa3_4);
    $('.no-radio select.t-pipa').append($pipa1);
    $('.no-radio select.t-pipa').append($pipa1_1_2);
    $('.no-radio select.t-pipa').append($pipa1_1_4);
    $('.no-radio select.t-pipa').append($pipa2);
    $('.no-radio select.t-pipa').append($pipa2h);
    $('.no-radio select.t-pipa').append($pipa3);
    $('.no-radio select.t-pipa').append($pipa3h);
    $('.no-radio select.t-pipa').append($pipa4);
    $('.no-radio select.t-pipa').append($pipa4h);
    $('.no-radio select.t-pipa').append($pipa5);
    $('.no-radio select.t-pipa').append($pipa6);
    $('.no-radio select.t-pipa').append($pipa7);
    $('.no-radio select.t-pipa').append($pipa8);
    $('.no-radio select.t-pipa').append($pipa9);
    $('.no-radio select.t-pipa').append($pipa10);
    $('.no-radio select.t-pipa').append($pipa11);
    $('.no-radio select.t-pipa').append($pipa12);
    $('.no-radio select.t-pipa').append($pipa14);
    $('.no-radio select.t-pipa').append($pipa15);
    $('.no-radio select.t-pipa').append($pipa16);
    $('.no-radio select.t-pipa').append($pipa17);
    $('.no-radio select.t-pipa').append($pipa18);
    $('.no-radio select.t-pipa').append($pipa19);
    $('.no-radio select.t-pipa').append($pipa20);
    $('.no-radio select.t-pipa').append($pipa21);
    $('.no-radio select.t-pipa').append($pipa22);
    $('.no-radio select.t-pipa').append($pipa23);
    $('.no-radio select.t-pipa').append($pipa24);
    $('.no-radio select.t-pipa').closest('.ui-select').find('span').text('1/2');

    /*$('.radio-largo select.t-insulacion option').remove();
     $('.radio-largo select.t-insulacion').append($insu1);
     $('.radio-largo select.t-insulacion').append($insu2);
     $('.radio-largo select.t-insulacion').append($insu3);
     $('.radio-largo select.t-insulacion').append($insu4);
     $('.radio-largo select.t-insulacion').append($insu5);
     $('.radio-largo select.t-insulacion').append($insu6);
     $('.radio-largo select.t-insulacion').append($insu7);
     $('.radio-largo select.t-insulacion').append($insu8);
     $('.radio-largo select.t-insulacion').append($insu9);
     $('.radio-largo select.t-insulacion').append($insu10);
     $('.radio-largo select.t-insulacion').append($insu11);
     $('.radio-largo select.t-insulacion').closest('.ui-select').find('span').text('1');*/

    /*  $('.radio-corto select.t-insulacion-c option').remove();
     $('.radio-corto select.t-insulacion-c').append($insu1);
     $('.radio-corto select.t-insulacion-c').append($insu2);
     $('.radio-corto select.t-insulacion-c').append($insu3);
     $('.radio-corto select.t-insulacion-c').append($insu4);
     $('.radio-corto select.t-insulacion-c').append($insu5);
     $('.radio-corto select.t-insulacion-c').append($insu6);
     $('.radio-corto select.t-insulacion-c').append($insu7);
     $('.radio-corto select.t-insulacion-c').append($insu8);
     $('.radio-corto select.t-insulacion-c').append($insu9);
     $('.radio-corto select.t-insulacion-c').append($insu10);
     $('.radio-corto select.t-insulacion-c').append($insu11);
     $('.radio-corto select.t-insulacion-c').closest('.ui-select').find('span').text('1');*/

    /*    $('.radio-largo select.t-pipa option').remove();
     $('.radio-largo select.t-pipa').append($pipa2);
     $('.radio-largo select.t-pipa').append($pipa3);
     $('.radio-largo select.t-pipa').append($pipa4);
     $('.radio-largo select.t-pipa').append($pipa6);
     $('.radio-largo select.t-pipa').append($pipa8);
     $('.radio-largo select.t-pipa').append($pipa10);
     $('.radio-largo select.t-pipa').append($pipa12);
     $('.radio-largo select.t-pipa').append($pipa14);
     $('.radio-largo select.t-pipa').append($pipa16);
     $('.radio-largo select.t-pipa').append($pipa18);
     $('.radio-largo select.t-pipa').append($pipa22);*/

    $('.radio-largo select.t-pipa').closest('.ui-select').find('span').text('2');

    $('.radio-corto select.t-pipa-c option').remove();
    $('.radio-corto select.t-pipa-c').append($pipa3);
    $('.radio-corto select.t-pipa-c').append($pipa4);
    $('.radio-corto select.t-pipa-c').append($pipa4h);
    $('.radio-corto select.t-pipa-c').append($pipa5);
    $('.radio-corto select.t-pipa-c').append($pipa6);
    $('.radio-corto select.t-pipa-c').append($pipa7);
    $('.radio-corto select.t-pipa-c').append($pipa8);
    $('.radio-corto select.t-pipa-c').append($pipa9);
    $('.radio-corto select.t-pipa-c').append($pipa10);
    $('.radio-corto select.t-pipa-c').append($pipa11);
    $('.radio-corto select.t-pipa-c').append($pipa12);
    $('.radio-corto select.t-pipa-c').append($pipa14);
    $('.radio-corto select.t-pipa-c').append($pipa15);
    $('.radio-corto select.t-pipa-c').append($pipa16);
    $('.radio-corto select.t-pipa-c').append($pipa17);
    $('.radio-corto select.t-pipa-c').append($pipa18);
    $('.radio-corto select.t-pipa-c').append($pipa19);
    $('.radio-corto select.t-pipa-c').append($pipa20);
    $('.radio-corto select.t-pipa-c').append($pipa21);
    $('.radio-corto select.t-pipa-c').append($pipa22);
    $('.radio-corto select.t-pipa-c').append($pipa23);
    $('.radio-corto select.t-pipa-c').closest('.ui-select').find('span').text('3');
}

$('.no-radio .t-pipa').not($('.second-circ .t-pipa, #metodo-90 select')).change(function() {
    $this = $(this);
    setTimeout(function(){
        if(/*($first_click > 1) &&*/ $('.no-radio .t-pipa').not($('.second-circ .t-pipa')).closest('.ui-select').hasClass('active')) {
            /*console.log($first_click > 0);
             console.log('pipa-1');*/
            switch($this.val()) {
                case '1/2':
                case '3/4':
                case '1':
                case '1 1/4':
                case '1 1/2':
                case '2':
                case '2 1/2':
                case '3':
                case '3 1/2':
                case '4':
                case '4 1/2':
                case '5':
                case '6':
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion option')).remove();
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu1);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu2);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu3);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu4);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu5);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu6);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu7);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu8);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu9);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu10);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu11);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).closest('.ui-select').find('span').text('1');
                    break;
                case '7':
                case '8':
                case '9':
                case '10':
                case '11':
                case '12':
                case '14':
                case '15':
                case '16':
                case '17':
                case '18':
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion option')).remove();
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu2);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu3);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu4);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu5);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu6);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu7);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu8);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu9);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu10);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu11);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).closest('.ui-select').find('span').text('1 1/2');
                    break;
                case '19':
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion option')).remove();
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu2);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu3);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu4);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu5);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu6);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu7);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu8);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu9);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu10);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).closest('.ui-select').find('span').text('1 1/2');
                    break;
                case '20':
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion option')).remove();
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu2);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu3);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu4);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu5);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu6);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu7);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu8);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu9);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).closest('.ui-select').find('span').text('1 1/2');
                    break;
                case '21':
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion option')).remove();
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu2);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu3);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu4);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu5);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu6);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu7);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu8);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).closest('.ui-select').find('span').text('1 1/2');
                    break;
                case '22':
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion option')).remove();
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu2);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu3);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu4);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu5);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu6);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu7);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).closest('.ui-select').find('span').text('1 1/2');
                    break;
                case '23':
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion option')).remove();
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu2);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu3);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu4);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu5);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu6);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).closest('.ui-select').find('span').text('1 1/2');
                    break;
                case '24':
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion option')).remove();
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu2);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu3);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu4);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu5);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).closest('.ui-select').find('span').text('1 1/2');
                    break;
            }
            $first_click = 0;
        }
    }, 100);
    $first_click++;
});

$('.no-radio .second-circ .t-pipa').not($('#metodo-90 select')).change(function() {
    $this = $(this);
    setTimeout(function(){
        if(/*($first_click > 1) &&*/ $('.no-radio .t-pipa').closest('.ui-select').hasClass('active')) {
            /*  console.log($first_click > 0);
             console.log('pipa-2');*/
            switch($this.val()) {
                case '1/2':
                case '3/4':
                case '1':
                case '1 1/4':
                case '1 1/2':
                case '2':
                case '2 1/2':
                case '3':
                case '3 1/2':
                case '4':
                case '4 1/2':
                case '5':
                case '6':
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion option')).remove();
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu1);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu2);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu3);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu4);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu5);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu6);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu7);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu8);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu9);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu10);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu11);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).closest('.ui-select').find('span').text('1');
                    break;
                case '7':
                case '8':
                case '9':
                case '10':
                case '11':
                case '12':
                case '14':
                case '15':
                case '16':
                case '17':
                case '18':
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion option')).remove();
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu2);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu3);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu4);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu5);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu6);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu7);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu8);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu9);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu10);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu11);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).closest('.ui-select').find('span').text('1 1/2');
                    break;
                case '19':
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion option')).remove();
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu2);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu3);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu4);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu5);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu6);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu7);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu8);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu9);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu10);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).closest('.ui-select').find('span').text('1 1/2');
                    break;
                case '20':
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion option')).remove();
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu2);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu3);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu4);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu5);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu6);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu7);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu8);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu9);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).closest('.ui-select').find('span').text('1 1/2');
                    break;
                case '21':
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion option')).remove();
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu2);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu3);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu4);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu5);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu6);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu7);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu8);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).closest('.ui-select').find('span').text('1 1/2');
                    break;
                case '22':
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion option')).remove();
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu2);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu3);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu4);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu5);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu6);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu7);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).closest('.ui-select').find('span').text('1 1/2');
                    break;
                case '23':
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion option')).remove();
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu2);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu3);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu4);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu5);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu6);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).closest('.ui-select').find('span').text('1 1/2');
                    break;
                case '24':
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion option')).remove();
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu2);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu3);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu4);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).append($insu5);
                    ($this).closest('.col-xs-6').next().find($('.no-radio select.t-insulacion')).closest('.ui-select').find('span').text('1 1/2');
                    break;
            }
            $first_click = 0;
        }
    }, 100);
    $first_click++;
});

$('.no-radio .t-insulacion').not($('.second-circ .t-insulacion, #metodo-90 select')).change(function() {
    $this = $(this);
    setTimeout(function(){
        if(/*($first_click > 1) &&*/ $('.no-radio .t-insulacion').not($('.second-circ .t-insulacion')).closest('.ui-select').hasClass('active')) {
            console.log($first_click > 0);
            console.log('insulacion-1');
            switch($this.val()) {
                case '1':
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa option')).remove();
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa1_2);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa3_4);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa1);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa1_1_2);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa1_1_4);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa2);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa2h);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa3);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa3h);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa4);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa4h);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa5);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa6);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).closest('.ui-select').find('span').text('1/2');
                    break;
                case '1 1/2':
                case '2':
                case '2 1/2':
                case '3':
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa option')).remove();
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa1_2);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa3_4);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa1);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa1_1_2);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa1_1_4);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa2);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa2h);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa3);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa3h);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa4);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa4h);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa5);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa6);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa7);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa8);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa9);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa10);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa11);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa12);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa14);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa15);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa16);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa17);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa18);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa19);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa20);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa21);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa22);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa23);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa24);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).closest('.ui-select').find('span').text('1/2');
                    break;
                case '3 1/2':
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa option')).remove();
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa1_2);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa3_4);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa1);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa1_1_2);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa1_1_4);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa2);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa2h);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa3);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa3h);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa4);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa4h);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa5);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa6);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa7);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa8);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa9);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa10);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa11);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa12);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa14);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa15);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa16);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa17);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa18);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa19);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa20);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa21);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa22);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa23);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).closest('.ui-select').find('span').text('1/2');
                    break;
                case '4':
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa option')).remove();
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa1_2);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa3_4);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa1);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa1_1_2);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa1_1_4);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa2);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa2h);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa3);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa3h);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa4);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa4h);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa5);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa6);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa7);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa8);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa9);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa10);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa11);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa12);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa14);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa15);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa16);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa17);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa18);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa19);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa20);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa21);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa22);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).closest('.ui-select').find('span').text('1/2');
                    break;
                case '4 1/2':
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa option')).remove();
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa1_2);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa3_4);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa1);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa1_1_2);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa1_1_4);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa2);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa2h);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa3);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa3h);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa4);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa4h);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa5);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa6);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa7);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa8);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa9);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa10);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa11);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa12);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa14);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa15);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa16);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa17);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa18);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa19);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa20);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa21);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).closest('.ui-select').find('span').text('1/2');
                    break;
                case '5':
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa option')).remove();
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa1_2);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa3_4);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa1);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa1_1_2);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa1_1_4);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa2);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa2h);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa3);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa3h);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa4);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa4h);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa5);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa6);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa7);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa8);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa9);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa10);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa11);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa12);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa14);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa15);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa16);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa17);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa18);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa19);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa20);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).closest('.ui-select').find('span').text('1/2');
                    break;
                case '5 1/2':
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa option')).remove();
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa1_2);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa3_4);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa1);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa1_1_2);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa1_1_4);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa2);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa2h);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa3);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa3h);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa4);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa4h);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa5);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa6);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa7);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa8);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa9);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa10);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa11);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa12);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa14);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa15);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa16);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa17);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa18);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa19);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).closest('.ui-select').find('span').text('1/2');
                    break;
                case '6':
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa option')).remove();
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa1_2);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa3_4);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa1);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa1_1_2);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa1_1_4);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa2);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa2h);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa3);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa3h);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa4);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa4h);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa5);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa6);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa7);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa8);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa9);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa10);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa11);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa12);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa14);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa15);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa16);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa17);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa18);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).closest('.ui-select').find('span').text('1/2');
                    break;
            }
            $first_click = 0;
        }
    }, 100);
    $first_click++;
});

$('.no-radio .second-circ .t-insulacion').not($('#metodo-90 select')).change(function() {
    $this = $(this);
    setTimeout(function(){
        if(/*($first_click > 1) &&*/ $('.no-radio .second-circ .t-insulacion').closest('.ui-select').hasClass('active')) {
            console.log($first_click > 0);
            console.log('insulacion-2');
            switch($this.val()) {
                case '1':
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa option')).remove();
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa1_2);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa3_4);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa1);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa1_1_2);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa1_1_4);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa2);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa2h);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa3);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa3h);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa4);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa4h);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa5);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa6);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).closest('.ui-select').find('span').text('1/2');
                    break;
                case '1 1/2':
                case '2':
                case '2 1/2':
                case '3':
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa option')).remove();
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa1_2);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa3_4);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa1);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa1_1_2);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa1_1_4);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa2);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa2h);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa3);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa3h);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa4);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa4h);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa5);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa6);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa7);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa8);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa9);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa10);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa11);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa12);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa14);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa15);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa16);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa17);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa18);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa19);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa20);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa21);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa22);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa23);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa24);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).closest('.ui-select').find('span').text('1/2');
                    break;
                case '3 1/2':
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa option')).remove();
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa1_2);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa3_4);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa1);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa1_1_2);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa1_1_4);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa2);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa2h);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa3);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa3h);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa4);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa4h);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa5);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa6);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa7);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa8);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa9);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa10);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa11);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa12);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa14);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa15);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa16);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa17);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa18);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa19);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa20);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa21);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa22);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa23);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).closest('.ui-select').find('span').text('1/2');
                    break;
                case '4':
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa option')).remove();
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa1_2);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa3_4);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa1);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa1_1_2);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa1_1_4);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa2);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa2h);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa3);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa3h);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa4);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa4h);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa5);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa6);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa7);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa8);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa9);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa10);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa11);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa12);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa14);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa15);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa16);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa17);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa18);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa19);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa20);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa21);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa22);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).closest('.ui-select').find('span').text('1/2');
                    break;
                case '4 1/2':
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa option')).remove();
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa1_2);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa3_4);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa1);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa1_1_2);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa1_1_4);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa2);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa2h);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa3);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa3h);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa4);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa4h);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa5);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa6);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa7);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa8);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa9);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa10);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa11);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa12);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa14);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa15);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa16);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa17);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa18);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa19);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa20);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa21);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).closest('.ui-select').find('span').text('1/2');
                    break;
                case '5':
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa option')).remove();
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa1_2);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa3_4);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa1);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa1_1_2);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa1_1_4);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa2);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa2h);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa3);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa3h);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa4);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa4h);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa5);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa6);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa7);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa8);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa9);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa10);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa11);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa12);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa14);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa15);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa16);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa17);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa18);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa19);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa20);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).closest('.ui-select').find('span').text('1/2');
                    break;
                case '5 1/2':
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa option')).remove();
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa1_2);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa3_4);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa1);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa1_1_2);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa1_1_4);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa2);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa2h);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa3);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa3h);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa4);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa4h);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa5);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa6);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa7);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa8);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa9);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa10);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa11);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa12);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa14);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa15);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa16);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa17);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa18);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa19);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).closest('.ui-select').find('span').text('1/2');
                    break;
                case '6':
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa option')).remove();
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa1_2);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa3_4);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa1);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa1_1_2);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa1_1_4);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa2);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa2h);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa3);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa3h);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa4);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa4h);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa5);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa6);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa7);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa8);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa9);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa10);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa11);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa12);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa14);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa15);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa16);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa17);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).append($pipa18);
                    ($this).closest('.col-xs-6').prev().find($('.no-radio select.t-pipa')).closest('.ui-select').find('span').text('1/2');
                    break;
            }
            $first_click = 0;
        }
    }, 100);
    $first_click++;
});

$('#radio-l-label').click(function(){

    $('#radio-l').addClass('active');

    $('#radio-c').removeClass('active').addClass(' ');
});

$('#radio-c-label').click(function(){

    $('#radio-c').addClass('active');

    $('#radio-l').removeClass('active').addClass(' ');
});


$('select.t-pipa').not($('label, .no-radio select')).change(function() {
    if($('.radio-largo select.t-pipa').closest('.ui-select').hasClass('active')) {

        $first_click++;
        /* EN CASO DE RADIO LARGO */
        if(/*($first_click > 1) &&*/ !$('.radio-largo').hasClass('hidden')) {
            console.log($first_click > 0);
            switch($(this).val()) {
                case '2':
                    $('.radio-largo select.t-insulacion option').remove();
                    $('.radio-largo select.t-insulacion').append($insu1);
                    $('.radio-largo select.t-insulacion').append($insu2);
                    $('.radio-largo select.t-insulacion').closest('.ui-select').find('span').text('1');
                    break;
                case '2 1/2':
                    $('.radio-largo select.t-insulacion option').remove();
                    $('.radio-largo select.t-insulacion').append($insu1);
                    $('.radio-largo select.t-insulacion').closest('.ui-select').find('span').text('1');
                    break;
                case '3':
                    $('.radio-largo select.t-insulacion option').remove();
                    $('.radio-largo select.t-insulacion').append($insu1);
                    $('.radio-largo select.t-insulacion').append($insu2);
                    $('.radio-largo select.t-insulacion').append($insu3);
                    $('.radio-largo select.t-insulacion').append($insu4);
                    $('.radio-largo select.t-insulacion').closest('.ui-select').find('span').text('1');
                    break;
                case '3 1/2':
                    $('.radio-largo select.t-insulacion option').remove();
                    $('.radio-largo select.t-insulacion').append($insu1);
                    $('.radio-largo select.t-insulacion').append($insu2);
                    $('.radio-largo select.t-insulacion').append($insu3);
                    $('.radio-largo select.t-insulacion').closest('.ui-select').find('span').text('1');
                    break;
                case '4':
                    $('.radio-largo select.t-insulacion option').remove();
                    $('.radio-largo select.t-insulacion').append($insu1);
                    $('.radio-largo select.t-insulacion').append($insu2);
                    $('.radio-largo select.t-insulacion').append($insu3);
                    $('.radio-largo select.t-insulacion').append($insu4);
                    $('.radio-largo select.t-insulacion').append($insu5);
                    $('.radio-largo select.t-insulacion').append($insu6);
                    $('.radio-largo select.t-insulacion').closest('.ui-select').find('span').text('1');
                    break;
                case '4 1/2':
                case '5':
                    $('.radio-largo select.t-insulacion option').remove();
                    $('.radio-largo select.t-insulacion').append($insu1);
                    $('.radio-largo select.t-insulacion').append($insu2);
                    $('.radio-largo select.t-insulacion').append($insu3);
                    $('.radio-largo select.t-insulacion').append($insu4);
                    $('.radio-largo select.t-insulacion').append($insu5);
                    $('.radio-largo select.t-insulacion').closest('.ui-select').find('span').text('1');
                    break;
                case '6':
                    $('.radio-largo select.t-insulacion option').remove();
                    $('.radio-largo select.t-insulacion').append($insu1);
                    $('.radio-largo select.t-insulacion').append($insu2);
                    $('.radio-largo select.t-insulacion').append($insu3);
                    $('.radio-largo select.t-insulacion').append($insu4);
                    $('.radio-largo select.t-insulacion').append($insu5);
                    $('.radio-largo select.t-insulacion').append($insu6);
                    $('.radio-largo select.t-insulacion').append($insu7);
                    $('.radio-largo select.t-insulacion').append($insu8);
                    $('.radio-largo select.t-insulacion').append($insu9);
                    $('.radio-largo select.t-insulacion').append($insu10);
                    $('.radio-largo select.t-insulacion').closest('.ui-select').find('span').text('1');
                    break;
                case '8':
                case '10':
                case '12':
                case '14':
                case '16':
                case '18':
                    $('.radio-largo select.t-insulacion option').remove();
                    $('.radio-largo select.t-insulacion').append($insu2);
                    $('.radio-largo select.t-insulacion').append($insu3);
                    $('.radio-largo select.t-insulacion').append($insu4);
                    $('.radio-largo select.t-insulacion').append($insu5);
                    $('.radio-largo select.t-insulacion').append($insu6);
                    $('.radio-largo select.t-insulacion').append($insu7);
                    $('.radio-largo select.t-insulacion').append($insu8);
                    $('.radio-largo select.t-insulacion').append($insu9);
                    $('.radio-largo select.t-insulacion').append($insu10);
                    $('.radio-largo select.t-insulacion').append($insu11);
                    $('.radio-largo select.t-insulacion').closest('.ui-select').find('span').text('1 1/2');
                    break;
                case '9':
                case '11':
                case '15':
                case '17':
                case '19':
                case '23':
                    $('.radio-largo select.t-insulacion option').remove();
                    $('.radio-largo select.t-insulacion').append($insu2);
                    $('.radio-largo select.t-insulacion').append($insu3);
                    $('.radio-largo select.t-insulacion').append($insu4);
                    $('.radio-largo select.t-insulacion').append($insu5);
                    $('.radio-largo select.t-insulacion').append($insu6);
                    $('.radio-largo select.t-insulacion').append($insu7);
                    $('.radio-largo select.t-insulacion').append($insu8);
                    $('.radio-largo select.t-insulacion').append($insu9);
                    $('.radio-largo select.t-insulacion').append($insu10);
                    $('.radio-largo select.t-insulacion').closest('.ui-select').find('span').text('1 1/2');
                    break;
                case '7':
                case '20':
                case '22':
                    $('.radio-largo select.t-insulacion option').remove();
                    $('.radio-largo select.t-insulacion').append($insu2);
                    $('.radio-largo select.t-insulacion').append($insu3);
                    $('.radio-largo select.t-insulacion').append($insu4);
                    $('.radio-largo select.t-insulacion').append($insu5);
                    $('.radio-largo select.t-insulacion').append($insu6);
                    $('.radio-largo select.t-insulacion').append($insu7);
                    $('.radio-largo select.t-insulacion').append($insu8);
                    $('.radio-largo select.t-insulacion').append($insu9);
                    $('.radio-largo select.t-insulacion').append($insu10);
                    $('.radio-largo select.t-insulacion').append($insu11);
                    $('.radio-largo select.t-insulacion').closest('.ui-select').find('span').text('1 1/2');
                    break;
                case '21':
                    $('.radio-largo select.t-insulacion option').remove();
                    $('.radio-largo select.t-insulacion').append($insu2);
                    $('.radio-largo select.t-insulacion').append($insu3);
                    $('.radio-largo select.t-insulacion').append($insu4);
                    $('.radio-largo select.t-insulacion').append($insu5);
                    $('.radio-largo select.t-insulacion').append($insu6);
                    $('.radio-largo select.t-insulacion').append($insu7);
                    $('.radio-largo select.t-insulacion').append($insu8);
                    $('.radio-largo select.t-insulacion').closest('.ui-select').find('span').text('1 1/2');
                    break;

                case '23':
                    $('.radio-largo select.t-insulacion option').remove();
                    $('.radio-largo select.t-insulacion').append($insu2);
                    $('.radio-largo select.t-insulacion').append($insu3);
                    $('.radio-largo select.t-insulacion').append($insu4);
                    $('.radio-largo select.t-insulacion').append($insu5);
                    $('.radio-largo select.t-insulacion').append($insu6);;
                    $('.radio-largo select.t-insulacion').closest('.ui-select').find('span').text('1 1/2');
                    break;
            }
            $first_click = 0;
        }
    }
});

$('select.t-pipa-c').not($('label, .no-radio select')).change(function() {
    if($('.radio-corto select.t-pipa-c').closest('.ui-select').hasClass('active')) {


        $first_click++;
        /* EN CASO DE RADIO CORTO */
        if(/*($first_click > 1) &&*/ !$('.radio-corto').hasClass('hidden')) {
            console.log($first_click > 0);
            switch($(this).val()) {
                case '3':
                    $('.radio-corto select.t-insulacion-c option').remove();
                    $('.radio-corto select.t-insulacion-c').append($insu1);
                    $('.radio-corto select.t-insulacion-c').closest('.ui-select').find('span').text('1');
                    break;
                case '4':
                    $('.radio-corto select.t-insulacion-c option').remove();
                    $('.radio-corto select.t-insulacion-c').append($insu1);
                    $('.radio-corto select.t-insulacion-c').append($insu2);
                    $('.radio-corto select.t-insulacion-c').append($insu3);
                    $('.radio-corto select.t-insulacion-c').closest('.ui-select').find('span').text('1');
                    break;
                case '4 1/2':
                case '5':
                    $('.radio-corto select.t-insulacion-c option').remove();
                    $('.radio-corto select.t-insulacion-c').append($insu1);
                    $('.radio-corto select.t-insulacion-c').append($insu2);
                    $('.radio-corto select.t-insulacion-c').closest('.ui-select').find('span').text('1');
                    break;
                case '6':
                    $('.radio-corto select.t-insulacion-c option').remove();
                    $('.radio-corto select.t-insulacion-c').append($insu1);
                    $('.radio-corto select.t-insulacion-c').append($insu2);
                    $('.radio-corto select.t-insulacion-c').append($insu3);
                    $('.radio-corto select.t-insulacion-c').append($insu4);
                    $('.radio-corto select.t-insulacion-c').append($insu5);
                    $('.radio-corto select.t-insulacion-c').closest('.ui-select').find('span').text('1');
                    break;
                case '7':
                    $('.radio-corto select.t-insulacion-c option').remove();
                    $('.radio-corto select.t-insulacion-c').append($insu2);
                    $('.radio-corto select.t-insulacion-c').append($insu3);
                    $('.radio-corto select.t-insulacion-c').append($insu4);
                    $('.radio-corto select.t-insulacion-c').closest('.ui-select').find('span').text('1 1/2');
                    break;
                case '8':
                    $('.radio-corto select.t-insulacion-c option').remove();
                    $('.radio-corto select.t-insulacion-c').append($insu2);
                    $('.radio-corto select.t-insulacion-c').append($insu3);
                    $('.radio-corto select.t-insulacion-c').append($insu4);
                    $('.radio-corto select.t-insulacion-c').append($insu5);
                    $('.radio-corto select.t-insulacion-c').append($insu6);
                    $('.radio-corto select.t-insulacion-c').closest('.ui-select').find('span').text('1 1/2');
                    break;
                case '9':
                    $('.radio-corto select.t-insulacion-c option').remove();
                    $('.radio-corto select.t-insulacion-c').append($insu2);
                    $('.radio-corto select.t-insulacion-c').append($insu3);
                    $('.radio-corto select.t-insulacion-c').append($insu4);
                    $('.radio-corto select.t-insulacion-c').append($insu5);
                    $('.radio-corto select.t-insulacion-c').closest('.ui-select').find('span').text('1 1/2');
                    break;
                case '10':
                    $('.radio-corto select.t-insulacion-c option').remove();
                    $('.radio-corto select.t-insulacion-c').append($insu2);
                    $('.radio-corto select.t-insulacion-c').append($insu3);
                    $('.radio-corto select.t-insulacion-c').append($insu4);
                    $('.radio-corto select.t-insulacion-c').append($insu5);
                    $('.radio-corto select.t-insulacion-c').append($insu6);
                    $('.radio-corto select.t-insulacion-c').append($insu7);
                    $('.radio-corto select.t-insulacion-c').append($insu8);
                    $('.radio-corto select.t-insulacion-c').append($insu9);
                    $('.radio-corto select.t-insulacion-c').closest('.ui-select').find('span').text('1 1/2');
                    break;
                case '11':
                case '21':
                    $('.radio-corto select.t-insulacion-c option').remove();
                    $('.radio-corto select.t-insulacion-c').append($insu2);
                    $('.radio-corto select.t-insulacion-c').append($insu3);
                    $('.radio-corto select.t-insulacion-c').append($insu4);
                    $('.radio-corto select.t-insulacion-c').append($insu5);
                    $('.radio-corto select.t-insulacion-c').append($insu6);
                    $('.radio-corto select.t-insulacion-c').append($insu7);
                    $('.radio-corto select.t-insulacion-c').append($insu8);
                    $('.radio-corto select.t-insulacion-c').closest('.ui-select').find('span').text('1 1/2');
                    break;
                case '12':
                case '14':
                case '16':
                case '18':
                    $('.radio-corto select.t-insulacion-c option').remove();
                    $('.radio-corto select.t-insulacion-c').append($insu2);
                    $('.radio-corto select.t-insulacion-c').append($insu3);
                    $('.radio-corto select.t-insulacion-c').append($insu4);
                    $('.radio-corto select.t-insulacion-c').append($insu5);
                    $('.radio-corto select.t-insulacion-c').append($insu6);
                    $('.radio-corto select.t-insulacion-c').append($insu7);
                    $('.radio-corto select.t-insulacion-c').append($insu8);
                    $('.radio-corto select.t-insulacion-c').append($insu9);
                    $('.radio-corto select.t-insulacion-c').append($insu10);
                    $('.radio-corto select.t-insulacion-c').append($insu11);
                    $('.radio-corto select.t-insulacion-c').closest('.ui-select').find('span').text('1 1/2');
                    break;
                case '15':
                case '17':
                case '19':
                    $('.radio-corto select.t-insulacion-c option').remove();
                    $('.radio-corto select.t-insulacion-c').append($insu2);
                    $('.radio-corto select.t-insulacion-c').append($insu3);
                    $('.radio-corto select.t-insulacion-c').append($insu4);
                    $('.radio-corto select.t-insulacion-c').append($insu5);
                    $('.radio-corto select.t-insulacion-c').append($insu6);
                    $('.radio-corto select.t-insulacion-c').append($insu7);
                    $('.radio-corto select.t-insulacion-c').append($insu8);
                    $('.radio-corto select.t-insulacion-c').append($insu9);
                    $('.radio-corto select.t-insulacion-c').append($insu10);
                    $('.radio-corto select.t-insulacion-c').closest('.ui-select').find('span').text('1 1/2');
                    break;
                case '20':
                    $('.radio-corto select.t-insulacion-c option').remove();
                    $('.radio-corto select.t-insulacion-c').append($insu2);
                    $('.radio-corto select.t-insulacion-c').append($insu3);
                    $('.radio-corto select.t-insulacion-c').append($insu4);
                    $('.radio-corto select.t-insulacion-c').append($insu5);
                    $('.radio-corto select.t-insulacion-c').append($insu6);
                    $('.radio-corto select.t-insulacion-c').append($insu7);
                    $('.radio-corto select.t-insulacion-c').append($insu8);
                    $('.radio-corto select.t-insulacion-c').append($insu9);
                    $('.radio-corto select.t-insulacion-c').closest('.ui-select').find('span').text('1 1/2');
                    break;
                case '22':
                    $('.radio-corto select.t-insulacion-c option').remove();
                    $('.radio-corto select.t-insulacion-c').append($insu2);
                    $('.radio-corto select.t-insulacion-c').append($insu3);
                    $('.radio-corto select.t-insulacion-c').append($insu4);
                    $('.radio-corto select.t-insulacion-c').append($insu5);
                    $('.radio-corto select.t-insulacion-c').append($insu6);
                    $('.radio-corto select.t-insulacion-c').append($insu7);
                    $('.radio-corto select.t-insulacion-c').closest('.ui-select').find('span').text('1 1/2');
                    break;
                case '23':
                    $('.radio-corto select.t-insulacion-c option').remove();
                    $('.radio-corto select.t-insulacion-c').append($insu2);
                    $('.radio-corto select.t-insulacion-c').append($insu3);
                    $('.radio-corto select.t-insulacion-c').append($insu4);
                    $('.radio-corto select.t-insulacion-c').append($insu5);
                    $('.radio-corto select.t-insulacion-c').append($insu6);
                    $('.radio-corto select.t-insulacion-c').closest('.ui-select').find('span').text('1 1/2');
                    break;
            }
            $first_click = 0;
        }
    }

});

$('select.t-insulacion').not($('label, .no-radio select')).change(function() {
    if($('.radio-largo select.t-insulacion').closest('.ui-select').hasClass('active')) {
        console.log('insulacion 90');

        $first_click++;
        /* EN CASO DE RADIO LARGO */
        if(/*($first_click > 1) &&*/ !$('.radio-largo').hasClass('hidden')) {
            console.log($first_click > 0);
            /* EN BASE A INSULACION */
            switch($(this).val()) {
                case '1':
                    $('.radio-largo select.t-pipa option').remove();
                    $('.radio-largo select.t-pipa').append($pipa2);
                    $('.radio-largo select.t-pipa').append($pipa2h);
                    $('.radio-largo select.t-pipa').append($pipa3);
                    $('.radio-largo select.t-pipa').append($pipa3h);
                    $('.radio-largo select.t-pipa').append($pipa4);
                    $('.radio-largo select.t-pipa').append($pipa4h);
                    $('.radio-largo select.t-pipa').append($pipa5);
                    $('.radio-largo select.t-pipa').append($pipa6);
                    $('.radio-largo select.t-pipa').closest('.ui-select').find('span').text('2');
                    break;
                case '1 1/2':
                    $('.radio-largo select.t-pipa option').remove();
                    $('.radio-largo select.t-pipa').append($pipa2);
                    $('.radio-largo select.t-pipa').append($pipa3);
                    $('.radio-largo select.t-pipa').append($pipa3h);
                    $('.radio-largo select.t-pipa').append($pipa4);
                    $('.radio-largo select.t-pipa').append($pipa4h);
                    $('.radio-largo select.t-pipa').append($pipa5);
                    $('.radio-largo select.t-pipa').append($pipa6);
                    $('.radio-largo select.t-pipa').append($pipa7);
                    $('.radio-largo select.t-pipa').append($pipa8);
                    $('.radio-largo select.t-pipa').append($pipa9);
                    $('.radio-largo select.t-pipa').append($pipa10);
                    $('.radio-largo select.t-pipa').append($pipa11);
                    $('.radio-largo select.t-pipa').append($pipa12);
                    $('.radio-largo select.t-pipa').append($pipa14);
                    $('.radio-largo select.t-pipa').append($pipa15);
                    $('.radio-largo select.t-pipa').append($pipa16);
                    $('.radio-largo select.t-pipa').append($pipa17);
                    $('.radio-largo select.t-pipa').append($pipa18);
                    $('.radio-largo select.t-pipa').append($pipa19);
                    $('.radio-largo select.t-pipa').append($pipa20);
                    $('.radio-largo select.t-pipa').append($pipa21);
                    $('.radio-largo select.t-pipa').append($pipa22);
                    $('.radio-largo select.t-pipa').append($pipa23);
                    $('.radio-largo select.t-pipa').closest('.ui-select').find('span').text('2');
                    break;
                case '2':
                case '2 1/2':
                    $('.radio-largo select.t-pipa option').remove();
                    $('.radio-largo select.t-pipa').append($pipa3);
                    $('.radio-largo select.t-pipa').append($pipa3h);
                    $('.radio-largo select.t-pipa').append($pipa4);
                    $('.radio-largo select.t-pipa').append($pipa4h);
                    $('.radio-largo select.t-pipa').append($pipa5);
                    $('.radio-largo select.t-pipa').append($pipa6);
                    $('.radio-largo select.t-pipa').append($pipa7);
                    $('.radio-largo select.t-pipa').append($pipa8);
                    $('.radio-largo select.t-pipa').append($pipa9);
                    $('.radio-largo select.t-pipa').append($pipa10);
                    $('.radio-largo select.t-pipa').append($pipa11);
                    $('.radio-largo select.t-pipa').append($pipa12);
                    $('.radio-largo select.t-pipa').append($pipa14);
                    $('.radio-largo select.t-pipa').append($pipa15);
                    $('.radio-largo select.t-pipa').append($pipa16);
                    $('.radio-largo select.t-pipa').append($pipa17);
                    $('.radio-largo select.t-pipa').append($pipa18);
                    $('.radio-largo select.t-pipa').append($pipa19);
                    $('.radio-largo select.t-pipa').append($pipa20);
                    $('.radio-largo select.t-pipa').append($pipa21);
                    $('.radio-largo select.t-pipa').append($pipa22);
                    $('.radio-largo select.t-pipa').append($pipa23);
                    $('.radio-largo select.t-pipa').closest('.ui-select').find('span').text('3');
                    break;
                case '3':
                    $('.radio-largo select.t-pipa option').remove();
                    $('.radio-largo select.t-pipa').append($pipa4);
                    $('.radio-largo select.t-pipa').append($pipa4h);
                    $('.radio-largo select.t-pipa').append($pipa5);
                    $('.radio-largo select.t-pipa').append($pipa6);
                    $('.radio-largo select.t-pipa').append($pipa7);
                    $('.radio-largo select.t-pipa').append($pipa8);
                    $('.radio-largo select.t-pipa').append($pipa10);
                    $('.radio-largo select.t-pipa').append($pipa11);
                    $('.radio-largo select.t-pipa').append($pipa12);
                    $('.radio-largo select.t-pipa').append($pipa14);
                    $('.radio-largo select.t-pipa').append($pipa15);
                    $('.radio-largo select.t-pipa').append($pipa16);
                    $('.radio-largo select.t-pipa').append($pipa17);
                    $('.radio-largo select.t-pipa').append($pipa18);
                    $('.radio-largo select.t-pipa').append($pipa19);
                    $('.radio-largo select.t-pipa').append($pipa20);
                    $('.radio-largo select.t-pipa').append($pipa21);
                    $('.radio-largo select.t-pipa').append($pipa22);
                    $('.radio-largo select.t-pipa').append($pipa23);
                    $('.radio-largo select.t-pipa').closest('.ui-select').find('span').text('4');
                    break;
                case '3 1/2':
                    $('.radio-largo select.t-pipa option').remove();
                    $('.radio-largo select.t-pipa').append($pipa4);
                    $('.radio-largo select.t-pipa').append($pipa6);
                    $('.radio-largo select.t-pipa').append($pipa7);
                    $('.radio-largo select.t-pipa').append($pipa8);
                    $('.radio-largo select.t-pipa').append($pipa9);
                    $('.radio-largo select.t-pipa').append($pipa10);
                    $('.radio-largo select.t-pipa').append($pipa11);
                    $('.radio-largo select.t-pipa').append($pipa12);
                    $('.radio-largo select.t-pipa').append($pipa14);
                    $('.radio-largo select.t-pipa').append($pipa15);
                    $('.radio-largo select.t-pipa').append($pipa16);
                    $('.radio-largo select.t-pipa').append($pipa17);
                    $('.radio-largo select.t-pipa').append($pipa18);
                    $('.radio-largo select.t-pipa').append($pipa19);
                    $('.radio-largo select.t-pipa').append($pipa20);
                    $('.radio-largo select.t-pipa').append($pipa21);
                    $('.radio-largo select.t-pipa').append($pipa22);
                    $('.radio-largo select.t-pipa').append($pipa23);
                    $('.radio-largo select.t-pipa').closest('.ui-select').find('span').text('4');
                    break;
                case '4':
                case '4 1/2':
                    $('.radio-largo select.t-pipa option').remove();
                    $('.radio-largo select.t-pipa').append($pipa6);
                    $('.radio-largo select.t-pipa').append($pipa7);
                    $('.radio-largo select.t-pipa').append($pipa8);
                    $('.radio-largo select.t-pipa').append($pipa9);
                    $('.radio-largo select.t-pipa').append($pipa10);
                    $('.radio-largo select.t-pipa').append($pipa11);
                    $('.radio-largo select.t-pipa').append($pipa12);
                    $('.radio-largo select.t-pipa').append($pipa14);
                    $('.radio-largo select.t-pipa').append($pipa15);
                    $('.radio-largo select.t-pipa').append($pipa16);
                    $('.radio-largo select.t-pipa').append($pipa17);
                    $('.radio-largo select.t-pipa').append($pipa18);
                    $('.radio-largo select.t-pipa').append($pipa19);
                    $('.radio-largo select.t-pipa').append($pipa20);
                    $('.radio-largo select.t-pipa').append($pipa21);
                    $('.radio-largo select.t-pipa').append($pipa22);
                    $('.radio-largo select.t-pipa').closest('.ui-select').find('span').text('6');
                    break;
                case '5':
                    $('.radio-largo select.t-pipa option').remove();
                    $('.radio-largo select.t-pipa').append($pipa6);
                    $('.radio-largo select.t-pipa').append($pipa7);
                    $('.radio-largo select.t-pipa').append($pipa8);
                    $('.radio-largo select.t-pipa').append($pipa9);
                    $('.radio-largo select.t-pipa').append($pipa10);
                    $('.radio-largo select.t-pipa').append($pipa11);
                    $('.radio-largo select.t-pipa').append($pipa12);
                    $('.radio-largo select.t-pipa').append($pipa14);
                    $('.radio-largo select.t-pipa').append($pipa15);
                    $('.radio-largo select.t-pipa').append($pipa16);
                    $('.radio-largo select.t-pipa').append($pipa17);
                    $('.radio-largo select.t-pipa').append($pipa18);
                    $('.radio-largo select.t-pipa').append($pipa19);
                    $('.radio-largo select.t-pipa').append($pipa20);
                    $('.radio-largo select.t-pipa').append($pipa22);
                    $('.radio-largo select.t-pipa').closest('.ui-select').find('span').text('6');
                    break;
                case '5 1/2':
                    $('.radio-largo select.t-pipa option').remove();
                    $('.radio-largo select.t-pipa').append($pipa6);
                    $('.radio-largo select.t-pipa').append($pipa8);
                    $('.radio-largo select.t-pipa').append($pipa9);
                    $('.radio-largo select.t-pipa').append($pipa10);
                    $('.radio-largo select.t-pipa').append($pipa11);
                    $('.radio-largo select.t-pipa').append($pipa12);
                    $('.radio-largo select.t-pipa').append($pipa14);
                    $('.radio-largo select.t-pipa').append($pipa15);
                    $('.radio-largo select.t-pipa').append($pipa16);
                    $('.radio-largo select.t-pipa').append($pipa17);
                    $('.radio-largo select.t-pipa').append($pipa18);
                    $('.radio-largo select.t-pipa').append($pipa19);
                    $('.radio-largo select.t-pipa').append($pipa20);
                    $('.radio-largo select.t-pipa').append($pipa21);
                    $('.radio-largo select.t-pipa').append($pipa22);
                    $('.radio-largo select.t-pipa').closest('.ui-select').find('span').text('6');
                    break;
                case '6':
                    $('.radio-largo select.t-pipa option').remove();
                    $('.radio-largo select.t-pipa').append($pipa8);
                    $('.radio-largo select.t-pipa').append($pipa10);
                    $('.radio-largo select.t-pipa').append($pipa12);
                    $('.radio-largo select.t-pipa').append($pipa14);
                    $('.radio-largo select.t-pipa').append($pipa16);
                    $('.radio-largo select.t-pipa').append($pipa18);
                    $('.radio-largo select.t-pipa').append($pipa20);
                    $('.radio-largo select.t-pipa').append($pipa22);
                    $('.radio-largo select.t-pipa').closest('.ui-select').find('span').text('8');
                    break;
            }
            $first_click = 0;
        }
    }

});

$('select.t-insulacion-c').not($('label, .no-radio select')).change(function() {
    if($('.radio-corto select.t-insulacion-c').closest('.ui-select').hasClass('active')) {
        console.log('insulacion 90-c');

        $first_click++;
        /* EN CASO DE RADIO LARGO */
        if(/*($first_click > 1) &&*/ !$('.radio-corto').hasClass('hidden')) {
            console.log($first_click > 0);
            /* EN BASE A INSULACION */
            switch($(this).val()) {
                case '1':
                    $('.radio-corto select.t-pipa-c option').remove();
                    $('.radio-corto select.t-pipa-c').append($pipa3);
                    $('.radio-corto select.t-pipa-c').append($pipa4);
                    $('.radio-corto select.t-pipa-c').append($pipa4h);
                    $('.radio-corto select.t-pipa-c').append($pipa5);
                    $('.radio-corto select.t-pipa-c').append($pipa6);
                    $('.radio-corto select.t-pipa-c').closest('.ui-select').find('span').text('3');
                    break;
                case '1 1/2':
                    $('.radio-corto select.t-pipa-c option').remove();
                    $('.radio-corto select.t-pipa-c').append($pipa4);
                    $('.radio-corto select.t-pipa-c').append($pipa4h);
                    $('.radio-corto select.t-pipa-c').append($pipa5);
                    $('.radio-corto select.t-pipa-c').append($pipa6);
                    $('.radio-corto select.t-pipa-c').append($pipa7);
                    $('.radio-corto select.t-pipa-c').append($pipa8);
                    $('.radio-corto select.t-pipa-c').append($pipa9);
                    $('.radio-corto select.t-pipa-c').append($pipa10);
                    $('.radio-corto select.t-pipa-c').append($pipa11);
                    $('.radio-corto select.t-pipa-c').append($pipa12);
                    $('.radio-corto select.t-pipa-c').append($pipa14);
                    $('.radio-corto select.t-pipa-c').append($pipa15);
                    $('.radio-corto select.t-pipa-c').append($pipa16);
                    $('.radio-corto select.t-pipa-c').append($pipa17);
                    $('.radio-corto select.t-pipa-c').append($pipa18);
                    $('.radio-corto select.t-pipa-c').append($pipa19);
                    $('.radio-corto select.t-pipa-c').append($pipa20);
                    $('.radio-corto select.t-pipa-c').append($pipa21);
                    $('.radio-corto select.t-pipa-c').append($pipa22);
                    $('.radio-corto select.t-pipa-c').append($pipa23);
                    $('.radio-corto select.t-pipa-c').closest('.ui-select').find('span').text('4');
                    break;
                case '2':
                    $('.radio-corto select.t-pipa-c option').remove();
                    $('.radio-corto select.t-pipa-c').append($pipa4);
                    $('.radio-corto select.t-pipa-c').append($pipa6);
                    $('.radio-corto select.t-pipa-c').append($pipa7);
                    $('.radio-corto select.t-pipa-c').append($pipa8);
                    $('.radio-corto select.t-pipa-c').append($pipa9);
                    $('.radio-corto select.t-pipa-c').append($pipa10);
                    $('.radio-corto select.t-pipa-c').append($pipa11);
                    $('.radio-corto select.t-pipa-c').append($pipa12);
                    $('.radio-corto select.t-pipa-c').append($pipa14);
                    $('.radio-corto select.t-pipa-c').append($pipa15);
                    $('.radio-corto select.t-pipa-c').append($pipa16);
                    $('.radio-corto select.t-pipa-c').append($pipa17);
                    $('.radio-corto select.t-pipa-c').append($pipa18);
                    $('.radio-corto select.t-pipa-c').append($pipa19);
                    $('.radio-corto select.t-pipa-c').append($pipa20);
                    $('.radio-corto select.t-pipa-c').append($pipa21);
                    $('.radio-corto select.t-pipa-c').append($pipa22);
                    $('.radio-corto select.t-pipa-c').append($pipa23);
                    $('.radio-corto select.t-pipa-c').closest('.ui-select').find('span').text('4');
                    break;
                case '2 1/2':
                    $('.radio-corto select.t-pipa-c option').remove();
                    $('.radio-corto select.t-pipa-c').append($pipa6);
                    $('.radio-corto select.t-pipa-c').append($pipa7);
                    $('.radio-corto select.t-pipa-c').append($pipa8);
                    $('.radio-corto select.t-pipa-c').append($pipa9);
                    $('.radio-corto select.t-pipa-c').append($pipa10);
                    $('.radio-corto select.t-pipa-c').append($pipa11);
                    $('.radio-corto select.t-pipa-c').append($pipa12);
                    $('.radio-corto select.t-pipa-c').append($pipa14);
                    $('.radio-corto select.t-pipa-c').append($pipa15);
                    $('.radio-corto select.t-pipa-c').append($pipa16);
                    $('.radio-corto select.t-pipa-c').append($pipa17);
                    $('.radio-corto select.t-pipa-c').append($pipa18);
                    $('.radio-corto select.t-pipa-c').append($pipa19);
                    $('.radio-corto select.t-pipa-c').append($pipa20);
                    $('.radio-corto select.t-pipa-c').append($pipa21);
                    $('.radio-corto select.t-pipa-c').append($pipa22);
                    $('.radio-corto select.t-pipa-c').append($pipa23);
                    $('.radio-corto select.t-pipa-c').closest('.ui-select').find('span').text('6');
                    break;
                case '3':
                    $('.radio-corto select.t-pipa-c option').remove();
                    $('.radio-corto select.t-pipa-c').append($pipa6);
                    $('.radio-corto select.t-pipa-c').append($pipa8);
                    $('.radio-corto select.t-pipa-c').append($pipa9);
                    $('.radio-corto select.t-pipa-c').append($pipa10);
                    $('.radio-corto select.t-pipa-c').append($pipa11);
                    $('.radio-corto select.t-pipa-c').append($pipa12);
                    $('.radio-corto select.t-pipa-c').append($pipa14);
                    $('.radio-corto select.t-pipa-c').append($pipa16);
                    $('.radio-corto select.t-pipa-c').append($pipa17);
                    $('.radio-corto select.t-pipa-c').append($pipa18);
                    $('.radio-corto select.t-pipa-c').append($pipa19);
                    $('.radio-corto select.t-pipa-c').append($pipa20);
                    $('.radio-corto select.t-pipa-c').append($pipa21);
                    $('.radio-corto select.t-pipa-c').append($pipa22);
                    $('.radio-corto select.t-pipa-c').append($pipa23);
                    $('.radio-corto select.t-pipa-c').closest('.ui-select').find('span').text('6');
                    break;
                case '3 1/2':
                    $('.radio-corto select.t-pipa-c option').remove();
                    $('.radio-corto select.t-pipa-c').append($pipa8);
                    $('.radio-corto select.t-pipa-c').append($pipa10);
                    $('.radio-corto select.t-pipa-c').append($pipa11);
                    $('.radio-corto select.t-pipa-c').append($pipa12);
                    $('.radio-corto select.t-pipa-c').append($pipa14);
                    $('.radio-corto select.t-pipa-c').append($pipa15);
                    $('.radio-corto select.t-pipa-c').append($pipa16);
                    $('.radio-corto select.t-pipa-c').append($pipa17);
                    $('.radio-corto select.t-pipa-c').append($pipa18);
                    $('.radio-corto select.t-pipa-c').append($pipa19);
                    $('.radio-corto select.t-pipa-c').append($pipa20);
                    $('.radio-corto select.t-pipa-c').append($pipa21);
                    $('.radio-corto select.t-pipa-c').append($pipa22);
                    $('.radio-corto select.t-pipa-c').append($pipa23);
                    $('.radio-corto select.t-pipa-c').closest('.ui-select').find('span').text('8');
                    break;
                case '4':
                case '4 1/2':
                    $('.radio-corto select.t-pipa-c option').remove();
                    $('.radio-corto select.t-pipa-c').append($pipa10);
                    $('.radio-corto select.t-pipa-c').append($pipa11);
                    $('.radio-corto select.t-pipa-c').append($pipa12);
                    $('.radio-corto select.t-pipa-c').append($pipa14);
                    $('.radio-corto select.t-pipa-c').append($pipa16);
                    $('.radio-corto select.t-pipa-c').append($pipa17);
                    $('.radio-corto select.t-pipa-c').append($pipa18);
                    $('.radio-corto select.t-pipa-c').append($pipa19);
                    $('.radio-corto select.t-pipa-c').append($pipa20);
                    $('.radio-corto select.t-pipa-c').append($pipa21);
                    $('.radio-corto select.t-pipa-c').append($pipa22);
                    $('.radio-corto select.t-pipa-c').closest('.ui-select').find('span').text('10');
                    break;
                case '5':
                    $('.radio-corto select.t-pipa-c option').remove();
                    $('.radio-corto select.t-pipa-c').append($pipa10);
                    $('.radio-corto select.t-pipa-c').append($pipa12);
                    $('.radio-corto select.t-pipa-c').append($pipa14);
                    $('.radio-corto select.t-pipa-c').append($pipa15);
                    $('.radio-corto select.t-pipa-c').append($pipa16);
                    $('.radio-corto select.t-pipa-c').append($pipa17);
                    $('.radio-corto select.t-pipa-c').append($pipa18);
                    $('.radio-corto select.t-pipa-c').append($pipa19);
                    $('.radio-corto select.t-pipa-c').append($pipa20);
                    $('.radio-corto select.t-pipa-c').append($pipa22);
                    $('.radio-corto select.t-pipa-c').closest('.ui-select').find('span').text('10');
                    break;
                case '5 1/2':
                    $('.radio-corto select.t-pipa-c option').remove();
                    $('.radio-corto select.t-pipa-c').append($pipa12);
                    $('.radio-corto select.t-pipa-c').append($pipa14);
                    $('.radio-corto select.t-pipa-c').append($pipa15);
                    $('.radio-corto select.t-pipa-c').append($pipa16);
                    $('.radio-corto select.t-pipa-c').append($pipa17);
                    $('.radio-corto select.t-pipa-c').append($pipa18);
                    $('.radio-corto select.t-pipa-c').append($pipa19);
                    $('.radio-corto select.t-pipa-c').append($pipa20);
                    $('.radio-corto select.t-pipa-c').append($pipa22);
                    $('.radio-corto select.t-pipa-c').closest('.ui-select').find('span').text('12');
                    break;
                case '6':
                    $('.radio-corto select.t-pipa-c option').remove();
                    $('.radio-corto select.t-pipa-c').append($pipa12);
                    $('.radio-corto select.t-pipa-c').append($pipa14);
                    $('.radio-corto select.t-pipa-c').append($pipa16);
                    $('.radio-corto select.t-pipa-c').append($pipa18);
                    $('.radio-corto select.t-pipa-c').append($pipa20);
                    $('.radio-corto select.t-pipa-c').append($pipa22);
                    $('.radio-corto select.t-pipa-c').closest('.ui-select').find('span').text('12');
                    break;
            }
            $first_click = 0;
        }

    }

});


$('.opt-btn').click(function() {
    if(!$('.radio-l, .radio-c').hasClass('active')){
        $('.radio-l').addClass('active');
    }
    resetSelects();
    $first_click = 0;
    $click_counter = 0;
    $click_counter_2 = 0;
    $('.ui-select').removeClass('active');
    $('input').removeClass('active');
    $('label').not('.radio-l label, .radio-c label').css({color:'rgb(191,191,191)'});
    $('.circle').not('.radio-l .circle, .radio-c .circle').css({'border':'1px solid rgb(191,191,191)', 'background-color':'transparent' });
});

/* ACTIVAR FUNCIONES DE RADIO CORTO Y LARGO Y PONER LOS VALORES DE LOS SELECT EN DEFAULT */


$('.radio-l, .radio-c').click(function() {
    $('.radio-l, .radio-c').removeClass('active');
    $('input[type=text]').removeClass('active');
    $(this).addClass('active');
    if($('.radio-l').hasClass('active')) {
        $('.radio-largo').removeClass('hidden');
        $('.radio-corto').addClass('hidden');
        $("label").css("color","#c0bfbf");
        $("label").prev().css({"border-color":"#c0bfbf", "background-color":"transparent"});
        $('.ui-select').removeClass('active');
        $click_counter = 0;

        $('.radio-largo select.t-pipa option').remove();
        $('.radio-largo select.t-pipa').append($pipa2);
        $('.radio-largo select.t-pipa').append($pipa2h);
        $('.radio-largo select.t-pipa').append($pipa3);
        $('.radio-largo select.t-pipa').append($pipa3h);
        $('.radio-largo select.t-pipa').append($pipa4);
        $('.radio-largo select.t-pipa').append($pipa4h);
        $('.radio-largo select.t-pipa').append($pipa5);
        $('.radio-largo select.t-pipa').append($pipa6);
        $('.radio-largo select.t-pipa').append($pipa7);
        $('.radio-largo select.t-pipa').append($pipa8);
        $('.radio-largo select.t-pipa').append($pipa9);
        $('.radio-largo select.t-pipa').append($pipa10);
        $('.radio-largo select.t-pipa').append($pipa11);
        $('.radio-largo select.t-pipa').append($pipa12);
        $('.radio-largo select.t-pipa').append($pipa14);
        $('.radio-largo select.t-pipa').append($pipa15);
        $('.radio-largo select.t-pipa').append($pipa16);
        $('.radio-largo select.t-pipa').append($pipa17);
        $('.radio-largo select.t-pipa').append($pipa18);
        $('.radio-largo select.t-pipa').append($pipa19);
        $('.radio-largo select.t-pipa').append($pipa20);
        $('.radio-largo select.t-pipa').append($pipa21);
        $('.radio-largo select.t-pipa').append($pipa22);
        $('.radio-largo select.t-pipa').append($pipa23);
        $('.radio-largo select.t-pipa').closest('.ui-select').find('span').text('2');

        $('.radio-largo select.t-insulacion option').remove();
        $('.radio-largo select.t-insulacion').append($insu1);
        $('.radio-largo select.t-insulacion').append($insu2);
        $('.radio-largo select.t-insulacion').append($insu3);
        $('.radio-largo select.t-insulacion').append($insu4);
        $('.radio-largo select.t-insulacion').append($insu5);
        $('.radio-largo select.t-insulacion').append($insu6);
        $('.radio-largo select.t-insulacion').append($insu7);
        $('.radio-largo select.t-insulacion').append($insu8);
        $('.radio-largo select.t-insulacion').append($insu9);
        $('.radio-largo select.t-insulacion').append($insu10);
        $('.radio-largo select.t-insulacion').append($insu11);
        $('.radio-largo select.t-insulacion').closest('.ui-select').find('span').text('1');

    } else if($('.radio-c').hasClass('active')) {
        $('.radio-corto').removeClass('hidden');
        $('.radio-largo').addClass('hidden');
        $("label").css("color","#c0bfbf");
        $("label").prev().css({"border-color":"#c0bfbf", "background-color":"transparent"});
        $('.ui-select').removeClass('active');
        $click_counter = 0;

        $('.radio-corto select.t-pipa-c option').remove();
        $('.radio-corto select.t-pipa-c').append($pipa3);
        $('.radio-corto select.t-pipa-c').append($pipa4);
        $('.radio-corto select.t-pipa-c').append($pipa4h);
        $('.radio-corto select.t-pipa-c').append($pipa5);
        $('.radio-corto select.t-pipa-c').append($pipa6);
        $('.radio-corto select.t-pipa-c').append($pipa7);
        $('.radio-corto select.t-pipa-c').append($pipa8);
        $('.radio-corto select.t-pipa-c').append($pipa9);
        $('.radio-corto select.t-pipa-c').append($pipa10);
        $('.radio-corto select.t-pipa-c').append($pipa11);
        $('.radio-corto select.t-pipa-c').append($pipa12);
        $('.radio-corto select.t-pipa-c').append($pipa14);
        $('.radio-corto select.t-pipa-c').append($pipa15);
        $('.radio-corto select.t-pipa-c').append($pipa16);
        $('.radio-corto select.t-pipa-c').append($pipa17);
        $('.radio-corto select.t-pipa-c').append($pipa18);
        $('.radio-corto select.t-pipa-c').append($pipa19);
        $('.radio-corto select.t-pipa-c').append($pipa20);
        $('.radio-corto select.t-pipa-c').append($pipa21);
        $('.radio-corto select.t-pipa-c').append($pipa22);
        $('.radio-corto select.t-pipa-c').append($pipa23);
        $('.radio-corto select.t-pipa-c').closest('.ui-select').find('span').text('3');

        $('.radio-corto select.t-insulacion-c option').remove();
        $('.radio-corto select.t-insulacion-c').append($insu1);
        $('.radio-corto select.t-insulacion-c').append($insu2);
        $('.radio-corto select.t-insulacion-c').append($insu3);
        $('.radio-corto select.t-insulacion-c').append($insu4);
        $('.radio-corto select.t-insulacion-c').append($insu5);
        $('.radio-corto select.t-insulacion-c').append($insu6);
        $('.radio-corto select.t-insulacion-c').append($insu7);
        $('.radio-corto select.t-insulacion-c').append($insu8);
        $('.radio-corto select.t-insulacion-c').append($insu9);
        $('.radio-corto select.t-insulacion-c').append($insu10);
        $('.radio-corto select.t-insulacion-c').append($insu11);
        $('.radio-corto select.t-insulacion-c').closest('.ui-select').find('span').text('1');
    }
});


/* Funcion para seleccionar decimal o fraccion */

function seleccionInput(valor){
    val = valor.split("");
    for (i = 0; i < val.length; i++ ){
        if (val[i] === "."){
            result = parseFloat(valor);
            break;
        }
      result = convertToDecimal(valor);
    }

    return result
}




/* FUNCIÓN PARA CONVERTIR A DECIMAL */

function convertToDecimal($number) {
    if($number % 1 === 0) {
        return $number;
    } else {
        $number_array = $number.split(' ');
        if($number_array.length == 1) {
            $fraction_array = $number_array[0].split('/');
        } else {
            $fraction_array = $number_array[1].split('/');
        }
        $fraction = $fraction_array[0]/$fraction_array[1];
        if($number_array.length == 1) {
            $decimal = $fraction;
        } else {
            $decimal = parseInt($number_array[0]) + $fraction;
        }
        return $decimal;
    }
}

/* FUNCIÓN PARA CONVERTIR A FRACCIÓN CON RESPECTO A LAS APROXIMACIONES REQUERIDAS */

function convertToFraction($number) {
    if($number % 1 === 0) {
        return $number;
    } else {
        $int = parseInt($number);
        var f = new Fraction($number);
        $fraction = f.numerator + '/' + f.denominator;
        $array = $fraction.split('/');
        $result = parseInt($array[0]) - parseInt($array[1]) * $int;
        $compare = $result / $array[1];
        $compareTemp = $compare;
        $compare = Math.abs($compare);

        if ($compare <= .0625) {
            $result = '1/16';
        } else if ($compare >= .0625 && $compare <= .125) {
            $min = $compare - .0625;
            $max = .125 - $compare;
            if ($min < $max) {
                $result = '1/16';
            } else {
                $result = '1/8';
            }
        } else if ($compare >= .125 && $compare <= .1875) {
            $min = $compare - .125;
            $max = .1875 - $compare;
            if ($min < $max) {
                $result = '1/8';
            } else {
                $result = '3/16';
            }
        } else if ($compare >= .1875 && $compare <= .25) {
            $min = $compare - .1875;
            $max = .25 - $compare;
            if ($min < $max) {
                $result = '3/16';
            } else {
                $result = '1/4';
            }
        } else if ($compare >= .25 && $compare <= .3125) {
            $min = $compare - .25;
            $max = .3125 - $compare;
            if ($min < $max) {
                $result = '1/4';
            } else {
                $result = '5/16';
            }
        } else if ($compare >= .3125 && $compare <= .375) {
            $min = $compare - .3125;
            $max = .375 - $compare;
            if ($min < $max) {
                $result = '5/16';
            } else {
                $result = '3/8';
            }
        } else if ($compare >= .375 && $compare <= .4375) {
            $min = $compare - .375;
            $max = .4375 - $compare;
            if ($min < $max) {
                $result = '3/8';
            } else {
                $result = '7/16';
            }
        } else if ($compare >= .4375 && $compare <= .5) {
            $min = $compare - .4375;
            $max = .5 - $compare;
            if ($min < $max) {
                $result = '7/16';
            } else {
                $result = '1/2';
            }
        } else if ($compare >= .5 && $compare <= .5625) {
            $min = $compare - .5;
            $max = .5625 - $compare;
            if ($min < $max) {
                $result = '1/2';
            } else {
                $result = '9/16';
            }
        } else if ($compare >= .5625 && $compare <= .625) {
            $min = $compare - .5625;
            $max = .625 - $compare;
            if ($min < $max) {
                $result = '9/16';
            } else {
                $result = '5/8';
            }
        } else if ($compare >= .625 && $compare <= .6875) {
            $min = $compare - .625;
            $max = .6875 - $compare;
            if ($min < $max) {
                $result = '5/8';
            } else {
                $result = '11/16';
            }
        } else if ($compare >= .6875 && $compare <= .75) {
            $min = $compare - .6875;
            $max = .75 - $compare;
            if ($min < $max) {
                $result = '11/16';
            } else {
                $result = '3/4';
            }
        } else if ($compare >= .8125 && $compare <= .875) {
            $min = $compare - .8125;
            $max = .875 - $compare;
            if ($min < $max) {
                $result = '13/16';
            } else {
                $result = '7/8';
            }
        } else if ( $compare >= .75 && $compare <= .875 ) {
            $min = $compare - .75;
            $max = .875 - $compare;
            if ($min < $max) {
                $result = '3/4';
            } else {
                $result = '7/8';
            }
        }

         else if ( $compare >= .875 && $compare <= .9375 ) {
            $min = $compare - .875;
            $max = .9375 - $compare;
            if($min < $max) {
                $result = '7/8';
            } else {
                $result = '15/16';
            }
        } else if ( $compare >= 0.9375 ) {
            $result = '15/16';
        }

        if ( $int != 0 ) {
            $result = $int.toString()+' '+$result;
        }else {
            if($compareTemp > 0){
                return $result;
            }else{
                return "-"+$result;
            }
        }
        return $result;
    }
}
/* OPTENER LA LETRA CORRESPONDIENTE A LA CIRCUNFERENCIA */

function getCircumference($pipa, $insu) {


    if( ($pipa == '1/2' && $insu == '1') || ($pipa == '3/4' && $insu == '1') ) {
        $letter = 'A';
    } else if( ($pipa == '1' && $insu == '1') || ($pipa == '1 1/4' && $insu == '1') ) {
        $letter = 'B';
    } else if( ($pipa == '1/2' && $insu == '1 1/2') || ($pipa == '3/4' && $insu == '1 1/2') || ($pipa == '1 1/2' && $insu == '1') ) {
        $letter = 'C';
    } else if( ($pipa == '1' && $insu == '1 1/2') || ($pipa == '2' && $insu == '1') ) {
        $letter = 'D';
    } else if ( ($pipa == '1/2' && $insu == '2') || ($pipa == '3/4' && $insu == '2') || ($pipa == '1 1/4' && $insu == '1 1/2') || ($pipa == '1 1/2' && $insu == '1 1/2') || ($pipa == '2 1/2' && $insu == '1') ) {
        $letter = 'E';
    } else if ( ($pipa == '1' && $insu == '2') || ($pipa == '1 1/4' && $insu == '2') || ($pipa == '2' && $insu == '1 1/2') || ($pipa == '3' && $insu == '1')  ) {
        $letter = 'F';
    } else if ( ($pipa == '1/2' && $insu == '2 1/2') || ($pipa == '3/4' && $insu == '2 1/2') || ($pipa == '1' && $insu == '2 1/2') || ($pipa == '1 1/4' && $insu == '2 1/2') || ($pipa == '1 1/2' && $insu == '2') || ($pipa == '2' && $insu == '2') || ($pipa == '2 1/2' && $insu == '1 1/2') || ($pipa == '3' && $insu == '1 1/2') || ($pipa == '4' && $insu == '1') || ($pipa == '3 1/2' && $insu == '1') ) {
        $letter = 'G';
    } else if ( ($pipa == '1/2' && $insu == '3') || ($pipa == '3/4' && $insu == '3') || ($pipa == '1' && $insu == '3') || ($pipa == '1 1/4' && $insu == '3') || ($pipa == '1 1/2' && $insu == '2 1/2') || ($pipa == '2' && $insu == '2 1/2') || ($pipa == '2 1/2' && $insu == '2') || ($pipa == '3' && $insu == '2') || ($pipa == '4' && $insu == '1 1/2') || ($pipa == '3 1/2' && $insu == '1 1/2') || ($pipa == '4 1/2' && $insu == '1') || ($pipa == '5' && $insu == '1') ) {
        $letter = 'H';
    } else if ( ($pipa == '1/2' && $insu == '3 1/2') || ($pipa == '3/4' && $insu == '3 1/2') || ($pipa == '1' && $insu == '3 1/2') || ($pipa == '1 1/4' && $insu == '3 1/2') || ($pipa == '1 1/2' && $insu == '3') || ($pipa == '2' && $insu == '3') || ($pipa == '2 1/2' && $insu == '2 1/2') || ($pipa == '3' && $insu == '2 1/2') || ($pipa == '4' && $insu == '2') || ($pipa == '6' && $insu == '1') || ($pipa == '3 1/2' && $insu == '2') || ($pipa == '4 1/2' && $insu == '1 1/2') || ($pipa == '5' && $insu == '1 1/2') ) {
        $letter = 'I';
    } else if ( ($pipa == '1/2' && $insu == '4') || ($pipa == '3/4' && $insu == '4') || ($pipa == '1' && $insu == '4') || ($pipa == '1 1/4' && $insu == '4') || ($pipa == '1 1/2' && $insu == '3 1/2') || ($pipa == '2' && $insu == '3 1/2') || ($pipa == '2 1/2' && $insu == '3') || ($pipa == '3' && $insu == '3') || ($pipa == '3 1/2' && $insu == '2 1/2') || ($pipa == '4' && $insu == '2 1/2') || ($pipa == '4 1/2' && $insu == '2') || ($pipa == '6' && $insu == '1 1/2') || ($pipa == '5' && $insu == '2') ) {
        $letter = 'J';
    } else if ( ($pipa == '1/2' && $insu == '4 1/2') || ($pipa == '3/4' && $insu == '4 1/2') || ($pipa == '1' && $insu == '4 1/2') || ($pipa == '1 1/4' && $insu == '4 1/2') || ($pipa == '1 1/2' && $insu == '4') || ($pipa == '2' && $insu == '4') || ($pipa == '2 1/2' && $insu == '3 1/2') || ($pipa == '3' && $insu == '3 1/2') || ($pipa == '3 1/2' && $insu == '3') || ($pipa == '4' && $insu == '3') || ($pipa == '6' && $insu == '2') || ($pipa == '4 1/2' && $insu == '2 1/2') || ($pipa == '5' && $insu == '2 1/2') || ($pipa == '7' && $insu == '1 1/2') ) {
        $letter = 'K';
    } else if ( ($pipa == '1/2' && $insu == '5') || ($pipa == '3/4' && $insu == '5') || ($pipa == '1' && $insu == '5') || ($pipa == '1 1/4' && $insu == '5') || ($pipa == '1 1/2' && $insu == '4 1/2') || ($pipa == '2' && $insu == '4 1/2') || ($pipa == '2 1/2' && $insu == '4') || ($pipa == '3' && $insu == '4') || ($pipa == '3 1/2' && $insu == '3 1/2') || ($pipa == '4' && $insu == '3 1/2') || ($pipa == '6' && $insu == '2 1/2') || ($pipa == '8' && $insu == '1 1/2')  || ($pipa == '4 1/2' && $insu == '3') || ($pipa == '5' && $insu == '3') || ($pipa == '7' && $insu == '2') ) {
        $letter = 'L';
    } else if ( ($pipa == '1/2' && $insu == '5 1/2') || ($pipa == '3/4' && $insu == '5 1/2') || ($pipa == '1' && $insu == '5 1/2') || ($pipa == '1 1/4' && $insu == '5 1/2') || ($pipa == '1 1/2' && $insu == '5') || ($pipa == '2' && $insu == '5') || ($pipa == '2 1/2' && $insu == '4 1/2') || ($pipa == '3' && $insu == '4 1/2') || ($pipa == '3 1/2' && $insu == '4') || ($pipa == '4' && $insu == '4') || ($pipa == '4 1/2' && $insu == '3 1/2') || ($pipa == '5' && $insu == '3 1/2') || ($pipa == '6' && $insu == '3') || ($pipa == '8' && $insu == '2') || ($pipa == '7' && $insu == '2 1/2') || ($pipa == '9' && $insu == '1 1/2') ) {
        $letter = 'M';
    } else if ( ($pipa == '1/2' && $insu == '6') || ($pipa == '3/4' && $insu == '6') || ($pipa == '1' && $insu == '6') || ($pipa == '1 1/4' && $insu == '6') || ($pipa == '1 1/2' && $insu == '5 1/2') || ($pipa == '2' && $insu == '5 1/2') || ($pipa == '2 1/2' && $insu == '5') || ($pipa == '3' && $insu == '5') || ($pipa == '3 1/2' && $insu == '4 1/2') || ($pipa == '4' && $insu == '4 1/2') || ($pipa == '4 1/2' && $insu == '4') || ($pipa == '5' && $insu == '4') || ($pipa == '6' && $insu == '3 1/2') || ($pipa == '8' && $insu == '2 1/2') || ($pipa == '10' && $insu == '1 1/2') || ($pipa == '7' && $insu == '3') || ($pipa == '9' && $insu == '2') ) {
        $letter = 'N';
    } else if ( ($pipa == '1 1/2' && $insu == '6') || ($pipa == '2 1/2' && $insu == '5 1/2') || ($pipa == '3' && $insu == '5 1/2') || ($pipa == '3 1/2' && $insu == '5') || ($pipa == '4' && $insu == '5') || ($pipa == '4 1/2' && $insu == '4 1/2') || ($pipa == '5' && $insu == '4 1/2') || ($pipa == '6' && $insu == '4') || ($pipa == '8' && $insu == '3') || ($pipa == '10' && $insu == '2') || ($pipa == '7' && $insu == '3 1/2') || ($pipa == '9' && $insu == '2 1/2') || ($pipa == '11' && $insu == '1 1/2') ) {
        $letter = 'O';
    } else if ( ($pipa == '2' && $insu == '6') || ($pipa == '2 1/2' && $insu == '6') || ($pipa == '3' && $insu == '6') || ($pipa == '3 1/2' && $insu == '5 1/2') || ($pipa == '4' && $insu == '5 1/2') || ($pipa == '4 1/2' && $insu == '5') || ($pipa == '5' && $insu == '5') || ($pipa == '6' && $insu == '4 1/2') || ($pipa == '8' && $insu == '3 1/2') || ($pipa == '10' && $insu == '2 1/2') || ($pipa == '12' && $insu == '1 1/2') || ($pipa == '7' && $insu == '4') || ($pipa == '9' && $insu == '3') || ($pipa == '11' && $insu == '2') ) {
        $letter = 'P';
    } else if (  ($pipa == '3 1/2' && $insu == '6') || ($pipa == '4' && $insu == '6') || ($pipa == '4 1/2' && $insu == '5 1/2') || ($pipa == '5' && $insu == '5 1/2') || ($pipa == '6' && $insu == '5') || ($pipa == '8' && $insu == '4') || ($pipa == '10' && $insu == '3') || ($pipa == '12' && $insu == '2') || ($pipa == '14' && $insu == '1 1/2') || ($pipa == '7' && $insu == '4 1/2') || ($pipa == '9' && $insu == '3 1/2') || ($pipa == '11' && $insu == '2 1/2') ) {
        $letter = 'Q';
    } else if ( ($pipa == '4 1/2' && $insu == '6') || ($pipa == '5' && $insu == '6') || ($pipa == '6' && $insu == '5 1/2') || ($pipa == '8' && $insu == '4 1/2') || ($pipa == '10' && $insu == '3 1/2') || ($pipa == '12' && $insu == '2 1/2') || ($pipa == '14' && $insu == '2') || ($pipa == '7' && $insu == '5') || ($pipa == '9' && $insu == '4') || ($pipa == '11' && $insu == '3') || ($pipa == '15' && $insu == '1 1/2') ) {
        $letter = 'R';
    } else if ( ($pipa == '6' && $insu == '6') || ($pipa == '7' && $insu == '5 1/2') || ($pipa == '8' && $insu == '5') || ($pipa == '10' && $insu == '4') || ($pipa == '12' && $insu == '3') || ($pipa == '14' && $insu == '2 1/2') || ($pipa == '16' && $insu == '1 1/2') || ($pipa == '9' && $insu == '4 1/2') || ($pipa == '11' && $insu == '3 1/2') || ($pipa == '15' && $insu == '2') ) {
        $letter = 'S';
    } else if ( ($pipa == '7' && $insu == '6') || ($pipa == '8' && $insu == '5 1/2') || ($pipa == '10' && $insu == '4 1/2') || ($pipa == '12' && $insu == '3 1/2') || ($pipa == '14' && $insu == '3') || ($pipa == '16' && $insu == '2') || ($pipa == '9' && $insu == '5') || ($pipa == '11' && $insu == '4') || ($pipa == '15' && $insu == '2 1/2') || ($pipa == '17' && $insu == '1 1/2') ) {
        $letter = 'T';
    } else if ( ($pipa == '8' && $insu == '6') || ($pipa == '10' && $insu == '5') || ($pipa == '12' && $insu == '4') || ($pipa == '14' && $insu == '3 1/2') || ($pipa == '16' && $insu == '2 1/2') || ($pipa == '18' && $insu == '1 1/2') || ($pipa == '9' && $insu == '5 1/2') || ($pipa == '11' && $insu == '4 1/2') || ($pipa == '15' && $insu == '3') || ($pipa == '17' && $insu == '2') ) {
        $letter = 'U';
    } else if ( ($pipa == '9' && $insu == '6') || ($pipa == '10' && $insu == '5 1/2') || ($pipa == '12' && $insu == '4 1/2') || ($pipa == '14' && $insu == '4') || ($pipa == '16' && $insu == '3') || ($pipa == '18' && $insu == '2') || ($pipa == '11' && $insu == '5') || ($pipa == '15' && $insu == '3 1/2') || ($pipa == '17' && $insu == '2 1/2') || ($pipa == '19' && $insu == '1 1/2') ) {
        $letter = 'V';
    } else if ( ($pipa == '10' && $insu == '6') || ($pipa == '12' && $insu == '5') || ($pipa == '14' && $insu == '4 1/2') || ($pipa == '16' && $insu == '3 1/2') || ($pipa == '18' && $insu == '2 1/2') || ($pipa == '20' && $insu == '1 1/2') || ($pipa == '11' && $insu == '5 1/2') || ($pipa == '15' && $insu == '4') || ($pipa == '17' && $insu == '3') || ($pipa == '19' && $insu == '2') ) {
        $letter = 'W';
    } else if ( ($pipa == '11' && $insu == '6') || ($pipa == '12' && $insu == '5 1/2') || ($pipa == '14' && $insu == '5') || ($pipa == '16' && $insu == '4') || ($pipa == '18' && $insu == '3') || ($pipa == '20' && $insu == '2') || ($pipa == '15' && $insu == '4 1/2') || ($pipa == '17' && $insu == '3 1/2') || ($pipa == '19' && $insu == '2 1/2') || ($pipa == '21' && $insu == '1 1/2') ) {
        $letter = 'X';
    } else if ( ($pipa == '12' && $insu == '6') || ($pipa == '14' && $insu == '5 1/2') || ($pipa == '16' && $insu == '4 1/2') || ($pipa == '18' && $insu == '3 1/2') || ($pipa == '20' && $insu == '2 1/2') || ($pipa == '22' && $insu == '1 1/2') || ($pipa == '15' && $insu == '5') || ($pipa == '17' && $insu == '4') || ($pipa == '19' && $insu == '3') || ($pipa == '21' && $insu == '2') ) {
        $letter = 'Y';
    } else if ( ($pipa == '14' && $insu == '6') || ($pipa == '16' && $insu == '5') || ($pipa == '18' && $insu == '4') || ($pipa == '20' && $insu == '3') || ($pipa == '22' && $insu == '2') || ($pipa == '15' && $insu == '5 1/2') || ($pipa == '17' && $insu == '4 1/2') || ($pipa == '19' && $insu == '3 1/2') || ($pipa == '21' && $insu == '2 1/2') || ($pipa == '23' && $insu == '1 1/2') ) {
        $letter = 'Z';
    } else if ( ($pipa == '15' && $insu == '6') || ($pipa == '16' && $insu == '5 1/2') || ($pipa == '18' && $insu == '4 1/2') || ($pipa == '20' && $insu == '3 1/2') || ($pipa == '22' && $insu == '2 1/2') || ($pipa == '17' && $insu == '5') || ($pipa == '19' && $insu == '4') || ($pipa == '21' && $insu == '3') || ($pipa == '23' && $insu == '2') || ($pipa == '24' && $insu == '1 1/2') ) {
        $letter = 'A1';
    } else if ( ($pipa == '16' && $insu == '6') || ($pipa == '18' && $insu == '5') || ($pipa == '20' && $insu == '4') || ($pipa == '22' && $insu == '3') || ($pipa == '17' && $insu == '5 1/2') || ($pipa == '19' && $insu == '4 1/2') || ($pipa == '21' && $insu == '3 1/2') || ($pipa == '23' && $insu == '2 1/2') || ($pipa == '24' && $insu == '2') ) {
        $letter = 'B1';
    } else if ( ($pipa == '17' && $insu == '6') || ($pipa == '18' && $insu == '5 1/2') || ($pipa == '20' && $insu == '4 1/2') || ($pipa == '22' && $insu == '3 1/2') || ($pipa == '19' && $insu == '5') || ($pipa == '21' && $insu == '4') || ($pipa == '23' && $insu == '3') || ($pipa == '24' && $insu == '2 1/2') ) {
        $letter = 'C1';
    } else if ( ($pipa == '18' && $insu == '6') || ($pipa == '20' && $insu == '5') || ($pipa == '22' && $insu == '4') || ($pipa == '19' && $insu == '5 1/2') || ($pipa == '21' && $insu == '4 1/2') || ($pipa == '23' && $insu == '3 1/2') || ($pipa == '24' && $insu == '3') ) {
        $letter = 'D1';
    }

    /* OBTENER LA CIRCUNFERENCIA CORRESPONDIENTE */
    switch($letter) {
        case 'A':
            $circ = convertToDecimal('9 7/16');
            break;
        case 'B':
            $circ = convertToDecimal('11 3/8');
            break;
        case 'C':
            $circ = convertToDecimal('12 15/16');
            break;
        case 'D':
            $circ = convertToDecimal('14 9/16');
            break;
        case 'E':
            $circ = convertToDecimal('16 1/8');
            break;
        case 'F':
            $circ = convertToDecimal('17 7/8');
            break;
        case 'G':
            $circ = convertToDecimal('21 3/16');
            break;
        case 'H':
            $circ = convertToDecimal('24 3/8');
            break;
        case 'I':
            $circ = convertToDecimal('27 1/2');
            break;
        case 'J':
            $circ = convertToDecimal('30 5/8');
            break;
        case 'K':
            $circ = convertToDecimal('34 3/16');
            break;
        case 'L':
            $circ = convertToDecimal('37 5/16');
            break;
        case 'M':
            $circ = convertToDecimal('40 7/16');
            break;
        case 'N':
            $circ = convertToDecimal('44 9/16');
            break;
        case 'O':
            $circ = convertToDecimal('47 3/4');
            break;
        case 'P':
            $circ = convertToDecimal('50 7/8');
            break;
        case 'Q':
            $circ = convertToDecimal('54');
            break;
        case 'R':
            $circ = convertToDecimal('57 1/8');
            break;
        case 'S':
            $circ = convertToDecimal('60 5/16');
            break;
        case 'T':
            $circ = convertToDecimal('63 7/16');
            break;
        case 'U':
            $circ = convertToDecimal('66 9/16');
            break;
        case 'V':
            $circ = convertToDecimal('69 11/16');
            break;
        case 'W':
            $circ = convertToDecimal('72 7/8');
            break;
        case 'X':
            $circ = convertToDecimal('76');
            break;
        case 'Y':
            $circ = convertToDecimal('79 1/8');
            break;
        case 'Z':
            $circ = convertToDecimal('82 1/4');
            break;
        case 'A1':
            $circ = convertToDecimal('85 1/2');
            break;
        case 'B1':
            $circ = convertToDecimal('88 1/2');
            break;
        case 'C1':
            $circ = convertToDecimal('91 3/4');
            break;
        case 'D1':
            $circ = convertToDecimal('94 3/4');
            break
    }

    return $circ;
}

function printCircT() {
    setTimeout(function() {
        $pipa_print = $('#metodo-t .no-radio .first-circ select.t-pipa').val();
        $insu_print = $('#metodo-t .no-radio .first-circ select.t-insulacion').val();

        $circ1_print = convertToFraction(getCircumference($pipa_print, $insu_print));

        $('#metodo-t .result-1').text('Circunferencia: '+$circ1_print + "''");
    }, 150);
}

$('#metodo-t .opt-btn').click(function () {
    printCircT();
});

$('#metodo-t select').change(function() {
    printCircT();
});




/*-------------------------------------------------------------------
 Metodos
 -------------------------------------------------------------------------------------*/



/*----------------------------
 Metodo T
 ------------------------------*/
function metodoT() {

    $('#chalecoT').removeClass('hidden');

    $('#chalecoT').addClass('d-block');

    if($('#metodo-t .man-btn').hasClass('active')) {
        $circ = seleccionInput($('#metodo-t #circ-Tee').val());
    } else {
        if($('#metodo-t .opt-btn').hasClass('active')) {
            $pipa = $('#metodo-t .no-radio select.t-pipa').val();
            $insu = $('#metodo-t .no-radio select.t-insulacion').val();
        }
        $circ = getCircumference($pipa, $insu);
    }

    $r = ( $circ / ( 2*Math.PI ) );
    if( !$.isNumeric($r) || $circ === '' ) {
        $( "#error-numeric" ).popup( "open" );
    } else {

      if ((document.getElementById("tLamina36").checked === true) && ($r > 36)){
        $opcionEscala.popup( "open" );
        $btn1sqr.on( "click", function(){
            $escala = $r/12;
          $nCirc = $circ/$escala;
          calculoMetodoT( $nCirc, $escala);
          $("#circ-Tee").val(convertToFraction($nCirc));
          $btn1sqr.off( "click");
          $opcionEscala.popup( "close" );
        });

        $btn2sqr.on("click", function(){
          $escala = $r/24;
          $nCirc = $circ/$escala;
          calculoMetodoT($nCirc, $escala);
          $("#circ-Tee").val(convertToFraction($nCirc));
          $btn2sqr.off( "click");
          $opcionEscala.popup( "close" );
        });
      }
      if ((document.getElementById("tLamina48").checked === true) && ($r > 48 )){
        $opcionEscala.popup( "open" );
        $btn1sqr.on("click", function(){
          $escala = $r/12;
          $nCirc = $circ/$escala;
          calculoMetodoT($nCirc, $escala);
          $("#circ-Tee").val(convertToFraction($nCirc));
          $btn1sqr.off( "click");
          $opcionEscala.popup( "close" );
        });

        $btn2sqr.on("click", function(){
          $escala = $r/24;
          $nCirc = $circ/$escala;
          calculoMetodoT($nCirc, $escala);
          $("#circ-Tee").val(convertToFraction($nCirc));
          $btn2sqr.off( "click");
          $opcionEscala.popup( "close" );
        });

      }

        calculoMetodoT($circ, 0)



    }
}

function calculoMetodoT($circ, $escala) {
    $nr = ( $circ / ( 2*Math.PI ) );

    $x =  convertToFraction($circ / 16);
    $y =  convertToFraction(Math.round((Math.cos(degreesToRadians(22.5))*$nr)*1000)/1000);
    $z =  convertToFraction(Math.round((Math.cos(degreesToRadians(45))*$nr)*1000)/1000);
    $w = convertToFraction(Math.round((Math.cos(degreesToRadians(67.5))*$nr)*1000)/1000);
    $x1 = convertToFraction($circ / 4);
    $nr = convertToFraction($nr);

  $('#graficaMetodoT .d2').text($w + "''");
  $('#graficaMetodoT .d3').text($z + "''");
  $('#graficaMetodoT .d4').text($y + "''");
  $('#graficaMetodoT .x-size').text($x + "''");
  $('#graficaMetodoT .d1').text($x1 + "''");
  $('#graficaMetodoT .d5').text($nr + "''");
  $('#graficaMetodoT .escalaT').text("Escala: 1");

    if ($escala !== 0) {
        $escala = Math.round($escala * 100)/100;
      $('#graficaMetodoT .escalaT').text("Escala: " + $escala);
    }
}



/*----------------------------
 printCircY
 -----------------------------*/

function printCircY() {
    setTimeout(function() {
        $pipa_print = $('#metodo-y .no-radio .first-circ select.t-pipa').val();
        $insu_print = $('#metodo-y .no-radio .first-circ select.t-insulacion').val();

        $circ1_print = convertToFraction(getCircumference($pipa_print, $insu_print));

        $('#metodo-y .result-1').text('Circunferencia: '+$circ1_print +"''");
    }, 150);
}

$('#metodo-y .opt-btn').click(function () {
    printCircY();
});

$('#metodo-y select').change(function() {
    printCircY();
});
/*----------------------------
 metodoY
 -----------------------------*/
function metodoY() {
    /*
     if( $('#metodo-y #circ').hasClass('active') ) {
     $circ = convertToDecimal($('#metodo-y #circ').val());
     } else {
     $circ = $('#metodo-y #circ-s').val();
     }*/

   /* chalecoY = document.querySelector('#chalecoY');

    console.log(chalecoY);*/

    $('#chalecoY').removeClass('hidden');

    $('#chalecoY').addClass('d-block');

    if($('#metodo-y .man-btn').hasClass('active')) {
        $circ = seleccionInput($('#metodo-y #circ-Yee').val());
    } else {
        if($('#metodo-y .opt-btn').hasClass('active')) {
            $pipa = $('#metodo-y .no-radio select.t-pipa').val();
            $insu = $('#metodo-y .no-radio select.t-insulacion').val();
        }
        $circ = getCircumference($pipa, $insu);
    }

    $r = ( $circ / ( 2*Math.PI ) );
    $e = convertToFraction( ( $circ / 2 ) / 8 );
    $d5 = Math.round(($r*( 1 + ( 1/Math.sin( degreesToRadians(45) ) ) ))*100)/100;
    if( !$.isNumeric($r) || $circ === '' ) {
        $( "#error-numeric" ).popup( "open" );
    } else {

      if ((document.getElementById("tLamina36Y").checked === true) && ($d5 > 36)){
        $opcionEscala.popup( "open" );
        $btn1sqr.on("click", function(){
          $escala = $d5/12;
          $nCirc = $circ/$escala;
          calculoMetodoY( $nCirc, $escala);
          $btn1sqr.off("click");
          $opcionEscala.popup( "close" );
        });

        $btn2sqr.on("click", function(){
          $escala = $d5/24;
          $nCirc = $circ/$escala;
          calculoMetodoY($nCirc, $escala);
          $btn2sqr.off("click");
          $opcionEscala.popup( "close" );
        });



      } else if ((document.getElementById("tLamina48Y").checked === true) && ($d5 > 48 )){
        $opcionEscala.popup( "open" );
        $btn1sqr.on("click", function(){
          $escala = $d5/12;
          $nCirc = $circ/$escala;
          calculoMetodoY($nCirc, $escala);
          $btn1sqr.off("click");
          $opcionEscala.popup( "close" );
        });

        $btn2sqr.on("click", function(){
          $escala = $d5/24;
          $nCirc = $circ/$escala;
          calculoMetodoY($nCirc, $escala);
          $btn2sqr.off("click");
          $opcionEscala.popup( "close" );
        });

      }


      calculoMetodoY($circ, 0);

    }
}

function calculoMetodoY($circ, $escala) {

    $circ1 = $circ;
    $r = ( $circ1 / ( 2*Math.PI ) );
  $e = convertToFraction( ( $circ1 / 2 ) / 8 );
  $e1 = convertToFraction( $circ1 / 2 );
  $d1 = 0;
  $d2 = Math.round(($r*( 1 + ( 1/Math.sin( degreesToRadians(45) ) ) )*( -Math.cos( degreesToRadians(22.5) ) + 1 ))*100)/100;
  $d3 = Math.round(($r*( ( 1/Math.sin( degreesToRadians(45) ) ) - Math.sin( degreesToRadians(45) ) ))*100)/100;
  $d4 = Math.round(($r*( 1 + ( 1/Math.sin( degreesToRadians(45) ) ) )*( -Math.sin( degreesToRadians(22.5) ) + 1 ))*100)/100;
  $d5 = Math.round(($r*( 1 + ( 1/Math.sin( degreesToRadians(45) ) ) ))*100)/100;
  $d6 = Math.round(($r*( ( Math.sin( degreesToRadians(22.5) ) + 1 )+( ( -Math.sin( degreesToRadians(22.5) ) + 1 )/Math.sin( degreesToRadians(45) ) ) ))*100)/100;
  $d7 = Math.round(($r*( Math.sin( degreesToRadians(45) ) + ( 1/Math.sin( degreesToRadians(45) ) ) ))*100)/100;
  $d8 = Math.round(($r*( Math.cos( degreesToRadians(22.5) ) + 1 + ( ( -Math.cos( degreesToRadians(22.5) ) + 1 )/Math.sin( degreesToRadians(45) ) ) ))*100)/100;
  $d9 = Math.round(($r*2)*100)/100;

  $('#graficaMetodoY .d1').text(convertToFraction($d1) +"''");
  $('#graficaMetodoY .d2').text(convertToFraction($d2) + "''");
  $('#graficaMetodoY .d3').text(convertToFraction($d3) + "''");
  $('#graficaMetodoY .d4').text(convertToFraction($d4) + "''");
  $('#graficaMetodoY .d5').text(convertToFraction($d5) + "''");
  $('#graficaMetodoY .d6').text(convertToFraction($d6) + "''");
  $('#graficaMetodoY .d7').text(convertToFraction($d7) + "''");
  $('#graficaMetodoY .d9').text(convertToFraction($d9) + "''");
  $('#graficaMetodoY .d8').text(convertToFraction($d8) + "''");
  $('#graficaMetodoY .e4').text($e1 + "''");
  $('#graficaMetodoY .e5').text($e  + "''");
  $('#graficaMetodoY .escalaY').text("Escala: 1");
  $('#metodo-y #circ-Yee').val(convertToFraction($circ1));

  if ($escala !== 0) {
    $escala = Math.round($escala * 100)/100;
    $('#graficaMetodoY .escalaY').text("Escala: " + $escala);
  }

}


/*----------------------------
 printCircMontura
 -----------------------------*/
function printCircMontura() {
    setTimeout(function() {
        $pipa_print = $('#metodo-montura .no-radio .first-circ select.t-pipa').val();
        $insu_print = $('#metodo-montura .no-radio .first-circ select.t-insulacion').val();
        $pipa2_print = $('#metodo-montura .no-radio .second-circ select.t-pipa').val();
        $insu2_print = $('#metodo-montura .no-radio .second-circ select.t-insulacion').val();

        $circ1_print = convertToFraction(getCircumference($pipa_print, $insu_print));
        $circ2_print = convertToFraction(getCircumference($pipa2_print, $insu2_print));

        $('#metodo-montura .result-1').text(('Circunferencia: '+$circ1_print)+"''");
        $('#metodo-montura .result-2').text(('Circunferencia: '+$circ2_print)+"''");
    }, 150);
}

$('#metodo-montura .opt-btn').click(function () {
    printCircMontura();
});

$('#metodo-montura select').change(function() {
    printCircMontura();
});

/*----------------------------
 metodoMontura
 -----------------------------*/
function metodoMontura() {
    /*
     if( $('#metodo-montura #circ').hasClass('active') ) {
     $circ = convertToDecimal($('#metodo-montura #circ').val());
     $circ2 = convertToDecimal($('#metodo-montura #circ-2').val());
     } else {
     $circ = $('#metodo-montura #circ-s').val();
     $circ2 = $('#metodo-montura #circ-s-2').val();
     }*/

    $('#chalecoMontura').removeClass('hidden');

    $('#chalecoMontura').addClass('d-block');

    if($('#metodo-montura .man-btn').hasClass('active')) {
        $circ1 = seleccionInput($('#metodo-montura #circ-montura1').val());
        $circ2 = seleccionInput($('#metodo-montura #circ-montura2').val());
    } else {
        if($('#metodo-montura .opt-btn').hasClass('active')) {
            $pipa = $('#metodo-montura .no-radio .first-circ select.t-pipa').val();
            $insu = $('#metodo-montura .no-radio .first-circ select.t-insulacion').val();
            $pipa2 = $('#metodo-montura .no-radio .second-circ select.t-pipa').val();
            $insu2 = $('#metodo-montura .no-radio .second-circ select.t-insulacion').val();
        }
        $circ1 = getCircumference($pipa, $insu);
        $circ2 = getCircumference($pipa2, $insu2);
    }

    //$('#metodo-montura .result-1').text('Circunferencia: '+convertToFraction($circ1));
    //$('#metodo-montura .result-2').text('Circunferencia: '+convertToFraction($circ2));

    $r = ( $circ1 / ( 2*Math.PI ) );
    $r2 = ( $circ2 / ( 2*Math.PI ) );
    $e = convertToFraction( ( $circ1 / 4 ) );
    $e5 = convertToFraction( ( $circ1 / 16 ) );
    $d1 = Math.round((
    - Math.sqrt( Math.pow( $r2,2 ) - Math.pow( $r,2 ) ) + $r2 + 1
    )*100)/100;
    console.log($d1);
    if( !$.isNumeric($r) || !$.isNumeric($r2) ) {
        $( "#error-numeric" ).popup( "open" );
    } else if( $r >= $r2 ) {
        $( "#error-montura" ).popup( "open" );
    } else {

      if ((document.getElementById("tLamina36Montura").checked === true) && ($d1 > 36)){
        $opcionEscala.popup( "open" );
        $btn1sqr.on("click", function(){
          $escala = $d1/12;
          $nCirc1 = $circ1/$escala;
          $ncirc2 = $circ2/$escala;
          calculoMetodoMontura( $nCirc1, $ncirc2, $escala);
          $btn1sqr.off("click");
          $opcionEscala.popup( "close" );
        });

        $btn2sqr.on("click", function(){
          $escala = $d1/24;
          $nCirc1 = $circ1/$escala;
          $ncirc2 = $circ2/$escala;
          calculoMetodoMontura( $nCirc1, $ncirc2, $escala);
          $btn2sqr.off("click");
          $opcionEscala.popup( "close" );
        });



      } else if ((document.getElementById("tLamina48Montura").checked === true) && ($d1 > 48 )){
        $opcionEscala.popup( "open" );
        $btn1sqr.on("click", function(){
          $escala = $d1/12;
          $nCirc1 = $circ1/$escala;
          $ncirc2 = $circ2/$escala;
          calculoMetodoMontura( $nCirc1, $ncirc2, $escala);
          $btn1sqr.off("click");
          $opcionEscala.popup( "close" );
        });

        $btn2sqr.on("click", function(){
          $escala = $d1/24;
          $nCirc1 = $circ1/$escala;
          $ncirc2 = $circ2/$escala;
          calculoMetodoMontura( $nCirc1, $ncirc2, $escala);
          $btn2sqr.off("click");
          $opcionEscala.popup( "close" );
        });

      }

        calculoMetodoMontura($circ1, $circ2, 0);

    }
}

function calculoMetodoMontura($circ1, $circ2, $escala){
  $r = ( $circ1 / ( 2*Math.PI ) );
  $r2 = ( $circ2 / ( 2*Math.PI ) );
  $e = convertToFraction( ( $circ1 / 4 ) );
  $e5 = convertToFraction( ( $circ1 / 16 ) );


  $d1 = Math.round((
    - Math.sqrt( Math.pow( $r2,2 ) - Math.pow( $r,2 ) ) + $r2 + 1
  )*100)/100;
  $d2 = Math.round((
    ( - Math.sqrt( Math.pow( $r2,2 ) - Math.pow( $r,2 ) ) + $r2 + 1 ) - ( - Math.sqrt( Math.pow( $r2,2 ) - Math.pow( Math.sin( degreesToRadians(22.5) )*$r,2 ) ) + $r2 )
  )*100)/100;
  $d3 = Math.round((
    ( - Math.sqrt( Math.pow( $r2,2 ) - Math.pow( $r,2 ) ) + $r2 + 1 ) - ( - Math.sqrt( Math.pow( $r2,2 ) - Math.pow( Math.cos( degreesToRadians(45) )*$r,2 ) ) + $r2 )
  )*100)/100;
  $d4 = Math.round((
    ( - Math.sqrt( Math.pow( $r2,2 ) - Math.pow( $r,2 ) ) + $r2 + 1 ) - ( - Math.sqrt( Math.pow( $r2,2 ) - Math.pow( Math.cos( degreesToRadians(22.5) )*$r,2 ) ) + $r2 )
  )*100)/100;
  $d5 = 1;

  $('#graficaMetodoMontura .d1').text(convertToFraction($d1) + "''" );
  $('#graficaMetodoMontura .d2').text(convertToFraction($d2) + "''");
  $('#graficaMetodoMontura .d3').text(convertToFraction($d3) + "''");
  $('#graficaMetodoMontura .d5').text(convertToFraction($d5) + "''");
  $('#graficaMetodoMontura .d4').text(convertToFraction($d4) + "''");
  $('#graficaMetodoMontura .e3').text($e + "''");
  $('#graficaMetodoMontura .e5').text($e5 + "''");
  $('#graficaMetodoMontura .escalaMontura').text("Escala: 1");
  $('#metodo-montura #circ-montura1').val(convertToFraction($circ1));
  $('#metodo-montura #circ-montura2').val(convertToFraction($circ2));
    if ($escala !== 0){
      $escala = Math.round($escala * 100)/100;
      $('#graficaMetodoMontura .escalaMontura').text("Escala: " + $escala);
    }

}

/*----------------------------
 printCirc90
 -----------------------------*/
function printCirc90() {
    setTimeout(function() {
        $pipa_print = $('#metodo-90 .radio-largo select.t-pipa').val();
        $insu_print = $('#metodo-90 .radio-largo select.t-insulacion').val();
        $pipa2_print = $('#metodo-90 .radio-corto select.t-pipa-c').val();
        $insu2_print = $('#metodo-90 .radio-corto select.t-insulacion-c').val();

        $circ1_print = convertToFraction(getCircumference($pipa_print, $insu_print));
        $circ2_print = convertToFraction(getCircumference($pipa2_print, $insu2_print));

        $('#metodo-90 .result-1').text(('Circunferencia: '+$circ1_print)+"''");
        $('#metodo-90 .result-2').text(('Circunferencia: '+$circ2_print)+"''");
    }, 150);
}

$('#metodo-90 .opt-btn').click(function () {
    printCirc90();
});

$('#metodo-90 select').change(function() {
    printCirc90();
});

function printCircGajos90() {
    setTimeout(function() {
        $pipa_print = $('#gajos-90 .radio-largo select.t-pipa').val();
        $insu_print = $('#gajos-90 .radio-largo select.t-insulacion').val();
        $pipa2_print = $('#gajos-90 .radio-corto select.t-pipa-c').val();
        $insu2_print = $('#gajos-90 .radio-corto select.t-insulacion-c').val();

        $circ1_print = convertToFraction(getCircumference($pipa_print, $insu_print));
        $circ2_print = convertToFraction(getCircumference($pipa2_print, $insu2_print));

        $('#gajos-90 .result-1').text(('Circunferencia: '+$circ1_print)+"''");
        $('#gajos-90 .result-2').text(('Circunferencia: '+$circ2_print)+"''");
    }, 150);
}


$('#gajos-90 .opt-btn').click(function () {
    printCircGajos90();
});

$('#gajos-90 select').change(function() {
    printCircGajos90();
});




if($('#radio-l').hasClass('active')){

    $('#90t-pipa option').remove();
    $('#90t-pipa').append($pipa2);
    $('#90t-pipa').append($pipa2h);
    $('#90t-pipa').append($pipa3);
    $('#90t-pipa').append($pipa3h);
    $('#90t-pipa').append($pipa4);
    $('#90t-pipa').append($pipa4h);
    $('#90t-pipa').append($pipa5);
    $('#90t-pipa').append($pipa6);
    $('#90t-pipa').append($pipa7);
    $('#90t-pipa').append($pipa8);
    $('#90t-pipa').append($pipa9);
    $('#90t-pipa').append($pipa10);
    $('#90t-pipa').append($pipa11);
    $('#90t-pipa').append($pipa12);
    $('#90t-pipa').append($pipa14);
    $('#90t-pipa').append($pipa15);
    $('#90t-pipa').append($pipa16);
    $('#90t-pipa').append($pipa17);
    $('#90t-pipa').append($pipa18);
    $('#90t-pipa').append($pipa19);
    $('#90t-pipa').append($pipa20);
    $('#90t-pipa').append($pipa21);
    $('#90t-pipa').append($pipa22);
    $('#90t-pipa').append($pipa23);

   $('#90t-pipa-gajos option').remove();
    $('#90t-pipa-gajos').append($pipa2);
    $('#90t-pipa-gajos').append($pipa2h);
    $('#90t-pipa-gajos').append($pipa3);
    $('#90t-pipa-gajos').append($pipa3h);
    $('#90t-pipa-gajos').append($pipa4);
    $('#90t-pipa-gajos').append($pipa4h);
    $('#90t-pipa-gajos').append($pipa5);
    $('#90t-pipa-gajos').append($pipa6);
    $('#90t-pipa-gajos').append($pipa7);
    $('#90t-pipa-gajos').append($pipa8);
    $('#90t-pipa-gajos').append($pipa9);
    $('#90t-pipa-gajos').append($pipa10);
    $('#90t-pipa-gajos').append($pipa11);
    $('#90t-pipa-gajos').append($pipa12);
    $('#90t-pipa-gajos').append($pipa14);
    $('#90t-pipa-gajos').append($pipa15);
    $('#90t-pipa-gajos').append($pipa16);
    $('#90t-pipa-gajos').append($pipa17);
    $('#90t-pipa-gajos').append($pipa18);
    $('#90t-pipa-gajos').append($pipa19);
    $('#90t-pipa-gajos').append($pipa20);
    $('#90t-pipa-gajos').append($pipa21);
    $('#90t-pipa-gajos').append($pipa22);
    $('#90t-pipa-gajos').append($pipa23);




}



/*
 if($('#radio-c').hasClass('active')) {
 $('.radio-corto select.t-insulacion-c option').remove();
 $('.radio-corto select.t-insulacion-c').append($insu1);
 $('.radio-corto select.t-insulacion-c').append($insu2);
 $('.radio-corto select.t-insulacion-c').append($insu3);
 $('.radio-corto select.t-insulacion-c').append($insu4);
 $('.radio-corto select.t-insulacion-c').append($insu5);
 $('.radio-corto select.t-insulacion-c').append($insu6);
 $('.radio-corto select.t-insulacion-c').append($insu7);
 $('.radio-corto select.t-insulacion-c').append($insu8);
 $('.radio-corto select.t-insulacion-c').append($insu9);
 $('.radio-corto select.t-insulacion-c').append($insu10);
 $('.radio-corto select.t-insulacion-c').append($insu11);
 $('.radio-corto select.t-insulacion-c').closest('.ui-select').find('span').text('1');
 }
 */



else if($('#radio-c').hasClass('active')){

    $('#90t-pipa-c option').remove();
    $('#90t-pipa-c').append($pipa2);
    $('#90t-pipa-c').append($pipa2h);
    $('#90t-pipa-c').append($pipa3);
    $('#90t-pipa-c').append($pipa3h);
    $('#90t-pipa-c').append($pipa4);
    $('#90t-pipa-c').append($pipa4h);
    $('#90t-pipa-c').append($pipa5);
    $('#90t-pipa-c').append($pipa6);
    $('#90t-pipa-c').append($pipa7);
    $('#90t-pipa-c').append($pipa8);
    $('#90t-pipa-c').append($pipa9);
    $('#90t-pipa-c').append($pipa10);
    $('#90t-pipa-c').append($pipa11);
    $('#90t-pipa-c').append($pipa12);
    $('#90t-pipa-c').append($pipa14);
    $('#90t-pipa-c').append($pipa15);
    $('#90t-pipa-c').append($pipa16);
    $('#90t-pipa-c').append($pipa17);
    $('#90t-pipa-c').append($pipa18);
    $('#90t-pipa-c').append($pipa19);
    $('#90t-pipa-c').append($pipa21);
    $('#90t-pipa-c').append($pipa22);

    $('#90t-pipa-gajos-c option').remove();
    $('#90t-pipa-gajos-c').append($pipa2);
    $('#90t-pipa-gajos-c').append($pipa2h);
    $('#90t-pipa-gajos-c').append($pipa3);
    $('#90t-pipa-gajos-c').append($pipa3h);
    $('#90t-pipa-gajos-c').append($pipa4);
    $('#90t-pipa-gajos-c').append($pipa4h);
    $('#90t-pipa-gajos-c').append($pipa5);
    $('#90t-pipa-gajos-c').append($pipa6);
    $('#90t-pipa-gajos-c').append($pipa7);
    $('#90t-pipa-gajos-c').append($pipa8);
    $('#90t-pipa-gajos-c').append($pipa9);
    $('#90t-pipa-gajos-c').append($pipa10);
    $('#90t-pipa-gajos-c').append($pipa11);
    $('#90t-pipa-gajos-c').append($pipa12);
    $('#90t-pipa-gajos-c').append($pipa14);
    $('#90t-pipa-gajos-c').append($pipa15);
    $('#90t-pipa-gajos-c').append($pipa16);
    $('#90t-pipa-gajos-c').append($pipa17);
    $('#90t-pipa-gajos-c').append($pipa18);
    $('#90t-pipa-gajos-c').append($pipa19);
    $('#90t-pipa-gajos-c').append($pipa21);
    $('#90t-pipa-gajos-c').append($pipa22);


}

function metodo90() {
    if($('#metodo-90 .options').hasClass('active')) {
        /* SI LAS FUNCIONES DE RADIO LARGO ESTÁN ACTIVAS */
        if ($('#radio-l').hasClass('active')){

            /*($('#metodo-90 .radio-largo select.t-pipa').closest('.ui-select').hasClass('active') || $('#metodo-90 .radio-largo select.t-insulacion').closest('.ui-select').hasClass('active'))*/
            $pipa = $('#metodo-90 .radio-largo select.t-pipa').val();
            $insu = $('#metodo-90 .radio-largo select.t-insulacion').val();



            /* NÚMERO DE GAJOS (EN BASE A TAMAÑO DE PIPA)*/
            switch($pipa) {
                case '2':
                case '2 1/2':
                case '3':
                case '3 1/2':
                    $gajos = '3';
                    break;
                case '4':
                case '4 1/2':
                case '5':
                    $gajos = '4';
                    break;
                case '6':
                case '7':
                    $gajos = '5';
                    break;
                case '8':
                case '9':
                    $gajos = '6';
                    break;
                case '10':
                case '11':
                case '12':
                case '14':
                case '15':
                case '16':
                case '17':
                    $gajos = '8';
                    break;
                case '18':
                case '19':
                case '20':
                case '21':
                case '22':
                case '23':
                    $gajos = '10';
                    break;
            }


            if( $pipa == '2' && $insu == '1' ) {
                $lomo = '2 5/8';
                $garganta = '1/2';
            } else if ( ($pipa == '2' && $insu == '1 1/2') || ($pipa == '2 1/2' && $insu == '1') ) {
                $lomo = '2 15/16';
                $garganta = '1/4';
            } else if ( ($pipa == '3' && $insu == '1') ) {
                $lomo = '3 11/16';
                $garganta = '1 1/16';
            } else if ( ($pipa == '3' && $insu == '1 1/2') || ($pipa == '3 1/2' && $insu == '1') ) {
                $lomo = '3 15/16';
                $garganta = '3/4';
            } else if ( ($pipa == '3' && $insu == '2') || ($pipa == '3 1/2' && $insu == '1 1/2') ) {
                $lomo = '4 1/4';
                $garganta = '1/2';
            } else if ( ($pipa == '3' && $insu == '2 1/2') || ($pipa == '3 1/2' && $insu == '2') ) {
                $lomo = '4 1/2';
                $garganta = '1/4';
            } else if ( ($pipa == '4' && $insu == '1') ) {
                $lomo = '3 9/16';
                $garganta = '1 1/8';
            } else if ( ($pipa == '4' && $insu == '1 1/2') || ($pipa == '4 1/2' && $insu == '1') || ($pipa == '5' && $insu == '1') ) {
                $lomo = '3 3/4';
                $garganta = '15/16';
            } else if ( ($pipa == '4' && $insu == '2') || ($pipa == '4 1/2' && $insu == '1 1/2') || ($pipa == '5' && $insu == '1 1/2') ) {
                $lomo = '3 15/16';
                $garganta = '3/4';
            } else if ( ($pipa == '4' && $insu == '2 1/2') || ($pipa == '4 1/2' && $insu == '2') || ($pipa == '5' && $insu == '2') ) {
                $lomo = '4 1/8';
                $garganta = '9/16';
            } else if ( ($pipa == '4' && $insu == '3') || ($pipa == '4 1/2' && $insu == '2 1/2') || ($pipa == '5' && $insu == '2 1/2') ) {
                $lomo = '4 3/8';
                $garganta = '5/16';
            } else if ( ($pipa == '4' && $insu == '3 1/2') || ($pipa == '4 1/2' && $insu == '3') || ($pipa == '5' && $insu == '3') ) {
                $lomo = '4 9/16';
                $garganta = '1/8';
            } else if ( ($pipa == '6' && $insu == '1') ) {
                $lomo = '4 1/16';
                $garganta = '1 9/16';
            } else if ( ($pipa == '6' && $insu == '1 1/2') ) {
                $lomo = '4 1/4';
                $garganta = '1 7/16';
            } else if ( ($pipa == '6' && $insu == '2') || ($pipa == '7' && $insu == '1 1/2') ) {
                $lomo = '4 3/8';
                $garganta = '1 1/4';
            } else if ( ($pipa == '6' && $insu == '2 1/2') || ($pipa == '7' && $insu == '2') ) {
                $lomo = '4 9/16';
                $garganta = '1 1/8';
            } else if ( ($pipa == '6' && $insu == '3') || ($pipa == '7' && $insu == '2 1/2') ) {
                $lomo = '4 11/16';
                $garganta = '15/16';
            } else if ( ($pipa == '6' && $insu == '3 1/2') || ($pipa == '7' && $insu == '3') ) {
                $lomo = '4 15/16';
                $garganta = '3/4';
            } else if ( ($pipa == '6' && $insu == '4') || ($pipa == '7' && $insu == '3 1/2') ) {
                $lomo = '5 1/16';
                $garganta = '9/16';
            } else if ( ($pipa == '6' && $insu == '4 1/2') || ($pipa == '7' && $insu == '4') ) {
                $lomo = '5 1/4';
                $garganta = '7/16';
            } else if ( ($pipa == '6' && $insu == '5') || ($pipa == '7' && $insu == '4 1/2') ) {
                $lomo = '5 3/8';
                $garganta = '1/4';
            } else if ( ($pipa == '6' && $insu == '5 1/2') || ($pipa == '7' && $insu == '5') ) {
                $lomo = '5 9/16';
                $garganta = '1/8';
            } else if ( ($pipa == '8' && $insu == '1 1/2') ) {
                $lomo = '4 9/16';
                $garganta = '1 11/16';
            } else if ( ($pipa == '8' && $insu == '2') || ($pipa == '9' && $insu == '1 1/2') ) {
                $lomo = '4 11/16';
                $garganta = '1 9/16';
            } else if ( ($pipa == '8' && $insu == '2 1/2') || ($pipa == '9' && $insu == '2') ) {
                $lomo = '4 7/8';
                $garganta = '1 7/16';
            } else if ( ($pipa == '8' && $insu == '3') || ($pipa == '9' && $insu == '2 1/2') ) {
                $lomo = '5';
                $garganta = '1 1/4';
            } else if ( ($pipa == '8' && $insu == '3 1/2') || ($pipa == '9' && $insu == '3') ) {
                $lomo = '5 1/8';
                $garganta = '1 1/8';
            } else if ( ($pipa == '8' && $insu == '4') || ($pipa == '9' && $insu == '3 1/2') ) {
                $lomo = '5 1/4';
                $garganta = '1';
            } else if ( ($pipa == '8' && $insu == '4 1/2') || ($pipa == '9' && $insu == '4') ) {
                $lomo = '5 3/8';
                $garganta = '7/8';
            } else if ( ($pipa == '8' && $insu == '5') || ($pipa == '9' && $insu == '4 1/2') ) {
                $lomo = '5 1/2';
                $garganta = '3/4';
            } else if ( ($pipa == '8' && $insu == '5 1/2') || ($pipa == '9' && $insu == '5') ) {
                $lomo = '5 11/16';
                $garganta = '5/8';
            } else if ( ($pipa == '8' && $insu == '6') || ($pipa == '9' && $insu == '5 1/2') ) {
                $lomo = '5 13/16';
                $garganta = '1/2';
            } else if ( ($pipa == '10' && $insu == '1 1/2') ) {
                $lomo = '1 1/2';
                $garganta = '1 5/8';
            } else if ( ($pipa == '10' && $insu == '2') || ($pipa == '11' && $insu == '1 1/2') ) {
                $lomo = '4 5/16';
                $garganta = '1 9/16';
            } else if ( ($pipa == '10' && $insu == '2 1/2') || ($pipa == '11' && $insu == '2') ) {
                $lomo = '4 7/16';
                $garganta = '1 7/16';
            } else if ( ($pipa == '10' && $insu == '3') || ($pipa == '11' && $insu == '2 1/2') ) {
                $lomo = '4 1/2';
                $garganta = '1 3/8';
            } else if ( ($pipa == '10' && $insu == '3 1/2') || ($pipa == '11' && $insu == '3') ) {
                $lomo = '4 5/8';
                $garganta = '1 1/4';
            } else if ( ($pipa == '10' && $insu == '4') || ($pipa == '11' && $insu == '3 1/2') ) {
                $lomo = '4 3/4';
                $garganta = '1 3/16';
            } else if ( ($pipa == '10' && $insu == '4 1/2') || ($pipa == '11' && $insu == '4') ) {
                $lomo = '4 13/16';
                $garganta = '1 1/16';
            } else if ( ($pipa == '10' && $insu == '5') || ($pipa == '11' && $insu == '4 1/2') ) {
                $lomo = '4 15/16';
                $garganta = '1';
            } else if ( ($pipa == '10' && $insu == '5 1/2') || ($pipa == '11' && $insu == '5') ) {
                $lomo = '5';
                $garganta = '7/8';
            } else if ( ($pipa == '10' && $insu == '6') || ($pipa == '11' && $insu == '5 1/2') ) {
                $lomo = '5 1/8';
                $garganta = '3/4';
            } else if ( ($pipa == '12' && $insu == '1 1/2') ) {
                $lomo = '5';
                $garganta = '2 1/16';
            } else if ( ($pipa == '12' && $insu == '2') ) {
                $lomo = '5 1/8';
                $garganta = '1 15/16';
            } else if ( ($pipa == '12' && $insu == '2 1/2') ) {
                $lomo = '5 3/16';
                $garganta = '1 7/8';
            } else if ( ($pipa == '12' && $insu == '3') ) {
                $lomo = '5 5/16';
                $garganta = '1 3/4';
            } else if ( ($pipa == '12' && $insu == '3 1/2') ) {
                $lomo = '5 7/16';
                $garganta = '1 5/8';
            } else if ( ($pipa == '12' && $insu == '4') ) {
                $lomo = '5 1/2';
                $garganta = '1 9/16';
            } else if ( ($pipa == '12' && $insu == '4 1/2') ) {
                $lomo = '5 5/8';
                $garganta = '1 7/16';
            } else if ( ($pipa == '12' && $insu == '5') ) {
                $lomo = '5 11/16';
                $garganta = '1 3/8';
            } else if ( ($pipa == '12' && $insu == '5 1/2') ) {
                $lomo = '5 13/16';
                $garganta = '1 1/4';
            } else if ( ($pipa == '12' && $insu == '6') ) {
                $lomo = '5 7/8';
                $garganta = '1 3/16';
            } else if ( ($pipa == '14' && $insu == '1 1/2') ) {
                $lomo = '5 3/4';
                $garganta = '2 7/16';
            } else if ( ($pipa == '14' && $insu == '2') || ($pipa == '15' && $insu == '1 1/2') ) {
                $lomo = '5 7/8';
                $garganta = '2 3/8';
            } else if ( ($pipa == '14' && $insu == '2 1/2') || ($pipa == '15' && $insu == '2') ) {
                $lomo = '6';
                $garganta = '2 1/4';
            } else if ( ($pipa == '14' && $insu == '3') || ($pipa == '15' && $insu == '2 1/2') ) {
                $lomo = '6 1/16';
                $garganta = '2 3/16';
            } else if ( ($pipa == '14' && $insu == '3 1/2') || ($pipa == '15' && $insu == '3') ) {
                $lomo = '6 3/16';
                $garganta = '2 1/16';
            } else if ( ($pipa == '14' && $insu == '4') || ($pipa == '15' && $insu == '3 1/2') ) {
                $lomo = '6 1/4';
                $garganta = '2';
            } else if ( ($pipa == '14' && $insu == '4 1/2') || ($pipa == '15' && $insu == '4') ) {
                $lomo = '6 3/8';
                $garganta = '1 7/8';
            } else if ( ($pipa == '14' && $insu == '5') || ($pipa == '15' && $insu == '4 1/2') ) {
                $lomo = '6 1/2';
                $garganta = '1 3/4';
            } else if ( ($pipa == '14' && $insu == '5 1/2') || ($pipa == '15' && $insu == '5') ) {
                $lomo = '6 9/16';
                $garganta = '1 11/16';
            } else if ( ($pipa == '14' && $insu == '6') || ($pipa == '15' && $insu == '5 1/2') ) {
                $lomo = '6 11/16';
                $garganta = '1 9/16';
            } else if ( ($pipa == '16' && $insu == '1 1/2') ) {
                $lomo = '6 9/16';
                $garganta = '2 7/8';
            } else if ( ($pipa == '16' && $insu == '2') || ($pipa == '17' && $insu == '1 1/2') ) {
                $lomo = '6 11/16';
                $garganta = '2 3/4';
            } else if ( ($pipa == '16' && $insu == '2 1/2') || ($pipa == '17' && $insu == '2') ) {
                $lomo = '6 3/4';
                $garganta = '2 5/8';
            } else if ( ($pipa == '16' && $insu == '3') || ($pipa == '17' && $insu == '2 1/2') ) {
                $lomo = '6 7/8';
                $garganta = '2 9/16';
            } else if ( ($pipa == '16' && $insu == '3 1/2') || ($pipa == '17' && $insu == '3') ) {
                $lomo = '6 15/16';
                $garganta = '2 7/16';
            } else if ( ($pipa == '16' && $insu == '4') || ($pipa == '17' && $insu == '3 1/2') ) {
                $lomo = '7 1/16';
                $garganta = '2 3/8';
            } else if ( ($pipa == '16' && $insu == '4 1/2') || ($pipa == '17' && $insu == '4') ) {
                $lomo = '7 3/16';
                $garganta = '2 1/4';
            } else if ( ($pipa == '16' && $insu == '5') || ($pipa == '17' && $insu == '4 1/2') ) {
                $lomo = '7 1/4';
                $garganta = '2 3/16';
            } else if ( ($pipa == '16' && $insu == '5 1/2') || ($pipa == '17' && $insu == '5') ) {
                $lomo = '7 3/8';
                $garganta = '2 1/16';
            } else if ( ($pipa == '16' && $insu == '6') || ($pipa == '17' && $insu == '5 1/2') ) {
                $lomo = '7 7/16';
                $garganta = '1 15/16';
            } else if ( ($pipa == '18' && $insu == '1 1/2') ) {
                $lomo = '5 7/8';
                $garganta = '2 9/16';
            } else if ( ($pipa == '18' && $insu == '2') || ($pipa == '19' && $insu == '1 1/2') ) {
                $lomo = '5 15/16';
                $garganta = '2 1/2';
            } else if ( ($pipa === '18' && $insu == '2 1/2') || ($pipa == '19' && $insu == '2') ) {
                $lomo = '6 1/16';
                $garganta = '2 7/16';
            } else if ( ($pipa == '18' && $insu == '3') || ($pipa == '19' && $insu == '2 1/2') ) {
                $lomo = '6 1/8';
                $garganta = '2 3/8';
            } else if ( ($pipa == '18' && $insu == '3 1/2') || ($pipa == '19' && $insu == '3') ) {
                $lomo = '6 3/16';
                $garganta = '2 1/4';
            } else if ( ($pipa == '18' && $insu == '4') || ($pipa == '19' && $insu == '3 1/2') ) {
                $lomo = '6 1/4';
                $garganta = '2 3/16';
            } else if ( ($pipa == '18' && $insu == '4 1/2') || ($pipa == '19' && $insu == '4') ) {
                $lomo = '6 3/8';
                $garganta = '2 1/8';
            } else if ( ($pipa == '18' && $insu == '5') || ($pipa == '19' && $insu == '4 1/2') ) {
                $lomo = '6 7/16';
                $garganta = '2 1/16';
            } else if ( ($pipa == '18' && $insu == '5 1/2') || ($pipa == '19' && $insu == '5') ) {
                $lomo = '6 1/2';
                $garganta = '1 15/16';
            } else if ( ($pipa == '18' && $insu == '6') || ($pipa == '19' && $insu == '5 1/2') ) {
                $lomo = '6 5/8';
                $garganta = '1 7/8';
            } else if ( ($pipa == '20' && $insu == '1 1/2') ) {
                $lomo = '6 1/2';
                $garganta = '2 7/8';
            } else if ( ($pipa == '20' && $insu == '2') || ($pipa == '21' && $insu == '1 1/2') ) {
                $lomo = '6 5/8';
                $garganta = '2 13/16';
            } else if ( ($pipa == '20' && $insu == '2 1/2') || ($pipa == '21' && $insu == '2') ) {
                $lomo = '6 11/16';
                $garganta = '2 3/4';
            } else if ( ($pipa == '20' && $insu == '3') || ($pipa == '21' && $insu == '2 1/2') ) {
                $lomo = '6 3/4';
                $garganta = '2 11/16';
            } else if ( ($pipa == '20' && $insu == '3 1/2') || ($pipa == '21' && $insu == '3') ) {
                $lomo = '6 13/16';
                $garganta = '2 9/16';
            } else if ( ($pipa == '20' && $insu == '4') || ($pipa == '21' && $insu == '3 1/2') ) {
                $lomo = '6 15/16';
                $garganta = '2 1/2';
            } else if ( ($pipa == '20' && $insu == '4 1/2') || ($pipa == '21' && $insu == '4') ) {
                $lomo = '7';
                $garganta = '2 7/16';
            } else if ( ($pipa == '20' && $insu == '5') || ($pipa == '21' && $insu == '4 1/2') ) {
                $lomo = '7 1/16';
                $garganta = '2 3/8';
            } else if ( ($pipa == '20' && $insu == '5 1/2') || ($pipa == '21' && $insu == '5') ) {
                $lomo = '7 1/8';
                $garganta = '2 1/4';
            } else if ( ($pipa == '20' && $insu == '6') || ($pipa == '21' && $insu == '5 1/2') ) {
                $lomo = '7 1/4';
                $garganta = '2 3/16';
            }  else if ( ($pipa == '22' && $insu == '1 1/2') ) {
                $lomo = '7 1/8';
                $garganta = '3 3/16';
            } else if ( ($pipa == '22' && $insu == '2') || ($pipa == '23' && $insu == '1 1/2') ) {
                $lomo = '7 1/4';
                $garganta = '3 1/8';
            } else if ( ($pipa == '22' && $insu == '2 1/2') || ($pipa == '23' && $insu == '2') ) {
                $lomo = '7 5/16';
                $garganta = '3 1/16';
            } else if ( ($pipa == '22' && $insu == '3') || ($pipa == '23' && $insu == '2 1/2') ) {
                $lomo = '7 3/8';
                $garganta = '3';
            } else if ( ($pipa == '22' && $insu == '3 1/2') || ($pipa == '23' && $insu == '3') ) {
                $lomo = '7 7/16';
                $garganta = '2 7/8';
            } else if ( ($pipa == '22' && $insu == '4') || ($pipa == '23' && $insu == '3 1/2') ) {
                $lomo = '7 9/16';
                $garganta = '2 13/16';
            }else if ( ($pipa == '22' && $insu == '4 1/2') || ($pipa == '23' && $insu == '4') ) {
                $lomo = '7 5/8';
                $garganta = '2 3/4';
            }else if ( ($pipa == '22' && $insu == '5') || ($pipa == '23' && $insu == '4 1/2') ) {
                $lomo = '7 11/16';
                $garganta = '2 11/16';
            }else if ( ($pipa == '22' && $insu == '5 1/2') || ($pipa == '23' && $insu == '5') ) {
                $lomo = '7 3/4';
                $garganta = '2 9/16';
            }else if ( ($pipa == '22' && $insu == '6') || ($pipa == '23' && $insu == '5 1/2') ) {
                $lomo = '7 7/8';
                $garganta = '2 1/2';
            }



        }



        /* SI LAS FUNCIONES DE RADIO CORTO ESTÁN ACTIVAS */

        if($('#radio-c').hasClass('active')){
            /*
             ($('#metodo-90 .radio-corto select.t-pipa-c').closest('.ui-select').hasClass('active') || $('#metodo-90 .radio-corto select.t-insulacion-c').closest('.ui-select').hasClass('active')) {
             */
            $pipa = $('#metodo-90 .radio-corto select.t-pipa-c').val();
            $insu = $('#metodo-90 .radio-corto select.t-insulacion-c').val();
            printCirc90();
            /* NÚMERO DE GAJOS (EN BASE A TAMAÑO DE PIPA)*/
            switch($pipa) {
                case '3':
                    $gajos = 3;
                    break;
                case '4':
                case '4 1/2':
                case '5':
                    $gajos = 4;
                    break;
                case '6':
                case '7':
                    $gajos = 5;
                    break;
                case '8':
                case '9':
                    $gajos = 6;
                    break;
                case '10':
                case '11':
                    $gajos = 8;
                    break;
                case '12':
                case '14':
                case '15':
                    $gajos = 10;
                    break;
                case '16':
                case '17':
                case '18':
                case '19':
                    $gajos = 12;
                    break;
                case '20':
                case '21':
                case '22':
                case '23':
                    $gajos = 14;
                    break;
            }

            if ( ($pipa == '3' && $insu == '1') ) {
                $lomo = '2 7/8';
                $garganta = '1/4';
            } else if ( ($pipa == '4' && $insu == '1') ) {
                $lomo = '2 3/4';
                $garganta = '3/8';
            }  else if ( ($pipa == '4' && $insu == '1 1/2') || ($pipa == '4 1/2' && $insu == '1') || ($pipa == '5' && $insu == '1') ) {
                $lomo = '2 15/16';
                $garganta = '3/16';
            } else if ( ($pipa == '4' && $insu == '2') || ($pipa == '4 1/2' && $insu == '1 1/2') || ($pipa == '5' && $insu == '1 1/2') ) {
                $lomo = '3 3/16';
                $garganta = '0';
            } else if ( ($pipa == '6' && $insu == '1') ) {
                $lomo = '3 1/8';
                $garganta = '5/8';
            } else if ( ($pipa == '6' && $insu == '1 1/2') ) {
                $lomo = '3 1/4';
                $garganta = '1/2';
            } else if ( ($pipa == '6' && $insu == '2') || ($pipa == '7' && $insu == '1 1/2') ) {
                $lomo = '3 7/16';
                $garganta = '5/16';
            } else if ( ($pipa == '6' && $insu == '2 1/2') || ($pipa == '7' && $insu == '2') ) {
                $lomo = '3 5/8';
                $garganta = '3/16';
            } else if ( ($pipa == '6' && $insu == '3') || ($pipa == '7' && $insu == '2 1/2') ) {
                $lomo = '3 3/4';
                $garganta = '0';
            } else if ( ($pipa == '8' && $insu == '1 1/2') ) {
                $lomo = '3 9/16';
                $garganta = '5/8';
            } else if ( ($pipa == '8' && $insu == '2') || ($pipa == '9' && $insu == '1 1/2') ) {
                $lomo = '3 11/16';
                $garganta = '1/2';
            } else if ( ($pipa == '8' && $insu == '2 1/2') || ($pipa == '9' && $insu == '2') ) {
                $lomo = '3 13/16';
                $garganta = '3/8';
            } else if ( ($pipa == '8' && $insu == '3') || ($pipa == '9' && $insu == '2 1/2') ) {
                $lomo = '3 15/16';
                $garganta = '1/4';
            } else if ( ($pipa == '8' && $insu == '3 1/2') || ($pipa == '9' && $insu == '3') ) {
                $lomo = '4 1/16';
                $garganta = '1/8';
            } else if ( ($pipa == '10' && $insu == '1 1/2') ) {
                $lomo = '3 1/4';
                $garganta = '11/16';
            } else if ( ($pipa == '10' && $insu == '2') || ($pipa == '11' && $insu == '1 1/2') ) {
                $lomo = '3 3/8';
                $garganta = '9/16';
            } else if ( ($pipa == '10' && $insu == '2 1/2') || ($pipa == '11' && $insu == '2') ) {
                $lomo = '3 7/16';
                $garganta = '1/2';
            } else if ( ($pipa == '10' && $insu == '3') || ($pipa == '11' && $insu == '2 1/2') ) {
                $lomo = '3 9/16';
                $garganta = '3/8';
            } else if ( ($pipa == '10' && $insu == '3 1/2') || ($pipa == '11' && $insu == '3') ) {
                $lomo = '3 5/8';
                $garganta = '5/16';
            } else if ( ($pipa == '10' && $insu == '4') || ($pipa == '11' && $insu == '3 1/2') ) {
                $lomo = '3 3/4';
                $garganta = '3/16';
            } else if ( ($pipa == '10' && $insu == '4 1/2') || ($pipa == '11' && $insu == '4') ) {
                $lomo = '3 13/16';
                $garganta = '1/16';
            } else if ( ($pipa == '10' && $insu == '5') || ($pipa == '11' && $insu == '4 1/2') ) {
                $lomo = '3 15/16';
                $garganta = '0';
            } else if ( ($pipa == '12' && $insu == '1 1/2') ) {
                $lomo = '3 1/16';
                $garganta = '11/16';
            } else if ( ($pipa == '12' && $insu == '2')  ) {
                $lomo = '3 1/8';
                $garganta = '5/8';
            } else if ( ($pipa == '12' && $insu == '2 1/2')  ) {
                $lomo = '3 1/4';
                $garganta = '9/16';
            } else if ( ($pipa == '12' && $insu == '3') ) {
                $lomo = '3 5/16';
                $garganta = '7/16';
            } else if ( ($pipa == '12' && $insu == '3 1/2')  ) {
                $lomo = '3 3/8';
                $garganta = '3/8';
            } else if ( ($pipa == '12' && $insu == '4')  ) {
                $lomo = '3 7/16';
                $garganta = '5/16';
            } else if ( ($pipa == '12' && $insu == '4 1/2')   ) {
                $lomo = '3 9/16';
                $garganta = '1/4';
            } else if ( ($pipa == '12' && $insu == '5') ) {
                $lomo = '3 5/8';
                $garganta = '1/8';
            } else if ( ($pipa == '12' && $insu == '5 1/2') ) {
                $lomo = '3 11/16';
                $garganta = '1/16';
            } else if ( ($pipa == '12' && $insu == '6')  ) {
                $lomo = '3 3/4';
                $garganta = '0';
            } else if ( ($pipa == '14' && $insu == '1 1/2') ) {
                $lomo = '3 1/2';
                $garganta = '7/8';
            } else if ( ($pipa == '14' && $insu == '2') || ($pipa == '15' && $insu == '1 1/2') ) {
                $lomo = '3 5/8';
                $garganta = '13/16';
            } else if ( ($pipa == '14' && $insu == '2 1/2') || ($pipa == '15' && $insu == '2') ) {
                $lomo = '3 11/16';
                $garganta = '11/16';
            } else if ( ($pipa == '14' && $insu == '3') || ($pipa == '15' && $insu == '2 1/2') ) {
                $lomo = '3 3/4';
                $garganta = '5/8';
            } else if ( ($pipa == '14' && $insu == '3 1/2') || ($pipa == '15' && $insu == '3') ) {
                $lomo = '3 13/16';
                $garganta = '9/16';
            } else if ( ($pipa == '14' && $insu == '4') || ($pipa == '15' && $insu == '3 1/2') ) {
                $lomo = '3 15/16';
                $garganta = '1/2';
            } else if ( ($pipa == '14' && $insu == '4 1/2') || ($pipa == '15' && $insu == '4') ) {
                $lomo = '4';
                $garganta = '3/8';
            } else if ( ($pipa == '14' && $insu == '5') || ($pipa == '15' && $insu == '4 1/2') ) {
                $lomo = '4 1/16';
                $garganta = '5/16';
            } else if ( ($pipa == '14' && $insu == '5 1/2') || ($pipa == '15' && $insu == '5') ) {
                $lomo = '4 3/16';
                $garganta = '1/4';
            } else if ( ($pipa == '14' && $insu == '6') || ($pipa == '15' && $insu == '5 1/2') ) {
                $lomo = '4 1/4';
                $garganta = '3/16';
            } else if ( ($pipa == '16' && $insu == '1 1/2') ) {
                $lomo = '3 5/16';
                $garganta = '7/8';
            } else if ( ($pipa == '16' && $insu == '2') || ($pipa == '17' && $insu == '1 1/2') ) {
                $lomo = '3 3/8';
                $garganta = '13/16';
            } else if ( ($pipa == '16' && $insu == '2 1/2') || ($pipa == '17' && $insu == '2') ) {
                $lomo = '3 7/16';
                $garganta = '3/4';
            } else if ( ($pipa == '16' && $insu == '3') || ($pipa == '17' && $insu == '2 1/2') ) {
                $lomo = '3 9/16';
                $garganta = '5/8';
            } else if ( ($pipa == '16' && $insu == '3 1/2') || ($pipa == '17' && $insu == '3') ) {
                $lomo = '3 5/8';
                $garganta = '9/16';
            } else if ( ($pipa == '16' && $insu == '4') || ($pipa == '17' && $insu == '3 1/2') ) {
                $lomo = '3 11/16';
                $garganta = '1/2';
            } else if ( ($pipa == '16' && $insu == '4 1/2') || ($pipa == '17' && $insu == '4') ) {
                $lomo = '3 3/4';
                $garganta = '7/16';
            } else if ( ($pipa == '16' && $insu == '5') || ($pipa == '17' && $insu == '4 1/2') ) {
                $lomo = '3 3/16';
                $garganta = '3/8';
            } else if ( ($pipa == '16' && $insu == '5 1/2') || ($pipa == '17' && $insu == '5') ) {
                $lomo = '3 7/8';
                $garganta = '5/16';
            } else if ( ($pipa == '16' && $insu == '6') || ($pipa == '17' && $insu == '5 1/2') ) {
                $lomo = '3 15/16';
                $garganta = '1/4';
            } else if ( ($pipa == '18' && $insu == '1 1/2') ) {
                $lomo = '3 3/4';
                $garganta = '1';
            } else if ( ($pipa == '18' && $insu == '2') || ($pipa == '19' && $insu == '1 1/2') ) {
                $lomo = '3 13/16';
                $garganta = '15/16';
            } else if ( ($pipa == '18' && $insu == '2 1/2') || ($pipa == '19' && $insu == '2') ) {
                $lomo = '3 7/8';
                $garganta = '7/8';
            } else if ( ($pipa == '18' && $insu == '3') || ($pipa == '19' && $insu == '2 1/2') ) {
                $lomo = '3 15/16';
                $garganta = '13/16';
            } else if ( ($pipa == '18' && $insu == '3 1/2') || ($pipa == '19' && $insu == '3') ) {
                $lomo = '4';
                $garganta = '3/4';
            } else if ( ($pipa == '18' && $insu == '4') || ($pipa == '19' && $insu == '3 1/2') ) {
                $lomo = '4 1/16';
                $garganta = '5/8';
            } else if ( ($pipa == '18' && $insu == '4 1/2') || ($pipa == '19' && $insu == '4') ) {
                $lomo = '4 1/8';
                $garganta = '9/16';
            } else if ( ($pipa == '18' && $insu == '5') || ($pipa == '19' && $insu == '4 1/2') ) {
                $lomo = '4 3/16';
                $garganta = '1/2';
            } else if ( ($pipa == '18' && $insu == '5 1/2') || ($pipa == '19' && $insu == '5') ) {
                $lomo = '4 1/4';
                $garganta = '7/16';
            } else if ( ($pipa == '18' && $insu == '6') || ($pipa == '19' && $insu == '5 1/2') ) {
                $lomo = '4 5/16';
                $garganta = '3/8';
            } else if ( ($pipa == '20' && $insu == '1 1/2') ) {
                $lomo = '3 9/16';
                $garganta = '15/16';
            } else if ( ($pipa == '20' && $insu == '2') || ($pipa == '21' && $insu == '1 1/2') ) {
                $lomo = '3 9/16';
                $garganta = '7/8';
            } else if ( ($pipa == '20' && $insu == '2 1/2') || ($pipa == '21' && $insu == '2') ) {
                $lomo = '3 5/8';
                $garganta = '13/16';
            } else if ( ($pipa == '20' && $insu == '3') || ($pipa == '21' && $insu == '2 1/2') ) {
                $lomo = '3 11/16';
                $garganta = '13/16';
            } else if ( ($pipa == '20' && $insu == '3 1/2') || ($pipa == '21' && $insu == '3') ) {
                $lomo = '3 3/4';
                $garganta = '3/4';
            } else if ( ($pipa == '20' && $insu == '4') || ($pipa == '21' && $insu == '3 1/2') ) {
                $lomo = '3 13/16';
                $garganta = '11/16';
            } else if ( ($pipa == '20' && $insu == '4 1/2') || ($pipa == '21' && $insu == '4') ) {
                $lomo = '3 7/8';
                $garganta = '5/8';
            } else if ( ($pipa == '20' && $insu == '5') || ($pipa == '21' && $insu == '4 1/2') ) {
                $lomo = '3 15/16';
                $garganta = '9/16';
            }else if ( ($pipa == '20' && $insu == '5 1/2') || ($pipa == '21' && $insu == '5') ) {
                $lomo = '4';
                $garganta = '1/2';
            }
            else if ( ($pipa == '20' && $insu == '6') || ($pipa == '21' && $insu == '5 1/2') ) {
                $lomo = '4 1/16';
                $garganta = '7/16';
            }
            else if ( ($pipa == '22' && $insu == '1 1/2') ) {
                $lomo = '3 7/8';
                $garganta = '1 1/16';
            } else if ( ($pipa == '22' && $insu == '2') || ($pipa == '23' && $insu == '1 1/2') ) {
                $lomo = '3 15/16';
                $garganta = '1';
            } else if ( ($pipa == '22' && $insu == '2 1/2') || ($pipa == '23' && $insu == '2') ) {
                $lomo = '4';
                $garganta = '15/16';
            } else if ( ($pipa == '22' && $insu == '3') || ($pipa == '23' && $insu == '2 1/2') ) {
                $lomo = '4 1/16';
                $garganta = '7/8';
            } else if ( ($pipa == '22' && $insu == '3 1/2') || ($pipa == '23' && $insu == '3') ) {
                $lomo = '4 1/16';
                $garganta = '13/16';
            } else if ( ($pipa == '22' && $insu == '4') || ($pipa == '23' && $insu == '3 1/2') ) {
                $lomo = '4 1/8';
                $garganta = '13/16';
            }else if ( ($pipa == '22' && $insu == '4 1/2') || ($pipa == '23' && $insu == '4') ) {
                $lomo = '4 3/16';
                $garganta = '3/4';
            }else if ( ($pipa == '22' && $insu == '5') || ($pipa == '23' && $insu == '4 1/2') ) {
                $lomo = '4 1/4';
                $garganta = '11/16';
            }else if ( ($pipa == '22' && $insu == '5 1/2') || ($pipa == '23' && $insu == '5') ) {
                $lomo = '4 5/16';
                $garganta = '5/8';
            }else if ( ($pipa == '22' && $insu == '6') || ($pipa == '23' && $insu == '5 1/2') ) {
                $lomo = '4 3/8';
                $garganta = '9/16';
            }
        }

        $circ = getCircumference($pipa, $insu);
        $garganta = convertToDecimal($garganta);
        $lomo = convertToDecimal($lomo);
        $gajos = ($gajos);

        console.log("pipa "+ $pipa + " insu " + $insu +" circunferencia " +$circ + " lomo" + $lomo + " garganta " + $garganta + " gajo "+ $gajos);

      if( !$.isNumeric($circ) || !$.isNumeric($lomo) || !$.isNumeric($garganta) || !$.isNumeric($gajos) ) {
        $( "#error-numeric" ).popup( "open" );
      } else {

        calculoMetodo90($circ, $lomo, $garganta, $gajos);
      }

    } else if($('#metodo-90 .manual').hasClass('active')) {
        $circ = seleccionInput($('#metodo-90 #circ-90').val());
        $garganta = seleccionInput($('#metodo-90 #garganta').val());
        $gajos = seleccionInput($('#metodo-90 #gajos').val());

      if( !$.isNumeric($circ) || !$.isNumeric($garganta) || !$.isNumeric($gajos) ) {
        $( "#error-numeric" ).popup( "open" );
      } else {
        calculoMetodo90b($circ, $garganta, $gajos);
      }
    }  else if($('#metodo-90 .option-3').hasClass('active')){
        $circ = seleccionInput($('#metodo-90 #circ-90-3').val());
        $garganta = seleccionInput($('#metodo-90 #garganta-3').val());
        $insulacion = seleccionInput($('#metodo-90 #grosor-insu-3').val());
        $gajos = seleccionInput($('#metodo-90 #gajos-3').val());
        if( !$.isNumeric($circ) || !$.isNumeric($garganta) || !$.isNumeric($gajos) ) {
            $( "#error-numeric" ).popup( "open" );
        } else {
            calculoMetodo90c($circ, $garganta, $gajos,$insulacion);
        }
    }


}






function calculoMetodo90($circ, $lomo, $garganta, $gajos){

    $e = Math.round(($circ/4)*100)/100;
    $d2 = Math.round((( $lomo  + 1 )/2)*100)/100;
    /*$d2 = ($lomo/2);*/
    $d4 = Math.round((( $garganta + (3/4) )/2)*100)/100;
    /*$d4 = ($garganta/2);*/
    $d3 = Math.round(( $d4 + (($d2- $d4)/2))*100)/100;

    $('#graficaMetodo90 .d1').text(convertToFraction($d3)+ "''");
    $('#graficaMetodo90 .d2').text(convertToFraction($d2)+ "''");
    $('#graficaMetodo90 .d3').text(convertToFraction($d3)+ "''");
    $('#graficaMetodo90 .d4').text(convertToFraction($d4)+ "''");
    $('#graficaMetodo90 .d5').text(convertToFraction($d3)+ "''");
    $('#graficaMetodo90 .e1').text(convertToFraction($e)+ "''");
    $('#graficaMetodo90 .e2').text(convertToFraction($e)+ "''");
    $('#graficaMetodo90 .e3').text(convertToFraction($e)+ "''");
    $('#graficaMetodo90 .e4').text(convertToFraction($e)+ "''");
    $('#graficaMetodo90 .14').text($gajos + " Gajos");

}

function calculoMetodo90b($circ, $garganta, $gajos){
    $diametro = $circ / Math.PI;
    $r1 = (Math.sin(degreesToRadians(45))*$garganta);
    $r2 = $r1 + $diametro;
    $lGarganta = (.25)*(2*Math.PI*$r1);
    $lLomo = (.25)*(2*Math.PI*$r2);
    $result1 = (($lGarganta/$gajos)+(3/4))/2;
    $result2 = (($lLomo/$gajos)+1)/2;
    $d3 = Math.round(( $result1 + (($result2 - $result1)/2))*100)/100;
    $e = Math.round(($circ/4)*100)/100;

    $('#graficaMetodo90 .d1').text(convertToFraction($d3)+ "''");
    $('#graficaMetodo90 .d2').text(convertToFraction($result2)+ "''");
    $('#graficaMetodo90 .d3').text(convertToFraction($d3)+ "''");
    $('#graficaMetodo90 .d4').text(convertToFraction($result1)+ "''");
    $('#graficaMetodo90 .d5').text(convertToFraction($d3)+ "''");
    $('#graficaMetodo90 .e1').text(convertToFraction($e)+ "''");
    $('#graficaMetodo90 .e2').text(convertToFraction($e)+ "''");
    $('#graficaMetodo90 .e3').text(convertToFraction($e)+ "''");
    $('#graficaMetodo90 .e4').text(convertToFraction($e)+ "''");
    $('#graficaMetodo90 .14').text($gajos + " Gajos");
}

function calculoMetodo90c($circ, $garganta, $gajos, $insulacion){
    $diametro = $circ / Math.PI;
    $r1 = (Math.sin(degreesToRadians(45))*$garganta) - $insulacion;
    $r2 = $r1 + $diametro + 2*$insulacion;
    $lGarganta = (.25)*(2*Math.PI*$r1);
    $lLomo = (.25)*(2*Math.PI*$r2);
    $result1 = (($lGarganta/$gajos)+(3/4))/2;
    $result2 = (($lLomo/$gajos)+1)/2;
    $d3 = Math.round(( $result1 + (($result2 - $result1)/2))*100)/100;
    $e = Math.round(($circ/4)*100)/100;

    $('#graficaMetodo90 .d1').text(convertToFraction($d3)+ "''");
    $('#graficaMetodo90 .d2').text(convertToFraction($result2)+ "''");
    $('#graficaMetodo90 .d3').text(convertToFraction($d3)+ "''");
    $('#graficaMetodo90 .d4').text(convertToFraction($result1)+ "''");
    $('#graficaMetodo90 .d5').text(convertToFraction($d3)+ "''");
    $('#graficaMetodo90 .e1').text(convertToFraction($e)+ "''");
    $('#graficaMetodo90 .e2').text(convertToFraction($e)+ "''");
    $('#graficaMetodo90 .e3').text(convertToFraction($e)+ "''");
    $('#graficaMetodo90 .e4').text(convertToFraction($e)+ "''");
    $('#graficaMetodo90 .14').text($gajos + " Gajos");
}


function calculoGajos90($circ, $lomo, $garganta, $gajos){

    $e = Math.round(($circ/4)*100)/100;
    $d2 = ($lomo/2);
    $d4 = ($garganta/2);
    $d3 = Math.round(( $d4 + (($d2- $d4)/2))*100)/100;

    $('#graficaGajos90 .d1').text(convertToFraction($d3)+ "''");
    $('#graficaGajos90 .d2').text(convertToFraction($d2)+ "''");
    $('#graficaGajos90 .d3').text(convertToFraction($d3)+ "''");
    $('#graficaGajos90 .d4').text(convertToFraction($d4)+ "''");
    $('#graficaGajos90 .d5').text(convertToFraction($d3)+ "''");
    $('#graficaGajos90 .e1').text(convertToFraction($e)+ "''");
    $('#graficaGajos90 .e2').text(convertToFraction($e)+ "''");
    $('#graficaGajos90 .e3').text(convertToFraction($e)+ "''");
    $('#graficaGajos90 .e4').text(convertToFraction($e)+ "''");
    $('#graficaGajos90 .e5').text(convertToFraction($d2*2)+ "''");
    $('#graficaGajos90 .e6').text(convertToFraction($d4*2)+ "''");
    $('#graficaGajos90 .gajos').text($gajos + " Gajos");

}

function calculoGajos90b($circ, $garganta, $insulacion, $gajos){
    $diametro = $circ / Math.PI;
    $r1 = (Math.sin(degreesToRadians(45))*$garganta) - $insulacion;
    $r2 = $r1 + $diametro + 2*$insulacion;
    $lGarganta = (.25)*(2*Math.PI*$r1);
    $lLomo = (.25)*(2*Math.PI*$r2);
    $result1 = (($lGarganta/$gajos))/2;
    $result2 = (($lLomo/$gajos))/2;
    $d3 = Math.round(( $result1 + (($result2 - $result1)/2))*100)/100;
    $e = Math.round(($circ/4)*100)/100;


    $('#graficaGajos90 .d1').text(convertToFraction($d3)+ "''");
    $('#graficaGajos90 .d2').text(convertToFraction($result2)+ "''");
    $('#graficaGajos90 .d3').text(convertToFraction($d3)+ "''");
    $('#graficaGajos90 .d4').text(convertToFraction($result1)+ "''");
    $('#graficaGajos90 .d5').text(convertToFraction($d3)+ "''");
    $('#graficaGajos90 .e1').text(convertToFraction($e)+ "''");
    $('#graficaGajos90 .e2').text(convertToFraction($e)+ "''");
    $('#graficaGajos90 .e3').text(convertToFraction($e)+ "''");
    $('#graficaGajos90 .e4').text(convertToFraction($e)+ "''");
    $('#graficaGajos90 .e5').text(convertToFraction($result2*2)+ "''");
    $('#graficaGajos90 .e6').text(convertToFraction($result1*2)+ "''");
    $('#graficaGajos90 .gajos').text($gajos + " Gajos");
}


function gajos90() {
    if($('#gajos-90 .op1').hasClass('active')) {
        /* SI LAS FUNCIONES DE RADIO LARGO ESTÁN ACTIVAS */
        if ($('#radio-l-gajos').hasClass('active')){

            /*($('#metodo-90 .radio-largo select.t-pipa').closest('.ui-select').hasClass('active') || $('#metodo-90 .radio-largo select.t-insulacion').closest('.ui-select').hasClass('active'))*/
            $pipa = $('#gajos-90 .radio-largo select.t-pipa').val();
            $insu = $('#gajos-90 .radio-largo select.t-insulacion').val();



            /* NÚMERO DE GAJOS (EN BASE A TAMAÑO DE PIPA)*/
            switch($pipa) {
                case '2':
                case '2 1/2':
                case '3':
                case '3 1/2':
                    $gajos = '3';
                    break;
                case '4':
                case '4 1/2':
                case '5':
                    $gajos = '4';
                    break;
                case '6':
                case '7':
                    $gajos = '5';
                    break;
                case '8':
                case '9':
                    $gajos = '6';
                    break;
                case '10':
                case '11':
                case '12':
                case '14':
                case '15':
                case '16':
                case '17':
                    $gajos = '8';
                    break;
                case '18':
                case '19':
                case '20':
                case '21':
                case '22':
                case '23':
                    $gajos = '10';
                    break;
            }


            if( $pipa == '2' && $insu == '1' ) {
                $lomo = '2 5/8';
                $garganta = '1/2';
            } else if ( ($pipa == '2' && $insu == '1 1/2') || ($pipa == '2 1/2' && $insu == '1') ) {
                $lomo = '2 15/16';
                $garganta = '1/4';
            } else if ( ($pipa == '3' && $insu == '1') ) {
                $lomo = '3 11/16';
                $garganta = '1 1/16';
            } else if ( ($pipa == '3' && $insu == '1 1/2') || ($pipa == '3 1/2' && $insu == '1') ) {
                $lomo = '3 15/16';
                $garganta = '3/4';
            } else if ( ($pipa == '3' && $insu == '2') || ($pipa == '3 1/2' && $insu == '1 1/2') ) {
                $lomo = '4 1/4';
                $garganta = '1/2';
            } else if ( ($pipa == '3' && $insu == '2 1/2') || ($pipa == '3 1/2' && $insu == '2') ) {
                $lomo = '4 1/2';
                $garganta = '1/4';
            } else if ( ($pipa == '4' && $insu == '1') ) {
                $lomo = '3 9/16';
                $garganta = '1 1/8';
            } else if ( ($pipa == '4' && $insu == '1 1/2') || ($pipa == '4 1/2' && $insu == '1') || ($pipa == '5' && $insu == '1') ) {
                $lomo = '3 3/4';
                $garganta = '15/16';
            } else if ( ($pipa == '4' && $insu == '2') || ($pipa == '4 1/2' && $insu == '1 1/2') || ($pipa == '5' && $insu == '1 1/2') ) {
                $lomo = '3 15/16';
                $garganta = '3/4';
            } else if ( ($pipa == '4' && $insu == '2 1/2') || ($pipa == '4 1/2' && $insu == '2') || ($pipa == '5' && $insu == '2') ) {
                $lomo = '4 1/8';
                $garganta = '9/16';
            } else if ( ($pipa == '4' && $insu == '3') || ($pipa == '4 1/2' && $insu == '2 1/2') || ($pipa == '5' && $insu == '2 1/2') ) {
                $lomo = '4 3/8';
                $garganta = '5/16';
            } else if ( ($pipa == '4' && $insu == '3 1/2') || ($pipa == '4 1/2' && $insu == '3') || ($pipa == '5' && $insu == '3') ) {
                $lomo = '4 9/16';
                $garganta = '1/8';
            } else if ( ($pipa == '6' && $insu == '1') ) {
                $lomo = '4 1/16';
                $garganta = '1 9/16';
            } else if ( ($pipa == '6' && $insu == '1 1/2') ) {
                $lomo = '4 1/4';
                $garganta = '1 7/16';
            } else if ( ($pipa == '6' && $insu == '2') || ($pipa == '7' && $insu == '1 1/2') ) {
                $lomo = '4 3/8';
                $garganta = '1 1/4';
            } else if ( ($pipa == '6' && $insu == '2 1/2') || ($pipa == '7' && $insu == '2') ) {
                $lomo = '4 9/16';
                $garganta = '1 1/8';
            } else if ( ($pipa == '6' && $insu == '3') || ($pipa == '7' && $insu == '2 1/2') ) {
                $lomo = '4 11/16';
                $garganta = '15/16';
            } else if ( ($pipa == '6' && $insu == '3 1/2') || ($pipa == '7' && $insu == '3') ) {
                $lomo = '4 15/16';
                $garganta = '3/4';
            } else if ( ($pipa == '6' && $insu == '4') || ($pipa == '7' && $insu == '3 1/2') ) {
                $lomo = '5 1/16';
                $garganta = '9/16';
            } else if ( ($pipa == '6' && $insu == '4 1/2') || ($pipa == '7' && $insu == '4') ) {
                $lomo = '5 1/4';
                $garganta = '7/16';
            } else if ( ($pipa == '6' && $insu == '5') || ($pipa == '7' && $insu == '4 1/2') ) {
                $lomo = '5 3/8';
                $garganta = '1/4';
            } else if ( ($pipa == '6' && $insu == '5 1/2') || ($pipa == '7' && $insu == '5') ) {
                $lomo = '5 9/16';
                $garganta = '1/8';
            } else if ( ($pipa == '8' && $insu == '1 1/2') ) {
                $lomo = '4 9/16';
                $garganta = '1 11/16';
            } else if ( ($pipa == '8' && $insu == '2') || ($pipa == '9' && $insu == '1 1/2') ) {
                $lomo = '4 11/16';
                $garganta = '1 9/16';
            } else if ( ($pipa == '8' && $insu == '2 1/2') || ($pipa == '9' && $insu == '2') ) {
                $lomo = '4 7/8';
                $garganta = '1 7/16';
            } else if ( ($pipa == '8' && $insu == '3') || ($pipa == '9' && $insu == '2 1/2') ) {
                $lomo = '5';
                $garganta = '1 1/4';
            } else if ( ($pipa == '8' && $insu == '3 1/2') || ($pipa == '9' && $insu == '3') ) {
                $lomo = '5 1/8';
                $garganta = '1 1/8';
            } else if ( ($pipa == '8' && $insu == '4') || ($pipa == '9' && $insu == '3 1/2') ) {
                $lomo = '5 1/4';
                $garganta = '1';
            } else if ( ($pipa == '8' && $insu == '4 1/2') || ($pipa == '9' && $insu == '4') ) {
                $lomo = '5 3/8';
                $garganta = '7/8';
            } else if ( ($pipa == '8' && $insu == '5') || ($pipa == '9' && $insu == '4 1/2') ) {
                $lomo = '5 1/2';
                $garganta = '3/4';
            } else if ( ($pipa == '8' && $insu == '5 1/2') || ($pipa == '9' && $insu == '5') ) {
                $lomo = '5 11/16';
                $garganta = '5/8';
            } else if ( ($pipa == '8' && $insu == '6') || ($pipa == '9' && $insu == '5 1/2') ) {
                $lomo = '5 13/16';
                $garganta = '1/2';
            } else if ( ($pipa == '10' && $insu == '1 1/2') ) {
                $lomo = '1 1/2';
                $garganta = '1 5/8';
            } else if ( ($pipa == '10' && $insu == '2') || ($pipa == '11' && $insu == '1 1/2') ) {
                $lomo = '4 5/16';
                $garganta = '1 9/16';
            } else if ( ($pipa == '10' && $insu == '2 1/2') || ($pipa == '11' && $insu == '2') ) {
                $lomo = '4 7/16';
                $garganta = '1 7/16';
            } else if ( ($pipa == '10' && $insu == '3') || ($pipa == '11' && $insu == '2 1/2') ) {
                $lomo = '4 1/2';
                $garganta = '1 3/8';
            } else if ( ($pipa == '10' && $insu == '3 1/2') || ($pipa == '11' && $insu == '3') ) {
                $lomo = '4 5/8';
                $garganta = '1 1/4';
            } else if ( ($pipa == '10' && $insu == '4') || ($pipa == '11' && $insu == '3 1/2') ) {
                $lomo = '4 3/4';
                $garganta = '1 3/16';
            } else if ( ($pipa == '10' && $insu == '4 1/2') || ($pipa == '11' && $insu == '4') ) {
                $lomo = '4 13/16';
                $garganta = '1 1/16';
            } else if ( ($pipa == '10' && $insu == '5') || ($pipa == '11' && $insu == '4 1/2') ) {
                $lomo = '4 15/16';
                $garganta = '1';
            } else if ( ($pipa == '10' && $insu == '5 1/2') || ($pipa == '11' && $insu == '5') ) {
                $lomo = '5';
                $garganta = '7/8';
            } else if ( ($pipa == '10' && $insu == '6') || ($pipa == '11' && $insu == '5 1/2') ) {
                $lomo = '5 1/8';
                $garganta = '3/4';
            } else if ( ($pipa == '12' && $insu == '1 1/2') ) {
                $lomo = '5';
                $garganta = '2 1/16';
            } else if ( ($pipa == '12' && $insu == '2') ) {
                $lomo = '5 1/8';
                $garganta = '1 15/16';
            } else if ( ($pipa == '12' && $insu == '2 1/2') ) {
                $lomo = '5 3/16';
                $garganta = '1 7/8';
            } else if ( ($pipa == '12' && $insu == '3') ) {
                $lomo = '5 5/16';
                $garganta = '1 3/4';
            } else if ( ($pipa == '12' && $insu == '3 1/2') ) {
                $lomo = '5 7/16';
                $garganta = '1 5/8';
            } else if ( ($pipa == '12' && $insu == '4') ) {
                $lomo = '5 1/2';
                $garganta = '1 9/16';
            } else if ( ($pipa == '12' && $insu == '4 1/2') ) {
                $lomo = '5 5/8';
                $garganta = '1 7/16';
            } else if ( ($pipa == '12' && $insu == '5') ) {
                $lomo = '5 11/16';
                $garganta = '1 3/8';
            } else if ( ($pipa == '12' && $insu == '5 1/2') ) {
                $lomo = '5 13/16';
                $garganta = '1 1/4';
            } else if ( ($pipa == '12' && $insu == '6') ) {
                $lomo = '5 7/8';
                $garganta = '1 3/16';
            } else if ( ($pipa == '14' && $insu == '1 1/2') ) {
                $lomo = '5 3/4';
                $garganta = '2 7/16';
            } else if ( ($pipa == '14' && $insu == '2') || ($pipa == '15' && $insu == '1 1/2') ) {
                $lomo = '5 7/8';
                $garganta = '2 3/8';
            } else if ( ($pipa == '14' && $insu == '2 1/2') || ($pipa == '15' && $insu == '2') ) {
                $lomo = '6';
                $garganta = '2 1/4';
            } else if ( ($pipa == '14' && $insu == '3') || ($pipa == '15' && $insu == '2 1/2') ) {
                $lomo = '6 1/16';
                $garganta = '2 3/16';
            } else if ( ($pipa == '14' && $insu == '3 1/2') || ($pipa == '15' && $insu == '3') ) {
                $lomo = '6 3/16';
                $garganta = '2 1/16';
            } else if ( ($pipa == '14' && $insu == '4') || ($pipa == '15' && $insu == '3 1/2') ) {
                $lomo = '6 1/4';
                $garganta = '2';
            } else if ( ($pipa == '14' && $insu == '4 1/2') || ($pipa == '15' && $insu == '4') ) {
                $lomo = '6 3/8';
                $garganta = '1 7/8';
            } else if ( ($pipa == '14' && $insu == '5') || ($pipa == '15' && $insu == '4 1/2') ) {
                $lomo = '6 1/2';
                $garganta = '1 3/4';
            } else if ( ($pipa == '14' && $insu == '5 1/2') || ($pipa == '15' && $insu == '5') ) {
                $lomo = '6 9/16';
                $garganta = '1 11/16';
            } else if ( ($pipa == '14' && $insu == '6') || ($pipa == '15' && $insu == '5 1/2') ) {
                $lomo = '6 11/16';
                $garganta = '1 9/16';
            } else if ( ($pipa == '16' && $insu == '1 1/2') ) {
                $lomo = '6 9/16';
                $garganta = '2 7/8';
            } else if ( ($pipa == '16' && $insu == '2') || ($pipa == '17' && $insu == '1 1/2') ) {
                $lomo = '6 11/16';
                $garganta = '2 3/4';
            } else if ( ($pipa == '16' && $insu == '2 1/2') || ($pipa == '17' && $insu == '2') ) {
                $lomo = '6 3/4';
                $garganta = '2 5/8';
            } else if ( ($pipa == '16' && $insu == '3') || ($pipa == '17' && $insu == '2 1/2') ) {
                $lomo = '6 7/8';
                $garganta = '2 9/16';
            } else if ( ($pipa == '16' && $insu == '3 1/2') || ($pipa == '17' && $insu == '3') ) {
                $lomo = '6 15/16';
                $garganta = '2 7/16';
            } else if ( ($pipa == '16' && $insu == '4') || ($pipa == '17' && $insu == '3 1/2') ) {
                $lomo = '7 1/16';
                $garganta = '2 3/8';
            } else if ( ($pipa == '16' && $insu == '4 1/2') || ($pipa == '17' && $insu == '4') ) {
                $lomo = '7 3/16';
                $garganta = '2 1/4';
            } else if ( ($pipa == '16' && $insu == '5') || ($pipa == '17' && $insu == '4 1/2') ) {
                $lomo = '7 1/4';
                $garganta = '2 3/16';
            } else if ( ($pipa == '16' && $insu == '5 1/2') || ($pipa == '17' && $insu == '5') ) {
                $lomo = '7 3/8';
                $garganta = '2 1/16';
            } else if ( ($pipa == '16' && $insu == '6') || ($pipa == '17' && $insu == '5 1/2') ) {
                $lomo = '7 7/16';
                $garganta = '1 15/16';
            } else if ( ($pipa == '18' && $insu == '1 1/2') ) {
                $lomo = '5 7/8';
                $garganta = '2 9/16';
            } else if ( ($pipa == '18' && $insu == '2') || ($pipa == '19' && $insu == '1 1/2') ) {
                $lomo = '5 15/16';
                $garganta = '2 1/2';
            } else if ( ($pipa === '18' && $insu == '2 1/2') || ($pipa == '19' && $insu == '2') ) {
                $lomo = '6 1/16';
                $garganta = '2 7/16';
            } else if ( ($pipa == '18' && $insu == '3') || ($pipa == '19' && $insu == '2 1/2') ) {
                $lomo = '6 1/8';
                $garganta = '2 3/8';
            } else if ( ($pipa == '18' && $insu == '3 1/2') || ($pipa == '19' && $insu == '3') ) {
                $lomo = '6 3/16';
                $garganta = '2 1/4';
            } else if ( ($pipa == '18' && $insu == '4') || ($pipa == '19' && $insu == '3 1/2') ) {
                $lomo = '6 1/4';
                $garganta = '2 3/16';
            } else if ( ($pipa == '18' && $insu == '4 1/2') || ($pipa == '19' && $insu == '4') ) {
                $lomo = '6 3/8';
                $garganta = '2 1/8';
            } else if ( ($pipa == '18' && $insu == '5') || ($pipa == '19' && $insu == '4 1/2') ) {
                $lomo = '6 7/16';
                $garganta = '2 1/16';
            } else if ( ($pipa == '18' && $insu == '5 1/2') || ($pipa == '19' && $insu == '5') ) {
                $lomo = '6 1/2';
                $garganta = '1 15/16';
            } else if ( ($pipa == '18' && $insu == '6') || ($pipa == '19' && $insu == '5 1/2') ) {
                $lomo = '6 5/8';
                $garganta = '1 7/8';
            } else if ( ($pipa == '20' && $insu == '1 1/2') ) {
                $lomo = '6 1/2';
                $garganta = '2 7/8';
            } else if ( ($pipa == '20' && $insu == '2') || ($pipa == '21' && $insu == '1 1/2') ) {
                $lomo = '6 5/8';
                $garganta = '2 13/16';
            } else if ( ($pipa == '20' && $insu == '2 1/2') || ($pipa == '21' && $insu == '2') ) {
                $lomo = '6 11/16';
                $garganta = '2 3/4';
            } else if ( ($pipa == '20' && $insu == '3') || ($pipa == '21' && $insu == '2 1/2') ) {
                $lomo = '6 3/4';
                $garganta = '2 11/16';
            } else if ( ($pipa == '20' && $insu == '3 1/2') || ($pipa == '21' && $insu == '3') ) {
                $lomo = '6 13/16';
                $garganta = '2 9/16';
            } else if ( ($pipa == '20' && $insu == '4') || ($pipa == '21' && $insu == '3 1/2') ) {
                $lomo = '6 15/16';
                $garganta = '2 1/2';
            } else if ( ($pipa == '20' && $insu == '4 1/2') || ($pipa == '21' && $insu == '4') ) {
                $lomo = '7';
                $garganta = '2 7/16';
            } else if ( ($pipa == '20' && $insu == '5') || ($pipa == '21' && $insu == '4 1/2') ) {
                $lomo = '7 1/16';
                $garganta = '2 3/8';
            } else if ( ($pipa == '20' && $insu == '5 1/2') || ($pipa == '21' && $insu == '5') ) {
                $lomo = '7 1/8';
                $garganta = '2 1/4';
            } else if ( ($pipa == '20' && $insu == '6') || ($pipa == '21' && $insu == '5 1/2') ) {
                $lomo = '7 1/4';
                $garganta = '2 3/16';
            }  else if ( ($pipa == '22' && $insu == '1 1/2') ) {
                $lomo = '7 1/8';
                $garganta = '3 3/16';
            } else if ( ($pipa == '22' && $insu == '2') || ($pipa == '23' && $insu == '1 1/2') ) {
                $lomo = '7 1/4';
                $garganta = '3 1/8';
            } else if ( ($pipa == '22' && $insu == '2 1/2') || ($pipa == '23' && $insu == '2') ) {
                $lomo = '7 5/16';
                $garganta = '3 1/16';
            } else if ( ($pipa == '22' && $insu == '3') || ($pipa == '23' && $insu == '2 1/2') ) {
                $lomo = '7 3/8';
                $garganta = '3';
            } else if ( ($pipa == '22' && $insu == '3 1/2') || ($pipa == '23' && $insu == '3') ) {
                $lomo = '7 7/16';
                $garganta = '2 7/8';
            } else if ( ($pipa == '22' && $insu == '4') || ($pipa == '23' && $insu == '3 1/2') ) {
                $lomo = '7 9/16';
                $garganta = '2 13/16';
            }else if ( ($pipa == '22' && $insu == '4 1/2') || ($pipa == '23' && $insu == '4') ) {
                $lomo = '7 5/8';
                $garganta = '2 3/4';
            }else if ( ($pipa == '22' && $insu == '5') || ($pipa == '23' && $insu == '4 1/2') ) {
                $lomo = '7 11/16';
                $garganta = '2 11/16';
            }else if ( ($pipa == '22' && $insu == '5 1/2') || ($pipa == '23' && $insu == '5') ) {
                $lomo = '7 3/4';
                $garganta = '2 9/16';
            }else if ( ($pipa == '22' && $insu == '6') || ($pipa == '23' && $insu == '5 1/2') ) {
                $lomo = '7 7/8';
                $garganta = '2 1/2';
            }



        }


        /* SI LAS FUNCIONES DE RADIO CORTO ESTÁN ACTIVAS */

        if($('#radio-c-gajos').hasClass('active')){
            /*
             ($('#metodo-90 .radio-corto select.t-pipa-c').closest('.ui-select').hasClass('active') || $('#metodo-90 .radio-corto select.t-insulacion-c').closest('.ui-select').hasClass('active')) {
             */
            $pipa = $('#gajos-90 .radio-corto select.t-pipa-c').val();
            $insu = $('#gajos-90 .radio-corto select.t-insulacion-c').val();

            /* NÚMERO DE GAJOS (EN BASE A TAMAÑO DE PIPA)*/
            switch($pipa) {
                case '3':
                    $gajos = 3;
                    break;
                case '4':
                case '4 1/2':
                case '5':
                    $gajos = 4;
                    break;
                case '6':
                case '7':
                    $gajos = 5;
                    break;
                case '8':
                case '9':
                    $gajos = 6;
                    break;
                case '10':
                case '11':
                    $gajos = 8;
                    break;
                case '12':
                case '14':
                case '15':
                    $gajos = 10;
                    break;
                case '16':
                case '17':
                case '18':
                case '19':
                    $gajos = 12;
                    break;
                case '20':
                case '21':
                case '22':
                case '23':
                    $gajos = 14;
                    break;
            }

            if ( ($pipa == '3' && $insu == '1') ) {
                $lomo = '2 7/8';
                $garganta = '1/4';
            } else if ( ($pipa == '4' && $insu == '1') ) {
                $lomo = '2 3/4';
                $garganta = '3/8';
            }  else if ( ($pipa == '4' && $insu == '1 1/2') || ($pipa == '4 1/2' && $insu == '1') || ($pipa == '5' && $insu == '1') ) {
                $lomo = '2 15/16';
                $garganta = '3/16';
            } else if ( ($pipa == '4' && $insu == '2') || ($pipa == '4 1/2' && $insu == '1 1/2') || ($pipa == '5' && $insu == '1 1/2') ) {
                $lomo = '3 3/16';
                $garganta = '0';
            } else if ( ($pipa == '6' && $insu == '1') ) {
                $lomo = '3 1/8';
                $garganta = '5/8';
            } else if ( ($pipa == '6' && $insu == '1 1/2') ) {
                $lomo = '3 1/4';
                $garganta = '1/2';
            } else if ( ($pipa == '6' && $insu == '2') || ($pipa == '7' && $insu == '1 1/2') ) {
                $lomo = '3 7/16';
                $garganta = '5/16';
            } else if ( ($pipa == '6' && $insu == '2 1/2') || ($pipa == '7' && $insu == '2') ) {
                $lomo = '3 5/8';
                $garganta = '3/16';
            } else if ( ($pipa == '6' && $insu == '3') || ($pipa == '7' && $insu == '2 1/2') ) {
                $lomo = '3 3/4';
                $garganta = '0';
            } else if ( ($pipa == '8' && $insu == '1 1/2') ) {
                $lomo = '3 9/16';
                $garganta = '5/8';
            } else if ( ($pipa == '8' && $insu == '2') || ($pipa == '9' && $insu == '1 1/2') ) {
                $lomo = '3 11/16';
                $garganta = '1/2';
            } else if ( ($pipa == '8' && $insu == '2 1/2') || ($pipa == '9' && $insu == '2') ) {
                $lomo = '3 13/16';
                $garganta = '3/8';
            } else if ( ($pipa == '8' && $insu == '3') || ($pipa == '9' && $insu == '2 1/2') ) {
                $lomo = '3 15/16';
                $garganta = '1/4';
            } else if ( ($pipa == '8' && $insu == '3 1/2') || ($pipa == '9' && $insu == '3') ) {
                $lomo = '4 1/16';
                $garganta = '1/8';
            } else if ( ($pipa == '10' && $insu == '1 1/2') ) {
                $lomo = '3 1/4';
                $garganta = '11/16';
            } else if ( ($pipa == '10' && $insu == '2') || ($pipa == '11' && $insu == '1 1/2') ) {
                $lomo = '3 3/8';
                $garganta = '9/16';
            } else if ( ($pipa == '10' && $insu == '2 1/2') || ($pipa == '11' && $insu == '2') ) {
                $lomo = '3 7/16';
                $garganta = '1/2';
            } else if ( ($pipa == '10' && $insu == '3') || ($pipa == '11' && $insu == '2 1/2') ) {
                $lomo = '3 9/16';
                $garganta = '3/8';
            } else if ( ($pipa == '10' && $insu == '3 1/2') || ($pipa == '11' && $insu == '3') ) {
                $lomo = '3 5/8';
                $garganta = '5/16';
            } else if ( ($pipa == '10' && $insu == '4') || ($pipa == '11' && $insu == '3 1/2') ) {
                $lomo = '3 3/4';
                $garganta = '3/16';
            } else if ( ($pipa == '10' && $insu == '4 1/2') || ($pipa == '11' && $insu == '4') ) {
                $lomo = '3 13/16';
                $garganta = '1/16';
            } else if ( ($pipa == '10' && $insu == '5') || ($pipa == '11' && $insu == '4 1/2') ) {
                $lomo = '3 15/16';
                $garganta = '0';
            } else if ( ($pipa == '12' && $insu == '1 1/2') ) {
                $lomo = '3 1/16';
                $garganta = '11/16';
            } else if ( ($pipa == '12' && $insu == '2')  ) {
                $lomo = '3 1/8';
                $garganta = '5/8';
            } else if ( ($pipa == '12' && $insu == '2 1/2')  ) {
                $lomo = '3 1/4';
                $garganta = '9/16';
            } else if ( ($pipa == '12' && $insu == '3') ) {
                $lomo = '3 5/16';
                $garganta = '7/16';
            } else if ( ($pipa == '12' && $insu == '3 1/2')  ) {
                $lomo = '3 3/8';
                $garganta = '3/8';
            } else if ( ($pipa == '12' && $insu == '4')  ) {
                $lomo = '3 7/16';
                $garganta = '5/16';
            } else if ( ($pipa == '12' && $insu == '4 1/2')   ) {
                $lomo = '3 9/16';
                $garganta = '1/4';
            } else if ( ($pipa == '12' && $insu == '5') ) {
                $lomo = '3 5/8';
                $garganta = '1/8';
            } else if ( ($pipa == '12' && $insu == '5 1/2') ) {
                $lomo = '3 11/16';
                $garganta = '1/16';
            } else if ( ($pipa == '12' && $insu == '6')  ) {
                $lomo = '3 3/4';
                $garganta = '0';
            } else if ( ($pipa == '14' && $insu == '1 1/2') ) {
                $lomo = '3 1/2';
                $garganta = '7/8';
            } else if ( ($pipa == '14' && $insu == '2') || ($pipa == '15' && $insu == '1 1/2') ) {
                $lomo = '3 5/8';
                $garganta = '13/16';
            } else if ( ($pipa == '14' && $insu == '2 1/2') || ($pipa == '15' && $insu == '2') ) {
                $lomo = '3 11/16';
                $garganta = '11/16';
            } else if ( ($pipa == '14' && $insu == '3') || ($pipa == '15' && $insu == '2 1/2') ) {
                $lomo = '3 3/4';
                $garganta = '5/8';
            } else if ( ($pipa == '14' && $insu == '3 1/2') || ($pipa == '15' && $insu == '3') ) {
                $lomo = '3 13/16';
                $garganta = '9/16';
            } else if ( ($pipa == '14' && $insu == '4') || ($pipa == '15' && $insu == '3 1/2') ) {
                $lomo = '3 15/16';
                $garganta = '1/2';
            } else if ( ($pipa == '14' && $insu == '4 1/2') || ($pipa == '15' && $insu == '4') ) {
                $lomo = '4';
                $garganta = '3/8';
            } else if ( ($pipa == '14' && $insu == '5') || ($pipa == '15' && $insu == '4 1/2') ) {
                $lomo = '4 1/16';
                $garganta = '5/16';
            } else if ( ($pipa == '14' && $insu == '5 1/2') || ($pipa == '15' && $insu == '5') ) {
                $lomo = '4 3/16';
                $garganta = '1/4';
            } else if ( ($pipa == '14' && $insu == '6') || ($pipa == '15' && $insu == '5 1/2') ) {
                $lomo = '4 1/4';
                $garganta = '3/16';
            } else if ( ($pipa == '16' && $insu == '1 1/2') ) {
                $lomo = '3 5/16';
                $garganta = '7/8';
            } else if ( ($pipa == '16' && $insu == '2') || ($pipa == '17' && $insu == '1 1/2') ) {
                $lomo = '3 3/8';
                $garganta = '13/16';
            } else if ( ($pipa == '16' && $insu == '2 1/2') || ($pipa == '17' && $insu == '2') ) {
                $lomo = '3 7/16';
                $garganta = '3/4';
            } else if ( ($pipa == '16' && $insu == '3') || ($pipa == '17' && $insu == '2 1/2') ) {
                $lomo = '3 9/16';
                $garganta = '5/8';
            } else if ( ($pipa == '16' && $insu == '3 1/2') || ($pipa == '17' && $insu == '3') ) {
                $lomo = '3 5/8';
                $garganta = '9/16';
            } else if ( ($pipa == '16' && $insu == '4') || ($pipa == '17' && $insu == '3 1/2') ) {
                $lomo = '3 11/16';
                $garganta = '1/2';
            } else if ( ($pipa == '16' && $insu == '4 1/2') || ($pipa == '17' && $insu == '4') ) {
                $lomo = '3 3/4';
                $garganta = '7/16';
            } else if ( ($pipa == '16' && $insu == '5') || ($pipa == '17' && $insu == '4 1/2') ) {
                $lomo = '3 3/16';
                $garganta = '3/8';
            } else if ( ($pipa == '16' && $insu == '5 1/2') || ($pipa == '17' && $insu == '5') ) {
                $lomo = '3 7/8';
                $garganta = '5/16';
            } else if ( ($pipa == '16' && $insu == '6') || ($pipa == '17' && $insu == '5 1/2') ) {
                $lomo = '3 15/16';
                $garganta = '1/4';
            } else if ( ($pipa == '18' && $insu == '1 1/2') ) {
                $lomo = '3 3/4';
                $garganta = '1';
            } else if ( ($pipa == '18' && $insu == '2') || ($pipa == '19' && $insu == '1 1/2') ) {
                $lomo = '3 13/16';
                $garganta = '15/16';
            } else if ( ($pipa == '18' && $insu == '2 1/2') || ($pipa == '19' && $insu == '2') ) {
                $lomo = '3 7/8';
                $garganta = '7/8';
            } else if ( ($pipa == '18' && $insu == '3') || ($pipa == '19' && $insu == '2 1/2') ) {
                $lomo = '3 15/16';
                $garganta = '13/16';
            } else if ( ($pipa == '18' && $insu == '3 1/2') || ($pipa == '19' && $insu == '3') ) {
                $lomo = '4';
                $garganta = '3/4';
            } else if ( ($pipa == '18' && $insu == '4') || ($pipa == '19' && $insu == '3 1/2') ) {
                $lomo = '4 1/16';
                $garganta = '5/8';
            } else if ( ($pipa == '18' && $insu == '4 1/2') || ($pipa == '19' && $insu == '4') ) {
                $lomo = '4 1/8';
                $garganta = '9/16';
            } else if ( ($pipa == '18' && $insu == '5') || ($pipa == '19' && $insu == '4 1/2') ) {
                $lomo = '4 3/16';
                $garganta = '1/2';
            } else if ( ($pipa == '18' && $insu == '5 1/2') || ($pipa == '19' && $insu == '5') ) {
                $lomo = '4 1/4';
                $garganta = '7/16';
            } else if ( ($pipa == '18' && $insu == '6') || ($pipa == '19' && $insu == '5 1/2') ) {
                $lomo = '4 5/16';
                $garganta = '3/8';
            } else if ( ($pipa == '20' && $insu == '1 1/2') ) {
                $lomo = '3 9/16';
                $garganta = '15/16';
            } else if ( ($pipa == '20' && $insu == '2') || ($pipa == '21' && $insu == '1 1/2') ) {
                $lomo = '3 9/16';
                $garganta = '7/8';
            } else if ( ($pipa == '20' && $insu == '2 1/2') || ($pipa == '21' && $insu == '2') ) {
                $lomo = '3 5/8';
                $garganta = '13/16';
            } else if ( ($pipa == '20' && $insu == '3') || ($pipa == '21' && $insu == '2 1/2') ) {
                $lomo = '3 11/16';
                $garganta = '13/16';
            } else if ( ($pipa == '20' && $insu == '3 1/2') || ($pipa == '21' && $insu == '3') ) {
                $lomo = '3 3/4';
                $garganta = '3/4';
            } else if ( ($pipa == '20' && $insu == '4') || ($pipa == '21' && $insu == '3 1/2') ) {
                $lomo = '3 13/16';
                $garganta = '11/16';
            } else if ( ($pipa == '20' && $insu == '4 1/2') || ($pipa == '21' && $insu == '4') ) {
                $lomo = '3 7/8';
                $garganta = '5/8';
            } else if ( ($pipa == '20' && $insu == '5') || ($pipa == '21' && $insu == '4 1/2') ) {
                $lomo = '3 15/16';
                $garganta = '9/16';
            }else if ( ($pipa == '20' && $insu == '5 1/2') || ($pipa == '21' && $insu == '5') ) {
                $lomo = '4';
                $garganta = '1/2';
            }
            else if ( ($pipa == '20' && $insu == '6') || ($pipa == '21' && $insu == '5 1/2') ) {
                $lomo = '4 1/16';
                $garganta = '7/16';
            }
            else if ( ($pipa == '22' && $insu == '1 1/2') ) {
                $lomo = '3 7/8';
                $garganta = '1 1/16';
            } else if ( ($pipa == '22' && $insu == '2') || ($pipa == '23' && $insu == '1 1/2') ) {
                $lomo = '3 15/16';
                $garganta = '1';
            } else if ( ($pipa == '22' && $insu == '2 1/2') || ($pipa == '23' && $insu == '2') ) {
                $lomo = '4';
                $garganta = '15/16';
            } else if ( ($pipa == '22' && $insu == '3') || ($pipa == '23' && $insu == '2 1/2') ) {
                $lomo = '4 1/16';
                $garganta = '7/8';
            } else if ( ($pipa == '22' && $insu == '3 1/2') || ($pipa == '23' && $insu == '3') ) {
                $lomo = '4 1/16';
                $garganta = '13/16';
            } else if ( ($pipa == '22' && $insu == '4') || ($pipa == '23' && $insu == '3 1/2') ) {
                $lomo = '4 1/8';
                $garganta = '13/16';
            }else if ( ($pipa == '22' && $insu == '4 1/2') || ($pipa == '23' && $insu == '4') ) {
                $lomo = '4 3/16';
                $garganta = '3/4';
            }else if ( ($pipa == '22' && $insu == '5') || ($pipa == '23' && $insu == '4 1/2') ) {
                $lomo = '4 1/4';
                $garganta = '11/16';
            }else if ( ($pipa == '22' && $insu == '5 1/2') || ($pipa == '23' && $insu == '5') ) {
                $lomo = '4 5/16';
                $garganta = '5/8';
            }else if ( ($pipa == '22' && $insu == '6') || ($pipa == '23' && $insu == '5 1/2') ) {
                $lomo = '4 3/8';
                $garganta = '9/16';
            }
        }



        $circ = getCircumference($pipa, $insu);
        $garganta = convertToDecimal($garganta);
        $lomo = convertToDecimal($lomo);
        $gajos = ($gajos);

/*
        console.log("pipa "+ $pipa + " insu " + $insu +" circunferencia " +$circ + " lomo" + $lomo + " garganta " + $garganta + " gajo "+ $gajos);
*/

        if( !$.isNumeric($circ) || !$.isNumeric($lomo) || !$.isNumeric($garganta) || !$.isNumeric($gajos) ) {
            $( "#error-numeric" ).popup( "open" );
        } else {

            calculoGajos90($circ, $lomo, $garganta, $gajos);
        }

    } else if($('#gajos-90 .op2').hasClass('active')) {
        $circ = seleccionInput($('#gajos-90 #circ-90-gajos').val());
        $garganta = seleccionInput($('#gajos-90 #garganta-gajos').val());
        $insulacion = seleccionInput($('#gajos-90 #insulacion-gajos').val());
        $gajos = seleccionInput($('#gajos-90 #gajos-gajos').val());

        if( !$.isNumeric($circ) || !$.isNumeric($garganta) || !$.isNumeric($gajos) || !$.isNumeric($insulacion) ) {
            $( "#error-numeric" ).popup( "open" );
        } else {
            calculoGajos90b($circ, $garganta, $insulacion, $gajos);
        }
    }
}

function printCircAguila() {
    setTimeout(function() {
        $pipa_print = $('#metodo-aguila .no-radio .first-circ select.t-pipa').val();
        $insu_print = $('#metodo-aguila .no-radio .first-circ select.t-insulacion').val();
        $pipa2_print = $('#metodo-aguila .no-radio .second-circ select.t-pipa').val();
        $insu2_print = $('#metodo-aguila .no-radio .second-circ select.t-insulacion').val();

        $circ1_print = convertToFraction(getCircumference($pipa_print, $insu_print));
        $circ2_print = convertToFraction(getCircumference($pipa2_print, $insu2_print)+"''");

        $('#metodo-aguila .result-1').text(('Circunferencia: '+$circ1_print)+"''");
        $('#metodo-aguila .result-2').text(('Circunferencia: '+$circ2_print)+"''");
    }, 150);
}

$('#metodo-aguila .opt-btn').click(function () {
    printCircAguila();
});

$('#metodo-aguila select').change(function() {
    printCircAguila();
});


/*-----------------------------------------------
 metodo_cal_lom_gar
 -------------------------------------------------*/


function metodo_cal_lom_gar() {

    //$varA = parseFloat($('#MLG-varA').val());
    //$varB = parseFloat($('#MLG-varB').val());

    $varA = Number(seleccionInput($('#MLG-varA').val()));
    $varB = Number(seleccionInput($('#MLG-varB').val()));

    console.log($varA, $varB, $varA/2, $varA/2 <= $varB );


    if ((document.getElementById("MLG-RadioC").checked === true) && ($varA/2 <= $varB)) {
        $("#error_lg_corto").popup("open");
    } else if (document.getElementById("MLG-RadioC").checked === true){
        $varC = ((($varA * 1.5)+$varB)* 1.57);
        $varD = (($varA/2)- $varB) * 1.57;
        $varE =  (($varC/$varC));
        $varF =  (($varD/$varC));
    } else if ((document.getElementById("MLG-RadioL").checked === true) && ($varB >= $varA)){
        $("#error_lg_largo").popup("open");
    } else if ((document.getElementById("MLG-RadioL").checked === true) && ($varA > $varB)){
        $varC = (($varA * 2)+$varB)*1.57;
        $varD = (($varA - $varB) * 1.57);
        $varE =  (($varC/$varC));
        $varF =  (($varD/$varC));
    }


    $('#GraficoMetod_lom_gar .d1').text(($varA)+"''");
    $('#GraficoMetod_lom_gar .d2').text(($varB)+"''");
    $('#GraficoMetod_lom_gar .d3').text(($varB)+"''");
    $('#GraficoMetod_lom_gar .d4').text(($varC.toFixed(3))+"''");
    $('#GraficoMetod_lom_gar .d5').text(($varD)+"''");
    $('#GraficoMetod_lom_gar .e1').text(($varE)+"''");
    $('#GraficoMetod_lom_gar .e2').text(($varF.toFixed(3))+"''");



}


/*----------------------------
 tabla Dinamica
 -----------------------------*/



function Tdinamica() {

    document.getElementById('Tabla-Tdinamica').style.display = 'none';
    document.getElementById('Tabla-Tdinamica-2').style.display = 'none';

    $pipa = $('#Tdinamica .no-radio .first-circ select.t-pipa').val();
    $Asil = $('#Tdinamica .no-radio .first-circ select.t-asilacion').val();

    var tabla_A = function (){
        document.getElementById('Tabla-Tdinamica').style.display = 'inherit';
        $('#Tdina-Diam').text("3''");
        $('#Tdina-Circ').text("9 7/16''");
        $('#Tdina-1-5').text("11''");
        $('#Tdina-2').text("11 1/2''");
        $('#Tdina-3').text("12 1/2''");
        $('#Tdina-6').text("15 1/5''");
        $('#Tdina-8').text("17 1/2''");
    }
    var tabla_B = function (){
        document.getElementById('Tabla-Tdinamica').style.display = 'inherit';

        $('#Tdina-Diam').text("3''");
        $('#Tdina-Circ').text("9 7/16''");
        $('#Tdina-1-5').text("1''1");
        $('#Tdina-2').text("11 1/2''");
        $('#Tdina-3').text("12 1/2''");
        $('#Tdina-6').text("15 1/5''");
        $('#Tdina-8').text("17 1/2''");
    }
    var tabla_C = function (){
        document.getElementById('Tabla-Tdinamica').style.display = 'inherit';
        $('#Tdina-Diam').text("4 1/8''");
        $('#Tdina-Circ').text("12 15/18''");
        $('#Tdina-1-5').text("14 1/2''");
        $('#Tdina-2').text("15''");
        $('#Tdina-3').text("16''");
        $('#Tdina-6').text("19''");
        $('#Tdina-8').text("21''");
    }
    var tabla_D = function (){
        document.getElementById('Tabla-Tdinamica').style.display = 'inherit';
        $('#Tdina-Diam').text("4 5/8''");
        $('#Tdina-Circ').text("14 9/16''");
        $('#Tdina-1-5').text("16''");
        $('#Tdina-2').text("16 1/2''");
        $('#Tdina-3').text("17 1/2''");
        $('#Tdina-6').text("20 1/2''");
        $('#Tdina-8').text("22 1/2''");
    }
    var tabla_E = function () {
        document.getElementById('Tabla-Tdinamica').style.display = 'inherit';

        $('#Tdina-Diam').text("5 1/8");
        $('#Tdina-Circ').text("16 1/8");
        $('#Tdina-1-5').text("17 1/2");
        $('#Tdina-2').text("18");
        $('#Tdina-3').text("19");
        $('#Tdina-6').text("22");
        $('#Tdina-8').text("24");
    }
    var tabla_F = function () {
        document.getElementById('Tabla-Tdinamica').style.display = 'inherit';
        $('#Tdina-Diam').text("5 11/16");
        $('#Tdina-Circ').text("17 7/8");
        $('#Tdina-1-5').text("19 1/4");
        $('#Tdina-2').text("19 3/4");
        $('#Tdina-3').text("20 3/4");
        $('#Tdina-6').text("23 3/4");
        $('#Tdina-8').text("26");
    }
    var tabla_G = function () {
        document.getElementById('Tabla-Tdinamica').style.display = 'inherit';
        $('#Tdina-Diam').text("6 3/4");
        $('#Tdina-Circ').text("21 3/16");
        $('#Tdina-1-5').text("22 3/4");
        $('#Tdina-2').text("23 1/4");
        $('#Tdina-3').text("24 1/4");
        $('#Tdina-6').text("27 1/4");
        $('#Tdina-8').text("29");
    }
    var tabla_H = function () {
        document.getElementById('Tabla-Tdinamica').style.display = 'inherit';
        $('#Tdina-Diam').text("7 3/4");
        $('#Tdina-Circ').text("24 3/8");
        $('#Tdina-1-5').text("25 3/4");
        $('#Tdina-2').text("26 1/4");
        $('#Tdina-3').text("27 1/4");
        $('#Tdina-6').text("30 1/4");
        $('#Tdina-8').text("32 1/2");
    }
    var tabla_I = function () {
        document.getElementById('Tabla-Tdinamica').style.display = 'inherit';
        $('#Tdina-Diam').text("8 3/4");
        $('#Tdina-Circ').text("27 1/2");
        $('#Tdina-1-5').text("29");
        $('#Tdina-2').text("29 1/2");
        $('#Tdina-3').text("30 1/2");
        $('#Tdina-6').text("33 1/2");
        $('#Tdina-8').text("35 1/2");
    }
    var tabla_J = function () {
        document.getElementById('Tabla-Tdinamica').style.display = 'inherit';
        $('#Tdina-Diam').text("9 3/4");
        $('#Tdina-Circ').text("30 5/8");
        $('#Tdina-1-5').text("32 1/4");
        $('#Tdina-2').text("32 3/4");
        $('#Tdina-3').text("33 3/4");
        $('#Tdina-6').text("36 3/4");
        $('#Tdina-8').text("38 1/2");
    }
    var tabla_K = function () {
        document.getElementById('Tabla-Tdinamica').style.display = 'inherit';
        $('#Tdina-Diam').text("10 7/8");
        $('#Tdina-Circ').text("34 3/16");
        $('#Tdina-1-5').text("35 3/4");
        $('#Tdina-2').text("36 1/4");
        $('#Tdina-3').text("37 1/4");
        $('#Tdina-6').text("40 1/4");
        $('#Tdina-8').text("42");
    }
    var tabla_L = function () {
        document.getElementById('Tabla-Tdinamica').style.display = 'inherit';
        $('#Tdina-Diam').text("11 7/8");
        $('#Tdina-Circ').text("37 5/16");
        $('#Tdina-1-5').text("38 3/4");
        $('#Tdina-2').text("39 1/4");
        $('#Tdina-3').text("40 1/4");
        $('#Tdina-6').text("43 1/4");
        $('#Tdina-8').text("45 1/2");
    }
    var tabla_M = function () {
        document.getElementById('Tabla-Tdinamica').style.display = 'inherit';
        $('#Tdina-Diam').text("12 7/8");
        $('#Tdina-Circ').text("40 7/16");
        $('#Tdina-1-5').text("42");
        $('#Tdina-2').text("42 1/2");
        $('#Tdina-3').text("43 1/2");
        $('#Tdina-6').text("46 1/4");
        $('#Tdina-8').text("48 1/2");
    }
    var tabla_N = function () {
        document.getElementById('Tabla-Tdinamica').style.display = 'inherit';
        $('#Tdina-Diam').text("14 3/16");
        $('#Tdina-Circ').text("44 9/16");
        $('#Tdina-1-5').text("46");
        $('#Tdina-2').text("46 1/2");
        $('#Tdina-3').text("47 1/2");
        $('#Tdina-6').text("50 1/4");
        $('#Tdina-8').text("52 1/2");
    }
    var tabla_O = function () {
        document.getElementById('Tabla-Tdinamica').style.display = 'inherit';
        $('#Tdina-Diam').text("15 3/16");
        $('#Tdina-Circ').text("47 3/4");
        $('#Tdina-1-5').text("49 1/4");
        $('#Tdina-2').text("49 1/2");
        $('#Tdina-3').text("50 3/4");
        $('#Tdina-6').text("53 3/4");
        $('#Tdina-8').text("55 1/2");
    }
    var tabla_P = function () {
        document.getElementById('Tabla-Tdinamica').style.display = 'inherit';
        $('#Tdina-Diam').text("16 3/16");
        $('#Tdina-Circ').text("50 7/8");
        $('#Tdina-1-5').text("52 1/4");
        $('#Tdina-2').text("52 3/4");
        $('#Tdina-3').text("53 3/4");
        $('#Tdina-6').text("56 3/4");
        $('#Tdina-8').text("59");
    }
    var tabla_Q = function () {
        document.getElementById('Tabla-Tdinamica').style.display = 'inherit';
        $('#Tdina-Diam').text("17 3/16");
        $('#Tdina-Circ').text("54");
        $('#Tdina-1-5').text("55 1/2");
        $('#Tdina-2').text("56");
        $('#Tdina-3').text("57");
        $('#Tdina-6').text("60");
        $('#Tdina-8').text("62");
    }
    var tabla_R = function () {
        document.getElementById('Tabla-Tdinamica').style.display = 'inherit';
        $('#Tdina-Diam').text("18 3/16");
        $('#Tdina-Circ').text("57 1/8");
        $('#Tdina-1-5').text("58 3/4");
        $('#Tdina-2').text("59 1/4");
        $('#Tdina-3').text("60 1/4");
        $('#Tdina-6').text("63 1/4");
        $('#Tdina-8').text("65");
    }
    var tabla_S = function () {
        document.getElementById('Tabla-Tdinamica').style.display = 'inherit';
        $('#Tdina-Diam').text("19 3/16");
        $('#Tdina-Circ').text("60 5/16");
        $('#Tdina-1-5').text("61 3/4");
        $('#Tdina-2').text("62 1/4");
        $('#Tdina-3').text("63 1/4");
        $('#Tdina-6').text("66 1/4");
        $('#Tdina-8').text("68 1/2");
    }
    var tabla_T = function () {
        document.getElementById('Tabla-Tdinamica').style.display = 'inherit';
        $('#Tdina-Diam').text("20 3/16");
        $('#Tdina-Circ').text("63 7/18");
        $('#Tdina-1-5').text("65");
        $('#Tdina-2').text("65 1/2");
        $('#Tdina-3').text("66 1/2");
        $('#Tdina-6').text("69 1/2");
        $('#Tdina-8').text("71 1/2");
    }
    var tabla_U = function () {
        document.getElementById('Tabla-Tdinamica').style.display = 'inherit';
        $('#Tdina-Diam').text("21 3/16");
        $('#Tdina-Circ').text("66 9/16");
        $('#Tdina-1-5').text("68");
        $('#Tdina-2').text("68 1/2");
        $('#Tdina-3').text("69 1/2");
        $('#Tdina-6').text("72 1/2");
        $('#Tdina-8').text("74 1/2");
    }
    var tabla_V = function () {
        document.getElementById('Tabla-Tdinamica').style.display = 'inherit';
        $('#Tdina-Diam').text("22 3/16");
        $('#Tdina-Circ').text("69 11/16");
        $('#Tdina-1-5').text("71 1/4");
        $('#Tdina-2').text("71 3/4");
        $('#Tdina-3').text("72 3/4");
        $('#Tdina-6').text("75 3/4");
        $('#Tdina-8').text("77 1/2");
    }
    var tabla_W = function () {
        document.getElementById('Tabla-Tdinamica').style.display = 'inherit';
        $('#Tdina-Diam').text("23 3/16");
        $('#Tdina-Circ').text("72 7/8");
        $('#Tdina-1-5').text("74 1/4");
        $('#Tdina-2').text("75 3/4");
        $('#Tdina-3').text("75 3/4");
        $('#Tdina-6').text("78 3/4");
        $('#Tdina-8').text("81");
    }
    var tabla_X = function () {
        document.getElementById('Tabla-Tdinamica').style.display = 'inherit';
        $('#Tdina-Diam').text("24 3/16");
        $('#Tdina-Circ').text("76");
        $('#Tdina-1-5').text("77 1/2");
        $('#Tdina-2').text("78");
        $('#Tdina-3').text("79");
        $('#Tdina-6').text("82");
        $('#Tdina-8').text("84");
    }
    var tabla_Y = function () {
        document.getElementById('Tabla-Tdinamica').style.display = 'inherit';
        $('#Tdina-Diam').text("25 3/16");
        $('#Tdina-Circ').text("79 1/8");
        $('#Tdina-1-5').text("82 3/4");
        $('#Tdina-2').text("61 1/4");
        $('#Tdina-3').text("62 1/4");
        $('#Tdina-6').text("85 1/4");
        $('#Tdina-8').text("87");
    }
    var tabla_Z = function () {
        document.getElementById('Tabla-Tdinamica').style.display = 'inherit';
        $('#Tdina-Diam').text("26 3/16");
        $('#Tdina-Circ').text("82 1/4");
        $('#Tdina-1-5').text("84 3/4");
        $('#Tdina-2').text("84 1/4");
        $('#Tdina-3').text("85 1/4");
        $('#Tdina-6').text("86 1/4");
        $('#Tdina-8').text("90 1/2");
    }
    var tabla_A1 = function () {
        document.getElementById('Tabla-Tdinamica').style.display = 'inherit';
        $('#Tdina-Diam').text("27 3/16");
        $('#Tdina-Circ').text("85 1/2");
        $('#Tdina-1-5').text("87");
        $('#Tdina-2').text("87 1/2");
        $('#Tdina-3').text("88 1/2");
        $('#Tdina-6').text("91 1/2");
        $('#Tdina-8').text("93 1/2");
    }
    var tabla_B1 = function () {
        document.getElementById('Tabla-Tdinamica').style.display = 'inherit';
        $('#Tdina-Diam').text("28 3/16");
        $('#Tdina-Circ').text("88 1/2");
        $('#Tdina-1-5').text("90");
        $('#Tdina-2').text("90 2/4");
        $('#Tdina-3').text("91 1/2");
        $('#Tdina-6').text("94 1/2");
        $('#Tdina-8').text("96 1/2");
    }
    var tabla_C1 = function () {
        document.getElementById('Tabla-Tdinamica').style.display = 'inherit';
        $('#Tdina-Diam').text("29 3/16");
        $('#Tdina-Circ').text("91 3/4");
        $('#Tdina-1-5').text("93 1/4");
        $('#Tdina-2').text("93 3/4");
        $('#Tdina-3').text("94 3/4");
        $('#Tdina-6').text("97 3/4");
        $('#Tdina-8').text("99 1/2");
    }
    var tabla_D1 = function () {
        document.getElementById('Tabla-Tdinamica').style.display = 'inherit';
        $('#Tdina-Diam').text("30 3/16");
        $('#Tdina-Circ').text("94 3/4");
        $('#Tdina-1-5').text("96 1/4");
        $('#Tdina-2').text("96 3/4");
        $('#Tdina-3').text("97 3/4");
        $('#Tdina-6').text("100 3/4");
        $('#Tdina-8').text("103");
    }



    // acomodo de Pipa Por Asilacion
    if ($Asil == "1/2") {
        switch ($pipa) {
            case "1/2":
                tabla_A();
                $('#Tdina-Medidas-90L').text("1");
                $('#Tdina-Medidas-90C').text("-");
                break;
            case "3/4":
                tabla_C();
                $('#Tdina-Medidas-90L').text("1");
                $('#Tdina-Medidas-90C').text("1");
                break;
        }
    }


    if ($Asil == "1"){  switch ($pipa){
        case "1/2":  tabla_A();
            $('#Tdina-Medidas-Al').text("1");
            $('#Tdina-Medidas-90L').text("2");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "3/4":  tabla_A();
            $('#Tdina-Medidas-Al').text("1");
            $('#Tdina-Medidas-90L').text("2");
            $('#Tdina-Medidas-90C').text("2");
            break;
        case "1": tabla_B();
            $('#Tdina-Medidas-Al').text("2");
            $('#Tdina-Medidas-90L').text("3");
            $('#Tdina-Medidas-90C').text("3");
            break;
        case "1 1/4": tabla_B();
            $('#Tdina-Medidas-Al').text("2");
            $('#Tdina-Medidas-90L').text("3");
            $('#Tdina-Medidas-90C').text("3");
            break;
        case "1 1/2": tabla_C();
            $('#Tdina-Medidas-Al').text("3");
            $('#Tdina-Medidas-90L').text("4");
            $('#Tdina-Medidas-90C').text("5");
            break;
        case "2": tabla_D();
            $('#Tdina-Medidas-Al').text("4");

            $('#Tdina-Medidas-L').text("2 5/8");
            $('#Tdina-Gajos').text("3");
            $('#Tdina-Garganta').text("1/2");
            $('#Tdina-Nones').text("");
            $('#Tdina-Medidas-90L').text("7");
            $('#Tdina-Medidas-90C').text("6");
            break;
        case "2 1/2": tabla_E();
            $('#Tdina-Medidas-Al').text("5");
            $('#Tdina-Medidas-90L').text("13");
            $('#Tdina-Medidas-90C').text("9");
            break;
        case "3": tabla_F();
            $('#Tdina-Medidas-Al').text("6");

            $('#Tdina-Medidas-L').text("3 11/16");
            $('#Tdina-Gajos').text("3");
            $('#Tdina-Garganta').text("1 1/16");
            $('#Tdina-Nones').text("");

            $('#Tdina-Medidas-LC').text("2 7/8");
            $('#Tdina-Gajos-LC').text("3");
            $('#Tdina-Garganta-LC').text("1/4");
            $('#Tdina-Nones-LC').text("");
            $('#Tdina-Medidas-90L').text("14");
            $('#Tdina-Medidas-90C').text("10");

            break;
        case "3 1/2": tabla_G();
            $('#Tdina-Medidas-Al').text("7");
            $('#Tdina-Medidas-90L').text("17");
            $('#Tdina-Medidas-90C').text("16");
            break;
        case "4": tabla_G();
            $('#Tdina-Medidas-Al').text("7");

            $('#Tdina-Medidas-L').text("3 9/16");
            $('#Tdina-Gajos').text("4");
            $('#Tdina-Garganta').text("1 1/16");
            $('#Tdina-Nones').text("");

            $('#Tdina-Medidas-LC').text("2 3/4 ");
            $('#Tdina-Gajos-LC').text("4");
            $('#Tdina-Garganta-LC').text("3/8");
            $('#Tdina-Nones-LC').text("");
            $('#Tdina-Medidas-90L').text("17");
            $('#Tdina-Medidas-90C').text("16");
            break;
        case "4 1/2": tabla_H();
            $('#Tdina-Medidas-Al').text("8");
            $('#Tdina-Medidas-90L').text("28");
            $('#Tdina-Medidas-90C').text("22");
            break;

        case "5": tabla_H();
            $('#Tdina-Medidas-Al').text("8");
            $('#Tdina-Medidas-90L').text("28");
            $('#Tdina-Medidas-90C').text("22");
            break;
        case "6": tabla_I();
            $('#Tdina-Medidas-Al').text("9");

            $('#Tdina-Medidas-L').text("4 1/16");
            $('#Tdina-Gajos').text("5");
            $('#Tdina-Garganta').text("1 9/16");
            $('#Tdina-Nones').text("");

            $('#Tdina-Medidas-LC').text("3 1/8");
            $('#Tdina-Gajos-LC').text("5");
            $('#Tdina-Garganta-LC').text("5/8");
            $('#Tdina-Nones-LC').text("");
            $('#Tdina-Medidas-90L').text("32");
            $('#Tdina-Medidas-90C').text("27");
            break;
        case "7":
            $('#Tdina-Medidas-Al').text("10");
            $('#Tdina-Medidas-90L').text("35");
            $('#Tdina-Medidas-90C').text("30");
            break;
        case "8":
            $('#Tdina-Medidas-Al').text("11");
            $('#Tdina-Medidas-90L').text("41");
            $('#Tdina-Medidas-90C').text("38");
            break;
        case "9":
            $('#Tdina-Medidas-Al').text("12");
            $('#Tdina-Medidas-90L').text("49");
            $('#Tdina-Medidas-90C').text("39");
            break;
        case "10":
            $('#Tdina-Medidas-Al').text("13");
            $('#Tdina-Medidas-90L').text("46");
            $('#Tdina-Medidas-90C').text("44");
            break;
        case "11":
            $('#Tdina-Medidas-Al').text("14");
            $('#Tdina-Medidas-90L').text("50");

            break;
        case "12":
            $('#Tdina-Medidas-Al').text("15");
            $('#Tdina-Medidas-90L').text("48");
            $('#Tdina-Medidas-90C').text("49");
            break;
        case "13": break;
        case "14":
            $('#Tdina-Medidas-Al').text("16");
            $('#Tdina-Medidas-90L').text("Hacer por Gajos");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "15":
            $('#Tdina-Medidas-Al').text("17");
            $('#Tdina-Medidas-90L').text("Hacer por Gajos");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "16":
            $('#Tdina-Medidas-Al').text("18");
            $('#Tdina-Medidas-90L').text("Hacer por Gajos");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "17":
            $('#Tdina-Medidas-Al').text("19");
            $('#Tdina-Medidas-90L').text("Hacer por Gajos");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "18":
            $('#Tdina-Medidas-Al').text("20");
            $('#Tdina-Medidas-90L').text("Hacer por Gajos");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "19":
            $('#Tdina-Medidas-Al').text("21");
            break;
        case "20":
            $('#Tdina-Medidas-Al').text("22");
            break;
    }    }
    if ($Asil == "1 1/2"){  switch ($pipa){
        case "1/2":    tabla_C();
            $('#Tdina-Medidas-Al').text("3");
            $('#Tdina-Medidas-90L').text("5");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "3/4":    tabla_C();
            $('#Tdina-Medidas-Al').text("3");
            $('#Tdina-Medidas-90L').text("5");
            $('#Tdina-Medidas-90C').text("5");
            break;
        case "1":      tabla_D();
            $('#Tdina-Medidas-Al').text("4");
            $('#Tdina-Medidas-90L').text("6");
            $('#Tdina-Medidas-90C').text("6");
            break;
        case "1 1/4":  tabla_E();
            $('#Tdina-Medidas-Al').text("5");
            $('#Tdina-Medidas-90L').text("9");
            $('#Tdina-Medidas-90C').text("8");
            break;
        case "1 1/2":  tabla_E();
            $('#Tdina-Medidas-Al').text("5");
            $('#Tdina-Medidas-90L').text("9");
            $('#Tdina-Medidas-90C').text("8");
            break;
        case "2":      tabla_F();
            $('#Tdina-Medidas-Al').text("6");
            $('#Tdina-Medidas-L').text("2 15/16");
            $('#Tdina-Gajos').text("3");
            $('#Tdina-Garganta').text("1/4");
            $('#Tdina-Nones').text("2 1/2 x 1");
            $('#Tdina-Medidas-90L').text("10");
            $('#Tdina-Medidas-90C').text("11");

            break;
        case "2 1/2":  tabla_G();
            $('#Tdina-Medidas-Al').text("7");
            $('#Tdina-Medidas-90L').text("16");
            $('#Tdina-Medidas-90C').text("18");
            break;
        case "3":      tabla_G();
            $('#Tdina-Medidas-Al').text("7");

            $('#Tdina-Medidas-L').text("3 15/16");
            $('#Tdina-Gajos').text("3");
            $('#Tdina-Garganta').text("3/4");
            $('#Tdina-Nones').text("3 1/2 x 1");
            $('#Tdina-Medidas-90L').text("19");
            $('#Tdina-Medidas-90C').text("18");
            break;
        case "3 1/2":  tabla_H();
            $('#Tdina-Medidas-Al').text("8");
            $('#Tdina-Medidas-90L').text("21");
            $('#Tdina-Medidas-90C').text("20");
            break;
        case "4":      tabla_H();
            $('#Tdina-Medidas-Al').text("8");

            $('#Tdina-Medidas-L').text("2 /4");
            $('#Tdina-Gajos').text("4");
            $('#Tdina-Garganta').text("15/16");
            $('#Tdina-Nones').text("4 1/2 x1 O 5 x 1");

            $('#Tdina-Medidas-LC').text("2 15/16");
            $('#Tdina-Gajos-LC').text("4");
            $('#Tdina-Garganta-LC').text("3/16");
            $('#Tdina-Nones-LC').text("4 1/2 x 1 O 5x1");
            $('#Tdina-Medidas-90L').text("21");
            $('#Tdina-Medidas-90C').text("20");

            break;
        case "4 1/2":  tabla_I();
            $('#Tdina-Medidas-Al').text("9");
            $('#Tdina-Medidas-90L').text("27");
            $('#Tdina-Medidas-90C').text("24");
            break;
        case "5":      tabla_I();
            $('#Tdina-Medidas-Al').text("9");
            $('#Tdina-Medidas-90L').text("29");
            $('#Tdina-Medidas-90C').text("24");
            break;
        case "6":      tabla_J();
            $('#Tdina-Medidas-Al').text("10");

            $('#Tdina-Medidas-L').text("4 1/4");
            $('#Tdina-Gajos').text("5");
            $('#Tdina-Garganta').text("1 7/16");
            $('#Tdina-Nones').text("");

            $('#Tdina-Medidas-LC').text("3 1/4");
            $('#Tdina-Gajos-LC').text("5");
            $('#Tdina-Garganta-LC').text("1/2");
            $('#Tdina-Nones-LC').text("");
            $('#Tdina-Medidas-90L').text("35");
            $('#Tdina-Medidas-90C').text("30");
            break;
        case "7":      tabla_K();
            $('#Tdina-Medidas-Al').text("11");
            $('#Tdina-Medidas-90L').text("37");
            $('#Tdina-Medidas-90C').text("33");
            break;
        case "8":      tabla_L();
            $('#Tdina-Medidas-Al').text("12");

            $('#Tdina-Medidas-L').text("4 9/16");
            $('#Tdina-Gajos').text("6");
            $('#Tdina-Garganta').text("1 11/16");
            $('#Tdina-Nones').text("");

            $('#Tdina-Medidas-LC').text("3 9/16");
            $('#Tdina-Gajos-LC').text("6");
            $('#Tdina-Garganta-LC').text("5/8");
            $('#Tdina-Nones-LC').text("");
            $('#Tdina-Medidas-90L').text("42");
            $('#Tdina-Medidas-90C').text("39");
            break;
        case "9":      tabla_M();
            $('#Tdina-Medidas-Al').text("13");
            $('#Tdina-Medidas-90L').text("43");
            $('#Tdina-Medidas-90C').text("44");
            break;
        case "10":     tabla_N();
            $('#Tdina-Medidas-Al').text("14");

            $('#Tdina-Medidas-L').text("4 1/4");
            $('#Tdina-Gajos').text("8");
            $('#Tdina-Garganta').text("1 5/8");
            $('#Tdina-Nones').text("");

            $('#Tdina-Medidas-LC').text("3 1/4");
            $('#Tdina-Gajos-LC').text("8");
            $('#Tdina-Garganta-LC').text("11/16");
            $('#Tdina-Nones-LC').text("");
            $('#Tdina-Medidas-90L').text("50");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "11":     tabla_O();
            $('#Tdina-Medidas-Al').text("15");
            $('#Tdina-Medidas-90L').text("51");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "12":     tabla_P();
            $('#Tdina-Medidas-Al').text("16");

            $('#Tdina-Medidas-L').text("5");
            $('#Tdina-Gajos').text("8");
            $('#Tdina-Garganta').text("2 1/16");
            $('#Tdina-Nones').text("");

            $('#Tdina-Medidas-LC').text("3 1/16");
            $('#Tdina-Gajos-LC').text("10");
            $('#Tdina-Garganta-LC').text("11/16");
            $('#Tdina-Nones-LC').text("");
            $('#Tdina-Medidas-90L').text("55");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "14":     tabla_Q();

            $('#Tdina-Medidas-Al').text("17");

            $('#Tdina-Medidas-L').text("5 3/4");
            $('#Tdina-Gajos').text("8");
            $('#Tdina-Garganta').text("2 7/16");
            $('#Tdina-Nones').text("");

            $('#Tdina-Medidas-LC').text("3 1/2");
            $('#Tdina-Gajos-LC').text("10");
            $('#Tdina-Garganta-LC').text("7/8");
            $('#Tdina-Nones-LC').text("");
            $('#Tdina-Medidas-90L').text("Hacer por Gajos");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "15":     tabla_R();
            $('#Tdina-Medidas-Al').text("18");
            $('#Tdina-Medidas-90L').text("Hacer por Gajos");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "16":     tabla_S();
            $('#Tdina-Medidas-Al').text("19");

            $('#Tdina-Medidas-L').text("6 9/16");
            $('#Tdina-Gajos').text("8");
            $('#Tdina-Garganta').text("2 7/8");
            $('#Tdina-Nones').text("");

            $('#Tdina-Medidas-LC').text("3 5/16");
            $('#Tdina-Gajos-LC').text("12");
            $('#Tdina-Garganta-LC').text("7/8");
            $('#Tdina-Nones-LC').text("");
            $('#Tdina-Medidas-90L').text("Hacer por Gajos");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "17":     tabla_T();
            $('#Tdina-Medidas-Al').text("20");
            $('#Tdina-Medidas-90L').text("Hacer por Gajos");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "18":     tabla_U();
            $('#Tdina-Medidas-Al').text("21");

            $('#Tdina-Medidas-L').text("5 7/8");
            $('#Tdina-Gajos').text("10");
            $('#Tdina-Garganta').text("2 9/16");
            $('#Tdina-Nones').text("");

            $('#Tdina-Medidas-LC').text("3 3/4");
            $('#Tdina-Gajos-LC').text("12");
            $('#Tdina-Garganta-LC').text("1");
            $('#Tdina-Nones-LC').text("");
            $('#Tdina-Medidas-90L').text("Hacer por Gajos");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "19":     tabla_V();
            $('#Tdina-Medidas-Al').text("22");
            break;
        case "20":     tabla_W();
            $('#Tdina-Medidas-Al').text("Hacer por Gajos");

            $('#Tdina-Medidas-L').text("6 1/2");
            $('#Tdina-Gajos').text("10");
            $('#Tdina-Garganta').text("2 7/8");
            $('#Tdina-Nones').text("");

            $('#Tdina-Medidas-LC').text("3 9/16");
            $('#Tdina-Gajos-LC').text("14");
            $('#Tdina-Garganta-LC').text("15/16");
            $('#Tdina-Nones-LC').text("");
            break;
        case "21":     tabla_X();  break;
        case "22":     tabla_Y();
            $('#Tdina-Medidas-L').text("7 1/8");
            $('#Tdina-Gajos').text("10");
            $('#Tdina-Garganta').text("3 3/16");
            $('#Tdina-Nones').text("");

            $('#Tdina-Medidas-LC').text("3 7/8");
            $('#Tdina-Gajos-LC').text("14");
            $('#Tdina-Garganta-LC').text("1 1/16");
            $('#Tdina-Nones-LC').text("");
            break;
        case "23":     tabla_Z();  break;
        case "24":     tabla_A1();  break;
    }    }
    if ($Asil == "2"){  switch ($pipa){
        case "1/2":    tabla_E();
            $('#Tdina-Medidas-Al').text("5");
            $('#Tdina-Medidas-90L').text("8");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "3/4":    tabla_E();
            $('#Tdina-Medidas-Al').text("5");
            $('#Tdina-Medidas-90L').text("8");
            $('#Tdina-Medidas-90C').text("8");
            break;
        case "1":      tabla_F();
            $('#Tdina-Medidas-Al').text("6");
            $('#Tdina-Medidas-90L').text("11");
            $('#Tdina-Medidas-90C').text("11");
            break;
        case "1 1/4":  tabla_F();
            $('#Tdina-Medidas-Al').text("6");
            $('#Tdina-Medidas-90L').text("11");
            $('#Tdina-Medidas-90C').text("11");
            break;
        case "1 1/2":  tabla_G();
            $('#Tdina-Medidas-Al').text("7");
            $('#Tdina-Medidas-90L').text("18");
            $('#Tdina-Medidas-90C').text("12");
            break;
        case "2":      tabla_G();
            $('#Tdina-Medidas-Al').text("7");
            $('#Tdina-Medidas-90L').text("18");
            $('#Tdina-Medidas-90C').text("18");
            break;
        case "2 1/2":  tabla_H();
            $('#Tdina-Medidas-Al').text("8");
            $('#Tdina-Medidas-90L').text("20");
            $('#Tdina-Medidas-90C').text("23");
            break;
        case "3":      tabla_H();
            $('#Tdina-Medidas-Al').text("8");

            $('#Tdina-Medidas-L').text("4 1/4");
            $('#Tdina-Gajos').text("3");
            $('#Tdina-Garganta').text("1/2");
            $('#Tdina-Nones').text("3 1/2 x 1 1/2");break;
            $('#Tdina-Medidas-90L').text("22");
            $('#Tdina-Medidas-90C').text("20");
        case "3 1/2":  tabla_I();
            $('#Tdina-Medidas-Al').text("9");
            $('#Tdina-Medidas-90L').text("27");
            $('#Tdina-Medidas-90C').text("24");
            break;
        case "4":      tabla_I();
            $('#Tdina-Medidas-Al').text("9");

            $('#Tdina-Medidas-L').text("3 15/16");
            $('#Tdina-Gajos').text("4");
            $('#Tdina-Garganta').text("3/4");
            $('#Tdina-Nones').text("4 1/2 x 1 1/2 O 5 x 1 1/2");

            $('#Tdina-Medidas-LC').text("3 3/16");
            $('#Tdina-Gajos-LC').text("4");
            $('#Tdina-Garganta-LC').text("0");
            $('#Tdina-Nones-LC').text("4 1/2 x 1 1/2 O 5 x 1 1/2");
            $('#Tdina-Medidas-90L').text("27");
            $('#Tdina-Medidas-90C').text("24");
            break;
        case "4 1/2":  tabla_J();
            $('#Tdina-Medidas-Al').text("10");
            $('#Tdina-Medidas-90L').text("30");
            $('#Tdina-Medidas-90C').text("30");
            break;
        case "5":      tabla_J();
            $('#Tdina-Medidas-Al').text("10");
            $('#Tdina-Medidas-90L').text("36");
            $('#Tdina-Medidas-90C').text("30");
            break;
        case "6":      tabla_K();
            $('#Tdina-Medidas-Al').text("11");

            $('#Tdina-Medidas-L').text("4 3/8");
            $('#Tdina-Gajos').text("5");
            $('#Tdina-Garganta').text("1 1/4");
            $('#Tdina-Nones').text("7 x 1 1/2");

            $('#Tdina-Medidas-LC').text("3 7/16");
            $('#Tdina-Gajos-LC').text("5");
            $('#Tdina-Garganta-LC').text("5/16");
            $('#Tdina-Nones-LC').text("7 x 1 1/2");
            $('#Tdina-Medidas-90L').text("37");
            $('#Tdina-Medidas-90C').text("33");
            break;
        case "7":      tabla_L();
            $('#Tdina-Medidas-Al').text("12");
            $('#Tdina-Medidas-90L').text("39");
            $('#Tdina-Medidas-90C').text("31");
            break;
        case "8":      tabla_M();
            $('#Tdina-Medidas-Al').text("13");

            $('#Tdina-Medidas-L').text("4 11/16");
            $('#Tdina-Gajos').text("6");
            $('#Tdina-Garganta').text("1 9/16");
            $('#Tdina-Nones').text("9 x 1 1/2");

            $('#Tdina-Medidas-LC').text("3 11/16");
            $('#Tdina-Gajos-LC').text("6");
            $('#Tdina-Garganta-LC').text("1/2");
            $('#Tdina-Nones-LC').text("9 x 1 1/2");
            $('#Tdina-Medidas-90L').text("43");
            $('#Tdina-Medidas-90C').text("44");
            break;
        case "9":      tabla_N();
            $('#Tdina-Medidas-Al').text("14");
            $('#Tdina-Medidas-90L').text("47");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "10":     tabla_O();
            $('#Tdina-Medidas-Al').text("14");

            $('#Tdina-Medidas-L').text("4 5/16");
            $('#Tdina-Gajos').text("8");
            $('#Tdina-Garganta').text("1 9/16");
            $('#Tdina-Nones').text("11 x 1 1/2");

            $('#Tdina-Medidas-LC').text("3 3/8");
            $('#Tdina-Gajos-LC').text("8");
            $('#Tdina-Garganta-LC').text("9/16");
            $('#Tdina-Nones-LC').text("11 x 1 1/2");
            $('#Tdina-Medidas-90L').text("51");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "11":     tabla_P();
            $('#Tdina-Medidas-Al').text("16");
            $('#Tdina-Medidas-90L').text("55");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "12":     tabla_Q();
            $('#Tdina-Medidas-Al').text("17");

            $('#Tdina-Medidas-L').text("5 7/8");
            $('#Tdina-Gajos').text("8");
            $('#Tdina-Garganta').text("2 3/8");
            $('#Tdina-Nones').text("15 x 1 1/2");

            $('#Tdina-Medidas-LC').text("3 1/8");
            $('#Tdina-Gajos-LC').text("10");
            $('#Tdina-Garganta-LC').text("5/8");
            $('#Tdina-Nones-LC').text("14 x 1 1/2");
            $('#Tdina-Medidas-90L').text("56");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "14":     tabla_R();
            $('#Tdina-Medidas-Al').text("18");

            $('#Tdina-Medidas-LC').text("3 5/8");
            $('#Tdina-Gajos-LC').text("10");
            $('#Tdina-Garganta-LC').text("13/16");
            $('#Tdina-Nones-LC').text("15 x 1 1/2");
            $('#Tdina-Medidas-90L').text("Q1");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "15":     tabla_S();
            $('#Tdina-Medidas-Al').text("19");
            $('#Tdina-Medidas-90L').text("Hacer por Gajos");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "16":     tabla_T();
            $('#Tdina-Medidas-Al').text("20");

            $('#Tdina-Medidas-L').text("6 11/8");
            $('#Tdina-Gajos').text("8");
            $('#Tdina-Garganta').text("2 3/4");
            $('#Tdina-Nones').text("17 x 1 1/2");

            $('#Tdina-Medidas-LC').text("3 3/8");
            $('#Tdina-Gajos-LC').text("12");
            $('#Tdina-Garganta-LC').text("13/16");
            $('#Tdina-Nones-LC').text("17 x 1 1/2");
            $('#Tdina-Medidas-90L').text("Q5");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "17":     tabla_U();
            $('#Tdina-Medidas-Al').text("21");
            $('#Tdina-Medidas-90L').text("Gajo");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "18":     tabla_V();
            $('#Tdina-Medidas-Al').text("22");

            $('#Tdina-Medidas-L').text("5 15/16");
            $('#Tdina-Gajos').text("10");
            $('#Tdina-Garganta').text("2 1/2");
            $('#Tdina-Nones').text("19 x 1.5");

            $('#Tdina-Medidas-LC').text("3 13/16");
            $('#Tdina-Gajos-LC').text("12");
            $('#Tdina-Garganta-LC').text("15/16");
            $('#Tdina-Nones-LC').text("19 x 1.5");
            $('#Tdina-Medidas-90L').text("Q9");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "19":     tabla_W();
            $('#Tdina-Medidas-Al').text("Hacer por Gajos");
            break;
        case "20":     tabla_X();
            $('#Tdina-Medidas-Al').text("Hacer por Gajos");


            $('#Tdina-Medidas-L').text("7 5/8");
            $('#Tdina-Gajos').text("10");
            $('#Tdina-Garganta').text("2 13/16");
            $('#Tdina-Nones').text("21 x 1.5");

            $('#Tdina-Medidas-LC').text("3 9/16");
            $('#Tdina-Gajos-LC').text("14");
            $('#Tdina-Garganta-LC').text("7/8");
            $('#Tdina-Nones-LC').text("21 x 1.5");
            break;
        case "21":     tabla_Y();  break;
        case "22":     tabla_Z();
            $('#Tdina-Medidas-LC').text("3 15/16");
            $('#Tdina-Gajos-LC').text("14");
            $('#Tdina-Garganta-LC').text("1");
            $('#Tdina-Nones-LC').text("23 x 1.5");
            break;
        case "23":     tabla_A1();  break;
        case "24":     tabla_B1();  break;
    }    }
    if ($Asil == "2 1/2"){  switch ($pipa){
        case "1/2":    tabla_G();
            $('#Tdina-Medidas-Al').text("7");
            $('#Tdina-Medidas-90L').text("12");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "3/4":    tabla_G();
            $('#Tdina-Medidas-Al').text("7");
            $('#Tdina-Medidas-90L').text("12");
            $('#Tdina-Medidas-90C').text("12");
            break;
        case "1":      tabla_G();
            $('#Tdina-Medidas-Al').text("7");
            $('#Tdina-Medidas-90L').text("12");
            $('#Tdina-Medidas-90C').text("12");
            break;
        case "1 1/4":  tabla_G();
            $('#Tdina-Medidas-Al').text("7");
            $('#Tdina-Medidas-90L').text("18");
            $('#Tdina-Medidas-90C').text("12");
            break;
        case "1 1/2":  tabla_H();
            $('#Tdina-Medidas-Al').text("8");
            $('#Tdina-Medidas-90L').text("23");
            $('#Tdina-Medidas-90C').text("23");
            break;
        case "2":      tabla_H();
            $('#Tdina-Medidas-Al').text("8");
            $('#Tdina-Medidas-90L').text("20");
            $('#Tdina-Medidas-90C').text("23");

            break;
        case "2 1/2":  tabla_I();
            $('#Tdina-Medidas-Al').text("9");
            $('#Tdina-Medidas-90L').text("24");
            $('#Tdina-Medidas-90C').text("15");
            break;
        case "3":      tabla_I();
            $('#Tdina-Medidas-Al').text("9");


            $('#Tdina-Medidas-L').text("4 1/4");
            $('#Tdina-Gajos').text("3");
            $('#Tdina-Garganta').text("1/2");
            $('#Tdina-Nones').text("3 x 1/2 x 1 1/2");
            $('#Tdina-Medidas-90L').text("24");
            $('#Tdina-Medidas-90C').text("24");
            break;
        case "3 1/2":  tabla_J();22
            $('#Tdina-Medidas-Al').text("10");
            $('#Tdina-Medidas-90L').text("30");
            $('#Tdina-Medidas-90C').text("25");
            break;
        case "4":      tabla_J();
            $('#Tdina-Medidas-Al').text("10");


            $('#Tdina-Medidas-L').text("4 1/8");
            $('#Tdina-Gajos').text("4");
            $('#Tdina-Garganta').text("9/16");
            $('#Tdina-Nones').text("4 1/2 x 2 1/2 o 5 x 2");
            $('#Tdina-Medidas-90L').text("30");
            $('#Tdina-Medidas-90C').text("25");
            break;
        case "4 1/2":  tabla_K();
            $('#Tdina-Medidas-Al').text("11");
            $('#Tdina-Medidas-90L').text("33");
            $('#Tdina-Medidas-90C').text("33");

            break;
        case "5":      tabla_K();
            $('#Tdina-Medidas-Al').text("11");
            $('#Tdina-Medidas-90L').text("38");
            $('#Tdina-Medidas-90C').text("33");
            break;
        case "6":      tabla_L();
            $('#Tdina-Medidas-Al').text("12");


            $('#Tdina-Medidas-L').text("4 9/16");
            $('#Tdina-Gajos').text("5");
            $('#Tdina-Garganta').text("1 1/16");
            $('#Tdina-Nones').text("7 x 2");

            $('#Tdina-Medidas-LC').text("3 5/8");
            $('#Tdina-Gajos-LC').text("5");
            $('#Tdina-Garganta-LC').text("3/16");
            $('#Tdina-Nones-LC').text("7 x 2");
            $('#Tdina-Medidas-90L').text("39");
            $('#Tdina-Medidas-90C').text("31");
            break;
        case "7":      tabla_M();
            $('#Tdina-Medidas-Al').text("13");
            $('#Tdina-Medidas-90L').text("44");
            break;
        case "8":      tabla_N();
            $('#Tdina-Medidas-Al').text("14");


            $('#Tdina-Medidas-L').text("4 7/8");
            $('#Tdina-Gajos').text("6");
            $('#Tdina-Garganta').text("1 7/16");
            $('#Tdina-Nones').text("9 x 2");

            $('#Tdina-Medidas-LC').text("3 13/16");
            $('#Tdina-Gajos-LC').text("6");
            $('#Tdina-Garganta-LC').text("3/8");
            $('#Tdina-Nones-LC').text("9 x 2");
            $('#Tdina-Medidas-90L').text("47");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "9":      tabla_O();
            $('#Tdina-Medidas-Al').text("15");
            $('#Tdina-Medidas-90L').text("49");
            break;
        case "10":     tabla_P();
            $('#Tdina-Medidas-Al').text("16");


            $('#Tdina-Medidas-L').text("4 7/16");
            $('#Tdina-Gajos').text("8");
            $('#Tdina-Garganta').text("1 7/16");
            $('#Tdina-Nones').text("11 x 2");

            $('#Tdina-Medidas-LC').text("3 7/16");
            $('#Tdina-Gajos-LC').text("8");
            $('#Tdina-Garganta-LC').text("1/2");
            $('#Tdina-Nones-LC').text("11 x 2");
            $('#Tdina-Medidas-90L').text("55");
            $('#Tdina-Medidas-90C').text("-");

            break;
        case "11":     tabla_Q();
            $('#Tdina-Medidas-Al').text("17");
            $('#Tdina-Medidas-90L').text("56");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "12":     tabla_R();
            $('#Tdina-Medidas-Al').text("18");
            $('#Tdina-Medidas-L').text("5 3/16");
            $('#Tdina-Gajos').text("8");
            $('#Tdina-Garganta').text("1 7/8");
            $('#Tdina-Nones').text("14 x 2");
            $('#Tdina-Medidas-LC').text("3 1/4");
            $('#Tdina-Gajos-LC').text("10");
            $('#Tdina-Garganta-LC').text("9/16");
            $('#Tdina-Nones-LC').text("14 x 2");
            $('#Tdina-Medidas-90L').text("Q1");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "14":     tabla_S();
            $('#Tdina-Medidas-Al').text("19");


            $('#Tdina-Medidas-L').text("6");
            $('#Tdina-Gajos').text("8");
            $('#Tdina-Garganta').text("2 1/4");
            $('#Tdina-Nones').text("15 x 2");

            $('#Tdina-Medidas-LC').text("3 11/16");
            $('#Tdina-Gajos-LC').text("10");
            $('#Tdina-Garganta-LC').text("11/16");
            $('#Tdina-Nones-LC').text("15 x 2");
            $('#Tdina-Medidas-90L').text("Q3");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "15":     tabla_T();
            $('#Tdina-Medidas-Al').text("20");
            $('#Tdina-Medidas-90L').text("Q5");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "16":     tabla_U();
            $('#Tdina-Medidas-Al').text("21");


            $('#Tdina-Medidas-L').text("6 3/4");
            $('#Tdina-Gajos').text("8");
            $('#Tdina-Garganta').text("2 5/16");
            $('#Tdina-Nones').text("17 x 2");

            $('#Tdina-Medidas-LC').text("3 7/16");
            $('#Tdina-Gajos-LC').text("12");
            $('#Tdina-Garganta-LC').text("3/4");
            $('#Tdina-Nones-LC').text("2");
            $('#Tdina-Medidas-90L').text("Q7");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "17":     tabla_V();
            $('#Tdina-Medidas-Al').text("22");
            $('#Tdina-Medidas-90L').text("Q9");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "18":     tabla_W();
            $('#Tdina-Medidas-Al').text("Hacer por Gajos");


            $('#Tdina-Medidas-L').text("6 1/16");
            $('#Tdina-Gajos').text("10");
            $('#Tdina-Garganta').text("2 7/16");
            $('#Tdina-Nones').text("19 x 2");

            $('#Tdina-Medidas-LC').text("3 7/8");
            $('#Tdina-Gajos-LC').text("12");
            $('#Tdina-Garganta-LC').text("7/8");
            $('#Tdina-Nones-LC').text("19 x 2");
            $('#Tdina-Medidas-90L').text("Hacer por Gajos");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "19":     tabla_X();
            $('#Tdina-Medidas-Al').text("Hacer por Gajos");
            break;
        case "20":     tabla_Y();
            $('#Tdina-Medidas-Al').text("Hacer por Gajos");

            $('#Tdina-Medidas-L').text("6 11/16");
            $('#Tdina-Gajos').text("10");
            $('#Tdina-Garganta').text("2 3/4");
            $('#Tdina-Nones').text("21 x 2");

            $('#Tdina-Medidas-LC').text("3 5/8");
            $('#Tdina-Gajos-LC').text("14");
            $('#Tdina-Garganta-LC').text("13/16");
            $('#Tdina-Nones-LC').text("21 x 2");
            break;
        case "21":     tabla_Z();  break;
        case "22":     tabla_A1();
            $('#Tdina-Medidas-L').text("7 5/16");
            $('#Tdina-Gajos').text("10");
            $('#Tdina-Garganta').text("3 1/16");
            $('#Tdina-Nones').text("23 x 2");

            $('#Tdina-Medidas-LC').text("4");
            $('#Tdina-Gajos-LC').text("14");
            $('#Tdina-Garganta-LC').text("15/16");
            $('#Tdina-Nones-LC').text("23 x 2");
            break;
        case "23":     tabla_B1();  break;
        case "24":     tabla_C1();  break;
    }    }
    if ($Asil == "3"){  switch ($pipa){
        case "1/2":    tabla_H();
            $('#Tdina-Medidas-Al').text("8");
            $('#Tdina-Medidas-90L').text("23");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "3/4":    tabla_H();
            $('#Tdina-Medidas-Al').text("8");
            $('#Tdina-Medidas-90L').text("23");
            $('#Tdina-Medidas-90C').text("23");
            break;
        case "1":      tabla_H();
            $('#Tdina-Medidas-Al').text("8");
            $('#Tdina-Medidas-90L').text("23");
            $('#Tdina-Medidas-90C').text("23");
            break;
        case "1 1/4":  tabla_H();
            $('#Tdina-Medidas-Al').text("8");
            $('#Tdina-Medidas-90L').text("23");
            $('#Tdina-Medidas-90C').text("23");
            break;
        case "1 1/2":  tabla_I();
            $('#Tdina-Medidas-Al').text("9");
            $('#Tdina-Medidas-90L').text("24");
            $('#Tdina-Medidas-90C').text("15");
            break;
        case "2":      tabla_I();
            $('#Tdina-Medidas-Al').text("9");
            $('#Tdina-Medidas-90L').text("24");
            $('#Tdina-Medidas-90C').text("15");
            break;
        case "2 1/2":  tabla_J();
            $('#Tdina-Medidas-Al').text("10");
            $('#Tdina-Medidas-90L').text("30");
            $('#Tdina-Medidas-90C').text("25");
            break;
        case "3":      tabla_J();
            $('#Tdina-Medidas-Al').text("10");
            $('#Tdina-Medidas-90L').text("30");
            $('#Tdina-Medidas-90C').text("25");
            break;
        case "3 1/2":  tabla_K();
            $('#Tdina-Medidas-Al').text("11");
            $('#Tdina-Medidas-90L').text("33");
            $('#Tdina-Medidas-90C').text("26");
            break;
        case "4":      tabla_K();
            $('#Tdina-Medidas-Al').text("11");


            $('#Tdina-Medidas-L').text("4 3/8");
            $('#Tdina-Gajos').text("4");
            $('#Tdina-Garganta').text("5/16");
            $('#Tdina-Nones').text("4 1/2 x 2 1/2 o 5 x 2 1/2");
            $('#Tdina-Medidas-90L').text("33");
            $('#Tdina-Medidas-90C').text("26");
            break;
        case "4 1/2":  tabla_L();
            $('#Tdina-Medidas-Al').text("12");
            $('#Tdina-Medidas-90L').text("39");
            $('#Tdina-Medidas-90C').text("31");

            break;
        case "5":      tabla_L();
            $('#Tdina-Medidas-Al').text("12");
            $('#Tdina-Medidas-90L').text("39");
            $('#Tdina-Medidas-90C').text("31");

            break;
        case "6":      tabla_M();
            $('#Tdina-Medidas-Al').text("13");


            $('#Tdina-Medidas-L').text("4 11/16");
            $('#Tdina-Gajos').text("5");
            $('#Tdina-Garganta').text("15/16");
            $('#Tdina-Nones').text("7 x 2 1/2");

            $('#Tdina-Medidas-LC').text("3 3/4");
            $('#Tdina-Gajos-LC').text("5");
            $('#Tdina-Garganta-LC').text("0");
            $('#Tdina-Nones-LC').text("7 x 2 1/2");
            $('#Tdina-Medidas-90L').text("44");
            $('#Tdina-Medidas-90C').text("12 MFR");
            break;
        case "7":      tabla_N();
            $('#Tdina-Medidas-Al').text("14");
            $('#Tdina-Medidas-90L').text("45");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "8":      tabla_O();
            $('#Tdina-Medidas-Al').text("15");


            $('#Tdina-Medidas-L').text("5");
            $('#Tdina-Gajos').text("6");
            $('#Tdina-Garganta').text("1 1/4");
            $('#Tdina-Nones').text("9 x 2 1/2");

            $('#Tdina-Medidas-LC').text("3 15/16");
            $('#Tdina-Gajos-LC').text("6");
            $('#Tdina-Garganta-LC').text("1/4");
            $('#Tdina-Nones-LC').text("9 x 2 1/2");
            $('#Tdina-Medidas-90L').text("49");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "9":      tabla_P();
            $('#Tdina-Medidas-Al').text("49");
            $('#Tdina-Medidas-90L').text("52");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "10":     tabla_Q();
            $('#Tdina-Medidas-Al').text("17");


            $('#Tdina-Medidas-L').text("4 1/2");
            $('#Tdina-Gajos').text("8");
            $('#Tdina-Garganta').text("1 3/8");
            $('#Tdina-Nones').text("11 x 2 1/2");

            $('#Tdina-Medidas-LC').text("3 9/16");
            $('#Tdina-Gajos-LC').text("8");
            $('#Tdina-Garganta-LC').text("3/8");
            $('#Tdina-Nones-LC').text("14 x 2 1/2");
            $('#Tdina-Medidas-90L').text("56");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "11":     tabla_R();
            $('#Tdina-Medidas-Al').text("18");
            $('#Tdina-Medidas-90L').text("Q1");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "12":     tabla_S();
            $('#Tdina-Medidas-Al').text("19");


            $('#Tdina-Medidas-L').text("5 5/16");
            $('#Tdina-Gajos').text("8");
            $('#Tdina-Garganta').text("1 3/4");
            $('#Tdina-Nones').text("14 x 2 1/2");
            $('#Tdina-Medidas-90L').text("Q3");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "14":     tabla_T();
            $('#Tdina-Medidas-Al').text("20");


            $('#Tdina-Medidas-L').text("6 1/16");
            $('#Tdina-Gajos').text("8");
            $('#Tdina-Garganta').text("2 3/16");
            $('#Tdina-Nones').text("15 x 2 1/2");

            $('#Tdina-Medidas-LC').text("3 3/4");
            $('#Tdina-Gajos-LC').text("10");
            $('#Tdina-Garganta-LC').text("5/8");
            $('#Tdina-Nones-LC').text("15 x 2 1/2");
            $('#Tdina-Medidas-90L').text("Q5");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "15":     tabla_U();
            $('#Tdina-Medidas-Al').text("21");
            $('#Tdina-Medidas-90L').text("Q7");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "16":     tabla_V();
            $('#Tdina-Medidas-Al').text("22");


            $('#Tdina-Medidas-L').text("6 7/8");
            $('#Tdina-Gajos').text("8");
            $('#Tdina-Garganta').text("2 9/16");
            $('#Tdina-Nones').text("17 x 2.5");

            $('#Tdina-Medidas-LC').text("3 9/16");
            $('#Tdina-Gajos-LC').text("12");
            $('#Tdina-Garganta-LC').text("5/8");
            $('#Tdina-Nones-LC').text("17 x 2.5");
            $('#Tdina-Medidas-90L').text("Q9");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "17":     tabla_W();
            $('#Tdina-Medidas-Al').text("Hacer por Gajos");
            $('#Tdina-Medidas-90L').text("Hacer por Gajos");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "18":     tabla_X();
            $('#Tdina-Medidas-Al').text("Hacer por Gajos");
            $('#Tdina-Medidas-90L').text("Hacer por Gajos");
            $('#Tdina-Medidas-90C').text("-");

            $('#Tdina-Medidas-L').text("6 1/8");
            $('#Tdina-Gajos').text("10");
            $('#Tdina-Garganta').text("2 3/8");
            $('#Tdina-Nones').text("19 x 2.5");

            $('#Tdina-Medidas-LC').text("3 15/16");
            $('#Tdina-Gajos-LC').text("12");
            $('#Tdina-Garganta-LC').text("13/16");
            $('#Tdina-Nones-LC').text("19 x 2.5");
            break;
        case "19":     tabla_Y();
            $('#Tdina-Medidas-Al').text("Hacer por Gajos");

            break;
        case "20":     tabla_Z();
            $('#Tdina-Medidas-Al').text("Hacer por Gajos");


            $('#Tdina-Medidas-L').text("6 3/4");
            $('#Tdina-Gajos').text("10");
            $('#Tdina-Garganta').text("2 11/16");
            $('#Tdina-Nones').text("21 x 2.5");

            $('#Tdina-Medidas-LC').text("3 11/16");
            $('#Tdina-Gajos-LC').text("14");
            $('#Tdina-Garganta-LC').text("13/16");
            $('#Tdina-Nones-LC').text("21 x 2.5");
            break;
        case "21":     tabla_A1();  break;
        case "22":     tabla_B1();
            $('#Tdina-Medidas-L').text("7 3/8");
            $('#Tdina-Gajos').text("10");
            $('#Tdina-Garganta').text("3");
            $('#Tdina-Nones').text("23 x 2.5");

            $('#Tdina-Medidas-LC').text("4 1/16");
            $('#Tdina-Gajos-LC').text("14");
            $('#Tdina-Garganta-LC').text("7/8");
            $('#Tdina-Nones-LC').text("23 x 2.5");
            break;
        case "23":     tabla_C1();  break;
        case "24":     tabla_D1();  break;
    }    }
    if ($Asil == "3 1/2"){  switch ($pipa){
        case "1/2":    tabla_I();
            $('#Tdina-Medidas-Al').text(" ");
            $('#Tdina-Medidas-90L').text("15");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "3/4":    tabla_I();
            $('#Tdina-Medidas-Al').text(" ");
            $('#Tdina-Medidas-90L').text("15");
            $('#Tdina-Medidas-90C').text("15");
            break;
        case "1":      tabla_I();
            $('#Tdina-Medidas-Al').text(" ");
            $('#Tdina-Medidas-90L').text("15");
            $('#Tdina-Medidas-90C').text("15");
            break;
        case "1 1/4":  tabla_I();
            $('#Tdina-Medidas-Al').text("9");
            $('#Tdina-Medidas-90L').text("15");
            $('#Tdina-Medidas-90C').text("15");
            break;
        case "1 1/2":  tabla_J();
            $('#Tdina-Medidas-Al').text("10");
            $('#Tdina-Medidas-90L').text("25");
            $('#Tdina-Medidas-90C').text("25");
            break;
        case "2":      tabla_J();
            $('#Tdina-Medidas-Al').text("10");
            $('#Tdina-Medidas-90L').text("25");
            $('#Tdina-Medidas-90C').text("25");
            break;
        case "2 1/2":  tabla_K();
            $('#Tdina-Medidas-Al').text("11");
            $('#Tdina-Medidas-90L').text("26");
            $('#Tdina-Medidas-90C').text("26");
            break;
        case "3":      tabla_K();
            $('#Tdina-Medidas-Al').text("11");
            $('#Tdina-Medidas-90L').text("26");
            $('#Tdina-Medidas-90C').text("26");

            break;
        case "3 1/2":  tabla_L();
            $('#Tdina-Medidas-Al').text("12");
            $('#Tdina-Medidas-90L').text("31");
            $('#Tdina-Medidas-90C').text("31");
            break;
        case "4":      tabla_L();
            $('#Tdina-Medidas-Al').text("12");


            $('#Tdina-Medidas-L').text("4 9/16");
            $('#Tdina-Gajos').text("4");
            $('#Tdina-Garganta').text("1/8");
            $('#Tdina-Nones').text("4 1/2 x 3 o 5 x 3");
            $('#Tdina-Medidas-90L').text("31");
            $('#Tdina-Medidas-90C').text("31");
            break;
        case "4 1/2":  tabla_N();
            $('#Tdina-Medidas-Al').text("13");
            $('#Tdina-Medidas-90L').text("34");
            $('#Tdina-Medidas-90C').text("12 MFR");
            break;
        case "5":      tabla_M();

            $('#Tdina-Medidas-Al').text("13");
            $('#Tdina-Medidas-90L').text("34");
            $('#Tdina-Medidas-90C').text("12 MFR");
            break;
        case "6":      tabla_N();
            $('#Tdina-Medidas-Al').text("14");


            $('#Tdina-Medidas-L').text("4 15/16");
            $('#Tdina-Gajos').text("5");
            $('#Tdina-Garganta').text("3/4");
            $('#Tdina-Nones').text("7 x 3");
            $('#Tdina-Medidas-90L').text("45");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "7":      tabla_O();
            $('#Tdina-Medidas-Al').text("15");
            $('#Tdina-Medidas-90L').text("57");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "8":      tabla_P();
            $('#Tdina-Medidas-Al').text("16");


            $('#Tdina-Medidas-LC').text("4 1/16");
            $('#Tdina-Gajos-LC').text("6");
            $('#Tdina-Garganta-LC').text("1/8");
            $('#Tdina-Nones-LC').text("9 x 3");

            $('#Tdina-Medidas-L').text("5 1/8");
            $('#Tdina-Gajos').text("6");
            $('#Tdina-Garganta').text("1 1/8");
            $('#Tdina-Nones').text("9 x 3");
            $('#Tdina-Medidas-90L').text("52");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "9":      tabla_Q();
            $('#Tdina-Medidas-Al').text("17");
            $('#Tdina-Medidas-90L').text("53");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "10":     tabla_R();
            $('#Tdina-Medidas-Al').text("18");


            $('#Tdina-Medidas-LC').text("3 1/4");
            $('#Tdina-Gajos-LC').text("8");
            $('#Tdina-Garganta-LC').text("11/16");
            $('#Tdina-Nones-LC').text("");

            $('#Tdina-Medidas-L').text("4 5/8");
            $('#Tdina-Gajos').text("8");
            $('#Tdina-Garganta').text("1 1/4");
            $('#Tdina-Nones').text("11 x 3");
            $('#Tdina-Medidas-90L').text("Q1");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "11":     tabla_S();
            $('#Tdina-Medidas-Al').text("19");
            $('#Tdina-Medidas-90L').text("Q3");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "12":     tabla_T();
            $('#Tdina-Medidas-Al').text("20");


            $('#Tdina-Medidas-LC').text("3 1/16");
            $('#Tdina-Gajos-LC').text("10");
            $('#Tdina-Garganta-LC').text("11/16");
            $('#Tdina-Nones-LC').text("");

            $('#Tdina-Medidas-L').text("5 7/16");
            $('#Tdina-Gajos').text("8");
            $('#Tdina-Garganta').text("1 5/8");
            $('#Tdina-Nones').text("14 x 3");
            $('#Tdina-Medidas-90L').text("Q5");
            $('#Tdina-Medidas-90C').text("-");
            break;


        case "14":     tabla_U();
            $('#Tdina-Medidas-Al').text("21");


            $('#Tdina-Medidas-LC').text("3 1/2");
            $('#Tdina-Gajos-LC').text("10");
            $('#Tdina-Garganta-LC').text("7/8");
            $('#Tdina-Nones-LC').text("");

            $('#Tdina-Medidas-L').text("6 3/16");
            $('#Tdina-Gajos').text("8");
            $('#Tdina-Garganta').text("2 1/16");
            $('#Tdina-Nones').text("15 x 3");
            $('#Tdina-Medidas-90L').text("Q7");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "15":     tabla_V();
            $('#Tdina-Medidas-Al').text("22");
            $('#Tdina-Medidas-90L').text("Q9");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "16":     tabla_W();
            $('#Tdina-Medidas-Al').text("Hacer por Gajos");


            $('#Tdina-Medidas-LC').text("3 5/6");
            $('#Tdina-Gajos-LC').text("12");
            $('#Tdina-Garganta-LC').text("7/8");
            $('#Tdina-Nones-LC').text("");

            $('#Tdina-Medidas-L').text("6 15/16");
            $('#Tdina-Gajos').text("8");
            $('#Tdina-Garganta').text("2 7/16");
            $('#Tdina-Nones').text("17 x 3");
            $('#Tdina-Medidas-90L').text("Hacer por Gajos");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "17":     tabla_X();
            $('#Tdina-Medidas-Al').text("Hacer por Gajos");
            $('#Tdina-Medidas-90L').text("Hacer por Gajos");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "18":     tabla_Y();
            $('#Tdina-Medidas-Al').text("Hacer por Gajos");

            $('#Tdina-Medidas-LC').text("3 3/4");
            $('#Tdina-Gajos-LC').text("12");
            $('#Tdina-Garganta-LC').text("1");
            $('#Tdina-Nones-LC').text("");

            $('#Tdina-Medidas-L').text("6 3/16");
            $('#Tdina-Gajos').text("10");
            $('#Tdina-Garganta').text("2 1/4");
            $('#Tdina-Nones').text("19 x 3");
            $('#Tdina-Medidas-90L').text("Hacer por Gajos");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "19":     tabla_Z();
            $('#Tdina-Medidas-Al').text("Hacer por Gajos");
            break;
        case "20":     tabla_A1();
            $('#Tdina-Medidas-Al').text("Hacer por Gajos");

            $('#Tdina-Medidas-LC').text("3 9/16");
            $('#Tdina-Gajos-LC').text("14");
            $('#Tdina-Garganta-LC').text("15/16");
            $('#Tdina-Nones-LC').text("");

            $('#Tdina-Medidas-L').text("6 13/16");
            $('#Tdina-Gajos').text("10");
            $('#Tdina-Garganta').text("2 9/16");
            $('#Tdina-Nones').text("21 x 3");
            break;
        case "21":     tabla_B1();  break;
        case "22":     tabla_C1();
            $('#Tdina-Medidas-L').text("7 7/6");
            $('#Tdina-Gajos').text("10");
            $('#Tdina-Garganta').text("1 7/8");
            $('#Tdina-Nones').text("23 x 3");

            $('#Tdina-Medidas-LC').text("3 7/8");
            $('#Tdina-Gajos-LC').text("14");
            $('#Tdina-Garganta-LC').text("1 1/16");
            $('#Tdina-Nones-LC').text("");
            break;
        case "23":     tabla_D1();  break;
    }    }
    if ($Asil == "4"){  switch ($pipa){
        case "1/2":    tabla_J();
            $('#Tdina-Medidas-90L').text("25");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "3/4":    tabla_J();
            $('#Tdina-Medidas-90L').text("25");
            $('#Tdina-Medidas-90C').text("25");
            break;
        case "1":      tabla_J();
            $('#Tdina-Medidas-90L').text("25");
            $('#Tdina-Medidas-90C').text("25");
            break;
        case "1 1/4":  tabla_J();
            $('#Tdina-Medidas-90L').text("25");
            $('#Tdina-Medidas-90C').text("25");
            break;
        case "1 1/2":  tabla_K();
            $('#Tdina-Medidas-90L').text("26");
            $('#Tdina-Medidas-90C').text("26");
            break;
        case "2":      tabla_K();
            $('#Tdina-Medidas-90L').text("26");
            $('#Tdina-Medidas-90C').text("26");
            break;
        case "2 1/2":  tabla_L();
            $('#Tdina-Medidas-90L').text("31");
            $('#Tdina-Medidas-90C').text("31");
            break;
        case "3":      tabla_L();
            $('#Tdina-Medidas-90L').text("31");
            $('#Tdina-Medidas-90C').text("31");
            break;
        case "3 1/2":  tabla_M();
            $('#Tdina-Medidas-90L').text("34");
            $('#Tdina-Medidas-90C').text("12 MFR");
            break;
        case "4":      tabla_M();
            $('#Tdina-Medidas-90L').text("34");
            $('#Tdina-Medidas-90C').text("12 MFR");
            break;
        case "4 1/2":  tabla_N();
            $('#Tdina-Medidas-90L').text("40");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "5":      tabla_N();
            $('#Tdina-Medidas-90L').text("40");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "6":      tabla_O();
            $('#Tdina-Medidas-L').text("5 1/16");
            $('#Tdina-Gajos').text("5");
            $('#Tdina-Garganta').text("9/16");
            $('#Tdina-Nones').text("7 x 3 1/2");
            $('#Tdina-Medidas-90L').text("57");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "7":      tabla_P();
            $('#Tdina-Medidas-90L').text("52");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "8":      tabla_Q();
            $('#Tdina-Medidas-L').text("5 1/4");
            $('#Tdina-Gajos').text("6");
            $('#Tdina-Garganta').text("1");
            $('#Tdina-Nones').text("9 x 3 1/2");
            $('#Tdina-Medidas-90L').text("53");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "9":      tabla_R();
            $('#Tdina-Medidas-90L').text("Hacer por Gajos");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "10":     tabla_S();
            $('#Tdina-Medidas-LC').text("3 3/4");
            $('#Tdina-Gajos-LC').text("8");
            $('#Tdina-Garganta-LC').text("3/16");
            $('#Tdina-Nones-LC').text("11 x 3 1/2");

            $('#Tdina-Medidas-L').text("4 3/4");
            $('#Tdina-Gajos').text("8");
            $('#Tdina-Garganta').text("1 3/16");
            $('#Tdina-Nones').text("11 x 3 1/2");
            $('#Tdina-Medidas-90L').text("Hacer por Gajos");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "11":     tabla_T();
            $('#Tdina-Medidas-90L').text("Hacer por Gajos");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "12":     tabla_U();
            $('#Tdina-Medidas-LC').text("3 7/16");
            $('#Tdina-Gajos-LC').text("10");
            $('#Tdina-Garganta-LC').text("5/16");
            $('#Tdina-Nones-LC').text("14 x 3 1/2");

            $('#Tdina-Medidas-L').text("5 1/2");
            $('#Tdina-Gajos').text("8");
            $('#Tdina-Garganta').text("1 9/16");
            $('#Tdina-Nones').text("14 x 3 1/2");
            $('#Tdina-Medidas-90L').text("Hacer por Gajos");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "14":     tabla_V();
            $('#Tdina-Medidas-L').text("6 1/4");
            $('#Tdina-Gajos').text("8");
            $('#Tdina-Garganta').text("2");
            $('#Tdina-Nones').text("15 x 3 1/2");

            $('#Tdina-Medidas-LC').text("3 15/16");
            $('#Tdina-Gajos-LC').text("10");
            $('#Tdina-Garganta-LC').text("1/2");
            $('#Tdina-Nones-LC').text("15 x 3 1/2");
            $('#Tdina-Medidas-90L').text("Hacer por Gajos");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "15":     tabla_W();
            $('#Tdina-Medidas-90L').text("Hacer por Gajos");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "16":     tabla_X();
            $('#Tdina-Medidas-LC').text("3 11/16");
            $('#Tdina-Gajos-LC').text("12");
            $('#Tdina-Garganta-LC').text("1/2");
            $('#Tdina-Nones-LC').text("17 x 3.5");

            $('#Tdina-Medidas-L').text("7 1/16");
            $('#Tdina-Gajos').text("8");
            $('#Tdina-Garganta').text("2 3/8");
            $('#Tdina-Nones').text("17 x 3.5");
            $('#Tdina-Medidas-90L').text("Hacer por Gajos");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "17":     tabla_Y();
            $('#Tdina-Medidas-90L').text("Hacer por Gajos");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "18":     tabla_Z();
            $('#Tdina-Medidas-L').text("6 1/4");
            $('#Tdina-Gajos').text("10");
            $('#Tdina-Garganta').text("2 3/16");
            $('#Tdina-Nones').text("19 x 3.5");

            $('#Tdina-Medidas-LC').text("4 1/16");
            $('#Tdina-Gajos-LC').text("12");
            $('#Tdina-Garganta-LC').text("5/8");
            $('#Tdina-Nones-LC').text("19 x 3.5");
            $('#Tdina-Medidas-90L').text("Hacer por Gajos");
            $('#Tdina-Medidas-90C').text("-");
            break;
        case "19":     tabla_A1();  break;
        case "20":     tabla_B1();
            $('#Tdina-Medidas-L').text("6 15/16");
            $('#Tdina-Gajos').text("10");
            $('#Tdina-Garganta').text("2 1/2");
            $('#Tdina-Nones').text("21 x 3.5");

            $('#Tdina-Medidas-LC').text("3 13/16");
            $('#Tdina-Gajos-LC').text("14");
            $('#Tdina-Garganta-LC').text("11/16");
            $('#Tdina-Nones-LC').text("21 x 3.5");
            break;
        case "21":     tabla_C1();  break;
        case "22":     tabla_D1();
            $('#Tdina-Medidas-LC').text("4 1/8");
            $('#Tdina-Gajos-LC').text("14");
            $('#Tdina-Garganta-LC').text("13/16");
            $('#Tdina-Nones-LC').text("23 x 3.5");
            break;
    }    }
    if ($Asil == "4 1/2"){  switch ($pipa){
        case "1/2":    tabla_K();  break;
        case "3/4":    tabla_K();  break;
        case "1":      tabla_K();  break;
        case "1 1/4":  tabla_K();  break;
        case "1 1/2":  tabla_L();  break;
        case "2":      tabla_L();  break;
        case "2 1/2":  tabla_M();  break;
        case "3":      tabla_M();  break;
        case "3 1/2":  tabla_N();  break;
        case "4":      tabla_N();  break;
        case "4 1/2":  tabla_O();  break;
        case "5":      tabla_O();  break
        case "6":      tabla_P();
            $('#Tdina-Medidas-L').text("5 1/4");
            $('#Tdina-Gajos').text("5");
            $('#Tdina-Garganta').text("7/16");
            $('#Tdina-Nones').text("7/4");
            break;
        case "7":      tabla_Q();  break;
        case "8":      tabla_R();
            $('#Tdina-Medidas-L').text("5 1/4");
            $('#Tdina-Gajos').text("5");
            $('#Tdina-Garganta').text("7/16");
            $('#Tdina-Nones').text("7 x 4");
            break;
        case "9":      tabla_S();  break;
        case "10":     tabla_T();
            $('#Tdina-Medidas-L').text("4 13/16");
            $('#Tdina-Gajos').text("8");
            $('#Tdina-Garganta').text("1 1/16");
            $('#Tdina-Nones').text("11 x 4");

            $('#Tdina-Medidas-LC').text("3 13/16");
            $('#Tdina-Gajos-LC').text("8");
            $('#Tdina-Garganta-LC').text("1/16");
            $('#Tdina-Nones-LC').text("11 x 4");
            break;
        case "11":     tabla_U();  break;
        case "12":     tabla_V();
            $('#Tdina-Medidas-L').text("5 5/8");
            $('#Tdina-Gajos').text("8");
            $('#Tdina-Garganta').text("1 7/16");
            $('#Tdina-Nones').text("14 x 4");

            $('#Tdina-Medidas-LC').text("3 9/16");
            $('#Tdina-Gajos-LC').text("10");
            $('#Tdina-Garganta-LC').text("1/4");
            $('#Tdina-Nones-LC').text("14 x 4");
            break;
        case "14":     tabla_W();
            $('#Tdina-Medidas-L').text("4");
            $('#Tdina-Gajos').text("10");
            $('#Tdina-Garganta').text("3/8");
            $('#Tdina-Nones').text("15 x 4");
            break;
        case "15":     tabla_X();  break;
        case "16":     tabla_Y();
            $('#Tdina-Medidas-LC').text("3 3/4");
            $('#Tdina-Gajos-LC').text("12");
            $('#Tdina-Garganta-LC').text("7/16");
            $('#Tdina-Nones-LC').text("17 x 4");

            $('#Tdina-Medidas-L').text("7 3/16");
            $('#Tdina-Gajos').text("8");
            $('#Tdina-Garganta').text("2 1/4");
            $('#Tdina-Nones').text("17 x 4");
            break;
        case "17":     tabla_Z();  break;
        case "18":     tabla_A1();
            $('#Tdina-Medidas-L').text("6 3/8");
            $('#Tdina-Gajos').text("10");
            $('#Tdina-Garganta').text("2 1/8");
            $('#Tdina-Nones').text("19 x 4");

            $('#Tdina-Medidas-LC').text("4 1/8");
            $('#Tdina-Gajos-LC').text("12");
            $('#Tdina-Garganta-LC').text("9/16");
            $('#Tdina-Nones-LC').text("19 x 4");
            break;
        case "19":     tabla_B1();  break;
        case "20":     tabla_C1();
            $('#Tdina-Medidas-L').text("7");
            $('#Tdina-Gajos').text("10");
            $('#Tdina-Garganta').text("2 7/16");
            $('#Tdina-Nones').text("21 4");

            $('#Tdina-Medidas-LC').text("3 7/8");
            $('#Tdina-Gajos-LC').text("14");
            $('#Tdina-Garganta-LC').text("5/8");
            $('#Tdina-Nones-LC').text("21 x 4");
            break;
        case "21":      tabla_D1();  break;
        case "22":
            $('#Tdina-Medidas-LC').text("3 1/8");
            $('#Tdina-Gajos-LC').text("5");
            $('#Tdina-Garganta-LC').text("5/8");
            $('#Tdina-Nones-LC').text("");
            break;
    }    }
    if ($Asil == "5"){  switch ($pipa){
        case "1/2":    tabla_L();  break;
        case "3/4":    tabla_L();  break;
        case "1":      tabla_L();  break;
        case "1 1/4":  tabla_L();  break;
        case "1 1/2":  tabla_M();  break;
        case "2":      tabla_M();  break;
        case "2 1/2":  tabla_N();  break;
        case "3":      tabla_N();  break;
        case "3 1/2":  tabla_O();  break;
        case "4":      tabla_O();  break
        case "4 1/2":  tabla_P();  break;
        case "5":      tabla_P(); break;
        case "6":      tabla_Q();
            $('#Tdina-Medidas-L').text("5 3/8");
            $('#Tdina-Gajos').text("5");
            $('#Tdina-Garganta').text("1/4");
            $('#Tdina-Nones').text("7 x 4 1/2");
            break;
        case "7":      tabla_R();  break;
        case "8":      tabla_S();
            $('#Tdina-Medidas-L').text("5 1/2");
            $('#Tdina-Gajos').text("6");
            $('#Tdina-Garganta').text("3/4");
            $('#Tdina-Nones').text("9 x 4 1/2");
            break;
        case "9":      tabla_T();  break;
        case "10":     tabla_U();
            $('#Tdina-Medidas-L').text("4 15/16");
            $('#Tdina-Gajos').text("8");
            $('#Tdina-Garganta').text("1");
            $('#Tdina-Nones').text("11 x 4 1/2");
            break;
        case "11":     tabla_V();  break;
        case "12":     tabla_W();
            $('#Tdina-Medidas-LC').text("3 5/8");
            $('#Tdina-Gajos-LC').text("10");
            $('#Tdina-Garganta-LC').text("1/8");
            $('#Tdina-Nones-LC').text("14 x 4 1/2");

            $('#Tdina-Medidas-L').text("5 11/16");
            $('#Tdina-Gajos').text("8");
            $('#Tdina-Garganta').text("1 3/4");
            $('#Tdina-Nones').text("14 x 4 1/2");
            break;
        case "14":     tabla_X();
            $('#Tdina-Medidas-LC').text("4 1/6");
            $('#Tdina-Gajos-LC').text("10");
            $('#Tdina-Garganta-LC').text("5/16");
            $('#Tdina-Nones-LC').text("15 x 4 1/2");

            $('#Tdina-Medidas-L').text("6 1/2");
            $('#Tdina-Gajos').text("8");
            $('#Tdina-Garganta').text("1 3/4");
            $('#Tdina-Nones').text("15 x 4 1/2");
            break;
        case "15":     tabla_Y();  break;
        case "16":     tabla_Z();
            $('#Tdina-Medidas-LC').text("3 13/16");
            $('#Tdina-Gajos-LC').text("12");
            $('#Tdina-Garganta-LC').text("3/8");
            $('#Tdina-Nones-LC').text("17 x 4.5");

            $('#Tdina-Medidas-L').text("7 1/4");
            $('#Tdina-Gajos').text("8");
            $('#Tdina-Garganta').text("2 3/16");
            $('#Tdina-Nones').text("17 x 4.5");
            break;
        case "17":     tabla_A1();  break;
        case "18":     tabla_B1();
            $('#Tdina-Medidas-LC').text("4 3/16");
            $('#Tdina-Gajos-LC').text("12");
            $('#Tdina-Garganta-LC').text("1/2");
            $('#Tdina-Nones-LC').text("19 x 4.5");

            $('#Tdina-Medidas-L').text("6 7/16");
            $('#Tdina-Gajos').text("10");
            $('#Tdina-Garganta').text("2 1/16");
            $('#Tdina-Nones').text("19 x 4.5");
            break;
        case "19":     tabla_C1();  break;
        case "20":     tabla_D1();
            $('#Tdina-Medidas-L').text("7 1/16");
            $('#Tdina-Gajos').text("10");
            $('#Tdina-Garganta').text("2 3/8");
            $('#Tdina-Nones').text("21 x 4.5");

            $('#Tdina-Medidas-LC').text("3 15/16");
            $('#Tdina-Gajos-LC').text("14");
            $('#Tdina-Garganta-LC').text("9/16");
            $('#Tdina-Nones-LC').text("21 x 4.5");
            break;
        case "22":
            $('#Tdina-Medidas-L').text("7 11/16");
            $('#Tdina-Gajos').text("10");
            $('#Tdina-Garganta').text("2 11/16");
            $('#Tdina-Nones').text("23 x 4.5");

            $('#Tdina-Medidas-LC').text("4 1/4");
            $('#Tdina-Gajos-LC').text("14");
            $('#Tdina-Garganta-LC').text("11/16");
            $('#Tdina-Nones-LC').text("23 x 4.5");
            break;
    }    }
    if ($Asil == "5 1/2"){  switch ($pipa){
        case "1/2":    tabla_M();  break;
        case "3/4":    tabla_M();  break;
        case "1":      tabla_M();  break;
        case "1 1/4":  tabla_M();  break;
        case "1 1/2":  tabla_N();  break;
        case "2":      tabla_N();  break;
        case "2 1/2":  tabla_O();  break;
        case "3":      tabla_O();  break;
        case "3 1/2":  tabla_P();  break;
        case "4":      tabla_P();  break;
        case "4 1/2":  tabla_Q();  break;
        case "5":      tabla_Q();  break;
        case "6":      tabla_R();
            $('#Tdina-Medidas-L').text("5 9/16");
            $('#Tdina-Gajos').text("5");
            $('#Tdina-Garganta').text("1/16");
            $('#Tdina-Nones').text("7 x 5");
            break;
        case "7":      tabla_S();  break;
        case "8":      tabla_T();
            $('#Tdina-Medidas-L').text("5 11/16");
            $('#Tdina-Gajos').text("6");
            $('#Tdina-Garganta').text("5/8");
            $('#Tdina-Nones').text("9 x 5");
            break;
        case "9":      tabla_U();  break;
        case "10":     tabla_V();
            $('#Tdina-Medidas-L').text("5");
            $('#Tdina-Gajos').text("8");
            $('#Tdina-Garganta').text("7/8");
            $('#Tdina-Nones').text("11 x 5");
            break;
        case "11":     tabla_W();  break;
        case "12":     tabla_X();
            $('#Tdina-Medidas-LC').text("3 11/16");
            $('#Tdina-Gajos-LC').text("10");
            $('#Tdina-Garganta-LC').text("1 1/16");
            $('#Tdina-Nones-LC').text("14 x 5");

            $('#Tdina-Medidas-L').text("5 13/16");
            $('#Tdina-Gajos').text("8");
            $('#Tdina-Garganta').text("1 1/4");
            $('#Tdina-Nones').text("14 x 5");
            break;
        case "14":     tabla_Y();
            $('#Tdina-Medidas-LC').text("4 3/16");
            $('#Tdina-Gajos-LC').text("10");
            $('#Tdina-Garganta-LC').text("1/4");
            $('#Tdina-Nones-LC').text("15 x 5");

            $('#Tdina-Medidas-L').text("6 9/16");
            $('#Tdina-Gajos').text("8");
            $('#Tdina-Garganta').text("1 1/16");
            $('#Tdina-Nones').text("15 x 5");


            break;
        case "15":     tabla_Z();  break;
        case "16":     tabla_A1();
            $('#Tdina-Medidas-LC').text("3 7/8");
            $('#Tdina-Gajos-LC').text("12");
            $('#Tdina-Garganta-LC').text("5/16");
            $('#Tdina-Nones-LC').text("17 x 5");

            $('#Tdina-Medidas-L').text("7 3/8");
            $('#Tdina-Gajos').text("8");
            $('#Tdina-Garganta').text("2 1/16");
            $('#Tdina-Nones').text("17 x 5");
            break;
        case "17":     tabla_B1();  break;
        case "18":     tabla_C1();
            $('#Tdina-Medidas-LC').text("4 1/4");
            $('#Tdina-Gajos-LC').text("12");
            $('#Tdina-Garganta-LC').text("7/16");
            $('#Tdina-Nones-LC').text("19 x 5");

            $('#Tdina-Medidas-L').text("6 1/2");
            $('#Tdina-Gajos').text("10");
            $('#Tdina-Garganta').text("1 5/16");
            $('#Tdina-Nones').text("19 x 5");
            break;
        case "19":     tabla_D1();  break;
        case "20":
            $('#Tdina-Medidas-L').text("4");
            $('#Tdina-Gajos').text("14");
            $('#Tdina-Garganta').text("1/2");
            $('#Tdina-Nones').text("21 x 5");
            break;
        case "22":
            $('#Tdina-Medidas-L').text("7 3/4");
            $('#Tdina-Gajos').text("10");
            $('#Tdina-Garganta').text("2 9/16");
            $('#Tdina-Nones').text("23 x 5.5");

            $('#Tdina-Medidas-LC').text("4 5/16");
            $('#Tdina-Gajos-LC').text("14");
            $('#Tdina-Garganta-LC').text("5/8");
            $('#Tdina-Nones-LC').text("23 x 5");
            break;
    }    }
    if ($Asil == "6"){  switch ($pipa){
        case "1/2":    tabla_N();  break;
        case "3/4":    tabla_N();  break;
        case "1":      tabla_N();  break;
        case "1 1/4":  tabla_N();  break;
        case "1 1/2":  tabla_O();  break;
        case "2":      tabla_O();  break;
        case "2 1/2":  tabla_P();  break;
        case "3":      tabla_P();  break;
        case "3 1/2":  tabla_Q();  break;
        case "4":      tabla_Q();  break;
        case "4 1/2":  tabla_R();  break;
        case "5":      tabla_R();  break;
        case "6":      tabla_S();  break;
        case "7":      tabla_T();  break;
        case "8":      tabla_U();
            $('#Tdina-Medidas-L').text("5 13/16");
            $('#Tdina-Gajos').text("6");
            $('#Tdina-Garganta').text("1/2");
            $('#Tdina-Nones').text("9 x 5 1/2");
            break;
        case "9":      tabla_V();  break;
        case "10":     tabla_W();
            $('#Tdina-Medidas-L').text("5 1/8");
            $('#Tdina-Gajos').text("8");
            $('#Tdina-Garganta').text("3/4");
            $('#Tdina-Nones').text("11 x 5 1/2");
            break;
        case "11":     tabla_X();  break;
        case "12":     tabla_Y();
            $('#Tdina-Medidas-LC').text("3 3/4");
            $('#Tdina-Gajos-LC').text("10");
            $('#Tdina-Garganta-LC').text("0");
            $('#Tdina-Nones-LC').text("14 x 5 1/2");


            $('#Tdina-Medidas-L').text("5 7/8");
            $('#Tdina-Gajos').text("8");
            $('#Tdina-Garganta').text("1 3/16");
            $('#Tdina-Nones').text("14 x 5 1/2");
            break;
        case "14":     tabla_Z();
            $('#Tdina-Medidas-LC').text("4 1/4");
            $('#Tdina-Gajos-LC').text("10");
            $('#Tdina-Garganta-LC').text("3/16");
            $('#Tdina-Nones-LC').text("");

            $('#Tdina-Medidas-L').text("6 11/16");
            $('#Tdina-Gajos').text("8");
            $('#Tdina-Garganta').text("1 9/16");
            $('#Tdina-Nones').text("15 x 5 1/2");
            break;
        case "15":     tabla_A1();  break;
        case "16":     tabla_B1();
            $('#Tdina-Medidas-LC').text("3 15/16");
            $('#Tdina-Gajos-LC').text("12");
            $('#Tdina-Garganta-LC').text("1/4");
            $('#Tdina-Nones-LC').text("17 x 5.5");

            $('#Tdina-Medidas-L').text("7 7/16");
            $('#Tdina-Gajos').text("8");
            $('#Tdina-Garganta').text("1 15/164");
            $('#Tdina-Nones').text("17 x 5.5");
            break;
        case "17":     tabla_C1();  break;
        case "18":     tabla_D1();
            $('#Tdina-Medidas-LC').text("4 5/16");
            $('#Tdina-Gajos-LC').text("12");
            $('#Tdina-Garganta-LC').text("3/8");
            $('#Tdina-Nones-LC').text("19 x 5.5");

            $('#Tdina-Medidas-L').text("6 5/8");
            $('#Tdina-Gajos').text("10");
            $('#Tdina-Garganta').text("1 7/8");
            $('#Tdina-Nones').text("19 x 5.5");
            break;
        case "20":
            $('#Tdina-Medidas-LC').text("4 1/16");
            $('#Tdina-Gajos-LC').text("14");
            $('#Tdina-Garganta-LC').text("7/16");
            $('#Tdina-Nones-LC').text("21 x 5.5");

            $('#Tdina-Medidas-L').text("7 1/4");
            $('#Tdina-Gajos').text("10");
            $('#Tdina-Garganta').text("2 3/16");
            $('#Tdina-Nones').text("21 x 5.5");
            break;
        case "22":
            $('#Tdina-Medidas-LC').text("4 3/8");
            $('#Tdina-Gajos-LC').text("14");
            $('#Tdina-Garganta-LC').text("9/16");
            $('#Tdina-Nones-LC').text("23 x 5.5");

            $('#Tdina-Medidas-L').text("7 7/8");
            $('#Tdina-Gajos').text("10");
            $('#Tdina-Garganta').text("2 1/2");
            $('#Tdina-Nones').text("23 x 5.5");
            break;
    }    }


    if ($('#Tdina-Medidas-L').text != ""){
        document.getElementById('Tabla-Tdinamica-2').style.display = 'inherit';
    }
    if ($('#Tdina-Medidas-LC').text != ""){
        document.getElementById('Tabla-Tdinamica-3').style.display = 'inherit';
    }
    if ($('#Tdina-Medidas-Al').text != ""){
        document.getElementById('45Aluminio').style.display = 'inherit';
    }
    if ($('#Tdina-Medidas-90L').text != ""){
        document.getElementById('90Aluminio').style.display = 'inherit';
    }


    $r = ( $circ1 / ( 2*Math.PI ) );
    $r2 = ( $circ2 / ( 2*Math.PI ) );
    if( !$.isNumeric($r) || !$.isNumeric($r2) ) {
        $( "#error-numeric" ).popup( "open" );
    } else if( $r <= $r2 ) {
        $( "#error-aguila" ).popup( "open" );
    } else {
        $e = Math.round((Math.sin( degreesToRadians(22.5) )*$r)*100)/100;
        $x2 = X( $r2, B($r, $r2, Math.cos( degreesToRadians(22.5) ) ), C( $r, $r2, Math.cos( degreesToRadians(22.5) ) ) );
        $x3 = X( $r2, B($r, $r2, Math.cos( degreesToRadians(45) ) ), C( $r, $r2, Math.cos( degreesToRadians(45) ) ) );
        $x4 = X( $r2, B($r, $r2, Math.sin( degreesToRadians(22.5) ) ), C( $r, $r2, Math.sin( degreesToRadians(22.5) ) ) );
        $y2 = Y( $r, Math.cos( degreesToRadians(22.5) ), $r2, $x2 );
        $y3 = Y( $r, Math.cos( degreesToRadians(45) ), $r2, $x3 );
        $y4 = Y( $r, Math.sin( degreesToRadians(22.5) ), $r2, $x4 );
        $d1 = Math.round((Math.sqrt( Math.pow( $r2,2 ) + Math.pow( ( $r2-$r ),2 ) ))*100)/100;
        $d2 = Math.round((Math.sqrt( Math.pow( $x2,2 ) + Math.pow( $y2,2 ) ))*100)/100;
        $d3 = Math.round((Math.sqrt( Math.pow( $x3,2 ) + Math.pow( $y3,2 ) ))*100)/100;
        $d4 = Math.round((Math.sqrt( Math.pow( $x4,2 ) + Math.pow( $y4,2 ) ))*100)/100;
        $d5 = 0;
        $dgde = Math.round((Math.sqrt( Math.pow( ( ( -$r*$r2 )/( $r2-$r ) ),2 ) + Math.pow( $r,2 ) ))*100)/100;
        $('#graficaMetodoAguila .dgde').text(convertToFraction($dgde) + "''");
        $('#graficaMetodoAguila .d1').text(convertToFraction($d1) + "''");
        $('#graficaMetodoAguila .d2').text(convertToFraction($d2) + "''");
        $('#graficaMetodoAguila .d3').text(convertToFraction($d3) + "''");
        $('#graficaMetodoAguila .d4').text(convertToFraction($d4) + "''");
        $('#graficaMetodoAguila .d5').text(convertToFraction($d5) + "''");
        $('#graficaMetodoAguila .e1').text(convertToFraction($e) + "''");
        $('#graficaMetodoAguila .e2').text(convertToFraction($e) + "''");
        $('#graficaMetodoAguila .e3').text(convertToFraction($e) + "''");
        $('#graficaMetodoAguila .e4').text(convertToFraction($e) + "''");
    }
}

/*-----------------------------------------
 Longitud de Arco
 ----------------------- -----------------------------*/


function Larco() {
    $Circunferencia = seleccionInput($('#LA-Circunferencia').val());
    $Grosor = seleccionInput($('#LA-Grosor_Insolacion').val());
    $Media = seleccionInput($('#LA-Media').val());

    if( parseFloat($Media) > parseFloat($Circunferencia)) {
        $( "#error-larco" ).popup( "open" );
    } else{


        $Diametro1 = $Circunferencia/Math.PI;
        $Radio1 = $Diametro1/2;
        $alfa = ($Media*360)/((2* Math.PI) * $Radio1);
        $Diametro2 = $Diametro1 + (2 * $Grosor);
        $Radio2 = $Diametro2/2;
        $Longitud_de_Arco = ((2 * Math.PI) * ($Radio2)* ($alfa))/360;

        $('#LA-Diametro1').text(convertToFraction($Diametro1) +"''") ;
        $('#LA-Radio1').text(convertToFraction($Radio1)+"''");
        $('#LA-alfa').text(convertToFraction($alfa)+"°");
        $('#LA-Diametro2').text(convertToFraction($Diametro2)+"''");
        $('#LA-Radio2').text(convertToFraction($Radio2)+"''");
        $('#LA-Longitud_de_Arco').text(convertToFraction($Longitud_de_Arco)+"''");

    }
    // $('#graficaMetodoAguila .dgde').text(convertToFraction($dgde) + "'");

}
/*----------------------------
 metodoAguila
 ----
 /*----------------------------
 metodoAguila o  Método Montura al Revés
 -------------------------------*/


function metodoAguila() {

    $('#chalecoAguila').removeClass('hidden');

    $('#chalecoAguila').addClass('d-block');
    /*
     if( $('#metodo-aguila #circ').hasClass('active') ) {
     $circ = convertToDecimal($('#metodo-aguila #circ').val());
     $circ2 = convertToDecimal($('#metodo-aguila #circ-2').val());
     } else {
     $circ = $('#metodo-aguila #circ-s').val();
     $circ2 = $('#metodo-aguila #circ-s-2').val();
     }*/

    if($('#metodo-aguila .man-btn').hasClass('active')) {
        $circ1 = seleccionInput($('#metodo-aguila #circ').val());
        $circ2 = seleccionInput($('#metodo-aguila #circ-2').val());
    } else {
        if($('#metodo-aguila .opt-btn').hasClass('active')) {
            $pipa = $('#metodo-aguila .no-radio .first-circ select.t-pipa').val();
            $insu = $('#metodo-aguila .no-radio .first-circ select.t-insulacion').val();
            $pipa2 = $('#metodo-aguila .no-radio .second-circ select.t-pipa').val();
            $insu2 = $('#metodo-aguila .no-radio .second-circ select.t-insulacion').val();
        }
        $circ1 = getCircumference($pipa, $insu);
        $circ2 = getCircumference($pipa2, $insu2);
    }

    $r = ( $circ1 / ( 2*Math.PI ) );
    $r2 = ( $circ2 / ( 2*Math.PI ) );
    if( !$.isNumeric($r) || !$.isNumeric($r2) ) {
        $( "#error-numeric" ).popup( "open" );
    } else if( $r <= $r2 ) {
        $( "#error-aguila" ).popup( "open" );
    } else {
      $e1 = Math.round((Math.sin( degreesToRadians(22.5) )*$r)*100)/100;
      $h1 = $r/Math.cos(Math.atan($r2/($r-$r2)));
      $anglep4 = (4*$e1)/$h1;
      $p4 = Math.sin($anglep4)*$h1;
      if ((document.getElementById("tLamina36Aguila").checked === true) && ($p4 > 36)){
        $opcionEscala.popup( "open" );
        $btn1sqr.on("click", function(){
          $escala = $p4/12;
          $nCirc1 = $circ1/$escala;
          $ncirc2 = $circ2/$escala;
          calculoMetodoAguila( $nCirc1, $ncirc2, $escala);
          $btn1sqr.off("click");
          $opcionEscala.popup( "close" );
        });

        $btn2sqr.on("click", function(){
          $escala = $p4/24;
          $nCirc1 = $circ1/$escala;
          $ncirc2 = $circ2/$escala;
          calculoMetodoAguila( $nCirc1, $ncirc2, $escala);
          $btn2sqr.off("click");
          $opcionEscala.popup( "close" );
        });
      }
      if ((document.getElementById("tLamina48Aguila").checked === true) && ($p4 > 48 )){
        $opcionEscala.popup( "open" );
        $btn1sqr.on("click", function(){
          $escala = $p4/12;
          $nCirc1 = $circ1/$escala;
          $ncirc2 = $circ2/$escala;
          calculoMetodoAguila( $nCirc1, $ncirc2, $escala);
          $btn1sqr.off("click");
          $opcionEscala.popup( "close" );
        });

        $btn2sqr.on("click", function(){
          $escala = $p4/24;
          $nCirc1 = $circ1/$escala;
          $ncirc2 = $circ2/$escala;
          calculoMetodoAguila( $nCirc1, $ncirc2, $escala);
          $btn2sqr.off("click");
          $opcionEscala.popup( "close" );
        });
      }

        calculoMetodoAguila($circ1, $circ2, 0);

    }
}

function calculoMetodoAguila($circ1, $circ2, $escala) {
  $r = ( $circ1 / ( 2*Math.PI ) );
  $r2 = ( $circ2 / ( 2*Math.PI ) );
  // $e = Math.round((Math.sin( degreesToRadians(22.5) )*$r)*100)/100;
  $e = ($circ1 / 4)/4;
  $x2 = X( $r2, B($r, $r2, Math.cos( degreesToRadians(22.5) ) ), C( $r, $r2, Math.cos( degreesToRadians(22.5) ) ) );
  $x3 = X( $r2, B($r, $r2, Math.cos( degreesToRadians(45) ) ), C( $r, $r2, Math.cos( degreesToRadians(45) ) ) );
  $x4 = X( $r2, B($r, $r2, Math.sin( degreesToRadians(22.5) ) ), C( $r, $r2, Math.sin( degreesToRadians(22.5) ) ) );
  $y2 = Y( $r, Math.cos( degreesToRadians(22.5) ), $r2, $x2 );
  $y3 = Y( $r, Math.cos( degreesToRadians(45) ), $r2, $x3 );
  $y4 = Y( $r, Math.sin( degreesToRadians(22.5) ), $r2, $x4 );
  $d1 = Math.round((Math.sqrt( Math.pow( $r2,2 ) + Math.pow( ( $r2-$r ),2 ) ))*100)/100;
  $d2 = Math.round((Math.sqrt( Math.pow( $x2,2 ) + Math.pow( $y2,2 ) ))*100)/100;
  $d3 = Math.round((Math.sqrt( Math.pow( $x3,2 ) + Math.pow( $y3,2 ) ))*100)/100;
  $d4 = Math.round((Math.sqrt( Math.pow( $x4,2 ) + Math.pow( $y4,2 ) ))*100)/100;
  $d5 = 0;

  $h = Math.round(($r/Math.cos(Math.atan($r2/($r-$r2))))*100)/100;
  $anglep1 = $e/$h;
  $p1y = convertToFraction( (Math.sin($anglep1)*$h));
  $p1x = convertToFraction($h - (Math.cos($anglep1)*$h));
  $q1y = convertToFraction((Math.sin($anglep1)*($h-$d2)));
  $q1x = convertToFraction($h - (Math.cos($anglep1)*($h-$d2)));
  $anglep2 = (2*$e)/$h;
  $p2y = convertToFraction((Math.sin($anglep2)*$h));
  $p2x = convertToFraction($h - (Math.cos($anglep2)*$h));
  $q2y = convertToFraction((Math.sin($anglep2)*($h-$d3)));
  $q2x = convertToFraction($h - Math.cos($anglep2)*($h-$d3));
  $anglep3 = (3*$e)/$h;
  $p3y = convertToFraction( Math.sin($anglep3)*$h);
  $p3x =convertToFraction( $h -Math.cos($anglep3)*$h);
  $q3y = convertToFraction(Math.sin($anglep3)*($h-$d4));
  $q3x = convertToFraction($h -Math.cos($anglep3)*($h-$d4));
  $anglep4 = (4*$e)/$h;
  $p4y = convertToFraction(Math.sin($anglep4)*$h);
  $p4x = convertToFraction($h - Math.cos($anglep4)*$h);

  $dgde = Math.round((Math.sqrt( Math.pow( ( ( -$r*$r2 )/( $r2-$r ) ),2 ) + Math.pow( $r,2 ) ))*100)/100;

  arc = $h*$anglep4;
  // arc = distanceBetweenPoints(0,0, convertToDecimal($p1x), convertToDecimal($p1y));
  // arc = arc + distanceBetweenPoints(convertToDecimal($p1x), convertToDecimal($p1y), convertToDecimal($p2x), convertToDecimal($p2y));
  // arc = arc + distanceBetweenPoints(convertToDecimal($p2x), convertToDecimal($p2y), convertToDecimal($p3x), convertToDecimal($p3y));
  // arc = arc + distanceBetweenPoints(convertToDecimal($p3x), convertToDecimal($p3y), convertToDecimal($p4x), convertToDecimal($p4y));

  if ($circ1 /4 === arc){
      console.log("arcos iguales");
  } else {
    console.log($p4x, $p4y);
      $nArco = $circ1/4;
      $nAngle = $nArco/$h;
      $p4y = convertToFraction(Math.sin($nAngle)*$h);
      $p4x = convertToFraction($h - Math.cos($nAngle)*$h);
    console.log($p4x, $p4y);
  }

  $('#graficaMetodoAguila .dgde').text(convertToFraction($d1) + "'', 0''");
  $('#graficaMetodoAguila .d1').text("0'', 0''");
  $('#graficaMetodoAguila .d2').text($q1x + "'', " + $q1y + "''");
  $('#graficaMetodoAguila .d3').text($q2x + "'', " + $q2y + "''");
  $('#graficaMetodoAguila .d4').text($q3x + "'', " + $q3y + "''");
  $('#graficaMetodoAguila .d5').text($p4x + "'', " + $p4y + "''");
  $('#graficaMetodoAguila .e1').text($p1x + "'', " + $p1y + "''");
  $('#graficaMetodoAguila .e2').text($p2x + "'', " + $p2y + "''");
  $('#graficaMetodoAguila .e3').text($p3x + "'', " + $p3y + "''");
  $('#graficaMetodoAguila .escalaAguila').text("Escala: 1");
  $('#metodo-aguila #circ').val(convertToFraction($circ1));
  $('#metodo-aguila #circ-2').val(convertToFraction($circ2));

  if ($escala !== 0) {
    $escala = Math.round($escala * 100)/100;
    $('#graficaMetodoAguila .escalaAguila').text("Escala: " + $escala);
  }
}


function printCircYDes() {
    setTimeout(function() {
        $pipa_print = $('#metodo-y-desigual .no-radio .first-circ select.t-pipa').val();
        $insu_print = $('#metodo-y-desigual .no-radio .first-circ select.t-insulacion').val();
        $pipa2_print = $('#metodo-y-desigual .no-radio .second-circ select.t-pipa').val();
        $insu2_print = $('#metodo-y-desigual .no-radio .second-circ select.t-insulacion').val();

        $circ1_print = convertToFraction(getCircumference($pipa_print, $insu_print));
        $circ2_print = convertToFraction(getCircumference($pipa2_print, $insu2_print));

        $('#metodo-y-desigual .result-1').text('Circunferencia: '+$circ1_print +"''");
        $('#metodo-y-desigual .result-2').text('Circunferencia: '+$circ2_print +"''");
    }, 150);
}

$('#metodo-y-desigual .opt-btn').click(function () {
    printCircYDes();
});

$('#metodo-y-desigual select').change(function() {
    printCircYDes();
});

function metodoYDesigual() {

    $('#chalecoYdesigual').removeClass('hidden');

    $('#chalecoYdesigual').addClass('d-block');

    /*
     if( $('#metodo-y-desigual #circ').hasClass('active') ) {
     $circ = convertToDecimal($('#metodo-y-desigual #circ').val());
     $circ2 = convertToDecimal($('#metodo-y-desigual #circ-2').val());
     } else {
     $circ = $('#metodo-y-desigual #circ-s').val();
     $circ2 = $('#metodo-y-desigual #circ-s-2').val();
     }*/

    if($('#metodo-y-desigual .man-btn').hasClass('active')) {
        $circ1 = seleccionInput($('#metodo-y-desigual #circ-myd1').val());
        $circ2 = seleccionInput($('#metodo-y-desigual #circ-myd2').val());
    } else {
        if($('#metodo-y-desigual .opt-btn').hasClass('active')) {
            $pipa = $('#metodo-y-desigual .no-radio .first-circ select.t-pipa').val();
            $insu = $('#metodo-y-desigual .no-radio .first-circ select.t-insulacion').val();
            $pipa2 = $('#metodo-y-desigual .no-radio .second-circ select.t-pipa').val();
            $insu2 = $('#metodo-y-desigual .no-radio .second-circ select.t-insulacion').val();
        }
        $circ1 = getCircumference($pipa, $insu);
        $circ2 = getCircumference($pipa2, $insu2);
    }

    $r = ( $circ1 / ( 2*Math.PI ) );
    $r2 = ( $circ2 / ( 2*Math.PI ) );
    $e = $circ1/2 ;
    $e1 = $e/8;

  $d8 = Math.round((
    $r*( 1 + Math.cos( degreesToRadians(22.5) ) )
    + ( ( - Math.sqrt( Math.pow( $r2, 2 ) - Math.pow( Math.sin( degreesToRadians(22.5) )*$r, 2 ) ) + $r2 )
      /Math.cos( degreesToRadians(45) ) )
  )*100)/100;

    if( !$.isNumeric($r) || !$.isNumeric($r2) ) {
        $( "#error-numeric" ).popup( "open" );
    } else if( $r >= $r2 ) {
        $( "#error-desigual" ).popup( "open" );
    } else {

      if ((document.getElementById("tLamina36YD").checked === true) && ($d8 > 36)){
        $opcionEscala.popup( "open" );
        $btn1sqr.on("click", function(){
          $escala = $d8/12;
          $nCirc1 = $circ1/$escala;
          $ncirc2 = $circ2/$escala;
          calculoMetodoYDes( $nCirc1, $ncirc2, $escala);
          $btn1sqr.off("click");
          $opcionEscala.popup( "close" );
        });

        $btn2sqr.on("click", function(){
          $escala = $d8/24;
          $nCirc1 = $circ1/$escala;
          $ncirc2 = $circ2/$escala;
          calculoMetodoYDes( $nCirc1, $ncirc2, $escala);
          $btn2sqr.off("click");
          $opcionEscala.popup( "close" );
        });
      }
      if ((document.getElementById("tLamina48YD").checked === true) && ($d8 > 48 )){
        $opcionEscala.popup( "open" );
        $btn1sqr.on("click", function(){
          $escala = $d8/12;
          $nCirc1 = $circ1/$escala;
          $ncirc2 = $circ2/$escala;
          calculoMetodoYDes( $nCirc1, $ncirc2, $escala);
          $btn1sqr.off("click");
          $opcionEscala.popup( "close" );
        });

        $btn2sqr.on("click", function(){
          $escala = $d8/24;
          $nCirc1 = $circ1/$escala;
          $ncirc2 = $circ2/$escala;
          calculoMetodoYDes( $nCirc1, $ncirc2, $escala);
          $btn2sqr.off("click");
          $opcionEscala.popup( "close" );
        });
      }

        calculoMetodoYDes($circ1, $circ2, 0);

    }
}

function calculoMetodoYDes ($circ1, $circ2, $escala){

  $r = ( $circ1 / ( 2*Math.PI ) );
  $r2 = ( $circ2 / ( 2*Math.PI ) );
  $e = $circ1/2 ;
  $e1 = $e/8;


  $d1 = 0;
  $d2 = Math.round((
    $r*( 1 - Math.cos( degreesToRadians(22.5) ) )
    + ( ( - Math.sqrt( Math.pow( $r2, 2 ) - Math.pow( Math.sin( degreesToRadians(22.5) )*$r, 2 ) ) + $r2 )
      /Math.cos( degreesToRadians(45) ) )
  )*100)/100;

  $d3 = Math.round((
    $r*( 1 - Math.sin( degreesToRadians(45) ) )
    + ( ( - Math.sqrt( Math.pow( $r2, 2 ) - Math.pow( Math.sin( degreesToRadians(45) )*$r, 2 ) ) + $r2 )
      /Math.cos( degreesToRadians(45) ) )
  )*100)/100;
  $d4 = Math.round((
    $r*( 1 - Math.sin( degreesToRadians(22.5) ) )
    + ( ( - Math.sqrt( Math.pow( $r2, 2 ) - Math.pow( Math.cos( degreesToRadians(22.5) )*$r, 2 ) ) + $r2 )
      /Math.cos( degreesToRadians(45) ) )
  )*100)/100;
  $d5 = Math.round((
    $r + ( ( - Math.sqrt( Math.pow( $r2, 2 ) - Math.pow( $r, 2) ) + $r2 )/Math.cos( degreesToRadians(45) ) )
  )*100)/100;
  $d6 = Math.round((
    $r*( 1 + Math.sin( degreesToRadians(22.5) ) )
    + ( ( - Math.sqrt( Math.pow( $r2, 2 ) - Math.pow( Math.cos( degreesToRadians(22.5) )*$r, 2 ) ) + $r2 )
      /Math.cos( degreesToRadians(45) ) )
  )*100)/100;
  $d7 = Math.round((
    $r*( 1 + Math.sin( degreesToRadians(45) ) )
    + ( ( - Math.sqrt( Math.pow( $r2, 2 ) - Math.pow( Math.sin( degreesToRadians(45) )*$r, 2 ) ) + $r2 )
      /Math.cos( degreesToRadians(45) ) )
  )*100)/100;
  $d8 = Math.round((
    $r*( 1 + Math.cos( degreesToRadians(22.5) ) )
    + ( ( - Math.sqrt( Math.pow( $r2, 2 ) - Math.pow( Math.sin( degreesToRadians(22.5) )*$r, 2 ) ) + $r2 )
      /Math.cos( degreesToRadians(45) ) )
  )*100)/100;
  $d9 =  Math.round((2*$r)*100)/100;

  $('#graficaMetodoYDesigual .d1').text(convertToFraction($d1) + "''");
  $('#graficaMetodoYDesigual .d2').text(convertToFraction($d2) + "''");
  $('#graficaMetodoYDesigual .d3').text(convertToFraction($d3) + "''");
  $('#graficaMetodoYDesigual .d4').text(convertToFraction($d4) + "''");
  $('#graficaMetodoYDesigual .d5').text(convertToFraction($d5) + "''");
  $('#graficaMetodoYDesigual .d6').text(convertToFraction($d6) + "''");
  $('#graficaMetodoYDesigual .d7').text(convertToFraction($d7) + "''");
  $('#graficaMetodoYDesigual .d8').text(convertToFraction($d8) + "''");
  $('#graficaMetodoYDesigual .d9').text(convertToFraction($d9) + "''");
  $('#graficaMetodoYDesigual .e5').text(convertToFraction($e) + "''");
  $('#graficaMetodoYDesigual .e2').text(convertToFraction($e1) + "''");
  $('#graficaMetodoYDesigual .escalaYDes').text("Escala: 1");
  $('#metodo-y-desigual #circ-myd1').val(convertToFraction($circ1));
  $('#metodo-y-desigual #circ-myd2').val(convertToFraction($circ2));
    if($escala !== 0) {
      $escala = Math.round($escala * 100)/100;
      $('#graficaMetodoYDesigual .escalaYDes').text("Escala: " + $escala);
    }
}

/*
 Stove Pipe 90
 */

function printCircSP90() {
    setTimeout(function() {
        $pipa_print = $('#stove-90 .no-radio .first-circ select.t-pipa').val();
        $insu_print = $('#stove-90 .no-radio .first-circ select.t-insulacion').val();

        $circ1_print = convertToFraction(getCircumference($pipa_print, $insu_print));

        $('#stove-90 .result-1').text('Circunferencia: '+$circ1_print +"''");
    }, 150);
}

$('#stove-90 .opt-btn').click(function () {
    printCircSP90();
});

$('#stove-90 select').change(function() {
    printCircSP90();
});

function metodoSP90() {

    if($('#stove-90 .man-btn').hasClass('active')) {
        $circ = seleccionInput($('#stove-90 #circ-S90').val());
    } else {
        if($('#stove-90 .opt-btn').hasClass('active')) {
            $pipa = $('#stove-90 .no-radio select.t-pipa').val();
            $insu = $('#stove-90 .no-radio select.t-insulacion').val();
        }
        $circ = getCircumference($pipa, $insu);
    }

    $r = ( $circ / ( 2*Math.PI ) );
    $d = 2 * $r + 0.25;
    if( !$.isNumeric($r) || $circ === '' ) {
        $( "#error-numeric" ).popup( "open" );
    } else {

      if (($("#tLamina36SP90").is(':checked')) && ($d > 36)){
          $opcionEscala.popup( "open" );
        $btn1sqr.on("click", function(){
          $escala = $d/12;
          $nCirc = $circ/$escala;
          calculoMetodoSP90( $nCirc, $escala);
          $btn1sqr.off("click");
          $opcionEscala.popup( "close" );
        });

        $btn2sqr.on("click", function(){
          $escala = $d/24;
          $nCirc = $circ/$escala;
          calculoMetodoSP90( $nCirc, $escala);
          $btn2sqr.off("click");
          $opcionEscala.popup( "close" );
        });

      }

      if (($("#tLamina48SP90").is(':checked')) && ($d > 48 )){
          $opcionEscala.popup( "open" );
        $btn1sqr.on("click", function(){
          $escala = $d/12;
          $nCirc = $circ/$escala;
          calculoMetodoSP90( $nCirc, $escala);
          $btn1sqr.off("click");
          $opcionEscala.popup( "close" );
        });

        $btn2sqr.on("click", function(){
          $escala = $d/24;
          $nCirc = $circ/$escala;
          calculoMetodoSP90( $nCirc, $escala);
          $btn2sqr.off("click");
          $opcionEscala.popup( "close" );
        });

      }

        calculoMetodoSP90($circ, 0);

    }
}

function calculoMetodoSP90($circ, $escala) {

  $r = ( $circ / ( 2*Math.PI ) );
  var results = [],
    tangent = Math.tan(Math.atan(1 + 1/(8 * $r)));
  for(var i = 0; i < 9; i++) {
    var longSide = $r + $r * Math.cos(degreesToRadians(180 - 22.5*i)),
      result = (longSide * tangent + 1);
    results.push(result);
  }
  results.push(2 * $r + 0.25);
  results.push(2 * $r);

  for (var i = 0; i < results.length; i++) {
    $('#graficaSP90 .d' + (i + 1)).
      text((convertToFraction(results[i])) + "''");
  }
  $('#graficaSP90 .d11').text((convertToFraction($circ / 2)) + "''");
  $('#graficaSP90 .d12').text((convertToFraction($circ / 16)) + "''");
  $('#graficaSP90 .escalaSP90').text("Escala: 1");
  $('#stove-90 #circ-S90').val(convertToFraction($circ));

  if ($escala !== 0) {
    $escala = Math.round($escala * 100)/100;
    $('#graficaSP90 .escalaSP90').text("Escala: " + $escala);
  }
}

/*
 Stove Pipe 45
 */

function printCircSP45() {
    setTimeout(function() {
        $pipa_print = $('#stove-45 .no-radio .first-circ select.t-pipa').val();
        $insu_print = $('#stove-45 .no-radio .first-circ select.t-insulacion').val();

        $circ1_print = convertToFraction(getCircumference($pipa_print, $insu_print));

        $('#stove-45 .result-1').text('Circunferencia: '+$circ1_print +"''");
    }, 150);
}

$('#stove-45 .opt-btn').click(function () {
    printCircSP45();
});

$('#stove-45 select').change(function() {
    printCircSP45();
});

function metodoSP45() {

    if($('#stove-45 .man-btn').hasClass('active')) {
        $circ = seleccionInput($('#stove-45 #circ-S45').val());
    } else {
        if($('#stove-45 .opt-btn').hasClass('active')) {
            $pipa = $('#stove-45 .no-radio select.t-pipa').val();
            $insu = $('#stove-45 .no-radio select.t-insulacion').val();
        }
        $circ = getCircumference($pipa, $insu);
    }

    $r = ( $circ / ( 2*Math.PI ) );
    $d = $r + 0.25;
    if( !$.isNumeric($r) || $circ === '' ) {
        $( "#error-numeric" ).popup( "open" );
    } else {
      if (($("#tLamina36SP45").is(':checked')) && ($d > 36)){
        $opcionEscala.popup( "open" );
        $btn1sqr.on("click", function(){
          $escala = $d/12;
          $nCirc = $circ/$escala;
          calculoMetodoSP45( $nCirc, $escala);
          $btn1sqr.off("click");
          $opcionEscala.popup( "close" );
        });

        $btn2sqr.on("click", function(){
          $escala = $d/24;
          $nCirc = $circ/$escala;
          calculoMetodoSP45( $nCirc, $escala);
          $btn2sqr.off("click");
          $opcionEscala.popup( "close" );
        });

      }

      if (($("#tLamina48SP45").is(':checked')) && ($d > 48 )){
        $opcionEscala.popup( "open" );
        $btn1sqr.on("click", function(){
          $escala = $d/12;
          $nCirc = $circ/$escala;
          calculoMetodoSP45( $nCirc, $escala);
          $btn1sqr.off("click");
          $opcionEscala.popup( "close" );
        });

        $btn2sqr.on("click", function(){
          $escala = $d/24;
          $nCirc = $circ/$escala;
          calculoMetodoSP45( $nCirc, $escala);
          $btn2sqr.off("click");
          $opcionEscala.popup( "close" );
        });

      }

        calculoMetodoSP45($circ,0)
    }
}

function calculoMetodoSP45($circ, $escala) {

  $r = ( $circ / ( 2*Math.PI ) );

  var results = [],
    tangent = Math.tan(Math.atan(($r + 1/4)/(2 * $r)));
  for(var i = 0; i < 9; i++) {
    var longSide = $r + $r * Math.cos(degreesToRadians(180 - 22.5*i)),
      result = (longSide * tangent + 1);
    results.push(convertToFraction(result));
  }
  results.push($r + 0.25);
  results.push($circ / 2);

  for (var i = 0; i < results.length; i++) {
    $('#graficaSP45 .d' + (i + 1)).text(convertToFraction(results[i]) + "''");
  }
  $('#graficaSP45 .d12').text((convertToFraction($circ / 16)) + "''");
  $('#graficaSP45 .escalaSP45').text("Escala: 1");
  $('#stove-45 #circ-S45').val(convertToFraction($circ));

  if ($escala !== 0) {
    $escala = Math.round($escala * 100)/100;
    $('#graficaSP45 .escalaSP45').text("Escala: " + $escala);
  }

}

/*
 Trompa de Marrano
 */

function printCircMarrano() {
    setTimeout(function() {
        $pipa_print = $('#trompa-marrano .no-radio .first-circ select.t-pipa').val();
        $insu_print = $('#trompa-marrano .no-radio .first-circ select.t-insulacion').val();
        $pipa2_print = $('#trompa-marrano .no-radio .second-circ select.t-pipa').val();
        $insu2_print = $('#trompa-marrano .no-radio .second-circ select.t-insulacion').val();

        $circ1_print = convertToFraction(getCircumference($pipa_print, $insu_print));
        $circ2_print = convertToFraction(getCircumference($pipa2_print, $insu2_print));

        $('#trompa-marrano .result-1').text(('Circunferencia: '+$circ1_print)+"''");
        $('#trompa-marrano .result-2').text(('Circunferencia: '+$circ2_print)+"''");
    }, 150);
}

$('#trompa-marrano .opt-btn').click(function () {
    printCircMarrano();
});

$('#trompa-marrano select').change(function() {
    printCircMarrano();
});


function metodoMarrano() {
    if($('#trompa-marrano .man-btn').hasClass('active')) {
        $circ1 = seleccionInput($('#trompa-marrano #circ').val());
        $circ2 = seleccionInput($('#trompa-marrano #circ-2').val());
    } else {
        if($('#trompa-marrano .opt-btn').hasClass('active')) {
            $pipa = $('#trompa-marrano .no-radio .first-circ select.t-pipa').val();
            $insu = $('#trompa-marrano .no-radio .first-circ select.t-insulacion').val();
            $pipa2 = $('#trompa-marrano .no-radio .second-circ select.t-pipa').val();
            $insu2 = $('#trompa-marrano .no-radio .second-circ select.t-insulacion').val();
        }
        $circ1 = getCircumference($pipa, $insu);
        $circ2 = getCircumference($pipa2, $insu2);
    }

    $length = Number(seleccionInput($('#marrano-length').val()));

    $r = ( $circ1 / ( 2*Math.PI ) );
    $r2 = ( $circ2 / ( 2*Math.PI ) );


    if( !$.isNumeric($r) || !$.isNumeric($r2) ) {
        $( "#error-numeric" ).popup( "open" );
    } else if( $r < $r2 ) {
        $( "#error-marrano" ).popup( "open" );
    } else {

        $results = calculoMetodoMarrano($circ1, $circ2, $length);

        $p = $results[6][1];
        $escala = 0;

      if (($("#tLamina36Marrano").is(':checked')) && ($p > 36)){
        $opcionEscala.popup( "open" );
        $btn1sqr.on("click", function(){
          $escala = $p/12;
          $nCirc1 = $circ1/$escala;
          $nCirc2 = $circ2/$escala;
          $nLength = $length/$escala;
          $espacio = convertToFraction( ( $nCirc1 / 12 ) );
          $results = calculoMetodoMarrano($nCirc1, $nCirc2, $nLength);
          $('#trompa-marrano #circ').val(convertToFraction($nCirc1));
          $('#trompa-marrano #circ-2').val(convertToFraction($nCirc2));
          $('#marrano-length').val(convertToFraction($nLength));
          printMetodoMarrano($results, $espacio, $escala);
          $btn1sqr.off("click");
          $opcionEscala.popup( "close" );
        });

        $btn2sqr.on("click", function(){
          $escala = $p/24;
          $nCirc1 = $circ1/$escala;
          $nCirc2 = $circ2/$escala;
          $nLength = $length/$escala;
          $espacio = convertToFraction( ( $nCirc1 / 12 ) );
          $results = calculoMetodoMarrano($nCirc1, $nCirc2, $nLength);
          $('#trompa-marrano #circ').val(convertToFraction($nCirc1));
          $('#trompa-marrano #circ-2').val(convertToFraction($nCirc2));
          $('#marrano-length').val(convertToFraction($nLength));
          printMetodoMarrano($results, $espacio, $escala);
          $btn2sqr.off("click");
          $opcionEscala.popup( "close" );
        });

      }else if (($("#tLamina48Marrano").is(':checked')) && ($p > 48 )){
        $opcionEscala.popup( "open" );
        $btn1sqr.on("click", function(){
          $escala = $p/12;
          $nCirc1 = $circ1/$escala;
          $nCirc2 = $circ2/$escala;
          $nLength = $length/$escala;
          $espacio = convertToFraction( ( $nCirc1 / 12 ) );
          $results = calculoMetodoMarrano($nCirc1, $nCirc2, $nLength);
          $('#trompa-marrano #circ').val(convertToFraction($nCirc1));
          $('#trompa-marrano #circ-2').val(convertToFraction($nCirc2));
          $('#marrano-length').val(convertToFraction($nLength));
          printMetodoMarrano($results, $espacio, $escala);
          $btn1sqr.off("click");
          $opcionEscala.popup( "close" );
        });

        $btn2sqr.on("click", function(){
          $escala = $p/24;
          $nCirc1 = $circ1/$escala;
          $nCirc2 = $circ2/$escala;
          $nLength = $length/$escala;
          $espacio = convertToFraction( ( $nCirc1 / 12 ) );
          $results = calculoMetodoMarrano($nCirc1, $nCirc2, $nLength);
          $('#trompa-marrano #circ').val(convertToFraction($nCirc1));
          $('#trompa-marrano #circ-2').val(convertToFraction($nCirc2));
          $('#marrano-length').val(convertToFraction($nLength));
          printMetodoMarrano($results, $espacio, $escala);
          $btn2sqr.off("click");
          $opcionEscala.popup( "close" );
        });

      }

        $espacio = convertToFraction( ( $circ1 / 12 ) );
        printMetodoMarrano($results, $espacio, 0);


    }
}

function calculoMetodoMarrano($circ1, $circ2, $length){
  $r = ( $circ1 / ( 2*Math.PI ) );
  $r2 = ( $circ2 / ( 2*Math.PI ) );

  $espacio = convertToFraction( ( $circ1 / 12 ) );
  $angle = Math.atan((2*$r - 2*$r2)/$length);
  $baseMenor = 2*$r2/Math.tan($angle);
  $baseMayor = Number($baseMenor + $length);

  $shorts = [];
  $longs = [];

  for(var i = 0; i < 7; i++) {
    $short = ( Math.pow($r2 + $r2*Math.sin(degreesToRadians(-90 + 30*i)), 2) + Math.pow($baseMenor, 2));
    $long = (Math.pow($r + $r*Math.sin(degreesToRadians(-90 + 30*i)), 2) + Math.pow($baseMayor, 2));
    $shorts.push((Math.sqrt($short)));
    $longs.push((Math.sqrt($long)));
  }

  //convert to decimal the short and long lengths achieved in the last for cycle in
  //order to solve left- side points
  //(x1 and y1 are on the left lower corner, going up)
  $ax1=Number($shorts[0]);
  $Ax1=Number($longs[0]);

  $ax2=Number($shorts[1]);
  $Ax2=Number($longs[1]);

  $ax3=Number($shorts[2]);
  $Ax3=Number($longs[2]);

  $ax4=Number($shorts[3]);
  $Ax4=Number($longs[3]);

  $ax5=Number($shorts[4]);
  $Ax5=Number($longs[4]);

  $ax6=Number($shorts[5]);
  $Ax6=($longs[5]);

  $ax7=Number($shorts[6]);
  $Ax7=Number($longs[6]);

  $espacioDecimal = Number(convertToDecimal($espacio));

  //calulate x2 and y2
  $w= Number(($Ax1)-($ax1));

  $x2= Number(((-(Math.pow($ax1,3))-((Math.pow($ax1,2))*$w))- ($ax1*Math.pow($espacioDecimal,2))+ ($ax1*Math.pow($Ax1,2))+
    ($ax1*Math.pow($w,2))- ((Math.pow($espacioDecimal,2))*$w)+ (Math.pow($Ax1,2)*$w)+ (Math.pow($w,3)))/
    (2*((Math.pow($ax1,2))+2*$ax1*$w+Math.pow($w,2))));


  $y2= Number(Math.sqrt(Math.pow($espacioDecimal,2)-Math.pow($x2-$length,2)));


  //calculation of x3 and y3
  //below: calculastion of the inside part of the square root

  //
  // function getXRight(ax,y,Ax,x){
  //     $w = x;
  //     $sqrt= Number(- (Math.pow(ax,4)* Math.pow(y,2))
  //         - (4*Math.pow(ax,3)* Math.pow(y,2)*$w)
  //         + (2*Math.pow(ax,2)* Math.pow($espacioDecimal,2)* Math.pow(y,2))
  //         + (2*Math.pow(ax,2)* Math.pow(Ax,2) * Math.pow(y,2))
  //         - (2*Math.pow(ax,2)* Math.pow(y,4))
  //         - (6*Math.pow(ax,2)* Math.pow(y,2)* Math.pow($w,2))
  //         + (4*ax*Math.pow($espacioDecimal,2)* Math.pow(y,2)* $w)
  //         + (4*ax*Math.pow(Ax,2)* Math.pow(y,2)* $w)
  //         - (4*ax*Math.pow(y,4)* $w)
  //         - (4*ax* Math.pow(y,2)* Math.pow($w,3))
  //         - (Math.pow($espacioDecimal,4)* Math.pow(y,2))
  //         + (2*Math.pow($espacioDecimal,2)* Math.pow(Ax,2)* Math.pow(y,2))
  //         + (2*Math.pow($espacioDecimal,2)* Math.pow(y,4))
  //         + (2*Math.pow($espacioDecimal,2)* Math.pow(y,2)* Math.pow($w,2))
  //         - (Math.pow(Ax,4)* Math.pow(y,2))
  //         + (2*Math.pow(Ax,2)* Math.pow(y,4))
  //         + (2*Math.pow(Ax,2)* Math.pow(y,2)* Math.pow($w,2))
  //         - (Math.pow(y,6))
  //         - (2*Math.pow(y,4)* Math.pow($w,2))
  //         - (Math.pow(y,2)* Math.pow($w,4)));
  //
  //
  //
  //
  //     $xN=Number(((-(Math.pow(ax,3))-((Math.pow(ax,2))*$w))-(Math.sqrt($sqrt))
  //         - (ax*Math.pow($espacioDecimal,2))
  //         + (ax*Math.pow(Ax,2))
  //         - (ax*Math.pow(y,2))
  //         + (ax*Math.pow($w,2))
  //         - ((Math.pow($espacioDecimal,2))*$w)
  //         + (Math.pow(Ax,2)*$w)
  //         + (Math.pow(y,2)*$w)
  //         + (Math.pow($w,3)))
  //         / (2*((Math.pow(ax,2))+2*ax*$w+Math.pow(y,2)+Math.pow($w,2))));
  //
  //     //console.log($w, $xN, $sqrt)
  //     return $xN;
  // }
  //

  // function getYRight(ax,y,Ax,presentX,pastX){
  //
  //     $yN=Math.sqrt(Math.pow($espacioDecimal,2)-Math.pow(presentX-pastX,2))+y;
  //
  //     return $yN;
  // }

  function getRightY(a,b,d,e){

    $root = Math.abs(- Math.pow(a,6) - 2* Math.pow(a,4)* Math.pow(b,2) + 2* Math.pow(a,4)* Math.pow(d,2)
      + 2* Math.pow(e,2)* Math.pow(a,4) - Math.pow(a,2)* Math.pow(b,4) + 2* Math.pow(a,2)* Math.pow(b,2)* Math.pow(d,2)
      + 2* Math.pow(e,2)* Math.pow(a,2)*  Math.pow(b,2) - Math.pow(a,2)* Math.pow(d,4) + 2* Math.pow(e,2)* Math.pow(a,2)* Math.pow(d,2)
      - Math.pow(e,4)* Math.pow(a,2));

    $y = (Math.pow(a,2)* b + Math.sqrt($root) + Math.pow(b,3) - b* Math.pow(d,2) + Math.pow(e,2)* b)/(2* (Math.pow(a,2) + Math.pow(b,2)));

    return $y
  }

  function getRightX(r,y,x){

    $x = (Math.sqrt(Math.pow(r,2)-Math.pow(y,2)))-x;

    return $x;
  }

  // $x3 = Number(getXRight($ax2,$y2,$Ax2,$x2));
  //
  // $y3= Number(getYRight($ax2,$y2,$Ax2,$x3,$x2));
  //
  //
  // $x4 = Number(getXRight($ax3,$y3,$Ax3,$x3));
  //
  // $y4= Number(getYRight($ax3,$y3,$Ax3,$x4,$x3));
  //
  //
  //
  // $x5 = Number(getXRight($ax4,$y4,$Ax4,$x4));
  //
  // $y5= Number(getYRight($ax4,$y4,$Ax4,$x5,$x4));
  //
  //
  // $x6 = Number(getXRight($ax5,$y5,$Ax5,$x5));
  //
  // $y6 = Number(getYRight($ax5,$y5,$Ax5,$x6,$x5));
  //
  //
  // $x7 = Number(getXRight($ax6,$y6,$Ax6,$x6));
  //
  // $y7 = Number(getYRight($ax6,$y6,$Ax6,$x7,$x6));

  $y2a = getRightY($Ax1, 0, $espacioDecimal, $Ax2);
  $x2a = getRightX($Ax2, $y2a, $ax2);

  $y3a = getRightY(($x2a+$ax2), $y2a, $espacioDecimal, $Ax3);
  $x3a = getRightX($Ax3, $y3a, $ax3);

  $y4a = getRightY(($x3a+$ax3), $y3a, $espacioDecimal, $Ax4);
  $x4a = getRightX($Ax4, $y4a, $ax4);

  $y5a = getRightY(($x4a+$ax4), $y4a, $espacioDecimal, $Ax5);
  $x5a = getRightX($Ax5, $y5a, $ax5);

  $y6a = getRightY(($x5a+$ax5), $y5a, $espacioDecimal, $Ax6);
  $x6a = getRightX($Ax6, $y6a, $ax6);

  $y7a = getRightY(($x6a+$ax6), $y6a, $espacioDecimal, $Ax7);
  $x7a = getRightX($Ax7, $y7a, $ax7);

  // console.log(convertToFraction($x7a), convertToFraction($y7a));
  // console.log(convertToFraction($x6a), convertToFraction($y6a));
  // console.log(convertToFraction($x5a), convertToFraction($y5a));
  // console.log(convertToFraction($x4a), convertToFraction($y4a));
  // console.log(convertToFraction($x3a), convertToFraction($y3a));
  // console.log(convertToFraction($x2a), convertToFraction($y2a));

  $angle1b = Math.atan(($y2a/($x2a+$ax2)));
  $x2b = Math.cos($angle1b)*$ax2 - $ax2;
  $y2b = Math.sin($angle1b)*$ax2;

  $angle2b = Math.atan(($y3a/($x3a+$ax3)));
  $x3b = Math.cos($angle2b)*$ax3 - $ax3;
  $y3b = Math.sin($angle2b)*$ax3;

  $angle3b = Math.atan(($y4a/($x4a+$ax4)));
  $x4b = Math.cos($angle3b)*$ax4 - $ax4;
  $y4b = Math.sin($angle3b)*$ax4;

  $angle4b = Math.atan(($y5a/($x5a+$ax5)));
  $x5b = Math.cos($angle4b)*$ax5 - $ax5;
  $y5b = Math.sin($angle4b)*$ax5;

  $angle5b = Math.atan(($y6a/($x6a+$ax6)));
  $x6b = Math.cos($angle5b)*$ax6 - $ax6;
  $y6b = Math.sin($angle5b)*$ax6;

  $angle6b = Math.atan(($y7a/($x7a+$ax7)));
  $x7b = Math.cos($angle6b)*$ax7 - $ax7;
  $y7b = Math.sin($angle6b)*$ax7;

  //arc1 = 2*($angle6b*$Ax7);
  arc1 = distanceBetweenPoints($length, 0, $x2a, $y2a);
  console.log($espacioDecimal, arc1);
  arc2 = distanceBetweenPoints($x2a, $y2a, $x3a, $y3a);
  console.log($espacioDecimal, arc2);
  arc3 = distanceBetweenPoints($x3a, $y3a, $x4a, $y4a);
  console.log($espacioDecimal, arc3);
  arc4 = distanceBetweenPoints($x4a, $y4a, $x5a, $y5a);
  console.log($espacioDecimal, arc4);
  arc5 = distanceBetweenPoints($x5a, $y5a, $x6a, $y6a);
  console.log($espacioDecimal, arc5);
  arc6 = distanceBetweenPoints($x6a, $y6a, $x7a, $y7a);
  console.log($espacioDecimal, arc6);

  arc1 = arc1 + arc2 + arc3 + arc4 + arc5 + arc6;

  //arc2 = 2*($angle6b*$ax7);
  arc2 = distanceBetweenPoints(0, 0, $x2b, $y2b);
  arc2 = arc2 + distanceBetweenPoints($x2b, $y2b, $x3b, $y3b);
  arc2 = arc2 + distanceBetweenPoints($x3b, $y3b, $x4b, $y4b);
  arc2 = arc2 + distanceBetweenPoints($x4b, $y4b, $x5b, $y5b);
  arc2 = arc2 + distanceBetweenPoints($x5b, $y5b, $x6b, $y6b);
  arc2 = arc2 + distanceBetweenPoints($x6b, $y6b, $x7b, $y7b);

  if($circ1/2 === arc1){
      console.log("arco mayor correcto");
  } else {
      console.log(arc1-($circ1/2));
  }

  if($circ2/2 === arc2){
    console.log("arco menor correcto");
  } else {
    console.log(arc2-($circ2/2));
  }

  //calculation of points 8-13 (left side)

  //get the necessary angles before calculating points
  // function getAngles(y,Ax){
  //     $angleARads = Math.asin(y/Ax);
  //     $angleADeg = $angleARads*(180/Math.PI);
  //     $angleASimilar = 180-$angleADeg;
  //     $angleASimilarRad = $angleASimilar*(Math.PI/180);
  //
  //     return $angleASimilarRad;
  // }
  //
  // function getAnglesX(y,Ax) {
  //     $angleARads = Math.asin(y/Ax);
  //
  //
  //     return $angleARads;
  // }
  //
  //
  //
  // //get sides measures with trigonometric functions
  // function getY(angle,ax) {
  //     $y = (Math.sin(angle)) * ax;
  //
  //     return $y;
  // }
  //
  // function getX(angle,ax) {
  //     $x = (Math.cos(angle)) * ax - $ax1 ;
  //
  //     return $x;
  // }

  //
  // $angle8 = getAngles($y7,$Ax7);
  // $y8 = Number(getY($angle8,$ax7));
  // $angle8x = getAnglesX($y8,$ax7);
  // $x8 = Number(getX($angle8x,$ax7));
  //
  // $angle9 = getAngles($y6,$Ax6);
  // $y9 = Number(getY($angle9,$ax6));
  // $angle9x = getAnglesX($y9,$ax6);
  // $x9 = Number(getX($angle9x,$ax6));
  //
  //
  // $angle10 = getAngles($y5,$Ax5);
  // $y10 = Number(getY($angle10,$ax5));
  // $angle10x = getAnglesX($y10,$ax5);
  // $x10 = Number(getX($angle10x,$ax5));
  //
  //
  // $angle11 = getAngles($y4,$Ax4);
  // $y11 = Number(getY($angle11,$ax4));
  // $angle11x = getAnglesX($y11,$ax4);
  // $x11 = Number(getX($angle11x,$ax4));
  //
  // $angle12 = getAngles($y3,$Ax3);
  // $y12 = Number(getY($angle12,$ax3));
  // $angle12x = getAnglesX($y12,$ax3);
  // $x12 = Number(getX($angle12x,$ax3));
  //
  //
  // $angle13 = getAngles($y2,$Ax2);
  // $y13 = Number(getY($angle13,$ax2));
  // $angle13x = getAnglesX($y13,$ax2);
  // $x13 = Number(getX($angle13x,$ax2));
  $results = [];
  $results.push([$length, 0], [$x2a, $y2a], [$x3a, $y3a], [$x4a, $y4a], [$x5a, $y5a], [$x6a, $y6a], [$x7a, $y7a], [$x7b, $y7b], [$x6b, $y6b], [$x5b, $y5b], [$x4b, $y4b], [$x3b, $y3b], [$x2b, $y2b]);
  return $results
}

function printMetodoMarrano($results, $espacio, $escala){
  for (var i = 0; i < $results.length; i++) {
    $results[i] = [convertToFraction(Math.round($results[i][0] * 1000) / 1000), convertToFraction(Math.round($results[i][1] * 1000) / 1000)];
    $('#graficaMetodoMarrano .p' + (i + 1)).text(($results[i]) + "''");
  }
  $('#graficaMetodoMarrano .d').text("Espacios: " + $espacio + "''");
  $('#graficaMetodoMarrano .origen').text("0,0");
  $('#graficaMetodoMarrano .escalaMarrano').text("Escala: 1");
  if ($escala !== 0) {
      $escala = Math.round($escala * 100)/100;
      $('#graficaMetodoMarrano .escalaMarrano').text("Escala: " + $escala);
  }
}


function printCircRectanguloARedondo() {
    setTimeout(function() {
        $pipa_print = $('#rectangulo-redondo .no-radio .first-circ select.t-pipa').val();
        $insu_print = $('#rectangulo-redondo .no-radio .first-circ select.t-insulacion').val();

        $circ1_print = convertToFraction(getCircumference($pipa_print, $insu_print));

        $('#rectangulo-redondo .result-1').text(('Circunferencia: '+$circ1_print)+"''");
        $('#rectangulo-redondo .result-2').text(('Circunferencia: '+$circ2_print)+"''");
    }, 150);
}

$('#rectangulo-redondo .opt-btn').click(function () {
    printCircRectanguloARedondo();
});

$('#rectangulo-redondo select').change(function() {
    printCircRectanguloARedondo();
});


/* ------------------------
 Rectangulo a Redondo
 ----------------------------*/

function metodoRectanguloARedondo() {
    if($('#rectangulo-redondo .man-btn').hasClass('active')) {
        $circ = seleccionInput($('#rectangulo-redondo #circ-RRE').val());
    } else {
        if($('#rectangulo-redondo .opt-btn').hasClass('active')) {
            $pipa = $('#rectangulo-redondo .no-radio .first-circ select.t-pipa').val();
            $insu = $('#rectangulo-redondo .no-radio .first-circ select.t-insulacion').val();
        }
        $circ = getCircumference($pipa, $insu);
    }

    $base = seleccionInput($('#rectangulo-redondo-base').val());
    $ancho = seleccionInput($('#rectangulo-redondo-ancho').val());
    $altura = seleccionInput($('#rectangulo-redondo-altura').val());

    $r = ( $circ / ( 2*Math.PI ) );

    if( !$.isNumeric($r)) {
        $( "#error-numeric" ).popup( "open" );
    }  else  if($ancho > $base) {
        $( "#error-rectangulo-redondo" ).popup( "open" );
    } else {
//calculos
        $results = calculoRectanguloaRedondo($circ, $base, $ancho, $altura);

        $p = Math.abs($results[7][1]);
        $escala = 0;
//escala
      if (($("#tLamina36Rectangulo-Redondo").is(':checked')) && ($p > 36)){
        $opcionEscala.popup( "open" );
        $btn1sqr.on("click", function(){
          $escala = $p/12;
          $nCirc = $circ/$escala;
          $nBase = $base/$escala;
          $nAncho = $ancho/$escala;
          $nAltura = $altura/$escala;
          $results = calculoRectanguloaRedondo( $nCirc, $nBase, $nAncho, $nAltura);
          $('#rectangulo-redondo #circ-RRE').val(convertToFraction($nCirc));
          $('#rectangulo-redondo-base').val(convertToFraction($nBase));
          $('#rectangulo-redondo-ancho').val(convertToFraction($nAncho));
          $('#rectangulo-redondo-altura').val(convertToFraction($nAltura));
          printRectanguloaRedondo($results, $escala);
          $btn1sqr.off("click");
          $opcionEscala.popup( "close" );
        });

        $btn2sqr.on("click", function(){
          $escala = $p/24;
          $nCirc = $circ/$escala;
          $nBase = $base/$escala;
          $nAncho = $ancho/$escala;
          $nAltura = $altura/$escala;
          $results = calculoRectanguloaRedondo( $nCirc, $nBase, $nAncho, $nAltura);
          $('#rectangulo-redondo #circ-RRE').val(convertToFraction($nCirc));
          $('#rectangulo-redondo-base').val(convertToFraction($nBase));
          $('#rectangulo-redondo-ancho').val(convertToFraction($nAncho));
          $('#rectangulo-redondo-altura').val(convertToFraction($nAltura));
          printRectanguloaRedondo($results, $escala);
          $btn2sqr.off("click");
          $opcionEscala.popup( "close" );
        });

      }else if (($("#tLamina48Rectangulo-Redondo").is(':checked')) && ($p > 48 )){
        $opcionEscala.popup( "open" );
        $btn1sqr.on("click", function(){
          $escala = $p/12;
          $nCirc = $circ/$escala;
          $nBase = $base/$escala;
          $nAncho = $ancho/$escala;
          $nAltura = $altura/$escala;
          $results = calculoRectanguloaRedondo( $nCirc, $nBase, $nAncho, $nAltura);
          $('#rectangulo-redondo #circ-RRE').val(convertToFraction($nCirc));
          $('#rectangulo-redondo-base').val(convertToFraction($nBase));
          $('#rectangulo-redondo-ancho').val(convertToFraction($nAncho));
          $('#rectangulo-redondo-altura').val(convertToFraction($nAltura));
          printRectanguloaRedondo($results, $escala);
          $btn1sqr.off("click");
          $opcionEscala.popup( "close" );
        });

        $btn2sqr.on("click", function(){
          $escala = $p/24;
          $nCirc = $circ/$escala;
          $nBase = $base/$escala;
          $nAncho = $ancho/$escala;
          $nAltura = $altura/$escala;
          $results = calculoRectanguloaRedondo( $nCirc, $nBase, $nAncho, $nAltura);
          $('#rectangulo-redondo #circ-RRE').val(convertToFraction($nCirc));
          $('#rectangulo-redondo-base').val(convertToFraction($nBase));
          $('#rectangulo-redondo-ancho').val(convertToFraction($nAncho));
          $('#rectangulo-redondo-altura').val(convertToFraction($nAltura));
          printRectanguloaRedondo($results, $escala);
          $btn2sqr.off("click");
          $opcionEscala.popup( "close" );
        });

      }
        printRectanguloaRedondo($results, 0);

    }
}

function calculoRectanguloaRedondo($circ, $base, $ancho, $altura){

  $r = ( $circ / ( 2*Math.PI ) );

  $initialPoints = [];
  $results = [];

  $c16 = ($circ / 16);
  $pa = [0, -$altura];
  $short = $ancho/2 - $r;
  $long = $base/2 - $r;

  for(var i = 0; i < 5; i++) {
    $left = $base/2 - $r * Math.cos(degreesToRadians(22.5*i));
    $right = $ancho/2 - $r * Math.sin(degreesToRadians(22.5*i));
    $initial = Math.sqrt(Math.pow($left, 2) + Math.pow($right, 2));
    $initialPoints.push($initial);
  }

  $results.push([$initialPoints[0], 0]);

  $P2 = circleIntersect($initialPoints[0], 0, $c16, $pa[0], $pa[1], distanceBetweenPoints($pa[0], $pa[1], $initialPoints[1], 0));

  $P3 = circleIntersect($P2[2], $P2[3], $c16, $pa[0], $pa[1], distanceBetweenPoints($pa[0], $pa[1], $initialPoints[2], 0));

  $P4 = circleIntersect($P3[2], $P3[3], $c16, $pa[0], $pa[1], distanceBetweenPoints($pa[0], $pa[1], $initialPoints[3], 0));

  $P5 = circleIntersect($P4[2], $P4[3], $c16, $pa[0], $pa[1], distanceBetweenPoints($pa[0], $pa[1], $initialPoints[4], 0));

  $P6 = circleIntersect($pa[0], $pa[1], $ancho/2, $initialPoints[0], 0, distanceBetweenPoints($pa[0], $pa[1], $long, 0));

  $P7 = $pa;

  $P8 = circleIntersect($pa[0], $pa[1], $base/2, $P5[2], $P5[3], distanceBetweenPoints($pa[0], $pa[1], $short, 0));

  arc = distanceBetweenPoints($initialPoints[0], 0, $P2[2], $P2[3]);
  arc = arc + distanceBetweenPoints($P2[2], $P2[3], $P3[2], $P3[3]);
  arc = arc + distanceBetweenPoints($P3[2], $P3[3], $P4[2], $P4[3]);
  arc = arc + distanceBetweenPoints($P4[2], $P4[3], $P5[2], $P5[3]);

  if (($circ/4)=== arc){
      console.log("Arco correcto");
  }else {
      console.log($circ/4, arc);
  }

  $results.push([$P2[2], $P2[3]], [$P3[2], $P3[3]], [$P4[2], $P4[3]], [$P5[2], $P5[3]], [$P6[2], $P6[3]], $P7, [$P8[0], $P8[1]]);

  return $results
}

function printRectanguloaRedondo($results, $escala){
  for (var i = 0; i < $results.length; i++) {
    $results[i] = [convertToFraction(Math.round($results[i][0]*1000)/1000), convertToFraction(Math.round($results[i][1]*1000)/1000)];
    $('#graficaMetodoRectanguloARedondo .d' + (i + 1)).text(($results[i]) + "''");
  }
  $('#graficaMetodoRectanguloARedondo .escalaRectanguloRedondo').text("Escala: 1");
  if ($escala !== 0) {
    $escala = Math.round($escala * 100)/100;
    $('#graficaMetodoRectanguloARedondo .escalaRectanguloRedondo').text("Escala: " + $escala);
  }
}

/*
 Redondo a Rectangulo
 */

function printCircRedondoARectangulo() {
    setTimeout(function() {
        $pipa_print = $('#redondo-rectangulo .no-radio .first-circ select.t-pipa').val();
        $insu_print = $('#redondo-rectangulo .no-radio .first-circ select.t-insulacion').val();

        $circ1_print = convertToFraction(getCircumference($pipa_print, $insu_print));

        $('#redondo-rectangulo .result-1').text(('Circunferencia: '+$circ1_print)+"''");
        $('#redondo-rectangulo .result-2').text(('Circunferencia: '+$circ2_print)+"''");
    }, 150);
}

$('#redondo-rectangulo .opt-btn').click(function () {
    printCircRedondoARectangulo();
});

$('#redondo-rectangulo select').change(function() {
    printCircRedondoARectangulo();
});







/* ------------------------
 Redondo a Rectangulo
 ----------------------------*/



function metodoRedondoARectangulo() {
    if($('#redondo-rectangulo .man-btn').hasClass('active')) {
        //$circ = convertToDecimal($('#redondo-rectangulo #circ-RR').val());
        $circ = seleccionInput($('#redondo-rectangulo #circ-RR').val());
    } else {
        if($('#redondo-rectangulo .opt-btn').hasClass('active')) {
            $pipa = $('#redondo-rectangulo .no-radio .first-circ select.t-pipa').val();
            $insu = $('#redondo-rectangulo .no-radio .first-circ select.t-insulacion').val();
        }
        $circ = getCircumference($pipa, $insu);
    }

    $base = seleccionInput($('#redondo-rectangulo-base').val());
    $ancho = seleccionInput($('#redondo-rectangulo-ancho').val());
    $altura = seleccionInput($('#redondo-rectangulo-altura').val());

    $r = ( $circ / ( 2*Math.PI ) );

    if( !$.isNumeric($r)) {
        $( "#error-numeric" ).popup( "open" );
    }  else  if($ancho > $base) {
        $( "#error-redondo-rectangulo" ).popup( "open" );
    } else {

        $results = calculoRedondoRectangulo($circ, $base, $ancho, $altura);

      $p = Math.abs($results[7][1]);
      $escala = 0;
//escala
      if (($("#tLamina36Redondo-Rectangulo").is(':checked')) && ($p > 36)){
        $opcionEscala.popup( "open" );
        $btn1sqr.on("click", function(){
          $escala = $p/12;
          $nCirc = $circ/$escala;
          $nBase = $base/$escala;
          $nAncho = $ancho/$escala;
          $nAltura = $altura/$escala;
          $results = calculoRedondoRectangulo( $nCirc, $nBase, $nAncho, $nAltura);
          $('#redondo-rectangulo #circ-RR').val(convertToFraction($nCirc));
          $('#redondo-rectangulo-base').val(convertToFraction($nBase));
          $('#redondo-rectangulo-ancho').val(convertToFraction($nAncho));
          $('#redondo-rectangulo-altura').val(convertToFraction($nAltura));
          printRedondoRectangulo($results, $escala);
          $btn1sqr.off("click");
          $opcionEscala.popup( "close" );
        });

        $btn2sqr.on("click", function(){
          $escala = $p/24;
          $nCirc = $circ/$escala;
          $nBase = $base/$escala;
          $nAncho = $ancho/$escala;
          $nAltura = $altura/$escala;
          $results = calculoRedondoRectangulo( $nCirc, $nBase, $nAncho, $nAltura);
          $('#redondo-rectangulo #circ-RR').val(convertToFraction($nCirc));
          $('#redondo-rectangulo-base').val(convertToFraction($nBase));
          $('#redondo-rectangulo-ancho').val(convertToFraction($nAncho));
          $('#redondo-rectangulo-altura').val(convertToFraction($nAltura));
          printRedondoRectangulo($results, $escala);
          $btn2sqr.off("click");
          $opcionEscala.popup( "close" );
        });

      }else if (($("#tLamina48Redondo-Rectangulo").is(':checked')) && ($p > 48 )){
        $opcionEscala.popup( "open" );
        $btn1sqr.on("click", function(){
          $escala = $p/12;
          $nCirc = $circ/$escala;
          $nBase = $base/$escala;
          $nAncho = $ancho/$escala;
          $nAltura = $altura/$escala;
          $results = calculoRedondoRectangulo( $nCirc, $nBase, $nAncho, $nAltura);
          $('#redondo-rectangulo #circ-RR').val(convertToFraction($nCirc));
          $('#redondo-rectangulo-base').val(convertToFraction($nBase));
          $('#redondo-rectangulo-ancho').val(convertToFraction($nAncho));
          $('#redondo-rectangulo-altura').val(convertToFraction($nAltura));
          printRedondoRectangulo($results, $escala);
          $btn1sqr.off("click");
          $opcionEscala.popup( "close" );
        });

        $btn2sqr.on("click", function(){
          $escala = $p/24;
          $nCirc = $circ/$escala;
          $nBase = $base/$escala;
          $nAncho = $ancho/$escala;
          $nAltura = $altura/$escala;
          $results = calculoRedondoRectangulo( $nCirc, $nBase, $nAncho, $nAltura);
          $('#redondo-rectangulo #circ-RR').val(convertToFraction($nCirc));
          $('#redondo-rectangulo-base').val(convertToFraction($nBase));
          $('#redondo-rectangulo-ancho').val(convertToFraction($nAncho));
          $('#redondo-rectangulo-altura').val(convertToFraction($nAltura));
          printRedondoRectangulo($results, $escala);
          $btn2sqr.off("click");
          $opcionEscala.popup( "close" );
        });

      }
        printRedondoRectangulo($results, 0);

    }
}

function calculoRedondoRectangulo($circ, $base, $ancho, $altura){

  $r = ( $circ / ( 2*Math.PI ) );

  $initialPoints = [];
  $results = [];

  $c16 = ($circ / 16);
  $pa = [0, -$altura];
  $short = $r - $base/2;
  $long = $r - $ancho/2;

  for(var i = 0; i < 5; i++) {
    $left = $base/2 + $r * Math.cos(degreesToRadians(180 - 22.5*i));
    $right = $r * Math.sin(degreesToRadians(180 - 22.5*i)) - $ancho/2;
    $initial = Math.sqrt(Math.pow($left, 2) + Math.pow($right, 2));
    $initialPoints.push($initial);
  }

  $results.push([$initialPoints[0], 0]);

  $P2 = circleIntersect($initialPoints[0], 0, $c16, $pa[0], $pa[1], distanceBetweenPoints($pa[0], $pa[1], $initialPoints[1], 0));

  $P3 = circleIntersect($P2[2], $P2[3], $c16, $pa[0], $pa[1], distanceBetweenPoints($pa[0], $pa[1], $initialPoints[2], 0));

  $P4 = circleIntersect($P3[2], $P3[3], $c16, $pa[0], $pa[1], distanceBetweenPoints($pa[0], $pa[1], $initialPoints[3], 0));

  $P5 = circleIntersect($P4[2], $P4[3], $c16, $pa[0], $pa[1], distanceBetweenPoints($pa[0], $pa[1], $initialPoints[4], 0));

  $P6 = circleIntersect($pa[0], $pa[1], $ancho/2, $initialPoints[0], 0, distanceBetweenPoints($pa[0], $pa[1], $short, 0));

  $P7 = $pa;

  $P8 = circleIntersect($pa[0], $pa[1], $base/2, $P5[2], $P5[3], distanceBetweenPoints($pa[0], $pa[1], $long, 0));

  arc = distanceBetweenPoints($initialPoints[0], 0, $P2[2], $P2[3]);
  arc = arc + distanceBetweenPoints($P2[2], $P2[3], $P3[2], $P3[3]);
  arc = arc + distanceBetweenPoints($P3[2], $P3[3], $P4[2], $P4[3]);
  arc = arc + distanceBetweenPoints($P4[2], $P4[3], $P5[2], $P5[3]);

  if (($circ/4)=== arc){
    console.log("Arco correcto");
  }else {
    console.log($circ/4, arc);
  }

  $results.push([$P2[2], $P2[3]], [$P3[2], $P3[3]], [$P4[2], $P4[3]], [$P5[2], $P5[3]], [$P6[2], $P6[3]], $P7, [$P8[0], $P8[1]]);

  return $results
}

function printRedondoRectangulo($results, $escala){
  for(var i = 0; i < $results.length; i++) {
    $results[i] = [convertToFraction(Math.round($results[i][0]*1000)/1000), convertToFraction(Math.round($results[i][1]*1000)/1000)];
    $('#graficaMetodoRedondoARectangulo .d' + (i + 1)).text($results[i] + "''");
  }
  $('#graficaMetodoRedondoARectangulo .escalaRedondoRectangulo').text("Escala: 1");
    if ($escala !== 0){
      $escala = Math.round($escala * 100)/100;
      $('#graficaMetodoRedondoARectangulo .escalaRedondoRectangulo').text("Escala: " + $escala);
    }
}

/*
 Pantalon 45 grados
 */

function printCircPantalon45() {
    setTimeout(function() {
        $pipa_print = $('#pantalon-45 .no-radio .first-circ select.t-pipa').val();
        $insu_print = $('#pantalon-45 .no-radio .first-circ select.t-insulacion').val();

        $circ1_print = convertToFraction(getCircumference($pipa_print, $insu_print));

        $('#pantalon-45 .result-1').text(('Circunferencia: '+$circ1_print)+"''");

    }, 150);
}

$('#pantalon-45 .opt-btn').click(function () {
    printCircPantalon45();
});

$('#pantalon-45 select').change(function() {
    printCircPantalon45();
});



/* ------------------------
 Rectangulo a Metodo Pantalon 45
 ----------------------------*/


function metodoPantalon45() {

    if($('#pantalon-45 .man-btn').hasClass('active')) {
        $circ = seleccionInput($('#pantalon-45 #circ-MP').val());
    } else {
        if($('#pantalon-45 .opt-btn').hasClass('active')) {
            $pipa = $('#pantalon-45 .no-radio select.t-pipa').val();
            $insu = $('#pantalon-45 .no-radio select.t-insulacion').val();
        }
        $circ = getCircumference($pipa, $insu);
    }

    $r = ( $circ / ( 2*Math.PI ) );
    $e = (($circ/2)/8);
     $d = -1 * $r * Math.cos(0)+ $r;
     $d = $r + 1.5 - $d;
    if( !$.isNumeric($r) || $circ === '' ) {
        $( "#error-numeric" ).popup( "open" );
    } else {

        if (($("#tLamina36P45").is(':checked')) && ($d > 36)){
        $opcionEscala.popup( "open" );
        $btn1sqr.on("click", function(){
          $escala = $d/12;
          $nCirc = $circ/$escala;
          calculoMetodoPantalon45( $nCirc, $escala);
          $btn1sqr.off("click");
          $opcionEscala.popup( "close" );
        });

        $btn2sqr.on("click", function(){
          $escala = $d/24;
          $nCirc = $circ/$escala;
          calculoMetodoPantalon45( $nCirc, $escala);
          $btn2sqr.off("click");
          $opcionEscala.popup( "close" );
        });

      }

      if (($("#tLamina48P45").is(':checked')) && ($d > 48 )){
        $opcionEscala.popup( "open" );
        $btn1sqr.on("click", function(){
          $escala = $d/12;
          $nCirc = $circ/$escala;
          calculoMetodoPantalon45( $nCirc, $escala);
          $btn1sqr.off("click");
          $opcionEscala.popup( "close" );
        });

        $btn2sqr.on("click", function(){
          $escala = $d/24;
          $nCirc = $circ/$escala;
          calculoMetodoPantalon45( $nCirc, $escala);
          $btn2sqr.off("click");
          $opcionEscala.popup( "close" );
        });

      }

        calculoMetodoPantalon45($circ, 0);
    }
}

function calculoMetodoPantalon45($circ, $escala) {
  $r = ( $circ / ( 2*Math.PI ) );
  $e = (($circ/2)/8);

  var results = [],
    resultsGraphOne = [],
    resultsGraphTwo = [],
    finalLengths = [],
    length = Math.sqrt(2 * $r * $r),
    m = -$r / ($r + length);
  for(var i = 0; i < 5; i++) {
    results.push(-1 * $r * Math.cos(degreesToRadians(22.5*i))+ $r);
  }
  for(var i = 1; i < 5; i++) {
    results.push(m * $r * Math.cos(degreesToRadians(90 - 22.5*i))+ $r);
  }

  for(var i = 0; i < results.length; i++) {
    resultsGraphOne[i] = ($r + 1.5 - results[i]);
    if(i >= results.length - 4) resultsGraphTwo.push($r - results[i]);
  }

  finalLengths.push($circ / 2);
  finalLengths.push($circ / 4);
  $e = convertToFraction($e);

  for (var i = 0; i < 9; i++) {
    $('#graficaMetodoPantalon45 .d' + (i + 1)).text((convertToFraction(resultsGraphOne[i]) + "''"));
  }
  for (var i = 0; i < 4; i++) {
    $('#graficaMetodoPantalon45SM .d' + (i + 1)).text((convertToFraction(resultsGraphTwo[i])) + "''");
  }
  $('#graficaMetodoPantalon45 .d10').text((convertToFraction(finalLengths[0])) + "''");
  $('#graficaMetodoPantalon45SM .d5').text(convertToFraction(finalLengths[1]) + "''");
  $('#graficaMetodoPantalon45 .d12').text(($e) + "''");
  $('#graficaMetodoPantalon45SM .d12').text(($e) + "''");
  $('#graficaMetodoPantalon45SM .escalaPantalon45').text("Escala: 1");
  $('#pantalon-45 #circ-MP').val(convertToFraction($circ));

  if ($escala !== 0) {
    $escala = Math.round($escala * 100)/100;
    $('#graficaMetodoPantalon45SM .escalaPantalon45').text("Escala: " + $escala);
  }

}

/*
 CONVERTS DEGREES TO RADIANS
 */
function degreesToRadians($degrees) {
    $radians = $degrees*Math.PI/180;
    return $radians;
}

/*
 INIT LEFT MENU PANEL
 */
$(document).on("pagecreate", function () {
    $("[data-role=panel]").one("panelbeforeopen", function () {
        var height = $.mobile.pageContainer.pagecontainer("getActivePage").outerHeight();
        $(".ui-panel-wrapper").css("height", height + 1);
    });
    /*
     INIT GLOBAL ERROR POPUP
     */
    $( "#error-numeric" ).popup({
        defaults: true
    });

  $( "#error-inches" ).popup({
    defaults: true
  });

    $( "#opcion-escala" ).popup({
        defaults: true
    });

    $("input[type='radio']").checkboxradio();

  $('.keyboard').keyboard();
  $('.keyboardInt').keyboard();

});


$(function () {
    $("[data-role=header],[data-role=footer]").toolbar().enhanceWithin();
    $("[data-role=panel]").panel().enhanceWithin();
});

/*
 B METHOD
 */
function B($r, $r2, $angle) {
    return ( ( $r2-$r )*( $r*$angle ) )/( $r*$r2 );
}

/*
 C METHOD
 */
function C($r, $r2, $angle) {
    return $r*$angle;
}

/*
 X METHOD
 */
function X($r2, $b, $c) {
    return (( -( 2*$r2-2*$b*$c ) )
        + Math.sqrt( Math.pow( ( 2*$r2-2*$b*$c ),2 ) - 4*( ( -Math.pow( ( $b ),2 ) ) -1 )*( -Math.pow( ( $c ),2 ) ) ) )/
        ( 2*( ( -Math.pow( ( $b ),2 ) ) -1 ) );
}

/*
 Y METHOD
 */
function Y($r,$angle,$r2,$x) {
    return ($r*$angle)-Math.sqrt( Math.pow( $r2,2 ) - Math.pow( ( $x-$r2 ),2 ) );
}

/*
 Intersects 2 circles given points x1, x2, r1, y1, y2, r2
 source: http://paulbourke.net/geometry/circlesphere/
 */
function circleIntersect(x1, y1, r1, x2, y2, r2) {
    var d, //Distance between circles
        a, //Midpoint of the distance between circle centers
        h, //Distance from a to intersection
        xm,
        ym,
        xs1,
        xs2,
        ys1,
        ys2,
        dx,
        dy;

    d = distanceBetweenPoints(x1, y1, x2, y2);
    if(d > r1 + r2) throw "Circles do not intersect.";
    else if (d < Math.abs(r1 - r2)) throw "A circle contains the other.";
    else if (d == 0 && r1 == r2) throw "The circles are coincident - There are infinite solutions.";

    dx = x2 - x1;
    dy = y2 - y1;

    a = (Math.pow(r1, 2) - Math.pow(r2, 2)  + Math.pow(d, 2))/(2*d);
    h = Math.sqrt(Math.pow(r1, 2) - Math.pow(a, 2));

    xm = x1 + a*dx/d;
    ym = y1 + a*dy/d;
    xs1 = xm + h*dy/d;
    xs2 = xm - h*dy/d;
    ys1 = ym - h*dx/d;
    ys2 = ym + h*dx/d;

    return [xs1,ys1, xs2,ys2];
}

/*
 Gets the distance between 2 points x1, y1, x2, y2
 */
function distanceBetweenPoints(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2))
}

function quickcircgetDiametro(){

    $circ = seleccionInput(document.getElementById('quick-circ-circ').value);

    if( !$.isNumeric($circ) || $circ === '' ) {
        $( "#error-numeric" ).popup( "open" );
    } else {

        $diameter = $circ / Math.PI;

        document.getElementById("diameteranswer").innerHTML = convertToFraction($diameter) + "''";

    }
}

function quickcircgetCirc(){

    $diameter = seleccionInput(document.getElementById('quick-circ-diam').value);

    if( !$.isNumeric($diameter) || $diameter === '' ) {
        $( "#error-numeric" ).popup( "open" );
    } else {

        $circunference = $diameter * Math.PI;

        document.getElementById("circunferenceanswer").innerHTML = convertToFraction($circunference) + "''";

    }
}

function quickConvertInches(){
    $inch = document.getElementById('quick-conv-inch').value;

    $pulgadas = $inch.split(" ");

    $feet = $pulgadas[0] / 12;

    $ftAns = Math.floor($feet);

    $in = Math.round(($feet - $ftAns) * 12);

    document.getElementById("feetAnswer").innerHTML = $ftAns + " ft " + $in + " " + $pulgadas[1] + "''";

}

function quickConvertFeet(){
  $feet = seleccionInput(document.getElementById('quick-conv-feet').value);
  $In = seleccionInput(document.getElementById('quick-conv-feet.in').value);

  if( !$.isNumeric($feet) || $feet === '' ) {
    $( "#error-numeric" ).popup( "open" );
  } else  {
    if($In > 12){
      $( "#error-inches" ).popup( "open" );
    } else {
      $inch = ($feet * 12) + $In;

      document.getElementById("inchanswer").innerHTML = convertToFraction($inch) + "''";
    }
  }
}


function addChar(input, character) {
    if(input.value == null || input.value == "0")
        input.value = character
    else
        input.value += character
}
//
// function cos(form) {
//     form.display.value = Math.cos(form.display.value);
// }
//
// function sin(form) {
//     form.display.value = Math.sin(form.display.value);
// }
//
// function tan(form) {
//     form.display.value = Math.tan(form.display.value);
// }

function sqrt(form) {
    form.display.value = Math.sqrt(form.display.value);
}

function ln(form) {
    form.display.value = Math.log(form.display.value);
}

/*
function exp(form) {
    form.display.value = Math.exp(form.display.value);
}
*/

function deleteChar(input) {
    input.value = input.value.substring(0, input.value.length - 1)
}

function changeSign(input) {
    if(input.value.substring(0, 1) == "-")
        input.value = input.value.substring(1, input.value.length)
    else
        input.value = "-" + input.value
}

function compute(form) {
    var replaced = form.display.value.split(' ').join('+');
    var replacedPi = replaced.split('π').join('3.14159');
    form.display.value = convertToFraction(eval(replacedPi));
}
function computeDecimal(form) {
    var replaced = form.display.value.split(' ').join('+');
    var replacedPi = replaced.split('π').join('3.14159');
    form.display.value = eval(replacedPi);
}

function square(form) {
    form.display.value = eval(form.display.value) * eval(form.display.value)
}

/*function replace(str) {
    var replaced = str.split(' ').join('+');
    if (checkNum(replaced)) { compute(replaced) }s
}*/


function checkNum(str) {
    var replaced = str.split(' ').join('+');
    var replacedPi = replaced.split('π').join('3.14159');
    console.log(replaced);
    for (var i = 0; i < replacedPi.length; i++) {
        var ch = replacedPi.substring(i, i+1)
        if (ch < "0" || ch > "9") {
            if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "."
                && ch != "(" && ch!= ")") {
                alert("Entrada no válida")
                return false
            }
        }
    }
    return true
}











