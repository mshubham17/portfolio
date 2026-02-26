const navLinks = [
  { href: "#About", label: "About" },
  { href: "#Projects", label: "Projects" },
  { href: "#Experience", label: "Experience" },
];

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-transparent py-5">
      <nav className=" container mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-bold tracking-tight hover: text-primary transition-colors"
        >
          SM <span className="text-primary">.</span>
        </a>

        <div className="flex items-center gap-6">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="px-4 py-2 text-sm text-muted-foreground rounded-full"
              >
                {" "}
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};
