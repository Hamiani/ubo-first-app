import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Col, Row } from "antd";
import { PATHS } from "../../utils/constants";

const Home = (props) => {
    console.log('props',props)

  const history = useHistory();
  const goToQuotes = () => history.push(PATHS.QUOTES);
  const gotoLogin = () => history.push(PATHS.LOGIN);
  const goToCounter = () => history.push(PATHS.COUNTER);

  return (
    <Row justify="space-between">
      <Col span={6}>
        <Button onClick={goToQuotes}>Quotes</Button>
      </Col>
      <Col span={6}>
        <Button onClick={gotoLogin}>Login</Button>
      </Col>
      <Col span={6}>
        <Button onClick={goToCounter}>Counter</Button>
      </Col>
    </Row>
  );
};

export default Home
