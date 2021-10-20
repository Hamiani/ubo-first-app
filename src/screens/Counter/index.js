import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  decrement,
  increment,
  reset,
  incrementByAmount,
} from "../../store/reducers/counter";
import { PATHS } from "../../utils/constants";

import { Button, Row, Col, Card, Tag, Divider, Input } from "antd";

const Counter = () => {
  //const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  const history = useHistory();
  /*   const increment = () => setCount(count + 1);

  const decrement = () => count > 0 && setCount(count - 1);
  const clear = () => setCount(0); */

  return (
    <Card title="TP INCREMENT DECREMENT">
      <Row className="p-top-10">
        <Col span={4}>
          <Button type="primary" onClick={() => dispatch(increment())}>
            Count
          </Button>
        </Col>
        <Col span={4}>
          <Button
            type="dashed"
            onClick={() => count > 0 && dispatch(decrement())}
          >
            Decrement
          </Button>
        </Col>
        <Col span={4}>
          <Button danger onClick={() => dispatch(reset())}>
            Clear
          </Button>
        </Col>
        <Col span={4}>
          <Button danger onClick={() => dispatch(incrementByAmount(amount))}>
            IncrementBy :
          </Button>
          <Input
            min={0}
            type="number"
            value={amount}
            onChange={(_) => setAmount(_.target.value)}
          />
        </Col>
      </Row>
      <Divider />
      <Row justify="space-between">
        <Col>
          <Col>
            <Tag color="red">{count}</Tag>
          </Col>
        </Col>
        <Button type="link" onClick={() => history.push(PATHS.QUOTES)}>
          Go TO QUOTES
        </Button>
      </Row>
    </Card>
  );
};

export default Counter;
