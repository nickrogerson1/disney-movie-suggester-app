<h1 align="center">AI-powered Disney-style Movie Suggester App</h1>

### About This Project (Intro)
This app has three principal parts:
-	A homepage which displays current movies in a large banner, followed by upcoming, top rated and popular movies in a sexy moving carousel.
-	Users can search by genre and then will be given a list of movies associated with that genre along with an AI suggestion of further movies to look for in that genre.
-	A search feature whereby users can search by name and then will be shown a list of movies associated with that search along with an AI suggestion of other movies to look for.

### What it was built with
This app was built with React 19, Next.js 15 and Typescript for additional error checking. Tailwind CSS was used for a better developer experience and to reduce the amount of CSS served at production. ShadCN was used for creating generic components and Embla Carousel was used to plug in the homepage carousels.

### Key Features
-	Slick and gorgeous Netflix/Disney design with dazzling revolving, scrollable carousels on the homepage.
-	Movie data pulled in via TMBD.
-	One-click switch between dark and light themes with next-themes plugin.
-	Caches API requests for 24 hours with Nextjs to keep everything quick and snappy which reduces server requests to API .
-	Uses two AI API endpoints with **Microsoft Azure**:
    1. a subscription which then makes a direct OpenAI request (search)
 	  2. an Azure OpenAI direct endpoint which is better suited to scaling up (genre).
-	**Experimental PPR** to render slow (API calling for genre and search) components in the background for the genre and search sections and then stream them in when ready.

### Unresolved Issues
Had to remove the zoom feature on the homepage carousels due to flickering / layout shifting.

### Future Improvements
-	Add a rotten tomatoes icon to state whether the movie is fresh.
-	Make movies clickable so the user can retrieve further information about them and where to watch them.

## 🚀 Getting Started

Follow these steps to get the project up and running locally:

### Prerequisites

- Node.js (v18.x or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/your-nextjs-repo.git
    cd your-nextjs-repo
    ```

2. **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3. **Start the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```

4. **Open your browser and visit:**
    ```
    http://localhost:3000
    ```

---

### 📦 Build for Production

To build the application for production, run:

```bash
npm run build
npm run start
# or
yarn build
yarn start

