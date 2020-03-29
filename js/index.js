const nav = document.querySelector("nav");
const showcase = document.querySelector("#showcase");

const showcaseOptions = {
    rootMargin: "-750px 0px 0px 0px"
};

const showcaseObserver = new IntersectionObserver(function (entries, showcaseObserver) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            nav.style.marginTop = "0";
        } else {
            nav.style.marginTop = "-8vh";
        }
    });
}, showcaseOptions);

showcaseObserver.observe(showcase);