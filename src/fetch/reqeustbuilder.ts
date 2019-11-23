import { pipe, map, join, concat, toPairs } from 'ramda'

export const createQueryStringFromObj = pipe(toPairs, map(join("=")),join("&"), encodeURI, concat("?"));


