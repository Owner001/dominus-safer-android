import { mkdirSync } from "fs";
import { join } from "path";
mkdirSync(join(process.cwd(), "www"), { recursive: true });
console.log("[prepare-web] www/ pronto");
