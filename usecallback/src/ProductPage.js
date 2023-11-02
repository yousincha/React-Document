// 예제1.
// import { useCallback } from "react";
// import ShippingForm from "./ShippingForm.js";

// export default function ProductPage({ productId, referrer, theme }) {
//   const handleSubmit = useCallback(
//     (orderDetails) => {
//       post("/product/" + productId + "/buy", {
//         referrer,
//         orderDetails,
//       });
//     },
//     [productId, referrer]
//   );

//   return (
//     <div className={theme}>
//       <ShippingForm onSubmit={handleSubmit} />
//     </div>
//   );
// }

// function post(url, data) {
//   // Imagine this sends a request...
//   console.log("POST /" + url);
//   console.log(data);
// }

// 예제2.
import ShippingForm from "./ShippingForm.js";

export default function ProductPage({ productId, referrer, theme }) {
  function handleSubmit(orderDetails) {
    post("/product/" + productId + "/buy", {
      referrer,
      orderDetails,
    });
  }

  return (
    <div className={theme}>
      <ShippingForm onSubmit={handleSubmit} />
    </div>
  );
}

function post(url, data) {
  // Imagine this sends a request...
  console.log("POST /" + url);
  console.log(data);
}
