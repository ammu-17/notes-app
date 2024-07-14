"use client";

import Link from 'next/link';

const NoteList = ({ notes = [] }) => (
  <ul>
    {notes.length > 0 ? (
      notes.map((note) => (
        <li key={note.id}>
          <Link href={`/note/${note.id}`}>
            {note.title}
          </Link>
        </li>
      ))
    ) : (
      <li>No notes available</li>
    )}
  </ul>
);

export default NoteList;
