import styled from "styled-components";
import { Input } from "../atmos/input/Input";
import { PrimaryButton } from "../atmos/PrimaryButton"

export const SearchInput = () => {
  return (
    <SContainer>
      <Input type="text" placeholder="検索条件をハゲタコ" />
      <SButtonWrapper>
        <PrimaryButton>検索</PrimaryButton>
      </SButtonWrapper>
    </SContainer>
  );
}

const SContainer = styled.div`
display: flex;
align-items: center;
`;

const SButtonWrapper = styled.div`
padding-left: 8px;
`;