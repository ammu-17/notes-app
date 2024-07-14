"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function NotePage() {
  const { id } = useParams();
  const [note, setNote] = useState(null);

  useEffect(() => {
    async function fetchNote() {
      try {
        const res = await fetch('/api/notes');
        if (res.ok) {
          const notes = await res.json();
          const note = notes.find(note => note.id === parseInt(id));
          setNote(note);
        } else {
          console.error("Failed to fetch notes:", res.status);
        }
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    }

    fetchNote();
  }, [id]);

  if (!note) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{note.title}</h1>
      <p>{note.content}</p>
    </div>
  );
}
