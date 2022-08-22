# Docker


Docker нь бидний өмнөх үеийн ашиглаж байсан VM технологийн хамгийн том сул тал болон хүндрэлтэй байдал дээр давуу тал болон гарч ирсэн.
![Different VM](https://github.com/gereltod/docker/blob/611b675889fb5d6c011dd29c4895a1b5f7b779ea/content/docker-vm-container.webp)

✨Docker системийн суулгах✨
- [Docker engine install ](https://docs.docker.com/desktop/install/mac-install/)
- [Docker compose install](https://docs.docker.com/compose/install/)


 _Яагаад docker-compose гарч ирсэн бэ🤔_
- Docker 
![Docker](https://github.com/gereltod/docker/blob/9eed0d7b290cd39d3b38a6de3e843bf067828ee1/content/docker.png)
- Docker-compose
![Docker compose](https://github.com/gereltod/docker/blob/9eed0d7b290cd39d3b38a6de3e843bf067828ee1/content/docker-compose.png)

> Read more [https://cloudinfrastructureservices.co.uk/dockerfile-vs-docker-compose-whats-the-difference/](https://cloudinfrastructureservices.co.uk/dockerfile-vs-docker-compose-whats-the-difference/)


```sh
docker build -f (docker file байршил) -t (таг нэршил) . (фолдер автоматаар Dockerfile авна)  
docker image ls (local image list)
docker run(-p 8080:80) -it (-d deatache - background ajillana) (docker image file zaaj ogno) 
docker ps (local ajillaj bgaa processiig haruulna)

```
> Read more [https://www.edureka.co/blog/docker-commands/](https://www.edureka.co/blog/docker-commands/)

