const Signup = () => {
    return (
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-16 bg-gray-50">
        {/* Left Section (Image) */}
        <div className="flex justify-center items-center">
          <img
            src="/images/shopping-cart.png"
            alt="Shopping Cart"
            className="max-w-full h-auto"
          />
        </div>
  
        {/* Right Section (Form) */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Create an account</h2>
          <p className="text-gray-600 mb-6">Enter your details below</p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border rounded px-4 py-2 text-gray-600 focus:ring-2 focus:ring-red-500"
            />
            <input
              type="email"
              placeholder="Email or Phone Number"
              className="w-full border rounded px-4 py-2 text-gray-600 focus:ring-2 focus:ring-red-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border rounded px-4 py-2 text-gray-600 focus:ring-2 focus:ring-red-500"
            />
            <button className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition">
              Create Account
            </button>
            <button className="w-full border py-2 rounded flex items-center justify-center hover:bg-gray-100">
              <img src="/images/google-icon.png" alt="Google" className="w-5 h-5 mr-2" />
              Sign up with Google
            </button>
          </form>
          <p className="mt-4 text-sm text-gray-600 text-center">
            Already have an account?{' '}
            <a href="#" className="text-red-500 hover:underline">Log in</a>
          </p>
        </div>
      </section>
    );
  };
  
  export default Signup;
  