import styled from "styled-components";
import {SearchInput} from "../molcules/SearchInput";
import {UserCard} from "../organisms/user/UserCard";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { UserContext } from "../../provider/UserProvider";
import { useContext } from "react";

const users = [...Array(10).keys()].map(((val) => {
  return {
    id: val,
    name: `はやと${val}`,
    image: "https://source.unsplash.com/MOnU_o4DMQw",
    email: "hagehage@gmail.com",
    phone: "090-5678-1234",
    company: {
      name: "ハゲタコ株式会社"
    },
    website: "https://google.com"
  }
}))


export const Users = () => {
  const {userInfo, setUserInfo} = useContext(UserContext);
  const onClickChange = () => setUserInfo({isAdmin: !userInfo.isAdmin});

  return (
    <SContainer>
      <h2>ユーザー一覧です</h2>
      <SearchInput/>
      <br />
      <SecondaryButton onClick={onClickChange}>切り替え</SecondaryButton>
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 24px;
`;

const SUserArea = styled.div`
padding-top: 40px;
width: 100%;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
grid-gap: 20px; 
`;