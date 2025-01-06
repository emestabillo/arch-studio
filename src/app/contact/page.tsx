import InternalHeader from "@/components/shared/InternalHeader/InternalHeader";
import ContactForm from "@/components/contact/ContactForm/ContactForm";
import heroImageDesktop from "../../../public/images/contact/desktop/image-hero.jpg";
import heroImageTablet from "../../../public/images/contact/tablet/image-hero.jpg";
import heroImageMobile from "../../../public/images/contact/mobile/image-hero.jpg";
import ContactDetailsWithMap from "@/components/contact/ContactDetailsWithMap/ContactDetailsWithMap";

export default function Contact() {
  return (
    <main>
      <InternalHeader
        heading="Contact"
        subheading="Tell us about your project"
        paragraph="We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!"
        imageSrcDesktop={heroImageDesktop.src}
        imageSrcTablet={heroImageTablet.src}
        imageSrcMobile={heroImageMobile.src}
      />
      <ContactDetailsWithMap />
      <ContactForm />
    </main>
  );
}
