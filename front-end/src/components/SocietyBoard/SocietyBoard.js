import React from "react";
import { useContext, useEffect, useState } from "react";
import { LoginContext, loginContext } from "../../App";
import SinglePost from "../Posts/SinglePost";
import { useQuery } from "react-query";
import { Button } from "react-bootstrap";
import Axios from "axios";

import { useLocation , useNavigate} from "react-router-dom";

async function fetchPosts(countPage, page, index, soc_id) {

  const res = await Axios.post(
    `http://localhost:3006/showpost/society/${countPage}?page=${page}&index=${index}`,
    { society_id: soc_id }
  );
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
  const navigate = useNavigate();


  const { isLoading, data, isError, error } = useQuery(
    ["posts", countPage, page, index],
    async () => await fetchPosts(countPage, page, index, soc_id),
    {
      keepPreviousData: true,
      staleTime: 0
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

  async function unfollow(){
    const unfollow = {
      society_id: soc_id,
      user_id: user._id
    };
    const res = await Axios.post("http://localhost:3007/society/unfollow", unfollow)
    navigate("/generalBoard");

  }

  return (
    // TODO: add tag to SinglePost
    <>
      {isLoading ? (
        <div>Fetching data...</div>
      ) : (
        <>
          <div>
            <br />
            <h1 id="title">{soc_name} Board <Button style={{backgroundColor: "#f44336"}} onClick={unfollow}>
              unfollow
            </Button></h1>
            
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
                  tag={r.society.tag}
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
