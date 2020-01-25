$(document).ready(()=>
{


    // Redirect logo click to homepage
    $('.logo').click(()=>
    {
        window.location.href = "./";
    })





    // Menu bar for Mobile

    $('#menu').click(()=>{
        $('.nav-div').toggleClass('nav-div-visible');

        let img= $('.menu-icon').attr('src');

        $('.menu-icon').attr('src',img==='./img/menu.svg' ? './img/cross.svg' : './img/menu.svg');
        
        
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

// function load_home() {
//     document.getElementById("content").innerHTML='<object type="text/html" data="home.html" ></object>';
// }