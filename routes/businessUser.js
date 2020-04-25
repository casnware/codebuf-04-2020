const router = express.Router();
const bcrypt = require('bcrypt');


router.get('/login',async (req,res) => {
    const db = req.app.db;
    const userCheck = await db.user.countDocuments({});
    if(userCheck && userCheck > 0){
        req.session.needsSetup = false;
        res.redirect('/home');
    }
    else {
        req.session.needsSetup = true;
        res.redirect('/login');
    }
});

router.post ('/login', async (req, res)) => {
    const db = req.app.db;
    const user = await db.user.findOne({email:common.mongoSantize(req.body.email) });
    if( !user || user == null){
        res.status(400).json({message: 'User Does Not Exist'});
        return;
    }

    bcrypt.compare(req.body.password, user.password).then((result) =>{
        if(result){
            req.session.user = req.body.email;
            req.session.firstName = user.firstName;
            req.session.lastName = user.lastName;
            req.session.userId = user._id.toString();
            req.session.isAdmin = user.isAdmin;
            res.status(200).json({message: 'Login Successful'});
            return;
        }
        res.status(400).json({message:'Please check email ad password again.'});
     });
});