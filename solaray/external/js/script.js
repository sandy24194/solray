jQuery(document).ready(function () {
    

    var count = 0 ;
        jQuery(window).scroll(function() {
            
           
          
      });
    windowWidth = jQuery(window).width();
        if (windowWidth > 767) {
        var maxHeight = 0;
        jQuery(".description.row-one h3.title").each(function(){
           if (jQuery(this).height() > maxHeight) { maxHeight = jQuery(this).height(); }
        });

        // jQuery(".description.row-one h3.title").height(maxHeight);

        //  var maxHeight = 0;
        // jQuery(".description.row-one .subtitle").each(function(){
        //    if (jQuery(this).height() > maxHeight) { maxHeight = jQuery(this).height(); }
        // });

        // jQuery(".description.row-one .subtitle").height(maxHeight);

        //  var maxHeight = 0;
        //  jQuery(".description.row-two .subtitle").each(function(){
        //    if (jQuery(this).height() > maxHeight) { maxHeight = jQuery(this).height(); }
        // });

        // jQuery(".description.row-two .subtitle").height(maxHeight);

        //  var maxHeight = 0;
        //  jQuery(".description.row-three .subtitle").each(function(){
        //    if (jQuery(this).height() > maxHeight) { maxHeight = jQuery(this).height(); }
        // });

        // jQuery(".description.row-three .subtitle").height(maxHeight);

        //  var maxHeight = 0;
        //  jQuery(".description.row-four .subtitle").each(function(){
        //    if (jQuery(this).height() > maxHeight) { maxHeight = jQuery(this).height(); }
        // });

        // jQuery(".description.row-four .subtitle").height(maxHeight);

        //  var maxHeight = 0;
        //  jQuery(".description.row-five .subtitle").each(function(){
        //    if (jQuery(this).height() > maxHeight) { maxHeight = jQuery(this).height(); }
        // });

        // jQuery(".description.row-five .subtitle").height(maxHeight);
    }


    // jQuery('.popup-gallery').magnificPopup({
    //     delegate: 'a',
    //     type: 'image',
    //     tLoading: 'Loading image #%curr%...',
    //     mainClass: 'mfp-img-mobile',
    //     gallery: {
    //         enabled: true,
    //         navigateByImgClick: true,
    //         preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    //     },
    // });

    /* pop up modal to installation */

    $(".btn").click(function(){
        var image = $(this).find("img").attr(src);
        var info = $(this).find("p").text();
        console.log(image, info);
        console.log(1)
    });

    /* pop up end */

    

    jQuery('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        dots: true,
        asNavFor: '.slider-nav'
    });
    jQuery('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        //centerMode: true,
        focusOnSelect: true
    });

    jQuery('.clients-inner').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    centerMode: false,
    autoplay: true,
    arrows: false,
    responsive: [{
            breakpoint: 975,
            settings: {
                slidesToScroll: 3,
                slidesToShow: 3
            }
        }, {
            breakpoint: 640,
            settings: {
                slidesToScroll: 2,
                slidesToShow: 2
            }
        }]
    });


    jQuery('.nav-tabs li a').on('shown.bs.tab', function (e) {
        // var target = jQuery(e.target).attr("href") // activated tab
        //alert('target');
        console.log('dcsdc');
        // jQuery('.slider-for , .slider-nav').resize();
        //  slide();
        jQuery('.slick-slider').slick('setPosition');

    });

    // jQuery('#products-gallery').removeClass('reload_gallery');
    jQuery('.tab-content .tab-pane').each(function () {
        jQuery(this).find('.gallery_products').removeClass('reload_gallery');
    });
});



function slide() {
    jQuery('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        dots: true,
        asNavFor: '.slider-nav'
    });
    jQuery('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        //centerMode: true,
        focusOnSelect: true
    });
}


jQuery(document).ready(function () {
    // paneheight();
    jQuery('a[data-toggle="tab"]').bind('shown.bs.tab', function (e) {
        e.target // newly activated tab
        e.relatedTarget // previous active tab
        // paneheight();
    })

    jQuery('.frm_submit input').click(function () {
        var x = jQuery('.tab-pane').outerHeight();
        var y = jQuery('.add-before-after').outerHeight();

        setTimeout(function () {
            // paneheight();
        }, 2000);
    });


});

/*function paneheight(){
 var x = jQuery('.tab-pane').outerHeight();
 var y = jQuery('.add-before-after').outerHeight();
 
 var diff = Math.abs((x-y)/2);
 if(x>y){
 jQuery('.add-before-after').css({"padding-top": diff, "padding-bottom": diff});
 }
 }*/


// jQuery(document).ready(function(){
// var docheight = jQuery('body').height();
// var winheight = jQuery(window).height();
// var x = winheight-docheight;
// var y = jQuery('.home-body').height();
// jQuery('.home-body').css('min-height', y + x - 1 );
// });


