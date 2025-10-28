import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
	NODE_ENV: z
		.enum(["development", "production", "test"])
		.default("development"),
	DATABASE_URL: z.string(),
	PORT: z.coerce.number().default(3333),
	HOST: z.string().default("0.0.0.0"),
});

export const env = envSchema.parse(process.env);
