"use client"
import React, { FC } from 'react';
import Form from '../components/form';
import { useAuthStore } from '../store/useAuthStore';

const AddPage: FC = () => {
  const { isAuthenticated } = useAuthStore()
  return (
    <>
      {isAuthenticated && <Form/>}
    </>
  );
};

export default AddPage;