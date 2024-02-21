"use client";

import Molecule from "@/components/molecules";

import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { authService } from "@/firebase";
import { type FirebaseError } from "firebase/app";
import { useRouter } from "next/navigation";

export default function SocialLogin() {
  const router = useRouter();

  const onFacebookLogin = async () => {
    const provider = new FacebookAuthProvider();
    await signInWithPopup(authService, provider)
      .then((result) => {
        const credential = FacebookAuthProvider.credentialFromResult(result);

        if (!credential) throw Error("유효하지 않은 자격증명입니다.");

        const token = credential.accessToken;
        console.log("token : ", token);

        if (token) {
          localStorage.setItem("accessToken", token);
          router.push("/");
        }

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
        const credential = FacebookAuthProvider.credentialFromError(error);
        console.log("error credential : ", credential);
      });
  };

  const onGithubLogin = async () => {
    const provider = new GithubAuthProvider();
    await signInWithPopup(authService, provider)
      .then((result) => {
        const credential = GithubAuthProvider.credentialFromResult(result);

        if (!credential) throw Error("유효하지 않은 자격증명입니다.");

        const token = credential.accessToken;
        console.log("token : ", token);

        if (token) {
          localStorage.setItem("accessToken", token);
          router.push("/");
        }

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
        const credential = GithubAuthProvider.credentialFromError(error);
        console.log("error credential : ", credential);
      });
  };

  const onGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(authService, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);

        if (!credential) throw Error("유효하지 않은 자격증명입니다.");

        const token = credential.accessToken;
        console.log("token : ", token);

        if (token) {
          localStorage.setItem("accessToken", token);
          router.push("/");
        }

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

  return (
    <>
      <Molecule.GoogleLogin onClick={onGoogleLogin} />
      <Molecule.FacebookLogin onClick={onFacebookLogin} />
      <Molecule.GithubLogin onClick={onGithubLogin} />
    </>
  );
}
