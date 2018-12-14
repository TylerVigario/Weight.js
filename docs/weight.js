<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [Ounces][1]
    -   [getValue][2]
        -   [Parameters][3]
    -   [toPounds][4]
    -   [toString][5]
        -   [Parameters][6]
    -   [parse][7]
        -   [Parameters][8]
    -   [parseSingleUnit][9]
        -   [Parameters][10]
    -   [parseDualUnit][11]
        -   [Parameters][12]
-   [Ounces][13]
    -   [getValue][14]
        -   [Parameters][15]
    -   [toPounds][16]
    -   [toString][17]
        -   [Parameters][18]
    -   [parse][19]
        -   [Parameters][20]
    -   [parseSingleUnit][21]
        -   [Parameters][22]
    -   [parseDualUnit][23]
        -   [Parameters][24]
-   [MassUnit][25]
    -   [value][26]
    -   [floor][27]
    -   [ceil][28]
    -   [round][29]
        -   [Parameters][30]
    -   [toFixed][31]
        -   [Parameters][32]
    -   [add][33]
        -   [Parameters][34]
    -   [subtract][35]
        -   [Parameters][36]
    -   [isSame][37]
        -   [Parameters][38]
    -   [isNotSame][39]
        -   [Parameters][40]
    -   [isHeavier][41]
        -   [Parameters][42]
    -   [isLighter][43]
        -   [Parameters][44]
    -   [isEmpty][45]
-   [MassUnit][46]
    -   [Parameters][47]
    -   [value][48]
    -   [floor][49]
    -   [ceil][50]
    -   [round][51]
        -   [Parameters][52]
    -   [toFixed][53]
        -   [Parameters][54]
    -   [add][55]
        -   [Parameters][56]
    -   [subtract][57]
        -   [Parameters][58]
    -   [isSame][59]
        -   [Parameters][60]
    -   [isNotSame][61]
        -   [Parameters][62]
    -   [isHeavier][63]
        -   [Parameters][64]
    -   [isLighter][65]
        -   [Parameters][66]
    -   [isEmpty][67]
-   [MassUnit][68]
    -   [Parameters][69]
    -   [value][70]
    -   [floor][71]
    -   [ceil][72]
    -   [round][73]
        -   [Parameters][74]
    -   [toFixed][75]
        -   [Parameters][76]
    -   [add][77]
        -   [Parameters][78]
    -   [subtract][79]
        -   [Parameters][80]
    -   [isSame][81]
        -   [Parameters][82]
    -   [isNotSame][83]
        -   [Parameters][84]
    -   [isHeavier][85]
        -   [Parameters][86]
    -   [isLighter][87]
        -   [Parameters][88]
    -   [isEmpty][89]
-   [MassUnit][90]
    -   [value][91]
    -   [floor][92]
    -   [ceil][93]
    -   [round][94]
        -   [Parameters][95]
    -   [toFixed][96]
        -   [Parameters][97]
    -   [add][98]
        -   [Parameters][99]
    -   [subtract][100]
        -   [Parameters][101]
    -   [isSame][102]
        -   [Parameters][103]
    -   [isNotSame][104]
        -   [Parameters][105]
    -   [isHeavier][106]
        -   [Parameters][107]
    -   [isLighter][108]
        -   [Parameters][109]
    -   [isEmpty][110]
-   [Pounds][111]
    -   [getValue][112]
        -   [Parameters][113]
    -   [toOunces][114]
    -   [toString][115]
        -   [Parameters][116]
    -   [parse][117]
        -   [Parameters][118]
    -   [parseSingleUnit][119]
        -   [Parameters][120]
    -   [parseDualUnit][121]
        -   [Parameters][122]

## Ounces

Weight.js

**Meta**

-   **version**: 1.4.3
-   **author**: Tyler Vigario (MeekLogic)
-   **license**: GPL-3.0-only

### getValue

Get value from variable.

#### Parameters

-   `weight` **([Ounces][123] \| [Pounds][124] \| [number][125] \| [string][126])** Variable to extract weight from.

Returns **[number][125]** 

### toPounds

Convert ounces to pounds.

Returns **[Pounds][124]** Pounds object.

### toString

Convert weight to text.

#### Parameters

