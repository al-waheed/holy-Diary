import React from "react";
import { MdOutlineDeleteForever } from "react-icons/md";

const DiaryItem = ({ item, showModal, deleteItem }) => {
  return (
    <div className="diary-row">
      <span onClick={() => showModal(item)}>{item.title}</span>
      <div>
        <span className="date">{item.date}</span>
        <MdOutlineDeleteForever
          onClick={() => deleteItem(item.id)}
          className="delete"
          style={{ color: "red" }}
        />
      </div>
    </div>
  );
};

export default DiaryItem;
