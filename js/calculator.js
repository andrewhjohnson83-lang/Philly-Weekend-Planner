// Simple weekend budget calculator (secondary feature) — Weekend Plans page.
// Total = people x (activities per person + food per person) + transportation + extras.
document.addEventListener("DOMContentLoaded", function () {
  const peopleInput = document.getElementById("calc-people");
  const activitiesInput = document.getElementById("calc-activities");
  const foodInput = document.getElementById("calc-food");
  const transportInput = document.getElementById("calc-transportation");
  const extrasInput = document.getElementById("calc-extras");
  const totalEl = document.getElementById("calc-total");

  if (!peopleInput || !totalEl) return;

  const currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

  function calculate() {
    const people = Math.max(1, parseFloat(peopleInput.value) || 0);
    const activities = Math.max(0, parseFloat(activitiesInput.value) || 0);
    const food = Math.max(0, parseFloat(foodInput.value) || 0);
    const transportation = Math.max(0, parseFloat(transportInput.value) || 0);
    const extras = Math.max(0, parseFloat(extrasInput.value) || 0);

    const total = people * (activities + food) + transportation + extras;
    totalEl.textContent = currency.format(total);
  }

  [peopleInput, activitiesInput, foodInput, transportInput, extrasInput].forEach(function (input) {
    input.addEventListener("input", calculate);
  });

  calculate();
});
