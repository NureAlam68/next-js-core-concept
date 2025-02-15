"use server"

import dbConnect from "@/lib/dbConnect";

export const getProducts = async () => {
    try{
        const data = await dbConnect("tests").find({}).toArray();
        return data;
    }
    catch(error){
        return []
    }
}