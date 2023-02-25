import React, { useContext } from 'react';
import UserContext from './contexts/UserContext';

const MessageList = () => {
  const { user } = useContext(UserContext);

  return (
    <div className='MessageList'>
      <div className='no-messages'>No mail currently, {user.firstName}! 🎉</div>
    </div>
  );
};

export default MessageList;
