import { useEffect, useState } from "react";
import { AntdLayout } from "./layout/AntdLayout";
import { Member } from "./interfaces/senateInterfaces";
import { BrowserRouter } from "react-router-dom";
import SenatorProvider from "./context/SenatorProvider";

export const LeonilabApp = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetch("https://api.propublica.org/congress/v1/116/senate/members.json", {
      headers: {
        "x-api-key": "PHk17xIOVlB9j8m2pqiSswTYh9ZNUno7m38F77lk",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json?.results[0]?.members);
        setData(json?.results[0]?.members);
      });
  }, []);
  useEffect(() => {
    !!data && setLoading(false);
  }, [data]);

  const crearLista = () => {
    const nuevaLista = data?.filter((senator: Member) => {
      if (filter !== "") {
        return (
          senator?.first_name.includes(filter)! ||
          senator?.last_name?.includes(filter) ||
          senator?.gender?.includes(filter) ||
          senator?.id?.includes(filter) ||
          senator?.party?.includes(filter)
        );
      }
      return senator;
    });

    return nuevaLista;
  };
  let filterdData = [];
  filterdData = crearLista();
  return (
    <SenatorProvider>
      <BrowserRouter>
        <AntdLayout
          loading={loading}
          data={filterdData}
          setFilter={setFilter}
        />
        {/* {!loading && (
          <div style={{ maxHeight: "100%", overflow: "auto" }}>
            <h2></h2>
            <MyfilterField setFilter={setFilter} />
            <MyTable loading={loading} data={filterdData} />
          </div>
        )} */}
        {/* </AntdLayout> */}
      </BrowserRouter>
    </SenatorProvider>
  );
};
