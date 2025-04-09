import axios from 'axios';

const accessToken = 'eyJhbGciOiJIUzI1NiIsImtpZCI6IldweTRON29pb3ZueDNMTnEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2VzY2hvdHRoamdsamJ4amVyY3puLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiI1OGU1YTc0ZS1jNGUyLTRlZDQtOTVkOS0yYTczMWZkMjZiNjEiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzQ0MjIwMTIwLCJpYXQiOjE3NDQyMTY1MjAsImVtYWlsIjoiYXBwdXBhdGlkYXIxNEBnbWFpbC5jb20iLCJwaG9uZSI6IiIsImFwcF9tZXRhZGF0YSI6eyJwcm92aWRlciI6Imdvb2dsZSIsInByb3ZpZGVycyI6WyJnb29nbGUiXX0sInVzZXJfbWV0YWRhdGEiOnsiYXZhdGFyX3VybCI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0tvR0JJM3BJVFJsRG4waUVGbzVGTEtLVDVjRmhmVjM2V3RKaThlNUJuUHhJbERtUT1zOTYtYyIsImVtYWlsIjoiYXBwdXBhdGlkYXIxNEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZnVsbF9uYW1lIjoiQXBwdSBQYXRpZGFyIiwiaXNzIjoiaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tIiwibmFtZSI6IkFwcHUgUGF0aWRhciIsInBob25lX3ZlcmlmaWVkIjpmYWxzZSwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0tvR0JJM3BJVFJsRG4waUVGbzVGTEtLVDVjRmhmVjM2V3RKaThlNUJuUHhJbERtUT1zOTYtYyIsInByb3ZpZGVyX2lkIjoiMTEwNjQ3MzYwODY1MzA3NjkxODY2Iiwic3ViIjoiMTEwNjQ3MzYwODY1MzA3NjkxODY2In0sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoib2F1dGgiLCJ0aW1lc3RhbXAiOjE3NDM3ODI2MzV9XSwic2Vzc2lvbl9pZCI6IjcxMjJlMTc3LWU2NTQtNDczYS1hNzVmLTMzNTk4YWEzMGE0YyIsImlzX2Fub255bW91cyI6ZmFsc2V9.Gce2ffI_NV-Hrnfqhyv0ejEp5QzpjA1gZle-gR4WP48';

const createPresentation = async () => {
  try {

    // Step 1: Create Presentation
    let variant_id = crypto.randomUUID()
    let response = await axios.post(
      'https://alai-standalone-backend.getalai.com/create-new-presentation',
      {
        presentation_id: crypto.randomUUID(),
        variant_id: variant_id,
        presentation_title: 'My name is pragyan patidar',
        theme_id: 'a6bff6e5-3afc-4336-830b-fbc710081012',
        default_color_set_id: '0',
        create_first_slide: true
      },
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const presentationId = response.data.id;
    console.log('Presentation Created with id:', response.data.id);


    // Step 2: Create Shareable Link

    try {
      const response = await axios.post(
        'https://alai-standalone-backend.getalai.com/upsert-presentation-share',
        { presentation_id: presentationId },
        {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          }
        }
      );

      console.log('Shareable Link:', `https://app.getalai.com/view/${response.data}`);
    } catch (error) {
      console.error('Error:', error.message);
    }

  } catch (error) {
    console.error('Error:', error.message);
  }
};

createPresentation();
