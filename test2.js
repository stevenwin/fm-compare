let async = require('async');

function test(callback) {
  async.parallel({
    func1: function(cb) {
      cb(null, { foo: 'bar' });
    },
    func2: function(cb) {
      async.waterfall([
        function(cb2) {
          cb2(null, 'a');
        },
        function(prev, cb2) {
          cb2(null, 'b');
        }
      ], function(err, result) {
        cb(err, result);
      });
    }
  }, function(err, results) {
    callback(err, results);
  });
}

test(function(err, result) {
  console.log('callback:', err, result);
});