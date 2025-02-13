import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req, {params} ) {

    const p = await params;
    const singleData = await dbConnect("tests").findOne({_id: new ObjectId(p.id)})

    return Response.json(singleData)
}

export async function DELETE(req, {params} ) {

    const p = await params;
    const deleteDta = await dbConnect("tests").deleteOne({_id: new ObjectId(p.id)})

    return Response.json(deleteDta)
}

export async function PATCH(req, {params} ) {

    const p = await params;
    const postedData = await req.json()
    const filter = {_id : new ObjectId(p.id)}
    const updatedDoc = await dbConnect("tests").updateOne(filter, {$set: {...postedData}}, {upsert: true})

    return Response.json(updatedDoc)
}