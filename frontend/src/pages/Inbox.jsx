import { useEffect } from "react";

function Inbox() {
  useEffect(() => {
    console.log("INBOX");
  }, []);

  return <div>Inbox</div>;
}

export default Inbox;
