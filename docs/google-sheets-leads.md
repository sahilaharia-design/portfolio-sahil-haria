# Google Sheets Lead Capture

The contact form posts to `/api/leads`. In production, set `LEAD_WEBHOOK_URL` in Vercel to a Google Apps Script web app URL.

## Apps Script

Create a Google Sheet, open **Extensions > Apps Script**, and use this script:

```js
const SHEET_NAME = "Leads";
const NOTIFY_EMAIL = "sahilaharia@gmail.com";
const HEADERS = ["Submitted At", "Name", "Email", "Phone", "Interest", "Message", "Page", "Source"];

function isSpam(payload) {
  if (payload.website && String(payload.website).trim()) return true;
  if (!payload.name || !payload.email || !payload.phone || !payload.message) return true;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) return true;
  if (String(payload.phone).replace(/\D/g, "").length < 7) return true;

  if (payload.formStartedAt) {
    const startedAt = new Date(payload.formStartedAt).getTime();
    if (!Number.isNaN(startedAt) && Date.now() - startedAt < 2500) return true;
  }

  return false;
}

function doPost(e) {
  const payload = JSON.parse(e.postData.contents);
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME)
    || SpreadsheetApp.getActiveSpreadsheet().insertSheet(SHEET_NAME);

  if (isSpam(payload)) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: true, skipped: true }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
  }

  const row = {
    "Submitted At": payload.submittedAt || new Date().toISOString(),
    "Name": payload.name || "",
    "Email": payload.email || "",
    "Phone": payload.phone || "",
    "Interest": payload.interest || "",
    "Message": payload.message || "",
    "Page": payload.page || "",
    "Source": payload.source || "sahilharia.com",
  };

  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  sheet.appendRow(headers.map((header) => row[header] || ""));

  MailApp.sendEmail({
    to: NOTIFY_EMAIL,
    subject: `New portfolio lead: ${payload.name || "Website visitor"}`,
    body: [
      `Name: ${payload.name || ""}`,
      `Email: ${payload.email || ""}`,
      `Phone: ${payload.phone || ""}`,
      `Interest: ${payload.interest || ""}`,
      "",
      payload.message || "",
      "",
      `Page: ${payload.page || ""}`,
    ].join("\\n"),
  });

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

## Deploy

1. Deploy the script as a **Web app**.
2. Set access to **Anyone**.
3. Copy the Web app URL.
4. In Vercel, add it as `LEAD_WEBHOOK_URL`.
5. Redeploy the project.

Until `LEAD_WEBHOOK_URL` is set, the form gracefully opens an email draft instead.