jQuery(document).ready(function () {
    jQuery(".power-select").hide();
    jQuery("select#main_categories").change(function () {
        var str = "";
        str = jQuery(this).find('option:selected').text();
        val = jQuery(this).val();
        console.log(str);

        if (str == 'India') {
            jQuery(".one-tb").removeClass('hide');
            jQuery(".two-tb").addClass('hide');
        } else {
            console.log('else');
            jQuery(".two-tb").removeClass('hide');
            jQuery(".one-tb").addClass('hide');
        }


        if (str == 'Select' || str == '') {
            jQuery(".power-select").hide();
            jQuery(".one-tb, .two-tb").addClass('hide');
            //jQuery(".two-tb").addClass('hide');
        } else {
            jQuery(".power-select").show();
            jQuery(".power-select select").hide();
            jQuery(".power-select select#sub_categories-" + val).show();
        }
    });

    jQuery(".power-select select").change(function () {
        main_category = jQuery(this).data('term-slug');

        var rex = new RegExp(jQuery(this).val());


        if (rex == "/all/") {
            clearFilter()
        } else {
            if (main_category == 'india') {
                jQuery('.one-tb .table-data').hide();
                jQuery('.one-tb .table-data').filter(function () {
                    return rex.test(jQuery(this).text());
                }).show();
            } else {
                jQuery('.two-tb .table-data').hide();
                jQuery('.two-tb .table-data').filter(function () {
                    return rex.test(jQuery(this).text());
                }).show();
            }

        }
    });

});


function clearFilter()
{
    jQuery('#filterText').val('');
    jQuery('.table-data').show();
}

/*******Read More js******/
jQuery(document).ready(function () {
    // Configure/customize these variables.
    var showChar = 300;  // How many characters are shown by default
    var ellipsestext = "...";
    var moretext = "Read more";
    var lesstext = "Read less";


    jQuery('.more').each(function () {
        var content = jQuery(this).html();

        if (content.length > showChar) {

            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);

            var html = c + '<span class="moreellipses">' + ellipsestext + '</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';

            jQuery(this).html(html);
        }

    });

    jQuery(".morelink").click(function () {
        if (jQuery(this).hasClass("less")) {
            jQuery(this).removeClass("less");
            jQuery(this).html(moretext);
        } else {
            jQuery(this).addClass("less");
            jQuery(this).html(lesstext);
        }
        //jQuery('.moreellipses').toggleClass('hide');
        jQuery(this).parents('.content').find('.moreellipses').toggleClass('hide');
        jQuery(this).parents('.content').find('.morecontent').toggleClass('display');
        return false;
    });
});

jQuery(document).ready(function() {
    jQuery(document).on('click','.navbar-toggle',function() {
    jQuery(this).toggleClass('no-menu');
    jQuery(this).toggleClass('show-menu');
    });

    jQuery(window).scroll(function(){
    if (jQuery(window).scrollTop() >= 200) {
        jQuery('.nav-desktop').removeClass('slideIn');
       jQuery('.nav-desktop').addClass('slideInDown');

       jQuery('.nav-mobile').removeClass('slideIn');
       jQuery('.nav-mobile').addClass('slideInDown');

       jQuery('.nav-desktop').addClass('fixed-header');
       jQuery('.nav-mobile').addClass('fixed-header');
    }
    else {
       
        jQuery('.nav-desktop').addClass('slideIn');
        jQuery('.nav-desktop').removeClass('slideInDown');

        jQuery('.nav-mobile').addClass('slideIn');
        jQuery('.nav-mobile').removeClass('slideInDown');

        jQuery('.nav-desktop').removeClass('fixed-header');
        jQuery('.nav-mobile').removeClass('fixed-header');
    }
    });

    windowWidth = jQuery(window).width();
    if (windowWidth < 1025) {
        jQuery('.mobile-nav > li.menu-item-has-children').each(function() {
            jQuery(this).prepend('<div class="toggle-menu"><i class="fa fa-angle-down"></i></div>');
        });
        var clickHandler = ('ontouchstart' in document.documentElement ? "touchstart" : "click");
        
        jQuery(document).on(clickHandler, '.navbar-nav > li.menu-item-has-children .toggle-menu', function () {
            if( jQuery(this).parent().hasClass('opened') ) {
                jQuery(this).parent().removeClass('opened');
                jQuery(this).parent().find('.toggle-menu').html('<i class="fa fa-angle-down"></i>');
            } else {
                jQuery('.navbar-nav > li.menu-item-has-children').removeClass('opened');
                jQuery(this).parent().addClass('opened');
                jQuery(this).parent().find('.toggle-menu').html('<i class="fa fa-angle-up"></i>');
            }
        });
    }


    jQuery(document).on('click', '.paikane_grp', function (e) {
        e.preventDefault();
        var emailLogIn = jQuery("#login .email_input").val();
        var passwordLogIn = jQuery("#login .password_input").val();
     
        if (!(isEmail(emailLogIn))) {
            jQuery("#login .validation-result .msg").html("The e-mail address is invalid");
        } else if (passwordLogIn.length < 3) {
            jQuery("#login .validation-result .msg").html("The password must have at least 3 characters");
        } else {
            jQuery("#login .validation-result .msg").empty();

            jQuery.ajax({
                type: "POST",
                dataType: "json",
                url: myAjax.ajaxurl,
                data: {action: "user_logIn", email: emailLogIn, password: passwordLogIn},
                success: function (response) {
                   // console.log(response);
                    if (response.type == "success") {
                        jQuery("#login .validation-result .msg").html(response.message);
                    } else {
                        jQuery("#login .validation-result .msg").html(response.message);
                    }


                }
            });

        }

    });
    /* Login Begins Ends*/
});
function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}


