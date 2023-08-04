class SnowflakeUtil {
  constructor(epoch = 1_640_995_200_000) {
    this.EPOCH = epoch;
    this.INCREMENT = 0;
  }

  generate(timestamp = Date.now()) {
    if (this.INCREMENT >= 4095) this.INCREMENT = 0;
    return ((timestamp - this.EPOCH) * Math.pow(2, 22) + 1 * Math.pow(2, 17) + this.INCREMENT++).toString();
  }

  deconstruct(snowflake) {
    const snowflakeInt = parseInt(snowflake);
    return {
      timestamp: (snowflakeInt >> 22) + this.EPOCH,
      date: new Date((snowflakeInt >> 22) + this.EPOCH),
      workerId: (snowflakeInt >> 17) & 0b11111,
      processId: (snowflakeInt >> 12) & 0b11111,
      increment: snowflakeInt & 0b111111111111,
      binary: snowflakeInt.toString(2).padStart(64, "0"),
    };
  }

  timestampFrom(snowflake) {
    return (parseInt(snowflake) >> 22) + this.EPOCH;
  }

  setEpoch(epoch) {
    this.EPOCH = epoch;
  }
}

module.exports = SnowflakeUtil;
