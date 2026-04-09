const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// frame.png এক্সেস করার জন্য স্ট্যাটিক ফোল্ডার সেটআপ
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`সার্ভারটি চালু হয়েছে: http://localhost:${port}`);
});