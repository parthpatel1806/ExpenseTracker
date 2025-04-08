export const formatCurrency = (amount) => {
    return parseFloat(amount).toFixed(2);
  };
  
  export const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };