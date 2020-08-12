# Data Structures

- **Data Structure**: collection of data.

1. How to build one.
2. How to use it.

## How Computers Store Data

- **CPU**.
- **RAM**: (Random Access Memory). _Variables_ are stored in the RAM. Stored values are deleted on
  restart.
- **Storage**: ROM. Storage is persistent.

## RAM

- Access to RAM is faster.
- RAM is a massive storage area.
  - _Addresses_: numbered shelves that store data.
  - _Byte_: series of 8 _bits_ that hold `1s` and `0s`. Each number is a **bit** (tiny electrical
    switch that can be turned on or off).
- CPU is connected to a _memory controller_ (that reads/writes to the memory).

  - CPU asks the RAM what's in each shelf directly without having to go through each one.
  - The closer the information is to the CPU the faster a program can run.

- Each CPU has a _cache_ (a tiny memory that stores a copy of the recent stuff).

  - _LRU cache_.

- **Data structures**: an arragment of data, ways to store information in RAM.
  - _Integers_: stored in X bits (Y bytes). Recent ones in 64 bits.
    - 8-bit systems can hold _255 bits_ of information.
    - 16-bit systems can hold _65,536 bits_ of information.
    - 32-bit systems can hold _2,147,483,647 bits_ of information.
    - 64-bit systems can hold _9,223,372,036,854,775,807_ bits\* of information.

## Operations in Data Structures

- **Access**.
- **Insertion**.
- **Deletion**.
- **Traversal**: access each data once.
- **Searching**: find the location of a data item if it exists.
- **Sorting**: order values.

## Resources

- [Data Structures for Coding Interviews: Computer Science in Plain English | Interview Cake](https://www.interviewcake.com/article/python/data-structures-coding-interview)
- [Data Structures and Algorithms - Beau teaches JavaScript - YouTube](https://www.youtube.com/playlist?list=PLWKjhJtqVAbkso-IbgiiP48n-O-JQA9PJ)
