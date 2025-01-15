```javascript
// Solution: Handling missing 'city' field using $ifNull
db.users.aggregate([
  {
    $match: { age: { $gt: 25 } } 
  },
  {
    $group: {
      _id: { $ifNull: [ "$city", "Unknown" ] },
      averageAge: { $avg: "$age" },
      totalCount: { $sum: 1 }
    }
  }
]);
```