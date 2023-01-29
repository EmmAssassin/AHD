$(function () {
    fixedHeader();
    initCollapseItems();
    initScrollAnchors();
});


//navigation functions
function navigationFunction() {
    var x = document.getElementById("topNavigation");
    if (x.className === "navigation") {
      x.className += " responsive";
    } else {
      x.className = "navigation";
    }
  }

function fixedHeader() {
    alert("We are still in the making of the site! Thank you for your patience")
    
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