import { Html } from "@react-three/drei";
import React from "react";

function Loader() {
  return (
    <Html>
      <div class="cell">
        <div class="card">
          <span class="flower-loader">Loading…</span>
        </div>
      </div>
    </Html>
  );
}

export default Loader;
