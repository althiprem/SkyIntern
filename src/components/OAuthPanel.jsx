import React, { useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-hot-toast";

const OAuthPanel = ({ onClose }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    window.google?.accounts.id.initialize({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      callback: handleCredentialResponse,
      auto_select: true,
    });

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

    window.google?.accounts.id.prompt();
  }, []);

  const handleCredentialResponse = async (response) => {
    try {
      const credential = GoogleAuthProvider.credential(response.credential);
      const result = await signInWithCredential(auth, credential);
      const { displayName, email, photoURL } = result.user;
      setUserData({ displayName, email, photoURL });
      toast.success(`Welcome, ${displayName}`);
      if (onClose) onClose();
    } catch (error) {
      toast.error("OAuth error: " + error.message);
    }
  };

  const handleSignOut = async () => {
    await auth.signOut();
    setUserData(null);
    toast("Signed out");
  };

  return (
    <div className="oauth-panel" style={styles.panel}>
      {!userData ? (
        <div id="google-btn"></div>
      ) : (
        <div style={styles.card}>
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
  panel: { marginTop: "1rem" },
  card: {
    display: "flex", alignItems: "center", gap: "0.75rem",
    backgroundColor: "#f1f1f1", padding: "10px 14px",
    borderRadius: "10px", width: "270px"
  },
  avatar: {
    width: "36px", height: "36px", borderRadius: "50%", objectFit: "cover"
  },
  signOut: {
    marginTop: "6px", background: "none", border: "none",
    color: "#0077B5", fontSize: "0.85rem", cursor: "pointer"
  }
};

export default OAuthPanel;
