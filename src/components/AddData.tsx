import { collection, addDoc } from "@firebase/firestore";
import { db } from "../firebase";

const CardData = collection(db, "CardData");

export async function upload({q, a, h, uid}:any){
    await addDoc(CardData, {
        question: q,
        answer: a,
        hint: h,
        uid: uid
    });
}