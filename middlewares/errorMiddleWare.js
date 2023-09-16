// import express from 'express';

const errorMiddleWare = (err, req, res, next)=>{
    console.log('Middleware codes come into play here hahah');
    const statusCode = res.statusCode ? res.statusCode : 500;
    res.status(statusCode);
    res.json({message: err.message, stack: process.env.NODE_ENV === "development" ? err.stack : null});
}

module.exports = errorMiddleWare;