const getProfile = (req, res) => {
  res.json({
    name: "Manipavan Reddy Chandhireddy",
    role: "AIML Engineer",
    college: "VNRVJIET",
    degree: "B.Tech CSE-AIML",
  });
};

export { getProfile };  