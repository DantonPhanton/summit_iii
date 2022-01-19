import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    // Redacted
};

if (!firebase.apps.length) {
    const app = firebase.initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
}

export { firebase };