import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { PortfolioItem } from './PortfolioItem';

type Item = {
  id: string;
  title: string;
  description?: string;
  image?: any;
  url?: string;
};

type Props = {
  items: Item[];
  onItemPress?: (item: Item) => void;
  style?: any;
};

export function PortfolioList({ items, onItemPress, style }: Props) {
  return (
    <FlatList
      data={items}
      keyExtractor={(i) => i.id}
      contentContainerStyle={[styles.list, style]}
      renderItem={({ item }) => (
        <PortfolioItem
          title={item.title}
          description={item.description}
          image={item.image}
          onPress={() => onItemPress?.(item)}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});
