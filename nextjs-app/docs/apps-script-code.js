/**
 * Google Apps Script - Testimonials API
 * 
 * SETUP INSTRUCTIONS:
 * 1. Open your Google Sheet with testimonials
 * 2. Go to Extensions → Apps Script
 * 3. Delete any existing code and paste this entire file
 * 4. Click Save (Ctrl+S)
 * 5. Click Deploy → New deployment
 * 6. Select "Web app"
 * 7. Set "Who has access" to "Anyone"
 * 8. Click Deploy and copy the URL
 * 9. Add URL to your .env.local file
 */

// Main function that handles GET requests
function doGet(e) {
  try {
    // Get the active spreadsheet and first sheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = sheet.getDataRange().getValues();
    
    // First row is headers
    const headers = data[0];
    const rows = data.slice(1);
    
    // Convert to array of objects
    const testimonials = rows
      .map((row, index) => {
        const obj = {};
        headers.forEach((header, i) => {
          obj[header.toString().trim()] = row[i];
        });
        obj.id = index + 1; // Add unique ID
        return obj;
      })
      // Filter only active testimonials
      .filter(item => 
        item.status && 
        item.status.toString().toLowerCase() === 'active'
      )
      // Clean up the data
      .map(item => ({
        id: item.id,
        name: item.name || '',
        location: item.location || '',
        serviceType: item.serviceType || '',
        contentType: item.contentType || 'text',
        testimonial: item.testimonial || '',
        videoUrl: item.videoUrl || '',
        rating: parseInt(item.rating) || 5,
        date: item.date ? formatDate(item.date) : '',
        avatarUrl: item.avatarUrl || ''
      }));
    
    // Return JSON response with CORS headers
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        count: testimonials.length,
        data: testimonials,
        lastUpdated: new Date().toISOString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString(),
        data: []
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Helper function to format dates
function formatDate(date) {
  if (!date) return '';
  
  // If it's already a Date object
  if (date instanceof Date) {
    return Utilities.formatDate(date, Session.getScriptTimeZone(), 'yyyy-MM-dd');
  }
  
  // If it's a string, return as-is
  return date.toString();
}

// Test function - run this to verify your sheet is set up correctly
function testGetTestimonials() {
  const result = doGet();
  const json = JSON.parse(result.getContent());
  Logger.log('Found ' + json.count + ' active testimonials');
  Logger.log(JSON.stringify(json, null, 2));
}
