import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';

const TransactionCard = ({ item, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>
      <Avatar
        size="small"
        title={item.category[0].toUpperCase()}
        containerStyle={styles.avatar}
      />
      <View style={styles.textContainer}>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
      <Text style={styles.amount}>${item.amount}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  textContainer: {
    flex: 1,
    marginLeft: 10
  },
  description: {
    fontWeight: 'bold'
  },
  date: {
    color: '#888',
    fontSize: 12
  },
  amount: {
    fontWeight: 'bold',
    color: '#F44336'
  },
  avatar: {
    backgroundColor: '#4CAF50'
  }
});

export default TransactionCard;