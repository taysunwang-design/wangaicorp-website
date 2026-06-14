"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Navbar from "../components/Navbar";
import { findPersonnelByEmail } from "../../lib/personnel";

export default function LoginPage() {
  const router = useRouter();
  const params = useParams();
  const locale = params.locale || "en";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const user = findPersonnelByEmail(email);

    if (!user) {
      alert("Access denied. This email is not registered as Wang Corp personnel.");
      return;
    }

    // Temporary prototype password.
    // Later this must be replaced with hashed passwords and server-side authentication.
    if (password !== "wangcorp2026") {
      alert("Incorrect password.");
      return;
    }

    // Step 1 passed. Store temporary verification data.
    // This is only for prototype testing.
    sessionStorage.setItem(
      "wangcorp_pending_user",
      JSON.stringify({
        user,
        verifiedEmail: user.email,
        createdAt: new Date().toISOString()
      })
    );

    // Prototype SMS code.
    // Later this code will be generated server-side and sent by SMS.
    sessionStorage.setItem("wangcorp_sms_code", "260626");

    router.push(`/${locale}/login/verify`);
  }

  return (
    <>
      <Navbar />

      <main className="platform-page">
        <section className="platform-hero">
          <p className="platform-label">PERSONNEL ACCESS</p>

          <h1 className="platform-title">WANG CORP. Office Login</h1>

          <p className="platform-description">
            Authorized personnel access only. Please sign in with your Wang Corp
            email address.
          </p>
        </section>

        <section className="platform-grid office-login-grid">
          <div className="platform-card office-login-card">
            <h3>Personnel Login</h3>

            <form onSubmit={handleLogin} className="office-login-form">
              <label>
                <span>Wang Corp Email</span>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="name@wangaicorp.com"
                  required
                />
              </label>

              <label>
                <span>Password</span>
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Enter password"
                  required
                />
              </label>

              <button type="submit">Continue</button>
            </form>

            <p className="office-login-note">
              Security step 1 of 2. SMS verification is required after password
              confirmation.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}