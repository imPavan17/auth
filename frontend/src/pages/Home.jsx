import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Home() {
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      <section className="heading">
        <h1>Welcome to Support Desk</h1>
        {user ? (
          <>
            <p>Hello {user.email}</p>
            <Link to="/inbox">Inbox</Link>
            <br />
            <Link to="/profile">Profile</Link>
          </>
        ) : (
          <p>Please login</p>
        )}
      </section>
    </>
  );
}

export default Home;
