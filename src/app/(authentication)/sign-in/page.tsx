import Link from "next/link";
import {
  EmailPassword,
  AuthenticationSection,
  GoogleButton,
} from "../_components";

export default function SignIn() {
  return (
    <main
      className="
        flex
        flex-col
        gap-y-12
      "
    >
      <div
        className="
          flex
          flex-col
          gap-y-3
        "
      >
        <h1
          className="
            text-3xl
            text-gray-1000
            font-medium
          "
        >
          Sign up and make your{" "}
          <span
            className="
              text-yellow-orange-400
            "
          >
            launch exciting
          </span>
        </h1>
        <h3
          className="
            text-xl
            text-gray-600
          "
        >
          A corporate identification number is a two digit alpha numeric code
          issued to companies incorporated in India
        </h3>
      </div>
      <AuthenticationSection
        className="
          flex
          flex-col
          gap-y-8
        "
      >
        <EmailPassword isLogin={false} />
        <span
          className="
            w-full
            flex
            items-center
            justify-center
            gap-x-4
            before:w-full
            after:w-full
            before:h-[1px]
            after:h-[1px]
            after:bg-gray-300
            before:bg-gray-300
            text-gray-300
          "
        >
          or
        </span>
        <GoogleButton />
        <div
          className="
            flex
            items-center
            justify-center
          "
        >
          <p
            className="
              text-gray-600
            "
          >
            New here?{" "}
            <Link
              className="
                text-yellow-orange-400
                font-medium
              "
              href={`/sign-up`}
            >
              Sign up
            </Link>
          </p>
        </div>
      </AuthenticationSection>
    </main>
  );
}
