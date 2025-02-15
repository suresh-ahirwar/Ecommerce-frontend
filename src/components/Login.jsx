function Login({openSignUp}) {
    return (
        <div>
           <h2 className="text-2xl font-bold mb-4">Login</h2>
           <form>
               <div className="mb-4">
                 <label className="block text-gray-700">Email</label>
                 <input type="email" className="w-full px-3 py-2 border border-gray-400 md:shadow" placeholder="Enter Email"/>
               </div>

               <div className="mb-4">
                 <label className="block text-gray-700">Password</label>
                 <input type="password" className="w-full px-3 py-2 border border-gray-400 md:shadow" placeholder="Enter Password"/>
               </div>

               <div className="mb-4 flex items-center justify-between">
                <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox"/>
                    <span className="ml-2 text-gray-700">Remember Me</span>
                </label>
                   <a href="#" className="text-red-800">Forget Password?</a>
               </div>

               <div className="mb-4">
                <button type="submit" className="w-full bg-red-600 text-white py-2">Login</button>
               </div>
           </form>

           <div className="text-center">
            <span className="text-gray-700">Don&#39;t Have an Account?</span>
            <button className="text-red-800 ml-1" onClick={openSignUp}>Sign Up</button>
           </div>
        </div>
    )
}

export default Login

