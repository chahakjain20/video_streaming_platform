import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const Login = async(req,res)=>{
    try {
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(401).json({
                message:"Invalid Data",
                success:false
            })
        };
        const user = await User.findOne({email});
        if(!user){
            return res.status(401).json({
                message:"Invalid email or password",
                success:false
            });
        }
        const isMatch = await bcrypt.compare(password,user.password);

        if(!isMatch){
            return res.status(401).json({
                message:"Invalid email or password",
                success:false
            });
        }


        const tokenData = {
            id:user._id
        }
        const token = await jwt.sign(tokenData, "dfbvdkjzfnvkjzdnfvkzdnjf",{expiresIn:"1h"});

        return res.status(200).cookie("token",token,{httpOnly:true}).json({
            message:`Welcome back ${user.fullName}`,
            user,
            success:true
        })

    } catch (error) {
        console.log(error);
    }
}

export const Logout = async(req,res)=>{
    return res.status(200).cookie("token","",{expiresIn:new Date(Date.now()),httpOnly:true}).json({
        message:"User Logged Out successfully",
        success:true
    })
}

export const Register = async(req,res)=>{
    try{
        const {fullName,email,password} = req.body;
        if(!fullName || !email || !password){
            return res.status(401).json({
                message :"Invalid Data",
                success:false
            })
        }
        const user = await User.findOne({email});
        if(user){
            return res.status(401).json({
                message:"This email already exists!",
                success:false
            })
        }
        const hashedPassword = await bcrypt.hash(password,16);

        await User.create({
            fullName,
            email,
            password:hashedPassword
        });

        return res.status(200).json({
            message:"Account created Successfully.",
            success:true
        })
    }catch (error){
        console.log(error);
    }
}