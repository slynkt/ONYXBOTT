const BaseEvent = require('../../utils/structures/BaseEvent');

module.exports = class ReadyEvent extends BaseEvent {
  constructor() {
    super('ready');
  }
  async run (client) {
    console.log(client.user.tag + ' has logged in.');
    client.user.setActivity('Prefix : o! | o!help', { status: "dnd" })
      .catch(console.error);
  }
}