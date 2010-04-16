!SLIDE incremental commandline center
# actions
    $ cat version.rb
    puts "Hello, I am #{RUBY_VERSION}"
    
    $ rvm 1.8.7,1.9.1 ruby version.rb
    ruby-1.8.7-p249: ruby 1.8.7 (2010-01-10 patchlevel 249) [i686-darwin10.2.0] 
    Hello, I am 1.8.7
    ruby-1.9.1-p378: ruby 1.9.1p378 (2010-01-10 revision 26273) [i386-darwin10.3.0] 
    Hello, I am 1.9.1
    
    $ rvm ruby version.rb
    
    $ rvm 1.8.7,1.9.1 gem install rspec json --no-rdoc
    $ rvm rake spec
    $ rvm monitor
    $ rvm --json specs
    $ rvm --yaml tests
    $ rvm benchmark loop.rb
    