// Multi-attribute activity filter + live keyword search — Explore Activities page.
document.addEventListener("DOMContentLoaded", function () {
  const grid = document.getElementById("activity-grid");
  const emptyState = document.getElementById("empty-state");
  const resultsCount = document.getElementById("results-count");
  const searchInput = document.getElementById("filter-search");
  const categorySelect = document.getElementById("filter-category");
  const priceSelect = document.getElementById("filter-price");
  const settingSelect = document.getElementById("filter-setting");
  const resetBtn = document.getElementById("filter-reset");

  if (!grid || typeof ACTIVITIES === "undefined") return;

  function activityCardHTML(activity) {
    return (
      '<div class="card">' +
      '<img src="' + activity.image + '" alt="' + activity.name + '" class="card-image" loading="lazy" />' +
      '<div class="card-body">' +
      "<h3>" + activity.name + "</h3>" +
      '<div class="card-meta">' +
      '<span class="tag tag-price">' + activity.price + "</span>" +
      '<span class="tag tag-setting">' + activity.setting + "</span>" +
      '<span class="tag">' + CATEGORY_LABELS[activity.category] + "</span>" +
      "</div>" +
      '<p class="description">' + activity.description + "</p>" +
      '<p class="description"><strong>' + activity.neighborhood + "</strong> &middot; Best for " + activity.bestFor.join(", ") + "</p>" +
      "</div>" +
      "</div>"
    );
  }

  function getFilteredActivities() {
    const keyword = searchInput.value.trim().toLowerCase();
    const category = categorySelect.value;
    const price = priceSelect.value;
    const setting = settingSelect.value;

    return ACTIVITIES.filter(function (activity) {
      const matchesCategory = category === "all" || activity.category === category;
      const matchesPrice = price === "all" || String(activity.priceTier) === price;
      const matchesSetting = setting === "all" || activity.setting === setting;

      const searchable = (
        activity.name + " " + activity.description + " " + activity.neighborhood + " " + activity.tags.join(" ")
      ).toLowerCase();
      const matchesKeyword = keyword === "" || searchable.includes(keyword);

      return matchesCategory && matchesPrice && matchesSetting && matchesKeyword;
    });
  }

  function render() {
    const filtered = getFilteredActivities();

    grid.innerHTML = filtered.map(activityCardHTML).join("");
    resultsCount.textContent = "Showing " + filtered.length + " of " + ACTIVITIES.length + " activities";
    emptyState.classList.toggle("is-visible", filtered.length === 0);
  }

  [searchInput].forEach(function (el) { el.addEventListener("input", render); });
  [categorySelect, priceSelect, settingSelect].forEach(function (el) { el.addEventListener("change", render); });

  resetBtn.addEventListener("click", function () {
    searchInput.value = "";
    categorySelect.value = "all";
    priceSelect.value = "all";
    settingSelect.value = "all";
    render();
  });

  render();
});
