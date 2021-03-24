import DonwloadApps from "components/DownloadApps";
import LandingBigText from "components/LandingBigText";
import Layout from "components/Layout";
import Skills from "components/Skills";
import Carousel from "components/Carousel";

export default function Home() {
  return (
    <Layout>
      <div className="leftcard" />
      <div className="rightcard" />
      <LandingBigText />
      <Carousel />
      <DonwloadApps />
      <Skills />
    </Layout>
  );
}
