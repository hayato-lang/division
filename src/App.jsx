
import './App.css';
import { PrimaryButton } from './components/atmos/PrimaryButton';
import { SecondaryButton } from './components/atmos/SecondaryButton';

function App() {
  return (
    <div className="App">
      <PrimaryButton>ハゲタコ</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
    </div>
  );
}

export default App;
