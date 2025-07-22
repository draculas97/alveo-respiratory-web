import React from 'react';
import { Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const BoardOfTrustees = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Board of <span className="alveo-logo-text">Trustees</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our distinguished board brings together leading experts in medicine, research, and public health to guide our mission and ensure strategic excellence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              name: 'Dr. Supraja.K',
              role: 'Managing Trustee',
              specialty: 'Pulmonology & Respiratory Medicine',
              image: 'https://images.unsplash.com/photo-1594824204845-c5ae2d9a4b5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
              bio: 'Leading expert in respiratory medicine with extensive experience in managing complex pulmonary conditions.'
            },
            {
              name: 'Dr. V Pasupathy',
              role: 'Trustee',
              specialty: 'Medical Research & Education',
              image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
              bio: 'Renowned medical researcher with significant contributions to respiratory health education and clinical practice.'
            },
            {
              name: 'Dr. T Palaniappan',
              role: 'Trustee',
              specialty: 'Clinical Medicine',
              image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
              bio: 'Distinguished clinician with expertise in patient care and medical innovation in respiratory health.'
            },
            {
              name: 'Mr. S Sandilya',
              role: 'Trustee',
              specialty: 'Healthcare Administration',
              image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
              bio: 'Healthcare administration specialist with extensive experience in nonprofit management and strategic planning.'
            },
            {
              name: 'Mr. T Nataraajan',
              role: 'Trustee',
              specialty: 'Community Outreach',
              image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
              bio: 'Community engagement expert focused on health awareness and public health program implementation.'
            },
            {
              name: 'Mr. T G Dhandapani',
              role: 'Trustee',
              specialty: 'Financial Management',
              image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
              bio: 'Financial management professional with expertise in charitable trust operations and resource allocation.'
            }
          ].map((member, index) => (
            <Card key={index} className="shadow-soft hover:shadow-elegant transition-shadow">
              <CardContent className="p-6 text-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-3">{member.specialty}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Board Responsibilities */}
        <section className="bg-muted/30 rounded-lg p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">Board Responsibilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Strategic Oversight',
                description: 'Providing strategic direction and long-term planning for the organization'
              },
              {
                title: 'Financial Governance',
                description: 'Ensuring responsible financial management and transparent resource allocation'
              },
              {
                title: 'Research Ethics',
                description: 'Maintaining highest ethical standards in all research and clinical activities'
              },
              {
                title: 'Community Impact',
                description: 'Measuring and maximizing positive impact on communities we serve'
              }
            ].map((responsibility, index) => (
              <div key={index} className="text-center">
                <h3 className="text-lg font-semibold text-foreground mb-3">{responsibility.title}</h3>
                <p className="text-muted-foreground text-sm">{responsibility.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Board Meeting Schedule */}
        <section className="text-center">
          <Award className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Governance Excellence
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
            Our Board of Trustees meets quarterly to review progress, set strategic priorities, and ensure accountability in all our initiatives. We maintain the highest standards of governance and transparency.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-primary mb-2">4</div>
              <div className="text-muted-foreground">Quarterly Meetings</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Transparency</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-2">100+</div>
              <div className="text-muted-foreground">Years Combined Experience</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BoardOfTrustees;