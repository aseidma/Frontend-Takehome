import type { NextApiRequest, NextApiResponse } from 'next'
import Cors from 'cors'
import axios from 'axios';


// Initializing the cors middleware
// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
const cors = Cors({
  methods: ['POST', 'GET', 'HEAD'],
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await axios.post("https://api.example.com/endpoint", {
      key1: "value1", // link values of quiz app -- question 1
      key2: "value2", // -- question 2
      // add more data if needed
    });
    console.log(response.data);
    res.status(200).json(response.data);
  } catch (error) {
    if(error instanceof Error)
    console.log(error);
    if(error instanceof Error)
    res.status(error.response.status).json({ message: error.message });
  }
  // Run the middleware
  await runMiddleware(req, res, cors);

  // Rest of the API logic
  res.json({ message: "Hello Everyone!" });
}