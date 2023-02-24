import React from 'react';

const MessageList = ({ currentUser }) => (
  <div className='MessageList'>
    <div className='no-messages'>
      No mail currently, {currentUser.firstName}! 🎉
    </div>
  </div>
);

export default MessageList;
