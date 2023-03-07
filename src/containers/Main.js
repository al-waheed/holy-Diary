import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal } from "react-bootstrap";
import { addItem, deleteItem } from "../redux/actions";
import DiaryForm from "../components/DiaryForm";
import DiaryItem from "../components/DiaryItem";

export class Main extends Component {
  state = {
    show: false,
    activeItem: null,
  };
  render() {
    const { addItem, diaryItems, deleteItem } = this.props;
    const { show, activeItem } = this.state;
    return (
      <div className="max-w-[1300px] mx-auto">
        <div className=" flex justify-center items-center ">
          <div className="bg-white shadow-2xl w-[50%] m-4">
            <h1>Dear Diary...</h1>
            <DiaryForm addItem={(item) => addItem(item)} />
          </div>
          <div className="bg-white shadow-2xl w-[50%] m-4" style={{ paddingTop: 20 }}>
            {diaryItems.length > 0 ? (
              diaryItems.map((item) => {
                return (
                  <DiaryItem
                    deleteItem={(id) => deleteItem(id)}
                    showModal={(item) =>
                      this.setState({ show: true, activeItem: item })
                    }
                    key={item.id}
                    item={item}
                  />
                );
              })
            ) : (
              <h1>No Items</h1>
            )}
          </div>
        </div>
        <Modal
          size="lg"
          show={show}
          onHide={() => this.setState({ show: false })}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              {activeItem?.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>{activeItem?.text}</Modal.Body>
          <Modal.Footer>{activeItem?.date}</Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  diaryItems: state.diaryItems,
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  deleteItem: (id) => dispatch(deleteItem(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
