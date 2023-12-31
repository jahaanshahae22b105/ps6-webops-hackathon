import { query, collection, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase-config";


export default async function isUsernameExists(username) {
  const q = query(collection(db, "users"), where("username", "==", username));
  const querySnapshot = await getDocs(q);
  return querySnapshot.size > 0;
}