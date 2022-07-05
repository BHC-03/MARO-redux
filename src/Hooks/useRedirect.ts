import { useNavigate } from "react-router-dom";

const useRedirect=()=>{
    const navigate=useNavigate();
    return (url:string)=>{
        navigate(url)
    }
}
export default useRedirect