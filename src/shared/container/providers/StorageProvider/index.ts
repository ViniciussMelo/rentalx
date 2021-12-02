import "dotenv/config";
import { container } from "tsyringe";

import { S3StorageProvider } from "./implementations/S3StorageProvider";
import { LocalStorageProvider } from "./in-memory/LocalStorageProvider";
import { IStorageProvider } from "./IStorageProvider";

const diskStorage = {
  local: LocalStorageProvider,
  s3: S3StorageProvider,
};

container.registerSingleton<IStorageProvider>(
  "StorageProvider",
  diskStorage[process.env.disk]
);
