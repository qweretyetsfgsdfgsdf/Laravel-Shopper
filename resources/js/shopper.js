/**
 * Shopper.js
 *
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using Laravel & React.
 *
 * @author Arthur Monney<arthur@shopperlabs.io>
 * @version 2.0.0
 * @since July 2019
 */

import "alpinejs";
import axios from "axios";

/**
 * Condition require for the shop initialization.
 */
if (document.getElementById('setting-configuration')) {
  require("@/src/pages/Settings/Configuration");
}

function toggleDarkMode() {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (localStorage.theme === 'dark' || (!'theme' in localStorage && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.querySelector('html').classList.add('dark');
  } else if (localStorage.theme === 'light') {
    document.querySelector('html').classList.add('light');
  }

// Whenever the user explicitly chooses light mode
  localStorage.theme = 'light';

// Whenever the user explicitly chooses dark mode
  localStorage.theme = 'dark';

// Whenever the user explicitly chooses to respect the OS preference
  localStorage.removeItem('theme');
}

toggleDarkMode();

/**
 * Custom HTML script code.
 * @type {HTMLElement}
 */
const element = document.getElementById("remove-item");
if (element) {
  const span = element.firstElementChild;
  const url = element.getAttribute("data-url");

  element.addEventListener("click", e => {
    e.preventDefault();
    span.classList.remove("hidden");
    axios
      .delete(url, {
        headers: {"X-Requested-With": "XMLHttpRequest"}
      })
      .then(response => {
        setTimeout(() => {
          window.location.href = response.data.redirect_url;
        }, 1000);
      });
  });
}
