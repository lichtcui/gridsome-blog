// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
	siteName: "Blog",
	siteDescription: "Gridsome blog",
	plugins: [
		{
			use: "@gridsome/source-strapi",
			options: {
				apiURL: "http://localhost:1337",
				queryLimit: 1000, // Defaults to 100
				contentTypes: ["blog", "follower", "following"],
				// singleTypes: ["impressum"],
				// Possibility to login with a Strapi user,
				// when content types are not publicly available (optional).
				// loginData: {
				// 	identifier: "",
				// 	password: "",
				// },
			},
		},
	],
}
