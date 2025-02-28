import bcrypt from "bcryptjs";
import { toast } from "react-hot-toast";

export function saltAndHashPassword(password: string) {
    const saltRounds = 10; // Adjust the cost factor according to your security requirements
    const salt = bcrypt.genSaltSync(saltRounds); // Synchronously generate a salt
    const hash = bcrypt.hashSync(password, salt); // Synchronously hash the password
    return hash; // Return the hash directly as a string
}

export const alertMsg = (message: string, variant: string) => {
    switch (variant) {
        case "success":
            return toast.success(message);
        case "error":
            return toast.error(message);
        default:
            return toast.error(message);
    }
}

export const fileToURL = async (file: File) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
            resolve(reader.result)
        }
        reader.onerror = reject
    })
}