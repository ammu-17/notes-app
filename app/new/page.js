import { useRouter } from 'next/router';
import NoteForm from '../components/NoteForm';
import { createNote } from '../utils/api';

const NewNote = () => {
  const router = useRouter();

  const handleSubmit = async (data) => {
    await createNote(data);
    router.push('/');
  };

  return (
    <div>
      <h1>New Note</h1>
      <NoteForm onSubmit={handleSubmit} />
    </div>
  );
};

export default NewNote;
