import * as express from "express";


export function expressAuthentication(
  request: express.Request,
  securityName: string,
  scopes?: string[]
): Promise<any> {
    return new Promise((resolve, reject) => {resolve(null)});
}