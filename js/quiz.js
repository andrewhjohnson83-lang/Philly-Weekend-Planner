// "Build Your Weekend" quiz — home page main interactive feature.
// Question 1 picks which pre-built plan to show. Question 2 only changes
// the budget note text. Question 3 decides how many stops to display.
const FOCUS_LABELS = {
  founding: "history and landmarks",
  arts: "art and scenery",
  flavor: "food and neighborhoods",
};

const BUDGET_LABELS = {
  budget: "an affordable",
  balanced: "a balanced",
  premium: "a premium",
};

const PACE_LABELS = {
  relaxed: "relaxed, with just a stop or two each day",
  packed: "packed, with back-to-back stops",
};

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("quiz-form");
  const resultsContainer = document.getElementById("quiz-results");
  if (!form || !resultsContainer) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const focus = form.querySelector('input[name="focus"]:checked');
    const budget = form.querySelector('input[name="budget"]:checked');
    const pace = form.querySelector('input[name="pace"]:checked');

    let hasError = false;
    [
      { field: focus, name: "focus" },
      { field: budget, name: "budget" },
      { field: pace, name: "pace" },
    ].forEach(function (item) {
      const errorEl = form.querySelector('[data-error-for="' + item.name + '"]');
      if (!item.field) {
        hasError = true;
        if (errorEl) errorEl.classList.add("is-visible");
      } else if (errorEl) {
        errorEl.classList.remove("is-visible");
      }
    });

    if (hasError) {
      resultsContainer.innerHTML = "";
      return;
    }

    const plan = WEEKEND_PLANS[focus.value];
    const budgetNote = BUDGET_NOTES[budget.value];
    const stopCount = pace.value === "relaxed" ? 2 : plan.saturday.length;

    const saturdayStops = plan.saturday.slice(0, stopCount);
    const sundayStops = plan.sunday.slice(0, stopCount);

    const reason =
      "Why this fits: you care most about " + FOCUS_LABELS[focus.value] +
      ", you're working with " + BUDGET_LABELS[budget.value] + " budget, and you like your days " +
      PACE_LABELS[pace.value] + ". That's exactly what " + plan.name + " is built around.";

    resultsContainer.innerHTML =
      '<div class="result-card">' +
      "<h3>" + plan.name + "</h3>" +
      '<p class="result-tagline">' + plan.tagline + "</p>" +
      '<p class="result-reason">' + reason + "</p>" +
      '<div class="result-columns">' +
      "<div><h4>Saturday</h4><ul>" +
      saturdayStops.map(function (stop) { return "<li>" + stop + "</li>"; }).join("") +
      "</ul></div>" +
      "<div><h4>Sunday</h4><ul>" +
      sundayStops.map(function (stop) { return "<li>" + stop + "</li>"; }).join("") +
      "</ul></div>" +
      "</div>" +
      '<p class="result-budget-note">' + budgetNote + "</p>" +
      '<div class="cta-row">' +
      '<a href="' + plan.anchor + '" class="btn btn-primary">See Full Itinerary</a>' +
      '<button type="button" class="btn btn-secondary" id="quiz-retake">Retake Quiz</button>' +
      "</div>" +
      "</div>";

    resultsContainer.scrollIntoView({ behavior: "smooth", block: "nearest" });

    const retakeBtn = document.getElementById("quiz-retake");
    if (retakeBtn) {
      retakeBtn.addEventListener("click", function () {
        form.reset();
        resultsContainer.innerHTML = "";
        form.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  });
});
