---
title: SemVer and Conventional Commits
date: 2020-05-09T12:24:37.415Z
thumbnail: https://res.cloudinary.com/luvuong-le/image/upload/v1589027125/Blog%20Posts/Semantic%20Versioning/packagejson_vtckin.png
description: SemVer and Conventional Commits Explained
tags:
  - programming
  - web
---
## SemVer

### What is SemVer (Semantic Versioning)?

This is something I never really looked into properly until I came across Conventional Commits (more on this later) but I feel it is important to know about.

Short for **Semantic Versioning**, SemVer refers to a standard or versioning system created by **Tom Preston Werner (co-founder of Github)** that’s used to communicate what changes are in a release.

Versioning has become more important during these times due to rapidly developing tools, frameworks, and libraries.

### Why is SemVer important?

The goal of SemVer was to bring more sanity to management for rapid moving software release targets. This is important because some changes can introduce breaking changes and using SemVer can help manage and keep track of every change in the development phase.

Granted, teams don’t have to conform to SemVer and can use their own versioning system if they would like but having a standardized system that is widely used helps so that everyone can agree and understands it as well as keeping things clean.

### How does Semantic Versioning work?

As far as Semantic Versioning goes, there are three main numbers that define the version:

Here we have a version format of X.Y.Z (Major.Minor.Patch):

- **Major Version (X)**: Introduces major changes to the code and breaking changes toward backward compatibility

- **Minor Version (Y)**: These code changes don’t introduce breaking changes. This could be adding a new feature that doesn't break changes but are not exactly bug fixes.

- **Patches (Z)**: Mainly correspond to bug fixes

We can see some examples below of real packages:

![Nodemon Versioning Example](https://dev-to-uploads.s3.amazonaws.com/i/eflbxpowrz2ln7p0zjp8.png)

### Nodemon (v2.0.3)

- **Major** -> 2
- **Minor** -> 0
- **Patch** -> 3

![Express Versioning Example](https://dev-to-uploads.s3.amazonaws.com/i/glrd3ezmqzll9c27h28h.png)

### Express (v4.17.1)

- **Major** -> 4
- **Minor** -> 17
- **Patch** -> 1

You will see this standard used in a wide range of packages you are using from NPM if you look in your package.json file:

![Package JSON example](https://dev-to-uploads.s3.amazonaws.com/i/0jyimje3ara8k0j8d0h9.png)

### Start at v0.1.0 or v1.0.0?

Now you might be wondering where exactly should you start from?

Typically if you create a new package.json the default version will be v1.0.0 if you choose not to put anything in or if you use the **-y flag**.

Convention recommends that in the initial development phase the starting version should be 0.1.0 which makes sense since it’s not in production yet.

The version should only be bumped to 1.0.0 only if it is being used in production and stable.

### How can you use this versioning system in your own projects?

One popular way is to make use of the **Conventional Commits Standard** to automate the version changes based on structured commit messages.

## Conventional Commits

### What are Conventional Commits?

Conventional Commits is a convention on top of commit messages that are used to automate version changes. It provides an easy set of rules for creating commit messages and works well with SemVer by describing features, fixes and breaking changes that correspond to SemVer standards.

### Why should you use Conventional Commits?

There are lots of benefits to using Conventional Commits such as automatic semantic version bumps but there are other reasons such as:
- Automatically generated CHANGELOGs
- Easier for people to contribute to projects and explore a clean structured commit history
- Cleaner commit messages that clearly communicates what type of commit it is.

### How does it work?

By Conventional Commit standards, a commit has a structure that indicates the type of commit it is and how it should bump up the version **based on SemVer**:

- **Fix**: Patches a bug in the code and directly corresponds to the **PATCH**
- **Feat**: Describes a new feature and corresponds to the **MINOR**
- **Breaking Change**: This indicates **MAJOR** changes that introduces breaking changes.

There are many other types of commits that don’t bump up the version or have some other type of role such as:
```
build, chore, ci, docs, style, refactor, perf, test
```

A typical commit message looks like:

```
feat: allow image uploading functionality
docs: edited typo in docs
fix: resolved some bug fixes
```

### To conclude:

I’m by no means an expert but as you can see by using SemVer and Conventional Commits together, we can make versioning a less painful process and also have a cleanly structured approach to all the versioning headaches that may have been around previously.

In order to not make this post too lengthy, in the next post I will be showing an example on how to set this up using the tools **Commitizen and Lerna** to demonstrate this in action.

### Resources

For more information you can look at these links below:

- https://semver.org/
- https://www.conventionalcommits.org/en/v1.0.0-beta.4/
