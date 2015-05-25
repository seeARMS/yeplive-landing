$(document).ready( function () {

  window.failureRate = 0;


    var $form = $('form');
    if ( $form.length > 0 ) {
        $('form button[type="submit"]').bind('click', function ( event ) {
            if ( event ) event.preventDefault();
           register($form);
        });
    }
/*

    $('#btn-terms').bind('click', function ( event ) {
        if ( event ) event.preventDefault();

        $.get("terms-of-service.html", function(data) {
            $("#priv-modal-body").html(data);
        });

       $('.bs-privacy-modal-lg').modal('toggle')



    });

    $('#btn-jobs').bind('click', function ( event ) {
        if ( event ) event.preventDefault();


        $.get("jobs.html", function(data) {
            $("#job-modal-body").html(data);
        });

       $('.bs-job-modal-lg').modal('toggle')

    });

    // $('#myModal').modal(options)
    $('#btn-policy').bind('click', function(e){
         if (e) e.preventDefault();
	$.get("privacy.html", function(data){
		$('#privacy-modal-body').html(data);	
	});		
	$('.bs-privacy2-modal-lg').modal('toggle');
    });
*/


		$('#btn-about').click(function(e){
			if(e){
				e.preventDefault();
			}
			
			$.get('about.html', function(data){
				$("#about-modal-body").html(data);
			});

			$('.bs-about-modal-lg').modal('toggle');
			$('.bs-about-modal-lg').on('hidden.bs.modal', function () {
				$('#about-vid')[0].pause();
			});
		});

    $('#btn-content-policy').bind('click', function ( event ) {
        if ( event ) event.preventDefault();

        $.get("content-policy.html", function(data) {
            $("#content-policy-modal-body").html(data);
        });

       $('.bs-content-policy-modal-lg').modal('toggle')
    });

    $('#btn-terms').bind('click', function ( event ) {
        if ( event ) event.preventDefault();

        $.get("terms-of-service.html", function(data) {
            $("#priv-modal-body").html(data);
        });

       $('.bs-privacy-modal-lg').modal('toggle')
    });

		$('#btn-copyright').click(function(e){
         if (e) e.preventDefault();
	$.get("copyright-policy.html", function(data){
		$('#copyright-modal-body').html(data);	
	});		
	$('.bs-copyright-modal-lg').modal('toggle');
    });

			


    // $('#myModal').modal(options)
    $('#btn-privacy-policy').bind('click', function(e){
         if (e) e.preventDefault();
	$.get("privacy.html", function(data){
		$('#privacy-modal-body').html(data);	
	});		
	$('.bs-privacy2-modal-lg').modal('toggle');
    });







});

function register($form) {


    $.ajax({
        type: $form.attr('method'),
        url: $form.attr('action'),
        data: $form.serialize(),
        cache       : false,
        dataType    : 'json',
        contentType: "application/json; charset=utf-8",
        error       : function(err) {

          ga('send', 'event', 'signup', 'error', err, window.failureRate++);
          $('#profile-name').text('Something went wrong... Please try again later!');



          },
        success     : function(data) {
            if (data.result != "success") {
              ga('send', 'event', 'signup', 'failure', data.msg, window.failureRate++);

              var msg = data.msg;

              if (data.msg.substring(0,1) == "0") {
                msg = data.msg.substring(4,data.msg.length);
              }
              $('#profile-name').text('Oops! ' + msg);


                // Something went wrong, do something to notify the user. maybe alert(data.msg);
            } else {''
              ga('send', 'event', 'signup', 'successful');

              $('#profile-name').html('Thanks for signing up! <br/>Please confirm your email address, and stay tuned for more information!');
              $('form').css("display", "none");
            }
        }
    });
}
