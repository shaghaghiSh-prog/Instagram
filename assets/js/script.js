const profileData = {
    username: "shayan.shaghaghi",
    fullName: "Shayan Shaghaghi",
    profilePicture: "https://picsum.photos/150",
    bio: "Photographer 📸 | Traveler ✈️ | Coffee Lover ☕\nCapturing moments and sharing stories",
    website: "https://www.shayanshaghaghi.com",
    postsCount: 542,
    followersCount: "1.2M",
    followingCount: 258,
  };

  const highlights = [
    { name: "Travel", image: "https://picsum.photos/400?random=1" },
    { name: "Food", image: "https://picsum.photos/400?random=2" },
    { name: "Nature", image: "https://picsum.photos/400?random=3" },
    { name: "City", image: "https://picsum.photos/400?random=4" },
    { name: "People", image: "https://picsum.photos/400?random=5" },
    { name: "Art", image: "https://picsum.photos/400?random=6" },
  ];

  const posts = [
    {
      image: "https://picsum.photos/400?random=7",
      likes: 1234,
      caption: "Beautiful sunset!",
      comments: [
        { username: "user1", text: "Great shot!" },
        { username: "user2", text: "Love this view!" },
      ],
    },
    {
      image: "https://picsum.photos/400?random=8",
      likes: 2345,
      caption: "Delicious meal!",
      comments: [
        { username: "user3", text: "Looks yummy!" },
        { username: "user4", text: "Where is this restaurant?" },
      ],
    },
    {
      image: "https://picsum.photos/400?random=9",
      likes: 3456,
      caption: "Adventure time!",
      comments: [
        { username: "user5", text: "Stunning landscape!" },
        { username: "user6", text: "I wish I was there!" },
      ],
    },
    {
      image: "https://picsum.photos/400?random=10",
      likes: 4567,
      caption: "City lights!",
      comments: [
        { username: "user7", text: "This is beautiful!" },
        { username: "user8", text: "Perfect night shot!" },
      ],
    },
    {
      image: "https://picsum.photos/400?random=11",
      likes: 5678,
      caption: "Nature's beauty!",
      comments: [
        { username: "user9", text: "Incredible shot!" },
        { username: "user10", text: "How did you capture this?" },
      ],
    },
    {
      image: "https://picsum.photos/400?random=12",
      likes: 6789,
      caption: "Art in the streets!",
      comments: [
        { username: "user11", text: "Amazing street art!" },
        { username: "user12", text: "I love this style!" },
      ],
    },
  ];

  function populateProfile() {
    document.getElementById("profile-picture").src =
      profileData.profilePicture;
    document.getElementById("username").textContent = profileData.username;
    document.getElementById("full-name").textContent = profileData.fullName;
    document.getElementById("bio").textContent = profileData.bio;
    document.getElementById("website").href = profileData.website;
    document.getElementById("website").textContent =
      profileData.website.replace("https://", "");
    document.getElementById("posts-count").textContent =
      profileData.postsCount;
    document.getElementById("followers-count").textContent =
      profileData.followersCount;
    document.getElementById("following-count").textContent =
      profileData.followingCount;
  }

  function populateHighlights() {
    const highlightsContainer = document.getElementById("highlights");
    highlights.forEach((highlight) => {
      const highlightElement = document.createElement("div");
      highlightElement.className = "highlight";
      highlightElement.innerHTML = `
                <img src="${highlight.image}" alt="${highlight.name}" class="highlight-image" onclick="openHighlight('${highlight.image}', '${highlight.name}')">
                <span class="highlight-name">${highlight.name}</span>
            `;
      highlightsContainer.appendChild(highlightElement);
    });
  }

  function populatePosts() {
    const postsContainer = document.getElementById("posts");
    posts.forEach((post, index) => {
      const postElement = document.createElement("div");
      postElement.className = "post";
      postElement.innerHTML = `
                <img src="${post.image}" alt="Post" onclick="openModal(${index})">
            `;
      postsContainer.appendChild(postElement);
    });
  }

 
  function openHighlight(image, name) {
        const loader = document.getElementById("loader");
        const highlightModal = document.getElementById("highlightModal");
        const highlightImage = document.getElementById("highlightImage");

        // Show loader
        loader.style.display = "block";

        // Set highlight image
        highlightImage.src = image;
        highlightImage.alt = name;

        // Show highlight modal
        highlightModal.style.display = "block";

        // After 2 seconds, hide loader and close highlight modal
        setTimeout(() => {
            loader.style.display = "none";
            highlightModal.style.display = "none";
        }, 2000);
    }

    function closeHighlightModal() {
        const highlightModal = document.getElementById("highlightModal");
        highlightModal.style.display = "none";
    }
  function openModal(index) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImg");
    const modalProfilePic = document.getElementById("modalProfilePic");
    const modalUsername = document.getElementById("modalUsername");
    const modalLikes = document.getElementById("modalLikes");
    const modalCaption = document.getElementById("modalCaption");
    const modalComments = document.getElementById("modalComments");

    const post = posts[index];

    modal.style.display = "block";
    modalImg.src = post.image;
    modalProfilePic.src = profileData.profilePicture;
    modalUsername.textContent = profileData.username;
    modalLikes.textContent = `${post.likes} likes`;
    modalCaption.innerHTML = `<span class="comment-username">${profileData.username}</span> ${post.caption}`;

    modalComments.innerHTML = post.comments
      .map(
        (comment) =>
          `<div class="comment"><span class="comment-username">${comment.username}</span> ${comment.text}</div>`
      )
      .join("");
  }

  function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
  }

  window.onclick = function (event) {
    const modal = document.getElementById("modal");
    const highlightModal = document.getElementById("highlightModal");
    if (event.target == modal) {
      closeModal();
    }
    if (event.target == highlightModal) {
      closeHighlightModal();
    }
  };

  document.addEventListener("DOMContentLoaded", function () {
    populateProfile();
    populateHighlights();
    populatePosts();
  });
