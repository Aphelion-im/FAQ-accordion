"use strict";

window.addEventListener("load", () => {

    const accordionPanels = document.querySelectorAll(".icon");

    for (const accordionPanel of accordionPanels) {
        accordionPanel.addEventListener("click", function (e) {
            this.parentNode.classList.toggle("active");
            const panel = this.parentNode.nextElementSibling;
            toggleIcon(e);
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }

    function toggleIcon(e) {
        e.target.classList.toggle("plus");
        e.target.classList.toggle("minus");
    }
});

