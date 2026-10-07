import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.dominussafer.app",
  appName: "Dominus Safer",
  webDir: "www",
  server: {
    url: "https://dominuspainel.discloud.app",
    cleartext: false,
    allowNavigation: [
      "dominuspainel.discloud.app",
      "*.discloud.app",
      "dominussafer.com",
      "*.dominussafer.com",
      "discord.com",
      "*.discord.com",
      "discordapp.com",
      "*.discordapp.com",
      "cdn.discordapp.com",
    ],
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 0,
      launchAutoHide: false,
      backgroundColor: "#0b0b12",
      showSpinner: false,
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP",
    },
    StatusBar: {
      style: "DARK",
      backgroundColor: "#0b0b12",
    },
  },
  android: {
    allowMixedContent: false,
    backgroundColor: "#0b0b12",
  },
};

export default config;
