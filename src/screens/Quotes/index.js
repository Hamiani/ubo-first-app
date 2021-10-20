import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Card } from "antd";
import { isEmpty, get } from "lodash";

import { getData } from "../../utils/api";

const { Meta } = Card;

const Quotes = () => {

  const count = useSelector((state) => state.counter.count);
  
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const response = await getData();
      return setData(response);
    };
    fetchData();
  }, [setData]);

  return (
    !isEmpty(data) && (
      <div className="container">
        <Card title={data.author}>
          <Meta title={get(data, "tags[0]", "")} description={data.content} />
          <p>Date d'ajout : {data.dateAdded}</p>
          <p>Date de modification : {data.dateModified}</p>
        </Card>
        <h1>{count}</h1>
      </div>
    )
  );
};

export default Quotes;
