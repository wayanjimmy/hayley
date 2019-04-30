import React from 'react'

function Login() {
  return (
    <div className="p-6 bg-indigo-darker min-h-screen flex justify-center items-center">
      <div className="w-full max-w-sm">
        <form className="mt-8 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-10 py-12">
            <h1 className="text-center font-bold text-3xl">Welcome Back</h1>
            <div className="mx-auto mt-6 w-24 border-b-2" />
          </div>
          <div className="px-10 py-4 bg-grey-lightest border-t border-grey-lighter flex justify-between items-center">
            <a className="hover:underline" tabIndex={1}>
              Forget Password
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
