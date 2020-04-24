const mongoose = require("mongoose");
const googleApi = process.env.GOOGLE_API_KEY;
const googleTranslate = require('google-translate')(googleApi);
const Question = require("../model/Question");

const languageService = {
    getTranslation: (req) => {
        var langauge = req.body.langauge;


    }
}