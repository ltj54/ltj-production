(() => {
    "use strict";

    const currentYear = document.getElementById("current-year");
    if (currentYear) currentYear.textContent = String(new Date().getFullYear());

    const hero = document.querySelector(".home-page:not(.home-page--proposal) .home-hero");
    if (hero) {
        const pageHeader = document.querySelector("body > header");
        const reducedMotion = globalThis.matchMedia("(prefers-reduced-motion: reduce)");
        let heroFrame = 0;

        function updateHeroSize() {
            const headerHeight = pageHeader ? pageHeader.getBoundingClientRect().height : 0;
            hero.style.setProperty("--home-nav-height", `${headerHeight}px`);
            const stickyHeight = headerHeight + hero.getBoundingClientRect().height + 16;
            document.documentElement.style.setProperty("--home-sticky-height", `${stickyHeight}px`);
        }

        function updateHeroProgress() {
            heroFrame = 0;
            const distance = Math.min(globalThis.innerHeight * 0.5, 320);
            const progress = Math.min(Math.max(globalThis.scrollY, 0) / distance, 1);
            hero.style.setProperty("--hero-progress", String(progress));
        }

        function scheduleHeroProgress() {
            if (!heroFrame) heroFrame = globalThis.requestAnimationFrame(updateHeroProgress);
        }

        function configureHeroMotion() {
            globalThis.removeEventListener("scroll", scheduleHeroProgress);
            globalThis.removeEventListener("resize", scheduleHeroProgress);
            globalThis.cancelAnimationFrame(heroFrame);
            heroFrame = 0;
            hero.style.setProperty("--hero-progress", reducedMotion.matches ? "1" : "0");

            if (!reducedMotion.matches) {
                globalThis.addEventListener("scroll", scheduleHeroProgress, { passive: true });
                globalThis.addEventListener("resize", scheduleHeroProgress);
                updateHeroProgress();
            }
        }

        reducedMotion.addEventListener("change", configureHeroMotion);
        configureHeroMotion();
        const heroSizeObserver = new ResizeObserver(updateHeroSize);
        heroSizeObserver.observe(hero);
        if (pageHeader) heroSizeObserver.observe(pageHeader);
        updateHeroSize();
    }

    const modal = document.getElementById("contact-modal");
    const closeModalButton = document.getElementById("close-modal");
    if (!modal || !closeModalButton) return;

    let lastFocusedElement = null;
    document.querySelectorAll("[data-open-contact-modal]").forEach((button) => {
        button.addEventListener("click", () => {
            lastFocusedElement = button;
            modal.showModal();
            document.body.classList.add("modal-open");
            closeModalButton.focus();
        });
    });

    closeModalButton.addEventListener("click", () => modal.close());
    modal.addEventListener("click", (event) => {
        if (event.target === modal) modal.close();
    });
    // The native dialog handles Escape and keeps keyboard focus inside the form.
    modal.addEventListener("close", () => {
        document.body.classList.remove("modal-open");
        if (lastFocusedElement?.isConnected) lastFocusedElement.focus({ preventScroll: true });
    });

    const thankYouPopup = document.getElementById("thank-you-popup");
    const closeThankYouButton = document.getElementById("close-thank-you");
    let thankYouTimeout;

    function hideThankYou() {
        if (thankYouPopup) thankYouPopup.classList.remove("open");
        globalThis.clearTimeout(thankYouTimeout);
    }

    function showThankYou() {
        if (!thankYouPopup) return;
        globalThis.clearTimeout(thankYouTimeout);
        thankYouPopup.classList.add("open");
        thankYouTimeout = globalThis.setTimeout(hideThankYou, 3000);
    }

    if (closeThankYouButton) closeThankYouButton.addEventListener("click", hideThankYou);

    const contactForm = document.querySelector("[data-contact-form]");
    const formStatus = document.querySelector("[data-form-status]");
    if (!contactForm || !formStatus) return;

    const messages = document.documentElement.lang.startsWith("sv")
        ? {
            sending: "Skickar meddelandet…",
            error: "Meddelandet kunde inte skickas. Försök igen senare."
        }
        : {
            sending: "Sender meldingen…",
            error: "Meldingen kunne ikke sendes. Prøv igjen senere."
        };

    contactForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        const submitButton = contactForm.querySelector("button[type='submit']");
        if (submitButton?.disabled) return;

        formStatus.textContent = messages.sending;
        if (submitButton) submitButton.disabled = true;

        try {
            const response = await fetch(contactForm.action, {
                method: "POST",
                body: new FormData(contactForm),
                headers: { "Accept": "application/json" }
            });

            if (response.ok) {
                contactForm.reset();
                formStatus.textContent = "";
                modal.close();
                showThankYou();
            } else {
                formStatus.textContent = messages.error;
            }
        } catch {
            formStatus.textContent = messages.error;
        } finally {
            if (submitButton) submitButton.disabled = false;
        }
    });
})();
