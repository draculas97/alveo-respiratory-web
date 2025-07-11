import React, { useState } from 'react';
import { Briefcase, TrendingUp, Users, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const Careers = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    position: '',
    experience: '',
    education: '',
    skills: '',
    motivation: '',
    availability: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest. Our HR team will review your application and contact you within a week.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      location: '',
      position: '',
      experience: '',
      education: '',
      skills: '',
      motivation: '',
      availability: ''
    });
  };

  const openPositions = [
    {
      title: 'Senior Research Scientist',
      department: 'Research & Development',
      type: 'Full-time',
      location: 'New Delhi',
      experience: '5+ years',
      description: 'Lead innovative research projects in respiratory health diagnostics and AI-driven analysis.',
      requirements: ['PhD in relevant field', 'Machine learning expertise', 'Research publication record']
    },
    {
      title: 'Community Health Coordinator',
      department: 'Outreach Programs',
      type: 'Full-time',
      location: 'Multiple States',
      experience: '3+ years',
      description: 'Manage community health initiatives and educational programs across rural and urban areas.',
      requirements: ['Public health background', 'Community engagement experience', 'Multi-language skills']
    },
    {
      title: 'Data Analyst',
      department: 'Digital Health',
      type: 'Full-time',
      location: 'Bangalore',
      experience: '2+ years',
      description: 'Analyze health data to drive evidence-based decision making and research insights.',
      requirements: ['Statistics/Data Science degree', 'Python/R proficiency', 'Healthcare data experience']
    },
    {
      title: 'Clinical Research Associate',
      department: 'Clinical Operations',
      type: 'Full-time',
      location: 'Mumbai',
      experience: '2+ years',
      description: 'Support clinical trials and research studies in respiratory health interventions.',
      requirements: ['Life sciences degree', 'GCP certification', 'Clinical research experience']
    },
    {
      title: 'Program Manager',
      department: 'Operations',
      type: 'Full-time',
      location: 'New Delhi',
      experience: '4+ years',
      description: 'Oversee project implementation and stakeholder coordination for health initiatives.',
      requirements: ['MBA or equivalent', 'Project management certification', 'Healthcare sector experience']
    },
    {
      title: 'Digital Health Engineer',
      department: 'Technology',
      type: 'Full-time',
      location: 'Pune',
      experience: '3+ years',
      description: 'Develop and maintain digital health platforms and telemedicine solutions.',
      requirements: ['Computer Science degree', 'Full-stack development', 'Healthcare IT knowledge']
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Build Your <span className="alveo-logo-text">Career</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Join our mission-driven team and build a meaningful career while advancing respiratory health research and improving lives across communities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Briefcase className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Why Work With Us?
              </h2>
            </div>
            
            <div className="space-y-6 mb-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                At ALVEO 4P, we're not just building careers—we're shaping the future of respiratory health. Join a team where your expertise drives meaningful change and innovation.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: 'Meaningful Impact',
                    description: 'Work on projects that directly improve health outcomes',
                    icon: '🎯'
                  },
                  {
                    title: 'Innovation Focus',
                    description: 'Access to cutting-edge technology and research facilities',
                    icon: '🚀'
                  },
                  {
                    title: 'Global Collaboration',
                    description: 'Work with international experts and institutions',
                    icon: '🌍'
                  },
                  {
                    title: 'Career Growth',
                    description: 'Professional development and advancement opportunities',
                    icon: '📈'
                  },
                  {
                    title: 'Work-Life Balance',
                    description: 'Flexible working arrangements and wellness programs',
                    icon: '⚖️'
                  },
                  {
                    title: 'Continuous Learning',
                    description: 'Training programs and conference attendance support',
                    icon: '📚'
                  }
                ].map((benefit, index) => (
                  <Card key={index} className="shadow-soft">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-2xl">{benefit.icon}</span>
                        <h3 className="font-semibold text-foreground">{benefit.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Benefits Package */}
            <div className="bg-primary/5 rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-4">Comprehensive Benefits</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <ul className="space-y-2">
                  <li>• Competitive salary packages</li>
                  <li>• Health insurance for family</li>
                  <li>• Performance-based bonuses</li>
                  <li>• Retirement savings plan</li>
                </ul>
                <ul className="space-y-2">
                  <li>• Professional development budget</li>
                  <li>• Flexible working hours</li>
                  <li>• Research publication support</li>
                  <li>• Conference travel opportunities</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Application Form */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle>General Application</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Current Location</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="position">Position of Interest</Label>
                  <Select onValueChange={(value) => handleInputChange('position', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select position or department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="research">Research & Development</SelectItem>
                      <SelectItem value="clinical">Clinical Operations</SelectItem>
                      <SelectItem value="community">Community Outreach</SelectItem>
                      <SelectItem value="technology">Technology & Digital Health</SelectItem>
                      <SelectItem value="operations">Operations & Management</SelectItem>
                      <SelectItem value="policy">Policy & Advocacy</SelectItem>
                      <SelectItem value="open">Open to Opportunities</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="education">Educational Background</Label>
                  <Textarea
                    id="education"
                    value={formData.education}
                    onChange={(e) => handleInputChange('education', e.target.value)}
                    placeholder="Degree, institution, year of completion, specialization"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Professional Experience</Label>
                  <Textarea
                    id="experience"
                    value={formData.experience}
                    onChange={(e) => handleInputChange('experience', e.target.value)}
                    placeholder="Brief overview of your work experience and achievements"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="skills">Key Skills & Expertise</Label>
                  <Textarea
                    id="skills"
                    value={formData.skills}
                    onChange={(e) => handleInputChange('skills', e.target.value)}
                    placeholder="Technical skills, certifications, languages, tools"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="availability">Availability</Label>
                  <Select onValueChange={(value) => handleInputChange('availability', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="When can you start?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediate">Immediate</SelectItem>
                      <SelectItem value="2-weeks">2 weeks notice</SelectItem>
                      <SelectItem value="1-month">1 month notice</SelectItem>
                      <SelectItem value="2-months">2 months notice</SelectItem>
                      <SelectItem value="negotiable">Negotiable</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="motivation">Why ALVEO 4P?</Label>
                  <Textarea
                    id="motivation"
                    value={formData.motivation}
                    onChange={(e) => handleInputChange('motivation', e.target.value)}
                    placeholder="What interests you about our mission? How do you see yourself contributing?"
                  />
                </div>

                <Button type="submit" className="w-full alveo-gradient text-white">
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Open Positions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">Current Openings</h2>
          <div className="space-y-6">
            {openPositions.map((job, index) => (
              <Card key={index} className="shadow-soft hover:shadow-elegant transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                    <div className="mb-4 lg:mb-0">
                      <h3 className="text-xl font-semibold text-foreground mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span>📍 {job.location}</span>
                        <span>🏢 {job.department}</span>
                        <span>💼 {job.type}</span>
                        <span>⏱️ {job.experience}</span>
                      </div>
                    </div>
                    <Button variant="outline" className="hover:bg-primary hover:text-white transition-colors">
                      Apply Now
                    </Button>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{job.description}</p>
                  
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Key Requirements:</h4>
                    <ul className="text-sm text-muted-foreground">
                      {job.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Company Culture */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">Our Culture</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: 'Innovation-Driven',
                description: 'We encourage creative thinking and breakthrough solutions'
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Collaborative',
                description: 'Cross-functional teamwork and knowledge sharing'
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: 'Excellence-Oriented',
                description: 'High standards and continuous improvement mindset'
              }
            ].map((value, index) => (
              <Card key={index} className="shadow-soft text-center">
                <CardContent className="p-6">
                  <div className="text-primary mb-4 flex justify-center">{value.icon}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-muted/30 rounded-lg p-8 md:p-12 text-center">
          <Briefcase className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Join our team of passionate professionals working to transform respiratory health globally. Your career can be the catalyst for positive change in millions of lives.
          </p>
          <Button size="lg" className="alveo-gradient text-white hover:opacity-90">
            Explore Opportunities
          </Button>
        </section>
      </div>
    </div>
  );
};

export default Careers;