# Alibaba Search

## search.spec.js

In this file, the following steps have been done to answer the question:

- Loading Alibaba site
- Finding "رفت و برگشت" option and checking it
- Finding "تهران" and "مشهد" from menu and clicking it
- Finding 24 and 27 day and clicking it
- Adding passenger count with finding increase button and clicking it for four times
- Searching the result with submiting the form
- Waiting for loading the result page, showing and hidding the loading banner, and finally showing the result of search
- Finding "تماس با ما" link.
- Scrolling viewport on that link and clicking it.
- Waiting for loading the page.
- Assertion on title of page ("تماس با ما") in the top of page

## search-v2.spec.js

This is similar to "search.spec.js" file. The difference is that the search date is selected based on the current date:

`const startDay = dayAfter(10);`
`const endDay = dayAfter(20);`

`dayAfter` method returns the number of days specified after the current date.
