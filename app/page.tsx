import { Show, SignIn } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <Show when={"signed-out"}>
        <div className="mt-auto flex justify-center items-center h-full py-[24px]">
          <SignIn
            fallbackRedirectUrl="/dashboard"
            signUpFallbackRedirectUrl="/dashboard"
          />
        </div>
      </Show>
    </>
  );
}
