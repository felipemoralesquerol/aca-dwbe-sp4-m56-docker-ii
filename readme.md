# DWBE - Toolbox 56 - Docker II (Continuación: network and volume)
A través de volúmenes podemos adjuntar un espacio de disco para almacenar datos de manera persistente. Con el comando network podrás crear redes para comunicar tus contenedores


## Recomendaciones preliminares
Registrarse en https://hub.docker.com/


## 1. Networking (prueba de concepto)

Información de referencia "Aprende sobre redes en Docker" de Daniel Segovia en https://youtu.be/QhvAQwcXbx8
    
    El comando principal a utilizar es:
    docker network

### Vamos a listar las redes existentes

    docker network ls

### Vamos a inspeccionar una de la redes existentes (red bridge creada por defautl)

    docker network inspect bridge
    
### Vamos a crear una red de nombre acamica

    docker network create acamica

### Vamos a conectar el container redis a la nueva red (seguirá también conectado a la anterior red)
    docker network connect acamica redis-container

### Vamos a desconectar el container redis de la red acamica
    docker network disconnect acamica redis-container

## 2. Volúmenes (prueba de concepto)

Información de referencia "Aprende sobre volúmenes en Docker" de Daniel Segovia en https://youtu.be/xXCWRtq2U5o
    
    El comando principal a utilizar es:
    docker volume

### Vamos a listar las redes existentes  

    docker volume ls

### Vamos a crear un volúmen de nombre datos

    docker volume create datos

###  Vamos a inspeccionar el volúmen creado

    docker volume inspect datos


La salida es de la forma:

    [
        {
            "CreatedAt": "2022-01-20T13:18:41-03:00",
            "Driver": "local",
            "Labels": {},
            "Mountpoint": "/media/felipe/HDD/docker-data/volumes/datos/_data",
            "Name": "datos",
            "Options": {},
            "Scope": "local"
        }
    ]    
### Ejemplo de un container a partir de una imagen de nginx

    docker run -d --name nginx-data -p 8099:80 -v "$(pwd)"/data/:/usr/share/nginx/html nginx


### Vamos a crear un container a partir de una imagen de nginx (con el index.html en un volúmen)

    docker run -d -it --name nginx-vol -p 8090:80 --mount source=datos-nginx,target=/usr/share/nginx/html nginx



## 3. docker-compose

Información de referencia "Aprende sobre Docker Compose" de Daniel Segovia en https://youtu.be/HdWaQO0G2ZY
    
    Se realiza a través de la configuración de un archivo:
    docker-compose.yml

### Vamos a ver un ejemplo (node con express, con acceso a mongodb vía mongose)

## 1. Instalación y configuración
    npm init -y

    npm install express

    npm install mongoose --save

### 2. Ejecución de docker-compose

    Se utiliza el comando:
    docker-compose up

    En caso extremo que se requiera forzar la creación se puede utilizar el comando
    docker-compose up --force-recreate

### 3. Eliminación de los containers

    Se utiliza el comando:
    docker-compose down


