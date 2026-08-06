import SectionHeading from "../components/SectionHeading";
import Footer from "../components/Footer";

export default function About() {
  return (
    <main className="min-h-screen flex flex-col bg-black text-white px-6 pt-24">
        {/* HEADER */}
        <div className="max-w-3xl mx-auto w-full">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
                About
            </h1>

            <p className="mt-3 text-gray-400 text-sm uppercase tracking-widest">
                Filmmaker · Software Engineer
            </p>
        </div>
        {/* IMAGE + TEXT BLOCK */}
        <div className="max-w-3xl mx-auto w-full mt-12 flex flex-col md:flex-row items-start gap-8">

            {/* IMAGE */}
            <div className="md:w-1/3 flex-shrink-0">
                <div className="aspect-square rounded-full bg-zinc-900 overflow-hidden">
                    <img
                    src="/headshot-square.jpeg"
                    className="w-full h-full object-cover"
                    alt="Portrait"
                    />
                </div>
            </div>

            {/* TEXT */}
            <div className="md:w-2/3 space-y-6 text-gray-300 leading-relaxed">
                <h2 className="text-2xl font-semibold mb-2 text-gray-200">Filmmaker</h2>
                <p className="mb-10">
                    I'm more than just a Cinematographer - One-man Youtube productions, Director of Photography, 1st or 2nd Assistant Camera, Editor, Colorist - I've done it all.<br /><br />

                    It's 2009, I'm at home playing on my parents' laptop and I find an intriguing star-shaped logo on the dock. "What's that?" I wonder. Within 24 hours I had learned the basics, recorded, and edited the very first Youtube video.<br /><br />

                    From iMovie to After Effects, Premiere, and finally Davinci Resolve; from my first camcorder to a Canon G7x, my first Sony a7, and now Blackmagic and film cameras; and from making Youtube videos with my sister in the basement to DP'ing on real sets with a whole team - it all started that one morning when I opened iMovie for the very first time.<br /><br />

                    One thing remains consistent, however: to improve and learn with each project - to tell the story more engagingly, to present visuals more stunningly, and/or to help a team of people do the same.
                </p>

                <h2 className="text-2xl font-semibold mb-2 text-gray-200">Software Engineer</h2>
                <p className="mb-10">
                    I'm also a software engineer with a Masters Degree in Computer Science and experience spanning Full-Stack web development, databases, interactive applications, and reporting.<br /><br />
                    
                    At CodeLevel Services, I led reporting and data visualization initiatives, helping transform business data into actionable insights for clients. This experience strengthened my ability to work with databases, analyze complex datasets, and deliver aesthetically pleasing reporting solutions that support real-world decision-making.<br /><br />
                    During my internship at Discovery, Inc., I contributed to an internal web application using Python, Flask, SQL, and HTML/CSS. In addition to application development, I gained exposure to DevOps workflows, automation, and database-driven systems within a large-sccale enterprise environement.<br /><br />
                    At the University of Tennessee, I served as both a Teaching Assistant, where I taught fellow students and graded coursework, and as a Research Assistant, where I used Unreal Engine 5 to help create an interactive Virtual Reality training experience in pursuit of proper Alzheimer's Patient Care<br /><br />
                    
                    Beyond my professional work, I also built this very website as a personal project using Next.js, React, TypeScript, and Tailwind CSS.
                    This has strengthened my understanding of modern web development, component-based architecture, responsive design, and user experience.<br /><br />

                    As a result, I have accrued a strong foundation in software engineering with experience across web development, databases, interactive applications, and modern workflows. My technical background includes C++, Python, SQL, TypeScript, JavaScript, React, Next.js, Git, and exposure to DevOps practices and tools such as Jenkins.
                </p>
            </div>
        </div>

        <div className="flex-1" />

        <Footer />
    </main>
  );
}