import { useState, useEffect } from "react";
import '../index.css';
import { LinkPreview } from "@dhaiwat10/react-link-preview";

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

            for (var r of data){
            return (
                <div class="container-fluid">
                        <div class="event row">
                            <div class="event-preview col-sm-10 col-md-11">
                            <LinkPreview margin="30px auto" width="500px" url={r.link}/>
                                <h7>What I was reading</h7>
                                <h2>{r.comment}</h2>
                                <h2><a href={r.link}>{r.link}</a></h2>
                                <div class="bt">
                                    <a type="button" class="btn btn-info text-center" href={r.link} target="_blank">Find Out More</a>
                                </div>
                            </div>

                            <div class="event-info col-sm-2 col-md-1">
                                <h6 class="text-center">Posted On</h6>
                                <p>{new Date(r.createdAt.toString('M/dd/yyyy'))} </p>
                            </div>
                        </div>
                </div>
            );
        }
     }   