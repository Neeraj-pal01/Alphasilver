import express from "express";
import axios from "axios";
import cors from "cors";


const app = express();
const PORT = 5000;
app.use(cors());

app.get("/api/data", async (req, res) => {
  try {
    const response = await axios.get("http://jsonblob.com/api/jsonBlob/1328012434518237184");
    res.json(response.data); // Send the fetched data to the frontend
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


// const api =axios.create({
//   baseURL:"http://jsonblob.com"
// }) ;

// //getting the data

// export const getdata = async () => {
//   return api.get("/api/jsonBlob/1328012434518237184");
// }
  



