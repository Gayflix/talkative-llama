import { useState, useEffect } from "react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm a Chatty Llama! Ask me anything!",
      sentTime: "just now",
      sender: "ChattyLlama",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [ws, setWs] = useState(null);

  useEffect(() => {
    const createWebSocketConnecti