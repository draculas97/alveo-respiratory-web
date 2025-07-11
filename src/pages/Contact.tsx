import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll respond within 24 hours.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      category: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact <span className="alveo-logo-text">Us</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We're here to answer your questions, discuss partnerships, and explore how we can work together to advance respiratory health.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Get in Touch
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Whether you're a researcher interested in collaboration, a community leader looking for health programs, or someone who wants to support our mission, we'd love to hear from you.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
                      <div className="space-y-1 text-muted-foreground">
                        <p>General Inquiries: info@alveo4p.org</p>
                        <p>Research: research@alveo4p.org</p>
                        <p>Partnerships: partnerships@alveo4p.org</p>
                        <p>Media: media@alveo4p.org</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
                      <div className="space-y-1 text-muted-foreground">
                        <p>Main Office: +91 (0) 000-000-0000</p>
                        <p>Research Dept: +91 (0) 000-000-0001</p>
                        <p>Emergency Contact: +91 (0) 000-000-0002</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Visit Us</h3>
                      <div className="text-muted-foreground">
                        <p>ALVEO 4P Charitable Trust</p>
                        <p>Research Center, Medical District</p>
                        <p>123 Health Innovation Boulevard</p>
                        <p>New Delhi - 110001, India</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Office Hours</h3>
                      <div className="space-y-1 text-muted-foreground">
                        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p>Saturday: 10:00 AM - 4:00 PM</p>
                        <p>Sunday: Closed</p>
                        <p className="text-sm text-primary mt-2">
                          Emergency contact available 24/7
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map Section */}
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4">Find Our Location</h3>
                <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <p>Interactive map would be integrated here</p>
                    <p className="text-sm">Research Center, Medical District, New Delhi</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  <span>Send Us a Message</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Inquiry Category</Label>
                    <Select onValueChange={(value) => handleInputChange('category', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Information</SelectItem>
                        <SelectItem value="research">Research Collaboration</SelectItem>
                        <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                        <SelectItem value="volunteer">Volunteer Program</SelectItem>
                        <SelectItem value="donation">Donation Inquiry</SelectItem>
                        <SelectItem value="media">Media Request</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      placeholder="Brief subject line"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Please provide details about your inquiry..."
                      className="min-h-[150px]"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full alveo-gradient text-white hover:opacity-90">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    We typically respond within 24 hours during business days.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="shadow-soft mt-8">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <a href="/about" className="block text-muted-foreground hover:text-primary transition-colors">
                      About Our Trust
                    </a>
                    <a href="/work#projects" className="block text-muted-foreground hover:text-primary transition-colors">
                      Current Projects
                    </a>
                    <a href="/get-involved#volunteer" className="block text-muted-foreground hover:text-primary transition-colors">
                      Volunteer Program
                    </a>
                  </div>
                  <div className="space-y-2">
                    <a href="/work#programmes-events" className="block text-muted-foreground hover:text-primary transition-colors">
                      Upcoming Events
                    </a>
                    <a href="/get-involved#partner" className="block text-muted-foreground hover:text-primary transition-colors">
                      Partnership Info
                    </a>
                    <a href="/gallery" className="block text-muted-foreground hover:text-primary transition-colors">
                      Photo Gallery
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Emergency Contact Section */}
        <section className="mt-16 bg-destructive/5 border border-destructive/20 rounded-lg p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Emergency Health Information
            </h2>
            <p className="text-muted-foreground mb-6">
              For immediate medical emergencies, please contact your local emergency services. 
              For urgent respiratory health concerns, consult your healthcare provider.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="text-center">
                <p className="font-semibold text-foreground">National Emergency</p>
                <p className="text-lg font-bold text-destructive">112</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-foreground">Health Helpline</p>
                <p className="text-lg font-bold text-primary">104</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;