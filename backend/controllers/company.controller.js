import {Company} from "../models/company.model.js"
import getDataUri from "../utils/dataURI.js";
import cloudinary from "../utils/cloudinary.js"

export const registerCompany = async (req, res) => {
    try {
        const { companyName } = req.body;

        // Check if companyName is provided
        if (!companyName) {
            return res.status(400).json({
                message: "Company Name is missing",
                success: false,
            });
        }

        // Check if a company with the same name already exists
        let company = await Company.findOne({ name: companyName });
        if (company) {
            return res.status(400).json({
                message: "Company already exists",
                success: false,
            });
        }

        // Create a new company
        company = await Company.create({
            name: companyName,
            userId: req.id,
        });

        return res.status(201).json({
            message: "Company registered successfully",
            company,
            success: true,
        });
    } catch (error) {
        console.error(error);
        
    }
};

    export const getCompany=async(req,res)=>{
        try{
            const userId=req.id;
            const companies=await Company.find({userId});
            if(!companies){
            return res.status(404).json({
                message:"Companies not found",
                success:false
            });
        } 
        return res.status(200).json({
            message:"Company imformation get",
            companies,
            success:true,
        });
        }
        catch(error){
            console.log(error);
        }
       
    }

    export const getCompanyById=async(req,res)=>{
        try {
            const companyId=req.params.id;
            const company=await Company.findById(companyId);
            if(!company){
                return res.status(404).json({
                    message:"Company not Found",
                    success:false,
                });
            }
            return res.status(200).json({
                company,
                success:true,
            });
            
        } catch (error) {
            console.log(error);
        }
    }

    export const updateCompany=async(req,res)=>{
        try {
            const {name,desription,website,location}=req.body;
            

            // cloudinary
            const file = req.file;
            const fileUri=getDataUri(file);
            const cloudResponse=await cloudinary.uploader.upload(fileUri.content);
            const logo=cloudResponse.secure_url;
           

            const updateData={name,desription,website,location,logo};
            const company=await Company.findByIdAndUpdate(req.params.id,updateData,{new:true});
            if(!company){
                return res.status(404).json({
                    message:"Company not found",
                    success:false,
                });
            }
            return res.status(200).json({
                message:"Company imformation updated",
                success:true,
            });

        } catch (error) {
            console.log(error);
        }
    }
