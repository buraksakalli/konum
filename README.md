# Konum

![konum](https://user-images.githubusercontent.com/10114716/165154314-647d2a3a-2aef-41d5-b751-0a73d0d6a941.png)

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
