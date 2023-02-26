import React from 'react';
import { useEmailContext } from './contexts/EmailContext';

const MessageDetail = () => {
  const { currentEmail, setCurrentEmail } = useEmailContext();
  return (
    <div className='MessageViewer'>
      <button onClick={() => setCurrentEmail(null)}>Back</button>
      <h2>{currentEmail.subject}</h2>
      <div>{currentEmail.body}</div>
    </div>
  );
};
export default MessageDetail;
