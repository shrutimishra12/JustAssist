import React, { useState } from "react";
import styled from "styled-components";

// Styled components
const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: #e0f7fa; /* Ocean blue background */
`;

const Sidebar = styled.div`
  width: 240px;
  background-color: #006064; /* Dark ocean blue */
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const SidebarItem = styled.div`
  padding: 10px;
  margin: 10px 0;
  cursor: pointer;
  &:hover {
    background-color: #004d40; /* Slightly lighter on hover */
  }
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`;

const Header = styled.div`
  background-color: #006064; /* Dark ocean blue */
  color: white;
  padding: 10px 20px;
  text-align: center;
`;

const ChatWindow = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  background-color: #e0f7fa; /* Ocean blue background */
`;

const Footer = styled.div`
  padding: 10px 20px;
  background-color: #006064; /* Dark ocean blue */
  color: white;
  display: flex;
  align-items: center;
`;

const MessageInput = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
`;

const SendButton = styled.button`
  padding: 10px 20px;
  background-color: #004d40; /* Slightly lighter ocean blue */
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #00363a; /* Even lighter on hover */
  }
`;

const MessageContainer = styled.div`
  margin: 10px 0;
  padding: 10px;
  border-radius: 4px;
  background-color: ${({ sender }) =>
    sender === "bot" ? "#80deea" : "#ffffff"}; /* Light blue for bot, white for user */
  align-self: ${({ sender }) => (sender === "bot" ? "flex-start" : "flex-end")};
  max-width: 70%;
  word-wrap: break-word;
`;

// Predefined responses based on user input
const getPredefinedResponse = (input) => {
  const trimmedInput = input.trim().toLowerCase();

  if (trimmedInput === "hello") {
    return "Hi there! How can I assist you today?";
  } else if (trimmedInput === "what is your name?") {
    return "I'm Justassist, here to help you with your queries!";
  } else if (trimmedInput === "my case status?") {
    return "Please provide the case number.";
  } else if (trimmedInput === "i want to know about my constitution") {
    return "Sure, here you go: https://www.india.gov.in/my-government/constitution-india#:~:text=The%20Republic%20is%20governed%20in,structure%20with%20certain%20unitary%20features";
  } else if (trimmedInput === "884/2024") {
    return "The order has been disposed of on 24th July 2024. The order says that Ramlal won the case.";
  } else if (trimmedInput === "39604/2024") {
    return "The Nesa Chandra Roy vs. Sobi Ayyaswamy case is still pending in the courtroom.";
  } else if (trimmedInput === "download ecourts app") {
    return "Check out this link: https://play.google.com/store/apps/details?id=in.gov.ecourts.eCourtsServices&app_token=0cecd0656731dfb669dfb4f44f311c22107479b40f65d242131928674d7e4421";
  } else if (trimmedInput === "what can you do?") {
    return "I can assist you with various tasks, especially related to the judiciary.";
  } else if (trimmedInput === "judges strength in supreme court") {
    return "Over the years from 2016 to 2023, the sanctioned strength of judges in the Supreme Court has varied between 31 and 34. Here's a summary of the vacancy trends: 2016-2018: The Supreme Court faced a significant number of vacancies, with 7 positions unfilled in 2016, gradually decreasing to 4 by 2018. 2019-2021: The number of vacancies reduced significantly, reaching as low as 1 in 2019 and 2021, reflecting an almost fully staffed court. 2022: The vacancy rate spiked again to 7, matching the high of 2016. 2023: For the first time in these years, the Supreme Court reached its full sanctioned strength with no vacancies. This data indicates fluctuations in the vacancy rate, with the Court achieving full capacity only in 2023.";
  } else if (trimmedInput === "how is the weather?") {
    return "I'm not connected to the internet, so I can't provide the current weather. But you can check a weather app!";
  } 
  // Add more predefined responses here as needed

  return "I'm not sure about that. Can you ask something else?";
};

const YourAssistant = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const handleSendClick = () => {
    if (message.trim()) {
      const userMessage = { sender: "user", text: message };
      setMessages([...messages, userMessage]);

      const botResponse = getPredefinedResponse(message);
      const botMessage = { sender: "bot", text: botResponse };

      setMessages((prevMessages) => [...prevMessages, botMessage]);
      setMessage("");
    }
  };

  return (
    <AppContainer>
      <Sidebar>
        <h2>Search History</h2>
        <SidebarItem>React Code Error</SidebarItem>
        <SidebarItem>Module Not Found Error</SidebarItem>
        <SidebarItem>Responsive Topbar and Sidebar</SidebarItem>
        {/* Add more sidebar items here */}
      </Sidebar>
      <MainContent>
        <Header>Your Assistant</Header>
        <ChatWindow>
          {messages.map((msg, index) => (
            <MessageContainer key={index} sender={msg.sender}>
              {msg.text}
            </MessageContainer>
          ))}
        </ChatWindow>
        <Footer>
          <MessageInput
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <SendButton onClick={handleSendClick}>Send</SendButton>
        </Footer>
      </MainContent>
    </AppContainer>
  );
};

export default YourAssistant;
