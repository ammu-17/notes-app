"use client";

import { useEffect, useState } from 'react';
import NoteList from '../components/NoteList';

export default function Home() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function fetchNotes() {
      try {
        const res = await fetch('/api/notes');
        if (res.ok) {
          const data = await res.json();
          setNotes(data);
        } else {
          console.error("Failed to fetch notes:", res.status);
        }
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    }

    fetchNotes();
  }, []);

  return (
    <div>
      <h1>Notes App</h1>
      <NoteList notes={notes} />
    </div>
  );
}
