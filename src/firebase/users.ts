import {app, db} from "./firebase";
import {collection, query, where, getDocs, setDoc, doc, addDoc, getDoc} from "firebase/firestore";
import {getAuth, User} from "firebase/auth";

export async function getLoggedInUserInfo() {
    try {
        const user = getAuth(app).currentUser;
        if (user) {
            const userInfo = await getDoc(doc(db, "users", user.uid));
            return userInfo;
        }
    } catch(err) {
        console.log(err);
    };
}