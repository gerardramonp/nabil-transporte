import {
  Truck,
  Drill,
  Phone,
  Mail,
  Menu,
  X,
  ArchiveRestore,
} from "lucide-react";
import { useState } from "react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      title: "Transporte Local",
      description:
        "Servicio de transporte dentro de la ciudad y áreas cercanas",
      price: "50 €/h",
      icon: Truck,
    },

    {
      title: "Mudanzas",
      description:
        "Mudanzas con camión y personal capacitado. Cuidadosos y rápidos",
      price: "50 €/h",
      icon: ArchiveRestore,
    },
    {
      title: "Montaje de muebles",
      description: "Servicio de montaje y desmontaje de muebles a domicilio",
      price: "50 €/h",
      icon: Drill,
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-white shadow-md z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <img src="/logo.jpeg" alt="Nabil Logo" className="h-12 w-12" />
              <span className="text-2xl font-bold text-gray-900">NabilSof</span>
            </div>

            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("servicios")}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Contacto
              </button>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col space-y-3">
                <button
                  onClick={() => scrollToSection("inicio")}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left"
                >
                  Inicio
                </button>
                <button
                  onClick={() => scrollToSection("servicios")}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left"
                >
                  Servicios
                </button>
                <button
                  onClick={() => scrollToSection("contacto")}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left"
                >
                  Contacto
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      <section
        id="inicio"
        className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-[url('/bg-landing.jpg')] bg-cover bg-center bg-no-repeat"
      >
        <div className="absolute inset-0 bg-black/55 backdrop-blur-sm"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Transportes
            <span className=" text-blue-600 mt-2"> NabilSof</span>
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto mb-8">
            Soluciones de transporte profesionales, mudanzas y montaje de
            muebles
          </p>
          <button
            onClick={() => scrollToSection("contacto")}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
          >
            Contáctanos Ahora
          </button>
        </div>
      </section>

      <section id="servicios" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
            Nuestros Servicios
          </h2>
          <div className="flex flex-col md:flex-row justify-between gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="w-full bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                >
                  <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {service.price}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="contacto"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Contacto
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Contáctanos para más información sobre
            nuestros servicios
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Teléfono
                  </h3>
                  <a
                    href="tel:+1234567890"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    664 451 763
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Email
                  </h3>
                  <a
                    href="mailto:contacto@nabil.com"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    contacto@nabil.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Truck className="h-6 w-6 text-blue-400" />
            <span className="text-xl font-bold">NabilSof</span>
          </div>
          <p className="text-gray-400">
            © 2025 NabilSof. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
