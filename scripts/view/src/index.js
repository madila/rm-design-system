//import "./album-cover.js";
import "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js";

const bodyScrolled = () => {
    const { scrollY, innerHeight } = window;

    const isScrolled = scrollY > 150;

    if(window.hasScrolled !== isScrolled) {
        window.hasScrolled = isScrolled;
        const {requestAnimationFrame} = window;
        requestAnimationFrame(() => {
            document.documentElement.classList.toggle('scrolled', isScrolled);
        })
    }

};

const resetHeader = () => {
    const stickyHeader = document.querySelector('.is-position-sticky:has(header)');
    if(stickyHeader) {
        document.documentElement.style.setProperty('--wp--custom--header-height', stickyHeader.offsetHeight + 'px');
    }
};


document.body.classList.add('wp-ready');

window.addEventListener('resize', resetHeader, {
    passive: true
});

window.addEventListener('scroll', bodyScrolled, {
    passive: true
});

resetHeader();
