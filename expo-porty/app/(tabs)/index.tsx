import { Image } from 'expo-image';
import { ScrollView } from 'react-native';
import { Platform, StyleSheet } from 'react-native';
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
    spinValue.setValue(0);     // 🔑 reset
    spinAnimation.start(() => loop());
  };

  loop();
}, []);


const spin = spinValue.interpolate({
  inputRange: [0, 1],
  outputRange: ['0deg', '360deg'],
});

  return (
    <ScrollView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Koby Bradley's Portfolio</ThemedText>
      <Animated.View style={{ transform: [{ rotate: spin }] }}>
        <Image
          source={require('@/assets/images/HireMe.jpg')}
          style={styles.profileImage}
        />
      </Animated.View>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Check out the goods!</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12',
            })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 50,
  },
  stepContainer: {
    gap: 16,
    marginBottom: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  profileImage: {
    width: 250,
    height: 250,
    marginTop: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
