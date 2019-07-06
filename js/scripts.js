$(document).ready(function()
{
    $('#mycarousel').carousel({interval:1500});
    $("#carousel-button-icon").click(function(){
                if ($("#carousel-button-icon").children("span").hasClass('fa-pause')) {
                    $("#mycarousel").carousel('pause');
                    $("#carousel-button-icon").children("span").removeClass('fa-pause');
                    $("#carousel-button-icon").children("span").addClass('fa-play');
                }
                else if ($("#carousel-button-icon").children("span").hasClass('fa-play')){
                    $("#mycarousel").carousel('cycle');
                    $("#carousel-button-icon").children("span").removeClass('fa-play');
                    $("#carousel-button-icon").children("span").addClass('fa-pause');                    
                }
            });
            
     $('#login_button').on('click', function () {
     $('#loginModal').modal('show');

    })

    $('#reserveTable').on('click',function(){
        $('#reserveTableModal').modal('show');
    })
});