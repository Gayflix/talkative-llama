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
    const createWebSocketConnection = (port) => {
      const wsURL = `ws://localhost:${port}/ws/`;
      console.log("Attempting connection to: ", wsURL);
      const websocket = new WebSocket(wsURL);

      websocket.onopen = () => {
        console.log("Connected to the WebSocket server on port", port);
        setWs(websocket);
      };

      websocket.onerror = (error) => {
        console.log(`WebSocket Error on port ${port}:`, error);
        // If co