import React from 'react';
import { Award, Target, Eye } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Overview = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="alveo-logo-text">ALVEO 4P</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            In a world where breath is taken for granted—until it becomes a struggle—ALVEO 4P Charitable Trust stands committed to transforming the narrative of respiratory health.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Our Foundation</h2>
            <p className="text-muted-foreground leading-relaxed">
              ALVEO 4P stands for a purpose beyond treatment—it is a space committed to scientific research, integrated care, and a deeper understanding of respiratory illnesses, with a goal to reduce the disability adjusted life years (DALY). With over 76 lakh people suffering from chronic respiratory diseases every year, we believe that investing in science and taking a 360-degree view of healthcare is just as important as building more hospitals.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              In tune with the WHO's One Health approach, the National Health Mission, and our Hon'ble Prime Minister's call for an Aatma Nirbhar Bharat during this Amrit Kaal, we bring together advanced diagnostics with the wisdom of Ayurveda, yoga, balanced nutrition, and meaningful patient engagement.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We apply artificial intelligence to individual health data to uncover patterns that are unique to each person. The aim is not just to treat—but to help people rejuvenate, regain, and reclaim their health, the way it was meant to be.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <img 
                src="/lovable-uploads/7fd3c567-2e42-4e32-b975-b1fc3efc58c4.png" 
                alt="P4 Concept Diagram" 
                className="rounded-lg shadow-elegant w-full"
              />
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/94cd99e9-6cbe-466f-b87c-602d24d38321.png" 
                alt="WHO One Health Approach" 
                className="rounded-lg shadow-elegant w-full"
              />
            </div>
          </div>
        </div>

        {/* Addressing Gaps Section */}
        <section className="bg-muted/30 rounded-lg p-8 md:p-12">
          <div className="text-center mb-8">
            <Award className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Addressing Gaps in Chronic Respiratory Disease Management
            </h2>
          </div>
          <div className="grid md:grid-cols-1 gap-6 text-left max-w-5xl mx-auto">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Recurrent Admissions and Productivity Loss</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Chronic respiratory diseases often result in recurrent admissions, particularly debilitating for those in their productive years. This not only adversely affects the individual and their family but also results in significant economic losses for the nation.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Antibiotic Misuse and Antimicrobial Resistance</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The indiscriminate use of antibiotics in treating respiratory exacerbations contributes significantly to the rise of antimicrobial resistance. This cycle of sequential antibiotic escalation needs to be addressed to prevent the development of dangerous drug-resistant strains.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Advancements in Diagnostics and Precision Medicine</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Current diagnostics primarily characterize phenotypically. To move towards precision medicine, there is a need for bio-profiling based on genetics, metabolomics, cell sorting, and proteomics to enable targeted therapies and minimize unwanted side effects.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Inclusive Healthcare and Cost Reduction</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The exorbitant cost of healthcare can only be mitigated through inclusive health practices and the implementation of targeted therapies. Active patient participation in the recovery process, guided by medical professionals, is crucial for effective and economical healthcare.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Integration of Therapies</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A holistic approach to recovery involves the integration of therapies from various fields. Patients may benefit from a combination of conventional medicine, physiotherapy, yoga, nutrition, and Ayurveda.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Overview;