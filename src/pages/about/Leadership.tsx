import React from 'react';
import { Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Leadership = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Leadership <span className="alveo-logo-text">Team</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our dedicated leadership team drives innovation and excellence in respiratory health research and care through collaborative expertise.
          </p>
        </div>
        
        {/* Senior Leadership */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">Senior Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'Dr. Kavita Reddy',
                role: 'Head of Research',
                department: 'Advanced Diagnostics',
                image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                expertise: 'AI-driven lung disease profiling, biomarker research',
                achievements: '50+ research publications, 5 patents'
              },
              {
                name: 'Dr. Rohit Jain',
                role: 'Clinical Director',
                department: 'Patient Care',
                image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                expertise: 'Clinical trials, personalized medicine protocols',
                achievements: 'Led 20+ clinical studies, improved patient outcomes by 40%'
              },
              {
                name: 'Ms. Nisha Agarwal',
                role: 'Program Manager',
                department: 'Community Outreach',
                image: 'https://images.unsplash.com/photo-1594824204845-c5ae2d9a4b5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                expertise: 'Community health programs, rural healthcare delivery',
                achievements: 'Reached 50+ villages, trained 200+ health workers'
              },
              {
                name: 'Dr. Vikram Singh',
                role: 'Technology Lead',
                department: 'Digital Health',
                image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                expertise: 'Digital health platforms, telemedicine solutions',
                achievements: 'Developed 3 health tech platforms, 10,000+ users'
              }
            ].map((member, index) => (
              <Card key={index} className="shadow-soft hover:shadow-elegant transition-shadow">
                <CardContent className="p-6 text-center">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-medium text-sm mb-1">{member.role}</p>
                  <p className="text-xs text-muted-foreground mb-3">{member.department}</p>
                  <p className="text-xs text-muted-foreground mb-2">{member.expertise}</p>
                  <p className="text-xs text-primary font-medium">{member.achievements}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Department Heads */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">Department Heads</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Dr. Sanjay Kumar',
                role: 'Head of Laboratory Sciences',
                department: 'Diagnostics & Testing',
                image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                focus: 'Advanced diagnostic technologies and laboratory management'
              },
              {
                name: 'Dr. Priyanka Sharma',
                role: 'Head of Education Programs',
                department: 'Training & Development',
                image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                focus: 'Professional development and academic partnerships'
              },
              {
                name: 'Mr. Arun Gupta',
                role: 'Head of Operations',
                department: 'Strategic Planning',
                image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                focus: 'Operational excellence and project management'
              },
              {
                name: 'Dr. Sunita Patel',
                role: 'Head of Policy & Advocacy',
                department: 'Government Relations',
                image: 'https://images.unsplash.com/photo-1594824204845-c5ae2d9a4b5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                focus: 'Policy development and stakeholder engagement'
              },
              {
                name: 'Dr. Raj Mehta',
                role: 'Head of Quality Assurance',
                department: 'Compliance & Standards',
                image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                focus: 'Quality control and regulatory compliance'
              },
              {
                name: 'Ms. Deepika Singh',
                role: 'Head of Communications',
                department: 'Public Relations',
                image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                focus: 'External communications and media relations'
              }
            ].map((member, index) => (
              <Card key={index} className="shadow-soft hover:shadow-elegant transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                      <p className="text-primary font-medium text-sm">{member.role}</p>
                      <p className="text-xs text-muted-foreground">{member.department}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{member.focus}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Leadership Philosophy */}
        <section className="bg-primary/5 rounded-lg p-8 md:p-12">
          <div className="text-center">
            <Users className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Leadership Philosophy
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Our leadership team embodies collaborative excellence, driving innovation through shared expertise and unified commitment to advancing respiratory health for all communities.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Collaborative Leadership',
                  description: 'Cross-functional teamwork that leverages diverse expertise for maximum impact'
                },
                {
                  title: 'Innovation Focus',
                  description: 'Continuous pursuit of breakthrough solutions and cutting-edge approaches'
                },
                {
                  title: 'Community Commitment',
                  description: 'Deep dedication to serving communities and improving health outcomes'
                }
              ].map((principle, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-xl font-semibold text-foreground mb-3">{principle.title}</h3>
                  <p className="text-muted-foreground">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Leadership;