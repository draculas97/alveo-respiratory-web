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
              We are not just a health initiative. We are a movement for scientific excellence, equitable access, and integrated care—built on the firm foundation of Preventive, Predictive, Personalized, and Participative (4P) medicine.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From rural villages to international symposium halls, from classroom to clinic, we are laying the foundation for a future where respiratory diseases are not a lifelong burden, but a preventable, manageable, and reversible condition.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              By investing in science, building next-generation health infrastructure, and championing human-centered care, we're creating a world where lung health is a right—not a privilege.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Medical research" 
              className="rounded-lg shadow-elegant w-full"
            />
          </div>
        </div>

        {/* Recognition Section */}
        <section className="bg-muted/30 rounded-lg p-8 md:p-12">
          <div className="text-center">
            <Award className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Commitment to Excellence
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              ALVEO 4P Charitable Trust is committed to the highest standards of scientific integrity, ethical research practices, and transparent governance. Our work is guided by principles of equity, innovation, and sustainable impact in respiratory health.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Overview;