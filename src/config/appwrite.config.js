import { Client, Databases } from "appwrite";

const client = new Client()
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID);

const databases = new Databases(client);

export { databases };
