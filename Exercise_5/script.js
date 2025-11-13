function setupTabs() {
  document.querySelectorAll(".tabs__button").forEach((button) => {
    button.addEventListener("click", () => {
      const sideBar = button.parentElement;
      const tabsContainer = sideBar.parentElement;
      const tabNumber = button.dataset.forTab;
      const tabToActivate = tabsContainer.querySelector(`.tabs__content[data-tab="${tabNumber}"]`);

      // deactivates all buttons
      sideBar.querySelectorAll(".tabs__button").forEach((btn) => {
        btn.classList.remove("tabs__button--active");
      });

      // deactivates all tabs
      tabsContainer.querySelectorAll(".tabs__content").forEach((tab) => {
        tab.classList.remove("tabs__content--active");
      });

      // activates current button + tab
      button.classList.add("tabs__button--active");
      tabToActivate.classList.add("tabs__content--active");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupTabs();
});