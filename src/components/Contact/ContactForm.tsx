import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useFormValidation } from './hooks/useFormValidation';
import { FormInput } from './FormInput';
import { FormTextArea } from './FormTextArea';
import { SubmitButton } from './SubmitButton';

export const ContactForm = () => {
  const { values, errors, handleChange, isValid } = useFormValidation({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <FormInput
        label="Your Name"
        name="name"
        value={values.name}
        error={errors.name}
        onChange={handleChange}
        required
      />

      <FormInput
        label="Your Email"
        name="email"
        type="email"
        value={values.email}
        error={errors.email}
        onChange={handleChange}
        required
      />

      <FormTextArea
        label="Your Message"
        name="message"
        value={values.message}
        error={errors.message}
        onChange={handleChange}
        required
      />

      <SubmitButton
        isSubmitting={isSubmitting}
        icon={<Send size={16} />}
      />

      {submitStatus === 'success' && (
        <p className="text-green-400 text-sm mt-2">
          Thanks for reaching out! I'll get back to you within 48 hours.
        </p>
      )}

      {submitStatus === 'error' && (
        <p className="text-red-400 text-sm mt-2">
          Oops! Something went wrong. Please try again later.
        </p>
      )}
    </form>
  );
};