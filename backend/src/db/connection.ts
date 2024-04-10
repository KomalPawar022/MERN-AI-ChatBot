import { connect, disconnect } from "mongoose";
async function connectToDatabase() {
  try {
    await connect(
      `mongodb+srv://komalpawar022:Mylo@12345@Cluster0.bfvs5rb.mongodb.net/chatbot?retryWrites=true&w=majority&appName=Cluster0`,
    );
  } catch (e) {
    console.log(e);
    throw new Error("Cannot connect to MongoDB");
  }
}

async function disconnectFromDatabase() {
  try {
    await disconnect();
  } catch (e) {
    console.log(e);
    throw new Error("Cannot Disconnect to MongoDB");
  }
}
export { connectToDatabase, disconnectFromDatabase };