-   `spaces`   (optional, default `true`)
-   `roundTo`   (optional, default `0`)

Returns **[string][126]** Formatted weight.

### parse

Parse text for weight.

#### Parameters

-   `text` **([string][126] \| [number][125])** Text to parse for weight.

Returns **[Ounces][123]** Ounces object.

### parseSingleUnit

Parse text for single unit weight.

#### Parameters

-   `text` **([string][126] \| [number][125])** Text to parse for single unit weight.
-   `unitType` **([Ounces][123] \| [Pounds][124] \| [string][126])** Default unit type if no signifier is found. (optional, default `Ounces`)

Returns **[Ounces][123]** Ounces object.

### parseDualUnit

Parse text for weight.

#### Parameters

-   `text` **([string][126] \| [number][125])** Text to parse for weight.
-   `splitAt` **[number][125]** Index to split string.
-   `outOfOrder`   (optional, default `false`)

Returns **[Ounces][123]** Ounces object.

## Ounces

**Extends MassUnit**

Class representing ounce mass units.

### getValue

Get value from variable.

#### Parameters

-   `weight` **([Ounces][123] \| [Pounds][124] \| [number][125] \| [string][126])** Variable to extract weight from.

Returns **[number][125]** 

### toPounds

Convert ounces to pounds.

Returns **[Pounds][124]** Pounds object.

### toString

Convert weight to text.

#### Parameters

-   `spaces`   (optional, default `true`)
-   `roundTo`   (optional, default `0`)

Returns **[string][126]** Formatted weight.

### parse

Parse text for weight.

#### Parameters

-   `text` **([string][126] \| [number][125])** Text to parse for weight.

Returns **[Ounces][123]** Ounces object.

### parseSingleUnit

Parse text for single unit weight.

#### Parameters

-   `text` **([string][126] \| [number][125])** Text to parse for single unit weight.
-   `unitType` **([Ounces][123] \| [Pounds][124] \| [string][126])** Default unit type if no signifier is found. (optional, default `Ounces`)

Returns **[Ounces][123]** Ounces object.

### parseDualUnit

Parse text for weight.

#### Parameters

-   `text` **([string][126] \| [number][125])** Text to parse for weight.
-   `splitAt` **[number][125]** Index to split string.
-   `outOfOrder`   (optional, default `false`)

Returns **[Ounces][123]** Ounces object.

## MassUnit

Ounce mass unit.

**Meta**

-   **version**: 1.4.3
-   **author**: Tyler Vigario (MeekLogic)
-   **license**: GPL-3.0-only

### value

Return weight value.

Type: [number][125]

### floor

Round weight down.

Returns **[Object][127]** 

### ceil

Round weight up.

Returns **[Object][127]** 

### round

Round weight.

#### Parameters

-   `digits` **[number][125]**  (optional, default `0`)

Returns **[Object][127]** 

### toFixed

The toFixed() method formats a number using fixed-point notation.

#### Parameters

-   `digits` **[number][125]** Optional. The number of digits to appear after the decimal point; this may be a value between 0 and 20, inclusive, and implementations may optionally support a larger range of values. If this argument is omitted, it is treated as 0. (optional, default `0`)

Returns **[string][126]** A string representing the given number using fixed-point notation.

### add

Add weight to current object.

#### Parameters

-   `weight` **([Ounces][123] \| [Pounds][124] \| [number][125] \| [string][126])** Weight to add.

Returns **[Object][127]** Returns current object.

### subtract

Subtract weight to current object.

#### Parameters

-   `weight` **([Ounces][123] \| [Pounds][124] \| [number][125] \| [string][126])** Weight to subtract.

Returns **[Object][127]** Returns current object.

### isSame

Check if current object value is same as given weight.

#### Parameters

-   `weight` **([Ounces][123] \| [Pounds][124] \| [number][125] \| [string][126])** Weight to compare.

Returns **[boolean][128]** True if same or false is not.

### isNotSame

Check if current object value is not same as given weight.

#### Parameters

-   `weight` **([Ounces][123] \| [Pounds][124] \| [number][125] \| [string][126])** Weight to compare.

Returns **[boolean][128]** False if same or true if not.

### isHeavier

Check if current mass is heavier than a given weight.

#### Parameters

