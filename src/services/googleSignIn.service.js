import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase.config';

const googleSignInService = async (navigate) => {
	const googleProvider = new GoogleAuthProvider();

	try {
		await signInWithPopup(auth, googleProvider);
		navigate('/home');
	} catch (error) {
		console.error(error);
	}
};

export { googleSignInService };
