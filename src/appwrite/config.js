import conf from "../conf/conf";
import { Client,ID,Databases,Storage,Query } from "appwrite";

export class Servise{
   client = new Client();
   Databases;
   bucket;
   constructor(){
      this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectID)
      // to get storage and databases
      this.databases=new Databases(this.client);
      this.bucket=new Storage(this.client)
   }

   // to create post
   async createPost({title,slug,content,featureImage,status,userId}){
      try {
         return await this.databases.createDocument(
            conf.appwriteDatabaseID,
            conf.appwriteCollectionID,
            slug,
            {
               title,
               content,
               featureImage,
               status,
               userId,
            }
         )
      }catch (error){
         console.log("error is form creat post and error is",error);
      }


   }

   async updatePost(slug,{title,content,featureImage,status}){
      try{
         return await this.databases.updateDocument(
            conf.appwriteDatabaseID,
            conf.appwriteCollectionID,
            slug,
            //kya kya update karna he
            {
               title,content,featureImage,status,
            }
         )
      }catch(error){
            console.log("Error is in update post",error)
      }
   }

   async deletePost(slug){
      try{
         await this.databases.deleteDocument(
            conf.appwriteDatabaseID,
            conf.appwriteCollectionID,
            slug,
         )
         return true
      }catch(error){
         console.log("Error is your deletePost method",error)
         return false
      }

   }

   // toget a single post

   async getPost(slug){
      try{
         return await this.databases.getDocument(
            conf.appwriteDatabaseID,
            conf.appwriteCollectionID,
            slug
            //it give us all post
         )
      }catch(error){
         console.log("Error come in getPost",error);
         return false

      }
   }

   //if we want a single post so we use queries
   //here we not giving paramater slug[getPosts(slug)] beacuse ham sare ke sare arguments le rahe he
   //parameter me ka query veriable he ham kuch bi de sakte he
   async getPosts(queries = [Query.equal("status","active")]){
      try{
         return await this.databases.listDocuments(
            conf.appwriteDatabaseID,
            conf.appwriteCollectionID,
            queries
         )
      }catch(error){
          console.log("Error come in getPosts method",error);
          return false
      }
   }

   //file upload services
   //upload file function ke paramete me hame file ka block dena hota he file name nahi dena hota he
   async uploadFile(file){
      try{
         return await this.bucket.createFile(
            conf.appwriteBucketID,
            ID.unique(),
            file
         )
      }catch(error){
         console.log("error come in uploadFile",error)
         return false
      }
   }

   async deleteFile(fileId){
      try{
         await this.bucket.deleteFile(
            conf.appwriteBucketID,
            fileId,
          )
         return true
      }catch(error){
         console.log("Error come in deleteFile Function",error);
         return false
      }
   }

   // to get file preview

   getFilePreview(fileId){
      return this.bucket.getFilePreview(
         conf.appwriteBucketID,
         fileId
      )
   }
}


const service = new Servise()
export default service