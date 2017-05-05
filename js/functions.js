$(function() {
	smoothScroll(300);
	clientStuff();
});

// smoothScroll function is applied from the document ready function
function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}

function clientStuff() {

  // $('.testimony-logo, .testimony-button').click(function() {
  //   var $this = $(this),
  //       position = $this.parent().children().index($this);

  //   $('.testimony').removeClass('active-testimony').eq(position).addClass('active-testimony');
  //   // $('.testimony-logo').removeClass('active-testimony').eq(position).addClass('active-testimony');
  //   // $('.testimony-button').removeClass('active-testimony').eq(position).addClass('active-testimony');
  // });

  $('.testimony').first().addClass('active-testimony')


  $('.testimonial-control-next, .testimonial-control-prev').click(function() {
		
    var $this = $(this),
        curActivetestimony = $('.testimonials').find('.active-testimony'),
        position = $('.testimonials').children().index(curActivetestimony),
        testimonyNum = $('.testimony').length;

      if($this.hasClass('testimonial-control-next'))
	  {

        if(position < testimonyNum -1)
		{
          $('.active-testimony').removeClass('active-testimony').next().addClass('active-testimony');
        } 
		else 
		{
          $('.testimony').removeClass('active-testimony').first().addClass('active-testimony');
        //   $('.testimony-logo').removeClass('active-testimony').first().addClass('active-testimony');
        //   $('.testimony-button').removeClass('active-testimony').first().addClass('active-testimony');
        }

      } 
	  else
	  {

        if (position === 0)
		{
          $('.testimony').removeClass('active-testimony').last().addClass('active-testimony');
        //   $('.testimony-logo').removeClass('active-testimony').last().addClass('active-testimony');
        //   $('.testimony-button').removeClass('active-testimony').last().addClass('active-testimony');
		} 
		else 
		{
          $('.active-testimony').removeClass('active-testimony').prev().addClass('active-testimony');
        }

      }

  });

}