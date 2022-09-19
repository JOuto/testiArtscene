

module.exports =  {
 
    transformer: {
      babelTransformerPath: require.resolve("react-native-css-transformer"),
    },
    resolver: {
      sourceExts: ['jsx','js', 'json', 'ts', 'tsx', "css"],
    },
  };
