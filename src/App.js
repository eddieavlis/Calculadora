import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row } from './styles';
import { useState, useEffect } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  };

  const handleBack = () => {
    setCurrentNumber(prev => (prev.length > 1 ? prev.slice(0, -1) : '0'));
  };

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`);
  };

  const handleSumNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  };

  const handleMinusNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
    } else {
      const difference = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(difference));
      setOperation('');
    }
  };

  const handleMultiplyNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('*');
    } else {
      const product = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(product));
      setOperation('');
    }
  };

  const handleDivideNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/');
    } else {
      const quotient = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(quotient));
      setOperation('');
    }
  };

  const handlePi = () => {
    setCurrentNumber(String(Math.PI));
  };

  const handleSquareRoot = () => {
    setCurrentNumber(String(Math.sqrt(Number(currentNumber))));
  };

  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch (operation) {
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleMinusNumbers();
          break;
        case '*':
          handleMultiplyNumbers();
          break;
        case '/':
          handleDivideNumbers();
          break;
        default:
          break;
      }
      // Zerar o estado após a operação
      setFirstNumber('0');
      setOperation('');
    }
  };

  // Função para lidar com os eventos do teclado
  const handleKeyPress = (event) => {
    const { key } = event;
    event.preventDefault(); 

    switch (key) {
      case 'Enter':
        handleEquals();
        break;
      case 'Backspace':
        handleBack();
        break;
      case 'Delete':
        handleOnClear();
        break;
      case '+':
        handleSumNumbers();
        break;
      case '-':
        handleMinusNumbers();
        break;
      case '*':
        handleMultiplyNumbers();
        break;
      case '/':
        handleDivideNumbers();
        break;
      case ',':
        handleAddNumber(',');
        break;
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        handleAddNumber(key);
        break;
      case 'π':
        handlePi();
        break;
      case '√':
        handleSquareRoot();
        break;
      default:
        break;
    }
  };

  // Adiciona e remove o listener de eventos de teclado
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstNumber, currentNumber, operation]);

  
  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="√" onClick={handleSquareRoot} />
          <Button label="π" onClick={handlePi} />
          <Button label="C" onClick={handleOnClear} />
          <Button label="÷" onClick={handleDivideNumbers} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="×" onClick={handleMultiplyNumbers} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="-" onClick={handleMinusNumbers} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="+" onClick={handleSumNumbers} />
        </Row>
        <Row>
          <Button label="<" onClick={handleBack} />
          <Button label="0" onClick={() => handleAddNumber('0')} />
          <Button label="," onClick={() => handleAddNumber(',')} />
          <Button label="=" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