-   `weight` **([Ounces][123] \| [Pounds][124] \| [number][125] \| [string][126])** Weight to compare.

Returns **[boolean][128]** True if current object is heavier or false if not.

### isLighter

Check if current mass is lighter than a given weight.

#### Parameters

-   `weight` **([Ounces][123] \| [Pounds][124] \| [number][125] \| [string][126])** Weight to compare.

Returns **[boolean][128]** True if current object is lighter or false if not.

### isEmpty

Check if current object is empty.

Returns **[boolean][128]** True if current object is empty or false if not.

## MassUnit

Imperial mass unit.

### Parameters

-   `weight`   (optional, default `0`)

**Meta**

-   **version**: 1.4.3
-   **author**: Tyler Vigario (MeekLogic)
-   **license**: GPL-3.0-only

### value

Return weight value.

Type: [number][125]

### floor

Round weight down.

Returns **[Object][127]** 

### ceil

Round weight up.

Returns **[Object][127]** 

### round

Round weight.

#### Parameters

-   `digits` **[number][125]**  (optional, default `0`)

Returns **[Object][127]** 

### toFixed

The toFixed() method formats a number using fixed-point notation.

#### Parameters

-   `digits` **[number][125]** Optional. The number of digits to appear after the decimal point; this may be a value between 0 and 20, inclusive, and implementations may optionally support a larger range of values. If this argument is omitted, it is treated as 0. (optional, default `0`)

Returns **[string][126]** A string representing the given number using fixed-point notation.

### add

Add weight to current object.

#### Parameters

-   `weight` **([Ounces][123] \| [Pounds][124] \| [number][125] \| [string][126])** Weight to add.

Returns **[Object][127]** Returns current object.

### subtract

Subtract weight to current object.

#### Parameters

-   `weight` **([Ounces][123] \| [Pounds][124] \| [number][125] \| [string][126])** Weight to subtract.

Returns **[Object][127]** Returns current object.

### isSame

Check if current object value is same as given weight.

#### Parameters

-   `weight` **([Ounces][123] \| [Pounds][124] \| [number][125] \| [string][126])** Weight to compare.

Returns **[boolean][128]** True if same or false is not.

### isNotSame

Check if current object value is not same as given weight.

#### Parameters

-   `weight` **([Ounces][123] \| [Pounds][124] \| [number][125] \| [string][126])** Weight to compare.

Returns **[boolean][128]** False if same or true if not.

### isHeavier

Check if current mass is heavier than a given weight.

#### Parameters

-   `weight` **([Ounces][123] \| [Pounds][124] \| [number][125] \| [string][126])** Weight to compare.

Returns **[boolean][128]** True if current object is heavier or false if not.

### isLighter

Check if current mass is lighter than a given weight.

#### Parameters

-   `weight` **([Ounces][123] \| [Pounds][124] \| [number][125] \| [string][126])** Weight to compare.

Returns **[boolean][128]** True if current object is lighter or false if not.

### isEmpty

Check if current object is empty.

Returns **[boolean][128]** True if current object is empty or false if not.

## MassUnit

Class representing a mass unit.

### Parameters

-   `weight` **([Ounces][123] \| [Pounds][124] \| [number][125] \| [string][126])**  (optional, default `0`)

### value

Return weight value.

Type: [number][125]

### floor

Round weight down.

Returns **[Object][127]** 

### ceil

Round weight up.

Returns **[Object][127]** 

### round

Round weight.

#### Parameters

-   `digits` **[number][125]**  (optional, default `0`)

Returns **[Object][127]** 

### toFixed

The toFixed() method formats a number using fixed-point notation.

#### Parameters

-   `digits` **[number][125]** Optional. The number of digits to appear after the decimal point; this may be a value between 0 and 20, inclusive, and implementations may optionally support a larger range of values. If this argument is omitted, it is treated as 0. (optional, default `0`)

Returns **[string][126]** A string representing the given number using fixed-point notation.

### add

Add weight to current object.

#### Parameters

-   `weight` **([Ounces][123] \| [Pounds][124] \| [number][125] \| [string][126])** Weight to add.

Returns **[Object][127]** Returns current object.

### subtract

Subtract weight to current object.

#### Parameters

