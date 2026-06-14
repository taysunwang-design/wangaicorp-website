"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Navbar from "../../components/Navbar";

export default function VerifyLoginPage() {
  const router = useRouter();
  const params = useParams();
  const locale = params.locale || "en";

  const [code, setCode] = useState("");
  const [maskedEmail, setMaskedEmail] = useState("");

  useEffect(() => {
    const pendingUser = sessionStorage.getItem("wangcorp_pending_user");

    if (!pendingUser) {
      router.push(`/${locale}/login`);
      return;
    }

    const parsed = JSON.parse(pendingUser);
    setMaskedEmail(parsed.verifiedEmail || "");
  }, [router, locale]);

  function handleVerify(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const expectedCode = sessionStorage.getItem("wangcorp_sms_code");
    const pendingUser = sessionStorage.getItem("wangcorp_pending_user");

    if (!pendingUser) {
      router.push(`/${locale}/login`);
      return;
    }

    if (code !== expectedCode) {
      alert("Incorrect verification code.");
      return;
    }

    const parsed = JSON.parse(pendingUser);

    // Prototype session.
    // Later this must become a secure server-side session cookie.
    localStorage.setItem("wangcorp_user", JSON.stringify(parsed.user));

    sessionStorage.removeItem("wangcorp_pending_user");
    sessionStorage.removeItem("wangcorp_sms_code");

    router.push(`/${locale}/office`);
  }

  return (
    <>
      <Navbar />

      <main className="platform-page">
        <section className="platform-hero">
          <p className="platform-label">SECURITY VERIFICATION</p>

          <h1 className="platform-title">Enter Verification Code</h1>

          <p className="platform-description">
            A verification code is required before entering the Wang Corp Office.
          </p>
        </section>

        <section className="platform-grid office-login-grid">
          <div className="platform-card office-login-card">
            <h3>SMS Verification</h3>

            <p className="office-login-note">
              Prototype mode: use verification code <strong>260626</strong>.
              Later this code will be sent to the registered personnel phone
              number.
            </p>

            {maskedEmail && (
              <p className="office-login-note">
                Verifying personnel email: <strong>{maskedEmail}</strong>
              </p>
            )}

            <form onSubmit={handleVerify} className="office-login-form">
              <label>
                <span>6-digit verification code</span>
                <input
                  type="text"
                  value={code}
                  onChange={(event) => setCode(event.target.value)}
                  placeholder="Enter code"
                  maxLength={6}
                  required
                />
              </label>

              <button type="submit">Enter Office</button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}