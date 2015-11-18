## File Stream

- In this chapter we will learn how to read data from file

- For this chapter, we needed large chuck of data and we got it from <https://github.com/zemirco/sf-city-lots-json>

- There were more than 1,00,000 lines of data, we chopped off most of it and kept only 5000 lines which is more than sufficient for us

#### reading file through file streams

- We will require node core module `fs` for this purpose

- When `fs` reads file, it emits `on` event on every chunk of data

- We will listen to that event and print out some of the useful information

- When `fs` completes file read, it emits 'end' event 

#### pausing streams

- In the previous section we have seen that file streaming started as soon as we ran the program

- In this section, we will see how we can pause the stream for 1 second and then resume streaming. see `stream2.js` file

- In file `stream3.js` we have example of pausing for 1 sec after every chunk read

