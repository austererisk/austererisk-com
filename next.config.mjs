import createMDX from "fumadocs-mdx/config";

const withMDX = createMDX({
	mdxOptions: {
		lastModifiedTime: "git",
	},
});

/** @type {import('next').NextConfig} */
const config = {
	reactStrictMode: true,
	experimental: {
		mdxRs: true,
	  },
};

export default withMDX(config);
