const express = require("express")
const port = 5000;
const app = express();


app.get(`/api?`, (req, res) => {


    const date = new Date()
    const daysInAWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    const randomMinutes = Math.floor(Math.random() * 5) - 2;

    const currentUTCWithinWindow = new Date(date.getTime() + randomMinutes * 60000).toISOString();


    const myResponse = {
        slack_name: "Trilvid",
        current_day: daysInAWeek[date.getDay()],
        utc_time: currentUTCWithinWindow,
        track: "backend",
        github_file_url: "https://github.com/Trilvid/hngX-stage-1-task/blob/main/app.js",
        github_repo_url: "https://github.com/Trilvid/hngX-stage-1-task/tree/main",
        status_code: 200
    }
    
    res.status(200).json(myResponse)
    
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})