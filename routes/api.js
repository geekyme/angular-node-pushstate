/*
 * Serve JSON to our AngularJS client
 */

// initialize our faux database
var data = {
  "posts": [
    {
      "title": "Suspendisse dignissim orci mi",
      "text": "Sed condimentum rutrum nisl vitae pretium. Morbi commodo turpis ut eros convallis adipiscing. Ut orci arcu, cursus eu molestie sit amet, malesuada eget urna. Etiam non sem vel tellus sodales sodales. Maecenas accumsan, purus non laoreet rutrum, est tortor gravida odio, vitae cursus nulla urna convallis lorem. Integer id feugiat nisi. Praesent imperdiet ullamcorper consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat turpis lectus, ut dapibus lorem ornare a. Quisque tempor, nisi ac viverra semper, arcu nibh faucibus nibh, id aliquet tellus nunc id sem."
    },
    {
      "title": "Aliquam massa risus",
      "text": "Pellentesque volutpat, est eu euismod ultricies, sapien metus tempus mauris, at tristique felis justo id purus. Nullam at accumsan neque, at ornare risus. Ut blandit lacus lectus, eu ornare velit elementum ac. Quisque nec cursus augue."
    },
    {
      "title": "Mauris est ipsum",
      "text": "Phasellus vitae sapien augue. Cras quis sapien sit amet mi feugiat placerat. Nullam ultricies erat eget ante suscipit accumsan. Suspendisse nisi urna, vestibulum a gravida in, posuere a neque. Quisque dictum magna eleifend dapibus euismod. Nunc vehicula vitae nisi id auctor. Etiam convallis mattis nulla nec lacinia."
    }
  ]
};

// GET

exports.posts = function (req, res) {
  var posts = [];
  data.posts.forEach(function (post, i) {
    posts.push({
      id: i,
      title: post.title,
      text: post.text.substr(0, 50) + '...'
    });
  });
  res.json({
    posts: posts
  });
};

exports.post = function (req, res) {
  var id = req.params.id;
  if (id >= 0 && id < data.posts.length) {
    res.json({
      post: data.posts[id]
    });
  } else {
    res.json(false);
  }
};

// POST
exports.addPost = function (req, res) {
  data.posts.push(req.body);
  res.json(req.body);
};

// PUT
exports.editPost = function (req, res) {
  var id = req.params.id;

  if (id >= 0 && id < data.posts.length) {
    data.posts[id] = req.body;
    res.json(true);
  } else {
    res.json(false);
  }
};

// DELETE
exports.deletePost = function (req, res) {
  var id = req.params.id;

  if (id >= 0 && id < data.posts.length) {
    data.posts.splice(id, 1);
    res.json(true);
  } else {
    res.json(false);
  }
};