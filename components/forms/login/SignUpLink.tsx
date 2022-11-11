import Link from "next/link";

const SignUpLink = () => {
  return (
    <div className="form-text text-center">
      Don{"'"}t have an account?{" "}
      <Link href="/signup" className="text-decoration-none">
        Sign up
      </Link>
    </div>
  );
};

export default SignUpLink;
