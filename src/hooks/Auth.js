import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { message } from "antd";
import { setDoc, doc } from "firebase/firestore";
import { auth, db } from "lib/Firebase";
import { FEED, LOGIN } from "lib/Routes";
import { useState } from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

export function useAuth() {
  const [authUser, isLoading, error] = useAuthState(auth);
  return { user: authUser, isLoading: isLoading, error };
}

// login
export function useLogin() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);

  async function login({ name, email, password, redirectTo = FEED }) {
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      message.success("Login Success!", 2.5);
      navigate(redirectTo);
    } catch (error) {
      message.error(error.message, 2.5);
      setLoading(false);
      return false;
    }

    setLoading(false);
    return true;
  }

  return { login, isLoading };
}

// signup
export function useSignup() {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  async function signup({ fullname, email, password, redirectTo = FEED }) {
    setLoading(true);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      await setDoc(doc(db, "users", res.user.uid), {
        id: res.user.uid,
        fullname: fullname,
        avatar: "",
        date: Date.now(),
      });

      message.success("Account created!", 2.5);

      navigate(redirectTo);
    } catch (error) {
      message.error(error.message, 2.5);
    } finally {
      setLoading(false);
    }
    setLoading(false);
  }
  return { signup, isLoading };
}

// logout
export function useLogout() {
  const [signOut, isLoading, error] = useSignOut(auth);
  const navigate = useNavigate();

  async function logout() {
    if (await signOut()) {
      message.warning("You are logged out", 2);
      navigate(LOGIN);
    } // else show error - logout failed
  }
  return { logout, isLoading };
}
