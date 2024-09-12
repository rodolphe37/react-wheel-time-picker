[![npm](https://img.shields.io/npm/v/react-wheel-time-picker)](https://www.npmjs.com/package/react-wheel-time-picker) ![downloads](https://img.shields.io/npm/dt/react-wheel-time-picker?color=blue&logo=npm&logoColor=blue)

# React wheel time picker

![React-wheel-time-picker demo](demo/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f656d6470726f2f696d6167652f75706c6f61642f76313636313234353234392f64656d6f5f62636d7a6d652e676966.gif)

A modern wheel time picker for your React app.

- Full Typescript support
- Dark & Light mode support
- No moment.js needed
- Zero dependencies and lightweight

### Live demo

> To see the live demo:
> [Click here](https://joyful-bonbon-a01897.netlify.app/)

## install

```
npm install react-wheel-time-picker
```

or

```
yarn add react-wheel-time-picker
```

### d.ts declaration

If you have a vite-env.d.ts or other d.ts file in your src folder you can put this

> `declare module 'react-wheel-time-picker'`

It's for finding corresponding type of 'react-wheel-time-picker'.

## Usage

### 24 hours format (light & dark)

![24 hours format](demo/24h_format.png)

```javascript
import React, { useState } from 'react';
import { TimePicker } from 'react-wheel-time-picker';

export default const  App = () => {
    const [value, setValue] = useState('12:00');
    const [isDarkMode, setIsDarkMode] = useState(false);

    const onChange = (timeValue: string) => {
    setValue(timeValue);
    };

   return (
      <div>
        <TimePicker
            label="Start time"
            isDarkMode={isDarkMode}
            onChange={onChange}
            value={value}
        />
      </div>
   );
}
```

### 12 hours format (light & dark)

![12 hours format](demo/12h_format.png)

```js
import React, { useState } from 'react';
import { TimePicker } from 'react-wheel-time-picker';

export default const  MyApp = () => {
    const [value, setValue] = useState('10:00 AM');
    const [isDarkMode, setIsDarkMode] = useState(false);

    const onChange = (timeValue) => {
        setValue(timeValue);
    }

   return (
      <div>
        <TimePicker
            use12Hours
            label="Start time"
            isDarkMode={isDarkMode}
            onChange={onChange}
            value={value}
        />
      </div>
   );
}
```

## API

| Name               | Type                                                     | Default        | Description                                                     |
| ------------------ | -------------------------------------------------------- | -------------- | --------------------------------------------------------------- |
| label              | String (optional)                                        | n/a            | Name of the input.                                              |
| isDarkMode         | Boolean (optional)                                       | n/a            | for dark mode support.                                          |
| value              | String                                                   | n/a            | Current value.                                                  |
| cellHeight         | Number (optional)                                        | 28             | The height of the cell number.                                  |
| placeHolder        | String (optional)                                        | `"Selet_time"` | Time input's placeholder.                                       |
| pickerDefaultValue | String (optional)                                        | `"00:00"`      | The initial value that the picker begin with in the first time. |
| disabled           | Boolean (optional)                                       | `false`        | Whether picker is disabled.                                     |
| isOpen             | Boolean (optional)                                       | `false`        | Whether the time picker should be opened.                       |
| required           | Boolean (optional)                                       | `false`        | Whether time input should be required.                          |
| cancelButtonText   | String (optional)                                        | `"Cancel"`     | Cancel button text content                                      |
| saveButtonText     | String (optional)                                        | `"Save"`       | Save button text content                                        |
| controllers        | Boolean (optional)                                       | `true`         | Whether the buttons should be displayed                         |
| seperator          | Boolean (optional)                                       | `true`         | whether show the colon seperator                                |
| id                 | String (optional)                                        | n/a            | Input time picker id                                            |
| name               | String (optional)                                        | n/a            | Input time picker name                                          |
| use12Hours         | Boolean (optional)                                       | false          | 12 hours display mode                                           |
| inputClassName     | String (optional)                                        | n/a            | Input time picker className                                     |
| popupClassName     | String (optional)                                        | n/a            | time picker popup className                                     |
| onChange           | `(value) => alert ('New time is: ', value)`              | n/a            | Called when select a different value                            |
| onSave             | `(value) => alert ('Time saved is: ', value)` (optional) | n/a            | When the user clicks on save button                             |
| onClose            | `() => alert('Clock closed')` (optional)                 | n/a            | When the user clicks on cancel button                           |
| onAmPmChange       | `(value) => alert('Am/Pm changed : value')` (optional)   | n/a            | called when select an am/pm value                               |
| onOpen             | `() => alert('time picker opened')` (optional)           | n/a            | called when time picker is opened                               |

## Contributions Welcome!

```shell
git clone https://github.com/rodolphe37/react-wheel-time-picker
```

## License

The ISC License.
