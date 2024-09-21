# AI Backend App

This is a backend API application that uses Node.js, TypeScript, OpenAI's GPT model, Prisma ORM for SQL database interactions, and Docker for containerization. The app accepts text prompts, sends them to the OpenAI API to generate a response, and stores the prompt and response in a SQL database.

## Tech Stack

- **Backend**: Node.js, TypeScript
- **AI/ML**: OpenAI API
- **Database**: SQL (SQLite, PostgreSQL, MySQL, etc.), Prisma ORM
- **Deployment**: Docker

## Features

- Accepts a text prompt from the user.
- Sends the prompt to OpenAI API for text generation.
- Stores the prompt and the generated response in an SQL database.
- Simple RESTful API built with Express.


## Prerequisites

- [Node.js](https://nodejs.org/en/) (v16+)
- [Docker](https://www.docker.com/get-started)
- OpenAI API Key (create one from [OpenAI](https://api.openai.com/))
- SQLite or any SQL database (with connection string)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/fujahgabriel/node-ai-backend-app.git
cd node-ai-backend-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory and add your environment variables:

```bash
DATABASE_URL="file:./db/database.db"
OPENAI_API_KEY="your-openai-api-key"
PORT=5000
```

### 4. Prisma Setup

Initialize Prisma and run the migrations:

```bash
npx prisma migrate dev --name init
npx prisma generate
```

This will create the necessary tables in your SQL database.

### 5. Run the Application

To run the application locally:

```bash
npm run dev
```

The server will run on `http://localhost:5000`.

### 6. Test the API

You can test the API using Postman, cURL, or any HTTP client:

```bash
curl -X POST http://localhost:5000/api/ai/generate \
-H "Content-Type: application/json" \
-d '{"prompt": "Tell me a joke"}'
```

### 7. Docker Setup

To build and run the Docker container:

1. **Build the Docker image:**

```bash
docker build -t ai-backend-app .
```

2. **Run the Docker container:**

```bash
docker run -p 5000:5000 --env-file .env ai-backend-app
```

## API Endpoints

- **POST** `/api/ai/generate`: Sends a text prompt to the OpenAI API and stores the response in the database.


## Prisma Database Schema

The Prisma schema defines the structure of the database, which stores AI responses:

```prisma
model AIResponse {
  id        Int      @id @default(autoincrement())
  prompt    String
  response  String
  createdAt DateTime @default(now())
}
```

## License

This project is licensed under the MIT License.

## Acknowledgements

- [OpenAI](https://openai.com) for their powerful language model.
- [Prisma](https://prisma.io) for their ORM solution.
- [Docker](https://www.docker.com) for containerization.


