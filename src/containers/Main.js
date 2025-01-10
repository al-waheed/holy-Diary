import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, deleteItem, editItem } from "../redux/actions";
import DiaryForm from "../components/DiaryForm";
import DiaryItem from "../components/DiaryItem";
import { Modal, Button, Form } from "react-bootstrap";
import { CiEdit } from "react-icons/ci";

const Main = () => {
  const [show, setShow] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const diaryItems = useSelector((state) => state.diaryItems);
  const dispatch = useDispatch();
  const [updatedData, setUpdatedData] = useState({
    title: "",
    text: "",
    date: "",
  });

  const handleEdit = () => {
    if (
      activeItem &&
      updatedData.title &&
      updatedData.text &&
      updatedData.date
    ) {
      dispatch(editItem(activeItem.id, updatedData));
      setShow(false);
      setEditMode(false);
      setUpdatedData({ title: "", text: "", date: "" });
    }
  };

  return (
    <div>
      <div>
        <div className="grid-container">
          <div className="diary-app">
            <h1>Dear Diary...</h1>
            <DiaryForm addItem={(item) => dispatch(addItem(item))} />
          </div>
          <div className="diary-app" style={{ paddingTop: 20 }}>
            {diaryItems.length > 0 ? (
              diaryItems.map((item) => (
                <DiaryItem
                  key={item.id}
                  item={item}
                  deleteItem={(id) => dispatch(deleteItem(id))}
                  showModal={(item) => {
                    setShow(true);
                    setActiveItem(item);
                    setUpdatedData({
                      title: item.title,
                      text: item.text,
                      date: item.date,
                    });
                  }}
                />
              ))
            ) : (
              <h1>No Items</h1>
            )}
          </div>
        </div>
        <Modal
          size="lg"
          show={show}
          onHide={() => {
            setShow(false);
            setEditMode(false);
          }}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              {editMode ? "Edit Item" : activeItem?.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {editMode ? (
              <Form>
                <Form.Group controlId="formTitle">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    value={updatedData.title}
                    onChange={(e) =>
                      setUpdatedData({ ...updatedData, title: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group controlId="formText">
                  <Form.Label>Text</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={updatedData.text}
                    onChange={(e) =>
                      setUpdatedData({ ...updatedData, text: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group controlId="formDate">
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    type="date"
                    value={updatedData.date}
                    onChange={(e) =>
                      setUpdatedData({ ...updatedData, date: e.target.value })
                    }
                  />
                </Form.Group>
              </Form>
            ) : (
              <div>{activeItem?.text}</div>
            )}
          </Modal.Body>
          <Modal.Footer>
            {editMode ? (
              <Button variant="primary" onClick={handleEdit}>
                Save Changes
              </Button>
            ) : (
              <>
                <CiEdit
                  size={24}
                  style={{ cursor: "pointer" }}
                  onClick={() => setEditMode(true)}
                />
              </>
            )}
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Main;
