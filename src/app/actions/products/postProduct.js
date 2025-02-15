"use server";

import dbConnect from "@/lib/dbConnect";

export const postProduct = async (postedData) => {
  try {
    const result = await dbConnect("tests").insertOne(postedData);
    revalidatePath("/products");
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};
