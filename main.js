// Data
const postsList = posts;    // I know, it's redundant code, but I need it for my own peace of mind XD
const likesList = [];

// References
const postsListElement = document.getElementsByClassName("posts-list")[0];
const templateElement = document.getElementById("temp-post");

// Build postsList (from data array)
postsList.forEach((post) => {

    // create postElement
    const postElement = templateElement.content.cloneNode(true);

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
    setValue(".post-meta__time", "innerHTML", post.created);
    setValue(".post__text", "innerHTML", post.content);
    setValue(".post__image img", "src", post.media);
    postElement.querySelector(".like-button").setAttribute("data-postid", post.id);
    setValue(".js-likes-counter", "id", `like-counter-${post.id}`)
    setValue(".js-likes-counter", "innerHTML", post.likes);

    // add postElement to DOM
    postsListElement.append(postElement);

})