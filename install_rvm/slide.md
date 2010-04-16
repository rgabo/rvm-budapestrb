!SLIDE center incremental smbullets

# Prerequisites

* standard *nix tools (bash, awk, sed, etc.)
* git (for updating RVM itself and for installing head versions of rubies)
* subversion (for installing head versions of rubies)

* **Mac OS X (Snow Leopard)**

* XCode 3.2.1 or later
* LLVM for MacRuby
* JDK for JRuby
* Mono for IronRuby

!SLIDE center incremental smbullets

# Installing RVM

* **install from the GitHub repository**
* install from the latest source tarball
* install from a gem

!SLIDE incremental commandline smaller

# Install from the GitHub repository

    $ bash < <(curl http://rvm.beginrescueend.com/releases/rvm-install-head)
      % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                     Dload  Upload   Total   Spent    Left  Speed
    116   349  116   349    0     0    856      0 --:--:-- --:--:-- --:--:--  1727
    Initialized empty Git repository in /Users/rgabo/.rvm/src/rvm/.git/
    remote: Counting objects: 2045, done.
    remote: Compressing objects: 100% (928/928), done.
    remote: Total 2045 (delta 1195), reused 1478 (delta 696)
    Receiving objects: 100% (2045/2045), 483.95 KiB | 174 KiB/s, done.
    Resolving deltas: 100% (1195/1195), done.

    RVM - shell scripts which allow management of multiple ruby interpreters and environments.

        RTFM:  http://rvm.beginrescueend.com/

        HELP:  http://webchat.freenode.net/?channels=rvm (#rvm on irc.freenode.net)

    ********************************************************************************
    * Installing rvm to /Users/rgabo/.rvm/
    ********************************************************************************
    
    $ echo "if [[ -s ~/.rvm/scripts/rvm ]]; then source ~/.rvm/scripts/rvm; fi" >> ~/.bashrc
    $ echo "if [[ -s ~/.bashrc ]]; then source ~/.bashrc ; fi" >> ~/.bash_profile
