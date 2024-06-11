import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const Register = () => {
  const [error, setError] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();

    const form = e.target;
    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;

    setError(null);
    form.reset();
    try {
      const response = await axios.post("http://localhost:1337/graphql", {
        query: `
          mutation {
            register(input: {
              username: "${username}"
              email: "${email}"
              password: "${password}"
            }) {
              jwt
              user {
                id
                username
                email
              }
            }
          }
        `,
      });

      console.log("GraphQL response:", response.data);

      const { data } = response.data;

      if (!data || !data.register) {
        throw new Error("Unexpected response structure");
      }

      const { jwt, user } = data.register;
      Cookies.set("jwt", jwt, { expires: 7 });
      console.log("Registered user:", user);
      console.log("JWT token:", jwt);
    } catch (err) {
      console.error("Error during registration:", err);

      if (err.response) {
        setError(err.response.data.message || "An error occurred");
      } else if (err.request) {
        setError("No response received from the server");
      } else {
        setError(err.message);
      }
    }
    form.reset();
  };

  return (
    <div className="h-screen p-8 mt-8">
      <h2 className="text-white text-6xl font-bold mb-12">Register</h2>
      {error && <p className="mb-8 text-white text-lg">{error}</p>}
      <form onSubmit={handleRegister}>
        <div>
          <label className="text-white">Username:</label>
          <input
            className="input input-bordered w-full"
            type="text"
            name="username"
            required
          />
        </div>
        <div>
          <label className="text-white">Email:</label>
          <input
            className="input input-bordered w-full"
            type="email"
            name="email"
            required
          />
        </div>
        <div>
          <label className="text-white">Password:</label>
          <input
            className="input input-bordered w-full"
            type="password"
            name="password"
            required
          />
        </div>
        <div className="w-96 mx-auto">
          <button
            type="submit"
            className="btn btn-primary font-bold text-lg mt-8 w-full"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
