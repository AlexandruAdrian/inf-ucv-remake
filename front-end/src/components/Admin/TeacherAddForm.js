import React from 'react';
/* Components */
import TeacherForm from "./TeacherForm";

const TeacherAddForm = ({ toggleAdd }) => {

  return <TeacherForm toggler={toggleAdd} />
}

export default TeacherAddForm;