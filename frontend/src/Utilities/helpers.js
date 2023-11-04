const getTotalNetworth  = (account_array) =>{
    let totalSum = 0

    for (let index = 0; index < account_array.length; index++) {
        const balance = account_array[index].totalBalance
        totalSum = totalSum + balance
    }

    return totalSum
}

const generateRandomString = (length) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    return result;
}

const utilities = {getTotalNetworth, generateRandomString}

export default utilities