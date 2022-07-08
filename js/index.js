$(document).ready(function() {
    let body = $('body');
    let header = $('div#header');
    let about = $('div#about');
    let projects = $('div#projects');
    let navbar = $('div#navigationBar');

    // DEVICE THEME
    const match = window.matchMedia('(prefers-color-scheme: dark)').matches;
    body.addClass(match ? 'dark-mode' : 'light-mode');

    // CLICK EVENTS
    $('div#navHamburger').click(function() {
        let parent = $(this).parent();
        parent.toggleClass('active');
    });

    // Page title
    $('div#navigationBar > div.nav-container > h1.page-title').click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    });

    // Shortcut buttons
    // About shortcut button
    $('li.about-item, div.shortcut-btn.about-shortcut').click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: about.position().top - navbar.height()
        }, 800);
    });

    // Projects shortcut button
    $('li.projects-item, div.shortcut-btn.projects-shortcut').click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: projects.position().top - navbar.height()
        }, 800);
    });

    // Appearance toggle button (light-dark mode switch)
    $('div#header div.introduction svg.appearance-toggle').click(function() {
        if (body.hasClass('dark-mode')) {
            body.removeClass('dark-mode');
            body.addClass('light-mode');
        } else {
            body.removeClass('light-mode');
            body.addClass('dark-mode');
        }
    });

    // SCROLL EVENTS
    $(this).scroll(function() {
        const scrollTop = $(this).scrollTop();

        const activated = 'activated';
        let aboutCaption = $('div#about p#aboutCaption');
        let projectsCaption = $('div#projects p#projectsCaption');
        
        // About
        if (scrollTop > header.height() / 2 && scrollTop < about.position().top && !about.hasClass(activated)) {
            about.addClass(activated);
            aboutCaption.addClass(activeCaret);
        }
        // Projects
        else if (scrollTop > about.position().top + about.height() / 2 && !projects.hasClass(activated)) {
            projects.addClass(activated);
            projectsCaption.addClass(activeCaret);
        }
    });
});
