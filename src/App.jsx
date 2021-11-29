
import './App.css';
import { PrimaryButton } from './components/atmos/bottun/PrimaryButton';
import { SecondaryButton } from './components/atmos/bottun/SecondaryButton';
import { SearchInput } from './components/molcules/SearchInput';
import { UserCard } from './components/organisms/user/UserCard';

function App() {
  return (
    <div className="App">
      <PrimaryButton>ハゲタコ</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SearchInput/>
      <UserCard/>
    </div>    
  );
}

export default App;
