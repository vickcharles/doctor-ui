import { useState } from 'react';

export const useForm = (callback: any, state: any) => {
  const [values, setValues] = useState<any>(state);

  const handleSubmit = (event: any) => {
    if (event) event.preventDefault();
      callback();
  };

  const handleChange = (event: any) => {
    event.persist();
    setValues((values: any) => ({ ...values, [event.target.name]: event.target.value }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
  }
};

export default useForm;
