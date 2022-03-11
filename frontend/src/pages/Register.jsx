import { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password2: "",
  });

  const { email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      alert("Passwords do not match");
    }
  };

  return (
    <>
      <section className="heading">
        <h1>Register</h1>
        <p>Please create an account</p>
      </section>

      <section className="form">
        <form action="" onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={onChange}
              name="email"
              placeholder="Enter your email address"
              autoComplete="false"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={onChange}
              name="password"
              placeholder="Enter your password"
              autoComplete="false"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              className="form-control"
              value={password2}
              onChange={onChange}
              name="password2"
              placeholder="Enter your password again"
              autoComplete="false"
              required
            />
          </div>

          <div className="form-group">
            <button className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Register;
