exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Only POST requests are allowed." }),
    };
  }

  try {
    const { name } = JSON.parse(event.body);

    const userName = name || "no name";

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: `Thank you for your interest, ${userName}.`,
      }),
    };
  } catch (err) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Invalid JSON format." }),
    };
  }
};
