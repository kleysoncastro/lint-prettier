import Fastify from "fastify";

const fastify = Fastify({
	logger: true,
});

// Declare a route
fastify.get("/", (request, reply) => {
	reply.send({ hello: "word" });
});

// Run the server!
fastify.listen({ port: 3000 }, (err) => {
	if (err) throw err;
	// Server is now listening on ${address}
});
