const bcrypt = require('bcryptjs');
const UserModel = require('../Model/UserModel');
const signup = async (req, res) => {
    try {
        const { username, email, password ,role,secretkey } = req.body;

        const exitstUser = await UserModel.findOne({ email: email });
        if (exitstUser) {
            return res.status(400).json("User Already extist");
        }
        else {
            const hash = await bcrypt.hash(password, 10);
            let data = await UserModel.create({
                username,
                email,
                password: hash,
                role,
                secretkey
            })
            return res.status(200).json({ data });
        }

    } catch (error) {
        return res.status(500).json(error.message);
    }
}

const login = async (req, res) => {
    try {

        const { email, password } = req.body
        const signupdata = await UserModel.findOne({ email: email })
        if (!signupdata) {
            return res.status(400).json({ data: "User Not Found Please Register Firtst !!!" });
        }
        const isComparePassword = await bcrypt.compare(password, signupdata.password)
        if (isComparePassword === false) {
            return res.status(200).json({ data: "User Password Wrong" });
        }
        return res.status(200).json({ data: "User Login Successfully" });
    } catch (error) {
        return res.status(500).json(error.message);
    }

}
module.exports = { signup, login };
