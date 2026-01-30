import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { ThemedText } from '@/components/themed-text';

type Props = {
  id?: string | number;
  title: string;
  description?: string;
  image?: any;
  onPress?: () => void;
};

export function PortfolioItem({ title, description, image, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      {image ? <Image source={image} style={styles.thumb} /> : null}
      <View style={styles.meta}>
        <ThemedText type="subtitle" style={styles.title}>{title}</ThemedText>
        {description ? <ThemedText style={styles.description}>{description}</ThemedText> : null}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginVertical: 8,
    borderRadius: 12,
    backgroundColor: 'rgba(228, 207, 207, 0.04)',
  },
  thumb: {
    width: 88,
    height: 88,
    borderRadius: 8,
    marginRight: 12,
  },
  meta: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
  },
  description: {
    marginTop: 6,
    fontSize: 14,
  },
});