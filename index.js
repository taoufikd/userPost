import express from "express";
import bodyParser from 'body-parser'

import { graphqlExpress, graphiqlExpress } from "graphql-server-express";

import { schema } from "./src/schema";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(
  "/graphql",
  bodyParser.json(),
  graphqlExpress({
    schema,
    
  })
);

app.use(
  "/graphiql",
  graphiqlExpress({
    endpointURL: "/graphql"
  })
);
app.listen(PORT, () => console.log("connecting on  port :" + PORT));
