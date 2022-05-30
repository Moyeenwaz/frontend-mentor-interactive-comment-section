("use strict");
// import data from "./data.json";
const container = document.querySelector(".container");
const sendCommentContainer = document.querySelector(".send-comment-container");

const data = {
  currentUser: {
    image: {
      png: "./images/avatars/image-juliusomo.png",
      webp: "./images/avatars/image-juliusomo.webp",
    },
    username: "juliusomo",
  },
  comments: [
    {
      id: 1,
      content:
        "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
      createdAt: "1 month ago",
      score: 12,
      user: {
        image: {
          png: "./images/avatars/image-amyrobson.png",
          webp: "./images/avatars/image-amyrobson.webp",
        },
        username: "amyrobson",
      },
      replies: [],
    },
    {
      id: 2,
      content:
        "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
      createdAt: "2 weeks ago",
      score: 5,
      user: {
        image: {
          png: "./images/avatars/image-maxblagun.png",
          webp: "./images/avatars/image-maxblagun.webp",
        },
        username: "maxblagun",
      },
      replies: [
        {
          id: 3,
          content:
            "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
          createdAt: "1 week ago",
          score: 4,
          replyingTo: "maxblagun",
          user: {
            image: {
              png: "./images/avatars/image-ramsesmiron.png",
              webp: "./images/avatars/image-ramsesmiron.webp",
            },
            username: "ramsesmiron",
          },
        },
        {
          id: 4,
          content:
            "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
          createdAt: "2 days ago",
          score: 2,
          replyingTo: "ramsesmiron",
          user: {
            image: {
              png: "./images/avatars/image-juliusomo.png",
              webp: "./images/avatars/image-juliusomo.webp",
            },
            username: "juliusomo",
          },
        },
      ],
    },
  ],
};

//Display comments

const displayComments = () => {
  data.comments.forEach((comment) => {
    const html = `<div class="comment-box" id=${comment.id}>
    <div class="vote">
      <img src="images/icon-plus.svg" class="plus icon" alt="" />
      <p class='vote-number'>${comment.score}</p>
      <img src="images/icon-minus.svg" class="minus icon" alt="" />
    </div>
    <div class="text-container">
      <div class="header">
        <img
          src=${comment.user.image.png}
          class="avatar"
          alt=""
        />
        <p class="username">${comment.user.username}</p>
        <p class="time-posted">${comment.createdAt}</p>
        <p class="reply">
          <img src="images/icon-reply.svg" class="reply-icon" alt="" />Reply
        </p>
      </div>
      <p class="body">
          ${comment.content}
      </p>
    </div>
  </div>
  `;
    container.insertAdjacentHTML("beforeend", html);
  });
};

displayComments();

const sendComment = () => {
  const html = `<div class="current-user-avatar-container">
  <img
    src=${data.currentUser.image.png}
    alt=""
    class="current-user avatar"
  />
</div>
<div class="input-container">
  <input name="" id="" placeholder="add a comment..." class="comment" />
</div>
<div class="btn-container">
  <button class="btn send">Send</button>
</div>`;

  sendCommentContainer.innerHTML = html;
};

sendComment();

const voteContainer = container.querySelectorAll(".vote");

voteContainer.forEach((container) => {
  container.addEventListener("click", (e) => {
    const target = e.target;
    if (target.classList.contains("plus")) {
      console.log("plus");
    } else if (target.classList.contains("minus")) {
      console.log("minus");
    }
  });
});

// ${
//     comment.replies.length > 0
//       ? comment.replies.forEach((reply) => {
//   const html = ` <div class="comment-box nested">
//   <div class="vote">
//     <img src="images/icon-plus.svg" class="plus icon" alt="" />
//     <p class="vote-number">12</p>
//     <img src="images/icon-minus.svg" class="minus icon" alt="" />
//   </div>
//   <div class="text-container">
//     <div class="header">
//       <img
//         src=${reply.user.image.png}
//         class="avatar"
//         alt=""
//       />
//       <p class="username">${reply.user.username}</p>
//       <p class="time-posted">${reply.createdAt}</p>
//       <p class="reply">
//         <img src="images/icon-reply.svg" class="reply-icon" alt="" />Reply
//       </p>
//     </div>
//     <p class="body">
//      ${reply.content}
//     </p>
//   </div>
// </div>`;
//           commentBox.insertAdjacentHTML("afterend", html);
//         })
//       : null}
