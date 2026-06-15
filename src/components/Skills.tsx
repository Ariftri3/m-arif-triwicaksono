import {
FaJava,
FaPython,
FaDatabase,
} from "react-icons/fa";

import {
SiFlutter,
SiNextdotjs,
SiFirebase,
} from "react-icons/si";

export default function Skills() {
const skills = [
{
    icon: <SiFlutter size={42} />,
    title: "Flutter",
    desc: "Cross Platform Mobile Development",
},
{
    icon: <FaJava size={42} />,
    title: "Java",
    desc: "Desktop & Backend Development",
},
{
    icon: <FaPython size={42} />,
    title: "Python",
    desc: "Automation & Machine Learning",
},
{
    icon: <SiNextdotjs size={42} />,
    title: "Next.js",
    desc: "Modern Web Development",
},
{
    icon: <FaDatabase size={42} />,
    title: "MySQL",
    desc: "Database Management",
},
{
    icon: <SiFirebase size={42} />,
    title: "Firebase",
    desc: "Authentication & Cloud Services",
},
];

return (
<section
    id="skills"
    className="max-w-6xl mx-auto py-28 px-6"
>
    <div className="text-center mb-16">
    <p className="text-blue-500 font-medium mb-3">
        Tech Stack
    </p>

    <h2 className="text-5xl font-bold mb-4">
        Teknologi Yang Saya Kuasai
    </h2>

    <p className="text-zinc-400 max-w-2xl mx-auto">
        Beberapa teknologi yang saya gunakan
        untuk membangun aplikasi mobile,
        website modern, dan sistem informasi.
    </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
    {skills.map((skill) => (
        <div
        key={skill.title}
        className="group bg-zinc-900/70 border border-zinc-800 rounded-3xl p-8 hover:border-blue-500 transition duration-300 hover:-translate-y-2"
        >
        <div className="text-blue-500 mb-6 group-hover:scale-110 transition">
            {skill.icon}
        </div>

        <h3 className="text-2xl font-bold mb-3">
            {skill.title}
        </h3>

        <p className="text-zinc-400">
            {skill.desc}
        </p>
        </div>
    ))}
    </div>
</section>
);
}