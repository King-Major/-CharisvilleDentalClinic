import { useEffect, useState } from "react";
import mark from "../assets/mark.png";

export default function Footer() {
  const [documentType, setDocumentType] = useState(null);

  return (
    <>
      <footer className="relative border-t border-cream-line py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row md:items-end md:justify-between gap-10">
        <div>
          <img src={mark} alt="Charisville" className="h-8 w-auto mb-5" />
          <p className="font-body text-sm text-slate-light max-w-xs leading-relaxed">
            A dental home for all — comprehensive, accessible and affordable care in Ibafo, Ogun State.
          </p>
        </div>

        <div className="flex flex-col gap-2 md:items-end">
          <a
            href="mailto:charisvilledc@gmail.com"
            className="font-body text-sm text-slate hover:text-navy transition-colors duration-300"
          >
            charisvilledc@gmail.com
          </a>
          <a
            href="tel:+2347088810479"
            className="font-body text-sm text-slate hover:text-navy transition-colors duration-300"
          >
            0708 881 0479
          </a>
          <span className="font-body text-sm text-slate-light">
            9am – 5pm
          </span>
          <a href="https://wa.me/2347088810479" target="_blank" rel="noreferrer" className="font-body text-sm text-teal-deep hover:text-navy transition-colors duration-300">WhatsApp us</a>
          <span className="font-body text-xs text-slate-light">Instagram · Facebook · Twitter · TikTok · LinkedIn · Google Business Profile</span>
        </div>
      </div>

        <div className="max-w-7xl mx-auto px-6 md:px-10 mt-12 pt-8 border-t border-cream-line flex flex-col sm:flex-row justify-between gap-4">
          <p className="font-body text-xs text-slate-light">
            © {new Date().getFullYear()} Charisville Dental Clinic. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 font-body text-xs text-slate-light">
            <button type="button" onClick={() => setDocumentType("terms")} className="hover:text-navy text-left">Terms &amp; Conditions</button>
            <button type="button" onClick={() => setDocumentType("privacy")} className="hover:text-navy text-left">Privacy Policy</button>
            <span>Km 32 Lagos–Ibadan Expressway, Ibafo, Ogun State.</span>
          </div>
        </div>
      </footer>

      {documentType && (
        <PolicyModal documentType={documentType} onClose={() => setDocumentType(null)} />
      )}
    </>
  );
}

function PolicyModal({ documentType, onClose }) {
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  const isTerms = documentType === "terms";

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8" role="dialog" aria-modal="true" aria-labelledby="policy-title">
      <button type="button" aria-label="Close policy" onClick={onClose} className="absolute inset-0 bg-navy/50 backdrop-blur-sm" />
      <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white p-7 shadow-soft md:p-12">
        <button type="button" onClick={onClose} aria-label="Close policy" className="absolute right-5 top-5 h-10 w-10 rounded-full border border-cream-line text-xl text-slate hover:border-teal hover:text-navy">×</button>
        <p className="font-body text-sm tracking-wide text-teal-deep">Charisville Dental Clinic</p>
        <h2 id="policy-title" className="font-display mt-3 pr-12 text-2xl font-semibold text-navy md:text-3xl">
          {isTerms ? "Terms & Conditions" : "Privacy Policy"}
        </h2>
        {isTerms ? <TermsContent /> : <PrivacyContent />}
      </div>
    </div>
  );
}

function PolicySection({ title, children }) {
  return (
    <section className="border-t border-cream-line pt-5">
      <h3 className="font-display text-lg font-semibold text-navy">{title}</h3>
      <div className="mt-3 space-y-2 font-body text-sm leading-relaxed text-slate">{children}</div>
    </section>
  );
}

