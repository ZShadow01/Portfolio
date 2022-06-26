$(document).ready(function() {
    // Click events
    $('div#navHamburger').click(function() {
        let parent = $(this).parent();
        parent.toggleClass('active');
    });

    $('div#navigationBar > div.nav-container > h1.page-title').click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    });

    $('li.about-item, div.shortcut-btn.about-shortcut').click(function(event) {
        event.preventDefault();
        const aboutSection = $('div#about');
        $('html, body').animate({
            scrollTop: aboutSection.position().top
        }, 800);
    });

    $('li.projects-item, div.shortcut-btn.projects-shortcut').click(function(event) {
        event.preventDefault();
        const projectsSection = $('div#projects');
        $('html, body').animate({
            scrollTop: projectsSection.position().top
        }, 800);
    })

    // Scroll events
    $(this).scroll(function() {
        let nav = $('div#navigationBar');
        const navHeight = nav.height();
        const scrollTop = $(this).scrollTop();
        
        if (scrollTop > navHeight) {
            nav.addClass('scroll');
        } else {
            nav.removeClass('scroll');
        }

        let header = $('div#header');
        const about = $('div#about');

        if (scrollTop > header.height() / 2 && scrollTop < about.height()) {
            about.addClass('activated');
        }
    });
});
