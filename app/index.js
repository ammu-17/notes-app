import { useEffect, useState } from 'react';
import NoteList from '../components/NoteList';
import { getNotes } from '../utils/api';

const Home = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes().then(setNotes);
  }, []);

  return (
    <div>
      <h1>Notes</h1>
      <NoteList notes={notes} />
    </div>
  );
};

export default Home;
