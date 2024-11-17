import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

// bar bar use hona chahiye iislye for registeration
export class AuthService{
   client = new Client();
   account;

   // ham chahate he ki jab new object banega tab ek naya account ban na chahiye new client ban na chahiye so we use constructor 
   constructor(){
      //console.log("AppWrite URL ------ ",conf.appwriteUrl)
      this.client
         .setEndpoint(conf.appwriteUrl)
         .setProject(conf.appwriteProjectID);
      // aab this.client ke aandar ye value aa gayi he so 

      this.account = new Account(this.client);
   }

   //-------------------create an account---------------------------------------//


   async createAccount({email,password,name}){
      try {
         const userAccount = await this.account.create(ID.unique(),email,password,name)

         if (userAccount){
            // yaha par hamare pass email our password ka access he so aagar user ka account create huwa he then user ko login karwa dijiye
            // call another method
            return this.login({email,password});

         }else{
            return userAccount;
         }

      }catch(error){
         throw error;
      }
   }

   async login({email,password}){
      try{
         return await this.account.createEmailPasswordSession(email,password);

      }catch(error){
         throw error;

      }
   }

   // aagar user home page par he to hame dekna he ki user login he ki nahi he
   async currentUser(){
      try{
         return await this.account.get() 
      }catch(error){
         console.log("Appwrite seriver :: getCurrent User::error",error);
      }

      // aagar account nahi mila then 
      return null;

      
      }
   async logout(){
      try{
         await this.account.deleteSessions();
      }catch(error){
         console.log("error come in logOut Appwrite Servise",error)
      }
   }
}



//ham yaha direct object banake export kar dege beacuse means object ko import kar lo and sab bane banaye method use kar lo 

const authService = new AuthService();

//ham yaha direct object banake export kar dege beacuse means object ko import kar lo and sab bane banaye method use kar lo dot lagake (.).
// ye object export hone ke karan ham direct .(dot ) se front end me methods ko access kar sakte he

export default authService;


//.....................note....................//

// aagar hame feature me koi appwrite me authentation karna pada to ham ye code direct copy peast kar sakte he


