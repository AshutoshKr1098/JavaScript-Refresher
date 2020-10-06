# Asynchronous JavaScript

JS is a single threaded programming language and most of the task is done in top down manner, that means we
follow a sequential order of execution of code. 

Now, this is ok for some types of general used programs such as printing statements or looping, but the problem
starts to arise when we have some task that is too heavy to perform. 
Now that task will block the further execution of program until it gets finished. 

# blocking programs
Such programs are blocking programs and they waste the resource such as CPU as well as performance of our code.
To deal with such problems, we have our topic of Asynchronous JavaScript.

# 3 main Asynchronous patterns

1. Callbacks
2. Promises
3. Async/Await
