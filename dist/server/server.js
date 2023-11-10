"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
require('ignore-styles');
var renderFormSummary = require('./renderFormSummary');
var express = require('express');
var ejs = require('ejs');
var path = require('path');
var bodyParser = require('body-parser');
var multer = require('multer');
var session = require('express-session');
var MongoStore = require('connect-mongo');
var nodemailer = require('nodemailer');
var sgMail = require('@sendgrid/mail');
var MemoryStore = require('session-memory-store')(session);
var AWS = require('aws-sdk');
var archiver = require('archiver');
var axios = require('axios');
AWS.config.update({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region: process.env.S3_REGION
});
var s3 = new AWS.S3();
var app = express();
var PORT = 3000;
function generateHTML(formData) {
  // Start with basic structure
  var html = "\n        <html>\n            <body>\n                <h2>Form Submission</h2>\n    ";

  // Add form text data
  for (var key in formData) {
    if (key !== "referenceFiles") {
      html += "<p><strong>".concat(key, ":</strong> ").concat(formData[key], "</p>");
    }
  }

  // Add images (You can adjust this if the structure of formData changes)
  formData.referenceFiles.forEach(function (file) {
    html += "<img src=\"".concat(file.s3Url, "\"/>"); // Use the S3 URL of the uploaded image
  });

  // Close tags
  html += "\n            </body>\n        </html>\n    ";
  return html;
}
function uploadToS3(_x, _x2, _x3) {
  return _uploadToS.apply(this, arguments);
}
function _uploadToS() {
  _uploadToS = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(content, fileName, contentType) {
    var params;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          params = {
            Bucket: 'mpdecalsformstorage',
            Key: fileName,
            Body: content,
            ContentType: contentType,
            ACL: 'public-read'
          };
          _context2.next = 3;
          return s3.putObject(params).promise();
        case 3:
          return _context2.abrupt("return", "https://".concat(params.Bucket, ".s3.amazonaws.com/").concat(params.Key));
        case 4:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _uploadToS.apply(this, arguments);
}
app.set('view engine', 'ejs');

// Middleware for serving static files
app.use('/static', express["static"](path.join(__dirname, '../../node_modules')));
app.use(express["static"](path.join(__dirname, '../../public')));

// Middleware for parsing incoming payloads
app.use(bodyParser.urlencoded({
  extended: true,
  limit: '50mb'
}));
app.use(bodyParser.json({
  limit: '50mb'
}));
app.use(express.json());

// Multer setup for file uploads
var storage = multer.diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function filename(req, file, cb) {
    cb(null, file.originalname);
  }
});
var upload = multer({
  storage: storage
});

// Session setup

app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: false,
  store: new MemoryStore(),
  cookie: {
    maxAge: 3600000 // 1 hour
  }
}));

// Routes
app.get('/', function (req, res) {
  res.render('layout', {
    body: 'home'
  });
});
app.get('/form', function (req, res) {
  res.render('layout', {
    body: 'form'
  });
});
var images = [{
  path: 'images/image0.jpg',
  title: 'Image 1',
  description: 'Some description about the image.'
}, {
  path: 'images/image1.jpg',
  title: 'Image 2',
  description: 'Another description.'
}, {
  path: 'images/image2.jpg',
  title: 'Image 3',
  description: 'Some description about the image.'
}, {
  path: 'images/gallery1.jpg',
  title: 'Image 1',
  description: 'Some description about the image.'
}, {
  path: 'images/gallery2.jpg',
  title: 'Image 2',
  description: 'Another description.'
}, {
  path: 'images/gallery3.jpg',
  title: 'Image 3',
  description: 'Some description about the image.'
}, {
  path: 'images/image3.jpg',
  title: 'Image 3',
  description: 'Some description about the image.'
}, {
  path: 'images/image4.jpg',
  title: 'Image 4',
  description: 'Another description.'
}, {
  path: 'images/image5.jpg',
  title: 'Image 5',
  description: 'Some description about the image.'
}, {
  path: 'images/gallery4.jpg',
  title: 'Image 4',
  description: 'Another description.'
}, {
  path: 'images/gallery5.jpg',
  title: 'Image 5',
  description: 'Some description about the image.'
}, {
  path: 'images/image6.jpg',
  title: 'Image 3',
  description: 'Some description about the image.'
}, {
  path: 'images/image7.jpg',
  title: 'Image 4',
  description: 'Another description.'
}, {
  path: 'images/image8.jpg',
  title: 'Image 5',
  description: 'Some description about the image.'
}, {
  path: 'images/gallery6.jpg',
  title: 'Image 6',
  description: 'Another description.'
}, {
  path: 'images/gallery7.jpg',
  title: 'Image 7',
  description: 'Some description about the image.'
}, {
  path: 'images/gallery8.jpg',
  title: 'Image 8',
  description: 'Another description.'
}, {
  path: 'images/image9.jpg',
  title: 'Image 3',
  description: 'Some description about the image.'
}, {
  path: 'images/image10.jpg',
  title: 'Image 4',
  description: 'Another description.'
}, {
  path: 'images/image11.jpg',
  title: 'Image 5',
  description: 'Some description about the image.'
}, {
  path: 'images/gallery9.jpg',
  title: 'Image 9',
  description: 'Some description about the image.'
}, {
  path: 'images/gallery10.jpg',
  title: 'Image 10',
  description: 'Another description.'
}, {
  path: 'images/gallery11.jpg',
  title: 'Image 11',
  description: 'Some description about the image.'
}];
app.get('/gallery', function (req, res) {
  res.render('layout', {
    body: 'gallery',
    images: images
  });
});
app.get('/contact', function (req, res) {
  res.render('layout', {
    body: 'contact',
    query: req.query
  });
});
app.get('/get-form-data', function (req, res) {
  try {
    db.collection('tempFormData').findOne({
      sessionId: req.sessionID
    }, function (err, doc) {
      if (err) {
        throw err;
      }
      res.json(doc ? doc.data : {});
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to fetch form data"
    });
  }
});
app.post('/save-form-data', function (req, res) {
  try {
    var formData = {
      sessionId: req.sessionID,
      data: req.body,
      createdAt: new Date()
    };
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to save form data"
    });
  }
});
app.get('*.css', function (req, res) {
  res.status(404).send('CSS file not found.');
});

