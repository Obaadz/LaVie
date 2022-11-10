import Link from "next/link";
import React from "react";

const SignInLink = () => {
  return (
    <div className="form-text text-center">
      Already have an account?{" "}
      <Link href="/login" className="text-decoration-none">
        Sign in
      </Link>
    </div>
  );
};

export default SignInLink;
