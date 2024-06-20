  function toggleMenu() {
            const secondHeader = document.querySelector('.second-header');
            secondHeader.classList.toggle('show-menu');
        }


 
    // Delayed display of content and images
    document.addEventListener('DOMContentLoaded', function() {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible'); // Replace with your CSS class for visible/displayed content
                    observer.unobserve(entry.target);
                }
            });
        }, {
            rootMargin: '0px',
            threshold: 0.2 // Adjust as needed, represents the percentage of the target's visibility needed to trigger the display
        });

        const elementsToAnimate = document.querySelectorAll('.animate-on-scroll'); // Replace with the class or selector of elements to animate

        elementsToAnimate.forEach(element => {
            observer.observe(element);
        });
    });

