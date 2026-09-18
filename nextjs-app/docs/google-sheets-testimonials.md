# Google Sheets Testimonials Integration

This document explains how to set up Google Sheets as a data source for testimonials on your website.

---

## Step 1: Create Google Sheet

Create a new Google Sheet with the following columns:

| Column | Header Name | Description | Example Values |
|--------|-------------|-------------|----------------|
| A | `name` | Customer name | "John Doe" |
| B | `location` | City/Province | "Toronto, ON" |
| C | `serviceType` | Type of insurance | "Term Life", "Whole Life", "Critical Illness", "Disability", "Travel", "Health", "Investment" |
| D | `contentType` | Text or Video testimonial | "text" or "video" |
| E | `testimonial` | The testimonial text | "Great service, very professional..." |
| F | `videoUrl` | YouTube/Vimeo URL (for video type) | "https://youtube.com/watch?v=..." |
| G | `rating` | Star rating (1-5) | 5 |
| H | `date` | Date of testimonial | "2024-01-15" |
| I | `status` | Active or Inactive | "active" or "inactive" |
| J | `avatarUrl` | Optional profile image URL | "https://..." (leave empty for initials) |

### Example Data Row:
```
John Doe | Toronto, ON | Term Life | text | Excellent service! They helped me find the perfect policy for my family. | | 5 | 2024-03-15 | active |
```

---

## Step 2: Apps Script Setup

1. Open your Google Sheet
2. Go to **Extensions → Apps Script**
3. Delete any existing code
4. Paste the code from `apps-script-code.js` (in this folder)
5. Click **Save** (Ctrl+S)
6. Click **Deploy → New deployment**
7. Select **Web app**
8. Set:
   - Description: "Testimonials API"
   - Execute as: "Me"
   - Who has access: "Anyone"
9. Click **Deploy**
10. Copy the Web App URL

---

## Step 3: Configure Website

Add the Web App URL to your environment variables:

```env
# .env.local
NEXT_PUBLIC_TESTIMONIALS_SHEET_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

---

## How It Works

1. **You edit the spreadsheet** - Add/remove/update testimonials anytime
2. **Apps Script serves JSON** - Converts sheet data to API format
3. **Website fetches data** - Testimonials component calls the API
4. **Only active items show** - Inactive testimonials are filtered out

---

## Column Details

### `serviceType` Options
Use these values for filtering:
- `Term Life`
- `Whole Life`
- `Universal Life`
- `Critical Illness`
- `Disability`
- `Travel`
- `Visitor`
- `Health`
- `Investment`

### `contentType` Options
- `text` - Shows the testimonial text
- `video` - Shows embedded video player with optional text

### `status` Options
- `active` - Shows on website
- `inactive` - Hidden from website (useful for drafts or expired testimonials)

### `rating`
Number from 1 to 5 for star display.

---

## Troubleshooting

### "CORS Error"
Make sure the Apps Script is deployed with "Anyone" access.

### "No testimonials showing"
1. Check if any rows have `status` = "active"
2. Verify the Web App URL in `.env.local`
3. Check browser console for errors

### "Changes not appearing"
Google Sheets API may cache for a few minutes. Wait 2-3 minutes or redeploy the Apps Script.

---

## Security Notes

- The spreadsheet data is read-only via the API
- Only columns specified in the script are exposed
- Sensitive data should not be stored in the sheet
