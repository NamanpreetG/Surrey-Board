import React from "react";
import { useContext, useEffect, useState } from "react";
import { LoginContext, loginContext } from "../../App";
import SinglePost from "../Posts/SinglePost";
import { useQuery } from "react-query";
import { Button } from "react-bootstrap";

const fetchPosts = async (key, countPage, page, index) => {
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

  const { isLoading, data, isError, error } = useQuery(
    ["posts", countPage, page, index],
    async () => {
      let url = `http://localhost:3006/showpost/${countPage}?page=${page}&index=${index}`;
      const res = await fetch(url);
      return res.json();
    },
    {
      keepPreviousData: true,
    }
  );
  if(isError) {
    return <h2>{error.message}</h2>
  }

  const previousPage = () => {
    setCountPage("previous");
    setPage((old) => Math.max(old - 1, 1));
    setIndex(data.next);
  };

  const nextPage = () => {
    setCountPage("next");
    setPage((old) => (!data || !data.next ? old : old + 1));
    console.log(data.result);
    // setIndex(data.result.at(-1).counter);
  };


  return (
    // TODO: add tag to SinglePost
    <>
      {isLoading ? (
        <div>Fetching data...</div>
      ) : (
        <>
          <Button onClick={() => previousPage()}>Previous Page</Button>
          <span>{page}</span>
          <Button onClick={() => nextPage()}>Next Page</Button>
          <div>
            {data.result.map((r) => (
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
