/**
 * @typedef {import("../../types").RoutingMode} RoutingMode
 */

// see https://pastebin.com/qZ9WS3Cx
const routingModes = {
	OFF: /** @type {RoutingMode} */('OFF'),
	INFOS: /** @type {RoutingMode} */('INFOS'),
	FULL: /** @type {RoutingMode} */('FULL'),
	REALTIME: /** @type {RoutingMode} */('REALTIME'),
	SERVER_DEFAULT: /** @type {RoutingMode} */('SERVER_DEFAULT'),
	HYBRID: /** @type {RoutingMode} */('HYBRID'),
};

export {
	routingModes,
};
