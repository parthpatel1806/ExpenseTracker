import React, { useContext } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Card, Button, Text, Avatar } from 'react-native-elements';
import { AuthContext } from '../../context/AuthContext';
import { TransactionsContext } from '../../context/TransactionsContext';

const HomeScreen = ({ navigation }) => {
  const { logout } = useContext(AuthContext);
  const { transactions } = useContext(TransactionsContext);

  const renderTransaction = ({ item }) => (
    <TouchableOpacity 
      onPress={() => navigation.navigate('TransactionDetails', { transaction: item })}
    >
      <Card containerStyle={styles.card}>
        <View style={styles.transactionItem}>
          <Avatar 
            size="small"
            title={item.category[0].toUpperCase()}
            containerStyle={styles.avatar}
          />
          <View style={styles.transactionInfo}>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.amount}>${item.amount}</Text>
          </View>
          <Text style={styles.date}>{item.date}</Text>
        </View>
      </Card>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text h4 style={styles.title}>Expense Tracker</Text>
        <Button 
          title="Logout" 
          onPress={logout}
          buttonStyle={styles.logoutButton}
        />
      </View>

      <Button
        title="Add Transaction"
        onPress={() => navigation.navigate('TransactionForm')}
        buttonStyle={styles.addButton}
      />

      <FlatList
        data={transactions}
        renderItem={renderTransaction}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  card: {
    borderRadius: 8,
    marginBottom: 10,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  transactionInfo: {
    flex: 1,
    marginLeft: 10,
  },
  description: {
    fontWeight: 'bold',
  },
  amount: {
    color: '#F44336',
  },
  date: {
    color: '#757575',
  },
  addButton: {
    backgroundColor: '#4CAF50',
    marginBottom: 20,
  },
  logoutButton: {
    backgroundColor: '#F44336',
  },
});

export default HomeScreen;