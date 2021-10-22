$(function() {

    this.$spookyBtn = $('#halloween');

    this.$spookyBtn.click(function(e) {

        $('.container-fluid').css('background-color', "#FF7518");
        $('#footer').css("background-color", "#FF7518");
        $('h1.big-heading').css("color", "#000");
        
        $('h1.big-heading').text('Watch Out!');
        $('#appName').css("color", "#000");
        $(".fas").attr("class", "fas fa-ghost fa-7x"); 
<<<<<<< HEAD
        $(".fas").css("color", "#FF5733");      

=======
        $(".fas").css("color", "#FF5733");
        
        $(".fa-ghost").mouseenter(function() {
            $(this).css("color", "#fff");
        });
        
        $(".fa-ghost").mouseleave(function() {
            $(this).css("color", "#FF5733");
        });
>>>>>>> 2ced93640031c12e6c019e7a135a637755ac2fbe
        $('#halloween').fadeTo(1000, 0.0, function() {
            $('#halloween').attr("class", "btn btn-light btn-lg");            
            $('#halloween').fadeTo(500, 1);
            $('#tooScary').attr('display', 'block');
            $('#tooScary').fadeTo(500, 1);
        })

        $('#vid1').attr('src', "media/video_preview_h264.mp4");

       $('#vid2').hide();


        $('#tooScary').click(function() {
            location.reload(true);
        });

        
        

    })

<<<<<<< HEAD
});
=======
});
>>>>>>> 2ced93640031c12e6c019e7a135a637755ac2fbe
