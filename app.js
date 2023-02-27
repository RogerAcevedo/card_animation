// IMPORT GSAP PLUG IN
gsap.registerPlugin(Flip);

const links = document.querySelectorAll(".nav-item a");

const activeNav = document.querySelector(".active-nav");


// GIVE UNDERLINE TO LINKS 
links.forEach((link) => {
    link.addEventListener("click", () => {

        // TURN NAV TO ORIGINAL COLOR
        gsap.to(links, {color: "#997cb5" });

        // TURN NAV LINK TO DARKER COLOR ON CLICK
        if (document.activeElement === link) {
            gsap.to(link, {color: "#2e0854"});
        }

        // MOVE LINE FROM LINK TO LINK
        const state = Flip.getState(activeNav);
        link.appendChild(activeNav);
        Flip.from(state, {
            duration: 1.25,
            absolute: true,
            ease: 'elastic.out(1,0.5)',

        });
    });
});

// CARDS
const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {
    card.addEventListener("click", () => {
        // GET STATE
        const state = Flip.getState(cards);
    
    const isCardActive = card.classList.contains("active");
    cards.forEach((otherCard, otherIdx) => {
        otherCard.classList.remove("active");
        otherCard.classList.remove("is-inactive");
        if (!isCardActive && index !== otherIdx) {
            otherCard.classList.add("is-inactive");
        }
    });

    if (!isCardActive) card.classList.add("active");

        Flip.from(state, {
            duration:1,
            ease: "expo.out",
            absolute: true,
            // onComplete: () => {
            //     gsap.to('.card p', {y:500})

            // }
        });

    })
})