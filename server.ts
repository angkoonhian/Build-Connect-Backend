const express = require('express');
import connectDB from './config/db';
import path from 'path';
import dotenv from 'dotenv';
import 'colors';
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';
import morgan from 'morgan';
import helmet from 'helmet';
import xss from 'xss-clean';
import rateLimit from 'express-rate-limit';
import hpp from 'hpp';
import cors from 'cors';
import { apiRouter } from './src/routes/api.route';
import { errorHandler } from './src/middleware';

dotenv.config({ path: 'config/config.env' });

// Init express
const app = express();

// Connect Database
connectDB();

// Express json parser
app.use(express.json());

// Cookie parser
app.use(cookieParser());

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Set security headers
app.use(helmet());

// Prevent XSS attacks
app.use(xss());

// Mount routers
app.use('/api', apiRouter);

// Init middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
