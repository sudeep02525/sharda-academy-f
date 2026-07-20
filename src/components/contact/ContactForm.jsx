"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/forms/Input";
import { Select } from "@/components/forms/Select";
import { Textarea } from "@/components/forms/Textarea";
import { Button } from "@/components/ui/Button";
import { INQUIRY_TYPES } from "@/constants/contactData";
import { Fade } from "@/components/animations/Fade";
import { motion, AnimatePresence } from "framer-motion";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
  phone: z.string().regex(/^[0-9]{10}$/, "Must be a valid 10-digit phone number"),
  inquiryType: z.string().min(1, "Please select an inquiry type"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data) => {
    // Simulate API request
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Contact Request submitted:", data);
    setIsSubmitted(true);
    reset();
  };

  return (
    <Fade direction="left" delay={0.3} className="h-full">
      <div className="bg-card border border-border shadow-xl rounded-3xl p-8 md:p-10 h-full flex flex-col">
        
        <h3 className="text-2xl font-bold text-heading mb-2">Send us a Message</h3>
        <p className="text-paragraph text-sm mb-8">
          Fill out the form below and our team will get back to you within 24 business hours.
        </p>

        <AnimatePresence mode="wait">
          {isSubmitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex-grow flex flex-col items-center justify-center text-center py-12"
            >
              <div className="w-20 h-20 bg-success/10 text-success rounded-full flex items-center justify-center mb-6">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
              </div>
              <h4 className="text-2xl font-bold text-heading mb-2">Message Sent!</h4>
              <p className="text-paragraph mb-8">We have received your message and will respond shortly.</p>
              <Button onClick={() => setIsSubmitted(false)}>Send Another Message</Button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6 flex-grow flex flex-col"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input 
                  label="Full Name *" 
                  placeholder="Your name" 
                  error={errors.name?.message}
                  {...register("name")} 
                />
                <Input 
                  label="Phone Number *" 
                  placeholder="10-digit number" 
                  error={errors.phone?.message}
                  {...register("phone")} 
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input 
                  label="Email Address (Optional)" 
                  type="email" 
                  placeholder="you@example.com" 
                  error={errors.email?.message}
                  {...register("email")} 
                />
                <Select 
                  label="Inquiry Type *" 
                  options={INQUIRY_TYPES}
                  error={errors.inquiryType?.message}
                  {...register("inquiryType")}
                />
              </div>

              <Input 
                label="Subject *" 
                placeholder="Brief subject of your inquiry" 
                error={errors.subject?.message}
                {...register("subject")} 
              />

              <div className="flex-grow flex flex-col">
                 <Textarea 
                   label="Your Message *" 
                   placeholder="How can we help you?" 
                   error={errors.message?.message}
                   className="flex-grow min-h-[150px]"
                   {...register("message")}
                 />
              </div>

              <div className="pt-2">
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>

      </div>
    </Fade>
  );
}
