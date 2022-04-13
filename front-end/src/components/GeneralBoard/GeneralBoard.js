import React from "react";
import { useContext, useEffect, useState } from "react";
import { LoginContext, loginContext } from "../../App";
import SinglePost from "../Posts/SinglePost";
<<<<<<< HEAD
import { returnData } from "./example";

function GeneralBoard() {
  const user = JSON.parse(localStorage.getItem("user"));


  return (
    
    <>
      {returnData.map((r) => (
        <SinglePost 
        title={r.title} 
        description={r.content}
        date={r.date}
        likes={r.likes}
        tag={r.society.tag}
        username={r.user.name}
        />
      ))}
=======
import { useQuery, prefetchQuery } from "react-query";
import { Button } from "react-bootstrap";
import "./GeneralBoard.css";

async function fetchPosts(countPage, page, index) {
  let url = `http://localhost:3006/showpost/${countPage}?page=${page}&index=${index}`;
  const res = await fetch(url);
  return res.json();
}

function GeneralBoard() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [countPage, setCountPage] = useState("");
  const [page, setPage] = useState(1);
  const [index, setIndex] = useState(0);

  const { isLoading, data, isError, error } = useQuery(
    ["posts", countPage, page, index],
    () => fetchPosts(countPage, page, index),
    {
      keepPreviousData: true,
      staleTime: 5000,
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
            <h1 id="title">General Board</h1>
            <br />
            {data.result &&
              data.result.map((r) => (
                <SinglePost
                  key={r._id}
                  title={r.title}
                  description={r.content}
                  date={r.date}
                  likes={r.likes}
                  //username={r.user.name}
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
>>>>>>> 3b455066d635da1f51683219ec2883c056bfd2e2
    </>
  );
}

export default GeneralBoard;

