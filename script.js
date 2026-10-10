
"use strict";

/* ========================================
   VS CODE AULAS — JAVASCRIPT
   ======================================== */

/*
  TELEGRAM CONFIGURATION

  Add your Telegram phone number below.

  Include the international country code.
  Do not use +, spaces, or hyphens.

  Example: "128XXXXXX"
*/

const TELEGRAM_PHONE = "12899080003";

/* ========================================
   TELEGRAM MESSAGE
   ======================================== */

function createOrderMessage(packageName, price) {
  return (
    `Hi, I want access to ${packageName} for $${price}. ` +
    `Please send me the payment options.`
  );
}

/* ========================================
   TELEGRAM REDIRECT
   ======================================== */

function redirectToTelegram(message) {
  const phone = TELEGRAM_PHONE.replace(/\D/g, "");

  if (!phone || TELEGRAM_PHONE.includes("X")) {
    console.log(
      "Telegram message:",
      message
    );

    alert(
      "Add your Telegram phone number inside script.js before activating checkout."
    );

    return;
  }

  const encodedMessage = encodeURIComponent(message);

  const telegramURL =
    `tg://resolve?phone=${phone}&text=${encodedMessage}`;

  window.location.href = telegramURL;
}

/* ========================================
   BUY NOW BUTTONS
   ======================================== */

function initializeBuyButtons() {
  const buyButtons = document.querySelectorAll(".buy-button");

  buyButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const packageName = button.dataset.package;
      const price = button.dataset.price;

      if (!packageName || !price) {
        console.error("Package information is missing.");
        return;
      }

      const message = createOrderMessage(
        packageName,
        price
      );

      redirectToTelegram(message);
    });
  });
}

/* ========================================
   AUTOMATIC FOOTER YEAR
   ======================================== */

function updateFooterYear() {
  const yearElement =
    document.getElementById("currentYear");

  if (yearElement) {
    yearElement.textContent =
      new Date().getFullYear();
  }
}

/* ========================================
   VIDEO PLAYER
   ======================================== */

function initializeVideoPlayer() {
  const video =
    document.getElementById("previewVideo");

  if (!video) {
    return;
  }

  video.addEventListener("error", () => {
    console.error(
      "Unable to load the preview video."
    );
  });
}

/* ========================================
   INITIALIZE PAGE
   ======================================== */

document.addEventListener("DOMContentLoaded", () => {
  initializeBuyButtons();
  updateFooterYear();
  initializeVideoPlayer();
});
