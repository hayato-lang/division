
import { BrowserRouter } from 'react-router-dom';
import { PrimaryButton } from './components/atmos/bottun/PrimaryButton';
import { SecondaryButton } from './components/atmos/bottun/SecondaryButton';
import { SearchInput } from './components/molcules/SearchInput';
import { UserCard } from './components/organisms/user/UserCard';
import { DefaultLayout } from './components/templates/DefaultLayout';
import { HeaderOnly } from './components/templates/HeaderOnly';

const user = {
  name: "はやと",
  image: "https://source.unsplash.com/MOnU_o4DMQw",
  email: "hagehage@gmail.com",
  phone: "090-5678-1234",
  company: {
    name: "ハゲタコ株式会社"
  },
  website: "https://google.com"
};

function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <PrimaryButton>ハゲタコ</PrimaryButton>
        <SecondaryButton>検索</SecondaryButton>
        <br />
        <SearchInput/>
        <UserCard user={user}/>
      </DefaultLayout> 
    </BrowserRouter>   
  );
}

export default App;
