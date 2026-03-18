import { motion } from 'framer-motion';
import { CheckCircle2, ChevronDown, Instagram, BookOpen, Star, AlertCircle, ShoppingCart } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

function AppOferta() {
  return (
    <div className="min-h-screen bg-[#F2E8DF] font-sans text-[#2B2B2B]">
      
      {/* HEADER / HERO SECTION */}
      <header className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-[#2B2B2B]">
          <img 
            src="/hero.png" 
            alt="Empanadas caseras jugosas" 
            className="w-full h-full object-cover object-bottom md:object-center scale-[1.5] md:scale-100 opacity-80 origin-bottom md:origin-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2B2B2B]/90 via-[#2B2B2B]/50 md:via-[#2B2B2B]/40 to-[#2B2B2B]/30 md:to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 pt-20 pb-12 text-center text-white">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl mx-auto">
            <motion.p variants={fadeIn} className="text-[#F2E8DF] uppercase tracking-widest font-bold text-sm md:text-base mb-4 inline-block bg-[#A63C3C] px-4 py-1 rounded-full">
              ¡BENEFICIO EXCLUSIVO POR TU EBOOK GRATUITO!
            </motion.p>
            <motion.h1 variants={fadeIn} className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
              El Secreto de las Empanadas Perfectas:
              <span className="block text-[#D4AF37] italic mt-2">Cómo lograr masas que no se abren y rellenos súper jugosos en casa.</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
              Aprendé el paso a paso definitivo para preparar masas caseras perfectas y rellenos ultra jugosos, sin ingredientes raros ni complicaciones en la cocina.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col items-center gap-4">
              <a href="#precio" className="bg-[#D96E4C] hover:bg-[#A63C3C] text-white font-bold text-lg md:text-xl py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center gap-3">
                <ShoppingCart className="w-6 h-6" />
                SÍ, QUIERO EL RECETARIO CON 50% OFF
              </a>
              <p className="text-[#F2E8DF] font-medium text-lg mt-2 font-serif italic">
                <span className="line-through opacity-70">Valor Real: $12 USD</span> <span className="text-[#D4AF37] text-xl not-italic font-bold ml-2 border-b border-[#D4AF37] pb-0.5">Hoy: $6 USD</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </header>

      {/* THE PROBLEM & SOLUTION SECTION */}
      <section className="py-20 px-6 bg-[#F2E8DF]">
        <div className="container mx-auto max-w-5xl">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#A63C3C] mb-6">
              ¿Hacer empanadas termina siendo una frustración?
            </h2>
            <p className="text-lg md:text-xl text-[#2B2B2B]/80 max-w-3xl mx-auto leading-relaxed">
              Sabemos lo que pasa: la masa te queda dura como una piedra, los repulgues se abren dejando todo el relleno en la asadera de tu horno y, para colmo, la carne queda seca.
            </p>
            <p className="text-xl md:text-2xl font-serif text-[#D96E4C] font-semibold mt-8 italic">
              Pero hacer empanadas caseras de verdad no tiene que ser así.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="rounded-2xl shadow-2xl overflow-hidden w-full aspect-[4/3] bg-white relative"
            >
              <img src="/masas.png" alt="Masas perfectas" className="absolute inset-0 w-full h-full object-cover object-top" />
            </motion.div>
            
            <motion.div 
               initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            >
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-6 text-[#2B2B2B]">
                Con este recetario, vas a lucirte como nunca.
              </h3>
              <p className="text-[#2B2B2B]/80 mb-8 text-lg">
                Lograrás esa empanada jugosa, de masa tierna, ideal para tener stockeada en el freezer y salvarte las comidas o disfrutar el finde en familia con algo tremendo.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Preparar masas caseras y económicas ideales para freezar y tener siempre listas.",
                  "Dominar el paso a paso exacto para lograr una masa Sin TACC que no se quiebre.",
                  "Cocinar rellenos súper jugosos y sabrosos, desde la clásica carne hasta opciones cremosas.",
                  "Resolver el postre para el mate con rellenos dulces que te van a encantar."
                ].map((benefit, i) => (
                  <motion.li key={i} variants={fadeIn} className="flex items-start gap-4">
                    <CheckCircle2 className="w-7 h-7 text-[#D96E4C] flex-shrink-0 mt-1" />
                    <span className="text-lg font-medium text-[#2B2B2B]">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHAT'S INSIDE THE EBOOK */}
      <section className="py-24 bg-white px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#A63C3C] mb-4">¿Qué incluye el Ebook?</h2>
            <p className="text-lg text-[#2B2B2B]/70">Todo lo que necesitás saber, sin guardarme ningún secreto.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="bg-[#F2E8DF]/50 rounded-2xl p-6 border border-[#D96E4C]/20 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-72 flex items-center justify-center rounded-xl overflow-hidden mb-6 bg-[#F2E8DF]">
                <img src="/masas.png" alt="Masas" className="w-full h-full object-cover scale-[1.6]" style={{ objectPosition: '50% 50%' }} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#D96E4C] mb-3">Módulo 1: La Base Perfecta</h3>
              <p className="text-[#2B2B2B]/80">Receta paso a paso para la masa clásica (con grasa), masa integral y el secreto mejor guardado para lograr una masa sin TACC espectacular.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="bg-[#F2E8DF]/50 rounded-2xl p-6 border border-[#D96E4C]/20 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-72 flex items-center justify-center rounded-xl overflow-hidden mb-6 bg-[#F2E8DF]">
                <img src="/Rellenos salados.png" alt="Rellenos Salados" className="w-full h-full object-cover scale-[1.1]" style={{ objectPosition: '50% 50%' }} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#D96E4C] mb-3">Módulo 2: Salados para Aplaudir</h3>
              <p className="text-[#2B2B2B]/80">+10 recetas detalladas. Carne cortada a cuchillo, pollo cremoso, espinaca y ricota, caprese, puerro y muchas variedades más.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="bg-[#F2E8DF]/50 rounded-2xl p-6 border border-[#D96E4C]/20 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-72 flex items-center justify-center rounded-xl overflow-hidden mb-6 bg-[#F2E8DF]">
                <img src="/dulces.png" alt="Rellenos Dulces" className="w-full h-full object-cover scale-[1.6]" style={{ objectPosition: '50% 50%' }} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#D96E4C] mb-3">Módulo 3: El Toque Dulce</h3>
              <p className="text-[#2B2B2B]/80">¿Te imaginás una empanada de dulce de leche y nuez? ¿O batata y coco? Opciones fritas y al horno perfectas para acompañar unos lindos mates.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AUTHORITY SECTION */}
      <section className="py-20 bg-[#2B2B2B] text-white px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="w-full md:w-2/5 relative"
            >
              <div className="absolute inset-0 bg-[#D4AF37] transform translate-x-4 translate-y-4 rounded-2xl z-0"></div>
              <img src="/flavia.png" alt="Flavia Pereira" className="relative z-10 w-full h-[500px] object-cover rounded-2xl shadow-2xl" />
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
              className="w-full md:w-3/5"
            >
              <motion.h4 variants={fadeIn} className="text-[#D4AF37] font-bold tracking-wider uppercase mb-2">Conocé a la Autora</motion.h4>
              <motion.h2 variants={fadeIn} className="font-serif text-4xl md:text-5xl font-bold mb-6">Flavia Pereira</motion.h2>
              <motion.p variants={fadeIn} className="text-gray-300 text-lg mb-6 leading-relaxed">
                Soy pastelera y decoradora con más de 12 años de experiencia. A lo largo de mi carrera fui perfeccionando cada una de estas recetas para que nunca fallen.
              </motion.p>
              <motion.p variants={fadeIn} className="text-gray-300 text-lg mb-8 leading-relaxed">
                En este recetario volqué todo lo que aprendí trabajando en gastronomía: <strong>recetas 100% testeadas, simples y sin ingredientes raros.</strong> Mi objetivo principal es que comas súper rico y sin complicarte en la cocina.
              </motion.p>
              
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
                <a href="https://www.instagram.com/flaviaredulce.recetas/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-orange-500 hover:opacity-90 text-white px-6 py-3 rounded-xl font-medium transition-opacity">
                  <Instagram className="w-5 h-5" />
                  @flaviaredulce.recetas
                </a>
                <a href="https://www.instagram.com/flaviaredulce/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white px-6 py-3 rounded-xl font-medium transition-colors">
                  <Instagram className="w-5 h-5" />
                  @flaviaredulce
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PRICING & CTA SECTION */}
      <section id="precio" className="py-24 bg-[#F2E8DF] px-6 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D96E4C]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#A63C3C]/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 md:p-14 shadow-[0_20px_50px_rgba(43,43,43,0.1)] border border-[#2B2B2B]/5"
          >
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/20 text-[#2B2B2B] px-4 py-2 rounded-full font-bold uppercase tracking-wider text-sm mb-8">
              <Star className="w-5 h-5 text-[#D4AF37] fill-current" />
              Oferta Exclusiva 50% OFF
            </div>

            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#A63C3C] mb-6">
              ¡Por haber adquirido mi Ebook Gratuito, tenés este regalo!
            </h2>
            <p className="text-xl text-[#2B2B2B]/80 mb-8 max-w-2xl mx-auto">
              Aprender todos estos secretos en un curso de gastronomía te costaría muchísimo más. Hoy, como agradecimiento, podés llevarte todas las recetas probadas con un descuento especial del 50%.
            </p>

            <div className="flex flex-col items-center gap-2 mb-10">
              <div className="text-5xl md:text-7xl font-bold text-[#2B2B2B] font-serif">$6 <span className="text-2xl font-sans font-medium text-[#2B2B2B]/60">USD</span></div>
              <div className="text-lg font-medium text-[#D96E4C] line-through decoration-2 decoration-[#D96E4C]/50 mt-1">Precio normal: $12 USD</div>
              <p className="text-sm text-[#A63C3C] font-bold mt-2">¡Descuento aplicado por tu Ebook Gratuito!</p>
            </div>

            <button className="w-full md:w-auto bg-[#D96E4C] hover:bg-[#A63C3C] text-white font-bold text-xl py-5 px-12 rounded-full transition-all duration-300 transform hover:scale-[1.02] shadow-xl flex items-center justify-center gap-3 mb-6 mx-auto">
              <BookOpen className="w-6 h-6" />
              DESCARGAR EL EBOOK AHORA Y AHORRAR 50%
            </button>
            <p className="text-[#2B2B2B]/60 text-sm flex items-center justify-center gap-2 mt-4 font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#D96E4C]" /> Acceso inmediato. Ahorras $6 USD al instante.
            </p>

          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
            className="mt-12 flex flex-col items-center"
          >
             <div className="flex items-center gap-3">
               <AlertCircle className="text-[#A63C3C] w-8 h-8"/>
               <div className="text-left font-serif">
                 <h4 className="font-bold text-xl">Garantía Redulce</h4>
                 <p className="text-[#2B2B2B]/70 text-sm md:text-base pr-4">Todas las recetas están 100% probadas. Éxito asegurado.</p>
               </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#2B2B2B] text-white/50 py-8 text-center text-sm border-t border-white/10">
        <div className="container mx-auto px-6">
          <p>© {new Date().getFullYear()} Flavia Redulce. Todos los derechos reservados.</p>
          <p className="mt-2 text-xs">Este recetario es un producto digital (Ebook) que recibirás en tu correo.</p>
        </div>
      </footer>
    </div>
  );
}

export default AppOferta;
