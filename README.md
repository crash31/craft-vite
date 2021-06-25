# Craft Vite
A boilerplate for Crash 31 utilizing a Vite buildchain for frontend tooling.

## Install Boilerplate

__Setup Local File Structure:__

```
git clone https://github.com/crash31/craft-vite.git
cd project-name && rm -rf .git
git init
composer install
yarn
```

__Setup Notes:__
- Copy `.env.example` to `.env`
- Configure `PRIMARY_SITE_URL` with your local development url
- Setup and configure a local database
- Once composer dependencies are installed run `php craft setup`. If you get an error run `chmod +x ./craft`