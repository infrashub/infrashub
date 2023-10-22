#!/bin/bash

if ! command -v docker &> /dev/null; then
    echo "Docker is not installed. Please install Docker and try again."
    exit 1
fi

swarm_state=$(docker info --format '{{.Swarm.LocalNodeState}}')
if [ "$swarm_state" == "inactive" ]; then
    docker swarm init
fi

if [ -z "$(docker network ls --filter name=traefik-public --quiet)" ]; then
    docker network create --driver overlay traefik-public
    docker node update --label-add traefik-public.traefik-public-certificates=true $(docker info --format '{{.Swarm.NodeID}}')

    read -p "Enter your email address for Let's Encrypt: " email
    read -p "Enter your domain name: " domain
    read -p "Enter your username: " username
    read -s -p "Enter your password: " password
    echo

    export EMAIL="$email"
    export DOMAIN="$domain"
    export USERNAME="$username"
    export HASHED_PASSWORD=$(openssl passwd -apr1 "$password")

    docker stack deploy --compose-file ./stack.yaml traefik
fi
