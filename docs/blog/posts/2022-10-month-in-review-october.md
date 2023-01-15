---
date: 2022-11-13
authors: [josh-wong]
categories:
  - Month in review
tags:
  - books
  - book reviews
  - software engineering
---

# Month in review - October

This month-in-review post is a digest of topics that I don't cover in dedicated blog posts.

- Finished reading "The Art of Letting Go"
- passGen v3.x updates

<!-- more -->

!!! info "Disclosure"

    **Disclosure:** Some of the links in this post are affiliate links. If you go through those links to make a purchase, I may earn a commission. Note that I only link to products and services if I am actively using them and am greatly satisfied with my experience.

## Finished reading "The Art of Letting Go"

Early in the month, I finished reading <a href="https://amzn.to/3UVhhKq" target="_blank">The Art of Letting Go</a>. As someone who continuously thinks about events and "what if" situations that I don't have control over, this book helped me think about how to move past those times.

The real value was not so much in reading the book, but highlighting parts that resonated with me. I've already referred to some of my highlights, and a month has barely passed since finishing the book.

If you're interested in seeing my highlights, check out [The Art of Letting Go | josh-wong's Kindle highlights & notes](https://josh-wong.github.io/kindle-highlights-notes/The%20Art%20of%20Letting%20GO/)

## passGen v3.x updates

In 2017, I developed **[passGen](https://github.com/josh-wong/passGen)**, which is a Windows app for creating randomly generated, 14-character passwords. At a previous job, I was helping some engineers design the UI of a Windows app, and I wanted to get familiar with C#. I ended up changing jobs soon after and shelved this project.

I revived this old project because I wanted to learn a little about how automatic updates work. Although the automatic-update function isn't pretty or customizable since I used the built-in "Publish" function in Visual Studio, I enjoyed the challenge and learning some basics about the architecture an app uses to check for updates.

Some notable changes include:

- [passGen v3.0.0.0](https://github.com/josh-wong/passGen/releases/tag/v3.0.0): Added an automatic-update function and improved the UI a bit.
- [passGen v3.1.0.0](https://github.com/josh-wong/passGen/releases/tag/v3.1.0): Changed the password length from 10 characters to 14 characters.

If you're interested in how passGen works, visit [passGen documentation](https://josh-wong.github.io/passGen/).
