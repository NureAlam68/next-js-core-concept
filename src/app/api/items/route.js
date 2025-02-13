import dbConnect from "@/lib/dbConnect"

export async function GET() {

    const data = await dbConnect("tests").find({}).toArray()
    return Response.json(data)
}
     
export async function POST(req) {
    
    const postedData = await req.json()
    const result = await dbConnect("tests").insertOne(postedData)
    return Response.json(result)
}