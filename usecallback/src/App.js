// // useCallback VS 직접 함수를 선언
// // 예제1. useCallback과 memo로 리렌더링 건너뛰기

// import { useState } from "react";
// import ProductPage from "./ProductPage.js";

// export default function App() {
//   const [isDark, setIsDark] = useState(false);
//   return (
//     <>
//       <label>
//         <input
//           type="checkbox"
//           checked={isDark}
//           onChange={(e) => setIsDark(e.target.checked)}
//         />
//         Dark mode
//       </label>
//       <hr />
//       <ProductPage
//         referrerId="wizard_of_oz"
//         productId={123}
//         theme={isDark ? "dark" : "light"}
//       />
//     </>
//   );
// }

// 예제2. 항상 리렌더링되는 컴포넌트
import { useState } from "react";
import ProductPage from "./ProductPage.js";

export default function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={(e) => setIsDark(e.target.checked)}
        />
        Dark mode
      </label>
      <hr />
      <ProductPage
        referrerId="wizard_of_oz"
        productId={123}
        theme={isDark ? "dark" : "light"}
      />
    </>
  );
}
