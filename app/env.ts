import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    GITHUB_TOKEN: z.string().startsWith("ghp_"),
    RESEND_API_KEY: z.string().min(1),
    NODE_ENV: z.enum(["development", "production", "test"]),
  },
  experimental__runtimeEnv: {},
});
