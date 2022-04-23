import React from "react";
import { useContext, useEffect, useState } from "react";
import { LoginContext, loginContext } from "../../App";
import SinglePost from "../Posts/SinglePost";
import { useQuery } from "react-query";
import { Button } from "react-bootstrap";

async function fetchPosts(countPage, page, index) {
  let url = `http://localhost:3006/showpost/events/${countPage}?page=${page}&index=${index}`;
  const res = await fetch(url);
  return res.json();
}

