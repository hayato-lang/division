
import './App.css';
import { PrimaryButton } from './components/atmos/PrimaryButton';
import { SecondaryButton } from './components/atmos/SecondaryButton';
import { SearchInput } from './components/molcules/SearchInput';

function App() {
  return (
    <div className="App">
      <PrimaryButton>ハゲタコ</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SearchInput/>
    </div>
  );
}

export default App;
