// Data
const postsList = posts;    // I know, it's redundant code, but I need it for my own peace of mind XD
const likesList = [];

// References
const postsListElement = document.getElementsByClassName("posts-list")[0];
const templateElement = document.getElementById("temp-post");

// Build postsList (from data array)
postsList.forEach((post, index) => {

    // create postElement
    const postElement = templateElement.content.cloneNode(true);
    const likeButtonElement = postElement.querySelector(".like-button");
    const likeCounterElement = postElement.querySelector(".js-likes-counter");

    // utility function for postElement build
    function setValue(selector, property, value) {
        postElement.querySelector(selector)[property] = value;
    }

    // build postElement
    setValue(".post-meta__author", "innerHTML", post.author.name);
    if (post.author.image) {
        setValue(".profile-pic", "src", post.author.image);
    } else {
        // X BONUS
        /* const fullName = 
        setValue(".post-meta__icon", "innerHTML", `${post.author.name.split("")}`); */
    }
    const dSplit = post.created.split("-"); // just a lazy js Date format
    setValue(".post-meta__time", "innerHTML", `${dSplit[2]}-${dSplit[1]}-${dSplit[0]}`);
    setValue(".post__text", "innerHTML", post.content);
    setValue(".post__image img", "src", post.media);
    likeButtonElement.setAttribute("data-postid", post.id);
    setValue(".js-likes-counter", "id", `like-counter-${post.id}`)
    setValue(".js-likes-counter", "innerHTML", post.likes);

    // like button interaction
    likeButtonElement.addEventListener("click", () => {
        if(!likesList.includes(post.id)){
            likeButtonElement.classList.add("like-button--liked");
            likeCounterElement.innerHTML = post.likes + 1;
            likesList.push(post.id);
        }
    }); 

    // add postElement to DOM
    postsListElement.append(postElement);

})