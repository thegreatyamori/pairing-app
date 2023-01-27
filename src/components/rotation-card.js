import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { SyncOutlined } from "@ant-design/icons";
import { Button, Card, DatePicker } from "antd";
import { transformDate, transformDateTitle } from "../helpers/date";
import { addRotation, getAllRotations } from "../services/rotation.service";

function RotationCard({ getCurrent }) {
  const dateFormat = "YYYY/MM/DD";
  const [currentDate, setCurrentDate] = useState();
  const [rotationDays, setRotationDays] = useState(1);
  const [rotations, setRotations] = useState([]);
  const [toggleInput, setToggleInput] = useState(false);

  const disabledDate = (current) => current && current < dayjs().endOf("day");
  const truncateRotations = (items) => items.slice(-4);
  const toggleRotationButton = () => setToggleInput(!toggleInput);
  const onKeyDown = (evt) => {
    if (evt.keyCode === 13) {
      console.log("Evt fired: onKeyDown");

      const result = addRotation(evt.target.value);
      const _rotations = getAllRotations();

      setRotations(truncateRotations(_rotations));
      setToggleInput(false);
      getCurrent(result);
    }
  };

  useEffect(() => {
    setCurrentDate(Date.now());
    setRotations(truncateRotations(getAllRotations()));
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
      {toggleInput ? (
        <div className="rotation__input">
          <DatePicker
            onKeyDown={onKeyDown}
            defaultValue={dayjs(currentDate)}
            format={dateFormat}
            disabledDate={disabledDate}
          />
        </div>
      ) : (
        ""
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
      <span>Rotation period: {rotationDays} days</span>
    </Card>
  );
}

export default RotationCard;
