const projects = [
{
icon: "🏠",
title: "AI Interior Visualizer",
description:
    "Aplikasi berbasis Python yang menggunakan AI untuk menghasilkan visualisasi interior rumah berdasarkan input pengguna.",
tech: ["Python", "AI", "Computer Vision"],
github: "https://github.com/Ariftri3/interior-desain-berbasis-ai.git",
},
{
icon: "📰",
title: "Pendetksi Berita Dengan Menggunakan Naive Bayes",
description:
    "Sistem deteksi berita palsu menggunakan algoritma Naive Bayes.",
tech: ["Python", "Machine Learning"],
github: "https://github.com/Ariftri3/pendeteksi-berita-hoax-dengan-ai.git",
},
{
icon: "🍽️",
title: "Aplikasi Cathering",
description:
    "Aplikasi Cathering dan jajanan pasar ",
tech: ["php", "Laravel", "MySQL"],
github: "https://github.com/mfaizyudhi/catering.git",
},
{
icon: "🗺️",
title: "Web Pariwisata",
description:
    "Web Pariwisata dan pemesanan tiket Liburan.",
tech: ["HTML", "CSS", "JavaScript", "MySQL"],
github: "https://github.com/Ariftri3/Web-Pariwisata.git",
},
];

export default function Projects() {
return (
<section
    id="projects"
    className="max-w-6xl mx-auto py-28 px-6"
>
    <div className="text-center mb-16">
    <p className="text-blue-500 mb-3 font-medium">
        Portfolio
    </p>

    <h2 className="text-5xl font-bold mb-4">
        Featured Projects
    </h2>

    <p className="text-zinc-400">
        Beberapa project yang pernah saya kerjakan.
    </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
    {projects.map((project) => (
        <div
        key={project.title}
        className="
            group
            bg-gradient-to-br
            from-zinc-900
            to-zinc-950
            border
            border-zinc-800
            rounded-3xl
            p-8
            hover:border-blue-500
            hover:-translate-y-2
            hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]
            transition-all
            duration-300
        "
        >
        <div className="text-7xl mb-6">
            {project.icon}
        </div>

        <h3 className="text-2xl font-bold mb-4">
            {project.title}
        </h3>

        <p className="text-zinc-400 leading-7 mb-6">
            {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((tech) => (
            <span
                key={tech}
                className="
                px-3
                py-1
                rounded-full
                bg-blue-500/10
                border
                border-blue-500/20
                text-blue-400
                text-sm
                "
            >
                {tech}
            </span>
            ))}
        </div>

        <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
            inline-flex
            items-center
            gap-2
            px-5
            py-3
            rounded-xl
            bg-blue-600
            hover:bg-blue-700
            transition
            font-medium
            "
        >
            View Project →
        </a>
        </div>
    ))}
    </div>
</section>
);
}