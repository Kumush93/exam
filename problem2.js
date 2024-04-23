function reverseInput(input) {
    if (typeof input === 'string') {
     
      const words = String(input).split(' ').reverse();
      return words;
    } else if (typeof input === 'number') {
    
      const digits = String(input).split('');
      const reversedDigits = digits.reverse().join('');
      return reversedDigits;
    } else {
      return "Noto'g'ri kiritilgan ma`limot.Matn yoki string kiriting.";
    }
  }
  

  const input = "Assalomu alaykum, dunyo!";
  const reversedText = reverseInput(input);
  console.log(reversedText); 
  

  const number = 12345;
  const reversedNumber = reverseInput(number);
  console.log(reversedNumber); 
  
