import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider, Show, SignIn } from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CerebroAI",
  description:
    "CerebroAI is an AI-powered study companion that helps computer science students understand complex topics, generate quizzes, create flashcards, and practice exam questions instantly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <ClerkProvider>
          <Show when={"signed-out"}>
            <div className="mt-auto flex justify-center items-center h-full py-[24px]">
              <SignIn
                fallbackRedirectUrl="/dashboard"
                signUpFallbackRedirectUrl="/dashboard"
              />
            </div>
          </Show>
          <Show when="signed-in">{children}</Show>
        </ClerkProvider>
      </body>
    </html>
  );
}
