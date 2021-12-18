---
layout: post
title: Running a GUI App in Docker
---

Docker is a great tool for automated software development. Most people use Docker for applications not using display. But it's also possible to use Docker for containerizing apps requiring a display.  

This post illustrates the steps to configure Docker on windows for running a GUI app.  

First thing first, follow the steps to install [Docker for Windows](https://docs.docker.com/desktop/windows/install/).

Next, create a Dockerfile with the basic software dependencies needed to run the application.  

Taking a look at the Dockerfile, the first line specifies the base OS image. Ubuntu is used for this container.

<!-- {% highlight dockerfile %}
  # Our base OS Image
  FROM ubuntu:latest
{% endhighlight %} -->

```Docker
# Our base OS Image
FROM ubuntu:latest
````

The next line installs the X11vnc server. This Virtual Network Server (VNC) allows a user to view and interact with real X displays. With this, the user is able to interact with another computer and see the remote computer screen and use keyboard and mouse to interact with the remote computer.  

```Docker
# Install x11vnc and dependencies for running xeyes
RUN apt-get update && \
    apt-get install -y x11vnc xvfb x11-apps
```

It's a good practice to use a password when connecting to the remote desktop. The next line does this and saves it on the container. Any user wanting to connect to the container, will need to know the password.  

```Docker
# creates temporary password for connecting to the VNC server. 
RUN mkdir ~/.vnc && \
    x11vnc -storepasswd 1234 ~/.vnc/passwd
```

The line below copies a bash script for running the app to display.  

```Docker
# A script for loading the GUI app
COPY entrypoint.sh /entrypoint.sh
```

Below are the contents of the `entrypoint.sh` script. It starts the VNC Server and opens a Bash shell.  

```Bash
#!/bin/bash
# x11vnc -forever -usepw -create -geometry 1024x768 -solid darkblue &
x11vnc -forever -usepw -create -solid black & 
/bin/bash
```

This last line calls the script automatically when running the container.  

```Docker
# Starts the app. 
ENTRYPOINT ["/entrypoint.sh"]
```

To build this docker container run the command:  

```PowerShell
docker build -t docker_x11vnc:1.0 .
```

To run the container, use the command:  

```Powershell
docker run --rm -it -p 5900:5900 -v ${pwd}:/workspace docker_x11vnc:1.0
```

The option `-p 5900:5900` binds `port 5900` to the `localhost` port `5900`. The option`-v ${pwd}:/workspace` exposes this folder to the container in order to update the `entrypoint.sh` script.

To connect to the server, use the VNC Viewer app, which can be download from [realvnc.com](https://www.realvnc.com/en/connect/download/viewer/).  

Open VNC Viewer, in the search bar type `localhost:5900`. In the pop-up, enter the password used for X11Vnc on the container.

<figure>
  <img src="{{site.url}}/assets/images/vnc_viewer_setup.PNG" alt="vnc viewer"/>
  <figcaption>VNC Viewer</figcaption>
</figure>

When connected, on the container type:
```
xeyes
```

Below is a output from VNC Viewer.  

<figure>
  <img src="{{site.url}}/assets/images/xeyes.PNG" alt="xeyes"/>
  <figcaption>Running xeyes in Docker</figcaption>
</figure>

This base container can be used to run other apps requiring a display. Have fun!

## References

1. <https://stackoverflow.com/questions/49377744/how-to-run-docker-image-in-ubuntu-with-vnc>

1. <https://wiki.archlinux.org/title/x11vnc>
