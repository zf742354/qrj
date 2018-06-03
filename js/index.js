$(function(){

   $(".box>label").click(function(){
       $(this).addClass("on").siblings().removeClass('on');
       //if$(this).hasClass("a2")(
       //    $(this).children('input').focus()
       //);
   });

    $(".zffs>.wx").click(function(){
       $(this).addClass('on').siblings().removeClass("on");
    });


    $('.ys').click(function(){
        $(".mc").removeClass("d-none");
    });

    $('.zhidaole').click(function(){
        $(".mc").addClass("d-none");
    });

    $('.ljzf').click(function(){
            var a =  $('.tel').val();
            var sz = /^1[3|4|5|6|7|8|9][0-9]{9}$/;
        if(sz.test(a)){
                $('.sjh').removeClass("d-none");
                $('#ooo').addClass("d-none");
        }else{
            $('#ooo').removeClass("d-none");
        }
    });

    $('.sj-left').click(function () {
        $('.sjh').addClass("d-none");
    });

    $('.sj-right').click(function () {
        var b = $(".tel").val();
        var a = $('.tel2').val();
        var sz = /^1[3|4|5|6|7|8|9][0-9]{9}$/;

        if(a===b){
            $(".byz").removeClass("d-none");
            $(".sjh").addClass("d-none");
        }else{
            if ($(".tel2").val().length == 11) {
                if(a===b){
                }if (sz.test(a)) {
                    if ($(a === b)){
                        $('.sjh').addClass("d-none");
                        window.open('../html/demo1.html');
                        window.open('../html/demo.html');
                        $('#ppp').addClass('d-none');
                    }
                else{
                        $("byz").removeClass("d-none");
                        $("sjh").addClass("d-none");
                    }
                } else {
                    $('#ppp').removeClass("d-none");
                }
            } else {
                $('#ppp').removeClass("d-none");
            }
        }
    });



    $(".sjbyz-right").click(function(){
        $('.byz').addClass("d-none");
        window.open('../html/demo.html')
    });

    $('.sjbyz-left').click(function(){
        $('.byz').addClass("d-none");
    });



});