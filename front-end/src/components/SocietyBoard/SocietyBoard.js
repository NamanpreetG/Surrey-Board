import React from "react";
import { useContext, useEffect, useState } from "react";
import { LoginContext, loginContext } from "../../App";
import SinglePost from "../Posts/SinglePost";
import { useQuery } from "react-query";
import { Button } from "react-bootstrap";
import Axios from "axios";

import { useLocation } from "react-router-dom";

async function fetchPosts(countPage, page, index, soc_id) {
  //let url = `http://localhost:3006/showpost/society/${countPage}?page=${page}&index=${index}`
  // const res = await fetch(url, {
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Accept': 'application/json'
  //   },
  //   body: {
  //     society_id: soc_id
  //   }
  // });

  const res = await Axios.post(
    `http://localhost:3006/showpost/society/${countPage}?page=${page}&index=${index}`,
    { society_id: soc_id }
  );
  console.log("----> ", res);
  return res.data;
}

function SocietyBoard() {
  const user = JSON.parse(localStorage.getItem("user"));
  const location = useLocation();
  const soc_id = location.state.society_id;
  const soc_name = location.state.name;
  const [countPage, setCountPage] = useState("");
  const [page, setPage] = useState(1);
  const [index, setIndex] = useState(0);

  const { isLoading, data, isError, error } = useQuery(
    ["posts", countPage, page, index],
    async () => await fetchPosts(countPage, page, index, soc_id),
    {
      keepPreviousData: true,
    }
  );

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  const previousPage = () => {
    setCountPage("previous");
    setPage((old) => Math.max(old - 1, 1));
    setIndex(data.result[0].counter);
  };

  const nextPage = () => {
    setCountPage("next");
    setPage((old) => (!data.result || data.next === 0 ? old : old + 1));
    setIndex(data.result.at(-1).counter);
  };

  return (
    // TODO: add tag to SinglePost
    <>
      {isLoading ? (
        <div>Fetching data...</div>
      ) : (
        <>
          <div>
            <br />
            <h1 id="title">{soc_name} Board</h1>
            <br />
            {data.result &&
              data.result.map((r) => (
                <SinglePost
                  key={r._id}
                  title={r.title}
                  description={r.content}
                  date={r.date}
                  likes={r.likes}
                  username={r.user.name}
                />
              ))}
          </div>
          <div id="pagination-buttons">
            <Button disabled={page === 1} onClick={() => previousPage()}>
              Previous Page
            </Button>
            <span>
              <b>{` ${page} `}</b>
            </span>
            <Button disabled={data.next === 0} onClick={() => nextPage()}>
              Next Page
            </Button>
          </div>
        </>
      )}
    </>
  );
}

export default SocietyBoard;
