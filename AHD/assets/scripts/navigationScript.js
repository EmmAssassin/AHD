
function myFunction() {
    var x = document.getElementById("topNavigation");
    var open = document.getElementById("open");
    var closed = document.getElementById("unopen");
    if (x.className === "navigation") {
      x.className += " responsive";
    } else {
      x.className = "navigation";
    }

  }


  $(function () {
    fixedHeader();
    initCollapseItems();
    initScrollAnchors();

});

function fixedHeader() {
    $(window).scroll(function () {
        const scroll = $(window).scrollTop();
        /*if(scroll >= 90){
            var headerHeight = $('#navigation').innerHeight();
            $('.content').css('padding-top', headerHeight);
            $('#navigation').addClass('fixed-header');
        }
        else{
            $('#navigation').removeClass('fixed-header');
            
            $('.content').css('padding-top', 0);
        }*/
        $('.nav').toggleClass('fixed-header', scroll >= 60);
        $('#content').toggleClass('withStickyHeader', scroll >= 60);
    });
    //Toggle menu dropdown

    $('.navLink').on('click',
        function () {
            if (window.innerWidth < 992) {
                return;
            }
            $(this).siblings('.dropdown-content')
                .slideToggle();
        });

    $('button.navbar-menu').on('click',
        function () {
            const navbarMenuOpened = !$('.navContent').hasClass('show');
            $('body').toggleClass('disabled', navbarMenuOpened);
        });
}

function initCollapseItems() {
    $('.country-with-file').click(function () {
        $(this).next('.subdata')
            .slideToggle();
    });

    $('.collapse-button').click(function () {
        $(this).toggleClass('showed');
        $(this).next('.collapse-body').slideToggle();
    });
}

/*
function initScrollAnchors() {
    const headerSize = 120;

    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') &&
                location.hostname === this.hostname) {
                scrollToPosition(this.hash, event);
                setHash(this.hash);
            }
        });
*/