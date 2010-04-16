!SLIDE incremental commandline small

# install

    $ rvm install 1.9.1
    Installing Ruby from source to: /Users/rgabo/.rvm/rubies/ruby-1.9.1-p378
    Extracting ruby-1.9.1-p378 ...
    Configuring ruby-1.9.1-p378, this may take a while depending on your cpu(s)...
    Compiling ruby-1.9.1-p378, this may take a while, depending on your cpu(s)...
    Installing ruby-1.9.1-p378
    Installation of ruby-1.9.1-p378 is complete.

    $ rvm install 1.8.7-p160
    $ rvm install ruby-head
    $ rvm install 1.9.1 -C --enable-shared,--with-readline-dir=$HOME/.rvm/usr
    $ rvm install ree --ree-options --no-tcmalloc

    $ rvm --default 1.8.7 
    $ rvm list
    
    rvm Rubies

       ree-1.8.7-2010.01 [ x86_64 ]
    => ruby-1.8.7-p249 [ x86_64 ]
       ruby-1.9.1-p378 [ x86_64 ]

    Default Ruby (for new shells)

       ruby-1.8.7-p249 [ x86_64 ]

    System Ruby

       system [ x86_64 i386 ppc ]
    
