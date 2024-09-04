import { v4 as randomUUID } from "uuid";
import { faker } from "@faker-js/faker";


class Post {
  private _id: string = randomUUID();
  private _userName: string;
  private _imageUrl: string;
  private _avatarUrl: string;
  private _description: string;
  private _numberOfLikes: number = 0;
  private _isLiked: boolean = false;
  private _createdAt: Date = new Date();

  constructor(
    userName: string,
    imageUrl: string,
    description: string,
    avatarUrl: string
  ) {
    this._userName = userName;
    this._imageUrl = imageUrl;
    this._description = description;
    this._avatarUrl = avatarUrl;
  }

  like() {
    this._isLiked = !this._isLiked;
    if (this._isLiked == true) {
      this._numberOfLikes += 1;
    } else {
      this._numberOfLikes -= 1;
    }
  }
  toHTML() {
    return `
    <div class="post-container">
      <div class="post-header">

        <div class="left">
          <div>
            <img title="Post image" src="./assets/heaven-img.jpg">
          </div>

          <span>user_name</span>
        </div>

        <div class="right">
          follow ...
        </div>

      </div>

      <div class="post-image">
        <img title="Post image" src="./assets/post-img.jpg">
      </div>

      <div class="post-icons">
        <div class="btn btn-like" onclick="like()">
          <i class="fa fa-heart-o"></i>
          <!-- <i class="fa fa-heart liked"></i> -->
        </div>
        <div class="btn">
          <i class="fa fa-comment-o"></i>
        </div>
        <div class="btn">
          <i class="fa fa-paper-plane-o"></i>
        </div>
      </div>

      <div class="post-likes">likes</div>
      <div class="post-description">description</div>
    </div>
    `
  }
}
function renderPosts(posts: Post[]) {
  const container = document.querySelector('main') as HTMLElement;
  if (container) {
    container.innerHTML = posts.map(post => post.toHTML()).join('');
  }
}

const posts: Post[] = [];

for (let index = 0; index < 15; index++) {
  const post = new Post(
    faker.person.firstName(),
    faker.image.avatarGitHub(),
    faker.image.urlPicsumPhotos(),
    faker.lorem.paragraph()
  );
  posts.push(post);
}

const firstPost = posts[0];
firstPost.like();
console.log(firstPost);
firstPost.like();
console.log(firstPost);

console.log(posts);

