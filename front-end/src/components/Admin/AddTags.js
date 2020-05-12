import React, { useState } from 'react';
/* Components */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddTagForm from "./AddTagForm";

const AddTags = ({ tags, setTags, id }) => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(show => !show);
  }

  return (
    <div className="add-tag-form">
      <div onClick={toggleForm}>
        <FontAwesomeIcon icon={showForm ? "times-circle" : "plus"} size="sm" />
      </div>
      {showForm && <AddTagForm id={id} tags={tags} setTags={setTags} />}
    </div>
  );
}

export default AddTags;