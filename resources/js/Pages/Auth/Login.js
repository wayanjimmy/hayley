import React from 'react'
import { Formik } from 'formik'

import Logo from '@/Shared/Logo'
import LoadingButton from '@/Shared/LoadingButton'
import TextInput from '@/Shared/TextInput'

function Login() {
  return (
    <div className="p-6 bg-indigo-darker min-h-screen flex justify-center items-center">
      <div className="w-full max-w-sm">
        <Logo />
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(values, actions) => {
            console.log({ values })
          }}
          render={({ values, handleChange, isSubmitting }) => (
            <form className="mt-8 bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-10 py-12">
                <h1 className="text-center font-bold text-3xl">Welcome Back</h1>
                <div className="mx-auto mt-6 w-24 border-b-2" />
                <TextInput
                  name="email"
                  className="mt-10"
                  label="Email"
                  type="email"
                  autoFocus
                  autoCapitalize="off"
                  value={values.email}
                  onChange={handleChange}
                  required
                />
                <TextInput
                  name="password"
                  className="mt-6"
                  label="Password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                />
              </div>
              <div className="px-10 py-4 bg-grey-lightest border-t border-grey-lighter flex justify-between items-center">
                <a href="/" className="hover:underline" tabIndex={1}>
                  Forget Password
                </a>
                <LoadingButton
                  loading={isSubmitting}
                  className="btn-indigo"
                  type="submit"
                >
                  Login
                </LoadingButton>
              </div>
            </form>
          )}
        />
      </div>
    </div>
  )
}

export default Login
