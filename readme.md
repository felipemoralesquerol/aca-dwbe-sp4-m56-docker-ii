# DWBE - Toolbox 56 - Docker II (Continuación: network and volume)
A través de volúmenes podemos adjuntar un espacio de disco para almacenar datos de manera persistente. Con el comando network podrás crear redes para comunicar tus contenedores


## Recomendaciones preliminares
Registrarse en https://hub.docker.com/


## Networking (prueba de concepto)

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
    docker network connect acamica redis-container

    
