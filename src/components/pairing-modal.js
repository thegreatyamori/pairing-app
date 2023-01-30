import { Modal, Tag } from "antd";
import { useState } from "react";
import PairingService from "../services/pairing.service";
import "@codehardt/leader-line/leader-line.min.css";


function PairingModal({ open, toggleOpen, onPair }) {
  const [service] = useState(() => new PairingService());
  const [anchor, setAnchor] = useState(null);

  const handleOk = () => {
    service.removeLeaderLines();
    onPair(service.matrix);
  };
  const handleCancel = () => {
    service.removeLeaderLines();
    toggleOpen(false);
  };
  const handleOnDragEnd = () => setAnchor(null);
  const handleOnDragStart = (name) => setAnchor(name);
  const handleOnDragEnter = (pair) => {
    service.handlePairItems(anchor, pair);
  };

  const pairs = service.authors.map(({ userId, name }, index) => (
    <li
      key={userId}
      style={service.setMemberPosition(index)}
      onDragEnd={handleOnDragEnd}
      onDragStart={() => handleOnDragStart(name)}
      onDragEnter={() => handleOnDragEnter(name)}
      draggable="true"
    >
      <Tag name={name} color="geekblue">
        {name}
      </Tag>
    </li>
  ));

  return (
    <>
      <Modal
        title="Choose the pairs"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="card__container">
          <ul className="circle__container">{pairs}</ul>
        </div>
      </Modal>
    </>
  );
}

export default PairingModal;
