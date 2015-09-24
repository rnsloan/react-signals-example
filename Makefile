## eval "$(docker-machine env dev)"

dockerRsync:
	docker-osx-dev -e .git -e node_modules -e bundle.js

dockerRun:
	docker run -it --name reactsignals -v ${PWD}/:/usr/src/ -p 3000:3000 -w /usr/src/ node:4.1.1 /bin/bash

dockerStart:
	docker start -ai reactsignals

dockerAttach:
	docker exec -it reactsignals bash
