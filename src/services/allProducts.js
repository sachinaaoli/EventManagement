import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk("api/fetchUser", 
  async () => {
  const response = await axios.get("https://fakestoreapi.com/users");
  return response;
});