// زر نسخ الديسكورد
function copyDiscord() {
    navigator.clipboard.writeText("w.78");
    alert('تم نسخ اسم مستخدم ديسكورد: w.78');
}

// Intersection Observer for scroll-triggered fade-up animations
document.addEventListener("DOMContentLoaded", function() {
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });
});