-   `weight` **([Ounces][123] \| [Pounds][124] \| [number][125] \| [string][126])** Weight to subtract.

Returns **[Object][127]** Returns current object.

### isSame

Check if current object value is same as given weight.

#### Parameters

-   `weight` **([Ounces][123] \| [Pounds][124] \| [number][125] \| [string][126])** Weight to compare.

Returns **[boolean][128]** True if same or false is not.

### isNotSame

Check if current object value is not same as given weight.

#### Parameters

-   `weight` **([Ounces][123] \| [Pounds][124] \| [number][125] \| [string][126])** Weight to compare.

Returns **[boolean][128]** False if same or true if not.

### isHeavier

Check if current mass is heavier than a given weight.

#### Parameters

-   `weight` **([Ounces][123] \| [Pounds][124] \| [number][125] \| [string][126])** Weight to compare.

Returns **[boolean][128]** True if current object is heavier or false if not.

### isLighter

Check if current mass is lighter than a given weight.

#### Parameters

-   `weight` **([Ounces][123] \| [Pounds][124] \| [number][125] \| [string][126])** Weight to compare.

Returns **[boolean][128]** True if current object is lighter or false if not.

### isEmpty

Check if current object is empty.

Returns **[boolean][128]** True if current object is empty or false if not.

## MassUnit

Pound mass unit.

**Meta**

-   **version**: 1.4.3
-   **author**: Tyler Vigario (MeekLogic)
-   **license**: GPL-3.0-only

### value

Return weight value.

Type: [number][125]

### floor

Round weight down.

Returns **[Object][127]** 

### ceil

Round weight up.

Returns **[Object][127]** 

### round

Round weight.

#### Parameters

-   `digits` **[number][125]**  (optional, default `0`)

Returns **[Object][127]** 

### toFixed

The toFixed() method formats a number using fixed-point notation.

#### Parameters

-   `digits` **[number][125]** Optional. The number of digits to appear after the decimal point; this may be a value between 0 and 20, inclusive, and implementations may optionally support a larger range of values. If this argument is omitted, it is treated as 0. (optional, default `0`)

Returns **[string][126]** A string representing the given number using fixed-point notation.

### add

Add weight to current object.

#### Parameters

-   `weight` **([Ounces][123] \| [Pounds][124] \| [number][125] \| [string][126])** Weight to add.

Returns **[Object][127]** Returns current object.

### subtract

Subtract weight to current object.

#### Parameters

-   `weight` **([Ounces][123] \| [Pounds][124] \| [number][125] \| [string][126])** Weight to subtract.

Returns **[Object][127]** Returns current object.

### isSame

Check if current object value is same as given weight.

#### Parameters

-   `weight` **([Ounces][123] \| [Pounds][124] \| [number][125] \| [string][126])** Weight to compare.

Returns **[boolean][128]** True if same or false is not.

### isNotSame

Check if current object value is not same as given weight.

#### Parameters

-   `weight` **([Ounces][123] \| [Pounds][124] \| [number][125] \| [string][126])** Weight to compare.

Returns **[boolean][128]** False if same or true if not.

### isHeavier

Check if current mass is heavier than a given weight.

#### Parameters

-   `weight` **([Ounces][123] \| [Pounds][124] \| [number][125] \| [string][126])** Weight to compare.

Returns **[boolean][128]** True if current object is heavier or false if not.

### isLighter

Check if current mass is lighter than a given weight.

#### Parameters

-   `weight` **([Ounces][123] \| [Pounds][124] \| [number][125] \| [string][126])** Weight to compare.

Returns **[boolean][128]** True if current object is lighter or false if not.

### isEmpty

Check if current object is empty.

Returns **[boolean][128]** True if current object is empty or false if not.

## Pounds

**Extends MassUnit**

Class representing pound mass units.

### getValue

Get value from variable.

#### Parameters

-   `weight` **([Ounces][123] \| [Pounds][124] \| [number][125] \| [string][126])** Variable to extract weight from.

Returns **[number][125]** 

### toOunces

Convert pounds to ounces.

Returns **[Ounces][123]** Ounces object.

### toString

Convert weight to text.

#### Parameters

-   `spaces`   (optional, default `true`)
-   `roundTo`   (optional, default `0`)

Returns **[string][126]** Formatted weight.

