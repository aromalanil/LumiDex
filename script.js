$(document).ready(()=>{
    $('#menu').click(()=>{
        $('.nav-div').toggleClass('nav-div-visible')

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
})