                const hamburger = document.querySelector(".hamburger-menu");
                const mobileNav = document.querySelector(".mobile-menu");
                const mobileNavItemLink = document.querySelectorAll(".mobile-nav-item-link");

                hamburger.addEventListener ("click", () => {
                    hamburger.classList.toggle ("active");
                    hamburger.classList.toggle ("inactive");
                    mobileNav.classList.toggle ("active");
                });
                
                mobileNavItemLink.forEach(item => {
                    item.addEventListener("click", () => {
                    console.log("ciao");
                    hamburger.classList.remove("active");
                    hamburger.classList.add("inactive");
                    mobileNav.classList.remove("active");
                    });
                });