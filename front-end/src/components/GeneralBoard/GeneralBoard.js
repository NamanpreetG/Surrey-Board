import React from "react";
import { useContext, useEffect, useState } from "react";
import { LoginContext, loginContext } from "../../App";
import SinglePost from "../Posts/SinglePost";
import { useQuery } from "react-query";
import { Button } from "react-bootstrap";

async function fetchPosts(countPage, page, index) {
  let url = `http://localhost:3006/showpost/${countPage}?page=${page}&index=${index}`;
  console.log(url);
  const res = await fetch(url);
  return res.json();
}

function GeneralBoard() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [countPage, setCountPage] = useState("");
  const [page, setPage] = useState(1);
  const [index, setIndex] = useState(0);
  const [previousButtonState, setPreviousButtonState] = useState(true);
  const [nextButtonState, setNextButtonState] = useState(false);

  const { isLoading, data, isError, error, isPreviousData } = useQuery(
    ["posts", countPage, page, index],
    () => fetchPosts(countPage, page, index),
    {
      keepPreviousData: true,
      staleTime: 5000,
    }
  );
  useEffect(() => {
    console.log(data);
  }, [data]);
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
    setPage((old) => (!data.result || !data.next ? old : old + 1));
    setIndex(data.result.at(-1).counter);
  };

  return (
    // TODO: add tag to SinglePost
    <>
      {isLoading ? (
        <div>Fetching data...</div>
      ) : (
        <>
          <Button disabled={page === 1} onClick={() => previousPage()}>
            Previous Page
          </Button>
          <span>{page}</span>
          <Button
            disabled={!data.result || !data.next}
            onClick={() => nextPage()}
          >
            Next Page
          </Button>
          <div>
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
        </>
      )}
    </>
  );
}

export default GeneralBoard;
