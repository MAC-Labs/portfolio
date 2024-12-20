import { useState, ChangeEvent } from 'react';

interface FormValues {
  [key: string]: string;
}

interface FormErrors {
  [key: string]: string;
}

export const useFormValidation = (initialValues: FormValues) => {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !value
          ? 'Email is required'
          : !emailRegex.test(value)
          ? 'Please enter a valid email address'
          : '';
      case 'name':
        return !value
          ? 'Name is required'
          : value.length < 2
          ? 'Name must be at least 2 characters long'
          : '';
      case 'message':
        return !value
          ? 'Message is required'
          : value.length < 10
          ? 'Message must be at least 10 characters long'
          : '';
      default:
        return '';
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const isValid = Object.values(errors).every(error => !error) &&
                 Object.values(values).every(value => value.trim() !== '');

  return { values, errors, handleChange, isValid };
};