import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const StatisticsSection = () => {
  const stats = [
    {
      percentage: 93,
      description: 'of online experiences begin with a search engine',
    },
    {
      percentage: 75,
      description: 'of people never scroll past the first page of results',
    },
    {
      percentage: 61,
      description: 'of users research a product before making a purchase',
    },
  ];

  return (
    <Container className="py-5 text-center text-white">
      <Row>
        {stats.map((stat, index) => (
          <Col md={4} key={index} className="d-flex flex-column align-items-center mb-4">
            <div style={{ width: '120px', height: '120px', marginBottom: '15px' }}>
              <CircularProgressbar
                value={stat.percentage}
                text={`${stat.percentage}%`}
                styles={buildStyles({
                  textSize: '16px',
                  textColor: '#ffffff',
                  pathColor: '#28c76f',
                  trailColor: '#2c2f33',
                })}
              />
            </div>
            <p style={{ maxWidth: '200px', color: '#ffffff' }}>{stat.description}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default StatisticsSection;
