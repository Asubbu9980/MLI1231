const express = require('express');
const Job = require('../model/job.model');
const mongoose = require('mongoose');

const createNewJob = async (req,res) => {
    
   
    try{
       const job = await Job.create({
        title : req.body.title,
        role : req.body.role, 
        company : req.body.company,
        description : req.body.description,
        experience : req.body.experience,
        location : req.body.location,
        minSalary : req.body.minSalary,
        maxSalary : req.body.maxSalary,
        jobType : req.body.jobType,
        status : "Apply",
        skills : req.body.skills
       })
       console.log(job)
       return res.send(job)
    
    } catch(err) {
        return res.send(err).sendStatus(400)
    }
  
   
}


const getAllJobs = async (req,res) => {
    try{
     const jobs = await Job.find({});
     return res.send(jobs)
    } catch(err) {
      return res.send(err).sendStatus(400)
    }
}

const getOneJob = async (req,res) => {
    const id = req.params.id
    try{
        const job = await Job.findOne({"_id" : id});
        //console.log(job);
        return res.send(job)
    } 
    catch(err){
        return res.send(err).sendStatus(400)
    }
}

const updateJob = async (req,res) => {
    
     try{
        const id = req.params.id;
        const dataStatus = req.body;
        const updateJob = await Job.findByIdAndUpdate(id , {
            status : dataStatus.status
        });
        const jobData = await Job.find();
        return res.send({response : jobData , message: "ok"}).status(200)
     } 
     catch(err) {
        res.status(400).send({message : "Error in request"})
     }
} 

module.exports = {createNewJob , getAllJobs , getOneJob, updateJob}