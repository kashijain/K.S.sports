import { Inngest } from "inngest";
import connectDB from "./db";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "K.S sports - next" });


export const syncUserCreation = inngest.createFunction(
{
id:'sync-user-from-clerk'
},
{ event:'clerk/user.created'},
async ({event})=>{
      const { id ,first_name,last_name,email_addresses, image_url}=event.data
      const userData = {
        _id:id,
        email:email_addresses[0].email_address,
        name: first_name + ' ' + last_name,
        image_url:image_url
      }
      await connectDB()
      await User.create(userData)
}
)


// inngest function upadte user data
export const syncUserUpation = inngest.createFunction(
    {
        id: 'update -user-from-clerk'
    },
    {event:'clerk/user.updated'},
    async({event}) => {
const { id ,first_name,last_name,email_addresses, image_url}=event.data
      const userData = {
        _id:id,
        email:email_addresses[0].email_address,
        name: first_name + ' ' + last_name,
        image_url:image_url
      }
      await connectDB()
      await User.findByIdAndUpdate(id,userData)    
    }
)

// inngest function to deleted
export const syncUserDeletion = inngest.createFunction(
    {
        id:'delete-user-with-clerk'
    },
    {
        event:'clerk/user.deleted'
    },
    async({event}) => {
        const{id} = event.data

        await connectDB()
        await User.findByIdAndDelete(id)
    }
)