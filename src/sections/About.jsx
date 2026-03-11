import { Headphones, Tv } from "lucide-react";
import { useState } from "react";
const highlights = [
  {
    icon: Headphones,
    title: "Last played",
    description: "Blinding Lights — The Weeknd",
  },
  {
    icon: Tv,
    title: "Last watched",
    description: "One Battle After Another",
  },
];
const quotes = [
  {
    text: "Hard work beats talent when talent doesn't work hard.",
    author: "Tim Notke",
  },
  {
    text: "Success is nothing more than a few simple disciplines, practiced every day.",
    author: "Jim Rohn",
  },
  {
    text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    author: "Aristotle",
  },
  {
    text: "The man who moves a mountain begins by carrying away small stones.",
    author: "Confucius",
  },
  {
    text: "He who has a why to live can bear almost any how.",
    author: "Friedrich Nietzsche",
  },
  {
    text: "It always seems impossible until it's done.",
    author: "Nelson Mandela",
  },
  {
    text: "Integrity is doing the right thing, even when no one is watching.",
    author: "C. S. Lewis",
  },
  {
    text: "The price of greatness is responsibility.",
    author: "Winston Churchill",
  },
];

export const About = () => {
  const [quote] = useState(quotes[Math.floor(Math.random() * quotes.length)]);
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Figuring it out,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one chapter at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm an aspiring Full-Stack Developer and a passionate learner
                who believes that how we build is just as important as what we
                build.
              </p>
              <p>
                When I'm not coding, you'll find me binge watching movies and tv
                shows. I enjoy watching films, reading, and exploring topics
                that expand my perspective from history and geopolitics to
                aviation and architecture. I'm naturally curious about how
                systems work, whether in technology or the real world.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium  text-foreground">
                “{quote.text}”
              </p>
              <p className="mt-4 text-sm font-medium italic text-muted-foreground">
                — {quote.author}
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="relative glass p-6 rounded-2xl animate-fade-in overflow-hidden"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                {/* Blurred Content */}
                <div className="blur-md opacity-50 pointer-events-none select-none">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>

                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>

                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="px-4 py-2 rounded-full glass text-sm font-medium text-primary">
                    Updating Soon
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
