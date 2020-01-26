/**
 * @author Aromal Anil <github.com/aromalanil>
 */

$(document).ready(()=>
{

    // Menu bar for Mobile

    $('#menu').click(()=>{

        //Making Side Menu Bar Visible/Invisible On Menu Click
        $('.nav-div').toggleClass('nav-div-visible');


        //Changing Menu Icon
        let img= $('.menu-icon').attr('src');
        $('.menu-icon').attr('src',img==='./img/menu.svg' ? './img/cross.svg' : './img/menu.svg');
        
        
        //Making Side Menu Bar Visible/Invisible When Clicked On Link
        if($('.nav-div').hasClass('nav-div-visible'))
        {
            $('.nav-link').click(()=>{
                $('.nav-div').removeClass('nav-div-visible');
                $('.menu-icon').attr('src','./img/menu.svg');
            })
        }
    })



    //Testimonial Slider
    $('.slider').slick({

        nextArrow: '<i class="fa fa-chevron-right slick-next"></i>',
        prevArrow: '<i class="fa fa-chevron-left slick-prev"></i>',    
         
    });

})