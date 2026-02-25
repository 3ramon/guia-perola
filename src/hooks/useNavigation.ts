import { useNavigate } from "react-router-dom";

export function useNavigation() {
    const navigate = useNavigate();

    const handleNavigation = (route: any) => {
        navigate(`/${route}`);
    };

    return {
        handleNavigation
    };
}
