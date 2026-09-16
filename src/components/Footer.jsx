import mark from "../assets/mark.png";

export default function Footer() {
  return (
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
          <a href="https://dentalclinicapp.com/terms-and-conditions" target="_blank" rel="noreferrer" className="hover:text-navy">Terms &amp; Conditions</a>
          <a href="#privacy" className="hover:text-navy">Privacy Policy</a>
          <span>Km 32 Lagos–Ibadan Expressway, Ibafo, Ogun State.</span>
        </div>
      </div>

      <div id="privacy" className="max-w-7xl mx-auto px-6 md:px-10 mt-12 pt-8 border-t border-cream-line">
        <details>
          <summary className="font-body text-sm text-slate cursor-pointer">Privacy Policy</summary>
          <div className="font-body text-sm text-slate leading-relaxed max-w-3xl mt-5 space-y-3">
            <p>Charisville Dental Clinic respects your privacy and protects your personal health information. We collect contact, medical, dental, billing and website data only as needed to provide care, schedule appointments, process payments, improve services and maintain safety.</p>
            <p>We keep records confidential and do not sell your data. Information may be shared only with healthcare specialists or laboratories involved in your treatment, insurers or payment administrators, or where required by law or public health authorities.</p>
            <p>We use secure digital software and locked physical files. You may request access to your records, corrections to inaccurate information, or limits on how your health data is shared. Contact <a href="mailto:charisvilledc@gmail.com" className="text-teal-deep">charisvilledc@gmail.com</a> or <a href="tel:+2347088810479" className="text-teal-deep">0708 881 0479</a>.</p>
          </div>
        </details>
      </div>
    </footer>
  );
}
