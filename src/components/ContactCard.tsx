"use client";
import Button from "../components/Button"
import Modal from "./EmailModal";
import {useState} from "react";

const openLink = () => {
  const url = "https://wa.me/+6281291010634";
  window.open(url, "_blank", "noopener,noreferrer")
}

const ContactCard = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Subject:", subject);

    //Reset form dan close modal
    setEmail("");
    setSubject("");
    setIsModalOpen (false);
  };

  return (
    <>
 <div className="px-24 py-12">
 <section className="bg-zinc-900 px-18 py-48 rounded-[24px] text-left">
   <div className="flex flex-col space-y-[56px]">
     <div className="flex flex-col space-y-[16px] leading-snug">
       <p className="text-xl text-[#939393]">💡 Let’s Connect and Create Something Great!</p>
       <h2 className="text-[44px] font-semibold w-[800px]">
         Got a project or idea? I’d love to hear about it. Let’s create something amazing together!
       </h2>
     </div>
     <div className="space-x-4">
        <Button
          onClick={() => setIsModalOpen(true)}
          className="bg-white text-black px-[36px] py-[20px] rounded-full text-lg font-medium cursor-pointer"
        >
          📬 Send Email
        </Button>
        <Button
          onClick={openLink}
          className="bg-white text-black px-[36px] py-[20px] rounded-full text-lg font-medium cursor-pointer">
          Whatsapp
        </Button>
     </div>
   </div>
 </section>
</div>

  {/* Modal */}
  <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
  <div className="flex flex-col space-y-[4px] mb-[24px]">
      <h2 className="text-white text-xl font-semibold">Got a project in mind?</h2>
      <span className="text-[#B3B3B3] font-[20px]">Send me an email and I'll get back to you as soon as!</span>
  </div>
  <form onSubmit={handleSubmit} className="space-y-4">
    <input
      type="email"
      required
      placeholder="Your Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="w-full border-0 bg-[#272727] rounded-[8px] p-2 text-white"
    />
    <textarea
      required
      placeholder="Hey! I got this project I would like to discuss."
      value={subject}
      onChange={(e) => setSubject(e.target.value)}
      className="w-full border-0 h-[200px] bg-[#272727] rounded-[8px] p-2 text-white align-top resize-y min-h-[50px] max-h-[250px]"
    />
    <Button 
        className="bg-black w-full justify-center items-center p-2 rounded-[8px] cursor-pointer">
          <div className="flex flex-row items-center justify-center gap-4 py-1">
          <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M28.925 5.54242C28.925 5.54242 28.925 5.55492 28.925 5.56117L21.65 29.5537C21.5399 29.9434 21.3132 30.29 21.0004 30.5472C20.6876 30.8044 20.3036 30.9597 19.9 30.9924C19.8425 30.9974 19.785 30.9999 19.7275 30.9999C19.3493 31.0011 18.9786 30.894 18.6592 30.6914C18.3398 30.4887 18.085 30.1989 17.925 29.8562L13.375 20.5187C13.3295 20.4251 13.3143 20.3196 13.3315 20.217C13.3488 20.1144 13.3976 20.0197 13.4713 19.9462L20.7113 12.7062C20.8909 12.5171 20.9895 12.2654 20.9862 12.0046C20.9829 11.7438 20.8778 11.4947 20.6934 11.3103C20.509 11.1259 20.2599 11.0208 19.9991 11.0175C19.7383 11.0141 19.4866 11.1128 19.2975 11.2924L12.0538 18.5324C11.9802 18.606 11.8855 18.6549 11.7829 18.6721C11.6803 18.6894 11.5748 18.6742 11.4813 18.6287L2.13502 14.0799C1.76954 13.9046 1.46598 13.6223 1.26454 13.2706C1.06311 12.9188 0.973316 12.5141 1.00707 12.1102C1.04082 11.7062 1.19652 11.3221 1.45354 11.0086C1.71056 10.6951 2.05676 10.4672 2.44627 10.3549L26.4388 3.07992H26.4575C26.7991 2.98394 27.1601 2.98058 27.5034 3.07017C27.8468 3.15976 28.1601 3.33908 28.4113 3.58972C28.6624 3.84037 28.8424 4.15333 28.9326 4.49648C29.0229 4.83963 29.0203 5.20062 28.925 5.54242Z" fill="#FFFFFF"/>
          </svg>
            Send Email
        </div>
      </Button>
  </form>
  </Modal>
  </>
  );
};


export default ContactCard;