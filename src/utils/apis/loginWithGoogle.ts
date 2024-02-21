import { authService } from "@/firebase";
import { FirebaseError } from "firebase/app";
import { signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/cordova";

export const onGoogleLogin = async () => {
  const provider = new GoogleAuthProvider();
  await signInWithPopup(authService, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);

      if (!credential) throw Error("유효하지 않은 자격증명입니다.");

      const token = credential.accessToken;
      console.log("token : ", token);

      const user = result.user;

      console.log("user : ", user);
    })
    .catch((error: FirebaseError) => {
      const errorCode = error.code;
      console.log("errorCode : ", errorCode);
      const errorMessage = error.message;
      console.log("errorMessage : ", errorMessage);
      const email = error.customData?.email;
      console.log("customData email : ", email);
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log("error credential : ", credential);
    });
};
