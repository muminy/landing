import Container from "./Container";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({children}) {
  return (
    <div className="layout">
      <Header />
      <Container>{children}</Container>
      <Footer />
    </div>
  );
}
