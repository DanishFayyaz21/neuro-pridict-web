

import Hero from '@/components/core/hero';
import NeuroLabPredict from '@/components/core/NeuroLabPredict';
import ModernFooter from '@/components/core/ModernFooter';
import WorkflowSection from '@/components/core/WorkflowSection';
import PridictHero from '@/components/core/pridicthero';
import Neuroadviseintro from '@/components/core/Neuroadviseintro';
import FeatureDiagram from '@/components/core/FeatureDiagram';



export default function Home() {

  return (

    <div className="min-h-screen bg-black text-white overflow-hidden">

      <Hero />
      
      {/* Feature Diagram */}
      <FeatureDiagram />
      <section>
        <NeuroLabPredict />
      </section>
      <section>
        <Neuroadviseintro />
      </section>
      <section>
        <WorkflowSection />
      </section>
      <section>
        <PridictHero />
      </section>  
      <section>
        <ModernFooter />  
      </section>

    </div>

  );

}

