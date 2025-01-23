import { createRouterTRPC, publicProcedure } from "../trpc";

export const chatRouterTRPC = createRouterTRPC({
	get: {
		sessionID: publicProcedure.query(async ({ ctx }) => {
			return ctx.sessionID;
		}),
		messageID: publicProcedure.query(async ({ ctx, input }) => {
			return await getMessageID(input);
		}),
		message: publicProcedure.query(async ({ ctx, input }) => {
			return await getMessageHistory(input);
		}),
	},
	post: {
		sessionID: publicProcedure.input(async ({ ctx, input }) => {
			const newSessionID = await createSessionID(input);
			return newSessionID;
		}),
		messageID: publicProcedure.query(async ({ ctx, input }) => {
			return await getMessageID(input);
		}),
		message: publicProcedure.query(async ({ ctx, input }) => {
			return await getMessageHistory(input);
		}),
	},
});

export type ChatRouterTRPC = typeof chatRouterTRPC;
