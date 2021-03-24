import Container from "./Container";
import CustomLink from "./CustomLink";

export default function Footer() {
  return (
    <div className="footer">
      <Container>
        <div className="flex text-center xl:text-left lg:text-left flex-wrap items-center xl:items-start lg:items-start md:items-center sm:items-center">
          <div className="w-full mb-10 xl:mb-0 lg:mb-0 xl:w-3/12 lg:w-3/12 ">
            <div className="footer-links">
              <h1>featmix</h1>
              <CustomLink text="Genel Bakış" href="/" />
              <CustomLink text="İndir" href="/" />
              <CustomLink text="Özellikler" href="/" />
              <CustomLink text="Şirket" href="/" />
            </div>
          </div>
          <div className="w-full mb-10 xl:mb-0 lg:mb-0 xl:w-3/12 lg:w-3/12 ">
            <div className="footer-links">
              <h1>Şirket</h1>
              <CustomLink text="Genel Bakış" href="/" />
              <CustomLink text="İndir" href="/" />
              <CustomLink text="Özellikler" href="/" />
              <CustomLink text="Şirket" href="/" />
            </div>
          </div>
          <div className="w-full mb-10 xl:mb-0 lg:mb-0 xl:w-3/12 lg:w-3/12 ">
            <div className="footer-links">
              <h1>İndir</h1>
              <CustomLink text="IOS" href="/" />
              <CustomLink text="Android" href="/" />
              <CustomLink text="Mac" href="/" />
              <CustomLink text="Windows" href="/" />
              <CustomLink text="Linux" href="/" />
            </div>
          </div>
          <div className="w-full mb-10 xl:mb-0 lg:mb-0 xl:w-3/12 lg:w-3/12 ">
            <div className="footer-links">
              <h1>Özellikler</h1>
              <div className="flex flex-wrap">
                <div className="w-full xl:w-2/5 lg:w-2/5 ">
                  <CustomLink text="Genel Bakış" href="/" />
                  <CustomLink text="İndir" href="/" />
                  <CustomLink text="Özellikler" href="/" />
                  <CustomLink text="Şirket" href="/" />
                </div>
                <div className="w-full xl:w-2/5 lg:w-2/5">
                  <CustomLink text="Genel Bakış" href="/" />
                  <CustomLink text="İndir" href="/" />
                  <CustomLink text="Özellikler" href="/" />
                  <CustomLink text="Şirket" href="/" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="bottom-footer">
        <Container className="container max-w-7xl mx-auto">2021 © featmix ltd</Container>
      </div>
    </div>
  );
}
