# Konum

[![npm version](https://badge.fury.io/js/konum.svg)](https://badge.fury.io/js/konum)

![konum](https://user-images.githubusercontent.com/10114716/196001630-56f438ed-2e09-4e9f-872d-628a2ee3e238.gif)

Konum (means location in Turkish) is a primary browser location provider for React.

## Installation

```bash
yarn add konum
#or
npm i konum
```

## Usage

```tsx
import { useKonum } from "konum";

const { data, isAllowed, error } = useKonum();
```

## Props

| Props         | Type    | Description                                       |
| ------------- | ------- | ------------------------------------------------- |
| **data**      | object  | It returns two attributes longitude and latitude. |
| **isAllowed** | boolean | It changes based on user's allow.                 |
| **error**     | string  | It returns error message                          |

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
