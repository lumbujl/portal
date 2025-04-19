"use server"

import { databases } from "@/config/appwrite.config"


export async function fetchBlogs() {
    const response = await databases.listDocuments(
        process.env.NEXT_PUBLIC_APPWRITE_DB_ID,
        process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID
    );
    console.log(response)

    return response.documents;
}