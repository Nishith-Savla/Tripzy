import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

export const loginWithGoogle = async () => {
	try {
		const provider = new GoogleAuthProvider();
		provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
		const auth = getAuth();

		const response = await signInWithPopup(auth, provider);
		// This gives you a Google Access Token. You can use it to access the Google API.
		const credential = GoogleAuthProvider.credentialFromResult(response);
		const token = credential.accessToken;
		// The signed-in user info.

		const user = response.user;
		return { user, token };
	} catch (error) {
		// Handle Errors here.
		const errorCode = error.code;
		const errorMessage = error.message;
		console.log(errorMessage);
		// The email of the user's account used.
		const email = error.customData.email;
		// The AuthCredential type that was used.
		const credential = GoogleAuthProvider.credentialFromError(error);
		return null;
	}
};
