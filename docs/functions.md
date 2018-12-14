# Class

## `MassUnit`

Class representing a mass unit.

### `constructor()`

### `weight: *`

### `floor(): Object`

Round weight down.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `ceil(): Object`

Round weight up.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `round(digits: number): Object`

Round weight.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| digits | number | optional: true, default: 0 |

### `toFixed(digits: number): string`

The toFixed() method formats a number using fixed-point notation.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| digits | number | optional: true, default: 0 | Optional. The number of digits to appear after the decimal point; this may be a value between 0 and 20, inclusive, and implementations may optionally support a larger range of values. If this argument is omitted, it is treated as 0. |

### `add(weight: Ounces|Pounds|number|string): Object`

Add weight to current object.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| weight | Ounces|Pounds|number|string |  | Weight to add. |

### `subtract(weight: Ounces|Pounds|number|string): Object`

Subtract weight to current object.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| weight | Ounces|Pounds|number|string |  | Weight to subtract. |

### `isSame(weight: Ounces|Pounds|number|string): boolean`

Check if current object value is same as given weight.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| weight | Ounces|Pounds|number|string |  | Weight to compare. |

### `isNotSame(weight: Ounces|Pounds|number|string): boolean`

Check if current object value is not same as given weight.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| weight | Ounces|Pounds|number|string |  | Weight to compare. |

### `isHeavier(weight: Ounces|Pounds|number|string): boolean`

Check if current mass is heavier than a given weight.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| weight | Ounces|Pounds|number|string |  | Weight to compare. |

### `isLighter(weight: Ounces|Pounds|number|string): boolean`

Check if current mass is lighter than a given weight.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| weight | Ounces|Pounds|number|string |  | Weight to compare. |

### `isEmpty(): boolean`

Check if current object is empty.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `Ounces`

Class representing ounce mass units.

### `getValue(weight: Ounces|Pounds|number|string): number`

Get value from variable.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| weight | Ounces|Pounds|number|string |  | Variable to extract weight from. |

### `parse(text: string|number): Ounces`

Parse text for weight.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| text | string|number |  | Text to parse for weight. |

### `parseSingleUnit(text: string|number, unitType: Ounces|Pounds|string): Ounces`

Parse text for single unit weight.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| text | string|number |  | Text to parse for single unit weight. |
| unitType | Ounces|Pounds|string |  | Default unit type if no signifier is found. |

### `parseDualUnit(text: string|number, splitAt: number): Ounces`

Parse text for weight.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| text | string|number |  | Text to parse for weight. |
| splitAt | number |  | Index to split string. |

### `toPounds(): Pounds`

Convert ounces to pounds.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `toString(spaces: boolean, roundTo: number): string`

Convert weight to text.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| spaces | boolean | nullable: undefined, optional: true, default: true |
| roundTo | number | nullable: undefined, optional: true, default: 0 |

## `Pounds`

Class representing pound mass units.

### `getValue(weight: Ounces|Pounds|number|string): number`

Get value from variable.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| weight | Ounces|Pounds|number|string |  | Variable to extract weight from. |

### `parse(text: string|number): Pounds`

Parse text for weight.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| text | string|number |  | Text to parse for weight. |

### `parseSingleUnit(text: string|number, unitType: Ounces|Pounds|string): Ounces`

Parse text for single unit weight.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| text | string|number |  | Text to parse for single unit weight. |
| unitType | Ounces|Pounds|string |  | Default unit type if no signifier is found. |

### `parseDualUnit(text: string|number, splitAt: string, outOfOrder: boolean): Pounds`

Parse text for weight.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| text | string|number |  | Text to parse for weight. |
| splitAt | string |  |
| outOfOrder | boolean |  | Ounces before pounds. |

### `toOunces(): Ounces`

Convert pounds to ounces.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `toString(spaces: boolean, roundTo: number): string`

Convert weight to text.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| spaces | boolean | nullable: undefined, optional: true, default: true |
| roundTo | number | nullable: undefined, optional: true, default: 0 |

# Function