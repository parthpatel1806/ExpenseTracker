import React, { useState, useContext } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';
import { TransactionsContext } from '../../context/TransactionsContext';

const TransactionFormScreen = ({ navigation }) => {
  const { addTransaction } = useContext(TransactionsContext);
  const [formData, setFormData] = useState({
    date: '',
    amount: '',
    description: '',
    location: '',
    type: 'expense',
    category: 'other'
  });

  const handleSubmit = () => {
    if (Object.values(formData).some(val => val === '')) {
      alert('Please fill all fields');
      return;
    }
    addTransaction(formData);
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text h4 style={styles.title}>Add New Transaction</Text>
      
      {Object.keys(formData).map((field) => (
        <Input
          key={field}
          label={field.charAt(0).toUpperCase() + field.slice(1)}
          value={formData[field]}
          onChangeText={(text) => setFormData({...formData, [field]: text})}
          containerStyle={styles.inputContainer}
        />
      ))}

      <Button
        title="Save Transaction"
        onPress={handleSubmit}
        buttonStyle={styles.saveButton}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 15,
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    marginTop: 20,
  },
});

export default TransactionFormScreen;