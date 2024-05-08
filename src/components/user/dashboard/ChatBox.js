import React from 'react';
import { Segmented } from 'antd';
import ChatBot from 'react-simple-chatbot';

const ChatBox = () => {
  const steps = [
    {
      id: 'Greet',
      message: 'Hello, Welcome to our website!',
      trigger: 'Ask Name',
    },
    {
      id: 'Ask Name',
      message: 'Please enter your name.',
      trigger: 'waiting1',
    },
    {
      id: 'waiting1',
      user: true,
      trigger: 'Name',
    },
    {
      id: 'Name',
      message: 'Hi {previousValue}, please select your issue.',
      trigger: 'issues',
    },
    {
      id: 'issues',
      options: [
        { value: 'React', label: 'React', trigger: 'React' },
        // Add more options if needed
      ],
    },
    {
      id: 'React',
      message: 'You selected React.',
      end: true,
    },
    // Add more steps for other issues or responses
  ];

  return (
    <div>
      <Segmented floated='right'>
        <ChatBot steps={steps} />
      </Segmented>
    </div>
  );
};

export default ChatBox;
