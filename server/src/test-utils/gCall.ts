import { graphql, GraphQLSchema } from 'graphql';
import Schema from '../graphql/schemas';
import { Maybe } from 'graphql/jsutils/Maybe';

interface Options {
  source: string;
  variableValues?: Maybe<{
    [key: string]: any;
  }>;
}

let schema: GraphQLSchema;

export const gCall = async ({ source, variableValues }: Options) => {
  if (!schema) {
    schema = await Schema();
  }
  return graphql({
    schema,
    source,
    variableValues,
  });
};
