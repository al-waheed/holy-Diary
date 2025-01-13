import React, { useState } from "react";

const DiaryForm = ({ addItem }) => {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    text: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    addItem(formData);
    setFormData({ title: "", date: "", text: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="diary-form">
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Add an Item"
            required
            className="diary-input"
          />
          <input
            name="date"
            value={formData.date}
            onChange={handleChange}
            type="date"
            required
            className="diary-date-input"
          />
        </div>
        <textarea
          name="text"
          value={formData.text}
          onChange={handleChange}
          required
          rows="2"
          className="diary-textarea"
        ></textarea>
        <button type="submit" className="diary-button">
          Add Item To Diary
        </button>
      </form>
    </div>
  );
};
export default DiaryForm