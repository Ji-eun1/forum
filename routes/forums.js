const router = require('express').Router();
const upload = require('../middleware/cloudinary.config');
const auth = require('../middleware/auth');
const checkSchema = require('../validation/checkSchema');
const validate = require('../validation/validate');
const {
    postForum,
    getForums,
    getSearchForums,
    getForum,
    updateViewCount,
    updateForum,
    updateForumHeart,
    deleteForum,
    deleteForums
} = require('../controllers/forums');

router.post('/post', auth, upload.single('attachImagePath'), validate(checkSchema('forum')), postForum);
router.get('/get', getForums);
router.get('/search/get', getSearchForums);
router.get('/view/get/:id', auth, updateViewCount, getForum)
router.get('/write/get/:id', auth, getForum)
router.put('/update/:id', upload.single('attachImagePath'), validate(checkSchema('forum')), updateForum);
router.patch('/heart/update/:id', auth, updateForumHeart);
router.delete('/delete/:id', auth, deleteForum);
router.delete('/delete', deleteForums);

module.exports = router;