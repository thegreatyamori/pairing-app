import { useState, useEffect } from "react";
import { Button, Card, Input } from "antd";
import { DeleteOutlined, PlusOutlined, UserOutlined } from "@ant-design/icons";
import {
  addMember,
  getAllMembers,
  deleteMember,
} from "../services/member.service";

function MembersCard({getMembers}) {
  const [members, setMembersList] = useState([]);
  const [toggleInput, setToggleInput] = useState(false);

  const toggleAddButton = () => setToggleInput(!toggleInput);
  const onKeyDown = (evt) => {
    if (evt.keyCode === 13) {
      console.log("Evt fired: onPressEnter");

      const createdMember = addMember(evt.target.value);
      const _members = getAllMembers();

      setMembersList(_members);
      setToggleInput(false);
      getMembers(_members);
    }
  };
  const onPressDelete = (userId) => {
    console.log("Evt fired: onPressDelete");
    deleteMember(userId);
    const _members = getAllMembers();

    setMembersList(_members);
    getMembers(_members);
  };

  useEffect(() => setMembersList(getAllMembers()), []);

  return (
    <Card className="card card__right">
      <div className="card__header">
        <h2>Team Members</h2>
        <Button
          onClick={toggleAddButton}
          shape="circle"
          type="text"
          icon={
            <PlusOutlined
              style={toggleInput ? { transform: "rotate(45deg)" } : {}}
            />
          }
        />
      </div>
      {toggleInput ? (
        <div className="members__input">
          <Input
            onKeyDown={onKeyDown}
            placeholder="Add a member"
            autoFocus={true}
            prefix={<UserOutlined />}
          />
        </div>
      ) : (
        ""
      )}
      <div className="card__container">
        {members.map((item, index) => (
          <div className="member__item" key={index}>
            <span>{item.name}</span>
            <Button
              type="text"
              shape="circle"
              onClick={() => onPressDelete(item.userId)}
              icon={<DeleteOutlined />}
            ></Button>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default MembersCard;
