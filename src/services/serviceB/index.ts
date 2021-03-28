import { core } from "src/features/core";
import { counter } from "src/features/counter";
import { Service } from "src/services";

export const service: Service = {
  name: "B",
  features: [core, counter],
};
