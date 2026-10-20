import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { About } from './components/About';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Faq } from './components/Faq';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string>('Site Institucional');

  const scrollToContact = (serviceTitle?: string) => {
    if (serviceTitle) {
      setSelectedServiceForContact(serviceTitle);
    }
    const contactElem = document.getElementById('contato');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const projectsElem = document.getElementById('projetos');
    if (projectsElem) {
      projectsElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#08080a] text-zinc-200 selection:bg-purple-900/50 selection:text-white">
      {/* Navigation Header */}
      <Header onOpenBudget={() => scrollToContact()} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onScrollToContact={() => scrollToContact()}
          onScrollToProjects={scrollToProjects}
        />

        {/* 2. Portfolio Section */}
        <Portfolio
          onSelectProjectForContact={(projectName) =>
            scrollToContact(`Projeto similar a ${projectName}`)
          }
        />

        {/* 3. About Web Creation & Luiz Miguel */}
        <About />

        {/* 4. Services Offered */}
        <Services onSelectService={(service) => scrollToContact(service)} />

        {/* 5. 4-Step Development Process */}
        <Process />

        {/* 6. Frequently Asked Questions */}
        <Faq />

        {/* 7. Contact & Budget Proposal Dispatcher */}
        <Contact preselectedService={selectedServiceForContact} />
      </main>

      {/* 8. Footer */}
      <Footer />
    </div>
  );
};

export default App;
