import { createContext, useContext, useEffect, useState } from 'react';

const ToastContext = createContext();

export function ToastProvider({ children }) {
  const [messages, setMessages] = useState([]);

  const addMessage = (text) => {
    setMessages((msgs) => [
      ...msgs,
      {
        id: Math.random(),
        text,
        createdAt: new Date().getTime(),
      },
    ]);
  };

  const removeMessage = (msg) => {
    setMessages((messages) => messages.filter((m) => m !== msg));
  };

  useEffect(() => {
    function cleanNoti() {
      const now = new Date().getTime();
      setMessages((messages) =>
        messages.filter((m) => now - m.createdAt < 3000)
      );
    }

    const timer = setInterval(cleanNoti, 6000);

    return () => clearInterval(timer);
  }, []);

  const contextValue = {
    messages,
    addMessage,
  };

  return (
    <ToastContext.Provider value={contextValue}>
      <div className='notification-wrapper'>
        <ul>
          {messages.map((msg) => (
            <Notification
              key={msg.id}
              message={msg}
              onClose={() => removeMessage(msg)}
            />
          ))}
        </ul>
      </div>
      {children}
    </ToastContext.Provider>
  );
}

const Notification = ({ message, onClose }) => (
  <li>
    {message.text}
    <button className='close' onClick={onClose}>
      &times;
    </button>
  </li>
);

export function useToastContext() {
  return useContext(ToastContext);
}
