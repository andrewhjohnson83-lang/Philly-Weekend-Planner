// FAQ accordion (optional third interactive feature) — About page.
// Uses event delegation on the accordion container so a single listener
// handles every question, and closes sibling panels when a new one opens.
document.addEventListener("DOMContentLoaded", function () {
  const accordion = document.getElementById("faq-accordion");
  if (!accordion) return;

  const items = accordion.querySelectorAll(".accordion-item");

  function closeItem(item) {
    const panel = item.querySelector(".accordion-panel");
    const trigger = item.querySelector(".accordion-trigger");
    item.classList.remove("is-open");
    trigger.setAttribute("aria-expanded", "false");
    panel.style.maxHeight = null;
  }

  function openItem(item) {
    const panel = item.querySelector(".accordion-panel");
    const trigger = item.querySelector(".accordion-trigger");
    item.classList.add("is-open");
    trigger.setAttribute("aria-expanded", "true");
    panel.style.maxHeight = panel.scrollHeight + "px";
  }

  accordion.addEventListener("click", function (event) {
    const trigger = event.target.closest(".accordion-trigger");
    if (!trigger) return;

    const clickedItem = trigger.closest(".accordion-item");
    const wasOpen = clickedItem.classList.contains("is-open");

    items.forEach(closeItem);

    if (!wasOpen) {
      openItem(clickedItem);
    }
  });
});
