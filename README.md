# Goodware Development — Company Website

A simple, no-build-tools website for Goodware Development: home page,
services, client reviews, a "Get a Quote" enquiry form, and a contact
section.

## Files

```
jackware-development/
  index.html       the whole page (content + structure)
  css/styles.css    all colours, fonts, spacing, layout
  js/script.js      the "Get a Quote" form logic
```

No build step, no npm install, no framework — open `index.html` in a
browser and it works.

## About the reviews

The two review cards (City Built Ltd and Nero Accounting Limited) use
placeholder wording — you confirmed the company names and 5-star ratings,
and short blurbs were written to match. Swap the text inside each
`<p class="review-text">` in `index.html` for the client's real words
whenever you have them. To add more reviews later, copy a whole
`.review-card` block and edit the stars, text and company name.

## Viewing it on your own computer

**Easiest:** double-click `index.html` — it opens directly in your browser.

**Slightly better (recommended before showing a client):** run a tiny local
server so it behaves exactly like it will once deployed:

```
cd jackware-development
npx serve
```

Then open the address it prints (usually `http://localhost:3000`).

## Putting it online (free)

1. Create a free account at [vercel.com](https://vercel.com) or
   [netlify.com](https://netlify.com).
2. Drag the `jackware-development` folder onto their dashboard (both
   support drag-and-drop deploys — no command line needed).
3. You get a live link instantly, e.g. `jackware-development.vercel.app`.
4. Once you're ready to go live properly, buy a domain (e.g. via
   [namecheap.com](https://namecheap.com), ~£8–12/year) and point it at
   the Vercel/Netlify deployment — both platforms walk you through this
   in their dashboard.

## Making the "Get a Quote" form actually work

Right now the form is **demo-only**: it shows an on-screen confirmation
but doesn't send anything anywhere yet.

**Formspree (fastest, ~10 minutes)**
1. Create a free account at [formspree.io](https://formspree.io).
2. Create a new form, copy the endpoint URL it gives you.
3. In `index.html`, change the `<form id="quote-form">` tag to add
   `action="https://formspree.io/f/yourFormId" method="POST"`.
4. Remove the `event.preventDefault()` line in `js/script.js` (or keep
   it and let Formspree submit in the background — their docs show both
   approaches).
5. Every enquiry now arrives as an email at your inbox.
