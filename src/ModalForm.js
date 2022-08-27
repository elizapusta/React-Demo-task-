import React from "react";
import Modal from "./Modal";

const ModalForm = ({ data1 }) => {
  const { addModalState, data, setData, handleSubmit, setAddModalState } =
    data1;

  const cancelSubmit = () => {
    setAddModalState(false);
  };

  return (
    <>
      <Modal show={addModalState}>
        <form>
          <label>Select a column</label>

          <select
            id="column"
            name="column"
            value={data.column}
            onChange={(e) => {
              setData({ ...data, column: e.target.value });
              console.log(data);
            }}
          >
            <option value="doctor">Doctor</option>
            <option value="assistant">Assistant</option>
            <option value="hygienist">Hygienist</option>
          </select>
          <br />
          <label>Select a start time</label>
          <select
            id="startTime"
            name="startTime"
            value={data.startTime}
            onChange={(e) => {
              setData({ ...data, startTime: e.target.value });
              console.log(data);
            }}
          >
            <option value="09:00">09:00</option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="12:00">12:00</option>
            <option value="13:00">01:00</option>
            <option value="14:00">02:00</option>
            <option value="15:00">03:00</option>
          </select>
          <br />
          <label>Select a end time</label>
          <select
            id="endTime"
            name="endTime"
            value={data.endTime}
            onChange={(e) => {
              setData({ ...data, endTime: e.target.value, available: true });
              console.log(data);
            }}
          >
            <option value="09:00">09:00</option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="12:00">12:00</option>
            <option value="13:00">01:00</option>
            <option value="14:00">02:00</option>
            <option value="15:00">03:00</option>
          </select>
          <br />
          <button className="cancel_btn" onClick={cancelSubmit}>
            Cancel
          </button>
          <button className="save_btn" onClick={handleSubmit}>
            Save
          </button>
        </form>
      </Modal>
    </>
  );
};

export default ModalForm;
