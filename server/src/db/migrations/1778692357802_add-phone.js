/* eslint-disable camelcase */
exports.up = (pgm) => {
  pgm.addColumn('users', {
    phone: {
      type: 'VARCHAR(20)',
    },
  });
};

exports.down = (pgm) => {
  pgm.dropColumn('users', 'phone');
};