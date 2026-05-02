# Google Sheets Lead Capture

The contact form posts to `/api/leads`. In production, set `LEAD_WEBHOOK_URL` in Vercel to a Google Apps Script web app URL.

## Apps Script

Create a Google Sheet, open **Extensions > Apps Script**, and use this script:

```js
const SHEET_NAME = "Leads";
const NOTIFY_EMAIL = "sahilaharia@gmail.com";

function doPost(e) {
  const payload = JSON.parse(e.postData.contents);
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME)
    || SpreadsheetApp.getActiveSpreadsheet().insertSheet(SHEET_NAME);

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["Submitted At", "Name", "Email", "Interest", "Message", "Page", "Source"]);
  }

  sheet.appendRow([
    payload.submittedAt || new Date().toISOString(),
    payload.name || "",
    payload.email || "",
    payload.interest || "",
    payload.message || "",
    payload.page || "",
    payload.source || "sahilharia.com",
  ]);

  MailApp.sendEmail({
    to: NOTIFY_EMAIL,
    subject: `New portfolio lead: ${payload.name || "Website visitor"}`,
    body: [
      `Name: ${payload.name || ""}`,
      `Email: ${payload.email || ""}`,
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
