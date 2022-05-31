("use strict");
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
      replies: [
        {
          id: 2,
          content: "That's great as well! I agree.  ",
          createdAt: "1 week ago",
          score: 4,
          replyingTo: "amyrobson",
          user: {
            image: {
              png: "./images/avatars/image-ramsesmiron.png",
              webp: "./images/avatars/image-ramsesmiron.webp",
            },
            username: "ramsesmiron",
          },
        },
      ],
    },
    {
      id: 3,
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
          id: 4,
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
          id: 5,
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
  container.innerHTML = "";
  data.comments.forEach((comment) => {
    const html = `
    <div class="vote">
      <img src="images/icon-plus.svg" class="plus icon" alt="" onclick='increaseVote(this, {once: true})' />
      <p class='vote-number'>${comment.score}</p>
      <img src="images/icon-minus.svg" class="minus icon" alt="" onclick='decreaseVote(this, {once: true})' />
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
    `;
    const commentBox = document.createElement("div");
    commentBox.classList.add("comment-box");
    commentBox.innerHTML = html;
    container.appendChild(commentBox);

    const p = commentBox.querySelector(".username");
    const replies = comment.replies;
    if (replies.length > 0) {
      let replyBox;
      replies.forEach((item) => {
        if (item.replyingTo === p.textContent) {
          const parentElement = p.closest(".comment-box");
          replyBox = document.createElement("div");
          replyBox.classList.add("comment-box", "nested");
          replyBox.innerHTML = `<div class="vote">
            <img src="images/icon-plus.svg" class="plus icon" alt="" />
            <p class="vote-number">${item.score}</p>
            <img src="images/icon-minus.svg" class="minus icon" alt="" />
          </div>
          <div class="text-container">
            <div class="header">
              <img
                src=${item.user.image.png}
                class="avatar"
                alt=""
              />
              <p class="username">${item.user.username}</p>
              <p class="time-posted">${item.createdAt}</p>
              <p class="reply">
                <img src="images/icon-reply.svg" class="reply-icon" alt="" />Reply
              </p>
            </div>
            <p class="body">
             ${item.content}
            </p>
          </div>`;
          parentElement.after(replyBox);
        }
        const subP = replyBox.querySelector(".username");
        const parent = subP.closest(".comment-box");
        if (item.replyingTo === subP.textContent) {
          const userReply = document.createElement("div");
          userReply.classList.add("comment-box", "nested", "current-user");
          userReply.innerHTML = `
            <div class="vote">
            <img src="images/icon-plus.svg" class="plus icon" alt="" />
            <p class="vote-number">${item.score}</p>
            <img src="images/icon-minus.svg" class="minus icon" alt="" />
          </div>
          <div class="text-container">
            <div class="header">
              <img
                src=${item.user.image.png}
                class="avatar"
                alt=""
              />
              <p class="username">${item.user.username}</p>
              <div class="current-user-indicator">you</div>
              <p class="time-posted">${item.createdAt}</p>
              <p class="reply">
                <img src="images/icon-reply.svg" class="reply-icon" alt="" />Reply
              </p>
            </div>
            <p class="body">
            ${item.content}
            </p>
          </div>
            `;
          parent.after(userReply);
        }
      });
    }
  });
};
function increaseVote(elem) {
  elem.nextElementSibling.textContent++;
}
function decreaseVote(elem) {
  elem.previousElementSibling.textContent--;
}
displayComments();

const displaySendCommentContainer = () => {
  sendCommentContainer.innerHTML = "";

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

displaySendCommentContainer();
