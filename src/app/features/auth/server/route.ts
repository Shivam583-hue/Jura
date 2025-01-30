import { Hono } from "hono";
import { setCookie } from "hono/cookie";
import { zValidator } from "@hono/zod-validator";
import { loginSchema, signupSchema } from "../schemas";
import { createAdminClient } from "@/lib/appwrite";
import { ID } from "node-appwrite";
import { AUTH_COOKIE } from "../constants";
import { json } from "stream/consumers";

const app = new Hono()
  .post("/login", zValidator("json", loginSchema), (c) => {
    const { email, password } = c.req.valid("json");
    return c.json({ success: "ok" });
  })
  .post("/signup", zValidator("json", signupSchema), async (c) => {
    const { name, email, password } = c.req.valid("json");

    const { account } = await createAdminClient()
    const user = await account.create(ID.unique(), email, password, name);

    const session = await account.createEmailPasswordSession(
      email, password
    )

    setCookie(c, AUTH_COOKIE, session.secret, {
      path: "/",
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 30,
    })

    return c.json({ success: "true", data: user });
  });



export default app;
