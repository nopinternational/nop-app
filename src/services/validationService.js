import { getUser } from "../components/Auth/auth";
import {
  getDatabase,
  ref,
  set,
  push,
  child,
  onValue,
  off,
  update,
} from "firebase/database";
import { getStorage, uploadBytes, ref as storageRef } from "firebase/storage";

export const persistValidationStatus = (status, message) => {
  console.log("persistValidationStatus", status, message);
  const user = getUser();

  const uid = user.uid;
  const db = getDatabase();
  const validationDataRef = ref(db, `/validation/${uid}/status/`);

  if (message) {
    return set(validationDataRef, { status, message });
  } else {
    const status_child_status_ref = child(validationDataRef, "status");
    return set(status_child_status_ref, status);
    //return validationDataRef.child("status").set(status);
  }
};

export const persistSignupData = (userid, signupData, firebaseImages) => {
  console.log("persistSignupData", userid, signupData, firebaseImages);
  const db = getDatabase();
  const validationDataRef = ref(db, `validation/${userid}`);
  //const dataRef = firebase.database().ref(`validation/${userid}`);
  const now = new Date().toISOString();
  //.push(userid + "-hello")

  push(validationDataRef, {
    message: signupData.message,
    created: now,
    firebaseImages,
  }).catch((error) => {
    console.error(error);
  });

  update(child(validationDataRef, "current"), {
    message: signupData.message,
    created: now,
    firebaseImages,
  }).catch((error) => {
    console.error(error);
  });
};

export const onValidationDataChange = (callback) => {
  const user = getUser();

  const uid = user.uid;
  const db = getDatabase();
  const currentRef = ref(db, `/validation/${uid}/current/`);
  onValue(currentRef, (snapshot) => {
    const data = snapshot.val();
    console.log("validation data change: ", data);
    callback(data);
  });

  return () => {
    off(currentRef);
  };
};

export const onStatusValueChange = (callback) => {
  const user = getUser();

  const uid = user.uid;
  const db = getDatabase();
  const statusDataRef = ref(db, `/validation/${uid}/status/`);

  onValue(statusDataRef, (snapshot) => {
    const data = snapshot.val();

    callback(data);
  });
  return () => {
    off(statusDataRef);
  };
};

export const setValidationPending = () => {
  persistValidationStatus("PENDING");
};
export const setValidationRetry = () => {
  persistValidationStatus("RETRY");
};

export const persistImage = (file, success) => {
  console.log("persistImage", file);
  const user = getUser();

  const uid = user.uid;
  const storage = getStorage();
  const baseRef = storageRef(storage, `validation/${uid}`);
  const fileRef = storageRef(baseRef, file.name);
  console.log("fileref=", fileRef);
  uploadBytes(fileRef, file).then((snapshot) => {
    console.log("Uploaded a blob or file!", snapshot);
    success(snapshot);
  });
};
