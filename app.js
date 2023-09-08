const express = require("express")
const port = 5000;
const app = express();


app.get(`/api?`, (req, res) => {


    const date = new Date()
    const daysInAWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    const randomMinutes = Math.floor(Math.random() * 5) - 2;

        date.setMinutes(date.getMinutes() + randomMinutes);
    
        // Format the date components manually
        const year = date.getUTCFullYear();
        const month = String(date.getUTCMonth() + 1).padStart(2, '0');
        const day = String(date.getUTCDate()).padStart(2, '0');
        const hours = String(date.getUTCHours()).padStart(2, '0');
        const minutes = String(date.getUTCMinutes()).padStart(2, '0');
        const seconds = String(date.getUTCSeconds()).padStart(2, '0');
    
        const currentUTCWithinWindow = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;


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