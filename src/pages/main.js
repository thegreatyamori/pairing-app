import { Col, Row, Button } from 'antd';
import { SyncOutlined } from '@ant-design/icons';
import ChartTabCard from '../components/chart-tab-card';
import MembersCard from '../components/members-card';
import RotationCard from '../components/rotation-card';


function MainPage() {
    return (
        <>
            <h1 className='title'>Supply Chain Portal (SCP)</h1>
            <Row>
                <Col span={24}>
                    <ChartTabCard />
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <RotationCard />
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <MembersCard />
                </Col>
            </Row>
            <Button className='button__rotation' type="primary" shape="circle" icon={<SyncOutlined />} onClick={() => alert("hola")} />
        </>
     );
}

export default MainPage;
