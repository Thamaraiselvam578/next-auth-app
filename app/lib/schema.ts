import { z } from "zod";

const signinSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});

const signupSchema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(6),
});

type SigninSchema = z.infer<typeof signinSchema>;
type SignupSchema = z.infer<typeof signupSchema>;

export { signinSchema, signupSchema, type SigninSchema, type SignupSchema };