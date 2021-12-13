import Button from './components/button/button';
import TextColorUpperCase from './components/textColorUpperCase/textColorUpperCase';
import './App.css';

function App() {
  return (
    <>
      <TextColorUpperCase color='#126585' text="meu texto"/>
      <Button label="Baixar CV"/>
    </>
  );
}

export default App;
