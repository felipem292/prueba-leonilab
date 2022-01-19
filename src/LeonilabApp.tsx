import { useEffect, useState } from "react";
import { MyList } from "./components/MyList";
import { MyTable } from "./components/MyTable";
import { AntdLayout } from "./layout/AntdLayout";

export const LeonilabApp = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.propublica.org/congress/v1/116/senate/members.json", {
      headers: {
        "x-api-key": "PHk17xIOVlB9j8m2pqiSswTYh9ZNUno7m38F77lk",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setData(json?.results[0]?.members);
      });
  }, []);
  useEffect(() => {
    !!data && setLoading(false);
  }, [data]);

  return (
    <AntdLayout>
      {!loading && <MyList loading={loading} data={data} />}
    </AntdLayout>
  );
};
