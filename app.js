const express = require('express');
const app = express()
const path = require("path");

app.use(express.json())
const port = process.env.PORT || 3000;
require("./db/connection");

app.use(express.static(path.join(__dirname, "/public")));


// paging Routers
app.use('/services', require("./routers/services"))
app.use('/about', require("./routers/about"));
app.use('/contact', require("./routers/contact"));
app.use('/caseStudys', require("./routers/caseStudys"));

// data Routes
app.use('/data/Api/slider', require("./routers/Apis/sliderApi"));
app.use('/data/Api/homeServices', require("./routers/Apis/homeServicesApi"))
app.use('/data/Api/vision', require("./routers/Apis/visionApi"));
app.use('/data/Api/woringTeam', require("./routers/Apis/workingTeamApi"));
app.use('/data/Api/homeCaseStudys', require("./routers/Apis/homeCaseStudyApi"));
app.use('/data/Api/founders', require("./routers/Apis/foundersApi"));
app.use('/data/Api/prevWork', require("./routers/Apis/prevWorkApi"));
app.use('/data/Api/contactInfo', require("./routers/Apis/contactInfoApi"));

app.use('/data/Api/about', require("./routers/Apis/aboutApi"));
app.use('/data/Api/allServices', require("./routers/Apis/allServicesApi"));
app.use('/data/Api/allCaseStudys', require("./routers/Apis/allCaseStudyApi"));
app.use('/contact/email/data', require("./routers/mailSender"));

// unkownPage Router
app.use('*', require('./routers/unknow'));



app.listen(port, () => console.log(`listening on port ${port}!`));