const COACH_CONFIG = {
  whatsappNumber: "1234567890",
  whatsappMessage: "Hello Sarah! I'm interested in the 90-day transformation program. Can you tell me more?",
};

function openWhatsApp(message) {
  const url = `https://wa.me/${COACH_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

document.querySelectorAll(".wa-trigger").forEach((button) => {
  button.addEventListener("click", () => {
    openWhatsApp(COACH_CONFIG.whatsappMessage);
  });
});

const leadForm = document.querySelector("#lead-form");
if (leadForm) {
  leadForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(leadForm);
    const name = (data.get("name") || "").toString().trim();
    const phone = (data.get("phone") || "").toString().trim();
    const message = `Hello Sarah! I want a free consultation. Name: ${name}. WhatsApp: ${phone}.`;
    openWhatsApp(message);
  });
}

const contactForm = document.querySelector("#contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(contactForm);
    const fullName = (data.get("fullName") || "").toString().trim();
    const goal = (data.get("goal") || "").toString().trim();
    const details = (data.get("details") || "").toString().trim();

    const message = [
      "Hello Sarah! I'd like to apply for your program.",
      `Name: ${fullName}`,
      `Goal: ${goal}`,
      `Details: ${details || "N/A"}`,
    ].join(" ");

    openWhatsApp(message);
  });
}
