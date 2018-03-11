$(document).ready(function(){
 //boton-arriba
	$('.ir-arriba').click(function(){
		$('html').animate({
			scrollTop: '25px'
		}, 600);
	});
 
	$(window).scroll(function(){
		if( $(window).scrollTop() > 25 ){
			$('.ir-arriba').slideDown(500);
		} else {
			$('.ir-arriba').fadeOut(300);
            
		}
	});
    
    
    /*menu fijo
      var altura = $("#navbar").offset().top;
    $(window).on('scroll',function(){
        if($(window).scrollTop() > altura){
            $("#navbar").addClass("sticky");
           }else{
               $("#navbar").removeClass("sticky");
           }
    });
    
    */

    
    
    
     
});

