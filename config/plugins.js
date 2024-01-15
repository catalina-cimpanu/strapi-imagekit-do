module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "strapi-provider-upload-imagekit", // Community providers need to have the full package name
      providerOptions: {
        publicKey: "publicKey",
        privateKey: "privateKey",
        urlEndpoint: "urlEndPoint", // Example: https://ik.imagekit.io/username

        // Optional
        params: {
          folder: "/production/images", // Defaults to "/" if value is not supplied
        },
      },
    },
  },
});
