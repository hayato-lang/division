import { Header } from "../atmos/layout/Header";

export const HeaderOnly = (props) => {
  const { children } = props;
  return (
    <>
      <Header/>
      {children}
    </>
  );
}