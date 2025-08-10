"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { toast } from "sonner";

interface ConsultationFormData {
    name: string;
    email: string;
    phone?: string;
    company?: string;
    projectType: string;
    message: string;
}

export default function ConsultationForm() {
    const [formData, setFormData] = useState<ConsultationFormData>({
        name: "",
        email: "",
        phone: "",
        company: "",
        projectType: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (field: keyof ConsultationFormData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/consultation', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                setIsSubmitted(true);
                toast.success("Consultation request sent successfully!");
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    company: "",
                    projectType: "",
                    message: "",
                });
            } else {
                throw new Error(result.error || 'Failed to send consultation request');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error("Failed to send consultation request. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <div className="bg-white/80 rounded-2xl shadow-2xl p-8 text-center backdrop-blur-lg border border-green-100">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-700 mb-2">Thank You!</h3>
                <p className="text-gray-600 mb-6">
                    Your consultation request has been sent successfully. We'll get back to you within 24 hours.
                </p>
                <Button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white hover:from-indigo-600 hover:to-blue-600"
                >
                    Send Another Request
                </Button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white/80 rounded-2xl shadow-2xl p-8 flex flex-col gap-6 backdrop-blur-lg border border-blue-100">
            <div className="text-center mb-4">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
                    Get Your Free Consultation
                </h2>
                <p className="text-gray-600 mt-2">
                    Tell us about your project and we'll get back to you within 24 hours
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">
                        Full Name *
                    </Label>
                    <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="John Doe"
                        required
                        className="bg-white/80 border border-gray-200 focus:ring-2 focus:ring-primary"
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                        Email Address *
                    </Label>
                    <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="john@example.com"
                        required
                        className="bg-white/80 border border-gray-200 focus:ring-2 focus:ring-primary"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium">
                        Phone Number
                    </Label>
                    <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+1 (555) 123-4567"
                        className="bg-white/80 border border-gray-200 focus:ring-2 focus:ring-primary"
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm font-medium">
                        Company
                    </Label>
                    <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        placeholder="Your Company"
                        className="bg-white/80 border border-gray-200 focus:ring-2 focus:ring-primary"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="projectType" className="text-sm font-medium">
                    Project Type *
                </Label>
                <Select value={formData.projectType} onValueChange={(value) => handleInputChange('projectType', value)}>
                    <SelectTrigger className="bg-white/80 border border-gray-200 focus:ring-2 focus:ring-primary">
                        <SelectValue placeholder="Select your project type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="mobile-app">Mobile App Development</SelectItem>
                        <SelectItem value="web-app">Web App Development</SelectItem>
                        <SelectItem value="cross-platform">Cross-Platform Development</SelectItem>
                        <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                        <SelectItem value="maintenance">App Maintenance & Support</SelectItem>
                        <SelectItem value="consultation">General Consultation</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium">
                    Project Details *
                </Label>
                <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Tell us about your project, requirements, timeline, and any specific questions you have..."
                    rows={4}
                    required
                    className="bg-white/80 border border-gray-200 focus:ring-2 focus:ring-primary"
                />
            </div>

            <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow-lg hover:from-indigo-600 hover:to-blue-600 transition-all font-bold text-lg py-6 disabled:opacity-50"
            >
                {isSubmitting ? (
                    <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending Request...
                    </>
                ) : (
                    "Send Consultation Request"
                )}
            </Button>

            <p className="text-xs text-center text-muted-foreground">
                By submitting this form, you agree to our privacy policy and terms of service.
            </p>
        </form>
    );
}
