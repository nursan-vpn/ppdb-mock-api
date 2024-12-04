import express, { IRouter, json, urlencoded} from "express";
import { RegisterRoutes } from "../build/routes";
import cors from "cors";
import proxy from "express-http-proxy";

export const app = express();

/**
 * Proxy all request to backend.portalsiswa.id except the one that registered
 */
app.use(proxy("https://backend.portalsiswa.id",{
  filter(req, res) {
    const isRegistred = (app._router as IRouter).stack.filter(layer => {
       return layer.name === "bound dispatch"
    }).some((layer) => {
      return layer.regexp.test(req.path)
    })

    if (isRegistred) {
      console.log(req.path,"Request is mocked")
      return false;
    }
    console.log(req.path,"Request is proxied")
    return true;
  },
  proxyReqPathResolver(req) {
    const rewriteUrl = req.url.startsWith("/api") ? req.url : "/api" + req.url;
    return rewriteUrl
  },
}))

app.use(cors())

// Use body parser to read sent json payloads
app.use(
  urlencoded({
    extended: true,
  })
);

app.use(json());

RegisterRoutes(app);