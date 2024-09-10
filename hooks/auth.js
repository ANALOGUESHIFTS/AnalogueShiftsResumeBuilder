import axios from 'axios';
import Cookies from "js-cookie";
import { useToast } from "@/contexts/toast";
import { useRouter } from "next/navigation";

export const useAuth = () => {
    const router = useRouter();
    const { message, setToast, setPosition } = useToast();

    const notifyUser = (toast, message, position) => {
        setToast(toast);
        setMessage(message);
        setPosition(position);
        setTimeout(() => {
            setMessage("");
            setToast("");
            setPosition("right");
        }, 3000);
    };

    const validateApp = async({ appToken }) => {
        try {
            const response = await axios.get(`/app/callback/${appToken}`);
            if (response.data ? .success) {
                Cookies.set("analogueshifts", response.data ? .data.token);
                notifyUser("success", "Validation successful", "right");
            }
        } catch (error) {
            notifyUser("error", error.message || "Invalid Request", "right");
            router.push("/");
        }
    };

    return {
        validateApp,
        notifyUser,
    };
};