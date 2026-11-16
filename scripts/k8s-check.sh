#!/bin/bash

echo "=================================="
echo " ZOYA Kubernetes Health Check"
echo "=================================="

NAMESPACE="zoya"

echo ""
echo "1. Checking Kubernetes cluster..."
kubectl cluster-info

if [ $? -ne 0 ]; then
    echo "ERROR: Kubernetes cluster is not reachable"
    exit 1
fi

echo ""
echo "2. Checking nodes..."
kubectl get nodes

echo ""
echo "3. Checking pods..."
kubectl get pods -n "$NAMESPACE"

echo ""
echo "4. Checking deployments..."
kubectl get deployments -n "$NAMESPACE"

echo ""
echo "5. Checking services..."
kubectl get services -n "$NAMESPACE"

echo ""
echo "6. Checking pod health..."

NOT_READY=$(kubectl get pods -n "$NAMESPACE" \
  --no-headers 2>/dev/null | \
  awk '$2 !~ /^([0-9]+)\/\1$/ {print $1}')

if [ -n "$NOT_READY" ]; then
    echo "WARNING: Some pods are not ready:"
    echo "$NOT_READY"
    exit 1
fi

echo ""
echo "ZOYA Kubernetes health check completed."
