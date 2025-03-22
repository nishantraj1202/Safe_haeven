import { View, Text, StyleSheet, TextInput, ScrollView, Pressable } from 'react-native';
import { Send } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
export default function ChatScreen() {
  return (
    <LinearGradient
    colors={['#c5cae9','#e1bee7','#ffcdd2']}
    style={styles.container}
    start={{x:1,y:0.5}}
    end={{x:0.5,y:0}}
    >
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>AI Support Chat</Text>
        <Text style={styles.subtitle}>Confidential 24/7 support</Text>
      </View>
     

      <ScrollView style={styles.chatContainer}>
        <View style={styles.messageContainer}>
          <Text style={styles.botName}>SafeHaven AI</Text>
          <View style={styles.botMessage}>
            <Text style={styles.messageText}>
              Hello, I'm here to support you. Everything we discuss is completely confidential. How can I help you today?
            </Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          placeholderTextColor="#e64a19"
          multiline
        />
        <Pressable style={styles.sendButton}>
          <Send size={24} color="green" />
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
  background:{
    top:0,
    left:0,
    height:200
  }
});