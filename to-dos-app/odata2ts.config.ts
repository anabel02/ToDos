import { ConfigFileOptions, Modes } from "@odata2ts/odata2ts";

const config: ConfigFileOptions = {
  mode: Modes.service,
  allowRenaming: true,
  services: {
    trippin: {
      source: "resource/trippin.xml",
      output: "src/build/trippin",
    }
  }
}

export default config;