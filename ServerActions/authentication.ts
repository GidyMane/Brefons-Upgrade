import axios from "axios";

export type BrefonsUser = {
    email: string;
    password: string;
}
export const login = async (user: BrefonsUser) => {
    const response = await axios.post("/api/authentication/login", {
        userEmail: user.email,
        userPassword:  user.password,
    })

    if (response.status == 200) {
        return response.data;
    }
    return {};

}