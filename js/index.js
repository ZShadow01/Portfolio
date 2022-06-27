$(document).ready(function() {
    const activeCaret = 'active-caret';
    let lastActiveCaret = $('p#activeCaret');
    let header = $('div#header');
    let about = $('div#about');

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
    });

    $('div#header div.introduction svg.appearance-toggle').click(function() {
        let body = $('body');
        if (body.hasClass('dark-mode')) {
            body.removeClass('dark-mode');
            body.addClass('light-mode');
        } else {
            body.removeClass('light-mode');
            body.addClass('dark-mode');
        }
    });

    // Scroll events
    $(this).scroll(function() {
        const scrollTop = $(this).scrollTop();

        const activated = 'activated';
        let headerCaption = $('div#header p#headerCaption');
        let aboutCaption = $('div#about p#aboutCaption');
        
        if (scrollTop > header.height() / 2 && scrollTop < about.position().top) {
            if (!about.hasClass(activated)) {
                about.addClass(activated);

                aboutCaption.addClass(activeCaret);
            }
        }
    });
});
