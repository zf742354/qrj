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
            var sz = /^\d+(\.{1}\d+)?$/;
        if(
            a==sz
        ){
            $('.tel2').val(a);
            $('.shoujihao').removeClass("d-none");
        }else{

        }
    });

    $('.sj-right').click(function(){
        if($(".tel2").val().length==11){
            $('.shoujihao').addClass("d-none");
        }else{
            alert("请输入正确的手机号码")
        }
    });

});



