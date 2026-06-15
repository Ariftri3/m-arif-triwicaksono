import {
FaGraduationCap,
FaMobileAlt,
FaPaintBrush,
FaCode,
} from "react-icons/fa";

export default function About() {
const items = [
{
    icon: <FaGraduationCap />,
    title: "Mahasiswa Informatika",
},
{
    icon: <FaMobileAlt />,
    title: "Mobile Developer",
},
{
    icon: <FaPaintBrush />,
    title: "UI/UX Designer",
},
{
    icon: <FaCode />,
    title: "Web Developer",
},
];

return (
<section
    id="about"
    className="max-w-6xl mx-auto py-28 px-6"
>
    <div className="text-center mb-16">

    <p className="text-blue-500 mb-3">
        About Me
    </p>

    <h2 className="text-5xl font-bold">
        Tentang Saya
    </h2>

    </div>

    <div className="grid md:grid-cols-4 gap-6 mb-12">

    {items.map((item) => (
        <div
        key={item.title}
        className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center"
        >
        <div className="text-blue-500 text-3xl mb-4 flex justify-center">
            {item.icon}
        </div>

        <h3 className="font-semibold">
            {item.title}
        </h3>
        </div>
    ))}

    </div>

    <p className="text-zinc-400 text-center max-w-3xl mx-auto leading-8">
   Saya adalah mahasiswa Teknik Informatika di Universitas Harkat Negeri Tegal yang berfokus pada bidang Frontend Web Development. Saya memiliki ketertarikan kuat dalam membangun website yang responsif, interaktif, serta memiliki desain antarmuka yang modern. Saya selalu antusias mempelajari teknologi web terbaru untuk menciptakan solusi digital yang bermanfaat.
    </p>
</section>
);
}