module.exports = function (api) {
   api.cache(true);
   return {
      presets: ['babel-preset-expo'],
      plugins: [
         [
            "module-resolver",
            {
               alias: {
                  '@components': "./components",
                  '@functions': "./functions",
                  '@screens': "./screens",
                  '@constants': "./constants",
                  '@assets': "./assets",
                  '@wrapper': "./wrapper",
               },
            },
         ],
         'react-native-reanimated/plugin',
      ],
      env: {
         production: {
           plugins: ['react-ative-papern/babel'],
         },
      },
   };
};
