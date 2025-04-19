"use server"

import { databases } from "@/config/appwrite.config"


export async function fetchBlog(id) {
    const response = await databases.getDocument(
        process.env.NEXT_PUBLIC_APPWRITE_DB_ID,
        process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID,
        id
    );

    return response;
}