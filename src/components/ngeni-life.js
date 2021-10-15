import {
    useState,
    useEffect
} from "react";
import '../App.css';
import {
    LinkPreview
} from "@dhaiwat10/react-link-preview";
import useWindowSize from "../utils/useWindowSize";
import {
    Box,
    Card,
    Image,
    Heading,
    Text
  } from 'rebass'

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
    <LinkPreview url={item.link} render={CustomComponent}/>
    ));
}
function CustomComponent ({ loading, preview }) {
    const { width } = useWindowSize();
    return loading 
    ? (<h1>Loading...</h1>)
    :
     width > 100 && (
        <Box width={256}>
        <Card
          sx={{
            p: 1,
            borderRadius: 2,
            boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
          }}>
          <Image src={preview.image} />
          <Box px={2}>
            <Heading as='h3'>
              {preview.title}
            </Heading>
            <Text fontSize={0}>
              {preview.description}
            </Text>
          </Box>
        </Card>
      </Box>
    )
}

