import { useHistory } from "react-router";
import styled from "styled-components";
import {SecondaryButton} from "../atmos/bottun/SecondaryButton"

export const Top = () => {
  const history = useHistory();
  const onClickAdmin = () => 
  history.push({pathname:"/users", state:{isAdmin: true}});
  const onClickGeneral = () => 
  history.push({pathname:"/users", state:{isAdmin: false}});
  return (
    <SContainer>
      <h2>HOMEです</h2>
      <SecondaryButton onClick={onClickAdmin}>一般ユーザー</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>管理者ユーザー</SecondaryButton>
    </SContainer>
  );
}

const SContainer = styled.div`
text-align: center;
`;