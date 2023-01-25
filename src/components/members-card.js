import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";

function MembersCard() {
  return (
    <Card className="card card__right">
      <div className="card__header">
        <h2>Team Members</h2>
        <Button shape="circle" type="text" icon={<PlusOutlined />} />
      </div>
      <div className="members__container">
      {/* div.member__item*10>span{Jerson Morocho}+Button[shape="circle" type="text" icon={<DeleteOutlined />}] */}
      <div className="member__item"><span>Jerson Morocho</span><Button shape="circle" type="text" icon={<DeleteOutlined />}></Button></div>
      <div className="member__item"><span>Jerson Morocho</span><Button shape="circle" type="text" icon={<DeleteOutlined />}></Button></div>
      <div className="member__item"><span>Jerson Morocho</span><Button shape="circle" type="text" icon={<DeleteOutlined />}></Button></div>
      <div className="member__item"><span>Jerson Morocho</span><Button shape="circle" type="text" icon={<DeleteOutlined />}></Button></div>
      <div className="member__item"><span>Jerson Morocho</span><Button shape="circle" type="text" icon={<DeleteOutlined />}></Button></div>
      <div className="member__item"><span>Jerson Morocho</span><Button shape="circle" type="text" icon={<DeleteOutlined />}></Button></div>
      <div className="member__item"><span>Jerson Morocho</span><Button shape="circle" type="text" icon={<DeleteOutlined />}></Button></div>
      <div className="member__item"><span>Jerson Morocho</span><Button shape="circle" type="text" icon={<DeleteOutlined />}></Button></div>
      <div className="member__item"><span>Jerson Morocho</span><Button shape="circle" type="text" icon={<DeleteOutlined />}></Button></div>
      <div className="member__item"><span>Jerson Morocho</span><Button shape="circle" type="text" icon={<DeleteOutlined />}></Button></div>
      </div>
    </Card>
  );
}

export default MembersCard;
