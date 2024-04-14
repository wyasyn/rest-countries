import type { Metadata } from "next";
import "./globals.css";

import { Nunito_Sans as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import Search from "@/components/Search";

const fontSans = FontSans({
    weight: ["300", "600", "800"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-sans",
});

export const metadata: Metadata = {
    title: "Rest Countries",
    description:
        "Your challenge is to integrate with the [REST Countries API](https://restcountries.com) to pull country data and display it like in the designs.",
    icons: {
        icon: "/assets/fav.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    " min-h-dvh font-sans antialiased",
                    fontSans.variable
                )}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Header />
                    <Search />
                    <div className=" my-[5rem] md:my-[7rem] ">{children}</div>
                </ThemeProvider>
            </body>
        </html>
    );
}
