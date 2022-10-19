import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Wrapper, Container, Svg } from "../styles/components/slider";

interface SliderProps {
  perView: number;
  spacing: number;
  children: React.ReactNode;
}

interface ArrowProps {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}

export default function Slider({ perView, spacing, children }: SliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    slides: {
      origin: "center",
      perView,
      spacing,
    },
  });

  return (
    <>
      <Wrapper>
        <Container ref={sliderRef} className="keen-slider">
          {children}
        </Container>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </Wrapper>
    </>
  );
}

function Arrow({ onClick, left, disabled }: ArrowProps) {
  return (
    <Svg
      onClick={onClick}
      position={left ? "left" : "right"}
      disbled={disabled}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!left && <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />}
    </Svg>
  );
}
