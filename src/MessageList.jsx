import React, { useContext } from 'react';
import UserContext, { useUserContext } from './contexts/UserContext';
import { useEmailContext } from './contexts/EmailContext';

const MessageList = () => {
  const { user } = useUserContext();
  const { emails, loading, error, currentEmail, setCurrentEmail } =
    useEmailContext();

  return (
    <div className='MessageList'>
      {error ? (
        <div className='no-messages'>Error.</div>
      ) : loading ? (
        <div className='no-messages'>Loading...</div>
      ) : emails.length === 0 ? (
        <div className='no-messages'>
          No mail currently, {user.firstName}! 🎉
        </div>
      ) : (
        <ul>
          {emails.map((email) => (
            <Email
              key={email.id}
              email={email}
              onClick={() => setCurrentEmail(email)}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

function Email({ email, onClick }) {
  return (
    <li onClick={onClick}>
      <div className='subject'>{email.subject}</div>
      <div className='preview'>{email.preview}</div>
    </li>
  );
}

export default MessageList;
