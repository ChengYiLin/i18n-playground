
import React from 'react';
import { Navigate } from 'react-router-dom';

// Redirect to HomePage component from the Index route
const Index = () => {
  return <Navigate to="/" replace />;
};

export default Index;
