# Kafka Order Processing System

This project demonstrates a microservices architecture for processing orders using Apache Kafka, Redis, and multiple consumer services. The system includes a producer that generates orders and consumers that handle analytics, database storage, and notifications.

## Architecture

- **Producer**: Flask API that accepts order requests and publishes them to Kafka
- **Kafka**: Message broker for order events
- **Redis**: In-memory data store for analytics
- **Analytics Consumer**: Processes orders for analytics and stores in Redis
- **Database Consumer**: Stores orders in a database (Supabase)
- **Notification Consumer**: Sends email notifications for orders

## Prerequisites

- Docker and Docker Compose (for Docker Compose setup)
- Minikube and kubectl (for Kubernetes setup)
- Python 3.8+ (if running locally)
- Git

## Setup Options

Choose one of the following setup methods:

### Option 1: Docker Compose

1. **Clone the repository and navigate to the project directory:**
   ```bash
   git clone <repository-url>
   cd simple-kafka-system
   ```

2. **Create environment file:**
   ```bash
   cp .env-template .env
   ```
   Edit `.env` and fill in the required values:
   - `KAFKA_TOPIC`: Name of the Kafka topic (e.g., `ordersv6`)
   - `KAFKA_DB_GROUP_ID`: Consumer group ID for database service (e.g.`database-001`)
   - `KAFKA_ANALYTICS_GROUP_ID`: Consumer group ID for analytics service (e.g.`analytics-001`)
   - `KAFKA_NOTIF_GROUP_ID`: Consumer group ID for notification service (e.g.`notifications-001`)
   - `SB_PROJECT_URL`: Supabase project URL
   - `SB_ANON_KEY`: Supabase anonymous key
   - `SMTP_EMAIL`: Email address for notifications
   - `SMTP_APP_KEY`: SMTP app password/key
   - `REDIS_HOSTNAME`: Redis hostname (e.g. `redis-analytics`)
   - `REDIS_PORT`: Redis port (default: `6379`)

3. **Initialize Supabase inventory data:**
   Run the SQL file to create the orders inventory table, constraint, function, and seed rows:
   Use Supabase Web SQL editor and paste the contents of `supabase-init.sql`.

3. **Build and start the services:**
   ```bash
   docker-compose up --build
   ```

4. **Access the services:**
   - Producer API: http://localhost:8080
   - Redis Insight: http://localhost:8001



### Option 2: Kubernetes with Minikube

1. **Start Minikube:**
   ```
   minikube start
   ```

2. **Enable ingress (for external access; keep minikube tunnel running in the foreground):**
   ```
   minikube addons enable ingress
   minikube tunnel 
   ```


3. **Load images into Minikube:**
   # If using local Docker daemon
   ```
   eval $(minikube docker-env)
   ```

   # Rebuild images in Minikube's Docker environment
   ```
   docker build -t order-producer:v1 ./publisher
   docker build -t order-analytics:v1 ./consumers/analytics
   docker build -t order-database:v1 ./consumers/database
   docker build -t order-notification:v1 ./consumers/notification
   ```

4. **Create secrets:**
   Edit `order-secret-template.yaml` and replace placeholder values with actual secrets, and rename the file to `order-secret.yaml`:
   ```yaml
   data:
     SB_PROJECT_URL: <base64-encoded-supabase-url>
     SB_ANON_KEY: <base64-encoded-supabase-anon-key>
     SMTP_APP_KEY: <base64-encoded-smtp-app-key>
   ```

   Apply the secret:
   kubectl apply -f order-secret.yaml

5. **Deploy services:**
   ```
   kubectl apply -f order-kafka.yaml
   kubectl apply -f order-redis.yaml
   kubectl apply -f order-producer.yaml
   kubectl apply -f order-consumer-analytics.yaml
   kubectl apply -f order-consumer-database.yaml
   kubectl apply -f order-consumer-notifications.yaml
   ```


6. **Check deployment status:**
   ```
   kubectl get pods
   kubectl get services
   ```


7. **Access the services:**
   - Producer API: http://localhost:80
   - Redis Insight: http://localhost:8001


## Testing the System

1. **Create an order via the producer API (use Postman):**
   - Method: POST
   - URL: `http://localhost:80/orders`
   - Headers:
     - `Content-Type: application/json`
   - Body: raw JSON
   ```json
   {
     "userId": "GRU10002",
     "email": "chowie22@gmail.com",
     "orders": [
       {
         "item_code": "BKD-001",
         "item_name": "Sourdough Loaf",
         "price": 8.5,
         "quantity": 2
       },
       {
         "item_code": "BKD-002",
         "item_name": "Butter Croissant",
         "price": 3.75,
         "quantity": 2
       }
     ]
   }
   ```
   - Send request in Postman. Verify status `200`/`201` and response body.



### Project Structure

```
├── docker-compose.yml          # Docker Compose configuration
├── publisher/                  # Order producer service
│   ├── Dockerfile
│   ├── main.py
│   ├── producer.py
│   └── orders.py
├── consumers/                  # Consumer services
│   ├── analytics/
│   ├── database/
│   └── notification/
├── *.yaml                      # Kubernetes manifests
├── .env-template               # Environment variables template
├── supabase-init.sql           # Supabase inventory schema + seed data
└── README.md                   # This file
```

## Troubleshooting

- **Kafka connection issues:** Ensure Kafka is fully started before deploying consumers
- **Image pull errors:** Make sure images are built and available in Minikube's Docker environment
- **Secret errors:** Verify base64 encoding of secret values
- **Port conflicts:** Check if ports 8080, 6379, 8001 are available
- **External Access** Ensure minikube tunnel is running in the foregound

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test with both Docker Compose and Kubernetes
5. Submit a pull request