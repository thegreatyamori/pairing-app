import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";

function MembersCard() {
  return (
    <Card className="card card__right">
      <h2>Team Members</h2>
      <Button shape="circle" type="text" icon={<PlusOutlined />} />
      <div>
        {/* span*10>{Jerson Morocho}Button[shape="circle" type="text" icon={<DeleteOutlined />}]+br */}
        <span>Jerson Morocho<Button shape="circle" type="text" icon={<DeleteOutlined />}></Button><br /></span><span>Jerson Morocho<Button shape="circle" type="text" icon={<DeleteOutlined />}></Button><br /></span><span>Jerson Morocho<Button shape="circle" type="text" icon={<DeleteOutlined />}></Button><br /></span><span>Jerson Morocho<Button shape="circle" type="text" icon={<DeleteOutlined />}></Button><br /></span><span>Jerson Morocho<Button shape="circle" type="text" icon={<DeleteOutlined />}></Button><br /></span><span>Jerson Morocho<Button shape="circle" type="text" icon={<DeleteOutlined />}></Button><br /></span><span>Jerson Morocho<Button shape="circle" type="text" icon={<DeleteOutlined />}></Button><br /></span><span>Jerson Morocho<Button shape="circle" type="text" icon={<DeleteOutlined />}></Button><br /></span><span>Jerson Morocho<Button shape="circle" type="text" icon={<DeleteOutlined />}></Button><br /></span><span>Jerson Morocho<Button shape="circle" type="text" icon={<DeleteOutlined />}></Button><br /></span>
      </div>
    </Card>
  );
}

export default MembersCard;
