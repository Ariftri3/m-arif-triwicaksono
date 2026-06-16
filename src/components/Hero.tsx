export default function Hero() {
return (
<section
    id="home"
    className="relative min-h-screen flex items-center overflow-hidden"
>
    {/* Glow */}
    <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/30 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 blur-[120px] rounded-full"></div>

    <div className="max-w-6xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center">

    <div>
        <span className="inline-block px-4 py-2 rounded-full border border-blue-500/30 text-blue-400 text-sm mb-6">
        👋 Welcome To My Portfolio
        </span>

        <h1 className="text-5xl md:text-7xl font-black leading-tight">
        Mohamad
        <br />
        <span className="text-blue-500">
            Arif Triwicaksono
        </span>
        </h1>

        <h2 className="text-xl md:text-2xl text-zinc-300 mt-6">
        Mobile Developer & UI/UX Designer
        </h2>

        <p className="text-zinc-400 mt-6 max-w-xl leading-8">
        Mahasiswa Teknik Informatika di Universitas Harkat Negeri
        Tegal yang berfokus pada pengembangan aplikasi mobile,
        desain antarmuka modern, dan teknologi web masa kini.
        </p>

        <div className="flex gap-4 mt-8">
        <a
            href="#projects"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold transition"
        >
            Lihat Project
        </a>

        <a
            href="/cv/CV.pdf"
            className="border border-zinc-700 hover:border-blue-500 px-6 py-3 rounded-xl transition"
        >
            Download CV
        </a>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-12">

        <div>
            <h3 className="text-3xl font-bold text-blue-500">
            5+
            </h3>
            <p className="text-zinc-400 text-sm">
            Project
            </p>
        </div>

        <div>
            <h3 className="text-3xl font-bold text-blue-500">
            5+
            </h3>
            <p className="text-zinc-400 text-sm">
            Teknologi
            </p>
        </div>

        <div>
            <h3 className="text-3xl font-bold text-blue-500">
            3+
            </h3>
            <p className="text-zinc-400 text-sm">
            Tahun Belajar
            </p>
        </div>

        </div>
    </div>

    <div className="flex justify-center">
        <div className="relative">

        <div className="absolute inset-0 bg-blue-500 blur-[100px] opacity-30 rounded-full"></div>

        <img
            src="/images/profile/me.jpeg"
            alt="Profile"
            className="relative w-80 h-80 md:w-96 md:h-96 rounded-full object-cover border-4 border-blue-500 shadow-2xl shadow-blue-500/30"
        />

        </div>
    </div>

    </div>
</section>
);
}