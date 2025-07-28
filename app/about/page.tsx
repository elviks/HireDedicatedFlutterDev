import Image from "next/image";

const teamMembers: { name: string; role: string; img: string; desc: string }[] =
     [
          {
               name: "Jane Doe",
               role: "Flutter Developer",
               img: "https://randomuser.me/api/portraits/women/44.jpg",
               desc: "Expert in cross-platform mobile development and passionate about building beautiful apps.",
          },
          {
               name: "John Smith",
               role: "Lead Engineer",
               img: "https://randomuser.me/api/portraits/men/32.jpg",
               desc: "Loves solving complex problems and leading high-performing teams.",
          },
          {
               name: "Priya Patel",
               role: "UI/UX Designer",
               img: "https://randomuser.me/api/portraits/women/68.jpg",
               desc: "Designs intuitive, delightful user experiences for mobile and web.",
          },
          {
               name: "Carlos Ruiz",
               role: "QA Specialist",
               img: "https://randomuser.me/api/portraits/men/65.jpg",
               desc: "Ensures every app is bug-free and performs flawlessly.",
          },
          {
               name: "Emily Chen",
               role: "Project Manager",
               img: "https://randomuser.me/api/portraits/women/12.jpg",
               desc: "Keeps projects on track and clients in the loop.",
          },
          {
               name: "Liam O'Brien",
               role: "Backend Developer",
               img: "https://randomuser.me/api/portraits/men/41.jpg",
               desc: "Builds robust, scalable APIs and cloud integrations.",
          },
     ];

function shuffle<T>(array: T[]): T[] {
     let arr = array.slice();
     for (let i = arr.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [arr[i], arr[j]] = [arr[j], arr[i]];
     }
     return arr;
}

export default function AboutPage() {
     const shuffled = shuffle(teamMembers).slice(0, 3);
     return (
          <section className="relative min-h-screen py-20 bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
               <div className="container px-4 mx-auto relative z-10">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                         <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
                              About Us
                         </h1>
                         <p className="text-xl text-muted-foreground mb-6">
                              We are passionate about building world-class
                              Flutter apps that empower businesses to grow,
                              innovate, and succeed in the digital era.
                         </p>
                         <p className="text-xl text-muted-foreground mb-6">
                              Our mission is to connect you with rigorously
                              vetted, highly skilled Flutter developers who
                              deliver exceptional results—fast. We believe in
                              transparency, collaboration, and a relentless
                              focus on quality.
                         </p>
                    </div>
                    <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-2xl p-8 md:p-12 max-w-4xl mx-auto mb-16 border border-blue-100">
                         <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
                              Our Values
                         </h2>
                         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                              {[
                                   {
                                        icon: "🤝",
                                        label: "Collaboration",
                                        desc: "We work closely with clients to turn ideas into reality.",
                                   },
                                   {
                                        icon: "🚀",
                                        label: "Innovation",
                                        desc: "We embrace new technologies and creative solutions.",
                                   },
                                   {
                                        icon: "⭐",
                                        label: "Excellence",
                                        desc: "We deliver high-quality work and exceed expectations.",
                                   },
                              ].map((val, i) => (
                                   <div
                                        key={val.label}
                                        className="text-center group"
                                   >
                                        <div
                                             className="mx-auto mb-3 w-14 h-14 rounded-full bg-gradient-to-br from-indigo-100 to-blue-100 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-indigo-200 transition-transform duration-300 animate-bounce-slow"
                                             style={{
                                                  animationDelay: `${i * 0.2}s`,
                                             }}
                                        >
                                             <span className="text-3xl">
                                                  {val.icon}
                                             </span>
                                        </div>
                                        <h3 className="font-semibold mb-2 text-lg">
                                             {val.label}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                             {val.desc}
                                        </p>
                                   </div>
                              ))}
                         </div>
                    </div>
                    <div className="max-w-4xl mx-auto">
                         <h2 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
                              Meet Our Team
                         </h2>
                         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                              {shuffled.map((member, i) => (
                                   <div
                                        key={member.name}
                                        className="flex flex-col items-center bg-white/80 rounded-xl shadow-xl p-6 group hover:scale-105 hover:shadow-2xl transition-all duration-300"
                                   >
                                        <div className="relative mb-4">
                                             <Image
                                                  src={member.img}
                                                  alt={member.name}
                                                  width={90}
                                                  height={90}
                                                  className="rounded-full border-4 border-blue-100 shadow-lg group-hover:border-indigo-300 group-hover:shadow-indigo-200 transition-all duration-300"
                                             />
                                             <span className="absolute bottom-0 right-0 w-5 h-5 bg-gradient-to-br from-indigo-400 to-blue-400 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow">
                                                  {i + 1}
                                             </span>
                                        </div>
                                        <h4 className="font-semibold mb-1 text-lg">
                                             {member.name}
                                        </h4>
                                        <p className="text-sm text-muted-foreground mb-2">
                                             {member.role}
                                        </p>
                                        <p className="text-xs text-gray-500 text-center">
                                             {member.desc}
                                        </p>
                                   </div>
                              ))}
                         </div>
                    </div>
               </div>
          </section>
     );
}
