
"use client";
import Hero from '@/components/core/hero';
import NeuroLabPredict from '@/components/core/NeuroLabPredict';
import ModernFooter from '@/components/core/ModernFooter';
import Neuroadviseintro from '@/components/core/Neuroadviseintro';
import FeatureDiagram from '@/components/core/FeatureDiagram';
import FeatureDiagramMobile from '@/components/core/FeatureDiagramMobile';



export default function Home() {

  return (

    <div className="min-h-screen text-white overflow-hidden scroll-smooth">
      <Hero />
      
      {/* Feature Diagram */}
      <div className="block sm:hidden">
        <FeatureDiagramMobile />
      </div>
      <div className="hidden sm:block">
        <FeatureDiagram />
      </div>
      <section>
        <NeuroLabPredict />
      </section>
      <section>
        <Neuroadviseintro />
      </section> 
      <section>
        <ModernFooter />  
      </section>

    </div>

  );

}

