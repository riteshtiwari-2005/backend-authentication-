const Usermodel = require("../model/User");
const bycrypt = require("bcryptjs");
const jsonwebtoken = require("jsonwebtoken");
exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    let getdata = await Usermodel.findOne({ email });
    if (!getdata) {
      return res.status(409).json({
        success: false,
        message: "Email Not exist",
      });
    }
    const hashpassword = getdata.password;
    let logdin = await bycrypt.compare(password, hashpassword);
    if (!logdin) {
      return res.status(401).json({
        success: false,
        message: "Password invalid",
      });
    }
    const token = jsonwebtoken.sign(
      { email: getdata.email,role:getdata.Role },
      process.env.JWTKEY,
      { expiresIn: "1h" }
    );
    const user = getdata.toObject();
    user.token = token;
    user.password = undefined;

    const options = {
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };
    return res.cookie("user-data", getdata, options).status(200).json({
      success: true,
      token,
      user,
      message: "User Logged Successfully",
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Internal Server error",
      error:e.message
    });
  }
};

exports.Signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const users = await Usermodel.findOne({ email: email }); // Fetch all users from DB
    console.log(password);
    if (users) {
      return res.status(409).json({ message: "Email already exists" });
    }

    let hashpassword;
    try {
      hashpassword = await bycrypt.hash(password, 10);
    } catch (e) {
      return res.status(500).json({
        success: false,
        message: "error while hashing password",
        error: e,
      });
    }

    let savedata = new Usermodel({
      name: name,
      email: email,
      password: hashpassword,
      Role: role,
    });

    let data = await savedata.save();
    return res.status(200).json({
      success: true,
      data: data,
      message: "user successfully inserrt",
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "error while Signup",
    });
  }
};
