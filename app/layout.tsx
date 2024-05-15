import { RootProvider } from "fumadocs-ui/provider";
import "fumadocs-ui/style.css";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { DocsLayout } from "fumadocs-ui/layout";
import { pageTree } from "./source";
import Image from "next/image";

const inter = Inter({
	subsets: ["latin"],
});

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" className={inter.className}>
			<body>
				<RootProvider>
					<DocsLayout tree={pageTree} nav={{ title: <Image src={'/austere-logo-rectangle.svg'} alt="logo" width={140} height={38} /> }}>
						{children}
					</DocsLayout>
				</RootProvider>
			</body>
		</html>
	);
}
