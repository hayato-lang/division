import { useContext } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { UserContext } from "../../provider/UserProvider";
import {SecondaryButton} from "../atoms/button/SecondaryButton"

export const Top = () => {
  const history = useHistory();
  const {setUserInfo} = useContext(UserContext);
  const onClickAdmin = () => {
  setUserInfo({isAdmin: true});
  history.push("/users")};
  const onClickGeneral = () => {
  setUserInfo({isAdmin: false}); 
  history.push("/users")};
  return (
    <SContainer>
      <h2>HOMEです</h2>
      <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
    </SContainer>
  );
}

const SContainer = styled.div`
text-align: center;
`;