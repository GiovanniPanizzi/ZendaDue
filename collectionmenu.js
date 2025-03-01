                const collectionMenu = document.querySelector(".collection-menu");
                const collectionli = document.querySelector("#collection-li");
                let isOverMenu = false;
                collectionli.addEventListener ("mouseenter", () => {
                collectionMenu.classList.add ("active");
                });
                collectionli.addEventListener("mouseleave", () => {
                    setTimeout(() => {
                        if(!isOverMenu){
                            collectionMenu.classList.remove("active");
                        }
                    }, 100);
                });
                
                collectionMenu.addEventListener ("mouseenter", () => {
                isOverMenu = true;
                });
                
                collectionMenu.addEventListener ("mouseleave", () => {
                isOverMenu = false;
                collectionMenu.classList.remove("active");
                });