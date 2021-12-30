import {app, db} from "./firebase";
import {collection, query, where, getDocs, setDoc, doc, addDoc} from "firebase/firestore";
import {getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";

export async function registration(email: string, password: string, lastName: string, firstName: string) {
  try {
    const auth = getAuth(app);
    await createUserWithEmailAndPassword(auth, email, password)
      .then(async (credential) => {
        const user = credential.user;
        
        await setDoc(doc(db, "users", user.uid), {
          email: email,
          firstName: firstName,
          lastName: lastName,
        });
      })
  } catch (err) {
    console.log(err);
  }
}
  
export async function signIn(email: string, password: string) {
  try {
    const auth = getAuth(app);
    await signInWithEmailAndPassword(auth, email, password)
      .then((credential) => {
        const user = credential.user;
        console.log(user);
      })
  } catch (err) {
    console.log(err);
  }
}

export async function loggingOut() {
  try {
    const auth = getAuth(app);
    await auth.signOut();
  } catch (err) {
    console.log(err);
  }
}