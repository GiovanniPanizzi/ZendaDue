                const hamburger = document.querySelector(".hamburger-menu");
                const mobileNav = document.querySelector(".mobile-menu");
                const mobileNavItemLink = document.querySelectorAll(".mobile-nav-item-link");
                let isActive = false;

                const handleClick = () => {
                    if (!isActive) {
                        hamburger.classList.add("active");
                        mobileNav.classList.add("active");
                    } else {        
                        mobileNav.classList.add("close");
                        setTimeout(() => {
                            mobileNav.classList.remove("close");
                        }, 500);
                
                        hamburger.classList.remove("active");
                        mobileNav.classList.remove("active");
                    }
                    isActive = !isActive;
                };

                hamburger.addEventListener("click", handleClick);
                
                mobileNavItemLink.forEach(item => {
                    item.addEventListener("click", () => {
                    hamburger.classList.remove("active");
                    mobileNav.classList.remove("active");
                    });
                });