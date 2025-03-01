                const hamburger = document.querySelector(".hamburger-menu");
                const mobileNav = document.querySelector(".mobile-menu");
                const mobileNavItemLink = document.querySelectorAll(".mobile-nav-item-link");
                let isActive = mobileNav.classList.contains ("active");
                let isNotActive = mobileNav.classList.contains ("inactive");

                hamburger.addEventListener ("click", () => {

                    if(isActive && !isNotActive){
                        mobileNav.classList.add("inactive");
                        mobileNav.classList.remove("active");
                        setTimeout(() => mobileNav.classList.remove("inactive"), 1000);
                    }
                    else{
                        mobileNav.classList.add("active");
                        mobileNav.classList.remove("inactive");

                    }
                    isActive = !isActive;
                });
                
                mobileNavItemLink.forEach(item => {
                    item.addEventListener("click", () => {
                    hamburger.classList.remove("active");
                    hamburger.classList.add("inactive");
                    mobileNav.classList.remove("active");
                    mobileNav.classList.toggle ("inactive");
                    });
                });