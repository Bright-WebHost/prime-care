"use client";

import Image from "next/image";

const clients = [
  { name: "Darwish Interserve", logo: "/clients/darwish.jpg" },
  { name: "Hilton", logo: "/clients/hilton.png" },
  { name: "EFS Facilities Services", logo: "/clients/efs.png" },
  { name: "Waseef", logo: "/clients/waseef.jpg" },
  { name: "The Maintainers", logo: "/clients/maintainers.png" },
  { name: "Assets Group", logo: "/clients/Assets.png" },
];

export default function ClientsSection() {
  return (
    <section id="clients" className="section-shell">
      {/* Heading */}
      <div className="mb-10 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight">
          <span className="text-brand-navy">OUR </span>
          <span className="text-brand-yellow">CLIENTS</span>
        </h2>
      </div>

      {/* Outer Container */}
      <div className="mx-auto max-w-6xl rounded-[2.5rem] border-2 border-brand-navy p-10">
        <div className="grid grid-cols-1 gap-y-10 gap-x-12 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
          {clients.map((client) => (
            <div
              key={client.name}
              className="group flex h-28 w-full max-w-[260px] items-center justify-center rounded-xl bg-white text-center transition-all duration-500 ease-out
              hover:-translate-y-2 hover:shadow-lg"
            >
              {/* CLIENT LOGO */}
              <Image
                src={client.logo}
                alt={client.name}
                width={220}
                height={120}
                className="
                  h-50
                  w-50
                  object-contain
                  scale-110
                  opacity-90
                  transition
                  duration-300
                  group-hover:scale-125
                  group-hover:opacity-100
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
