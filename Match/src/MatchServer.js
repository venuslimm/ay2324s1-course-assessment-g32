const amqp = require('amqplib');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const queueRoutes = require('./QueueRoutes.js');
const consume = require('./services/consumerService.js');
const env = require('./loadEnvironment.js');

console.log('Starting Matchserver ...');

// Start the Express (web) server to listen for incoming RESTFul API requests
const expressServer = async () => {
  const app = express();
  app.use(cors());
  app.use(bodyParser.json());
  app.use('/queue', queueRoutes);
  app.listen(env.MATCH_PORT, () => {
    console.log(`Matchserver is running on port: ${env.MATCH_PORT}`);
    console.log(`Matchserver is using RabbitMQ server: ${env.RABBITMQ_URL}`)
  });
};

// Connect to RabbitMQ server to listen for incoming messages
const rabbitMQserver = async () => {
  const connection = await amqp.connect(env.RABBITMQ_URL);
  const channel = await connection.createChannel();

  await channel.assertQueue('commonQueue', { durable: false });

  console.log('Matching service is running...');

  // Consume from the common queue
  channel.consume('commonQueue', async (message) => {
    if (message !== null) {
      const { requestQueue, responseQueue } = JSON.parse(message.content.toString());

      // Create the request and response queues if they do not exist
      await channel.assertQueue(requestQueue, { durable: false, autoDelete: true, });
      await channel.assertQueue(responseQueue, { durable: false, autoDelete: true, });
      channel.ack(message);

      // Start consuming from the request queue
      consume(requestQueue, channel);
    }
  });
};

expressServer().catch(console.error);
rabbitMQserver().catch(console.error);