function TermsContent() {
  return (
    <div className="mt-8 space-y-7">
      <PolicySection title="1. Appointments and Bookings">
        <p><strong className="text-navy">Arrival:</strong> Patients must arrive 10–15 minutes before their scheduled appointment to complete paperwork.</p>
        <p><strong className="text-navy">Late Arrivals:</strong> If a patient is more than 15 minutes late, the clinic may need to reschedule the appointment, and a late fee may apply.</p>
      </PolicySection>
      <PolicySection title="2. Cancellations and Missed Appointments">
        <p><strong className="text-navy">Notice Period:</strong> Patients must give at least 24 to 48 hours notice to cancel or reschedule an appointment.</p>
        <p><strong className="text-navy">Cancellation Fees:</strong> Missing an appointment or canceling late incurs a fee at the discretion of the clinic.</p>
      </PolicySection>
      <PolicySection title="3. Fees and Payments">
        <p><strong className="text-navy">Payment Timing:</strong> Payment is due immediately after each treatment session.</p>
        <p><strong className="text-navy">Deposits:</strong> Large treatments or specialist visits require an advance deposit, often non-refundable if canceled late and purchases are made.</p>
        <p><strong className="text-navy">Price Changes:</strong> The clinic has the right to update its price list at any time.</p>
      </PolicySection>
      <PolicySection title="4. Treatment Policies">
        <p><strong className="text-navy">Consent:</strong> Patients must sign a treatment plan and give informed consent before any major procedure starts.</p>
        <p><strong className="text-navy">Referrals:</strong> The clinic may refer patients to external specialists if a procedure requires advanced care.</p>
      </PolicySection>
      <PolicySection title="5. Patient Responsibilities">
        <p><strong className="text-navy">Medical History:</strong> Patients must provide accurate and updated medical history to ensure safe treatment.</p>
        <p><strong className="text-navy">Conduct:</strong> The clinic has a zero-tolerance policy for abusive or threatening behavior toward staff or other patients.</p>
      </PolicySection>
      <PolicySection title="6. Website Use and Acceptance">
        <p>These website terms outline the rules for using the Charisville Dental Clinic website. Charisville Dental Clinic is located at Ibafo Bus Stop, next to SLOT office, Km 32 Lagos–Ibadan Expressway, Ogun State.</p>
        <p>By accessing this website, you confirm that you accept these terms and conditions in full. Do not continue to use the website if you do not accept all of the terms stated here.</p>
        <p>“Client”, “you” and “your” refer to the person accessing this website. “The clinic”, “we”, “our” and “us” refer to Charisville Dental Clinic. These terms apply to the use of this website and the services and information provided through it.</p>
      </PolicySection>
      <PolicySection title="7. Cookies">
        <p>We may use cookies and similar technologies to help the website function, remember preferences, understand how visitors use the site, and improve the online booking experience. By using the website, you consent to cookies in accordance with this Privacy Policy. You can adjust cookie settings through your browser.</p>
      </PolicySection>
      <PolicySection title="8. License and Website Content">
        <p>Unless otherwise stated, Charisville Dental Clinic and its licensors own the intellectual property rights for the material on this website. All intellectual property rights are reserved.</p>
        <p><strong className="text-navy">You must not:</strong></p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Republish material from this website.</li>
          <li>Sell, rent or sub-license material from this website.</li>
          <li>Reproduce, duplicate or copy material from this website.</li>
          <li>Redistribute content from Charisville Dental Clinic unless the content is specifically made for redistribution.</li>
        </ul>
      </PolicySection>
      <PolicySection title="9. Linking to Our Content">
        <p>Government agencies, search engines, news organizations and online directories may link to our website without prior written approval when the link is not misleading, does not falsely imply sponsorship or endorsement, and fits the context of the linking website.</p>
        <p>Other organizations may request permission to link to our website by contacting <a href="mailto:charisvilledc@gmail.com" className="text-teal-deep hover:text-navy">charisvilledc@gmail.com</a>. Requests should include the organization name, contact information, the linking URL, and the page on our website to which the organization would like to link. Please allow 2–3 weeks for a response.</p>
        <p>Approved organizations may link using our corporate name, the relevant web address, or another description that makes sense in the context of the linking website. No use of the Charisville Dental Clinic logo or other artwork is allowed without written permission.</p>
      </PolicySection>
      <PolicySection title="10. Iframes and Visual Presentation">
        <p>Without prior approval and express written permission, you may not create frames around our web pages or use techniques that alter the visual presentation or appearance of our website.</p>
      </PolicySection>
      <PolicySection title="11. Reservation of Rights and Removal of Links">
        <p>We reserve the right at any time and in our sole discretion to request the removal of any link to our website. You agree to immediately remove links upon such request. We also reserve the right to amend these terms and our linking policy at any time. Continued linking to our website means you agree to be bound by the current terms.</p>
        <p>If you find a link on our website or a linked website objectionable for any reason, contact us. We may consider requests to remove links but are not obligated to do so or to respond directly.</p>
        <p>While we work to keep the information on this website correct, we do not warrant that it is complete or accurate, that the website will remain available, or that its material will remain up to date.</p>
      </PolicySection>
      <PolicySection title="12. Content Liability">
        <p>We are not responsible or liable for content appearing on websites that link to or from our website. No link may appear on a website or within content that is libelous, obscene, criminal, or that infringes or advocates the infringement of another party’s rights.</p>
      </PolicySection>
      <PolicySection title="13. Disclaimer">
        <p>To the maximum extent permitted by applicable law, we exclude representations, warranties and conditions relating to this website and its use, including warranties of satisfactory quality, fitness for purpose, and reasonable care and skill.</p>
        <p>Nothing in this disclaimer limits or excludes liability for death or personal injury resulting from negligence, fraud or fraudulent misrepresentation, or any liability that cannot be limited or excluded under applicable law.</p>
        <p>To the extent that this website and its information and services are provided free of charge, we will not be liable for loss or damage of any nature.</p>
      </PolicySection>
      <PolicySection title="14. Contact Information">
        <p>If you have questions about these terms, contact us at <a href="mailto:charisvilledc@gmail.com" className="text-teal-deep hover:text-navy">charisvilledc@gmail.com</a> or <a href="tel:+2347088810479" className="text-teal-deep hover:text-navy">0708 881 0479</a>.</p>
      </PolicySection>
    </div>
  );
}

