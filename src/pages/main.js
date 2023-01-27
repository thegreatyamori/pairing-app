import { useState } from "react";
import { Col, Row, Button } from "antd";
import { SyncOutlined } from "@ant-design/icons";
import MembersCard from "../components/members-card";
import RotationCard from "../components/rotation-card";
import ChartTabCard from "../components/chart-tab-card";
import { getAllMembers } from "../services/member.service";
import { getCurrentRotation } from "../services/rotation.service";

function MainPage() {
  const [members, setMembers] = useState(getAllMembers());
  const [rotation, setRotation] = useState(getCurrentRotation());

  const fireMembers = (evt) => setMembers(evt);
  const fireCurrent = (evt) => setRotation(evt);

  return (
    <>
      <h1 className="title">Supply Chain Portal (SCP)</h1>
      <Row>
        <Col span={24}>
          <ChartTabCard authors={members} rotation={rotation} />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <RotationCard getCurrent={fireCurrent} />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <MembersCard getMembers={fireMembers} />
        </Col>
      </Row>
      <Button
        className="button__rotation"
        type="primary"
        shape="circle"
        icon={<SyncOutlined />}
        onClick={() => alert("hola")}
      />
    </>
  );
}

export default MainPage;
