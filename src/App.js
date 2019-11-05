import React, { useState } from "react";
import UserAssignments from "./components/UserAssignments";
import CompanyForm from "./components/CompanyForm";
import UserForm from "./components/UserForm";

export default () => {
  const [company, setCompany] = useState('');
  const [user, setUser] = useState('');

  return (
    <>
      <CompanyForm company={company} setCompany={setCompany}/>
      <UserForm user={user} setUser={setUser}/>
      <UserAssignments />
    </>
  )
};
