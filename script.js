document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.animate-fade, .animate-slide');

    function checkSlide() {
        elements.forEach(element => {
            const slideInAt = (window.scrollY + window.innerHeight) - element.offsetHeight / 2;
            const elementBottom = element.offsetTop + element.offsetHeight;
            const isHalfShown = slideInAt > element.offsetTop;
            const isNotScrolledPast = window.scrollY < elementBottom;

            if (isHalfShown && isNotScrolledPast) {
                element.classList.add('active');
            } else {
                element.classList.remove('active'); // Removed this line to keep animation
            }
        });
    }

    window.addEventListener('scroll', checkSlide);
    checkSlide(); // Initial check
});