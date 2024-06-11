import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const Login = () => {
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    const form = e.target;
    const identifier = form.identifier.value;
    const password = form.password.value;

    setError(null);
    form.reset();
    try {
      const response = await axios.post("http://localhost:1337/graphql", {
        query: `
          mutation {
            login(input: {
              identifier: "${identifier}"
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

      if (!data || !data.login) {
        throw new Error("Unexpected response structure");
      }

      const { jwt, user } = data.login;
      Cookies.set("jwt", jwt, { expires: 7 });
      console.log("Logged in user:", user);
      console.log("JWT token:", jwt);
    } catch (err) {
      console.error("Error during login:", err);

      if (err.response) {
        setError(err.response.data.message || "An error occurred");
      } else if (err.request) {
        setError("No response received from the server");
      } else {
        setError(err.message);
      }
    }
  };

  return (
    <div className="h-screen p-8 mt-8">
      <h2 className="text-white text-6xl font-bold mb-12">Login</h2>
      {error && <p className="mb-8 text-white text-lg">{error}</p>}
      <form onSubmit={handleLogin}>
        <div>
          <label className="text-white">Email or Username:</label>
          <input
            className="input input-bordered w-full"
            type="text"
            name="identifier"
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
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
