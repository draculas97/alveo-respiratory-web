import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Microscope, Users, Calendar, Award, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Work = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="alveo-logo-text">Work</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Driving innovation in respiratory health through research, education, and community engagement.
          </p>
        </div>

        {/* Projects Section */}
        <section id="projects" className="mb-20">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Projects
            </h2>
            <p className="text-xl text-muted-foreground">
              Cutting-edge research initiatives transforming respiratory health outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                title: 'AI-Driven Lung Disease Profiling',
                category: 'Research & Development',
                description: 'Advanced machine learning algorithms for early detection and personalized treatment of respiratory conditions.',
                image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                status: 'Ongoing',
                impact: '500+ patients screened',
                features: [
                  'Deep learning diagnostic models',
                  'Biomarker identification',
                  'Predictive risk assessment',
                  'Personalized treatment protocols'
                ]
              },
              {
                title: 'Rural Respiratory Health Initiative',
                category: 'Community Outreach',
                description: 'Comprehensive healthcare delivery program targeting underserved rural populations across India.',
                image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                status: 'Expanding',
                impact: '50+ villages reached',
                features: [
                  'Mobile screening units',
                  'Community health education',
                  'Telemedicine consultations',
                  'Traditional medicine integration'
                ]
              },
              {
                title: 'Precision Medicine Platform',
                category: 'Technology Innovation',
                description: 'Integrated digital platform combining genomics, environmental data, and clinical records for personalized care.',
                image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                status: 'Development',
                impact: 'Multi-center deployment',
                features: [
                  'Genomic data integration',
                  'Environmental factor analysis',
                  'Real-time monitoring',
                  'Clinical decision support'
                ]
              },
              {
                title: 'Youth Researcher Program',
                category: 'Education & Training',
                description: 'Mentorship and funding program developing the next generation of respiratory health researchers.',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                status: 'Annual',
                impact: '100+ researchers trained',
                features: [
                  'Research fellowships',
                  'International collaborations',
                  'Patent support',
                  'Publication assistance'
                ]
              }
            ].map((project, index) => (
              <Card key={index} className="shadow-soft hover:shadow-elegant transition-all group">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 text-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center space-x-2 text-sm text-primary font-medium">
                      <Award className="w-4 h-4" />
                      <span>{project.impact}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <ChevronRight className="w-3 h-3 text-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full mt-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Programmes & Events Section */}
        <section id="programmes-events" className="mb-20">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Programmes & Events
            </h2>
            <p className="text-xl text-muted-foreground">
              Educational initiatives and collaborative events advancing respiratory health knowledge
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'International Respiratory Health Symposium',
                type: 'Annual Conference',
                icon: <Users className="w-8 h-8" />,
                description: 'Global gathering of researchers, clinicians, and policymakers sharing latest advancements.',
                details: [
                  '500+ international participants',
                  '50+ research presentations',
                  'Networking opportunities',
                  'Policy roundtables'
                ],
                nextDate: 'March 2024'
              },
              {
                title: 'Community Health Education Program',
                type: 'Ongoing Initiative',
                icon: <Calendar className="w-8 h-8" />,
                description: 'Grassroots education program raising awareness about respiratory health in communities.',
                details: [
                  'Monthly community workshops',
                  'School awareness programs',
                  'Healthcare worker training',
                  'Educational material distribution'
                ],
                nextDate: 'Monthly'
              },
              {
                title: 'Research Excellence Fellowship',
                type: 'Scholarship Program',
                icon: <Award className="w-8 h-8" />,
                description: 'Supporting promising researchers with funding and mentorship opportunities.',
                details: [
                  'Full funding for 2 years',
                  'Mentorship from experts',
                  'Conference participation',
                  'Publication support'
                ],
                nextDate: 'Applications Open'
              },
              {
                title: 'Digital Health Innovation Challenge',
                type: 'Competition',
                icon: <Microscope className="w-8 h-8" />,
                description: 'Annual competition encouraging innovative digital solutions for respiratory health.',
                details: [
                  'Open to global participants',
                  '₹10 Lakhs prize pool',
                  'Mentorship opportunities',
                  'Startup acceleration'
                ],
                nextDate: 'September 2024'
              },
              {
                title: 'Traditional Medicine Integration Workshop',
                type: 'Research Collaboration',
                icon: <Users className="w-8 h-8" />,
                description: 'Exploring synergies between traditional healing practices and modern medicine.',
                details: [
                  'Traditional healers collaboration',
                  'Research methodology training',
                  'Documentation of practices',
                  'Clinical trial design'
                ],
                nextDate: 'Quarterly'
              },
              {
                title: 'Policy Advocacy Summit',
                type: 'Government Engagement',
                icon: <Calendar className="w-8 h-8" />,
                description: 'Engaging with policymakers to shape respiratory health policies and guidelines.',
                details: [
                  'Government stakeholder meetings',
                  'Policy recommendation reports',
                  'Public health advocacy',
                  'Healthcare system reform'
                ],
                nextDate: 'Bi-annual'
              }
            ].map((programme, index) => (
              <Card key={index} className="shadow-soft hover:shadow-elegant transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-primary">{programme.icon}</div>
                    <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">
                      {programme.type}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{programme.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {programme.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    {programme.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-primary">{programme.nextDate}</span>
                    <Button size="sm" variant="ghost" className="text-primary hover:bg-primary/5">
                      More Info
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-primary/5 rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Collaborate With Us
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Join our mission to advance respiratory health through innovative research, education, and community engagement. Together, we can make a lasting impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="alveo-gradient text-white hover:opacity-90">
              Partner With Us
            </Button>
            <Button size="lg" variant="outline">
              Support Our Research
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Work;