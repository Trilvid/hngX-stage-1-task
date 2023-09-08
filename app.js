const express = require("express")
const port = 5000;
const app = express();



const slack_name = "trilvid";
const track = "backend"

app.get(`/api/:slack_name/:track`, (req, res) => {

    const mySlackName = req.params.slack_name
    const myTrack = req.params.track

    if(!slack_name.includes(mySlackName) || !track.includes(myTrack)) {
        res.send("invalid details note the user track is backend")
    }

    const date = new Date()
    const daysInAWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    const myResponse = {
        slack_name: "Trilvid",
        current_day: daysInAWeek[date.getDay()],
        utc_time: date.toISOString(),
        track: "Backend",
        github_file_url: "https://github.com/Trilvid/hngX-stage-1-task/blob/main/app.js",
        github_repo_url: "https://github.com/Trilvid/hngX-stage-1-task/tree/main",
        status_code: 200
    }
    
    res.status(200).json(myResponse)
    
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})