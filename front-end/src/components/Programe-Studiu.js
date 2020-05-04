import React from 'react';
import "../styles/programe-studiu/Study-Programs.css";
/* Components */
import Header from "./Header";
import Programs from "./Programe-Studiu/Programe";
import Plans from "./Programe-Studiu/Planuri-de-invatamant";

const StudyPrograms = () => {
  return (
    <>
      <Header
        bg='programe-de-studii-bg'
        hero
        title="Programe de Studii"
        subtitle=""
      />
      <section className="container white-bg-container study-programs">
        <Programs />
        <Plans />
      </section>
    </>
  )
}

export default StudyPrograms;