import React from 'react';
import { useEmailContext } from './contexts/EmailContext';
import Header from './Header';
import MessageDetail from './MessageDetail';
import MessageList from './MessageList';

const MainPage = () => {
  const { currentEmail } = useEmailContext();

  return (
    <main>
      <Header />
      {currentEmail ? <MessageDetail /> : <MessageList />}
    </main>
  );
};
export default MainPage;
