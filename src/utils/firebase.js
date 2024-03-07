import { initializeApp} from "firebase/app";
import {getFirestore,doc,setDoc,getDoc} from "firebase/firestore"
import {getAuth,signInWithEmailAndPassword} from "firebase/auth"
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app)

export const createUserDocumentFromAuth = async ({userAuth, additionalInformation={}}) => {
    const UserRef = doc(db, "users", userAuth.uid);
    const UserDoc = await getDoc(UserRef);

    if (!UserDoc.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = firebase.firestore.FieldValue.serverTimestamp()
        try{
            await setDoc(UserRef,{
                displayName,
                email,
                createdAt,
                ...additionalInformation
            })
        }
        catch (error) {
            alert("Error creating user, Error: " + error.message)
        }
    }
    return UserRef
}

export const signInUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
};