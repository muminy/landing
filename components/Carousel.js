import {useEffect} from "react";

export default function Carousel() {
  useEffect(() => {
    const getClasses = document.querySelectorAll(".op-img");
    getClasses.forEach((element, index) => {
      element.addEventListener("click", (event) => {
        if (index === 0) {
          getClasses[1].dataset.post = 1;
          getClasses[2].dataset.post = -1;
          getClasses[0].dataset.post = 0;
        } else if (index === 1) {
          getClasses[1].dataset.post = 0;
          getClasses[0].dataset.post = -1;
          getClasses[2].dataset.post = 1;
        } else {
          getClasses[0].dataset.post = 1;
          getClasses[2].dataset.post = 0;
          getClasses[1].dataset.post = -1;
        }
      });
    });
  }, []);

  return (
    <div className="hidden xl:flex lg:flex items-center justify-center custom-slider w-full relative">
      <div data-post="-1" className="op-img">
        <img className="mx-10 w-full" src="./images/screen.png" />
      </div>
      <div data-post="0" className="op-img">
        <img className="mx-10 w-full" src="./images/screen.png" />
      </div>
      <div data-post="1" className="op-img">
        <img className="mx-10 w-full" src="./images/screen.png" />
      </div>
    </div>
  );
}
