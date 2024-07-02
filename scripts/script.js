        document.addEventListener("DOMContentLoaded", function () {
            const burgerMenu = document.getElementById('burger-menu');
            const mobileNav = document.getElementById('mobile-nav');

            burgerMenu.addEventListener('click', function () {
                document.body.classList.toggle('mobile-nav-open');
            });

            const mobileLinks = document.querySelectorAll('#mobile-nav a');

            mobileLinks.forEach(link => {
                link.addEventListener('click', function (e) {
                    e.preventDefault();

                    const targetId = this.getAttribute('href').substring(1);
                    const targetElement = document.getElementById(targetId);

                    if (targetElement) {
                        const offset = targetElement.offsetTop - 50; // Adjust for header height
                        window.scrollTo({
                            top: offset,
                            behavior: 'smooth'
                        });

                        // Hide mobile nav after clicking
                        document.body.classList.remove('mobile-nav-open');
                    }
                });
            });
        });