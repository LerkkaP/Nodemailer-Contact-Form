# Node.js Nodemailer Contact Form

This project demonstrates how to set up a contact form using Node.js and Nodemailer. A React component for the frontend part of the contact form is also included. You can also interact with the backend using tools such as Postman or Visual Studio REST Client. Please note that the frontend is intentionally unstyled to keep the focus on the backend implementation.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your machine
- A Gmail account for sending emails
- Google Cloud Console project with OAuth 2.0 credentials ( <em>follow this guide to setup the credentials [Create access credentials](https://developers.google.com/workspace/guides/create-credentials)</em>
)
## Setup

1. Clone this repository to your local machine.

2. Install the required Node.js packages by running the following command in the project root directory:

   ```bash
   npm install
   ```
3. Create a .env file in the project root directory and provide the following values:

	```bash
	CLIENT_ID=your_client_id
	CLIENT_SECRET=your_client_secret
	REFRESH_TOKEN=your_refresh_token
	```

	Replace your_client_id, your_client_secret, and your_refresh_token with your actual Google Cloud Console credentials.	

4. Start the Node.js server by running the following command:

	```bash
	node server.js
	```

	The server will start on port 3001.

5. Start the React development server by running the following command:

	```bash
	npm start
	```

	The development server will start on port 3000.

## Usage

1. Open your web browser and navigate to http://localhost:3000 to access the unstyled contact form.

2. Fill in the form with your name, email, and message.

3. Click the "Submit" button to send the contact form data to the Node.js server.

4. You will receive a response indicating whether the message was successfully sent or if an error occurred.
# Node.js Nodemailer Contact Form

This project demonstrates how to set up a contact form using Node.js and Nodemailer. A React component for the frontend part of the contact form is also included. You can also interact with the backend using tools such as Postman or Visual Studio REST Client. Please note that the frontend is intentionally unstyled to keep the focus on the backend implementation.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your machine
- A Gmail account for sending emails
- Google Cloud Console project with OAuth 2.0 credentials ( <em>follow this guide to setup the credentials [Create access credentials](https://developers.google.com/workspace/guides/create-credentials)</em>
)
## Setup

1. Clone this repository to your local machine.

2. Install the required Node.js packages by running the following command in the project root directory:

   ```bash
   npm install
   ```
3. Create a .env file in the project root directory and provide the following values:

	```bash
	CLIENT_ID=your_client_id
	CLIENT_SECRET=your_client_secret
	REFRESH_TOKEN=your_refresh_token
	```

	Replace your_client_id, your_client_secret, and your_refresh_token with your actual Google Cloud Console credentials.	

4. Start the Node.js server by running the following command:

	```bash
	node server.js
	```

	The server will start on port 3001.

5. Start the React development server by running the following command:

	```bash
	npm start
	```

	The development server will start on port 3000.

## Usage

1. Open your web browser and navigate to http://localhost:3000 to access the unstyled contact form.

2. Fill in the form with your name, email, and message.

3. Click the "Submit" button to send the contact form data to the Node.js server.

4. You will receive a response indicating whether the message was successfully sent or if an error occurred.
