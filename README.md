# JoanasToolbox

`npm i @joanas2azz/joanastoolbox.js`

```js
const JoanasToolbox = require('@joanas2azz/joanastoolbox.js'); // Module importation
```

### MasterCardGenerator

The `MasterCardGenerator` class provides a way to generate random MasterCard numbers.

#### Constructor

The `MasterCardGenerator` class does not have any constructor parameters.

#### Methods

##### generate()

```javascript
/**
 * Generates a random MasterCard number.
 * @returns {string} The generated MasterCard number.
 */
generate()
```

Generates a random MasterCard number following the MasterCard number structure.

---

**Example:**

```javascript
const { MasterCardGenerator } = require('@joanas2azz/joanastoolbox.js');

const mastercard = new MasterCardGenerator();
const cardNumber = mastercard.generate();
console.log(cardNumber); // Outputs a random MasterCard number (e.g., "5555555555554444")
```

### SnowflakeUtil

The `SnowflakeUtil` class offers functions to generate and deconstruct snowflake IDs.

#### Constructor

##### SnowflakeUtil(epoch = 1_640_995_200_000)

- `epoch` (optional, default: `1_640_995_200_000`): A custom epoch timestamp in milliseconds. The timestamp at which the snowflake IDs will start.

#### Methods

##### generate([timestamp])

```javascript
/**
 * Generates a unique snowflake ID.
 * @param {number} [timestamp=Date.now()] - Optional custom timestamp in milliseconds.
 * @returns {string} The generated snowflake ID.
 */
generate(timestamp)
```

Generates a snowflake ID based on the provided timestamp or the current time if not specified.

##### deconstruct(snowflake)

```javascript
/**
 * Deconstructs a snowflake ID to its components.
 * @param {string} snowflake - The snowflake ID to deconstruct.
 * @returns {Object} An object containing the deconstructed components of the snowflake.
 */
deconstruct(snowflake)
```

Deconstructs a snowflake ID into its constituent parts, including timestamp, date, worker ID, process ID, and increment.

##### timestampFrom(snowflake)

```javascript
/**
 * Retrieves the timestamp from a snowflake ID.
 * @param {string} snowflake - The snowflake ID to extract the timestamp from.
 * @returns {number} The timestamp extracted from the snowflake.
 */
timestampFrom(snowflake)
```

Extracts and returns the timestamp from a given snowflake ID.

##### setEpoch(epoch)

```javascript
/**
 * Sets a new epoch for generating snowflake IDs.
 * @param {number} epoch - The new epoch timestamp in milliseconds.
 */
setEpoch(epoch)
```

Sets a new epoch timestamp for generating snowflake IDs.

---

**Example:**

```javascript
const { SnowflakeUtil } = require('@joanas2azz/joanastoolbox.js');

const snowflake = new SnowflakeUtil();
snowflake.setEpoch(1_650_000_000_000);
let newSnowflake = snowflake.generate();
console.log(snowflake.deconstruct(newSnowflake)); // Outputs the deconstructed snowflake information
console.log(newSnowflake); // Outputs the new snowflake ID
```

The example code demonstrates how to use the `MasterCardGenerator` class to generate a random MasterCard number and the `SnowflakeUtil` class to generate and deconstruct snowflake IDs. Remember to replace `'../path/to/MasterCardGenerator'` and `'../path/to/SnowflakeUtil'` with the actual paths to your respective classes.