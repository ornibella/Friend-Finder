// display a JSON of all possible friends
app.get("/api/friends?", function(req, res) {
  var chosen = req.params.friends;

  if (chosen) {
    console.log(chosen);

    for (var i = 0; i < friends.length; i++) {
      if (chosen === friends[i].uniqueID) {
        return res.json(friends[i]);
      }
    }
    return res.json(false);
  }
  return res.json(friends);
});

// Takes in JSON input to handle incoming survey results
app.post("/api/friends", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  var newFriend = req.body;

  console.log(newFriend);

  // We then add the json the user sent to the character array
  friends.push(newFriend);

  // We then display the JSON to the users
  // res.json(newTable);
  res.json(true);

});
