# ShoutItOut

export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/tools

DEPLOY_HOSTNAME=eu-west-1.galaxy-deploy.meteor.com meteor deploy shoutit.bamoo.de --settings '/home/sebastian/WebstormProjects/settings/shoutit.json'

meteor build '/home/sebastian/WebstormProjects/build' --server shoutit.bamoo.de:80 --directory --debug
