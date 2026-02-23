# Objectives
- Allow users to perform a visual search on either a whole image or a subsection of an image

## Business Objective
- Increase user engagement. The user will stay around if they can find things that they want
- Increased user retention. Users will return if the search is good and finds 
- Improve advertising revenue. Good advertising matches, More users, longer sessions, and more frequent sessions should result in more total advert clicks

## Machine Learning Objective
- Accurately retrieve images that are visually similar to the user's query image

# Functional Requirements
- Assume we need to have a front end service

# Questions
1. Are users authenticate, anonymous or both?
2. Do we need user personalization?
3. Should we rank from most to least similar?
4. Are there limits on query image size? 
5. Are there limits on uploaded image size? Max or Min
6. Do we have image metadata?
    - Are images tagged, do they have text descriptions, what about titles?
    - User defined tags or hash tags?
7. Can users share, like, or save images? What about dislike?
8. Can users combine their query images with text for the search?
9. Do we need to do pagination and continuous searches or just a select amount to be displayed?

# Answers
1. Both
2. No
3. Yes
4. No
5. Yes, HD only. 1280 x 720
6. They have optional user defined hashtags and descriptions. No titles
7. Yes to the first three but they cannot dislike
8. No, but we can treat this as an extension
9. Let's start with a set amount


# Non-Functionl Requirements
- Assume billions of images
- Assume hundreds of thousands of parallel active users

# Questions
1. Should we assume that the search needs occur in a second or less?

# Answers
2. Yes


# ML Requirements

# Questions
1. Do we already have labeled data?

# Answers
