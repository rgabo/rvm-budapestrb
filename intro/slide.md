!SLIDE center

## **Ruby Version Manager (RVM)**

### **Gabor Ratky (@rgabo)**
### rgabo@rgabostyle.com
### [http://rgabostyle.com](http://rgabostyle.com)

!SLIDE smbullets incremental
# Great things about RVM

* it simplifies development, testing and production deployment
* it's a command-line tool
* it's completely self-contained
* it encourages non-root usage
* it comes with chunky bacon

!SLIDE incremental commandline smaller
## Before RVM (Mac OS X Snow Leopard)

    $ which ruby
    /usr/bin/ruby
    
    $ ruby --version
    ruby 1.8.7 (2009-06-08 patchlevel 173) [universal-darwin10.0]

    $ gem env
    RubyGems Environment:
      - RUBYGEMS VERSION: 1.3.0
      - RUBY VERSION: 1.8.7 (2009-06-08 patchlevel 173) [universal-darwin10.0]
      - INSTALLATION DIRECTORY: /Library/Ruby/Gems/1.8
      - RUBY EXECUTABLE: /System/Library/Frameworks/Ruby.framework/...
      - EXECUTABLE DIRECTORY: /usr/bin
      
      - GEM PATHS:
        - /Library/Ruby/Gems/1.8
        - /Users/rgabo/.gem/ruby/1.8
        - /System/Library/Frameworks/Ruby.framework/...
        
    $ gem install thor
    WARNING: Installing to ~/.gem since /Library/Ruby/Gems/1.8 and /usr/bin 
             arent both writable.
    WARNING: You dont have /Users/rgabo/.gem/ruby/1.8/bin in your PATH, 
             gem executables will not run.
    
    ERROR: While executing gem ... (Gem::FilePermissionError)
      You dont have write permissions into the /usr/bin directory.        

!SLIDE incremental smbullets center

# Possible solutions

* use sudo to install gems with executables (FAIL)
* set GEM_HOME to user-writable directory (e.g. /usr/local/gems)
* install gems to and run executable from ~/.gem
* Homebrew + Brewbygems
* ...

!SLIDE center

# or

!SLIDE incremental smbullets center

# RVM

![RVM](rvm.png)

!SLIDE smbullets incremental

# RVM

* install and work with multiple Ruby interpreters
* create and use separate named gem sets
* create self-contained and dedicated environments for each project
* test, rake, benchmark and gem against multiple Ruby versions
* never leave user space (no sudo)
