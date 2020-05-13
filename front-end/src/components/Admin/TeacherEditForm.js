import React, { useState, useContext } from 'react';
import axios from 'axios';
/* Components */
import TeacherForm from "./TeacherForm";
/* Context */
import { TeachersDispatchContext } from "../../context/teachers-context";

const TeacherEditForm = ({ toggler, cadru, setEditCadru }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const dispatch = useContext(TeachersDispatchContext)

  const handleEdit = async (formData) => {
    try {
      const token = localStorage.getItem("Token");
      const result = await axios.put(`/teachers/${cadru.Id}`, formData, {
        headers: {
          'content-type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      })

      if (!selectedFile) {
        dispatch({ type: 'EDIT_TEACHER', payload: result.data.teacher });
      }

      toggler();
    } catch (err) {
      console.log(err);
    }
  }

  return <TeacherForm
    toggler={toggler}
    fetch={handleEdit}
    values={cadru}
    setValues={setEditCadru}
    selectedFile={selectedFile}
    setSelectedFile={setSelectedFile}
  />
}

export default TeacherEditForm;