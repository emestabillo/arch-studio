// import arrow from "../../public/icons/icon-arrow.svg";
// import Button from "@/components/Button";
import ImageWithOverlayText from "@/components/ImageWithOverlayText/ImageWithOverlayText";
import imageSrcMobile from "../../public/images/home/mobile/image-small-team.jpg";
import imageSrcTablet from "../../public/images/home/tablet/image-small-team.jpg";
import imageSrcDesktop from "../../public/images/home/desktop/image-small-team.jpg";

export default function Home() {
  return (
    <main>
      <h1 className="screenReaderOnly">Welcome</h1>
      <ImageWithOverlayText
        imageSrcDesktop={imageSrcDesktop.src}
        imageSrcTablet={imageSrcTablet.src}
        imageSrcMobile={imageSrcMobile.src}
        heading="Small team, big ideas"
        ctaText="about us"
      />
      {/* <Button
        text="Click me"
        href="/about"
        // onClick={() => console.log("Button clicked")}
      />
      <Button icon={arrow} />
      <Button text={"02"} variant="light" /> */}
    </main>
  );
}
