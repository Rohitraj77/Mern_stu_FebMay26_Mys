const showService = require("../services/show.service");

// Create show: Admin
exports.createShow = async(req,res,next) => {
    try{
        const show = await showService.createShow(req.body);
        res.status(201).json({
            success:true,
            message:"Show created successfully",
            data:show,
        });

    }
    catch(error){
        next(error);
    }
};

// Get shows
exports.getShows = async(req,res,next) => {
    try{
        const shows = await showService.getShows(req.query);
        res.status(200).json({
            success:true,
            message:"Shows fetched successfully",
            data:shows,
        });

    }
    catch(error){
        next(error);
    }
};

// Get single show related details

exports.getShowsById = async(req,res,next) => {
    try{
        const show = await showService.getShowById(req.params.id);
        res.status(200).json({
            success:true,
            message:"Shows fetched successfully",
            data:show,
        });

    }
    catch(error){
        next(error);
    }
};

// update show

exports.updateShow = async(req,res,next) => {
    try{
        const shows = await showService.updateShow(req.param.id,req.body);
        res.status(200).json({
            success:true,
            message:"Show updated successfully",
            data:show,
        });

    }
    catch(error){
        next(error);
    }
};


// delete show - admin

exports.deleteShow = async(req,res,next) => {
    try{
        await showService.updateShow(req.param.id);
        res.status(200).json({
            success:true,
            message:"Show deleted successfully",
            
        });

    }
    catch(error){
        next(error);
    }
};