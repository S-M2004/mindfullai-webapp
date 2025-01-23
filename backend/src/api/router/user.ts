import { createRouterTRPC, publicProcedure } from "../trpc";
export const userRouterTRPC = createRouterTRPC({
	// get: {},
	// post: {},
	// update: {},
});
export type UserRouterTRPC = typeof userRouterTRPC;
