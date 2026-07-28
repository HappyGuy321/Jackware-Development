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
