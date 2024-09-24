import { createTheme } from "@rneui/themed";

const theme = createTheme({
  components: {
    Text: {
      h1Style: {
        fontFamily: "Inter_700Bold",
        fontSize: 40,
      },
      h2Style: {
        fontFamily: "Inter_500Medium",
        fontSize: 32,
      },
      style: {
        fontFamily: "Inter_400Regular",
        fontSize: 18,
      },
    },
  },
});

export default theme;
