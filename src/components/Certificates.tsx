const certificateGroups = [
  {
    title: "Oracle Academy",
    icon: "💻",
    certificates: [
     "https://drive.google.com/drive/folders/1Ol8QIeXmlQyNs5fqYu19KggUUpT3zep1?usp=sharing",
    ],
  },

  {
    title: "Invofest",
    icon: "🏆",
    certificates: [
      "https://drive.google.com/drive/folders/1Ol8QIeXmlQyNs5fqYu19KggUUpT3zep1?usp=sharing",
    ],
  },



  {
    title: "Networking",
    icon: "🌐",
    certificates: [
     "https://drive.google.com/drive/folders/1Ol8QIeXmlQyNs5fqYu19KggUUpT3zep1?usp=sharing",
    ],
  },
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="max-w-6xl mx-auto py-16 px-6"
    >
      {/* Header */}
      <div className="text-center mb-10">
        <p className="text-blue-500 mb-2">
          Certificates
        </p>

        <h2 className="text-3xl md:text-4xl font-bold">
          Sertifikat Saya
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {certificateGroups.map((cert, index) => (
          <div
            key={index}
            className="
              bg-zinc-900/70
              border border-zinc-800
              rounded-2xl
              p-5
              hover:border-blue-500
              transition
            "
          >
            {/* Top */}
            <div className="flex items-center gap-4 mb-4">
              <div className="text-4xl">
                {cert.icon}
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  {cert.title}
                </h3>

                <p className="text-sm text-zinc-400">
                  1 Link Google Drive
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-2">
              {cert.certificates.map((file, i) => (
                <a
                  key={i}
                  href={file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    bg-blue-600
                    hover:bg-blue-500
                    px-4
                    py-2
                    rounded-xl
                    text-sm
                    text-white
                    transition
                  "
                >
                  Lihat Sertifikat
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}