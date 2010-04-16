!SLIDE incremental commandline center
# gemsets (create and use)

    $ rvm 1.9.1
    $ rvm gemset create rails3
    Gemset 'rails3' created.
    $ rvm gemset use rails3
    Now using gemset 'rails3'
    $ rvm use 1.9.1@rails3
    Using ruby 1.9.1 p378 with gemset rails3
    
    $ gem install rails --pre
    ...
    $ gem list | grep rails
    rails (3.0.0.beta3)
    
    $ rvm 1.9.1
    $ gem list
    
    *** LOCAL GEMS ***

    rake (0.8.7)
    rdoc (2.5.3)

!SLIDE incremental commandline center small
# gemsets (list)

    $ rvm 1.9.1@rails3

    $ rvm gemset name
    rails3
    
    $ rvm gemset list
    gemsets : for ruby-1.9.1-p378 (found in /Users/rgabo/.rvm/gems/)
    global
    rails3
    
    $ rvm gemdir
    /Users/rgabo/.rvm/gems/ruby-1.9.1-p378@rails3
    
    $ rvm 1.9.1@global; rvm gemdir
    /Users/rgabo/.rvm/gems/ruby-1.9.1-p378@global
    
    $ rvm 1.9.1; rvm gemdir
    /Users/rgabo/.rvm/gems/ruby-1.9.1-p378
    
!SLIDE incremental commandline center small
# gemsets (delete and empty)

    $ rvm gemset delete rails3
    Are you SURE you wish to remove the entire gemset directory 'rails3' 
    (/Users/rgabo/.rvm/gems/ruby-1.9.1-p378@rails3)?
    (anything other than 'yes' will cancel) > 

    $ rvm gemset empty rails3
    Are you SURE you wish to remove the installed gemset for gemset 
    'ruby-1.9.1-p378' (/Users/rgabo/.rvm/gems/ruby-1.9.1-p378)?
    (anything other than 'yes' will cancel) >
    
    $ rvm --force gemset delete rails3
    
!SLIDE incremental commandline center small
# gemsets (export, import, copy)

    $ rvm 1.9.1@rails3
    $ rvm gemset export rails3.gems
    Exporting current environments gemset to rails3.gems
    
    $ cat rails3.gems
    # rails3.gems generated gem export file.
    abstract -v1.0.0
    actionmailer -v3.0.0.beta3
    actionpack -v3.0.0.beta3
    activemodel -v3.0.0.beta3
    activerecord -v3.0.0.beta3
    activeresource -v3.0.0.beta3
    activesupport -v3.0.0.beta3
    arel -v0.3.3
    ...
    rails -v3.0.0.beta3
    
    $ rvm --force gemset empty rails3
    $ rvm 1.9.1@rails3 gemset import rails3
    Importing  rails3.gems file...
    abstract 1.0.0 is not installed, installing...
    ...
    
    $ rvm gemset copy 1.9.1@rails3 1.9.2-head@rails3
    
!SLIDE incremental commandline center
# gemsets (global)

    $ rvm 1.9.1@global gem install github
    ruby-1.9.1-p378: ruby 1.9.1p378 (2010-01-10 revision 26273) [i386-darwin10.3.0] 
    github  is not installed, installing...
    github  installed.

    $ rvm use 1.9.1@rails3
    Using ruby 1.9.1 p378 with gemset rails3
    
    $ which github
    /Users/rgabo/.rvm/gems/ruby-1.9.1-p378@global/bin/github