function PrivacyContent() {
  return (
    <div className="mt-8 space-y-7">
      <PolicySection title="1. Introduction"><p>Charisville Dental Clinic respects your privacy and protects your personal health information. This policy explains what information we collect and how we use it to provide you with dental care.</p></PolicySection>
      <PolicySection title="2. Information We Collect">
        <p>We collect personal and medical details to treat you safely. This includes:</p>
        <p><strong className="text-navy">Personal Details:</strong> Full name, date of birth, home address, email address, and phone number.</p>
        <p><strong className="text-navy">Medical and Dental History:</strong> Past health conditions, allergies, current medications, dental records, X-rays, and treatment plans.</p>
        <p><strong className="text-navy">Billing Information:</strong> Payment details, insurance provider, and claim records.</p>
        <p><strong className="text-navy">Website Data:</strong> IP addresses and cookies if you visit our online booking page.</p>
      </PolicySection>
      <PolicySection title="3. How We Use Your Information"><p>We use your data only for direct patient care and clinic operations, such as providing dental treatments, cleanings, and emergency care; scheduling appointments and sending reminders; processing payments and filing insurance claims; and improving our services and maintaining office safety.</p></PolicySection>
      <PolicySection title="4. How We Share Your Information"><p>We keep your records confidential and never sell your data. We share information only when necessary with other healthcare specialists or laboratories involved in your treatment, insurance companies or payment plan administrators for billing, or when required by law, court order, or public health authorities.</p></PolicySection>
      <PolicySection title="5. Data Security"><p>We use secure digital software and locked physical files to protect your personal and dental records from unauthorized access, loss, or theft.</p></PolicySection>
      <PolicySection title="6. Your Rights"><p>You have the right to access and view a copy of your dental and medical records, request corrections to inaccurate personal information, and ask us to limit how we share your health data.</p></PolicySection>
    </div>
  );
}
