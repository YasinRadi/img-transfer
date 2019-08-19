const express = require('express')
const router = express.Router()
const multer = require('multer')
const upload = multer({ storage: multer.memoryStorage() })
const fs = require('fs')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

router.post('/', upload.array('imgs') ,(req, res, next) => {
  req.files.forEach(f => {
    fs.writeFile(`imgs/${f.originalname}`, f.buffer, 'binary', err => {
      if (err) {
        console.error(err)
      } else {
        console.log(`${f.originalname} saved.`)
      }
    })
  })

  res.redirect('/')
})

module.exports = router;
