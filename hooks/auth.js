import axios from "@/lib/axios";
import Cookies from "js-cookie";
import { useUser } from "@/contexts/user";
import { useToast } from "@/contexts/toast";
import { useRouter, useSearchParams } from "next/navigation";

export const useAuth = () => {
  const router = useRouter();
  const { setUser } = useUser();
  const { setMessage, setToast, setPosition }: any = useToast();
  const searchParams = useSearchParams();

  const notifyUser = (toast: string, message: string, position: string) => {
    setToast(toast);
    setMessage(message);
    setPosition(position);
    setTimeout(() => {
      setMessage("");
      setToast("");
      setPosition("right");
    }, 3000);
  };

  const validateApp = async ({ appToken }: { appToken: string }) => {
    try {
      const response = await axios.get(`/app/callback/${appToken}`);
      if (response.data?.success) {
        Cookies.set("analogueshifts", response.data?.data.token);
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
