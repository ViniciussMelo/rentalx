import { container } from "tsyringe";

import { LocalStorageProvider } from "./in-memory/LocalStorageProvider";
import { IStorageProvider } from "./IStorageProvider";

container.registerSingleton<IStorageProvider>(
  "StorageProvider",
  LocalStorageProvider
);
