import React, { useEffect, useState } from "react";

function withHOC(WrappedComponent, entityTitle) {
  return function () {
    const [data, setData] = useState([]);
    const [term, setTerm] = useState("");

    useEffect(() => {
      const timer = setTimeout(() => {
        let tempDataSet =
          entityTitle === "users"
            ? [
                { name: "yeji", id: 1 },
                { name: "yoyo", id: 2 },
                { name: "jojo", id: 3 },
                { name: "aoao", id: 4 },
              ]
            : [
                { id: 1, userId: 1, title: "hello", completed: true },
                { id: 2, userId: 2, title: "bye", completed: true },
                { id: 3, userId: 3, title: "morning", completed: false },
                { id: 4, userId: 4, title: "night", completed: false },
              ];

        setData([...tempDataSet]);

        clearTimeout(timer);
      }, 2000);
    }, []);

    // 해당 entityTItle 데이터를 돌면서
    // 입력값이 포함된 경우 참값 반환하는 필터링 기능
    let filterData = data.filter((d) => {
      if (entityTitle === "users") {
        const { name } = d;
        return name.indexOf(term) >= 0;
      }

      if (entityTitle === "todos") {
        const { title } = d;
        return title.indexOf(term) >= 0;
      }
    });

    return (
      <div>
        <h2>{entityTitle}</h2>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <WrappedComponent data={filterData}></WrappedComponent>
      </div>
    );
  };
}

export default withHOC;
