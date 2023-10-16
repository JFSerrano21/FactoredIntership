import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import ProfileDetail from './ProfileDetail';
import SpiderChart from './SpiderChart';

function Profile() {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={6} className="mb-4">
          <Card className="h-100">
            <Card.Body>
            <ProfileDetail 
                name="John Doe" 
                position="Software Engineer" 
                avatarURL="/testAvatar.png" 
              />
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card className="h-100">
            <Card.Body>
              <SpiderChart />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
