require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mssql = require('mssql');
const cors = require('cors');
const app = express();

const port = process.env.PORT || 3000;

const dbConfig = {
    user: process.env.USER,
    password: process.env.PASSWORD,
    server: process.env.SERVER,
    database: process.env.DATABASE,
    options: {
        encrypt: false,
        enableArithAbort: true
    }
};

(async () => {
    try {
        const db = await mssql.connect(dbConfig);
        if (db.connected) {
            console.log('Connected to the database');

            // Middleware
            app.use(bodyParser.json());
            app.use(cors());
            app.use('/documents', express.static(path.join(__dirname + '/public')));
            // Routes
            const teacherRoutes = require('./routes/teachers-route');
            const adminRoutes = require('./routes/admin-route');
            const newsRoutes = require('./routes/news-route');
            const categoryRoutes = require('./routes/category-route');
            const tagRoutes = require('./routes/tag-route');
            app.use(teacherRoutes);
            app.use(adminRoutes);
            app.use(newsRoutes);
            app.use(categoryRoutes);
            app.use(tagRoutes);
            // Start the app
            app.listen(port, () => console.log(`Listening on port ${port}`));
        }
    } catch (err) {
        console.log(`SQL Error: ${err}`);
    }
})();
