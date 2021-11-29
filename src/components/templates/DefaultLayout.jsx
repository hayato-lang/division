import { Footer } from "../atmos/layout/Footer";
import { Header } from "../atmos/layout/Header";

export const DefaultLayout = (props) => {
  const { children } = props;
  return (
    <>
      <Header/>
      {children}
      <Footer/>
    </>
  );
}