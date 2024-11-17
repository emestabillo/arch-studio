import InternalHeader from "@/components/InternalHeader/InternalHeader";
import ContactForm from "@/components/Form/Form";
import heroImageDesktop from "../../../public/images/contact/desktop/image-hero.jpg";
import heroImageTablet from "../../../public/images/contact/tablet/image-hero.jpg";
import heroImageMobile from "../../../public/images/contact/mobile/image-hero.jpg";
import styles from "./contact.module.scss";
import ContactCard from "@/components/ContactCard/ContactCard";

function contact() {
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
      <section className={`top-spacing bottom-spacing ${styles.mainWrapper}`}>
        <div className={`container decorativeLine ${styles.contentWrapper}`}>
          <h2>Contact Details</h2>
          <div className={styles.detailsGrid}>
            <ContactCard
              office="Main Office"
              mail="archone@mail.com"
              address="1892 Chenoweth Drive TN"
              phone="123-456-3451"
            />
            <ContactCard
              office="Office II"
              mail="archone@mail.com"
              address="3399 Wines Lane TX"
              phone="832-123-4321"
            />
          </div>
        </div>
      </section>
      <section className={`top-spacing bottom-spacing ${styles.mainContainer}`}>
        <div className={`container ${styles.contentWrapper}`}>
          <h2>Connect with us</h2>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}

export default contact;
