import LanguageIcon from "icons/LanguageIcon";
import LogoSvg from "icons/LogoIcon";
import MenuIcon from "icons/MenuIcon";
import Container from "./Container";

export default function Header() {
  return (
    <div className="header flex items-center justify-between">
      <Container>
        <div className="flex items-center justify-between">
          <button className="block xl:hidden lg:hidden">
            <MenuIcon size={24} color="#cccccc" />
          </button>
          <a href="/">
            <LogoSvg />
          </a>
          <div className="hidden xl:block lg:block menu_list font-normal">
            <a className="activemenu" href="/">
              Genel Bakış
            </a>
            <a href="/">İndir</a>
            <a href="/">Özellikler</a>
            <a href="/">Şirket</a>
          </div>
          <div className="flex items-center">
            <span className="font-light mr-2">TR</span>
            <LanguageIcon />
          </div>
        </div>
      </Container>
    </div>
  );
}
