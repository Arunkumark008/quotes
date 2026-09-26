import { NextResponse } from "next/server";

// DCW Financial Inc. Place ID from Google Maps
const DCW_PLACE_ID = "ChIJVaEV7SgZyUwRg9rLg5Z4G0c";

export async function GET() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;
  
  if (!apiKey) {
    return NextResponse.json({ 
      success: false,
      error: "API key not configured" 
    }, { status: 500 });
  }

  try {
    // Fetch place details including reviews using the known Place ID
    const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${DCW_PLACE_ID}&fields=name,rating,user_ratings_total,reviews,formatted_address,url,photos&key=${apiKey}`;
    
    const detailsRes = await fetch(detailsUrl, {
      next: { revalidate: 3600 } // Cache for 1 hour to minimize API calls
    });
    const detailsData = await detailsRes.json();

    // Check for API errors
    if (detailsData.status === "REQUEST_DENIED") {
      return NextResponse.json({ 
        success: false, 
        error: "API request denied. Please enable billing on Google Cloud Console.",
        status: detailsData.status,
        message: detailsData.error_message
      });
    }

    if (detailsData.status !== "OK") {
      return NextResponse.json({ 
        success: false, 
        error: `API error: ${detailsData.status}`,
        message: detailsData.error_message || "Unknown error"
      });
    }

    if (detailsData.result) {
      // Format reviews with photo URLs
      const reviews = (detailsData.result.reviews || []).map((review: {
        author_name: string;
        author_url?: string;
        profile_photo_url?: string;
        rating: number;
        relative_time_description: string;
        text: string;
        time: number;
      }) => ({
        author_name: review.author_name,
        author_url: review.author_url || "",
        profile_photo_url: review.profile_photo_url || "",
        rating: review.rating,
        relative_time_description: review.relative_time_description,
        text: review.text,
        time: review.time,
      }));

      return NextResponse.json({
        success: true,
        data: {
          name: detailsData.result.name,
          rating: detailsData.result.rating,
          totalReviews: detailsData.result.user_ratings_total,
          reviews: reviews,
          address: detailsData.result.formatted_address,
          url: detailsData.result.url,
        },
      });
    }

    return NextResponse.json({ 
      success: false, 
      error: "Place details not found"
    });
  } catch (error) {
    console.error("Google Places API error:", error);
    return NextResponse.json({ 
      success: false, 
      error: "Failed to fetch reviews" 
    }, { status: 500 });
  }
}
