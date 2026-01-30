import React from 'react';
import {ScrollView,View,StyleSheet,Linking,TouchableOpacity,Platform,} from 'react-native';
import { ThemedView } from '@/components/themed-view';
import { ThemedText } from '@/components/themed-text';
import { PortfolioItem } from '@/components/PortfolioItem';
import { useRouter } from 'expo-router';

const portfolioItems = [
  {
    id: '1',
    title: 'TF2 Mod',
    description: 'A group of idiotic mercenaries from Team Fortress 2 made as a Minecraft mod.',
    image: require('@/assets/images/TF2.png'),
    url: 'https://www.planetminecraft.com/mod/team-fortress-2-6064621/',
  },
  {
    id: '2',
    title: 'South Park Mod',
    description: 'Characters from South Park with their Stick of Truth forms.',
    image: require('@/assets/images/SouthPark.png'),
    url: 'https://www.planetminecraft.com/mod/south-park-6175602/',
  },
  {
    id: '3',
    title: 'Slender Man Mod',
    description: 'Slender Man from Slender.',
    image: require('@/assets/images/SlenderMan.png'),
    url: 'https://www.planetminecraft.com/mod/slender-man-6122083/',
  },
];

const githubItems = [
  {
    id: 'g1',
    title: 'GitHub',
    description: 'My GitHub site.',
    url: 'https://github.com/MysteryMontero',
  },
];

export default function PortfolioScreen() {
  const router = useRouter();

  const handlePress = (item: any) => {
    if (item.url) Linking.openURL(item.url);
  };

  return (
    <ThemedView style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={[styles.container, { paddingBottom: 120 }]}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.sectionHeader}>
          <ThemedText type="title" style={styles.sectionTitle}>Portfolio</ThemedText>
          <ThemedText style={styles.sectionSubtitle}>Projects & experience — tap any item for details.</ThemedText>
        </View>

        {portfolioItems.map((item) => (
          <PortfolioItem
            key={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
            onPress={() => handlePress(item)}
          />
        ))}

        <View style={[styles.sectionHeader, { marginTop: 8 }]}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>My GitHub Site</ThemedText>
          <ThemedText style={styles.sectionSubtitle}>Check out my repositories below:</ThemedText>
        </View>

        {githubItems.map((item) => (
          <PortfolioItem
            key={item.id}
            title={item.title}
            description={item.description}
            onPress={() => handlePress(item)}
          />
        ))}
      </ScrollView>

      <View style={[styles.stickyContainer, Platform.OS === 'ios' ? { bottom: 22 } : { bottom: 16 }]}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <ThemedText type="defaultSemiBold" style={styles.backButtonText}>← Back to Title</ThemedText>
        </TouchableOpacity>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  sectionHeader: {
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 22,
  },
  sectionSubtitle: {
    marginTop: 4,
    marginBottom: 12,
  },

  stickyContainer: {
    position: 'absolute',
    left: 16,
    right: 16,
    alignItems: 'center',
  },
  backButton: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: '#007AFF',
    borderRadius: 10,
    elevation: 2,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
