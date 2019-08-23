# How Team Members Contribute to the EEVEE Ensemble Project:

# Branch Types:
Master branch (Production Environment - ONLY the Implementation branch will feed into this branch) <br>
Implementation branch (all other branches feed into this branch for knitting/testing/reviewing/de-bugging) <br>

# Steps for creating good pull requests:

1. Create my new branch
	- git checkout *implementation*
	- git pull
	- git checkout -b my-new-branch-name

1. Make Changes (*Repeat these steps until you are done with the work.*)
	- git add .
	- git commit -m "my notes on changes"
1. When done with the coding work
	- git pull origin *implementation*
1. Resolve Conflicts by repeating the following 2 steps 
	- git add .
	- git commit -m "my notes and if co-authored with another team member"
	- **If there are no conflicts**
	- git push origin my-new-branch-name
1. Go to Github and make the pull request

1. In Github, another team member will accept _all_ changes into the implementation branch and merge into implementation.

# Quality Control of Master Branch
_In Github, the team requires 3 people to sign off on pull requests from implementation to master branch_

- To approve:
	1. Pull the implementation
	1. Run it yourself and look for bugs, issues, etc.
	1. If issues/bugs found, then comment and decline pull request
	1. If no issues, then approve!
*The team will have one member assigned as the "daily de-bugger" It is highly recommended to ask for help as needed from other team members or TA's)


