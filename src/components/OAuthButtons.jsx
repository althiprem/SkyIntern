import React, { useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import { auth } from "../firebase";

const OAuthButtons = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    /* 🧠 Initialize Google One Tap */
    window.google?.accounts.id.initialize({
      client_id: "YOUR_GOOGLE_CLIENT_ID", // 👈 Replace this!
      callback: handleCredentialResponse,
      auto_select: true,
    });

    /* 🎯 Render Branded Button */
    window.google?.accounts.id.renderButton(
      document.getElementById("google-btn"),
      {
        type: "standard",
        theme: "outline",
        size: "large",
        text: "continue_with",
        shape: "pill",
      }
    );

    /* 📣 Trigger One Tap if eligible */
    window.google?.accounts.id.prompt();
  }, []);

  const handleCredentialResponse = async (response) => {
    try {
      const credential = GoogleAuthProvider.credential(response.credential);
      const result = await signInWithCredential(auth, credential);
      const { displayName, email, photoURL } = result.user;
      setUserData({ displayName, email, photoURL });
      console.log("Logged in as:", email);
    } catch (error) {
      console.error("Google One Tap error:", error.message);
    }
  };

  const handleSignOut = async () => {
    await auth.signOut();
    setUserData(null);
  };

  return (
    <div style={styles.container}>
      {!userData ? (
        <div id="google-btn" style={{ marginBottom: "1rem" }}></div>
      ) : (
        <div style={styles.userCard}>
          <img src={userData.photoURL} alt="Profile" style={styles.avatar} />
          <div>
            <strong>{userData.displayName}</strong>
            <div>{userData.email}</div>
            <button onClick={handleSignOut} style={styles.signOut}>
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
    marginTop: "1rem",
  },
  userCard: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    backgroundColor: "#f7f7f7",
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "10px 14px",
    width: "280px",
    textAlign: "left",
  },
  avatar: {
    width: "38px",
    height: "38px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  signOut: {
    marginTop: "6px",
    background: "none",
    border: "none",
    color: "#4285F4",
    fontSize: "0.85rem",
    cursor: "pointer",
  },
};

export default OAuthButtons;
