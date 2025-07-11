import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Heart, Users, Briefcase, ArrowRight, Mail, Phone, MapPin, User } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const GetInvolved = () => {
  const location = useLocation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    experience: '',
    skills: '',
    availability: '',
    motivation: '',
    type: 'volunteer' // volunteer, partner, career
  });

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest. We'll get back to you within 48 hours.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      location: '',
      experience: '',
      skills: '',
      availability: '',
      motivation: '',
      type: 'volunteer'
    });
  };

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get <span className="alveo-logo-text">Involved</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Join our mission to transform respiratory health. Whether through volunteering, partnerships, or careers, there are many ways to make a meaningful impact.
          </p>
        </div>

        {/* Volunteer Section */}
        <section id="volunteer" className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Heart className="w-8 h-8 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Become a Volunteer
                </h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Join our dedicated team of volunteers and contribute to life-changing respiratory health initiatives across India.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      title: 'Research Support',
                      description: 'Assist with data collection, analysis, and research administration'
                    },
                    {
                      title: 'Community Outreach',
                      description: 'Help organize and conduct health awareness programs in communities'
                    },
                    {
                      title: 'Educational Programs',
                      description: 'Support training workshops and educational content development'
                    },
                    {
                      title: 'Event Coordination',
                      description: 'Assist with symposiums, conferences, and networking events'
                    }
                  ].map((opportunity, index) => (
                    <Card key={index} className="shadow-soft">
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-foreground mb-2">{opportunity.title}</h3>
                        <p className="text-sm text-muted-foreground">{opportunity.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="bg-primary/5 rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-3">Volunteer Benefits</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <ArrowRight className="w-4 h-4 text-primary" />
                      <span>Professional development opportunities</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <ArrowRight className="w-4 h-4 text-primary" />
                      <span>Networking with healthcare professionals</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <ArrowRight className="w-4 h-4 text-primary" />
                      <span>Certificate of appreciation</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <ArrowRight className="w-4 h-4 text-primary" />
                      <span>Contribution to meaningful health initiatives</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle>Volunteer Application</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input type="hidden" value="volunteer" onChange={() => handleInputChange('type', 'volunteer')} />
                  
                  <div className="space-y-2">
                    <Label htmlFor="volunteer-name">Full Name *</Label>
                    <Input
                      id="volunteer-name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="volunteer-email">Email *</Label>
                      <Input
                        id="volunteer-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="volunteer-phone">Phone</Label>
                      <Input
                        id="volunteer-phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="volunteer-location">Location</Label>
                    <Input
                      id="volunteer-location"
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      placeholder="City, State"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="volunteer-experience">Relevant Experience</Label>
                    <Textarea
                      id="volunteer-experience"
                      value={formData.experience}
                      onChange={(e) => handleInputChange('experience', e.target.value)}
                      placeholder="Brief description of your background and experience"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="volunteer-skills">Skills & Interests</Label>
                    <Textarea
                      id="volunteer-skills"
                      value={formData.skills}
                      onChange={(e) => handleInputChange('skills', e.target.value)}
                      placeholder="What skills do you bring? What areas interest you most?"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="volunteer-availability">Availability</Label>
                    <Select onValueChange={(value) => handleInputChange('availability', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your availability" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="weekends">Weekends only</SelectItem>
                        <SelectItem value="evenings">Weekday evenings</SelectItem>
                        <SelectItem value="flexible">Flexible schedule</SelectItem>
                        <SelectItem value="full-time">Full-time availability</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="volunteer-motivation">Why do you want to volunteer with us?</Label>
                    <Textarea
                      id="volunteer-motivation"
                      value={formData.motivation}
                      onChange={(e) => handleInputChange('motivation', e.target.value)}
                      placeholder="Tell us about your motivation to join our mission"
                    />
                  </div>

                  <Button type="submit" className="w-full alveo-gradient text-white">
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Partner Section */}
        <section id="partner" className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <Card className="shadow-elegant order-2 lg:order-1">
              <CardHeader>
                <CardTitle>Partnership Inquiry</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input type="hidden" value="partner" onChange={() => handleInputChange('type', 'partner')} />
                  
                  <div className="space-y-2">
                    <Label htmlFor="partner-name">Organization/Individual Name *</Label>
                    <Input
                      id="partner-name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="partner-email">Contact Email *</Label>
                      <Input
                        id="partner-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="partner-phone">Phone</Label>
                      <Input
                        id="partner-phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="partner-location">Location/Headquarters</Label>
                    <Input
                      id="partner-location"
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="partner-experience">Organization Background</Label>
                    <Textarea
                      id="partner-experience"
                      value={formData.experience}
                      onChange={(e) => handleInputChange('experience', e.target.value)}
                      placeholder="Tell us about your organization and its mission"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="partner-skills">Partnership Areas of Interest</Label>
                    <Textarea
                      id="partner-skills"
                      value={formData.skills}
                      onChange={(e) => handleInputChange('skills', e.target.value)}
                      placeholder="Research collaboration, funding, technology sharing, etc."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="partner-motivation">Partnership Proposal</Label>
                    <Textarea
                      id="partner-motivation"
                      value={formData.motivation}
                      onChange={(e) => handleInputChange('motivation', e.target.value)}
                      placeholder="Describe your partnership ideas and how we can work together"
                    />
                  </div>

                  <Button type="submit" className="w-full alveo-gradient text-white">
                    Submit Partnership Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="order-1 lg:order-2">
              <div className="flex items-center space-x-3 mb-6">
                <Users className="w-8 h-8 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Partner with Us
                </h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Collaborate with ALVEO 4P to amplify your impact in respiratory health through strategic partnerships.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      title: 'Research Institutions',
                      description: 'Joint research projects and knowledge sharing initiatives'
                    },
                    {
                      title: 'Healthcare Organizations',
                      description: 'Clinical collaborations and patient care improvements'
                    },
                    {
                      title: 'Technology Companies',
                      description: 'Digital health solutions and innovation partnerships'
                    },
                    {
                      title: 'Government Bodies',
                      description: 'Policy development and public health program implementation'
                    }
                  ].map((opportunity, index) => (
                    <Card key={index} className="shadow-soft">
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-foreground mb-2">{opportunity.title}</h3>
                        <p className="text-sm text-muted-foreground">{opportunity.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="bg-primary/5 rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-3">Partnership Benefits</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <ArrowRight className="w-4 h-4 text-primary" />
                      <span>Access to cutting-edge research facilities</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <ArrowRight className="w-4 h-4 text-primary" />
                      <span>Collaboration with leading experts</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <ArrowRight className="w-4 h-4 text-primary" />
                      <span>Joint publication opportunities</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <ArrowRight className="w-4 h-4 text-primary" />
                      <span>Expanded network and visibility</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Careers Section */}
        <section id="careers" className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Briefcase className="w-8 h-8 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Careers
                </h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Build a meaningful career while advancing respiratory health research and improving lives across communities.
                </p>

                <div className="space-y-4">
                  {[
                    {
                      title: 'Research Scientist',
                      department: 'Research & Development',
                      type: 'Full-time',
                      description: 'Lead innovative research projects in respiratory health diagnostics and treatment.'
                    },
                    {
                      title: 'Community Health Coordinator',
                      department: 'Outreach Programs',
                      type: 'Full-time',
                      description: 'Manage community health initiatives and educational programs.'
                    },
                    {
                      title: 'Data Analyst',
                      department: 'Digital Health',
                      type: 'Full-time',
                      description: 'Analyze health data to drive evidence-based decision making.'
                    },
                    {
                      title: 'Program Manager',
                      department: 'Operations',
                      type: 'Full-time',
                      description: 'Oversee project implementation and stakeholder coordination.'
                    }
                  ].map((job, index) => (
                    <Card key={index} className="shadow-soft hover:shadow-elegant transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-foreground">{job.title}</h3>
                          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                            {job.type}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{job.department}</p>
                        <p className="text-sm text-muted-foreground">{job.description}</p>
                        <Button size="sm" variant="outline" className="mt-3">
                          View Details
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="bg-primary/5 rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-3">Why Work With Us?</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <ArrowRight className="w-4 h-4 text-primary" />
                      <span>Competitive compensation and benefits</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <ArrowRight className="w-4 h-4 text-primary" />
                      <span>Professional development opportunities</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <ArrowRight className="w-4 h-4 text-primary" />
                      <span>Collaborative and inclusive work environment</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <ArrowRight className="w-4 h-4 text-primary" />
                      <span>Meaningful impact on global health</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle>Career Interest</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input type="hidden" value="career" onChange={() => handleInputChange('type', 'career')} />
                  
                  <div className="space-y-2">
                    <Label htmlFor="career-name">Full Name *</Label>
                    <Input
                      id="career-name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="career-email">Email *</Label>
                      <Input
                        id="career-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="career-phone">Phone</Label>
                      <Input
                        id="career-phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="career-location">Current Location</Label>
                    <Input
                      id="career-location"
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="career-experience">Professional Background</Label>
                    <Textarea
                      id="career-experience"
                      value={formData.experience}
                      onChange={(e) => handleInputChange('experience', e.target.value)}
                      placeholder="Tell us about your education, experience, and qualifications"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="career-skills">Skills & Expertise</Label>
                    <Textarea
                      id="career-skills"
                      value={formData.skills}
                      onChange={(e) => handleInputChange('skills', e.target.value)}
                      placeholder="List your key skills and areas of expertise"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="career-motivation">Career Interests</Label>
                    <Textarea
                      id="career-motivation"
                      value={formData.motivation}
                      onChange={(e) => handleInputChange('motivation', e.target.value)}
                      placeholder="What positions interest you? What are your career goals?"
                    />
                  </div>

                  <Button type="submit" className="w-full alveo-gradient text-white">
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-muted/30 rounded-lg p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Questions? Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground">
              Our team is here to help you find the right way to get involved with our mission.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
              <p className="text-muted-foreground">volunteer@alveo4p.org</p>
              <p className="text-muted-foreground">partnerships@alveo4p.org</p>
            </div>
            <div className="text-center">
              <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
              <p className="text-muted-foreground">+91 (0) 000-000-0000</p>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Visit Us</h3>
              <p className="text-muted-foreground">Research Center</p>
              <p className="text-muted-foreground">Medical District, City</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GetInvolved;