import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import Carousel from "react-bootstrap/Carousel";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { getDragonItem, getLoading } from "../redux/selectors";
import { getThunkData } from "../redux/thunks";
import { fetchDragon } from "../services/API";
import Slider from "../components/Slider/Slider";

import s from "./Main.module.css";
import "../App.css";

export function MainPage() {
  const dispatch = useDispatch();
  const dragon = useSelector(getDragonItem);
  const slides = dragon?.flickr_images;

  useEffect(() => {
    dispatch(getThunkData());

    //dispatch(fetchDragon);
  }, [dispatch]);

  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    slides: { origin: "center", perView: 2.5, spacing: 10 },
    range: {
      min: -5,
      max: 5,
    },
  })
  
  return (
    <div className={s.Container}>
      <h1 className="animate__animated animate__slideInUp">SpaceX Dragon</h1>

      {dragon && (
        <div className={s.Section}>
          <div className={s.Description}>
            <p className={s.Name}>{dragon.name}</p>
            <h2>Overview</h2>
            <p className={s.About}>{dragon.description}</p>

            <div className={s.AboutLink}>
              <span>
                Read more:
                <a
                  className={s.Link}
                  href="https://en.wikipedia.org/wiki/SpaceX_Dragon"
                  target="_blank"
                  rel="noreferrer"
                >
                  {dragon.wikipedia}
                </a>
              </span>
            </div>

            <div className={s.AboutLink}>
              <span className={s.Param}>
                Height
                <p>
                  {dragon.height_w_trunk?.meters} m /{" "}
                  {dragon.height_w_trunk?.feet} ft
                </p>
              </span>
            </div>

            <div className={s.AboutLink}>
              <span className={s.Param}>
                Mass
                <p>
                  {dragon.dry_mass_kg} kg / {dragon.dry_mass_lb} lb
                </p>
              </span>
            </div>

            <div className={s.AboutLink}>
              <span className={s.Param}>
                first flight
                <p>{dragon.first_flight}</p>
              </span>
            </div>
          </div>

          {/* <div className="keen-slider">
            {dragon?.flickr_images &&
              dragon.flickr_images.map((image, index) => (
                <img
                  src={image}
                  alt={image}
                  className="keen-slider__slide"
                  // className={s.Img}
                  key={index}
                />
              
              ))}
          </div> */}
        
          {/* <div ref={sliderRef} className="keen-slider">
            {dragon?.flickr_images &&
              dragon.flickr_images.map((image, index) => (
                <img
                  src={image}
                  alt={image}
                  className="keen-slider__slide"
                  // className={s.Img}
                  key={index}
                />
              
              ))}
          </div> */}
         
        </div>
      )}
      < Slider />
    </div>
  );
}
