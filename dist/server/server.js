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
var media = [{
  path: 'videos/Video.mp4',
  title: 'Video 1',
  description: 'Some description about the Video.',
  type: 'video'
}, {
  path: 'videos/Video_1.mp4',
  title: 'Video 2',
  description: 'Another description.',
  type: 'video'
}, {
  path: 'videos/Video_2.mp4',
  title: 'Video 3',
  description: 'Some description about the Video.',
  type: 'video'
}, {
  path: 'images/image0.jpeg',
  title: 'Image 1',
  description: 'Some description about the image.',
  type: 'image'
}, {
  path: 'images/image1.jpeg',
  title: 'Image 2',
  description: 'Another description.',
  type: 'image'
}, {
  path: 'images/image2.jpeg',
  title: 'Image 3',
  description: 'Some description about the image.',
  type: 'image'
}, {
  path: 'images/gallery1.jpg',
  title: 'Image 1',
  description: 'Some description about the image.',
  type: 'image'
}, {
  path: 'images/gallery2.jpg',
  title: 'Image 2',
  description: 'Another description.',
  type: 'image'
}, {
  path: 'images/gallery3.jpg',
  title: 'Image 3',
  description: 'Some description about the image.',
  type: 'image'
}, {
  path: 'images/image3.jpeg',
  title: 'Image 3',
  description: 'Some description about the image.',
  type: 'image'
}, {
  path: 'images/image4.jpeg',
  title: 'Image 4',
  description: 'Another description.',
  type: 'image'
}, {
  path: 'images/image5.jpeg',
  title: 'Image 5',
  description: 'Some description about the image.',
  type: 'image'
}, {
  path: 'images/gallery4.jpg',
  title: 'Image 4',
  description: 'Another description.',
  type: 'image'
}, {
  path: 'images/gallery5.jpg',
  title: 'Image 5',
  description: 'Some description about the image.',
  type: 'image'
}, {
  path: 'images/image6.jpeg',
  title: 'Image 3',
  description: 'Some description about the image.',
  type: 'image'
}, {
  path: 'images/image7.jpeg',
  title: 'Image 4',
  description: 'Another description.',
  type: 'image'
}, {
  path: 'images/image8.jpeg',
  title: 'Image 5',
  description: 'Some description about the image.',
  type: 'image'
}, {
  path: 'images/gallery6.jpg',
  title: 'Image 6',
  description: 'Another description.',
  type: 'image'
}, {
  path: 'images/gallery7.jpg',
  title: 'Image 7',
  description: 'Some description about the image.',
  type: 'image'
}, {
  path: 'images/gallery8.jpg',
  title: 'Image 8',
  description: 'Another description.',
  type: 'image'
}, {
  path: 'images/image9.jpeg',
  title: 'Image 3',
  description: 'Some description about the image.',
  type: 'image'
}, {
  path: 'images/image10.jpeg',
  title: 'Image 4',
  description: 'Another description.',
  type: 'image'
}, {
  path: 'images/image11.jpeg',
  title: 'Image 5',
  description: 'Some description about the image.',
  type: 'image'
}, {
  path: 'images/gallery9.jpg',
  title: 'Image 9',
  description: 'Some description about the image.',
  type: 'image'
}, {
  path: 'images/gallery10.jpg',
  title: 'Image 10',
  description: 'Another description.',
  type: 'image'
}, {
  path: 'images/gallery11.jpg',
  title: 'Image 11',
  description: 'Some description about the image.',
  type: 'image'
}];
app.get('/gallery', function (req, res) {
  res.render('layout', {
    body: 'gallery',
    media: media
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
    subject: "New Contact Message from ".concat(name),
    html: "\n            <h1 style=\"color: #004aad;\">Contact Form Submission</h1>\n            <p style=\"font-size: 16px;\"><strong>".concat(name, "</strong> has sent a message through the contact form on the MpDecals USA website.</p>\n            <h2 style=\"color: #004aad;\">Message Details:</h2>\n            <div style=\"background-color: #f2f2f2; padding: 15px; border-left: 4px solid #e84c3d; margin-bottom: 20px;\">\n                <p style=\"font-size: 16px;\"><strong>Message:</strong></p>\n                <p style=\"font-size: 16px; white-space: pre-line;\">").concat(message, "</p>\n            </div>\n            <p style=\"font-size: 16px;\"><strong>Contact Email:</strong> <a href=\"mailto:").concat(email, "\" style=\"color: #e84c3d;\">").concat(email, "</a></p>\n            <h2 style=\"color: #004aad;\">Next Steps:</h2>\n            <ol style=\"font-size: 16px;\">\n                <li>Review the message and assess the nature of the inquiry.</li>\n                <li>Respond to <strong>").concat(name, "</strong> at <a href=\"mailto:").concat(email, "\" style=\"color: #e84c3d;\">").concat(email, "</a> to provide the necessary information or assistance.</li>\n            </ol>\n            <p style=\"font-size: 16px;\">Please ensure a prompt and courteous response to maintain our high standards of customer service.</p>\n            ")
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
    var formData, _iterator, _step, _file, _buffer, _fileKey, _s3Url, file, buffer, fileKey, s3Url, htmlContent, htmlKey, htmlS3Url, msg, msg2, devMsg, errorDevMsg;
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
            subject: 'New Custom Graphics Design Request Received',
            html: "\n                <h1 style=\"color: #004aad;\">New Design Request Notification</h1>\n                <p style=\"font-size: 16px;\">Hello Team,</p>\n                <p style=\"font-size: 16px;\">We have received a new custom graphics design request via our website. Please review the details at your earliest convenience to initiate the design process.</p>\n                <h2 style=\"color: #004aad;\">Request Details:</h2>\n                <p style=\"font-size: 16px;\">To view the complete submission details, please click on the link below. This will take you to the form submission stored in our AWS S3 bucket.</p>\n                <p style=\"font-size: 16px;\"><strong>Submission Link:</strong> <a href=\"".concat(htmlS3Url, "\" style=\"color: #e84c3d;\">View Submission</a></p>\n                <h2 style=\"color: #004aad;\">Next Steps:</h2>\n                <ol style=\"font-size: 16px;\">\n                    <li>Review the submission details.</li>\n                    <li>Contact the customer for any additional information or clarification if needed.</li>\n                    <li>Prepare a preliminary design mockup based on the request.</li>\n                </ol>\n                "),
            attachments: [] // You can still add attachments if needed
          };

          transporter.sendMail(msg, function (error, info) {
            if (error) {
              console.error("Error sending form email:", error);
              res.status(500).send("Error sending email.");
            } else {
              console.log("Form email sent:", info.response);
              res.status(200).send("Email sent successfully.");
            }
          });
          msg2 = {
            from: process.env.FROM_EMAIL,
            to: formData.email,
            subject: "We've Received Your Design Request - MpDecals USA",
            html: "\n                <p>Dear ".concat(formData.name, ",</p>\n                <p>Thank you for reaching out to MpDecals USA with your custom bike graphics design request! We're excited to inform you that we've successfully received your submission and are eager to dive into the details.</p>\n                <p><strong>What Happens Next?</strong><br>\n                1. <strong>Review Process</strong>: Our team will carefully review the details you've shared to fully understand your vision.<br>\n                2. <strong>Personalized Follow-Up</strong>: Within the next few days, we will reach out to you via email. We'll discuss your design in more detail, offer suggestions, and gather any additional information we might need.<br>\n                3. <strong>Preliminary Quote & Timeline</strong>: After our initial discussion, we will provide you with a preliminary quote and an estimated timeline for your custom graphics.</p>\n                <p>Need to Add More Details? If you wish to add more information to your design request or have any immediate questions, feel free to reach out to us at <a href='mailto:info@mpdecalsusa.com'>info@mpdecalsusa.com</a>. We\u2019re here to make sure your bike graphics turn out exactly as you envision.</p>\n                <p>We appreciate your interest in MpDecals USA and are looking forward to creating something truly unique for your bike. Stay tuned for our follow-up email, and thank you once again for considering us for your custom graphics needs.</p>\n                <p>Warm regards,</p>\n                <p><strong>The MpDecals USA Team</strong></p>\n                <p><a href='https://mpdecalsusa.com'>mpdecalsusa.com</a></p>\n                "),
            attachments: [] // You can still add attachments if needed
          };

          transporter.sendMail(msg2, function (error, info) {
            if (error) {
              console.error("Error sending form email:", error);
              res.status(500).send("Error sending email.");
            } else {
              console.log("Form email sent:", info.response);
              res.status(200).send("Email sent successfully.");
            }
          });
          devMsg = {
            from: process.env.FROM_EMAIL,
            to: process.env.DEV_EMAIL,
            // Your developer email address
            subject: 'Successful Form Submission - MpDecals USA',
            html: "\n                <h1>Form Submission Successful</h1>\n                <p>A new custom graphics design request has been successfully submitted.</p>\n                <p><strong>Submission Link:</strong> <a href=\"".concat(htmlS3Url, "\">").concat(htmlS3Url, "</a></p>\n                <p>Please review the submission details.</p>\n                "),
            attachments: [] // Attachments if needed
          };

          transporter.sendMail(devMsg, function (error, info) {
            if (error) {
              console.error("Error sending notification to developer:", error);
            } else {
              console.log("Notification sent to developer:", info.response);
            }
          });
          res.status(200).send("Emails sent successfully.");
          _context.next = 50;
          break;
        case 44:
          _context.prev = 44;
          _context.t1 = _context["catch"](0);
          console.error("Error in processing form submission:", _context.t1);
          errorDevMsg = {
            from: process.env.FROM_EMAIL,
            to: process.env.DEV_EMAIL,
            // Your developer email address
            subject: 'Form Submission Error - MpDecals USA',
            html: "\n                <h1>Error in Form Submission</h1>\n                <p>An error occurred during a form submission process.</p>\n                <p>Error Details: ".concat(_context.t1.message, "</p>\n                "),
            attachments: [] // Attachments if needed
          };

          transporter.sendMail(errorDevMsg, function (error, info) {
            if (error) {
              console.error("Error sending error notification to developer:", error);
            } else {
              console.log("Error notification sent to developer:", info.response);
            }
          });
          res.status(500).send("Error processing form submission.");
        case 50:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 44], [3, 17, 20, 23]]);
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