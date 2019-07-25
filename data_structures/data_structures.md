# Data Structures

* **Data Structure**: collection of data.

1. How to build one.
2. How to use it.

## How Computers Store Data

* **CPU**.
* **RAM**: (Random Access Memory). *Variables* are stored in the RAM. Stored
  values are deleted on restart.
* **Storage**: ROM. Storage is persistent.

## RAM

* Access to RAM is faster.
* RAM is a massive storage area.
  * *Addresses*: numbered shelves that store data.
  * *Byte*: series of 8 *bits* that hold `1s` and `0s`. Each number is a **bit** (tiny electrical
    switch that can be turned on or off).
* CPU is connected to a *memory controller* (that reads/writes to the memory).
  * CPU asks the RAM what's in each shelf directly without having to go through
  each one.
  * The closer the information is to the CPU the faster a program can run.

* Each CPU has a *cache* (a tiny memory that stores a copy of the recent stuff).
    * *LRU cache*.

* **Data structures**: an arragment of data, ways to store information in RAM.
  * *Integers*: stored in X bits (Y bytes). Recent ones in 64 bits.
    * 8-bit systems can hold *255 bits* of information.
    * 16-bit systems can hold *65,536 bits* of information.
    * 32-bit systems can hold *2,147,483,647 bits* of information.
    * 64-bit systems can hold *9,223,372,036,854,775,807* bits* of information.

## Operations in Data Structures

* **Access**.
* **Insertion**.
* **Deletion**.
* **Traversal**: access each data once.
* **Searching**: find the location of a data item if it exists.
* **Sorting**: order values.
