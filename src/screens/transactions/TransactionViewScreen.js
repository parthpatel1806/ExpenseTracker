import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-elements';

const TransactionViewScreen = ({ route }) => {
  const { transaction } = route.params;
  
  const details = [
    { label: 'Date', value: transaction.date },
    { label: 'Amount', value: `$${transaction.amount}` },
    { label: 'Description', value: transaction.description },
    { label: 'Location', value: transaction.location },
    { label: 'Type', value: transaction.type },
    { label: 'Category', value: transaction.category },
  ];

  return (
    <View style={styles.container}>
      <Card containerStyle={styles.card}>
        <Card.Title style={styles.title}>Transaction Details</Card.Title>
        {details.map((item, index) => (
          <View key={index} style={styles.detailRow}>
            <Text style={styles.label}>{item.label}:</Text>
            <Text style={styles.value}>{item.value}</Text>
          </View>
        ))}
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    marginBottom: 15,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
  },
  value: {
    flex: 1,
    marginLeft: 10,
    textAlign: 'right',
  },
});

export default TransactionViewScreen;