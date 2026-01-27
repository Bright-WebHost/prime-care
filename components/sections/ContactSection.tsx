export default function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-white py-28">

      {/* MOVING HEADING */}
      <div className="relative mb-20 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap text-[clamp(3rem,8vw,7rem)] font-extrabold uppercase tracking-wide">
          <span className="mx-6 text-brand-yellow">GET</span>
          <span className="mx-6 text-brand-navy">IN TOUCH</span>

          <span className="mx-6 text-brand-yellow">GET</span>
          <span className="mx-6 text-brand-navy">IN TOUCH</span>

          <span className="mx-6 text-brand-yellow">GET</span>
          <span className="mx-6 text-brand-navy">IN TOUCH</span>
        </div>
      </div>

      {/* CONTACT INFO */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 text-center md:grid-cols-3">

          {/* PHONE */}
          <div className="space-y-4">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-navy/5">
              <svg
                width="28"
                height="28"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-brand-navy"
              >
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2
                  19.8 19.8 0 0 1-8.6-3.1
                  19.5 19.5 0 0 1-6-6
                  19.8 19.8 0 0 1-3.1-8.6
                  A2 2 0 0 1 4.1 2h3
                  a2 2 0 0 1 2 1.7
                  12.8 12.8 0 0 0 .7 2.8
                  a2 2 0 0 1-.5 2.1L8.1 9.9
                  a16 16 0 0 0 6 6l1.3-1.3
                  a2 2 0 0 1 2.1-.5
                  12.8 12.8 0 0 0 2.8.7
                  a2 2 0 0 1 1.7 2z"
                />
              </svg>
            </div>

            <p className="text-sm uppercase tracking-widest text-brand-gray">
              Phone
            </p>

            <p className="text-lg font-semibold text-brand-navy">
              +974 513 757 47
            </p>

            <p className="text-sm text-brand-gray">
              Sales & Technical
            </p>

            <p className="text-lg font-semibold text-brand-navy">
              +974 513 757 67
            </p>

            <p className="text-sm text-brand-gray">
              Workshop
            </p>
          </div>

          {/* EMAIL */}
          <div className="space-y-4">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-navy/5">
              <svg
                width="28"
                height="28"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-brand-navy"
              >
                <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
                <path d="m22 6-10 7L2 6" />
              </svg>
            </div>

            <p className="text-sm uppercase tracking-widest text-brand-gray">
              Email
            </p>

            <p className="text-lg font-semibold text-brand-navy">
              info@primecarets.com
            </p>
          </div>

          {/* LOCATION */}
          <div className="space-y-4">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-navy/5">
              <svg
                width="28"
                height="28"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-brand-navy"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13
                  a9 9 0 1 1 18 0z"
                />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>

            <p className="text-sm uppercase tracking-widest text-brand-gray">
              Location
            </p>

            <p className="text-lg font-semibold text-brand-navy">
              Ezdan Oasis, Doha
            </p>

            <p className="text-sm text-brand-gray">
              Shop No. 1, Building 288,<br />
              Street 5, Zone D, Qatar
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
