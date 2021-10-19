import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, GithubAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../components/Shared/Login/firebase/Firebase.init";


// firebase initialize call
initializeFirebase();

const useFirebase = () => {
    const [name, setName] = useState("");
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const auth = getAuth();
    // handle google provider
    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                setError('');
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false));
    }

    // handle github provider
    const signInUsingGitHub = () => {
        setIsLoading(true);
        const gitHubProvider = new GithubAuthProvider();
        signInWithPopup(auth, gitHubProvider)
            .then(result => {
                setUser(result.user);
                setError('');
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false));
    }

    // create name,  email and password handle

    const nameChange = (e) => {
        setName(e.target.value);
    }

    const emailChange = (e) => {
        setEmail(e.target.value)
    };

    const passwordChange = (e) => {

        if (e.target.value.length < 6) {
            setError("Password  At least Must be 6 character")
        }
        else {
            setPassword(e.target.value)
            setError('');
        }
    }

    // update name 
    const setUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
            setError('');
        })
            .catch(error => {
                setError(error.message);
            })
    }

    // signup account handle
    const signUpUsingEmail = (e) => {
        setIsLoading(true);
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                setError('');
                verifyEmail();
                setUserName();
            })
            .catch(error => {
                setError(error.message);
            })
    }

    // sign in email and password
    const loginEmailPassword = (e) => {
        setIsLoading(true);
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                setError('');

            })
            .finally(() => setIsLoading(false))
            .catch((error) => {
                setError(error.message);
            });
    }

    // verify email
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }

    // Password reset
    const passwordReset = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })

    }

    //observed user state change 
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false))
    }

    return {
        user,
        logOut,
        signInUsingGoogle,
        isLoading,
        signInUsingGitHub,
        emailChange,
        nameChange,
        passwordChange,
        signUpUsingEmail,
        loginEmailPassword,
        passwordReset,
        error
    }
}

export default useFirebase;