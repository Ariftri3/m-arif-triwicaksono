import {
FaGithub,
FaInstagram,
FaLinkedin,
FaEnvelope,
} from "react-icons/fa";

export default function Contact() {
return (
<section
    id="contact"
    className="max-w-4xl mx-auto py-40 px-6 text-center"
>
    <p className="text-blue-500 uppercase tracking-[4px] text-sm mb-4">
    Contact
    </p>

    <h2 className="text-5xl md:text-7xl font-black leading-tight">
    Let's Work
    <br />
    Together.
    </h2>

    <p className="text-zinc-400 mt-8 text-lg max-w-2xl mx-auto">
    Tertarik bekerja sama, membuat aplikasi,
    atau sekadar berdiskusi tentang teknologi?
    </p>

    <div className="flex justify-center gap-6 mt-12 flex-wrap">

    {/* GitHub */}
    <a
        href="https://github.com/Ariftri3"
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:border-blue-500 hover:-translate-y-1 transition-all"
    >
        <FaGithub size={24} />
    </a>

    {/* LinkedIn */}
    <a
        href="https://linkedin.com/in/USERNAME"
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:border-blue-500 hover:-translate-y-1 transition-all"
    >
        <FaLinkedin size={24} />
    </a>

    {/* Instagram */}
    <a
        href="https://www.instagram.com/ariftw___/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:border-blue-500 hover:-translate-y-1 transition-all"
    >
        <FaInstagram size={24} />
    </a>

    {/* Email */}
    <a
        href="mailto:ariftri815@gmail.com"
        className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:border-blue-500 hover:-translate-y-1 transition-all"
    >
        <FaEnvelope size={24} />
    </a>

    </div>
</section>
);
}