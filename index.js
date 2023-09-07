const express = require('express');

const PORT = 8000
const app  = express ();
app.use(express.json());

app.listen(PORT, () => {
    console.log("Server Running on PORT:8000");
});

app.get("/api/justy/backend", (req, res) => {
   res.status(200)
   .send({
      "Slack name": "justy",
      "current_day": "Thursday",
      "utc_time": "2023-09-07T14:40:05Z",
      "github_file_url": "https://github.com/Justina177/API-endpoint/blob/main/file-1",
      "github_repo_url": "https://github.com/Justina177/API-endpoint.git",
      "status_code": 200
   })   
   });