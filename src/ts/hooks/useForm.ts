import { useState } from 'react';

export const useForm = (callback: any, state: any) => {
  const [values, setValues] = useState<any>(state);

  const handleSubmit = (event: React.FormEvent<{}>) => {
    if (event) event.preventDefault();
      callback();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setValues((values: any) => ({ ...values, [e.target.name]: e.target.value }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
  }
};

export default useForm;
