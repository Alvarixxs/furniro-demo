import ContactForm from "@/app/ui/_components/_contact/ContactForm";
import ContactInfo from "@/app/ui/_components/_contact/ContactInfo";

function Contact() {
  return (
    <section className="flex flex-col items-center gap-16 md:gap-32 px-6">
      <div className="flex flex-col items-center gap-2 mt-24">
        <h2 className="font-semibold text-4xl text-center">Get In Touch With Us</h2>
        <p className="text-base text-light-gray max-w-2xl text-center">
          For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-20 md:gap-40 mb-16">
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  )
}

export default Contact;