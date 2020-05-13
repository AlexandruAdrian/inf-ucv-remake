import React from 'react';
/* Components */
import TeacherForm from "./TeacherForm";

const TeacherEditForm = ({ toggleEdit }) => {

  return <TeacherForm toggler={toggleEdit} />
}

export default TeacherEditForm;