import React from 'react';
import { Route } from 'react-router-dom';
import SideMenu from '../../components/SideMenu';
import About from '../../pages/About';
import Dashboard from '../../pages/Dashboard';
import Documents from '../../pages/Documents';
import LoadDocuments from '../../pages/LoadDocuments';
import Audit from '../../pages/Audit';
import Authenticator from '../../components/Authenticator';
import AssingDocument from '../../pages/AssingDocument';
import InDevelopment from '../../pages/Developing';

const protectedRoutes = [
  <Route
    key="/"
    path="/"
    element={
      <Authenticator isProtected>
        <SideMenu />
      </Authenticator>
    }
  >
    <Route index element={<Dashboard />} />
    <Route path="about" element={<About />} />
    <Route path="documents" element={<Documents />} />
    <Route path="upload-documents" element={<LoadDocuments />} />
    <Route path="audit" element={<Audit />} />
    <Route path="assing-document" element={<AssingDocument />} />
    <Route path="integration" element={<InDevelopment />} />
    <Route path="preferences" element={<InDevelopment />} />
    <Route path="help" element={<InDevelopment />} />
  </Route>
];

export default protectedRoutes;
