import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCDcF_4SEUs2RKDOAWoXUTCb9DO6QaO1TU",
  authDomain: "motutest-ac954.firebaseapp.com",
  databaseURL: "https://motutest-ac954-default-rtdb.firebaseio.com",
  projectId: "motutest-ac954",
  storageBucket: "motutest-ac954.firebasestorage.app",
  messagingSenderId: "85522378752",
  appId: "1:85522378752:web:7ebe0121ab3ff25e09a8e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export const submitUserData = async (userData) => {
  try {
    const newUserRef = ref(database, 'user').push();
    const userId = newUserRef.key;

    const dataToSubmit = {
      ...userData,
      userId,
      timestamp: new Date().toISOString()
    };

    await set(newUserRef, dataToSubmit);
    localStorage.setItem("currentUserId", userId);
    console.log("✅ User data submitted:", userId);
    return userId;
  } catch (error) {
    console.error("Error submitting user data:", error);
    throw error;
  }
};

export default database;
