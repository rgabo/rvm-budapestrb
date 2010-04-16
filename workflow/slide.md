!SLIDE incremental smbullets center

# .rvmrc

* **Configure RVM settings on a per-system and per-user level**
* Alter how RVM builds rubies (make flags, architecture)
* Have RVM install to a different location
* **Configure RVM for a single project**
* Switch to a specific interpreter and gemset

!SLIDE incremental smbullets center

# rvm-prompt

* Include RVM information in your prompt
* interpreter / version / patchlevel
* [ruby-1.9.1-p243] $
* RVM also customizes the irb prompt to display the current ruby

!SLIDE incremental smbullets center

# hooks

* after_use
* before_install
* after_install
* after_do
* RVM environment variables available
* _echo "Now using $rvm_ruby_string"_
