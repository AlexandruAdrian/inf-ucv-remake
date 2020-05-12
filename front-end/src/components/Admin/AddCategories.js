import React, { useState } from 'react';
/* Components */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddCatForm from "./AddCatForm";

const AddCategories = ({ categories, setCategories, id }) => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(show => !show);
  }

  return (
    <div className="add-cat-form">
      <div onClick={toggleForm}>
        <FontAwesomeIcon icon={showForm ? "times-circle" : "plus"} size="sm" />
      </div>
      {showForm && <AddCatForm id={id} categories={categories} setCategories={setCategories} />}
    </div>
  );
}

export default AddCategories;