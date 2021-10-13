import {
    useState,
    useEffect
} from "react";
import '../index.css';
import {
    LinkPreview
} from "@dhaiwat10/react-link-preview";

export default function Ngenilife() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState
        (true);
    const [error, setError] = useState
        (null);

    useEffect(() => {
        fetch(`http://ngeni-live.herokuapp.com/posts`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            })
            .then(data => {
                setData(data)
                console.log(data)
            })
            .catch(error => {
                console.error("Error fetching data", error);
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [])
    if (loading) return "Loading...";
    if (error) return "Error!";

    return data.map(item => (
        <div className = "container-fluid" >
        <
        LinkPreview margin = "30px auto"
        width = "400px"
        height = "400px"
        url = {
            item.link
        }
        /> 
        </div>
    ));
}