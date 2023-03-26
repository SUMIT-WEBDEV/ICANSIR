import React, { useState, useEffect } from 'react'
import axios from "axios"

function EditArticle(props) {

    const [title, setTitle] = useState("");
    const [article, setArticle] = useState("");
    const [author, setAuthor] = useState("");
    const [message, setMessage] = useState("");
    const [fileName, setFileName] = useState("");
 

    const onChangeFile = (e) => {
        setFileName(e.target.files[0]);
    }
// ChangeOnClick  
    const changeOnClick = (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append("title", title);
        formData.append("article", article);
        formData.append("author", author);
        formData.append("articleImage", fileName);

        setTitle("");
        setArticle("");
        setAuthor("");

        axios
            .put(`http://localhost:8080/articles/update/${props.match.params.id}`, formData)
            .then(res => setMessage(res.data))
               .catch((err) => {
                console.log("nhi huwaaaaaaaaaaaaaaaa");
                console.log(err);
            });
    }
    useEffect(() => {
        axios
        .get(`http://localhost:3000/articles/${props.match.params.id}`)
        .then(res => [
            setTitle(res.data.title),
            setArticle(res.data.article),
            setAuthor(res.data.author),
            setFileName(res.data.articleImage)
        ])
        .catch(error => console.log(error))
    },[]);


    return (
        <div className="container">
            <h1>Edit article</h1>
            <span>{message}</span>
            <form onSubmit={changeOnClick} encType="multipart/form-data">
                <div className="form-group">
                    <label htmlFor="author">Author Name</label>
                    <input 
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className="form-control"
                        placeholder="Author Name"
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input 
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="form-control"
                        placeholder="Title"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="article">Article</label>
                    <textarea                    
                        value={article}
                        onChange={(e) => setArticle(e.target.value)}
                        className="form-control"
                    ></textarea> 
                </div>

                <div className="form-group">
                    <label htmlFor="file">Choose article image</label>
                    <input 
                        type="file"
                        filename="articleImage" 
                        className="for-control-file" 
                        onChange={onChangeFile}
                        />
                </div>

                <button type="submit" className="button">
                    Post article
                </button>

            </form>
        </div>

      
    )
}

export default EditArticle