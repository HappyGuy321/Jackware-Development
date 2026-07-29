// ===================== GET A QUOTE FORM =====================
// This is a demo form: it shows an on-screen confirmation but doesn't
// send the enquiry anywhere yet. See README.md to wire it up to a real
// inbox with Formspree.

document.getElementById("quote-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("quote-name").value;
  const company = document.getElementById("quote-company").value;
  const email = document.getElementById("quote-email").value;
  const phone = document.getElementById("quote-phone").value;
  const budgetSelect = document.getElementById("quote-budget");
  const budget = budgetSelect.options[budgetSelect.selectedIndex].text;

  let summary = `Thanks ${name}! `;
  if (company) summary += `We've noted your enquiry for ${company}. `;
  summary += `We'll reply to ${email} or call ${phone} shortly`;
  if (budgetSelect.value) summary += ` regarding your budget of ${budget}`;
  summary += `.`;

  document.getElementById("quote-summary").textContent = summary;
  document.getElementById("quote-result").hidden = false;
  document.getElementById("quote-form").reset();
  document.getElementById("quote-result").scrollIntoView({ behavior: "smooth", block: "center" });
});

// ===================== INTERACTIVE HERO DOTS =====================
// Moves a "spotlight" over the dot pattern so it lights up under the
// cursor. Position is passed to CSS via --mx/--my custom properties,
// which the .hero-dots-spot mask in css/styles.css reads.

const hero = document.querySelector(".hero");
if (hero) {
  hero.addEventListener("mousemove", function (event) {
    const rect = hero.getBoundingClientRect();
    const mx = ((event.clientX - rect.left) / rect.width) * 100;
    const my = ((event.clientY - rect.top) / rect.height) * 100;
    hero.style.setProperty("--mx", `${mx}%`);
    hero.style.setProperty("--my", `${my}%`);
  });
}
