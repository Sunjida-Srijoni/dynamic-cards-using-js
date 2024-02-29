// const posts = [
//     {
//         title: "this is title 1",
//         body: "this is body 1"
//     },
//     {
//         title: "this is title 2",
//         body: "this is body 2"
//     },
//     {
//         title: "this is title 3",
//         body: "this is body 3"
//     },
//     {
//         title: "this is title 4",
//         body: "this is body 4"
//     }
// ];

//console.log(axios);

const fetchData = async (config) => {
    try{
        const res = await axios(config);
    console.log(res);
    return res.data;
    }
    catch(error){
        throw Error("Data is not fetched");
    }

};


const postsElement = document.querySelector(".posts");

const loadAllData = async () => {
    const posts = await fetchData("https://jsonplaceholder.typicode.com/posts");
     posts.map(post => {
        //console.log(post);
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `<h4 class="post-title">${post.title}</h4>
        <p class="post-body">${post.body}</p>`;
        postsElement.appendChild(postElement);

     });
  
};

loadAllData();