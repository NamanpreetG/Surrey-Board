import React from "react";
import { useContext, useEffect, useState } from "react";
import { LoginContext, loginContext } from "../../App";
import SinglePost from "../Posts/SinglePost";
import { useQuery } from "react-query";
import { Button } from "react-bootstrap";

const fetchPosts = async (key, countPage) => {
  console.log(countPage);
  // let url = `http://localhost:3006/showpost/${countPage}?page=${page}&index=${index}`;

  const res = await fetch("http://localhost:3006/showpost");
  return res.json();
};
// http://localhost:3006/showpost/?page=0?index=0

function GeneralBoard() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [countPage, setCountPage] = useState("");
  const [page, setPage] = useState(1);
  const [index, setIndex] = useState(0);

  const { data, status } = useQuery(
    ["posts", "hello"],
    fetchPosts,
    {
      keepPreviousData: true,
    }
  );

  const previousPage = () => {
    setCountPage("previous");
    setPage((old) => Math.max(old - 1, 1));
    setIndex(data.next);
  };

  const nextPage = () => {
    setCountPage("next");
    setPage((old) => (!data || !data.next ? old : old + 1));
    setIndex(data.next);
  };

  return (
    // TODO: add tag to SinglePost
    <>
      {status === "loading" && <div>Fetching data...</div>}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <>
          <Button onClick={() => previousPage()}>Previous Page</Button>
          <span>{page}</span>
          <Button onClick={() => nextPage()}>Next Page</Button>
          <div>
            {data.map((r) => (
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
        </>
      )}
    </>
  );
}

export default GeneralBoard;
