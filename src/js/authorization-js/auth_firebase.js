import { signUpModal, signInModal } from './auth_modals';
import { initializeApp } from 'firebase/app';
import {
  validateEmail,
  validatePassword,
  validateUserName,
  isValidF,
} from './auth_valid_form';
const firebaseConfig = {
  apiKey: 'AIzaSyCJ7bTyjKvQtJTxa9hFVg3AHb0bG9xVu8w',
  authDomain: 'lets-do-it-bookshelf.firebaseapp.com',
  projectId: 'lets-do-it-bookshelf',
  storageBucket: 'lets-do-it-bookshelf.appspot.com',
  messagingSenderId: '961226885770',
  appId: '1:961226885770:web:a9fbb77bee4dd760353b73',
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
//console.log(app);

import {
  getFirestore,
  collection,
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore/lite';

const db = getFirestore(app);

async function updateUserShopList(uid, list) {
  const usersRef = collection(db, 'users');
  try {
    const docRef = await setDoc(doc(usersRef, uid), {
      shopList: list,
    });
    console.log(docRef);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}
async function getUserShopList(uid) {
  const docRef = doc(db, 'users', uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log('Document data:', docSnap.data());
    return docSnap.data();
  } else {
    // docSnap.data() will be undefined in this case
    console.log('No such document!');
  }
}

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const auth = getAuth();
//console.log(auth);

onAuthStateChanged(auth, user => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    console.log(uid, user);
    showUserBar(user);
    //updateUserShopList(uid, [145, 568]);
    getUserShopList(uid).then(userData => {
      //console.log(userData.shopList);
    });
  } else {
    document.querySelector('.sing-wrap').style.display = '';
    document.querySelector('.log-out-wrap').style.display = 'none';
  }
});
function showUserBar(user) {
  const userName = document.querySelector('.user-text');
  userName.textContent = user.displayName;
  document.querySelector('.user-image img').src =
    user.photoURL ?? '/img/noimage.png';
  document.querySelector('.user-image img').alt = user.displayName;

  document.querySelector('.log-out-wrap').style.display = '';
  document.querySelector('.sing-wrap').style.display = 'none';
}

function registrateUser() {
  if (!validateUserName(signUpForm.name)) {
    return;
  }
  if (!validateEmail(signUpForm.email)) {
    return;
  }
  if (!validatePassword(signUpForm.password)) {
    return;
  }

  createUserWithEmailAndPassword(
    auth,
    signUpForm.email.value,
    signUpForm.password.value
  )
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;
      const profUrl = saveUserPhoto();
      updateUserProfile(signUpForm.name.value, profUrl);
      signUpModal.close();
      console.log(user);
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.dir(error);
      // ..
    });
}
function saveUserPhoto(file = null) {
  return null;
}
//registrateUser('hjkj@gmail.com', 'password1');
// newUserName
// user@gmail.com
// new_user*pass

function signIn() {
  console.dir(signInForm);
  if (!validateEmail(signInForm.email)) {
    return;
  }
  if (!validatePassword(signInForm.password)) {
    return;
  }

  signInWithEmailAndPassword(
    auth,
    signInForm.email.value,
    signInForm.password.value
  )
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      signInModal.close();
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.dir(error, errorCode, errorMessage);

      isValidF(errorMessage, false);
    });
}
function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then(result => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      signInModal.close();
    })
    .catch(error => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}

function logOutUser() {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch(error => {
      // An error happened.
    });
}

function updateUserProfile(name = null, photoUrl = null) {
  updateProfile(auth.currentUser, {
    displayName: name,
    photoURL: photoUrl,
  })
    .then(() => {
      document.querySelector('.user-text').textContent = name;
      document.querySelector('.user-image img').src =
        photoUrl ?? '/img/noimage.png';
      console.log(auth.currentUser);
    })
    .catch(error => {
      // An error occurred
      // ...
    });
}
//signIn('hjkj@gmail.com', 'password1');
export { logOutUser, signIn, signInWithGoogle, registrateUser };
