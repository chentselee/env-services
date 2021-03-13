import { Service } from "src/services";
import { core } from "src/features/core";
import { counter } from "src/features/counter";

export const service: Service = {
  name: "B",
  features: [core, counter],
};
