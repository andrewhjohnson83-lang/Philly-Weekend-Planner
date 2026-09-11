// Required feature: contact form validation.
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const banner = document.getElementById("form-banner");
  if (!form || !banner) return;

  const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function setFieldError(fieldName, hasError) {
    const row = form.querySelector('[data-field="' + fieldName + '"]');
    if (row) row.classList.toggle("has-error", hasError);
  }

  function validate() {
    const name = form.querySelector("#name").value.trim();
    const email = form.querySelector("#email").value.trim();
    const weekendType = form.querySelector("#weekendType").value;
    const budget = form.querySelector("#budget").value;

    const nameValid = name.length >= 2;
    const emailValid = EMAIL_PATTERN.test(email);
    const weekendTypeValid = weekendType !== "";
    const budgetValid = budget !== "";

    setFieldError("name", !nameValid);
    setFieldError("email", !emailValid);
    setFieldError("weekendType", !weekendTypeValid);
    setFieldError("budget", !budgetValid);

    return nameValid && emailValid && weekendTypeValid && budgetValid;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const isValid = validate();

    if (!isValid) {
      banner.textContent = "Please fix the highlighted fields below and try again.";
      banner.className = "form-banner is-error";
      banner.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    const name = form.querySelector("#name").value.trim();

    banner.textContent = "Thanks, " + name.split(" ")[0] + "! We'll follow up on your custom weekend plan within 2 business days.";
    banner.className = "form-banner is-success";
    banner.scrollIntoView({ behavior: "smooth", block: "start" });

    form.reset();
    ["name", "email", "weekendType", "budget"].forEach(function (field) {
      setFieldError(field, false);
    });
  });

  // Clear a field's error state as soon as the visitor fixes it.
  ["name", "email", "weekendType", "budget"].forEach(function (fieldName) {
    const input = form.querySelector("#" + fieldName);
    if (!input) return;
    input.addEventListener("input", function () { setFieldError(fieldName, false); });
    input.addEventListener("change", function () { setFieldError(fieldName, false); });
  });
});
