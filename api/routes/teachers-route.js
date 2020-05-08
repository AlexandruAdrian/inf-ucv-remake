const express = require('express');
const mssql = require('mssql');

function teachersRoute() {
    const router = express.Router();

    router.get('/teachers', async (req, res) => {
        try {
            const request = new mssql.Request();
            const query = 'SELECT * FROM Teachers';
            const result = await request.query(query);

            res.json({
                teachers: result.recordset
            })
        } catch (err) {
            console.log(`Failed to fetch teachers - error: ${err}`);
        }
    });

    return router;
}

module.exports = teachersRoute();
