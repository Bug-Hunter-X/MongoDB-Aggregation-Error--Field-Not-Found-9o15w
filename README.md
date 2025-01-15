# MongoDB Aggregation Error: Field Not Found

This repository demonstrates a common error encountered when working with MongoDB aggregation pipelines: attempting to use a field that does not exist within the documents being processed.

## Bug Description

The provided JavaScript code attempts to perform a group aggregation using the `$group` operator. The aggregation aims to calculate the average age of users based on their city. However, the code might fail if the `city` field is missing from the documents in the `users` collection.

## Solution

The solution involves verifying the existence of the field before using it in the aggregation pipeline. One approach would be to use the `$exists` operator within the `$match` stage to filter out documents where the `city` field is missing.  If you need to handle the missing field gracefully, you could use the `$ifNull` operator or a similar approach to provide a default value.