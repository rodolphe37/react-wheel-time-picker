[![npm](https://img.shields.io/npm/v/react-wheel-time-picker)](https://www.npmjs.com/package/react-wheel-time-picker) ![downloads](https://img.shields.io/npm/dt/react-wheel-time-picker?color=blue&logo=npm&logoColor=blue)

# React wheel time picker

![React-wheel-time-picker demo](demo/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f656d6470726f2f696d6167652f75706c6f61642f76313636313234353234392f64656d6f5f62636d7a6d652e676966.gif)

>This package is inspired by an old javascript package (with a few bugs, probably due to the age of the package or incorrect implementation at the outset). [React ios time picker](https://github.com/MEddarhri/>react-wheel-time-picker)

A modern wheel time picker for your React app.

- Full Typescript support
- Dark & Light mode support
- No moment.js needed
- Zero dependencies and lightweight

## install

```
npm install react-wheel-time-picker
```
or 
```
yarn add react-wheel-time-picker
```

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
            onChange={onChangehours}
            value={hourValue}
        />
      </div>
   );
}
```

## API

| Name               | Type                                          | Default        | Description                                                     |
| ------------------ | --------------------------------------------- | -------------- | --------------------------------------------------------------- |
| value              | String                                        | n/a            | Current value.                                                  |
| cellHeight         | Number                                        | 28             | The height of the cell number.                                  |
| placeHolder        | String                                        | `"Selet_time"` | Time input's placeholder.                                       |
| pickerDefaultValue | String                                        | `"00:00"`      | The initial value that the picker begin with in the first time. |
| disabled           | Boolean                                       | `false`        | Whether picker is disabled.                                     |
| isOpen             | Boolean                                       | `false`        | Whether the time picker should be opened.                       |
| required           | Boolean                                       | `false`        | Whether time input should be required.                          |
| cancelButtonText   | String                                        | `"Cancel"`     | Cancel button text content                                      |
| saveButtonText     | String                                        | `"Save"`       | Save button text content                                        |
| controllers        | Boolean                                       | `true`         | Whether the buttons should be displayed                         |
| seperator          | Boolean                                       | `true`         | whether show the colon seperator                                |
| id                 | String                                        | n/a            | Input time picker id                                            |
| name               | String                                        | n/a            | Input time picker name                                          |
| use12Hours         | Boolean                                       | false          | 12 hours display mode                                           |
| inputClassName     | String                                        | n/a            | Input time picker className                                     |
| popupClassName     | String                                        | n/a            | time picker popup className                                     |
| onChange           | `(value) => alert ('New time is: ', value)`   | n/a            | Called when select a different value                            |
| onSave             | `(value) => alert ('Time saved is: ', value)` | n/a            | When the user clicks on save button                             |
| onClose            | `() => alert('Clock closed')`                 | n/a            | When the user clicks on cancel button                           |
| onAmPmChange       | `(value) => alert('Am/Pm changed : value')`   | n/a            | called when select an am/pm value                               |
| onOpen             | `() => alert('time picker opened')`           | n/a            | called when time picker is opened                               |

## Contributions Welcome!

```shell
git clone https://github.com/rodolphe37/react-wheel-time-picker
```

## License

The MIT License.
