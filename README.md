
# ZOYA - E-Commerce Application

## Project Overview

ZOYA is an online shopping application inspired by modern
e-commerce platforms such as Amazon and Flipkart.

The application allows customers to browse products,
search products, filter categories and manage their
shopping cart.

This project demonstrates an end-to-end DevOps implementation.

## Application Features

- Product catalogue
- Product categories
- Product search
- Shopping cart
- Add and remove products
- Product quantity management
- Demo checkout
- Responsive shopping website

## Technology Stack

### Frontend
- React.js
- JavaScript
- CSS

### DevOps Tools
- Git
- GitHub
- Jenkins
- SonarQube
- OWASP Dependency Check
- Trivy
- Docker
- Docker Hub
- Kubernetes
- ArgoCD

### Monitoring
- Prometheus
- Grafana

## Project Architecture

Developer
    |
    v
GitHub
    |
    v
Jenkins CI Pipeline
    |
    v
SonarQube and Security Scanning
    |
    v
Docker Build
    |
    v
Docker Hub
    |
    v
GitOps Repository Update
    |
    v
ArgoCD
    |
    v
Kubernetes Cluster
    |
    v
ZOYA Shopping Application

## Project Structure

```text
zoya-ecommerce-devops/
|
|-- Kubernetes/
|   |-- namespace.yml
|   |-- deployment.yml
|   |-- service.yml
|   |-- hpa.yml
|   |-- argocd-application.yml
|
|-- public/
|   |-- index.html
|   |-- images/
|       |-- README.md
|       |-- zoya-logo.png
|
|-- src/
|   |-- components/
|   |-- data/
|   |-- App.js
|   |-- App.css
|   |-- index.js
|   |-- index.css
|
|-- Dockerfile
|-- jenkinsfile
|-- package.json
|-- .gitignore
|-- README.md
```

## Run Application Locally

Install dependencies:

```bash
npm install
```

Start the React application:

```bash
npm start
```

Build production application:

```bash
npm run build
```

## Docker Commands

Build Docker image:

```bash
docker build -t zoya:latest .
```

Run Docker container:

```bash
docker run -d -p 8080:80 --name zoya zoya:latest
```

Open the application:

http://localhost:8080

## Kubernetes Deployment

Apply Kubernetes namespace:

```bash
kubectl apply -f Kubernetes/namespace.yml
```

Deploy application:

```bash
kubectl apply -f Kubernetes/deployment.yml
kubectl apply -f Kubernetes/service.yml
kubectl apply -f Kubernetes/hpa.yml
```

Check pods:

```bash
kubectl get pods -n zoya-shopping
```

Check services:

```bash
kubectl get svc -n zoya-shopping
```

## ArgoCD

ArgoCD monitors the GitHub repository and synchronizes
Kubernetes resources.

Application manifest:

```text
Kubernetes/argocd-application.yml
```

## Jenkins CI/CD

The Jenkins pipeline performs:

1. Git checkout
2. Dependency installation
3. Unit testing
4. React production build
5. SonarQube code analysis
6. OWASP dependency scanning
7. Trivy filesystem scanning
8. Docker image build
9. Trivy image scanning
10. Docker Hub image push

## Monitoring

Prometheus and Grafana will be used for
Kubernetes and application monitoring.

## Project Status

ZOYA is a demo e-commerce application.
DevOps deployment and monitoring configuration
are being developed.

## Disclaimer

This project uses sample products and a demo checkout.
It does not process real payments or store real orders.
