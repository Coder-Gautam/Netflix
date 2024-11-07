import React from "react";
import "../LoginPage/LoginPage.css";
import { Link } from "react-router-dom";
function LoginPage() {
  return (
    <div className="login-page">
      <div className="login-page-con bg-color">
        <div className="logo-of-netflix">
          <Link to="/">
            <span className="netflix-logo">
              <svg
                viewBox="0 0 111 30"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="default-ltr-cache-1d568uk ev1dnif2"
              >
                <g>
                  <path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"></path>
                </g>
              </svg>
            </span>
          </Link>
        </div>
        <div className="flex items-center justify-center h-full">
          <div className="w-full max-w-md p-8 bg-gray-900 rounded-lg shadow-lg text-white login-main-container">
            <h2 className="text-3xl font-bold mb-6 text-center">Sign In</h2>
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Email or mobile number"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-red-600 hover:bg-red-700 rounded font-semibold text-white transition duration-300"
              >
                Sign In
              </button>
              <div className="text-center my-4 text-gray-500">OR</div>
              <button
                type="button"
                className="w-full py-2 bg-gray-700 hover:bg-gray-600 rounded font-semibold text-white transition duration-300"
              >
                Use a sign-in code
              </button>
              <div className="flex justify-between items-center mt-4 text-sm">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    className="form-checkbox h-4 w-4 text-red-600 bg-gray-800 border-gray-700 rounded"
                  />
                  <label htmlFor="remember" className="ml-2 text-gray-500">
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-gray-500 hover:underline">
                  Forgot password?
                </a>
              </div>
              <div className="text-center mt-6 text-sm text-gray-500">
                New to Netflix?{" "}
                <Link
                  to="/signup"
                  className="text-white hover:underline font-semibold"
                >
                  Sign up now.
                </Link>
              </div>
              <p className="mt-4 text-xs text-gray-500 text-center">
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot.{" "}
                <a href="/learn-more" className="text-blue-500 hover:underline">
                  Learn more.
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;