import React from "react";
import { checkToken } from "../../utilities/users-service";

function OrderHistoryPage() {
  async function handleClick() {
    const expDate = await checkToken();
    console.log(expDate);
  }
  return (
    <>
      <h1>OrderHistoryPage</h1>;<button onClick={handleClick}>Click Me</button>
    </>
  );
}

export default OrderHistoryPage;