// SendGrid Setup
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
var transporter = nodemailer.createTransport({
  service: 'SendGrid',
  auth: {
    user: 'apikey',
    // 'apikey' is a magic word, don't change it
    pass: process.env.SENDGRID_API_KEY
  }
});
app.post('/contact', function (req, res) {
  var _req$body = req.body,
    name = _req$body.name,
    email = _req$body.email,
    message = _req$body.message;
  var mailOptions = {
    from: process.env.FROM_EMAIL,
    to: process.env.TO_EMAIL,
    subject: "Message from ".concat(name),
    text: message,
    html: "<h1>Hi Pedro</h1><p>".concat(name, " is trying to get in contact with you regarding MP Decals USA! Here is their message: </p><p>").concat(message, "</p>\n        <p>Their email is ").concat(email, "</p>. ")
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.redirect('/contact?success=false');
    } else {
      console.log('Email sent: ' + info.response);
      res.redirect('/contact?success=true');
    }
  });
});
var recentFiles = [];
app.post('/send-email', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var formData, _iterator, _step, _file, _buffer, _fileKey, _s3Url, file, buffer, fileKey, s3Url, htmlContent, htmlKey, htmlS3Url, msg;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          formData = req.body; // 1. Upload each image in referenceFiles to S3
          _iterator = _createForOfIteratorHelper(formData.referenceImages);
          _context.prev = 3;
          _iterator.s();
        case 5:
          if ((_step = _iterator.n()).done) {
            _context.next = 15;
            break;
          }
          _file = _step.value;
          _buffer = Buffer.from(_file.dataURL.split(',')[1], 'base64'); // Convert data URL to buffer
          _fileKey = "images/".concat(Date.now(), "-").concat(_file.name);
          _context.next = 11;
          return uploadToS3(_buffer, _fileKey, _file.type);
        case 11:
          _s3Url = _context.sent;
          _file.s3Url = _s3Url; // Add the S3 URL to the file object
        case 13:
          _context.next = 5;
          break;
        case 15:
          _context.next = 20;
          break;
        case 17:
          _context.prev = 17;
          _context.t0 = _context["catch"](3);
          _iterator.e(_context.t0);
        case 20:
          _context.prev = 20;
          _iterator.f();
          return _context.finish(20);
        case 23:
          file = formData.logo;
          buffer = Buffer.from(file.dataURL.split(',')[1], 'base64'); // Convert data URL to buffer
          fileKey = "images/".concat(Date.now(), "-").concat(file.name);
          _context.next = 28;
          return uploadToS3(buffer, fileKey, file.type);
        case 28:
          s3Url = _context.sent;
          file.s3Url = s3Url;

          // 2. Generate the HTML content with updated formData
          htmlContent = renderFormSummary(formData, formData.price); // 3. Upload the generated HTML content to S3
          htmlKey = "form-submissions/".concat(Date.now(), ".html");
          _context.next = 34;
          return uploadToS3(htmlContent, htmlKey, 'text/html');
        case 34:
          htmlS3Url = _context.sent;
          // 4. Send an email with the S3 link to the HTML content
          msg = {
            from: process.env.FROM_EMAIL,
            to: process.env.TO_EMAIL,
            subject: 'New form submission',
            html: "<h1>Hi Pedro</h1> <p>You have a new decal request submission!</p> <p>Here is the Link: <a href=\"".concat(htmlS3Url, "\">").concat(htmlS3Url, "</a></p>"),
            attachments: [] // You can still add attachments if needed
          };

          transporter.sendMail(msg, function (error, info) {
            if (error) {
              console.error("Error sending email:", error);
              res.status(500).send("Error sending email.");
            } else {
              console.log("Email sent:", info.response);
              res.status(200).send("Email sent successfully.");
            }
          });
          _context.next = 43;
          break;
        case 39:
          _context.prev = 39;
          _context.t1 = _context["catch"](0);
          console.error("Error in processing form submission:", _context.t1);
          res.status(500).send("Error processing form submission.");
        case 43:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 39], [3, 17, 20, 23]]);
  }));
  return function (_x4, _x5) {
    return _ref.apply(this, arguments);
  };
}());
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html')); // if you have an index.html in the public directory
});
// Start the server
app.listen(PORT, function () {
  console.log("Server is running on http://localhost:".concat(PORT));
});