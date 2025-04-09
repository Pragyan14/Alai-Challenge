const accessToken = 'eyJhbGciOiJIUzI1NiIsImtpZCI6IldweTRON29pb3ZueDNMTnEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2VzY2hvdHRoamdsamJ4amVyY3puLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiI1OGU1YTc0ZS1jNGUyLTRlZDQtOTVkOS0yYTczMWZkMjZiNjEiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzQzOTY0MDU1LCJpYXQiOjE3NDM5NjA0NTUsImVtYWlsIjoiYXBwdXBhdGlkYXIxNEBnbWFpbC5jb20iLCJwaG9uZSI6IiIsImFwcF9tZXRhZGF0YSI6eyJwcm92aWRlciI6Imdvb2dsZSIsInByb3ZpZGVycyI6WyJnb29nbGUiXX0sInVzZXJfbWV0YWRhdGEiOnsiYXZhdGFyX3VybCI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0tvR0JJM3BJVFJsRG4waUVGbzVGTEtLVDVjRmhmVjM2V3RKaThlNUJuUHhJbERtUT1zOTYtYyIsImVtYWlsIjoiYXBwdXBhdGlkYXIxNEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZnVsbF9uYW1lIjoiQXBwdSBQYXRpZGFyIiwiaXNzIjoiaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tIiwibmFtZSI6IkFwcHUgUGF0aWRhciIsInBob25lX3ZlcmlmaWVkIjpmYWxzZSwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0tvR0JJM3BJVFJsRG4waUVGbzVGTEtLVDVjRmhmVjM2V3RKaThlNUJuUHhJbERtUT1zOTYtYyIsInByb3ZpZGVyX2lkIjoiMTEwNjQ3MzYwODY1MzA3NjkxODY2Iiwic3ViIjoiMTEwNjQ3MzYwODY1MzA3NjkxODY2In0sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoib2F1dGgiLCJ0aW1lc3RhbXAiOjE3NDM3ODI2MzV9XSwic2Vzc2lvbl9pZCI6IjcxMjJlMTc3LWU2NTQtNDczYS1hNzVmLTMzNTk4YWEzMGE0YyIsImlzX2Fub255bW91cyI6ZmFsc2V9.lNb9I6z18GgJODS3mBA02TA79EKVYqxpakGf0ejw40k';


// Create new slide 

try {
    let response = await axios.post(
        'https://alai-standalone-backend.getalai.com/add-slide',
        {
            presentation_id: presentationId,
            slide_order: 1,
            slide_content: slides[1]
        },
        {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        }
    );

    console.log('Slides Added:', response);

} catch (error) {

    console.error('Error:', error.message);

}


// get-calibration-sample-text

const headingText = "Pragyan";

try {
    let response = await axios.post(
        'https://alai-standalone-backend.getalai.com/get-calibration-sample-text',
        {
            presentation_id: presentationId, // presentationId coming from response of create-new-presentation (refer app.js)
            raw_context: headingText
        },
        {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        }
    );
    
    console.log("get-calibration-sample-text : ", response.data);
} catch (error) {
    console.error('Error:', error.message);
}

// Update Slide Data

try {
    const slideData = {
        id: slideId,  // slideId coming from response of create-new-presentation (refer app.js)
        active_variant_id: "605f1b05-485e-4149-861a-000ab23abf91",
        color_set_id: 0,
        created_at: new Date().toISOString(),
        presentation_id: presentationId,    // presentationId coming from response of create-new-presentation (refer app.js)
        presentation_context: "AI is transforming industries and enabling innovation in sectors like healthcare, finance, and transportation.",
        slide_context: "AI's impact on different industries",
        slide_instructions: "Explain AI advancements with examples",
        slide_order: 0,
        slide_outline: null,
        slide_status: "VARIANT_GENERATION_SELECTION",
        variants: [
          {
            id: "605f1b05-485e-4149-861a-000ab23abf91",
            slide_id: slideId,
            is_discarded: false,
            created_at: new Date().toISOString(),
            element_slide: {
              type: "AI_GENERATED_LAYOUT",
              elements: [
                [
                  {
                    type: "textbox",
                    id: crypto.randomUUID(),
                    array_index: 0,
                    content: "Pragyan Patidar\n# Thank You!\n",
                    background: { fill: null, outline: null },
                    dimensions: {
                      minHeight: 10,
                      gridColumnCount: 24,
                      height: 503,
                      horizontalAlignment: "center",
                      verticalAlignment: "middle",
                      paddingHorizontal: "auto",
                      paddingVertical: "auto",
                      minGridColumnCount: 2,
                      width: 1114,
                      height: 77,
                      marginBottom: 0,
                      shouldRecalculate: false,
                      widthFraction: 1
                    },
                    preset_type: "textbox_basic",
                    parent_id: null,
                    relative_position: null,
                    row_index: 0,
                    subtype: "mixed"
                  }
                ],
              ]
            }
          }
        ]
      };
    
    
    
      let response3 = await axios.post(
        'https://alai-standalone-backend.getalai.com/update-slide-entity',
        slideData,
        {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          }
        }
      )
    
      console.log("Slide updated successfully:", response3.data);
} catch (error) {
    console.error('Error:', error.message);
}