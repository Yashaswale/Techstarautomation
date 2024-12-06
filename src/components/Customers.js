const LogoSection = () => {
  const logos = [
    { name: 'Company 1', src: '/Logos/Picture1.png?height=80&width=180' },
    { name: 'Company 2', src: '/Logos/Picture2.png?height=80&width=180' },
    { name: 'Company 3', src: '/Logos/Picture3.jpg?height=80&width=180' },
    { name: 'Company 4', src: '/Logos/Picture4.jpg?height=80&width=180' },
    { name: 'Company 5', src: '/Logos/Picture5.png?height=80&width=180' },
    { name: 'Company 6', src: '/Logos/Picture6.png?height=80&width=180' },
    { name: 'Company 7', src: '/Logos/Picture7.png?height=80&width=180' },
    { name: 'Company 8', src: '/Logos/Picture8.jpg?height=80&width=180' },
    { name: 'Company 9', src: '/Logos/Picture9.png?height=80&width=180' },
    { name: 'Company 10', src: '/Logos/Picture10.png?height=80&width=180' },
    { name: 'Company 11', src: '/Logos/Picture11.png?height=80&width=180' },
    { name: 'Company 12', src: '/Logos/Picture12.png?height=80&width=180' },
  ];
  const LogoItem = ({ logo }) => (
    <div className="flex justify-center">
      <div className="relative group">
      <img
          src={logo.src}
          alt={`${logo.name} logo`}
          className="max-w-full h-auto object-contain transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:brightness-110"
        />
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 ease-in-out rounded-lg"></div>
      </div>
    </div>
  );

  return (
    <section section id="clients" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Trusted by Industry Leaders</h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Our solutions are empowering businesses across various sectors, driving innovation and growth.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {logos.map((logo, index) => (
            <LogoItem key={index} logo={logo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoSection;
