import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { SyncOutlined } from "@ant-design/icons";
import { Button, Card, DatePicker } from "antd";
import { transformDate, transformDateTitle } from "../helpers/date";
import { addRotation, getAllRotations } from "../services/rotation.service";
import PairingModal from "./pairing-modal";


function RotationCard({ getCurrent }) {
  const dateFormat = "YYYY/MM/DD";
  const [rotations, setRotations] = useState([]);
  const [currentDate, setCurrentDate] = useState();
  const [toggleInput, setToggleInput] = useState(false);
  const [toggleModal, setToggleModal] = useState(false);

  const disabledDate = (current) => current && current < dayjs().endOf("day");
  const last4Rotations = (items) => items.slice(-4);
  const toggleRotationButton = () => setToggleInput(!toggleInput);
  const onOpenModal = (evt) => setToggleModal(evt);
  const onPair = (evt) => {
    const result = addRotation(currentDate, evt);
    const _rotations = getAllRotations();

    setRotations(last4Rotations(_rotations));
    setToggleInput(false);
    setToggleModal(false);
    getCurrent(result);
  };
  const onKeyDown = (evt) => {
    if (evt.keyCode !== 13) return;

    console.log("Evt fired: onKeyDown");

    setToggleModal(true);
    setCurrentDate(evt.target.value);
  };

  useEffect(() => {
    setCurrentDate(Date.now());
    setRotations(last4Rotations(getAllRotations()));
  }, []);

  return (
    <Card className="card card__left">
      <div className="card__header">
        <h2>{transformDateTitle(currentDate)}</h2>
        <Button
          shape="circle"
          type="text"
          icon={<SyncOutlined />}
          onClick={toggleRotationButton}
        />
      </div>
      {toggleInput && (
        <div className="rotation__input">
          <DatePicker
            onKeyDown={onKeyDown}
            defaultValue={dayjs(currentDate)}
            format={dateFormat}
            disabledDate={disabledDate}
          />
        </div>
      )}
      <div className="card__container">
        {rotations.map((item, index) => (
          <span key={index}>
            <b>Rotation #{index + 1}</b>:&nbsp;
            {transformDate(item.date)}&nbsp;
            {index === rotations.length - 1 ? <b>(current)</b> : ""}
          </span>
        ))}
      </div>
      {toggleModal && (
        <PairingModal
          open={toggleModal}
          toggleOpen={onOpenModal}
          onPair={onPair}
        />
      )}
    </Card>
  );
}

export default RotationCard;
