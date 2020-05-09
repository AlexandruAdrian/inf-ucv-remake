const express = require('express');
const mssql = require('mssql');
const isAuthorized = require('../middleware/authorization');
const Teacher = require('../teacher');

function teachersRoute() {
    const router = express.Router();

    router.get('/teachers', async (req, res) => {
        try {
            const request = new mssql.Request();
            const query = 'SELECT * FROM Teachers';
            const result = await request.query(query);

            res.type('application/json').json({
                teachers: result.recordset
            })
        } catch (err) {
            console.log(`Failed to fetch teachers - error: ${err}`);
        }
    });

    router.post('/teachers', isAuthorized, async (req, res) => {
        try {
            const teacher = new Teacher(req.body);
            const request = new mssql.Request();
            const query = `INSERT INTO Teachers VALUES (
                '${teacher.getFullName()}',
                '${teacher.getGrade()}',
                '${teacher.getTitle()}',
                '${teacher.getWebPage()}',
                '${teacher.getPhone()}',
                '${teacher.getFax()}',
                '${teacher.getEmail()}',
                '${teacher.getPathToPicture()}'
                )`;

            await request.query(query);


            res.type('application/json').status(200).json({
                message: 'Adaugarea inregistrarii profesorului a fost efectuata cu succes',
                teacher
            })
        } catch (err) {
            console.log(`Failed to insert a new teacher record - ${err}`);
        }
    });

    router.delete('/teachers/:id', isAuthorized, async (req, res) => {
        try {
            const request = new mssql.Request();
            const query = `DELETE FROM Teachers WHERE Id = ${req.params.id}`
            await request.query(query);

            res.type('application/json').status(200).json({
                messasge: 'Inregistrarea profesorului a fost stearsa cu succes'
            });
        } catch (err) {
            console.log(`Failed to delete teacher record - ${err}`);
        }
    });

    router.put('/teachers/:id', isAuthorized, async (req, res) => {
        try {
            const teacher = new Teacher(req.body);
            const request = new mssql.Request();
            const query = `
                UPDATE Teachers
                SET 
                    FullName = '${teacher.getFullName()}',
                    Grade = '${teacher.getGrade()}',
                    Title = '${teacher.getTitle()}',
                    WebPage = '${teacher.getWebPage()}',
                    Phone = '${teacher.getPhone()}',
                    Fax = '${teacher.getFax()}',
                    Email = '${teacher.getEmail()}',
                    PathToPicture = '${teacher.getPathToPicture()}'
                WHERE Id = ${req.params.id}
            `
            await request.query(query);

            res.type('application/json').status(200).json({
                message: 'Actualizarea a fost efectuata cu succes'
            })
        } catch (err) {
            console.log(`Failed to update teacher record - ${err}`);
        }
    });

    return router;
}

module.exports = teachersRoute();
