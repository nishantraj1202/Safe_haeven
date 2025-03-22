import { View, Text, StyleSheet, ScrollView, Pressable, Image } from 'react-native';
import { MessageCircle } from 'lucide-react-native';

const groups = [
  {
    title: 'Emotional Support',
    members: 128,
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200&auto=format',
  },
  {
    title: 'Legal Support Network',
    members: 95,
    image: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=200&auto=format',
  },
  {
    title: 'Mental Wellness',
    members: 156,
    image: 'https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?q=80&w=200&auto=format',
  },
];

export default function SupportScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Support Groups</Text>
        <Text style={styles.subtitle}>Connect with others who understand</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.featuredGroup}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&auto=format' }}
            style={styles.featuredImage}
          />
          <View style={styles.featuredContent}>
            <Text style={styles.featuredTitle}>Featured Group</Text>
            <Text style={styles.featuredDescription}>
              Join our most active support community for emotional well-being and mutual support.
            </Text>
            <Pressable style={styles.joinButton}>
              <Text style={styles.joinButtonText}>Join Group</Text>
            </Pressable>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Available Groups</Text>

        {groups.map((group, index) => (
          <Pressable key={index} style={styles.groupCard}>
            <Image source={{ uri: group.image }} style={styles.groupImage} />
            <View style={styles.groupInfo}>
              <Text style={styles.groupTitle}>{group.title}</Text>
              <View style={styles.groupStats}>
                <MessageCircle size={16} color="#666666" />
                <Text style={styles.groupMembers}>{group.members} members</Text>
              </View>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 3,
    borderBottomColor: '#000000',
  },
  title: {
    fontFamily: 'SpaceGrotesk-Bold',
    fontSize: 24,
    color: '#1A1A1A',
    marginBottom: 4,
  },
  subtitle: {
    fontFamily: 'SpaceGrotesk-Regular',
    fontSize: 14,
    color: '#666666',
  },
  content: {
    padding: 20,
  },
  featuredGroup: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 3,
    borderColor: '#000000',
    overflow: 'hidden',
    marginBottom: 24,
    shadowColor: '#000000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 5,
  },
  featuredImage: {
    width: '100%',
    height: 160,
  },
  featuredContent: {
    padding: 20,
  },
  featuredTitle: {
    fontFamily: 'SpaceGrotesk-Bold',
    fontSize: 20,
    color: '#1A1A1A',
    marginBottom: 8,
  },
  featuredDescription: {
    fontFamily: 'SpaceGrotesk-Regular',
    fontSize: 14,
    color: '#666666',
    marginBottom: 16,
  },
  joinButton: {
    backgroundColor: '#1A1A1A',
    padding: 16,
    borderRadius: 12,
    borderWidth: 3,
    borderColor: '#000000',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 5,
  },
  joinButtonText: {
    fontFamily: 'SpaceGrotesk-Bold',
    fontSize: 16,
    color: '#FFFFFF',
  },
  sectionTitle: {
    fontFamily: 'SpaceGrotesk-Bold',
    fontSize: 18,
    color: '#1A1A1A',
    marginBottom: 16,
  },
  groupCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 3,
    borderColor: '#000000',
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 5,
  },
  groupImage: {
    width: 80,
    height: 80,
  },
  groupInfo: {
    flex: 1,
    padding: 16,
  },
  groupTitle: {
    fontFamily: 'SpaceGrotesk-Bold',
    fontSize: 16,
    color: '#1A1A1A',
    marginBottom: 8,
  },
  groupStats: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  groupMembers: {
    fontFamily: 'SpaceGrotesk-Regular',
    fontSize: 14,
    color: '#666666',
    marginLeft: 6,
  },
});