import React from "react";
import { Link } from "react-router-dom";

// Team Images
import mariamImg from "../assets/Mariam_Mostafa.png";
import mohamedImg from "../assets/Mohamed_Adel.png";
import salmaImg from "../assets/Salma_Refat.png";
import nadineImg from "../assets/Nadeen_Hany.png";

const team = [
  {
    name: "Mariam Mostafa",
    role: "MERN Stack Developer",
    description:
      "Building beautiful and interactive experiences that make learning enjoyable.",
    image: mariamImg,
    color: "from-indigo-500 to-purple-600",
  },
  {
    name: "Mohamed Adel",
    role: "Backend Developer",
    description:
      "Creating powerful systems and reliable technologies behind the platform.",
    image: mohamedImg,
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Salma Refat",
    role: "AI Developer",
    description:
      "Turning complex artificial intelligence concepts into simple learning experiences.",
    image: salmaImg,
    color: "from-blue-500 to-indigo-600",
  },
  {
    name: "Nadeen Hany",
    role: "UI/UX Designer",
    description:
      "Designing creative interfaces that inspire curiosity and exploration.",
    image: nadineImg,
    color: "from-pink-500 to-purple-600",
  },
];

const values = [
  {
    icon: "💡",
    title: "Innovation",
    description: "We turn creative ideas into meaningful experiences.",
  },
  {
    icon: "🤝",
    title: "Collaboration",
    description: "Great things happen when different minds work together.",
  },
  {
    icon: "🚀",
    title: "Growth",
    description: "We believe in learning, experimenting and improving.",
  },
];

export default function TeamPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0d142c] text-white">

      {/* Background Effects */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-indigo-600/20 blur-[130px]" />
        <div className="absolute top-[45%] -right-40 h-96 w-96 rounded-full bg-purple-600/15 blur-[130px]" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:px-10">

        {/* Back Navigation */}
        <Link
          to="/"
          className="mb-12 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-gray-300 transition hover:border-indigo-400/50 hover:bg-indigo-500/10 hover:text-white"
        >
          <span>←</span> Back to Home
        </Link>

        {/* Hero Section */}
        <section className="mx-auto mb-24 max-w-3xl text-center">

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-5 py-2 text-sm text-indigo-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-indigo-400" />
            The People Behind Our Vision
          </div>

          <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Team
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
            Behind every great idea is a team of passionate minds.
            Together, we're creating innovative experiences that
            make learning smarter, easier, and more exciting.
          </p>

          <div className="mx-auto mt-10 flex justify-center gap-3">
            <div className="h-1.5 w-12 rounded-full bg-indigo-500" />
            <div className="h-1.5 w-4 rounded-full bg-purple-500" />
            <div className="h-1.5 w-2 rounded-full bg-pink-500" />
          </div>
        </section>

        {/* Team Members */}
        <section className="mb-28">

          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-400">
              Meet The Minds
            </p>

            <h2 className="text-3xl font-bold md:text-4xl">
              The Team Behind The Magic
            </h2>

            <p className="mt-4 text-gray-400">
              Creative thinkers. Passionate builders. One shared vision.
            </p>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#1e293b]/80 p-7 text-center shadow-xl backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-indigo-400/50 hover:shadow-indigo-500/10"
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-70" />

                {/* Team Member Image */}
                <div
                  className={`mx-auto mb-6 h-28 w-28 rounded-full bg-gradient-to-br ${member.color} p-[3px] shadow-lg transition duration-500 group-hover:scale-110 group-hover:shadow-purple-500/30`}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full rounded-full border-2 border-[#111a33] object-cover"
                    loading="lazy"
                  />
                </div>

                <h3 className="mb-2 text-xl font-bold transition group-hover:text-indigo-300">
                  {member.name}
                </h3>

                <p className="mb-5 text-sm font-semibold text-purple-400">
                  {member.role}
                </p>

                <div className="mx-auto mb-5 h-px w-12 bg-gradient-to-r from-indigo-500 to-purple-500" />

                <p className="text-sm leading-7 text-gray-400">
                  {member.description}
                </p>

                <div className="absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-purple-500/10 blur-3xl transition group-hover:bg-purple-500/20" />
              </div>
            ))}
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-24">

          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
              What Drives Us
            </p>

            <h2 className="text-3xl font-bold md:text-4xl">
              More Than Just A Team
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#1e293b] to-[#151d36] p-8 transition duration-300 hover:-translate-y-2 hover:border-purple-400/40"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/15 text-3xl">
                  {value.icon}
                </div>

                <h3 className="mb-3 text-xl font-bold">
                  {value.title}
                </h3>

                <p className="leading-7 text-gray-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Closing Section */}
        <section className="relative overflow-hidden rounded-3xl border border-indigo-400/20 bg-gradient-to-br from-indigo-600/20 via-purple-600/10 to-[#1e293b] px-7 py-16 text-center md:px-16">

          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-500/20 blur-[90px]" />

          <div className="relative z-10">
            <h2 className="mb-5 text-3xl font-extrabold md:text-4xl">
              Great Things Are Built Together.
            </h2>

            <p className="mx-auto mb-9 max-w-xl leading-8 text-gray-400">
              Every idea starts with curiosity, but teamwork
              turns that curiosity into something extraordinary.
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}

