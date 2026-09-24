import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;
  
  if (!apiKey) {
    return NextResponse.json({ error: "API key not configured" }, { status: 500 });
  }

  try {
    // Search for DCW Financial Inc. in Montreal
    const searchUrl = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=DCW%20Financial%20Inc%20Montreal&inputtype=textquery&fields=place_id,name,formatted_address&key=${apiKey}`;
    
    const searchRes = await fetch(searchUrl);
    const searchData = await searchRes.json();
    
    let placeId = "";
    if (searchData.candidates && searchData.candidates.length > 0) {
      placeId = searchData.candidates[0].place_id;
    }

    if (!placeId) {
      return NextResponse.json({ 
        success: false, 
        error: "Place not found",
        debug: searchData
      });
    }

    // Now fetch place details including reviews
    const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews,formatted_address,url&key=${apiKey}`;
    
    const detailsRes = await fetch(detailsUrl);
    const detailsData = await detailsRes.json();

    if (detailsData.result) {
      return NextResponse.json({
        success: true,
        data: {
          name: detailsData.result.name,
          rating: detailsData.result.rating,
          totalReviews: detailsData.result.user_ratings_total,
          reviews: detailsData.result.reviews || [],
          address: detailsData.result.formatted_address,
          url: detailsData.result.url,
        },
      });
    }

    return NextResponse.json({ 
      success: false, 
      error: "Place details not found",
      debug: { searchData, detailsData }
    });
  } catch (error) {
    console.error("Google Places API error:", error);
    return NextResponse.json({ 
      success: false, 
      error: "Failed to fetch reviews" 
    }, { status: 500 });
  }
}
