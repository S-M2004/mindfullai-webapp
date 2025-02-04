import passport from "passport";
import { RouterHTTP } from "../http";
export const authRouterHTTP: RouterHTTP = {
	"auth/google": passport.authenticate("google", {
		scope: ["profile", "email"],
	}),
};
