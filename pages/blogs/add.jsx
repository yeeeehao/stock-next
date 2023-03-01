import { useState } from "react";
import { useForm } from "react-hook-form";

export default function AddBlogPage() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  const saveBlog = async (data) => {
    const response = await fetch("/api/blogs/articles", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    const result = await response.json();
    console.log(result);
    setData(JSON.stringify(data));
  };

  return (
    <div style={{ margin: "1rem" }}>
      <form onSubmit={handleSubmit(saveBlog)}>
        <h1>New Blog</h1>
        <label htmlFor="title">Title</label>
        <br />
        <input id="title" {...register("title")} placeholder="Blog Title" />
        <br />

        {/* <label htmlFor="category">Category</label>
        <select id="category" {...register("category", { required: true })}>
          <option value="">Select...</option>
          <option value="A">News</option>
          <option value="B">Life</option>
        </select> */}
        <br />
        <label htmlFor="content">Content</label>
        <br />
        <textarea id="text" {...register("content")} placeholder="content" />
        <br />
        <input type="submit" />
        <p>{data}</p>
        <br />
      </form>
    </div>
  );
}