### parse

Parse text for weight.

#### Parameters

-   `text` **([string][126] \| [number][125])** Text to parse for weight.

Returns **[Pounds][124]** Pounds object.

### parseSingleUnit

Parse text for single unit weight.

#### Parameters

-   `text` **([string][126] \| [number][125])** Text to parse for single unit weight.
-   `unitType` **([Ounces][123] \| [Pounds][124] \| [string][126])** Default unit type if no signifier is found. (optional, default `Pounds`)

Returns **[Ounces][123]** Ounces object.

### parseDualUnit

Parse text for weight.

#### Parameters

-   `text` **([string][126] \| [number][125])** Text to parse for weight.
-   `splitAt` **[string][126]** 
-   `outOfOrder` **[boolean][128]** Ounces before pounds. (optional, default `false`)

Returns **[Pounds][124]** Pounds object.

[1]: #ounces

[2]: #getvalue

[3]: #parameters

[4]: #topounds

[5]: #tostring

[6]: #parameters-1

[7]: #parse

[8]: #parameters-2

[9]: #parsesingleunit

[10]: #parameters-3

[11]: #parsedualunit

[12]: #parameters-4

[13]: #ounces-1

[14]: #getvalue-1

[15]: #parameters-5

[16]: #topounds-1

[17]: #tostring-1

[18]: #parameters-6

[19]: #parse-1

[20]: #parameters-7

[21]: #parsesingleunit-1

[22]: #parameters-8

[23]: #parsedualunit-1

[24]: #parameters-9

[25]: #massunit

[26]: #value

[27]: #floor

[28]: #ceil

[29]: #round

[30]: #parameters-10

[31]: #tofixed

[32]: #parameters-11

[33]: #add

[34]: #parameters-12

[35]: #subtract

[36]: #parameters-13

[37]: #issame

[38]: #parameters-14

[39]: #isnotsame

[40]: #parameters-15

[41]: #isheavier

[42]: #parameters-16

[43]: #islighter

[44]: #parameters-17

[45]: #isempty

[46]: #massunit-1

[47]: #parameters-18

[48]: #value-1

[49]: #floor-1

[50]: #ceil-1

[51]: #round-1

[52]: #parameters-19

[53]: #tofixed-1

[54]: #parameters-20

[55]: #add-1

[56]: #parameters-21

[57]: #subtract-1

[58]: #parameters-22

[59]: #issame-1

[60]: #parameters-23

[61]: #isnotsame-1

[62]: #parameters-24

[63]: #isheavier-1

[64]: #parameters-25

[65]: #islighter-1

[66]: #parameters-26

[67]: #isempty-1

[68]: #massunit-2

[69]: #parameters-27

[70]: #value-2

[71]: #floor-2

[72]: #ceil-2

[73]: #round-2

[74]: #parameters-28

[75]: #tofixed-2

[76]: #parameters-29

[77]: #add-2

[78]: #parameters-30

[79]: #subtract-2

[80]: #parameters-31

[81]: #issame-2

[82]: #parameters-32

[83]: #isnotsame-2

[84]: #parameters-33

[85]: #isheavier-2

[86]: #parameters-34

[87]: #islighter-2

[88]: #parameters-35

[89]: #isempty-2

[90]: #massunit-3

[91]: #value-3

[92]: #floor-3

[93]: #ceil-3

[94]: #round-3

[95]: #parameters-36

[96]: #tofixed-3

[97]: #parameters-37

[98]: #add-3

[99]: #parameters-38

[100]: #subtract-3

[101]: #parameters-39

[102]: #issame-3

[103]: #parameters-40

[104]: #isnotsame-3

[105]: #parameters-41

[106]: #isheavier-3

[107]: #parameters-42

[108]: #islighter-3

[109]: #parameters-43

[110]: #isempty-3

[111]: #pounds

[112]: #getvalue-2

[113]: #parameters-44

[114]: #toounces

[115]: #tostring-2

[116]: #parameters-45

[117]: #parse-2

[118]: #parameters-46

[119]: #parsesingleunit-2

[120]: #parameters-47

[121]: #parsedualunit-2

[122]: #parameters-48

[123]: #ounces

[124]: #pounds

[125]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number

[126]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[127]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[128]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean
