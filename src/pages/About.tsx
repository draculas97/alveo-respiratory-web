import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Award, Target, Eye } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
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
        {/* Overview Section */}
        <section id="overview" className="mb-20">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="alveo-logo-text">ALVEO 4P</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              In a world where breath is taken for granted—until it becomes a struggle—ALVEO 4P Charitable Trust stands committed to transforming the narrative of respiratory health.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
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
        </section>

        {/* Vision & Mission Section */}
        <section id="vision-mission" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Vision & Mission
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-soft border-l-4 border-l-primary">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Eye className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-semibold text-foreground">Our Vision</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                  "Promoting Responsible Science and Research for Personalized Good Health Practices"
                </p>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  We envision a world where scientific research drives personalized healthcare solutions, making respiratory health accessible to all through responsible innovation and evidence-based practices.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft border-l-4 border-l-primary">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Target className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-semibold text-foreground">Our Mission</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                  "To foster respiratory health awareness and build a sustainable, personalized respiratory health ecosystem through continuous research, education, and technology"
                </p>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  We are committed to creating comprehensive solutions that integrate cutting-edge research, community education, and technological innovation to transform respiratory care.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Board of Trustees Section */}
        <section id="board-of-trustees" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Board of Trustees
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our distinguished board brings together leading experts in medicine, research, and public health.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Dr. Rajesh Kumar',
                role: 'Chairman & Chief Medical Officer',
                specialty: 'Pulmonology & Respiratory Medicine',
                image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
              },
              {
                name: 'Prof. Meera Sharma',
                role: 'Vice Chairperson',
                specialty: 'Public Health & Epidemiology',
                image: 'https://images.unsplash.com/photo-1594824204845-c5ae2d9a4b5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
              },
              {
                name: 'Dr. Arjun Patel',
                role: 'Secretary & Research Director',
                specialty: 'Biomedical Engineering',
                image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
              },
              {
                name: 'Ms. Priya Singh',
                role: 'Treasurer',
                specialty: 'Healthcare Administration',
                image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
              },
              {
                name: 'Dr. Suresh Gupta',
                role: 'Trustee',
                specialty: 'Preventive Medicine',
                image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
              },
              {
                name: 'Prof. Anita Verma',
                role: 'Trustee',
                specialty: 'Community Health',
                image: 'https://images.unsplash.com/photo-1594824204845-c5ae2d9a4b5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
              }
            ].map((member, index) => (
              <Card key={index} className="shadow-soft hover:shadow-elegant transition-shadow">
                <CardContent className="p-6 text-center">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.specialty}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Leadership Section */}
        <section id="leadership" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our dedicated leadership team drives innovation and excellence in respiratory health research and care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'Dr. Kavita Reddy',
                role: 'Head of Research',
                department: 'Advanced Diagnostics',
                image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
              },
              {
                name: 'Dr. Rohit Jain',
                role: 'Clinical Director',
                department: 'Patient Care',
                image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
              },
              {
                name: 'Ms. Nisha Agarwal',
                role: 'Program Manager',
                department: 'Community Outreach',
                image: 'https://images.unsplash.com/photo-1594824204845-c5ae2d9a4b5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
              },
              {
                name: 'Dr. Vikram Singh',
                role: 'Technology Lead',
                department: 'Digital Health',
                image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
              }
            ].map((member, index) => (
              <Card key={index} className="shadow-soft hover:shadow-elegant transition-shadow">
                <CardContent className="p-6 text-center">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-medium text-sm mb-1">{member.role}</p>
                  <p className="text-xs text-muted-foreground">{member.department}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

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

export default About;