import { createServer, IncomingMessage, ServerResponse } from "node:http";
import { pageBasedRouting } from "../util/pageBasedRouting";
import { authRouterHTTP } from "./router/auth";

let appRouterHTTP: {
	[key: string]: (req: IncomingMessage, res: ServerResponse) => void;
} = {};

const router = pageBasedRouting("../frontend/pages");

router.forEach((routes) => {
	const route = routes.route;
	const html = routes.html;

	appRouterHTTP[route] = (req: IncomingMessage, res: ServerResponse) => {
		res.writeHead(200, { "Content-Type": "text/html" });
		res.write(html);
		res.end();
	};
});

appRouterHTTP = {
	...appRouterHTTP,
	...authRouterHTTP,
};

console.log(appRouterHTTP);

export const serverHTTP = createServer(
	(req: IncomingMessage, res: ServerResponse) => {
		if (typeof req.url === "string") {
			const pathName: string = req.url;
			const handler = appRouterHTTP[pathName];

			if (handler) {
				handler(req, res);
			} else {
				res.statusCode = 404;
				res.write("<h1>404 Not Found</h1>");
				res.end();
			}
		} else {
			res.statusCode = 400;
			res.write("<h1>400 Bad Request</h1>");
			res.end();
		}
	},
);
export type RouterHTTP = typeof appRouterHTTP;
