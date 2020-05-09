---
title: CSS Specificity Explained
date: 2020-05-09T12:26:41.207Z
thumbnail: ""
description: What is CSS Specificity? How do you calculate it?
tags:
  - web
---
# What is CSS Specificity?

CSS Specificity is a set of rules and how a browser decides which CSS styles are applied to an element. This is based on matching rules made up of different CSS selectors. CSS Specificity becomes important as it could be a reason as to why you find that your CSS doesn’t always work as expected.

# An Example
Here we have some HTML that has an unordered list with some list items. The first list item has a class of ‘first-item’.

![HTML Example](https://dev-to-uploads.s3.amazonaws.com/i/8oug9umvob4yqge14vs3.png)

Here we have our CSS, we want to target the list item with the class ‘first-item’ and change the color of the text but we have two selectors targeting the same element. Take a guess and see if you can figure out what color the text will be and why?

![CSS Example 1](https://dev-to-uploads.s3.amazonaws.com/i/20locchyj8py08d0ib7q.png)

If you guessed blue, you are correct! This is because the specificity is higher in the second selector. To understand this, we will go through how CSS Specificity is calculated in the next section.

# How To Calculate CSS Specificity

You might be wondering **how** do you actually calculate the Specificity? 

Specificity is based on this order:

- Inline Styles
- ID’s
- Classes, attributes, and pseudo-classes
- Elements and Pseudo Elements

For the selector we wish to calculate, we go through it and +1 for each of the above categories. You can imagine the specificity visual looks like this: 

![Specificity Chart](https://dev-to-uploads.s3.amazonaws.com/i/97vkamgugqkzpw6l182o.png)

Let’s calculate the examples above now:
So first, we have just a simple class

![First Example](https://dev-to-uploads.s3.amazonaws.com/i/b468jlxbbcu59shil0ti.png)

Now then, using the order we showed above:

![First Example Explained](https://dev-to-uploads.s3.amazonaws.com/i/e358p0erj1chv9y9z5do.png)

As a result, the specificity is 0,0,1,0 which you can merge into a number such as 0010 which can be looked at like 10.

> Plugging this into a calculator we get the same result: 

![First Result Specificity](https://dev-to-uploads.s3.amazonaws.com/i/rqlowxsvvbpvofif8n77.PNG)

For the second example:

![Second Example](https://dev-to-uploads.s3.amazonaws.com/i/gxqedufgua15hio1pmnt.png)

Using the logic above:

![Second Example Explained](https://dev-to-uploads.s3.amazonaws.com/i/0ryy7bzqgqa56tqrurqm.png)

As a result, the specificity is 0,0,1,2 or 0012.

In this case, 0012 > 0010, and because of this the second CSS selector would be set and the text color will be blue.

![Second Result Specificity](https://dev-to-uploads.s3.amazonaws.com/i/ruy1n81el6tf5v351ils.PNG)

Of course, the order in which you write does matter to some degree, for example, if we had both selectors of the same specificity:

![CSS Cascade Importance](https://dev-to-uploads.s3.amazonaws.com/i/heqe4rv0pp6clja6wibs.png)

The selector written last will take effect and as a result, the color would be red because it was written later than the first one due to how CSS cascades styles. 

# Important Notes

- The **Universal Selector** * contributes nothing to the specificity, in other words, it has 0,0,0,0. The same also goes for any combinators such as (~) or (+).
- The :not() pseudo-class also contributes nothing, however, elements or classes **in the parentheses** do count.
- Inline styles **always overwrite styles in an external CSS document** so they have the highest specificity.
- The **!important is an exception** in CSS specificity as anything marked with !important will **always take the highest priority**. Although it is best to avoid using !important and trying to level the specificity.

Finally, It can be tedious to always calculate this manually as such I've listed some good calculators below. This calculator can help you calculate the specificity by just pasting in the CSS style declarations.

# CSS Specificity Calculators

- https://specificity.keegan.st/
- https://www.codecaptain.io/tools/css-specificity-calculator
