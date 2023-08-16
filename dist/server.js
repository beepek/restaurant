"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000; // Use the provided port or default to 3000
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(__dirname, '../views'));
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
app.get('/', (req, res) => {
    res.render('index');
});
app.get('/menu', (req, res) => {
    res.render('menu');
});
app.get('/contact', (req, res) => {
    res.render('contact');
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
