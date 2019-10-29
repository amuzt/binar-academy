# First task on Binar-Academy
## SIGN UP TO GITHUB ACCOUNT
- Enter the page https://github.com/
- Then , fill the registration form

![sign up](https://user-images.githubusercontent.com/55352568/67687040-3fc38900-f9ca-11e9-9204-a178a923e82c.png)

- verification page will be appear like picture below

![verify](https://user-images.githubusercontent.com/55352568/67687041-405c1f80-f9ca-11e9-9d98-6f6fd7cf1b51.png)

- Click  Next : Select a Plan
- then the packages selection will be appear

![choose](https://user-images.githubusercontent.com/55352568/67687044-40f4b600-f9ca-11e9-8ed2-d4d42c474556.png)

- And choose to your needs

Your GitHub account is ready !!

# HOW TO SETUP SSH ON GITHUB

If you don't already have an SSH key, you must generate a new SSH key. If you're unsure whether you already have an SSH key, check for existing keys.

If you don't want to reenter your passphrase every time you use your SSH key, you can add your key to the SSH agent, which manages your SSH keys and remembers your passphrase.

Generating a new SSH key
1. Open Terminal.

2. Paste the text below, substituting in your GitHub email address.

>> $ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

This creates a new ssh key, using the provided email as a label.

>> Generating public/private rsa key pair.
3. When you're prompted to "Enter a file in which to save the key," press Enter. This accepts the default file location.

> Enter a file in which to save the key (/home/you/.ssh/id_rsa): [Press enter]

4. At the prompt, type a secure passphrase. For more information, see "Working with SSH key passphrases".

>> enter passphrase (empty for no passphrase): [Type a passphrase]> Enter same passphrase again: [Type passphrase again]

## Adding your SSH key to the ssh-agent

Before adding a new SSH key to the ssh-agent to manage your keys, you should have checked for existing SSH keys and generated a new SSH key.
1. Start the ssh-agent in the background.

>> $ eval "$(ssh-agent -s)"
>> Agent pid 59566
2. Add your SSH private key to the ssh-agent. If you created your key with a different name, or if you are adding an existing key that has a different name, replace id_rsa in the command with the name of your private key file.

>> $ ssh-add ~/.ssh/id_rsa
3. Add the SSH key to your GitHub account. https://github.com/settings/keys

# HOW TO CREATE REPOSITORY

- go to https://github.com/new

- and you'll see form below

![CREATE REPOSITORY](https://user-images.githubusercontent.com/55352568/67690095-e3169d00-f9ce-11e9-80c6-742326d8e429.png)


Please fullfill Repository name, Description to your repository And choose whether the repository on public or in private mode, please note that you need to pay for the private repository  and don't forget to **checklist** *Initialize this repository with a README*

Then click **Create repository**

And done , you are successfully create a repository

# HOW TO PUSH TO REMOTE REPOSITORY 

## Make sure git is tracking your project.
1. Using your terminal/command line, get inside the folder where your project files are kept: >> cd /path/to/my/codebase.
You cannot do this simply by opening the folder normally, you must do this with the command line/terminal.

  Do you need a refresher on using your command line/terminal? I've compiled my favorite resources here.

2. Check if git is already initialized: *git status*
If you get this error message: **fatal: Not a git repository (or any of the parent directories): .git,** that means the folder you are currently in is not being tracked by git. In that case, initialize git inside your project folder by typing *git init*, then going through the process of adding and committing your project.

If you get another error message, read carefully what it says. Is it saying *git isn't installed on your computer* by saying that the word *'git' is not recognized?* OR *Is it saying that you're already in a folder or sub-folder where git is initialized?* **Google your error and/or output to understand it, and to figure out how to fix it.**

  Do you need a refresher on git? Go through Codecademy's git course.

## Create a remote, empty folder/repository on Github.
1. Login to your Github account.

2. At the top right of any Github page, you should see a '+' icon. Click that, then select 'New Repository'.

3. Give your repository a name--ideally the same name as your local project. If I'm building a travel application, its folder will be called 'travel-app' on my computer, and 'travel-app' will be the Github repository name as well.

4. Click 'Create Repository'. The next screen you see will be important, so don't close it.

## Connect your local project folder to your empty folder/repository on Github.
The screen you should be seeing now on Github is titled 'Quick setup — if you’ve done this kind of thing before'.

Copy the link in the input right beneath the title, it should look something like this: https://github.com/mindplace/test-repo.git This is the web address that your local folder will use to push its contents to the remote folder on Github.

1. Go back to your project in the terminal/command line.

2. In your terminal/command line, type git remote add origin [copied web address]

Example: git remote add origin https://github.com/mindplace/test-repo.git

3. Push your branch to Github: git push origin master

4. Go back to the folder/repository screen on Github that you just left, and refresh it. The title 'Quick setup — if you’ve done this kind of thing before' should disappear, and you should see your files there.










