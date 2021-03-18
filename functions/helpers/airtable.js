require('dotenv').config()
const Airtable = require('airtable')
const base = new Airtable({apiKey: process.env.AIRTABLE_KEY}).base(
    process.env.AIRTABLE_BASE
)
const table = base('courses')
module.exports = {table}