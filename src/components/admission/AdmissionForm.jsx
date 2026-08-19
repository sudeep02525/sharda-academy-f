"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/forms/Input";
import { Select } from "@/components/forms/Select";
import { Textarea } from "@/components/forms/Textarea";
import { Checkbox } from "@/components/forms/Checkbox";
import { Button } from "@/components/ui/Button";
import { AVAILABLE_COURSES, BATCH_OPTIONS } from "@/constants/admissionData";
import { Fade } from "@/components/animations/Fade";
import { motion, AnimatePresence } from "framer-motion";

import { API_BASE_URL } from "@/utils/config";

const formSchema = z.object({
  studentName: z.string().min(2, "Student name is required"),
  parentName: z.string().min(2, "Parent/Guardian name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^[0-9]{10}$/, "Must be a valid 10-digit phone number"),
  altPhone: z.string().optional().refine(val => !val || /^[0-9]{10}$/.test(val), "Must be 10 digits if provided"),
  course: z.string().min(1, "Please select a course"),
  qualification: z.string().min(1, "Please select your current qualification"),
  batch: z.string().min(1, "Please select a preferred batch"),
  address: z.string().min(10, "Please provide your full address"),
  message: z.string().optional(),
  terms: z.boolean().refine(val => val === true, "You must accept the terms and conditions")
});

export function AdmissionForm({ data }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const courses = data?.courses || AVAILABLE_COURSES;
  const batches = data?.batches || BATCH_OPTIONS;
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
    setValue
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      terms: false
    }
  });

  const onSubmit = async (formData) => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/admissions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.message || "Submission failed");
      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  const courseOptions = courses.map(c => ({ value: c, label: c }));
  const batchOptions = batches.map(b => ({ value: b, label: b }));
  const qualificationOptions = [
    { value: "Class 8", label: "Currently in Class 8" },
    { value: "Class 9", label: "Currently in Class 9" },
    { value: "Class 10", label: "Currently in Class 10" },
    { value: "Class 11", label: "Currently in Class 11" },
    { value: "Class 12", label: "Currently in Class 12" },
    { value: "12th Pass / Dropper", label: "12th Pass / Dropper" }
  ];

  return (
    <section className="py-24 bg-background border-t border-border" id="apply">
      <div className="container mx-auto px-4 max-w-4xl">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-heading tracking-tight mb-4">
            Online Admission Application
          </h2>
          <p className="text-paragraph text-lg">
            Fill out the form below securely. Our admissions counselor will contact you within 24 hours.
          </p>
        </div>

        <div className="bg-card border border-border shadow-xl rounded-3xl p-8 md:p-12">
          
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
              >
                <div className="w-24 h-24 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                </div>
                <h3 className="text-3xl font-bold text-heading mb-4">Application Received!</h3>
                <p className="text-paragraph text-lg mb-8 max-w-md mx-auto">
                  Thank you for applying to Sharda Academy. We have sent a confirmation email with further instructions.
                </p>
                <Button onClick={() => setIsSubmitted(false)}>Submit Another Application</Button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-8"
              >
                
                {/* Personal Details */}
                <div>
                  <h3 className="text-xl font-bold text-heading mb-6 pb-2 border-b border-border">1. Personal Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input 
                      label="Student Full Name *" 
                      placeholder="e.g. Aarav Sharma" 
                      error={errors.studentName?.message}
                      {...register("studentName")} 
                    />
                    <Input 
                      label="Parent/Guardian Name *" 
                      placeholder="e.g. Rajiv Sharma" 
                      error={errors.parentName?.message}
                      {...register("parentName")} 
                    />
                    <Input 
                      label="Email Address *" 
                      type="email" 
                      placeholder="aarav@example.com" 
                      error={errors.email?.message}
                      {...register("email")} 
                    />
                    <Input 
                      label="Phone Number *" 
                      placeholder="10-digit number" 
                      error={errors.phone?.message}
                      {...register("phone")} 
                    />
                    <Input 
                      label="Alternate Phone (Optional)" 
                      placeholder="10-digit number" 
                      error={errors.altPhone?.message}
                      {...register("altPhone")} 
                    />
                  </div>
                </div>

                {/* Academic Details */}
                <div>
                  <h3 className="text-xl font-bold text-heading mb-6 pb-2 border-b border-border mt-8">2. Academic & Course Preferences</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Select 
                      label="Current Qualification *" 
                      options={qualificationOptions}
                      error={errors.qualification?.message}
                      {...register("qualification")}
                    />
                    <Select 
                      label="Course Applied For *" 
                      options={courseOptions}
                      error={errors.course?.message}
                      {...register("course")}
                    />
                    <div className="md:col-span-2">
                      <Select 
                        label="Preferred Batch Timing *" 
                        options={batchOptions}
                        error={errors.batch?.message}
                        {...register("batch")}
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Info */}
                <div>
                  <h3 className="text-xl font-bold text-heading mb-6 pb-2 border-b border-border mt-8">3. Additional Information</h3>
                  <div className="grid grid-cols-1 gap-6">
                    <Textarea 
                      label="Full Residential Address *" 
                      placeholder="Enter complete address with PIN code" 
                      error={errors.address?.message}
                      {...register("address")}
                    />
                    <Textarea 
                      label="Message / Special Request (Optional)" 
                      placeholder="Any specific queries or health conditions we should know about?" 
                      error={errors.message?.message}
                      {...register("message")}
                    />
                    
                    {/* File Upload Placeholder */}
                    <div className="bg-muted border border-dashed border-border rounded-xl p-6 text-center">
                       <svg className="w-8 h-8 mx-auto text-muted-foreground mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                       <p className="text-sm font-semibold text-heading mb-1">Upload Documents (Optional for now)</p>
                       <p className="text-xs text-muted-foreground">Supported formats: PDF, JPG, PNG (Max 5MB)</p>
                       <Button type="button" variant="outline" size="sm" className="mt-4">Choose Files</Button>
                    </div>

                  </div>
                </div>

                {/* Agreement */}
                <div className="pt-4 border-t border-border">
                  <Checkbox 
                    label={
                      <span className="text-sm text-paragraph">
                        I declare that the information provided is true and correct. I agree to the <a href="#" className="text-primary font-semibold hover:underline">Terms & Conditions</a> and <a href="#" className="text-primary font-semibold hover:underline">Privacy Policy</a>.
                      </span>
                    }
                    error={errors.terms?.message}
                    {...register("terms")}
                  />
                </div>

                {/* Submit */}
                <div className="flex justify-end pt-4">
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full md:w-auto px-12"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                        Processing Application...
                      </span>
                    ) : (
                      "Submit Application"
                    )}
                  </Button>
                </div>

              </motion.form>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}
