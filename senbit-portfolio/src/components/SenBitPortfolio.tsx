'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ArrowUp, Menu, X, ArrowRight, Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

// Composant principal
const SenBitPortfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState('accueil');
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const sectionsRef = useRef<Record<string, HTMLElement | null>>({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Gestion du défilement
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      
      // Déterminer la section active
      Object.keys(sectionsRef.current).forEach(sectionId => {
        const section = sectionsRef.current[sectionId];
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(sectionId);
          }
        }
      });
      
      // Vérifier la visibilité des sections pour les animations
      Object.keys(sectionsRef.current).forEach(sectionId => {
        const section = sectionsRef.current[sectionId];
        if (section) {
          const rect = section.getBoundingClientRect();
          const isInViewport = rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0;
          setIsVisible(prev => ({...prev, [sectionId]: isInViewport}));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialiser les valeurs
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fonction pour faire défiler vers une section
  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const section = sectionsRef.current[sectionId];
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  // Gérer les changements dans le formulaire
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Gérer la soumission du formulaire
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation d'envoi de formulaire
    console.log("Formulaire soumis:", formData);
    alert("Message envoyé avec succès! Nous vous contacterons bientôt.");
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  // Animation binaire en arrière-plan façon Matrix
  const BinaryBackground = () => {
    const columns = 40;
    const rows = 24;
    return (
      <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
        <div className="binary-animation w-full h-full">
          {Array.from({ length: columns }).map((_, i) => {
            // Génère une séquence aléatoire de 0 et 1 pour chaque colonne
            const sequence = Array.from({ length: rows }, () => (Math.random() > 0.5 ? '1' : '0'));
            // On duplique la séquence pour l'effet de boucle
            const fullSequence = [...sequence, ...sequence];
            const duration = 4 + Math.random() * 4; // Durée aléatoire entre 4s et 8s
            const delay = Math.random() * 4; // Décalage aléatoire
            return (
              <div
                key={i}
                className="binary-matrix-col absolute"
                style={{
                  left: `${(i / columns) * 100}%`,
                  width: `2.5%`,
                  animation: `matrix-fall ${duration}s linear infinite`,
                  animationDelay: `${delay}s`,
                  willChange: 'transform',
                }}
              >
                {fullSequence.map((bit, j) => (
                  <div
                    key={j}
                    className="text-base md:text-lg font-mono text-green-300 drop-shadow-[0_0_6px_#22c55e] text-center select-none"
                    style={{
                      opacity: Math.random() > 0.2 ? 1 : 0.5,
                      lineHeight: '1.1',
                    }}
                  >
                    {bit}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
        <style jsx>{`
          .binary-matrix-col {
            top: 0;
            height: 100%;
          }
          @keyframes matrix-fall {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(-50%);
            }
          }
        `}</style>
      </div>
    );
  };

  // Composant pour compter les statistiques
  const CounterAnimation = ({ end, suffix = '', duration = 2000 }: { end: number; suffix?: string; duration?: number }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
      if (isVisible.mission) {
        let startTime: number;
        let animationFrame: number;
        
        const animate = (timestamp: number) => {
          if (!startTime) startTime = timestamp;
          const progress = timestamp - startTime;
          const progressRatio = Math.min(progress / duration, 1);
          const easeOutQuart = 1 - Math.pow(1 - progressRatio, 4);
          const currentCount = Math.floor(easeOutQuart * end);
          
          setCount(currentCount);
          
          if (progressRatio < 1) {
            animationFrame = requestAnimationFrame(animate);
          }
        };
        
        animationFrame = requestAnimationFrame(animate);
        
        return () => {
          if (animationFrame) {
            cancelAnimationFrame(animationFrame);
          }
        };
      }
    }, [end, duration, isVisible.mission]);
    
    return (
      <div ref={countRef} className="text-4xl md:text-5xl font-bold text-blue-600">
        {count}{suffix}
      </div>
    );
  };

  // Référencement des sections
  const registerSection = (id: string, ref: HTMLElement | null) => {
    if (ref) {
      sectionsRef.current = {...sectionsRef.current, [id]: ref};
    }
  };

  // Calculer les classes pour l'animation d'entrée
  const getAnimationClass = (sectionId: string, delay = 0) => {
    const baseClasses = "transition-all duration-1000 transform";
    if (!isVisible[sectionId]) {
      return `${baseClasses} opacity-0 translate-y-10`;
    }
    return `${baseClasses} opacity-100 translate-y-0`;
  };
  
  // Calculer les classes pour la navigation
  const navClasses = scrollPosition > 50 
    ? "fixed top-0 left-0 right-0 bg-white bg-opacity-95 shadow-md text-gray-800 transition-all duration-300 z-50" 
    : "fixed top-0 left-0 right-0 bg-transparent text-white transition-all duration-300 z-50";

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800 font-sans">
      {/* Navigation */}
      <nav className={navClasses}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="text-blue-600 font-bold text-2xl">
              Sen<span className="text-green-600">Bit</span>
            </div>
          </div>
          
          {/* Menu pour desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {['accueil', 'mission', 'landchain', 'vision', 'partenaires', 'temoignages', 'contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-sm font-medium hover:text-blue-600 transition-colors capitalize ${activeSection === item ? 'text-blue-600' : ''}`}
              >
                {item}
              </button>
            ))}
          </div>
          
          {/* Bouton du menu mobile */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-b-lg overflow-hidden transition-all duration-300 ease-in-out">
            <div className="container mx-auto px-4 py-2 flex flex-col">
              {['accueil', 'mission', 'landchain', 'vision', 'partenaires', 'temoignages', 'contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`py-3 px-4 text-sm hover:bg-gray-100 transition-colors capitalize text-left ${activeSection === item ? 'text-blue-600 font-medium' : ''}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Bouton de retour en haut */}
      {scrollPosition > 500 && (
        <button 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          className="fixed right-6 bottom-6 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all z-40"
        >
          <ArrowUp size={20} />
        </button>
      )}

      {/* Section d'accueil */}
      <section 
        ref={(ref) => registerSection('accueil', ref)}
        className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-green-800 text-white"
      >
        <BinaryBackground />
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Transformer le Sénégal <br /> en <span className="text-green-400">0</span> & <span className="text-green-400">1</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
            Nous développons des solutions technologiques innovantes pour digitaliser le Sénégal et construire l'avenir numérique de l'Afrique
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <button 
              onClick={() => scrollToSection('landchain')}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transition-all transform hover:scale-105"
            >
              Découvrir nos projets
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-blue-800 text-white rounded-lg transition-all transform hover:scale-105"
            >
              Nous contacter
            </button>
          </div>
        </div>
      </section>

      {/* Section Mission */}
      <section 
        ref={(ref) => registerSection('mission', ref)}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className={getAnimationClass('mission')}>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Notre Mission</h2>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="text-lg text-gray-700">
                Chez SenBit, nous transformons l'avenir du Sénégal grâce à des solutions technologiques innovantes. 
                Notre objectif est de digitaliser tous les secteurs et de propulser le pays dans l'ère numérique.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              {
                title: "Digitalisation",
                description: "Numériser les processus et services essentiels pour améliorer l'efficacité et la transparence",
                icon: "💻"
              },
              {
                title: "Innovation",
                description: "Développer des solutions blockchain adaptées aux défis spécifiques du Sénégal",
                icon: "🔗"
              },
              {
                title: "Formation",
                description: "Renforcer les compétences locales et créer un écosystème tech dynamique",
                icon: "🎓"
              }
            ].map((card, index) => (
              <div 
                key={index}
                className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all transform hover:-translate-y-2 border-t-4 border-blue-600 ${getAnimationClass('mission', index * 200)}`}
              >
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            ))}
          </div>

          {/* Statistiques */}
          <div className={`bg-gray-50 rounded-2xl shadow-lg p-8 md:p-12 ${getAnimationClass('mission', 400)}`}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              {[
                { value: 35, suffix: "+", label: "Projets lancés" },
                { value: 200, suffix: "+", label: "Membres formés" },
                { value: 15, suffix: "", label: "Partenaires" },
                { value: 5000, suffix: "+", label: "Utilisateurs" }
              ].map((stat, index) => (
                <div key={index} className="flex flex-col items-center">
                  <CounterAnimation end={stat.value} suffix={stat.suffix} />
                  <p className="text-gray-600 mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section LandChain */}
      <section 
        ref={(ref) => registerSection('landchain', ref)}
        className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <div className={getAnimationClass('landchain')}>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">LandChain</h2>
            <p className="text-xl text-center text-blue-600 mb-12">Notre projet phare</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={getAnimationClass('landchain', 200)}>
              <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200">
                <div className="bg-blue-700 text-white p-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="ml-2 text-sm font-mono">LandChain Dashboard</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-500">Parcelles enregistrées</p>
                      <p className="text-2xl font-bold text-blue-700">3,245</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-500">Transactions</p>
                      <p className="text-2xl font-bold text-green-700">1,876</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-500">Utilisateurs</p>
                      <p className="text-2xl font-bold text-purple-700">893</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-500">Communes</p>
                      <p className="text-2xl font-bold text-orange-700">42</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Dernières transactions</span>
                      <span className="text-xs text-blue-600">Voir tout</span>
                    </div>
                    <div className="space-y-2">
                      {[
                        { id: "TX872345", type: "Transfert", date: "12/05/2025" },
                        { id: "TX872288", type: "Enregistrement", date: "11/05/2025" },
                        { id: "TX872001", type: "Validation", date: "09/05/2025" }
                      ].map((tx, i) => (
                        <div key={i} className="flex justify-between items-center p-2 bg-white rounded border border-gray-100">
                          <span className="text-xs font-mono">{tx.id}</span>
                          <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded">{tx.type}</span>
                          <span className="text-xs text-gray-500">{tx.date}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button className="text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">Accéder au système</button>
                  </div>
                </div>
              </div>
            </div>

            <div className={getAnimationClass('landchain', 400)}>
              <h3 className="text-2xl font-bold mb-6">Révolutionner la gestion foncière</h3>
              <p className="text-gray-700 mb-6">
                LandChain utilise la technologie blockchain pour sécuriser et digitaliser la gestion des terres au Sénégal, 
                apportant transparence, traçabilité et confiance dans un secteur traditionnellement complexe.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Enregistrement sécurisé et immuable des titres fonciers",
                  "Traçabilité complète de l'historique des parcelles",
                  "Réduction des conflits fonciers et des fraudes",
                  "Accélération des transactions immobilières",
                  "Intégration avec les administrations locales"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <div className="text-green-500 mr-2 mt-1"><ArrowRight size={16} /></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="flex items-center text-blue-600 hover:text-blue-800 font-medium">
                En savoir plus sur LandChain
                <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section Vision */}
      <section 
        ref={(ref) => registerSection('vision', ref)}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className={getAnimationClass('vision')}>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Notre Vision</h2>
            <p className="text-xl text-center text-blue-600 mb-16">Un Sénégal entièrement numérisé à l'horizon 2030</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline verticale */}
            <div className="absolute top-0 bottom-0 left-0 md:left-1/2 w-1 bg-blue-200 transform md:translate-x-px"></div>
            
            {/* Phases de la vision */}
            {[
              {
                year: "2023-2025",
                title: "Phase d'implantation",
                description: "Déploiement initial de LandChain dans les régions pilotes et développement des partenariats stratégiques avec les administrations locales.",
                current: true
              },
              {
                year: "2026-2027",
                title: "Phase d'expansion",
                description: "Extension de la plateforme LandChain à l'ensemble du territoire national et développement de nouvelles fonctionnalités.",
                current: false
              },
              {
                year: "2028-2029",
                title: "Phase d'intégration",
                description: "Intégration complète avec les systèmes gouvernementaux et création d'un écosystème numérique foncier au niveau national.",
                current: false
              },
              {
                year: "2030",
                title: "Objectif final",
                description: "Un système foncier entièrement digitalisé, transparent et accessible à tous les citoyens, servant de modèle pour d'autres pays africains.",
                current: false
              }
            ].map((phase, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row items-center md:items-start mb-12 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} ${getAnimationClass('vision', index * 300)}`}
              >
                {/* Point sur la timeline */}
                <div className="absolute left-0 md:left-1/2 w-6 h-6 rounded-full bg-white border-4 border-blue-600 transform -translate-x-2.5 md:translate-x-0 md:-translate-x-3"></div>
                
                {/* Contenu */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'} pl-10 md:pl-0`}>
                  <div className={`bg-white p-6 rounded-xl shadow-lg border-l-4 ${phase.current ? 'border-green-500' : 'border-blue-500'}`}>
                    <div className={`inline-block px-3 py-1 rounded text-sm font-medium mb-2 ${phase.current ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                      {phase.year}
                      {phase.current && <span className="ml-2 bg-green-600 text-white text-xs px-2 py-1 rounded">En cours</span>}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                    <p className="text-gray-600">{phase.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Partenaires */}
      <section 
        ref={(ref) => registerSection('partenaires', ref)}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className={getAnimationClass('partenaires')}>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Nos Partenaires</h2>
            <p className="text-xl text-center text-blue-600 mb-16">Ils nous font confiance et nous accompagnent</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Ministère du Numérique",
                type: "Gouvernemental",
                description: "Partenaire stratégique dans notre mission de digitalisation du Sénégal."
              },
              {
                name: "Institut de la Blockchain",
                type: "Académique",
                description: "Collaboration sur la recherche et le développement des technologies blockchain."
              },
              {
                name: "SenFintech",
                type: "Privé",
                description: "Partenariat pour le développement des solutions de paiement intégrées."
              },
              {
                name: "Digital Africa",
                type: "Association",
                description: "Soutien au développement de l'écosystème numérique africain."
              },
              {
                name: "CTIC Dakar",
                type: "Incubateur",
                description: "Accompagnement et mentorat pour notre croissance."
              },
              {
                name: "Communauté des maires",
                type: "Collectif",
                description: "Partenariat pour le déploiement de LandChain dans les communes."
              }
            ].map((partner, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 overflow-hidden ${getAnimationClass('partenaires', index * 100)}`}
              >
                <div className="h-1.5 bg-gradient-to-r from-blue-500 to-green-500"></div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium mb-3">
                    {partner.type}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{partner.name}</h3>
                  <p className="text-gray-600 text-sm">{partner.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section 
        ref={(ref) => registerSection('temoignages', ref)}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className={getAnimationClass('temoignages')}>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Témoignages</h2>
            <p className="text-xl text-center text-blue-600 mb-16">Ce que disent nos utilisateurs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "La technologie LandChain a transformé notre gestion foncière. La transparence et la sécurité qu'elle offre ont considérablement réduit les conflits dans notre commune.",
                author: "Amadou Diop",
                position: "Maire de Guédiawaye"
              },
              {
                quote: "En tant que notaire, LandChain a simplifié mon travail tout en augmentant la fiabilité des documents fonciers. C'est une révolution pour notre profession.",
                author: "Fatou Sow",
                position: "Notaire à Dakar"
              },
              {
                quote: "J'ai pu sécuriser le titre de ma propriété en quelques jours seulement, alors que j'attendais depuis des mois. SenBit offre un service qui change vraiment la vie des citoyens.",
                author: "Ibrahim Ndiaye",
                position: "Propriétaire à Saint-Louis"
              },
              {
                quote: "La formation reçue par SenBit m'a permis de comprendre les enjeux de la blockchain pour notre économie. Leur approche pédagogique est excellente.",
                author: "Mariama Sarr",
                position: "Étudiante en informatique"
              }
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className={`bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all ${getAnimationClass('temoignages', index * 150)}`}
              >
                <div className="text-4xl text-blue-200 mb-4">"</div>
                <blockquote className="text-gray-700 mb-6 italic">
                  {testimonial.quote}
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-500 rounded-full mr-3 flex items-center justify-center text-white font-bold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section 
        ref={(ref) => registerSection('contact', ref)}
        className="py-20 bg-gradient-to-b from-blue-900 to-blue-800 text-white"
      >
        <div className="container mx-auto px-4">
          <div className={getAnimationClass('contact')}>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Contactez-nous</h2>
            <p className="text-xl text-center text-blue-300 mb-16">Discutons de votre projet de digitalisation</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className={getAnimationClass('contact', 200)}>
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8">
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label className="block text-blue-200 mb-2 font-medium">Nom complet</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white bg-opacity-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
                      placeholder="Votre nom"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-blue-200 mb-2 font-medium">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white bg-opacity-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
                      placeholder="votre@email.com"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-blue-200 mb-2 font-medium">Message</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white bg-opacity-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white h-32"
                      placeholder="Comment pouvons-nous vous aider ?"
                      required
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors"
                  >
                    Envoyer le message
                  </button>
                </form>
              </div>
            </div>

            <div className={getAnimationClass('contact', 400)}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Coordonnées</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="text-blue-300 mr-4 mt-1"><MapPin size={20} /></div>
                      <div>
                        <p className="font-medium">Siège social</p>
                        <p className="text-blue-200">Plateau, Dakar, Sénégal</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="text-blue-300 mr-4 mt-1"><Mail size={20} /></div>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-blue-200">contact@senbit.sn</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="text-blue-300 mr-4 mt-1"><Phone size={20} /></div>
                      <div>
                        <p className="font-medium">Téléphone</p>
                        <p className="text-blue-200">+221 78 000 00 00</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-6">Suivez-nous</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-white bg-opacity-10 p-3 rounded-full hover:bg-opacity-20 transition-all">
                      <Facebook size={20} />
                    </a>
                    <a href="#" className="bg-white bg-opacity-10 p-3 rounded-full hover:bg-opacity-20 transition-all">
                      <Twitter size={20} />
                    </a>
                    <a href="#" className="bg-white bg-opacity-10 p-3 rounded-full hover:bg-opacity-20 transition-all">
                      <Linkedin size={20} />
                    </a>
                    <a href="#" className="bg-white bg-opacity-10 p-3 rounded-full hover:bg-opacity-20 transition-all">
                      <Instagram size={20} />
                    </a>
                  </div>
                </div>

                <div className="bg-white bg-opacity-10 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4">Horaires d'ouverture</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Lundi - Vendredi</span>
                      <span>8h30 - 17h30</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Samedi</span>
                      <span>9h00 - 13h00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Dimanche</span>
                      <span>Fermé</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-white font-bold text-2xl mb-4">
                Sen<span className="text-green-600">Bit</span>
              </div>
              <p className="mb-4">
                Transformons ensemble le Sénégal en la première nation numérique d'Afrique.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook size={18} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter size={18} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-medium text-lg mb-4">Solutions</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">LandChain</a></li>
                <li><a href="#" className="hover:text-white transition-colors">ServicesPublics+</a></li>
                <li><a href="#" className="hover:text-white transition-colors">IdentitéNum</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AgriTrack</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-medium text-lg mb-4">Ressources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Guide d'utilisation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Études de cas</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-medium text-lg mb-4">Entreprise</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">À propos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Équipe</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carrières</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2025 SenBit. Tous droits réservés.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm hover:text-white transition-colors">Politique de confidentialité</a>
              <a href="#" className="text-sm hover:text-white transition-colors">Conditions d'utilisation</a>
              <a href="#" className="text-sm hover:text-white transition-colors">Mentions légales</a>
            </div>
          </div>
        </div>
      </footer>

      {/* CSS pour les animations */}
      <style jsx>{`
        .binary-animation {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        
        .binary-column {
          position: absolute;
          display: flex;
          flex-direction: column;
          animation: fall linear infinite;
        }
        
        @keyframes fall {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }
      `}</style>
    </div>
  );
};

export default SenBitPortfolio; 