import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Clock, CheckCircle, Video, Phone, MessageSquare, Calendar1 } from "lucide-react";

export default function BookingForm() {
  return (
    <section className="px-4 pb-16 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Column - Consultation Types */}
          <div className="space-y-6 lg:col-span-1">
            <div>
              <h2 className="mb-4 text-2xl font-bold">Choose Your Consultation</h2>
              <p className="text-muted-foreground mb-6">Select the type of consultation that best fits your needs.</p>
            </div>

            {/* Free Strategy Session */}
            <Card className="border-primary bg-primary/5">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Free Strategy Session</CardTitle>
                  <Badge variant="secondary">Most Popular</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-muted-foreground flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4" />
                  15 minutes
                </div>
                <p className="text-sm">
                  Perfect for new projects. We'll discuss your goals, provide technical recommendations, and outline a
                  development roadmap.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Project scope analysis</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Technology recommendations</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Timeline & budget estimate</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Next steps roadmap</span>
                  </div>
                </div>
                <div className="text-primary text-2xl font-bold">Free</div>
              </CardContent>
            </Card>

            {/* Technical Audit */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Technical Audit</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-muted-foreground flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4" />
                  60 minutes
                </div>
                <p className="text-sm">
                  For existing applications. We'll review your current setup and provide optimization recommendations.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Code review & analysis</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Performance optimization</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Security assessment</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Detailed report</span>
                  </div>
                </div>
                <div className="text-2xl font-bold">$299</div>
              </CardContent>
            </Card>

            {/* Enterprise Consultation */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Enterprise Consultation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-muted-foreground flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4" />
                  90 minutes
                </div>
                <p className="text-sm">
                  For large-scale projects requiring multiple stakeholders and comprehensive planning.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Multi-stakeholder session</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Architecture planning</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Team scaling strategy</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Custom proposal</span>
                  </div>
                </div>
                <div className="text-2xl font-bold">$499</div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Booking Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Schedule Your Consultation</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours to confirm your appointment.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Contact Information */}
                <div className="space-y-4">
                  <h3 className="font-semibold">Contact Information</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="email">Business Email *</Label>
                      <Input id="email" type="email" placeholder="john@company.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name *</Label>
                    <Input id="company" placeholder="Your Company Inc." />
                  </div>
                </div>

                <Separator />

                {/* Project Information */}
                <div className="space-y-4">
                  <h3 className="font-semibold">Project Information</h3>
                  <div className="space-y-2">
                    <Label htmlFor="projectType">Project Type *</Label>
                    <select
                      id="projectType"
                      className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select project type</option>
                      <option value="new-web-app">New Web Application</option>
                      <option value="existing-optimization">Existing App Optimization</option>
                      <option value="ecommerce">E-commerce Platform</option>
                      <option value="saas">SaaS Product</option>
                      <option value="mobile-app">Mobile Application</option>
                      <option value="enterprise">Enterprise Solution</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="budget">Estimated Budget</Label>
                      <select
                        id="budget"
                        className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Select budget range</option>
                        <option value="10k-25k">$10k - $25k</option>
                        <option value="25k-50k">$25k - $50k</option>
                        <option value="50k-100k">$50k - $100k</option>
                        <option value="100k-250k">$100k - $250k</option>
                        <option value="250k+">$250k+</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timeline">Desired Timeline</Label>
                      <select
                        id="timeline"
                        className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Select timeline</option>
                        <option value="asap">ASAP (Rush project)</option>
                        <option value="1-2-months">1-2 months</option>
                        <option value="3-4-months">3-4 months</option>
                        <option value="6-months">6+ months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Project Description *</Label>
                    <Textarea
                      id="description"
                      placeholder="Tell us about your project goals, current challenges, and what you're hoping to achieve..."
                      className="min-h-[100px]"
                    />
                  </div>
                </div>

                <Separator />

                {/* Scheduling Preferences */}
                <div className="space-y-4">
                  <h3 className="font-semibold">Scheduling Preferences</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="timezone">Your Timezone</Label>
                      <select
                        id="timezone"
                        className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="EST">Eastern Time (EST)</option>
                        <option value="CST">Central Time (CST)</option>
                        <option value="MST">Mountain Time (MST)</option>
                        <option value="PST">Pacific Time (PST)</option>
                        <option value="GMT">GMT</option>
                        <option value="CET">Central European Time</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="meetingType">Meeting Type</Label>
                      <select
                        id="meetingType"
                        className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="video">Video Call (Preferred)</option>
                        <option value="phone">Phone Call</option>
                        <option value="in-person">In-Person (SF Bay Area)</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="availability">Preferred Times</Label>
                    <Textarea
                      id="availability"
                      placeholder="Let us know your preferred days and times for the consultation..."
                      className="min-h-[80px]"
                    />
                  </div>
                </div>

                {/* Meeting Format Icons */}
                <div className="bg-muted/30 flex items-center justify-center gap-8 rounded-lg border py-4">
                  <div className="text-muted-foreground flex items-center gap-2 text-sm">
                    <Video className="h-4 w-4" />
                    <span>Video Call</span>
                  </div>
                  <div className="text-muted-foreground flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4" />
                    <span>Phone Call</span>
                  </div>
                  <div className="text-muted-foreground flex items-center gap-2 text-sm">
                    <MessageSquare className="h-4 w-4" />
                    <span>Screen Share</span>
                  </div>
                </div>

                {/* Submit Button */}
                <Button className="flex w-full items-center">
                  Schedule My Consultation
                  <Calendar1 size={20} />
                </Button>

                <p className="text-muted-foreground text-center text-xs">
                  By submitting this form, you agree to our privacy policy. We'll contact you within 24 hours to confirm
                  your appointment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
