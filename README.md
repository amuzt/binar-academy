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










