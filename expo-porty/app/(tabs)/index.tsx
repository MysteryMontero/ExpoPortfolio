import { View, ScrollView, StyleSheet, Platform } from 'react-native';
import { Image } from 'expo-image';
import { Animated, Easing } from 'react-native';
import { useEffect, useRef } from 'react';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function HomeScreen() {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const spinAnimation = Animated.timing(spinValue, {
      toValue: 1,
      duration: 12000,
      easing: Easing.linear,
      useNativeDriver: true,
    });

    const loop = () => {
      spinValue.setValue(0);
      spinAnimation.start(() => loop());
    };

    loop();
  }, []);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <ThemedView style={{ flex: 1, backgroundColor: '#a9cbf1' }}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.titleContainer}>
          <ThemedText type="title" style={{ fontSize: 60 }}>
            Koby Bradley's Portfolio
          </ThemedText>
        </View>

        <View style={styles.centerContent}>
          <Animated.View style={{ transform: [{ rotate: spin }] }}>
            <Image source={require('@/assets/images/HireMe.jpg')} style={styles.profileImage} />
          </Animated.View>

          <ThemedText type="subtitle" style={{ fontSize: 30, marginTop: 100 }}>Check out the goods!</ThemedText>
        <Link href="/portfolio" asChild>
          <ThemedText style={styles.linkText}>→ View my portfolio</ThemedText>
        </Link>

        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  centerContent: {
  justifyContent: 'flex-start',
  alignItems: 'center',
  marginTop: 100,
  marginBottom: 400,
  gap: 25,
},
  scrollContainer: {
    flexGrow: 1,
    paddingTop: 40,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  profileImage: {
    width: 500,
    height: 500,
  },
  linkText: {
  marginTop: 0,
  fontSize: 20,
  textDecorationLine: 'underline',
  color: '#ff00bf',
},
});
