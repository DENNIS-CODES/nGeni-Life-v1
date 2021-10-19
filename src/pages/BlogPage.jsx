import { Grid } from "@material-ui/core";
import {Box} from '@mui/material';
import { useState, useEffect } from "react";
import Post from "../components/Post";
import { LinkPreview } from '@dhaiwat10/react-link-preview';

function BlogPage() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://ngeni-live.herokuapp.com/posts`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            })
            .then(posts => {
                setPosts(posts);
                console.log(posts)
            })
            .catch(error => {
                console.error("Error fetching data", error);
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [])

    if (error) {
        return <p> {`Error! ${error}`} </p>;
    };

    if (loading) {
        return <p>Loading...</p>;
    }
    else {
        return (
            <Box>
            <Grid container spacing={2}>
                {posts.map(post =>
                    <Grid item key={post.id} xs={12} sm={6} md={4} xl={3} >
                         <LinkPreview url={post.link} render={Post}/>
                    </Grid>)}
            </Grid>
            </Box>
        )

    }

}

export default BlogPage;

