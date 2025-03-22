import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Pressable, ActivityIndicator } from 'react-native';
import { Send } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ChatScreen() {
  const [messages, setMessages] = useState([
    {
      id: '1',
      sender: 'bot',
      text: "Hello, I'm here to support you. Everything we discuss is completely confidential. How can I help you today?"
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollViewRef = useRef();
  const socketRef = useRef(null);

  useEffect(() => {
    // Initialize WebSocket connection
    socketRef.current = new WebSocket('ws://localhost:3000/chat');
    
    socketRef.current.onopen = () => {
      console.log('WebSocket connection established');
    };
    
    socketRef.current.onmessage = (event) => {
      const response = JSON.parse(event.data);
      
      if (response.type === 'ai_response') {
        setMessages(prevMessages => [
          ...prevMessages,
          { id: Date.now().toString(), sender: 'bot', text: response.message }
        ]);
        setIsLoading(false);
      }
    };
    
    socketRef.current.onerror = (error) => {
      console.error('WebSocket error:', error);
      setIsLoading(false);
    };
    
    socketRef.current.onclose = () => {
      console.log('WebSocket connection closed');
    };
    
    // Clean up on unmount
    return () => {
      if (socketRef.current) {
        socketRef.current.close();
      }
    };
  }, []);

  const sendMessage = () => {
    if (inputText.trim() === '') return;
    
    // Add user message to chat
    const newMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: inputText.trim()
    };
    
    setMessages(prevMessages => [...prevMessages, newMessage]);
    setIsLoading(true);
    
    // Send message to server via WebSocket
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.send(JSON.stringify({
        type: 'user_message',
        message: inputText.trim()
      }));
    } else {
      console.error('WebSocket not connected');
      setIsLoading(false);
    }
    
    setInputText('');
  };

  return (
    <LinearGradient
      colors={['#c5cae9', '#e1bee7', '#ffcdd2']}
      style={styles.container}
      start={{x: 1, y: 0.5}}
      end={{x: 0.5, y: 0}}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>AI Support Chat</Text>
          <Text style={styles.subtitle}>Confidential 24/7 support</Text>
        </View>
        
        <ScrollView 
          style={styles.chatContainer}
          ref={scrollViewRef}
          onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
        >
          {messages.map((message) => (
            <View 
              key={message.id} 
              style={[
                styles.messageContainer,
                message.sender === 'user' && styles.userMessageContainer
              ]}
            >
              <Text style={styles.botName}>
                {message.sender === 'bot' ? 'SafeHaven AI' : 'You'}
              </Text>
              <View 
                style={[
                  styles.botMessage,
                  message.sender === 'user' && styles.userMessage
                ]}
              >
                <Text style={styles.messageText}>{message.text}</Text>
              </View>
            </View>
          ))}
          
          {isLoading && (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="small" color="green" />
              <Text style={styles.loadingText}>AI is thinking...</Text>
            </View>
          )}
        </ScrollView>
        
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type your message..."
            placeholderTextColor="#e64a19"
            multiline
            value={inputText}
            onChangeText={setInputText}
          />
          <Pressable 
            style={styles.sendButton}
            onPress={sendMessage}
            disabled={inputText.trim() === '' || isLoading}
          >
            <Send size={24} color={inputText.trim() === '' || isLoading ? "#999" : "green"} />
          </Pressable>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    paddingTop: 60,
    borderBottomWidth: 3,
    borderBottomColor: '#795548',
  },
  title: {
    fontFamily: 'SpaceGrotesk-Bold',
    fontSize: 24,
    color: 'green',
    marginBottom: 4,
  },
  subtitle: {
    fontFamily: 'SpaceGrotesk-Regular',
    fontSize: 14,
    color: '#666666',
  },
  chatContainer: {
    flex: 1,
    padding: 20,
  },
  messageContainer: {
    marginBottom: 20,
    alignItems: 'flex-start',
  },
  userMessageContainer: {
    alignItems: 'flex-end',
  },
  botName: {
    fontFamily: 'SpaceGrotesk-Medium',
    fontSize: 14,
    color: '#666666',
    marginBottom: 4,
  },
  botMessage: {
    backgroundColor: '#F3D6B1',
    padding: 16,
    borderRadius: 12,
    borderWidth: 3,
    borderColor: 'green',
    shadowColor: '#5300eb',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 5,
    maxWidth: '80%',
  },
  userMessage: {
    backgroundColor: '#E3F2FD',
    borderColor: '#1976D2',
    shadowColor: '#1976D2',
  },
  messageText: {
    fontFamily: 'SpaceGrotesk-Regular',
    fontSize: 16,
    color: 'black',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 3,
    borderTopColor: '#000000',
    gap: 12,
  },
  input: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    borderWidth: 3,
    borderColor: 'green',
    padding: 12,
    fontFamily: 'SpaceGrotesk-Regular',
    fontSize: 16,
    color: 'black',
    maxHeight: 100,
  },
  sendButton: {
    backgroundColor: '#cfd8dc',
    width: 50,
    height: 50,
    borderRadius: 12,
    borderWidth: 3,
    borderColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'green',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 5,
  },
  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 8,
  },
  loadingText: {
    marginLeft: 8,
    fontFamily: 'SpaceGrotesk-Regular',
    color: 'green',
  },
});