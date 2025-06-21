import { Inngest } from "inngest";
import connectDB from "./db"; // ✅ Change if needed, e.g., "@/lib/db"
import User from "@/models/User";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "K.S sports - next" });

export const syncUserCreation = inngest.createFunction(
  {
    id: "sync-user-from-clerk",
  },
  { event: "clerk/user.created" },
  async ({ event }) => {
    const { id, first_name, last_name, email_addresses, image_url } = event.data;

    const userData = {
      _id: id,
      email: email_addresses[0]?.email_address, // ✅ Safe access
      name: first_name + " " + last_name,
      image_url: image_url,
    };

    try {
      await connectDB();
      const createdUser = await User.create(userData);
      console.log("✅ User created:", createdUser);
    } catch (error) {
      console.error("❌ Failed to create user:", error.message);
    }
  }
);

export const syncUserUpation = inngest.createFunction(
  {
    id: "update-user-from-clerk",
  },
  { event: "clerk/user.updated" },
  async ({ event }) => {
    const { id, first_name, last_name, email_addresses, image_url } = event.data;

    const userData = {
      _id: id,
      email: email_addresses[0]?.email_address,
      name: first_name + " " + last_name,
      image_url: image_url,
    };

    try {
      await connectDB();
      await User.findByIdAndUpdate(id, userData);
      console.log("✅ User updated");
    } catch (error) {
      console.error("❌ Failed to update user:", error.message);
    }
  }
);

export const syncUserDeletion = inngest.createFunction(
  {
    id: "delete-user-with-clerk",
  },
  { event: "clerk/user.deleted" },
  async ({ event }) => {
    const { id } = event.data;

    try {
      await connectDB();
      await User.findByIdAndDelete(id);
      console.log("✅ User deleted");
    } catch (error) {
      console.error("❌ Failed to delete user:", error.message);
    }
  }
);