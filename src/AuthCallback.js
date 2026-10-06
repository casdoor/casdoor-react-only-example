// Copyright 2023 The Casdoor Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { useEffect, useRef, useState } from "react";
import * as Setting from "./Setting";

export const AuthCallback = () => {
  const [error, setError] = useState("");
  // the code can be exchanged only once, and React runs effects twice in development (StrictMode)
  const exchanged = useRef(false);

  useEffect(() => {
    if (exchanged.current) {
      return;
    }
    exchanged.current = true;

    // checks the state, then exchanges the code for the tokens with the PKCE code verifier
    Setting.CasdoorSDK.exchangeForAccessToken()
      .then((res) => {
        if (!res?.access_token) {
          throw new Error("no access token");
        }
        Setting.setToken(res.access_token);
        Setting.goToLink("/");
      })
      .catch((e) => {
        setError(e?.error_description || e?.error || e?.message || String(e));
      });
  }, []);

  if (error) {
    return (
      <div style={{ marginTop: 200, textAlign: "center" }}>
        <p>Failed to sign in: {error}</p>
        <button onClick={() => Setting.goToLink("/")}>Back</button>
      </div>
    );
  }
  return <div>signing...</div>;
};
