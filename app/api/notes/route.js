export async function GET(req, res) {
    const notes = [
      { id: 1, title: 'Note 1', content: 'This is the content of Note 1. Here, you can write detailed information about Note 1.' },
      { id: 2, title: 'Note 2', content: 'This is the content of Note 2. Here, you can write detailed information about Note 2.' }
    ]; // Replace this with your actual data fetching logic
    
    return new Response(JSON.stringify(notes), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  