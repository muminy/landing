import AppSkills from "./AppSkills";

export default function Skills() {
  return (
    <div className="hero-skills text-center font-light">
      <header>Öne Çıkan Özellikler</header>
      <p className="mx-auto w-full lg:w-2/5 lg:w-3/5">
        Dünyanın dört bir yanındaki yeni ve büyük sanatçıların sürekli genişleyen bir
        müzik karışımını keşfedin, yayınlayın ve paylaşın.
      </p>
      <AppSkills />
    </div>
  );
}
