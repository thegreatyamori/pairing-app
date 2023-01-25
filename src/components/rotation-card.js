import { Card } from "antd";

function RotationCard() {
    return (
        <Card className="card card__left">
            <h2>January 2023</h2>
            <div>
                {/* span*4>{rotation #1: 01/01/2023}+br */}
                <span>rotation #1: 01/01/2023<br /></span><span>rotation #1: 01/01/2023<br /></span><span>rotation #1: 01/01/2023<br /></span><span>rotation #1: 01/01/2023<br /></span>
            </div>
            <span>Rotation period: 4 days</span>
        </Card>
    );
}

export default RotationCard;
