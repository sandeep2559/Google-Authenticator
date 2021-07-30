const express = require("express");
const passport = require("passport");
const googleStrategy = require("passport-google-oauth20");
const app = express();



passport.use(
    new googleStrategy(
      {
        clientID:
          "490523312761-i32mpemsd37keij1eoc26i1ipbjeb3d9.apps.googleusercontent.com",
        clientSecret: "hL2VLRntcN3e8dDLq47AUbev",
        callbackURL: "/auth/google/callback",
      },
      (accessToken, refreshToken, profile, done) => {
        console.log(accessToken);
        console.log(refreshToken);
        console.log(profile);
      }
    )
  );
  
  app.get("/", function (req, res) {
    res.send("<h1>hello world</h1>");
  });
  
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );
  app.get(
    "/auth/google/callback",
    passport.authenticate("google", {
      scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
      ],
      accessType: "offline",
      approvalPrompt: "force",
    })
  );

  const port = process.env.PORT || 3000;
  
  app.listen(port, () => {
    console.log("Server is started on 3000");
  });
  

// 490523312761-i32mpemsd37keij1eoc26i1ipbjeb3d9.apps.googleusercontent.com

// 490523312761-h3i1kcuia8c8ggalvbg4uvpvl5ensio6.apps.googleusercontent.com